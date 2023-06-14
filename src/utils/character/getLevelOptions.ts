import { Character } from '@/types/Character'

const getLevelOptions = (character: Character) => {
    return Object.keys(character.baseStats).map((level) => ({
        value: level,
        label: level,
    }))
}

export default getLevelOptions
