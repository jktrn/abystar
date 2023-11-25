import { Bonus, CharacterAttributes, CharacterState } from '@/interfaces/Character'
import { applySpecialBonuses, defaultCharacterAttributes } from '.'

interface DependencyMap {
    [dependency: string]: Bonus[]
}

const recalculateAttributes = (state: CharacterState): CharacterAttributes => {
    const baseStats = state.character.baseStats[state.characterLevel]
    const updatedAttributes = applySpecialBonuses({
        ...defaultCharacterAttributes,
        ...baseStats,
    })

    console.log('recalculateAttributes has received the following updatedAttributes: ', updatedAttributes)

    // Initializes current attributes as updated attributes before iterating through bonuses
    let currentAttributes = { ...updatedAttributes }
    let isAttributesUpdated = true
    let bonusesToApply = [...state.characterActiveBonuses] // TODO: ADD CONSTELLATIONS
    let bonusesForNextIteration = []
    let dependencyMap: DependencyMap = {}

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
                state.characterTalentLevels,
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

    return currentAttributes
}

export default recalculateAttributes
