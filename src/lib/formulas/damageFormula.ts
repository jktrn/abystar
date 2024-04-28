import {
    Talent,
    CharacterAttributes,
    BaseStat,
    ScalingType,
    DamageType,

} from '@/interfaces/Character'
import { parseScalingValue, calculateStatValue, clamp, calculateDef, calculateRes } from '@/lib'

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
    damageType: DamageType,
    characterLevel: string,
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
                ['All DMG Bonus', ...multiplicativeBonusStat],
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

        const defenseMultiplier = calculateDef(enemyResistances, characterLevel);
        const resistance = calculateRes({enemyResistances}, damageType, {characterAttributes});

        const baseDamage =
            scalingValues.reduce((acc, scaling, index) => {
                const statValue = attributeValues[index] || 0
                return (
                    acc +
                    (scaling.type === ScalingType.Percentage
                        ? statValue * scaling.value
                        : scaling.value)
                )
            }, 0) + additiveBonusStatValue

        const nonCritDamage =
            baseDamage *
            multiplicativeBonusStatValue *
            defenseMultiplier *
            resistance
        const critDamage =
            baseDamage *
            multiplicativeBonusStatValue *
            (1 + characterAttributes['CRIT DMG'] + critDamageBonusStatValue) *
            defenseMultiplier *
            resistance
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
            defenseMultiplier *
            resistance

        return {
            nonCritDamage,
            critDamage,
            averageDamage,
            damageType,
        }
    }
}

export default damageFormula
