import { Bonus, CharacterAttributes, CharacterState } from '@/interfaces/Character'
import { applySpecialBonuses, defaultCharacterAttributes } from '.'

interface DependencyMap {
    [dependency: string]: Bonus[]
}

const recalculateStateAndAttributes = (
    state: CharacterState
): [CharacterState, CharacterAttributes] => {
    // Generate new attributes object
    const baseStats = state.character.baseStats[state.characterLevel]
    const updatedAttributes = applySpecialBonuses({
        ...defaultCharacterAttributes,
        ...baseStats,
    })

    // Initializes current attributes as updated attributes before iterating through bonuses
    let currentAttributes = { ...updatedAttributes }
    // Constellations can change talent levels so they need to be returned as well
    let updatedTalentLevels = [...state.characterTalentLevels]
    // Flag to check if attributes have changed from previous iteration
    let isAttributesUpdated = true
    // Add all future bonus arrays (e.g. artifacts, weapons, party buffs) here
    // TODO: Add constellations
    let bonusesToApply = [...state.characterActiveBonuses]
    // Array to store bonuses that need to be applied in the next iteration
    let bonusesForNextIteration = []

    let dependencyMap: DependencyMap = {}
    // Max iterations for effect application to prevent infinite loops
    let MAX_ITERATIONS = 15

    // Iterates through bonuses until attributes stop changing (to account for dependencies)
    while (isAttributesUpdated && MAX_ITERATIONS--) {
        isAttributesUpdated = false
        for (const bonus of bonusesToApply) {
            // Previous as in the previous iteration
            const previousAttributes = { ...currentAttributes }
            // Current as in the current iteration
            currentAttributes = bonus.effect(
                currentAttributes,
                bonus.currentStacks,
                updatedTalentLevels,
                updatedAttributes,
                state
            )

            if (bonus.dependencies) {
                for (const dependency of bonus.dependencies) {
                    dependencyMap[dependency] = (
                        dependencyMap[dependency] || []
                    ).concat(bonus)
                }
            }

            // Redo if attributes have changed from previous iteration
            if (
                JSON.stringify(previousAttributes) !==
                JSON.stringify(currentAttributes)
            ) {
                isAttributesUpdated = true
                for (const key in dependencyMap) {
                    bonusesForNextIteration.push(...dependencyMap[key])
                    delete dependencyMap[key]
                }
            }
        }
        bonusesToApply = bonusesForNextIteration
        bonusesForNextIteration = []
    }

    if (MAX_ITERATIONS <= 0) {
        console.error('Max iterations reached! Possible infinite loop detected.')
    }

    const updatedState = {
        ...state,
        characterTalentLevels: updatedTalentLevels,
    }

    return [updatedState, currentAttributes]
}

export default recalculateStateAndAttributes
