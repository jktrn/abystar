import {
    AbilityScaling,
    FormulaType,
    NewBaseStat,
    Character,
} from '@/types/Character'
import { calculateDamageFormula } from '@/utils'

function calculateDamage(
    baseStats: NewBaseStat,
    abilityScaling: AbilityScaling,
    character: Character,
    skillLevels: string[],
    enemyResistances: NewBaseStat
) {
    const characterAbilityScaling = abilityScaling[character.name]
    if (!characterAbilityScaling) return []

    const damageResults = character.activeSkills.flatMap((skill, index) => {
        const skillAbilityScaling = characterAbilityScaling[skill.name]
        if (!skillAbilityScaling) return []

        const skillDamageResults = Object.keys(skill.data).flatMap((key) => {
            const damageCalculation = skillAbilityScaling[key]
            if (!damageCalculation) return []

            const {
                formulaType,
                baseStat,
                additiveBonusStat = '',
                multiplicativeBonusStat = '',
            } = damageCalculation

            // Calculate damage based on formulaType and stats
            let damage
            switch (formulaType) {
                case FormulaType.DamageFormula:
                    damage = calculateDamageFormula(
                        baseStats,
                        skill,
                        key,
                        skillLevels[index],
                        baseStat,
                        Array.isArray(additiveBonusStat)
                            ? additiveBonusStat
                            : [additiveBonusStat],
                        Array.isArray(multiplicativeBonusStat)
                            ? multiplicativeBonusStat
                            : [multiplicativeBonusStat],
                        enemyResistances
                    )
                    break
                case FormulaType.GenericFormulaWithScaling:
                    // Apply generic formula with scaling
                    break
                case FormulaType.GenericFormulaWithoutScaling:
                    // Apply generic formula without scaling
                    break
                case FormulaType.ElementalReactionFormula:
                    // Apply elemental reaction formula
                    break
                default:
                    break
            }

            return [{ aspectName: key, damage }]
        })

        return [{ skillName: skill.name, aspects: skillDamageResults }]
    })

    return damageResults
}

export default calculateDamage
