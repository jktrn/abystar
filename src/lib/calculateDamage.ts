import {
    BaseStat,
    CharacterState,
    CharacterAttributes,
    FormulaType,
} from '@/interfaces/Character'

import { damageFormula } from '@/lib'

function calculateDamage(
    characterState: CharacterState | null,
    characterAttributes: CharacterAttributes | null,
    enemyResistances: BaseStat
) {
    if (!characterState || !characterAttributes) return []

    const characterTalentScaling = characterState.character.talentScalings
    if (!characterTalentScaling) return []

    const damageResults = characterState.character.talents.map((talent, index) => {
        const talentScaling = characterTalentScaling[talent.name]
        if (!talentScaling) return []

        // To restore the original talent scaling after applying bonuses (e.g. infusions)
        const originalTalentScaling = JSON.parse(JSON.stringify(talentScaling))

        const talentDamageResults = Object.keys(talent.data).flatMap((key) => {
            // Restores the original talent scaling
            characterState.character.talentScalings = JSON.parse(
                JSON.stringify(originalTalentScaling)
            )

            // Applies any changes activeBonuses make to talentScaling
            characterState.characterActiveBonuses.forEach((bonus) => {
                if (
                    bonus.affectsTalentIndex === index &&
                    bonus.applyToTalentScaling
                ) {
                    bonus.applyToTalentScaling(
                        characterState.character.talentScalings
                    )
                }
            })

            // Checks to see if the aspect's talentScalings have been implemented
            const aspectTalentScalings = talentScaling[key]
            if (!aspectTalentScalings) return []

            console.log(aspectTalentScalings)

            if (
                aspectTalentScalings.minConstellation &&
                characterState.characterConstellation <
                    aspectTalentScalings.minConstellation
            )
                return []

            const {
                formulaType,
                attribute,
                additiveBonusStat = '',
                multiplicativeBonusStat = '',
                damageType,
                outputType,
            } = aspectTalentScalings

            let damage
            switch (formulaType) {
                case FormulaType.DamageFormula:
                    if (!attribute || !damageType) return []
                    damage = damageFormula(
                        characterAttributes,
                        talent,
                        key,
                        characterState.effectiveTalentLevels[index],
                        Array.isArray(attribute) ? attribute : [attribute],
                        Array.isArray(additiveBonusStat)
                            ? additiveBonusStat
                            : [additiveBonusStat],
                        Array.isArray(multiplicativeBonusStat)
                            ? multiplicativeBonusStat
                            : [multiplicativeBonusStat],
                        enemyResistances,
                        damageType
                    )
                    break
                // case FormulaType.GenericFormulaWithScaling:
                //     if (!attribute || outputType === undefined) return []
                //     damage = genericFormulaWithScaling(
                //         characterAttributes,
                //         talent,
                //         key,
                //         characterState.effectiveTalentLevels[index],
                //         Array.isArray(attribute) ? attribute : [attribute],
                //         Array.isArray(additiveBonusStat)
                //             ? additiveBonusStat
                //             : [additiveBonusStat],
                //         Array.isArray(multiplicativeBonusStat)
                //             ? multiplicativeBonusStat
                //             : [multiplicativeBonusStat],
                //         outputType
                //     )
                //     break
                // case FormulaType.GenericFormulaWithoutScaling:
                //     if (!attribute || outputType === undefined) return []
                //     damage = genericFormulaWithoutScaling(
                //         characterAttributes,
                //         talent,
                //         key,
                //         Array.isArray(attribute) ? attribute : [attribute],
                //         Array.isArray(additiveBonusStat)
                //             ? additiveBonusStat
                //             : [additiveBonusStat],
                //         Array.isArray(multiplicativeBonusStat)
                //             ? multiplicativeBonusStat
                //             : [multiplicativeBonusStat],
                //         outputType
                //     )
                //     break
                // case FormulaType.ElementalReactionFormula:
                //     // TODO: Implement
                //     break
                default:
                    break
            }

            return [{ aspectName: key, damage }]
        })

        return [{ talentName: talent.name, aspects: talentDamageResults }]
    })

    return damageResults
}

export default calculateDamage
