import { ActiveSkill, NewBaseStat } from '@/types/Character'
import { parseScalingValue } from '@/utils'

const calculateDamageFormula = (
    baseStats: NewBaseStat,
    skill: ActiveSkill,
    key: string,
    skillLevel: string,
    baseStat: string,
    additiveBonusStat: string[],
    multiplicativeBonusStat: string[]
) => {
    let damage = 0
    const { [skillLevel]: value } = skill.data[key]
    if (value) {
        // Apply value to damage calculation
        const scalingValue = parseScalingValue(value)
        const baseDMG = baseStats[baseStat] * (scalingValue / 100)
        // Calculate additive bonus
        let additiveBonus = 0
        for (const stat of additiveBonusStat) {
            additiveBonus += baseStats[stat] ?? 0
        }
        // Calculate multiplicative bonus
        let multiplicativeBonus = 1
        for (const stat of multiplicativeBonusStat) {
            const bonus = baseStats[stat]
            if (bonus) {
                multiplicativeBonus *= 1 + bonus
            }
        }

        // Apply bonuses to damage calculation
        damage = baseDMG * (1 + additiveBonus) * multiplicativeBonus
    }
    return damage
}

export default calculateDamageFormula
