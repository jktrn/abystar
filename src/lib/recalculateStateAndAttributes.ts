import { CharacterAttributes, CharacterState } from '@/interfaces/Character'
import { mergeAndSum } from '@/lib'
import { applySpecialBonuses, defaultCharacterAttributes } from '.'

const recalculateStateAndAttributes = (
    state: CharacterState
): [CharacterState, CharacterAttributes] => {
    // Generate new attributes object
    const mergedBaseStats = mergeAndSum(
        state.character.baseStats[state.characterLevel],
        state.weapon.baseStats[state.weaponLevel]
    )

    let updatedAttributes = applySpecialBonuses({
        ...defaultCharacterAttributes,
        ...mergedBaseStats,
    })

    // Since talent levels can be changed by bonuses, we'll make a new copy
    let updatedTalentLevels = [...state.characterTalentLevels]
    // Always reset effectiveTalentLevels every time we recalculate
    state.effectiveTalentLevels = updatedTalentLevels

    // Sort the order in which bonuses are applied (to prevent order of operations issues)
    const sortedBonuses = [...state.characterActiveBonuses].sort((a, b) => {
        // If priority is not specified, assume it's the lowest priority
        const priorityA = a.priority ?? Number.MAX_SAFE_INTEGER
        const priorityB = b.priority ?? Number.MAX_SAFE_INTEGER
        return priorityA - priorityB
    })

    // Debug priority order
    // console.log(sortedBonuses.map((b) => [b.name, b.priority]))

    for (const bonus of sortedBonuses) {
        const result = bonus.effect(
            updatedAttributes,
            updatedTalentLevels,
            bonus.currentStacks,
            state
        )

        if (result.updatedTalentLevels) {
            updatedTalentLevels = result.updatedTalentLevels
        }

        updatedAttributes = result.attributes
    }

    const updatedState = {
        ...state,
        effectiveTalentLevels: updatedTalentLevels,
    }

    return [updatedState, updatedAttributes]
}

export default recalculateStateAndAttributes
