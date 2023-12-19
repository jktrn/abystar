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
    characterState: CharacterState | null,
    characterAttributes: CharacterAttributes | null,
    enemyResistances: BaseStat
): DamageResult[] {
    if (!characterState || !characterAttributes) return []

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
                    bonus.applyToTalentScaling(effectiveTalentScaling)
                }
            })

            const talentDamageResults = Object.keys(talent.data)
                .flatMap((key) => {
                    // Checks to see if the aspect's talentScalings have been implemented
                    const aspectTalentScalings = talentScaling[key]
                    if (!aspectTalentScalings) return null

                    if (
                        aspectTalentScalings.minConstellation &&
                        characterState.characterConstellation <
                            aspectTalentScalings.minConstellation
                    )
                        return []

                    const {
                        formulaType,
                        attribute,
                        additiveBonusStat = [],
                        multiplicativeBonusStat = [],
                        critRateBonusStat = [],
                        critDamageBonusStat = [],
                        damageType,
                        outputType,
                    } = aspectTalentScalings

                    let damage
                    switch (formulaType) {
                        case FormulaType.DamageFormula:
                            if (attribute === undefined || damageType === undefined)
                                return []
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
                            if (!attribute || outputType === undefined) return []
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
                            if (outputType === undefined) return []
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
                            break
                        default:
                            break
                    }

                    return damage ? { aspectName: key, damage } : null
                })
                .filter((aspect) => aspect !== null) as DamageResultAspect[]

            return { talentName: talent.name, aspects: talentDamageResults }
        })
        .filter((result) => result.aspects.length > 0)

    return damageResults
}

export default calculateDamage
