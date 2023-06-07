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
        const additiveBonusStatValue = Array.isArray(additiveBonusStat)
            ? additiveBonusStat.reduce(
                  (total, stat) => total + baseStats[stat],
                  0
              )
            : baseStats[additiveBonusStat]
        const multiplicativeBonusStatValue = Array.isArray(
            multiplicativeBonusStat
        )
            ? multiplicativeBonusStat.reduce(
                  (total, stat) => total + baseStats[stat],
                  0
              )
            : baseStats[multiplicativeBonusStat]

        const nonCritDamage =
            (baseStatValue * (scalingValue / 100) +
                baseStatValue * (additiveBonusStatValue / 100)) *
            (1 + multiplicativeBonusStatValue / 100) *
            (enemyResistances.defenseMultiplier / 100) *
            (enemyResistances.resistance / 100)
        const critDamage =
            (baseStatValue * (scalingValue / 100) +
                baseStatValue * (additiveBonusStatValue / 100)) *
            (1 + multiplicativeBonusStatValue / 100) *
            (1 + baseStats['CRIT DMG'] / 100) *
            (enemyResistances.defenseMultiplier / 100) *
            (enemyResistances.resistance / 100)
        const averageDamage = (nonCritDamage + critDamage) / 2
        return {
            nonCritDamage,
            critDamage,
            averageDamage,
            damageType,
        }
    }
}

export default calculateDamageFormula
