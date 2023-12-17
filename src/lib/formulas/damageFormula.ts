import { Talent, CharacterAttributes, BaseStat } from '@/interfaces/Character'
import { parseScalingValue, calculateStatValue, clamp } from '@/lib'

const damageFormula = (
    characterAttributes: CharacterAttributes,
    talent: Talent,
    key: string,
    talentLevel: number,
    attribute: string[],
    additiveBonusStat: string[],
    multiplicativeBonusStat: string[],
    critRateBonusStat: string[],
    critDamageBonusStat: string[],
    enemyResistances: BaseStat,
    damageType: string
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
            calculateStatValue(
                // Might as well add All DMG here so it doesn't need to be repeated fifteen quintillion times
                ['All DMG', ...multiplicativeBonusStat],
                characterAttributes
            ) + 1 // Add 1 because it's a multiplier

        const critRateBonusStatValue = calculateStatValue(
            critRateBonusStat,
            characterAttributes
        )

        const critDamageBonusStatValue = calculateStatValue(
            critDamageBonusStat,
            characterAttributes
        )

        const baseDamage =
            attributeValues.reduce(
                (acc, statValue, index) => acc + statValue * scalingValues[index],
                0
            ) + additiveBonusStatValue

        const nonCritDamage =
            baseDamage *
            multiplicativeBonusStatValue *
            enemyResistances.defenseMultiplier *
            enemyResistances.resistance
        const critDamage =
            baseDamage *
            multiplicativeBonusStatValue *
            (1 + characterAttributes['CRIT DMG'] + critDamageBonusStatValue) *
            enemyResistances.defenseMultiplier *
            enemyResistances.resistance
        const averageDamage =
            baseDamage *
            multiplicativeBonusStatValue *
            (1 +
                clamp(
                    characterAttributes['CRIT Rate'] + critRateBonusStatValue,
                    0,
                    1
                ) *
                    (characterAttributes['CRIT DMG'] + critDamageBonusStatValue)) *
            enemyResistances.defenseMultiplier *
            enemyResistances.resistance

        return {
            nonCritDamage,
            critDamage,
            averageDamage,
            damageType,
        }
    }
}

export default damageFormula
