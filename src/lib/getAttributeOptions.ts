import { Character } from '@/interfaces/Character'
import { Weapon } from '@/interfaces/Weapon'

const getLevelOptions = (character: Character | Weapon) => {
    return Object.keys(character.baseStats).map((level) => ({
        value: level,
        label: level,
    }))
}

const getConstellationOptions = (character: Character) => {
    return [
        { value: '0', label: '0' },
        ...character.constellations?.map((constellation) => ({
            value: constellation.level.toString(),
            label: constellation.level.toString(),
        })),
    ]
}

const getTalentOptions = [...Array(13)].map((_, i) => {
    return {
        value: (i + 1).toString(),
        label: `Lv. ${i + 1}`,
        disabled: i >= 10,
    }
})

const getRefinementOptions = (weapon: Weapon) => {
    if (!weapon.refinements) return []

    return [
        ...weapon.refinements.map((refinement) => ({
            value: refinement.level.toString(),
            label: refinement.level.toString(),
        })),
    ]
}

const levelOptions = [
    '1/20',
    '20/20',
    '20/40',
    '40/40',
    '40/50',
    '50/50',
    '50/60',
    '60/60',
    '60/70',
    '70/70',
    '70/80',
    '80/80',
    '80/90',
    '90/90',
]

export {
    getLevelOptions,
    getConstellationOptions,
    getTalentOptions,
    getRefinementOptions,
    levelOptions,
}
