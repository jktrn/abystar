import {
    Talent,
    FormulaOutputType,
    CharacterAttributes,
} from '@/interfaces/Character'
import { parseScalingValue, calculateStatValue } from '@/lib'

const genericFormulaWithoutScaling = (
    characterAttributes: CharacterAttributes,
    talent: Talent,
    key: string,
    talentLevel: number,
    additiveBonusStat: string[],
    multiplicativeBonusStat: string[],
    outputType: FormulaOutputType
) => {
    const { [`Lv${talentLevel}`]: value } = talent.data[key]
    if (value) {
        const scalingValue = parseScalingValue(value)[0] * 100
        const additiveBonusStatValue = calculateStatValue(
            additiveBonusStat,
            characterAttributes
        )
        const multiplicativeBonusStatValue =
            calculateStatValue(multiplicativeBonusStat, characterAttributes) + 1

        const outputValue =
            (scalingValue + additiveBonusStatValue) * multiplicativeBonusStatValue

        return {
            outputValue,
            outputType,
        }
    }
}

export default genericFormulaWithoutScaling
