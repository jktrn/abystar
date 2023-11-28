import { Bonus, CharacterState } from '@/interfaces/Character'

function applyConstellationBonuses(state: CharacterState): Bonus[] {
    return state.character.constellationBonuses.slice(
        0,
        state.characterConstellation
    )
}

function getUpdatedBonuses(state: CharacterState): Bonus[] {
    const constellationBonuses = applyConstellationBonuses(state)
    // Additional bonus types can be added here

    const mergedBonuses = [
        ...state.characterActiveBonuses,
        ...constellationBonuses,
        // ... more!
    ]

    // Ensures all bonuses are unique
    return mergedBonuses.filter(
        (bonus, index, self) =>
            index === self.findIndex((b) => b.name === bonus.name)
    )
}

export default getUpdatedBonuses
