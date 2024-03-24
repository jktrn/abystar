import {
    BaseStat,
    CharacterState,
    CharacterAttributes,
    DamageResult,
    DamageResultAspect,
    FormulaType,
} from '@/interfaces/Character'

import {
    damageFormula,
    genericFormulaWithScaling,
    genericFormulaWithoutScaling,
} from '@/lib'

function calculateDamage(
    characterState: CharacterState,
    characterAttributes: CharacterAttributes,
    enemyResistances: BaseStat
): DamageResult[] {
    const characterTalentScaling = characterState.character.talentScalings
    if (!characterTalentScaling) return []

    // Deep copy to prevent mutation
    const effectiveTalentScaling = structuredClone(characterTalentScaling)

    const damageResults = characterState.character.talents
        .map((talent, index) => {
            const talentScaling = effectiveTalentScaling[talent.name]
            if (!talentScaling) return { talentName: talent.name, aspects: [] }

            // Applies any changes activeBonuses make to talentScaling
            characterState.characterActiveBonuses.forEach((bonus) => {
                if (
                    bonus.affectsTalentIndex === index &&
                    bonus.applyToTalentScaling
                ) {
                    bonus.applyToTalentScaling(
                        effectiveTalentScaling,
                        bonus.currentStacks
                    )
                }
            })

            const talentDamageResults = Object.keys(talent.data).reduce(
                (accumulator, key) => {
                    const aspectTalentScalings = talentScaling[key]
                    if (!aspectTalentScalings) return accumulator

                    if (
                        aspectTalentScalings.minConstellation &&
                        characterState.characterConstellation <
                            aspectTalentScalings.minConstellation
                    )
                        return accumulator

                    const {
                        formulaType,
                        attribute,
                        additiveBonusStat = [],
                        multiplicativeBonusStat = [],
                        critRateBonusStat = [],
                        critDamageBonusStat = [],
                        damageType,
                        outputType,
                        origin,
                        originMultiplier,
                    } = aspectTalentScalings

                    let damage
                    switch (formulaType) {
                        case FormulaType.DamageFormula:
                            if (attribute === undefined || damageType === undefined)
                                return accumulator
                            damage = damageFormula(
                                characterAttributes,
                                talent,
                                key,
                                characterState.effectiveTalentLevels[index],
                                attribute,
                                additiveBonusStat,
                                multiplicativeBonusStat,
                                critRateBonusStat,
                                critDamageBonusStat,
                                enemyResistances,
                                damageType
                            )
                            break
                        case FormulaType.GenericFormulaWithScaling:
                            if (!attribute || outputType === undefined)
                                return accumulator
                            damage = genericFormulaWithScaling(
                                characterAttributes,
                                talent,
                                key,
                                characterState.effectiveTalentLevels[index],
                                attribute,
                                additiveBonusStat,
                                multiplicativeBonusStat,
                                outputType
                            )
                            break
                        case FormulaType.GenericFormulaWithoutScaling:
                            if (outputType === undefined) return accumulator
                            damage = genericFormulaWithoutScaling(
                                characterAttributes,
                                talent,
                                key,
                                characterState.effectiveTalentLevels[index],
                                additiveBonusStat,
                                multiplicativeBonusStat,
                                outputType
                            )
                            break
                        case FormulaType.ElementalReactionFormula:
                            // TODO: Implement
                            return accumulator
                        default:
                            if (origin && originMultiplier) {
                                const originDamageResult = accumulator.find(
                                    (result) => result.aspectName === origin
                                )
                                if (originDamageResult) {
                                    damage = {
                                        nonCritDamage:
                                            originDamageResult.damage.nonCritDamage *
                                            originMultiplier,
                                        critDamage:
                                            originDamageResult.damage.critDamage *
                                            originMultiplier,
                                        averageDamage:
                                            originDamageResult.damage.averageDamage *
                                            originMultiplier,
                                        damageType:
                                            originDamageResult.damage.damageType,
                                    }
                                }
                            }
                            break
                    }

                    if (damage) {
                        accumulator.push({ aspectName: key, damage })
                    }

                    return accumulator
                },
                [] as DamageResultAspect[]
            )

            return { talentName: talent.name, aspects: talentDamageResults }
        })
        .filter((result) => result.aspects.length > 0)

    return damageResults
}

export default calculateDamage
