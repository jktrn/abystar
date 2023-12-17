import { Bonus, CharacterAttributes, CharacterState } from '@/interfaces/Character'
import { applySpecialBonuses, defaultCharacterAttributes } from '.'
import { compareObjects, mergeAndSum } from '@/lib'

interface DependencyMap {
    [dependency: string]: Bonus[]
}

const recalculateStateAndAttributes = (
    state: CharacterState
): [CharacterState, CharacterAttributes] => {
    // Generate new attributes object
    const baseStats = mergeAndSum(
        state.character.baseStats[state.characterLevel],
        state.weapon.baseStats[state.weaponLevel]
    )

    const updatedAttributes = applySpecialBonuses({
        ...defaultCharacterAttributes,
        ...baseStats,
    })

    // This will be our iterative variable that changes as we apply bonuses
    let currentAttributes = { ...updatedAttributes }

    // Constellations can change talent levels so they need to be returned as well
    let updatedTalentLevels = [...state.characterTalentLevels]

    // Reset effective talent levels every time we recalculate (so no mutations occur)
    state.effectiveTalentLevels = updatedTalentLevels

    // Flag to check if attributes have changed from previous iteration
    let isAttributesUpdated = true

    // TODO: Add all future bonus arrays (e.g. artifacts, weapons, party buffs) here
    let bonusesToApply = [...state.characterActiveBonuses]

    // Array to store bonuses that need to be applied in the next iteration
    let bonusesForNextIteration = []

    // Map to store dependencies for each attribute
    let dependencyMap: DependencyMap = {}

    // Max iterations for effect application to prevent infinite loops
    let MAX_ITERATIONS = 15

    // Iterates through bonuses until currentAttributes stabilizes
    while (isAttributesUpdated && MAX_ITERATIONS--) {
        isAttributesUpdated = false
        for (const bonus of bonusesToApply) {
            // Previous as in the previous iteration
            const previousAttributes = { ...currentAttributes }
            // Current as in the current iteration
            const result = bonus.effect(
                currentAttributes,
                updatedAttributes,
                updatedTalentLevels,
                bonus.currentStacks,
                state
            )

            // Update talent levels only if they are returned
            if (result.updatedTalentLevels) {
                updatedTalentLevels = result.updatedTalentLevels
            }

            currentAttributes = result.attributes

            if (bonus.dependencies) {
                for (const dependency of bonus.dependencies) {
                    if (!dependencyMap[dependency]) {
                        dependencyMap[dependency] = []
                    }
                    dependencyMap[dependency].push(bonus)
                }
            }

            // Redo if attributes have changed from previous iteration
            let difference = compareObjects(previousAttributes, currentAttributes)
            if (Object.keys(difference).length > 0) {
                isAttributesUpdated = true
                for (const key in difference) {
                    if (dependencyMap[key]) {
                        bonusesForNextIteration.push(...dependencyMap[key])
                        delete dependencyMap[key]
                    }
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
        effectiveTalentLevels: updatedTalentLevels,
    }

    return [updatedState, currentAttributes]
}

export default recalculateStateAndAttributes
