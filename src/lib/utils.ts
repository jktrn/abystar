import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import {
    BaseStat,
    CharacterAttributes,
    CharacterState,
    ScalingType,
    TalentScaling,
    TalentScalingData,
} from '@/interfaces/Character'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const compareObjects = (a: any, b: any) => {
    const diff: any = {}
    for (const key in a) {
        if (a[key] !== b[key]) {
            diff[key] = [a[key], b[key]]
        }
    }
    return diff
}

const mergeAndSum = (a: BaseStat, b: BaseStat): BaseStat => {
    let merged: BaseStat = {}
    for (const key in a) {
        merged[key] = (merged[key] || 0) + a[key]
    }
    for (const key in b) {
        merged[key] = (merged[key] || 0) + b[key]
    }
    return merged
}

const parseScalingValue = (scalingValue: string) => {
    const valueMatches = scalingValue.match(/(\d+(\.\d+)?)(%|(?!\d))/g) || []
    return valueMatches.map((valueMatch) => {
        const isPercentage = valueMatch.includes('%')
        const value = parseFloat(valueMatch.replace('%', ''))
        return {
            type: isPercentage ? ScalingType.Percentage : ScalingType.Flat,
            value: isPercentage ? value / 100 : value,
        }
    })
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

const elementColors: Record<string, string> = {
    Pyro: '#bf612d',
    Geo: '#c8922b',
    Dendro: '#84a02f',
    Anemo: '#5d9b86',
    Hydro: '#3d9bc1',
    Cryo: '#7fabb6',
    Electro: '#8c729a',
    Physical: '#ddd',
}

const compareElement = (a: string, b: string): number => {
    const order = ['pyro', 'geo', 'dendro', 'anemo', 'cryo', 'hydro', 'electro']

    const indexA = order.indexOf(a)
    const indexB = order.indexOf(b)

    if (indexA < indexB) {
        return -1
    } else if (indexA > indexB) {
        return 1
    } else {
        return 0
    }
}

const kebabCase = (str: string) => {
    const cleanedString = str.replace(/[^a-zA-Z0-9\s-]/g, '')
    return cleanedString.replace(/[\s-]+/g, '-').toLowerCase()
}

function clamp(number: number, min: number, max: number) {
    return Math.max(min, Math.min(number, max))
}

function getTalentScalingValue(
    characterState: CharacterState,
    talentName: string,
    scalingKey: string,
    talentLevel: number
) {
    const talentData = characterState.character.talents.find(
        (talent) => talent.name === talentName
    )?.data
    if (!talentData) return 0

    const scalingString = talentData[scalingKey]?.[`Lv${talentLevel}`]
    const match = scalingString?.match(/\d+(\.\d+)?/)
    return match ? parseFloat(match[0]) : 0
}

const ascensionMap: Record<string, number> = {
    '1/20': 0,
    '20/20': 0,
    '20/40': 1,
    '40/40': 1,
    '40/50': 2,
    '50/50': 2,
    '50/60': 3,
    '60/60': 3,
    '60/70': 4,
    '70/70': 4,
    '70/80': 5,
    '80/80': 5,
    '80/90': 6,
    '90/90': 6,
}

function insertAspect(
    talentScalings: TalentScaling,
    skillName: string,
    insertBeforeAspect: string,
    newAspectName: string,
    newAspectData: TalentScalingData
): TalentScaling {
    const skill = talentScalings[skillName]
    if (!skill) {
        // Skill not found
        return talentScalings
    }

    const updatedSkill: Record<string, TalentScalingData> = {}
    let foundInsertionPoint = false

    for (const aspect in skill) {
        if (aspect === insertBeforeAspect) {
            updatedSkill[newAspectName] = newAspectData
            foundInsertionPoint = true
        }
        updatedSkill[aspect] = skill[aspect]
    }

    if (!foundInsertionPoint) {
        // The specified insertion point was not found, so just add the new aspect at the end
        updatedSkill[newAspectName] = newAspectData
    }

    return {
        ...talentScalings,
        [skillName]: updatedSkill,
    }
}

export {
    compareObjects,
    compareElement,
    parseScalingValue,
    elementColors,
    cn,
    kebabCase,
    calculateStatValue,
    clamp,
    mergeAndSum,
    getTalentScalingValue,
    insertAspect,
    ascensionMap,
}
