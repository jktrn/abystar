import {
    Talent,
    CharacterAttributes,
    FormulaOutputType,
} from '@/interfaces/Character'
import { parseScalingValue, calculateStatValue } from '@/lib'

const genericFormulaWithScaling = (
    characterAttributes: CharacterAttributes,
    talent: Talent,
    key: string,
    talentLevel: number,
    attribute: string[],
    additiveBonusStat: string[],
    multiplicativeBonusStat: string[],
    outputType: FormulaOutputType
) => {
    const { [`Lv${talentLevel}`]: value } = talent.data[key]
    if (value) {
        const scalingValues = parseScalingValue(value)
        const attributeValues = attribute.map((stat) => characterAttributes[stat])
        const additiveBonusStatValue = calculateStatValue(
            additiveBonusStat,
            characterAttributes
        )
        const multiplicativeBonusStatValue =
            calculateStatValue(multiplicativeBonusStat, characterAttributes) + 1

        const baseDamage =
            attributeValues.reduce(
                (acc, statValue, index) => acc + statValue * scalingValues[index],
                0
            ) + additiveBonusStatValue

        const outputValue = baseDamage * multiplicativeBonusStatValue

        return {
            outputValue,
            outputType,
        }
    }
}

export default genericFormulaWithScaling
