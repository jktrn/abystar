import { ActiveSkill, NewBaseStat, FormulaOutputType } from '@/types/Character'
import { parseScalingValue } from '@/utils'

const genericFormulaWithoutScaling = (
    baseStats: NewBaseStat,
    skill: ActiveSkill,
    key: string,
    skillLevel: string,
    additiveBonusStat: string | string[],
    multiplicativeBonusStat: string | string[],
    outputType: FormulaOutputType
) => {
    const { [skillLevel]: value } = skill.data[key]
    if (value) {
        const scalingValue = parseScalingValue(value)[0]
        const additiveBonusStatValue = calculateStatValue(
            additiveBonusStat,
            baseStats
        )
        const multiplicativeBonusStatValue = calculateStatValue(
            multiplicativeBonusStat,
            baseStats
        )

        const outputValue =
            (scalingValue + additiveBonusStatValue / 100) *
            (1 + multiplicativeBonusStatValue / 100)

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

export default genericFormulaWithoutScaling
