import { ActiveSkill, NewBaseStat } from '@/types/Character'
import { parseScalingValue } from '@/utils'

const calculateDamageFormula = (
    baseStats: NewBaseStat,
    skill: ActiveSkill,
    key: string,
    skillLevel: string,
    baseStat: string,
    additiveBonusStat: string | string[],
    multiplicativeBonusStat: string | string[],
    enemyResistances: NewBaseStat,
    damageType: string
) => {
    const { [skillLevel]: value } = skill.data[key]
    if (value) {
        const scalingValue = parseScalingValue(value)
        const baseStatValue = baseStats[baseStat]
        const additiveBonusStatValue = calculateStatValue(
            additiveBonusStat,
            baseStats
        )
        const multiplicativeBonusStatValue = calculateStatValue(
            multiplicativeBonusStat,
            baseStats
        )

        const baseDamage =
            baseStatValue * (scalingValue / 100) +
            baseStatValue * (additiveBonusStatValue / 100)

        const nonCritDamage =
            baseDamage *
            (1 + multiplicativeBonusStatValue / 100) *
            (enemyResistances.defenseMultiplier / 100) *
            (enemyResistances.resistance / 100)
        const critDamage =
            baseDamage *
            (1 + multiplicativeBonusStatValue / 100) *
            (1 + baseStats['CRIT DMG'] / 100) *
            (enemyResistances.defenseMultiplier / 100) *
            (enemyResistances.resistance / 100)
        const averageDamage =
            baseDamage *
            (1 + multiplicativeBonusStatValue / 100) *
            (1 +
                clamp(baseStats['CRIT Rate'] / 100, 0, 1) *
                    (baseStats['CRIT DMG'] / 100)) *
            (enemyResistances.defenseMultiplier / 100) *
            (enemyResistances.resistance / 100)
        return {
            nonCritDamage,
            critDamage,
            averageDamage,
            damageType,
        }
    }
}

// Clamping CRIT Rate between 0 and 1 to prevent negative damage and greater average damage than crit damage
function clamp(number: number, min: number, max: number) {
    return Math.max(min, Math.min(number, max))
}

function calculateStatValue(
    stat: string | string[],
    baseStats: NewBaseStat
): number {
    return Array.isArray(stat) && stat[0] !== ''
        ? Array.isArray(stat)
            ? stat.reduce(
                  (accumulator, statKey) => accumulator + baseStats[statKey],
                  0
              )
            : baseStats[stat]
        : 0
}

export default calculateDamageFormula
