import { Bonus, Character } from '@/types/Character'
import { convertBaseStats } from '@/utils'
import { useMemo } from 'react'

export default function useBaseStats(
    character: Character,
    characterLevel: string,
    activeSkills: string[],
    activeBonuses: Bonus[],
    activeConstellations: Bonus[]
) {
    const currentBaseStats = character.baseStats[characterLevel]
    const initialBaseStats = useMemo(
        () => convertBaseStats(currentBaseStats),
        [currentBaseStats]
    )

    let newBaseStats = { ...initialBaseStats }
    let newActiveSkills = [...activeSkills]
    let hasChanged = true
    
    while (hasChanged) {
        hasChanged = false
        for (const bonus of [...activeBonuses, ...activeConstellations]) {
            console.log("Updating bonuses")
            const oldBaseStats = { ...newBaseStats }
            newBaseStats = bonus.effect(
                newBaseStats,
                bonus.currentStacks,
                newActiveSkills,
                initialBaseStats
            )
            if (JSON.stringify(oldBaseStats) !== JSON.stringify(newBaseStats)) {
                hasChanged = true
            }
        }
    }    

    return { baseStats: newBaseStats, updatedActiveSkills: newActiveSkills }
}