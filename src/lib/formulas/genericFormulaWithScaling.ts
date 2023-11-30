// import { Talent, CharacterAttributes, BaseStat } from '@/interfaces/Character'
// import { parseScalingValue } from '@/lib'

// const genericFormulaWithScaling = (
//     characterAttributes: CharacterAttributes,
//     talent: Talent,
//     key: string,
//     talentLevel: number,
//     attribute: string | string[],
//     additiveBonusStat: string | string[],
//     multiplicativeBonusStat: string | string[],
//     enemyResistances: BaseStat,
//     damageType: string
// ) => {
//     const { [`Lv${talentLevel}`]: value } = talent.data[key]
//     if (value) {
//         const scalingValues = parseScalingValue(value)
//         const attributeValues = Array.isArray(attribute)
//             ? attribute.map((stat) => characterAttributes[stat])
//             : [characterAttributes[attribute]]
//         const additiveBonusStatValue = calculateStatValue(
//             additiveBonusStat,
//             characterAttributes
//         )
//         const multiplicativeBonusStatValue = calculateStatValue(
//             multiplicativeBonusStat,
//             characterAttributes
//         )

//         const baseDamage =
//         attributeValues.reduce(
//             (acc, statValue, index) =>
//                 acc + statValue * (scalingValues[index] / 100),
//             0
//         ) + additiveBonusStatValue

//         const outputValue = baseDamage * (1 + multiplicativeBonusStatValue / 100)

//         return {
//             outputValue,
//             outputType,
//         }
//     }
// }

// function calculateStatValue(
//     stat: string | string[],
//     baseStats: NewBaseStat
// ): number {
//     return Array.isArray(stat) && stat[0] !== ''
//         ? Array.isArray(stat)
//             ? stat.reduce(
//                   (accumulator, statKey) => accumulator + (baseStats[statKey] || 0),
//                   0
//               )
//             : baseStats[stat] || 0
//         : 0
// }

// export default genericFormulaWithScaling
