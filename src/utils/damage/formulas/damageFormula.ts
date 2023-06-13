import { ActiveSkill, NewBaseStat } from '@/types/Character'
import { parseScalingValue } from '@/utils'

const damageFormula = (
    baseStats: NewBaseStat,
    skill: ActiveSkill,
    key: string,
    skillLevel: string,
    baseStat: string | string[],
    additiveBonusStat: string | string[],
    multiplicativeBonusStat: string | string[],
    enemyResistances: NewBaseStat,
    damageType: string
) => {
    const { [skillLevel]: value } = skill.data[key]
    // Might as well add All DMG here so it doesn't need to be repeated fifteen quintillion times
    typeof multiplicativeBonusStat === 'string'
        ? (multiplicativeBonusStat = ['All DMG', multiplicativeBonusStat])
        : (multiplicativeBonusStat = ['All DMG', ...multiplicativeBonusStat])
    if (value) {
        const scalingValues = parseScalingValue(value)
        const baseStatValues = Array.isArray(baseStat)
            ? baseStat.map((stat) => baseStats[stat])
            : [baseStats[baseStat]]
        const additiveBonusStatValue = calculateStatValue(
            additiveBonusStat,
            baseStats
        )
        const multiplicativeBonusStatValue = calculateStatValue(
            multiplicativeBonusStat,
            baseStats
        )

        const baseDamage =
            baseStatValues.reduce(
                (acc, statValue, index) =>
                    acc + statValue * (scalingValues[index] / 100),
                0
            ) +
            baseStatValues.reduce((acc, statValue) => acc + statValue, 0) *
                (additiveBonusStatValue / 100)

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
                  (accumulator, statKey) =>
                      accumulator + (baseStats[statKey] || 0),
                  0
              )
            : baseStats[stat] || 0
        : 0
}

export default damageFormula
