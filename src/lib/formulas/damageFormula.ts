import { Talent, CharacterAttributes, BaseStat } from '@/interfaces/Character'
import { parseScalingValue } from '@/lib'

const damageFormula = (
    characterAttributes: CharacterAttributes,
    talent: Talent,
    key: string,
    talentLevel: number,
    attribute: string | string[],
    additiveBonusStat: string | string[],
    multiplicativeBonusStat: string | string[],
    enemyResistances: BaseStat,
    damageType: string
) => {
    const { [`Lv${talentLevel}`]: value } = talent.data[key]
    // Might as well add All DMG here so it doesn't need to be repeated fifteen quintillion times
    typeof multiplicativeBonusStat === 'string'
        ? (multiplicativeBonusStat = ['All DMG', multiplicativeBonusStat])
        : (multiplicativeBonusStat = ['All DMG', ...multiplicativeBonusStat])
    if (value) {
        const scalingValues = parseScalingValue(value)
        const attributeValues = Array.isArray(attribute)
            ? attribute.map((stat) => characterAttributes[stat])
            : [characterAttributes[attribute]]
        const additiveBonusStatValue = calculateStatValue(
            additiveBonusStat,
            characterAttributes
        )
        const multiplicativeBonusStatValue = calculateStatValue(
            multiplicativeBonusStat,
            characterAttributes
        )

        const baseDamage =
            attributeValues.reduce(
                (acc, statValue, index) => acc + statValue * scalingValues[index],
                0
            ) + additiveBonusStatValue

        const nonCritDamage =
            baseDamage *
            (1 + multiplicativeBonusStatValue) *
            enemyResistances.defenseMultiplier *
            enemyResistances.resistance
        const critDamage =
            baseDamage *
            (1 + multiplicativeBonusStatValue) *
            (1 + characterAttributes['CRIT DMG']) *
            enemyResistances.defenseMultiplier *
            enemyResistances.resistance
        const averageDamage =
            baseDamage *
            (1 + multiplicativeBonusStatValue) *
            (1 +
                clamp(characterAttributes['CRIT Rate'], 0, 1) *
                    characterAttributes['CRIT DMG']) *
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

// Clamping CRIT Rate between 0 and 1 to prevent negative damage and greater average damage than crit damage
function clamp(number: number, min: number, max: number) {
    return Math.max(min, Math.min(number, max))
}

function calculateStatValue(
    stat: string | string[],
    characterAttributes: CharacterAttributes
): number {
    return Array.isArray(stat) && stat[0] !== ''
        ? Array.isArray(stat)
            ? stat.reduce(
                  (accumulator, statKey) =>
                      accumulator + (characterAttributes[statKey] || 0),
                  0
              )
            : characterAttributes[stat] || 0
        : 0
}

export default damageFormula
