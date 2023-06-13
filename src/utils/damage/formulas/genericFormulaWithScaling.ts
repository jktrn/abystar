import { ActiveSkill, FormulaOutputType, NewBaseStat } from '@/types/Character'
import { parseScalingValue } from '@/utils'

const genericFormulaWithScaling = (
    baseStats: NewBaseStat,
    skill: ActiveSkill,
    key: string,
    skillLevel: string,
    baseStat: string | string[],
    additiveBonusStat: string | string[],
    multiplicativeBonusStat: string | string[],
    outputType: FormulaOutputType
) => {
    const { [skillLevel]: value } = skill.data[key]
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

        const outputValue =
            baseDamage * (1 + multiplicativeBonusStatValue / 100)

        return {
            outputValue,
            outputType,
        }
    }
}

const calculateStatValue = (
    stat: string | string[],
    baseStats: NewBaseStat
): number => {
    return Array.isArray(stat) && stat[0] !== ''
        ? Array.isArray(stat)
            ? stat.reduce(
                  (accumulator, statKey) => accumulator + baseStats[statKey],
                  0
              )
            : baseStats[stat]
        : 0
}

export default genericFormulaWithScaling
