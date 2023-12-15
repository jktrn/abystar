import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { BaseStat, CharacterAttributes } from '@/interfaces/Character'

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
    const values = scalingValue.match(/\d+(\.\d+)?/g)
    const parsedValues = values
        ? values.map((value) => parseFloat(value) / 100)
        : [0]
    return parsedValues
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

const elementColors = {
    pyro: '#bf612d',
    geo: '#c8922b',
    dendro: '#84a02f',
    anemo: '#5d9b86',
    hydro: '#3d9bc1',
    cryo: '#7fabb6',
    electro: '#8c729a',
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
}
