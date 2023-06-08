import { Character } from '@/types/Character'

export function getLevelOptions(character: Character) {
    return Object.keys(character.baseStats).map((level) => ({
        value: level,
        label: level,
    }))
}

export function getConstellationOptions(character: Character) {
    return [
        { value: '0', label: '0' },
        ...(character.constellations?.map((constellation) => ({
            value: constellation.level.toString(),
            label: constellation.level.toString(),
        })) ?? []),
    ]
}
