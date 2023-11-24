import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Character } from '@/interfaces/Character'

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

const parseScalingValue = (scalingValue: string) => {
    const values = scalingValue.match(/\d+(\.\d+)?/g)
    const parsedValues = values ? values.map((value) => parseFloat(value)) : [0]
    return parsedValues
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
    const cleanedString = str.replace(/[^a-zA-Z0-9\s]/g, '')
    return cleanedString.replace(/\s+/g, '-').toLowerCase()
}

const getLevelOptions = (character: Character) => {
    return Object.keys(character.baseStats)
}

const getConstellationOptions = Array.from(Array(7).keys()).map((i) => i.toString())

const getTalentOptions = [...Array(15)].map((_, i) => (i + 1).toString())

export {
    compareObjects,
    compareElement,
    parseScalingValue,
    elementColors,
    cn,
    kebabCase,
    getLevelOptions,
    getConstellationOptions,
    getTalentOptions,
}
