import { Bonus, Character } from '@/types/Character'
import { convertBaseStats, compareObjects } from '@/utils'
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

    let maxIterations = 15
    let appliedBonuses: Bonus[] = [...activeBonuses, ...activeConstellations]
    let redoBonuses: Bonus[] = []
    let dependencyMap: { [key: string]: Bonus[] } = {}
    
    while (hasChanged && maxIterations--) {
        hasChanged = false
        for (const bonus of appliedBonuses) {
            const oldBaseStats = { ...newBaseStats }
            newBaseStats = bonus.effect(
                newBaseStats,
                bonus.currentStacks,
                newActiveSkills,
                initialBaseStats
            )
            if (bonus.dependencies) {
                for (const dependency of bonus.dependencies) {
                    if (!dependencyMap[dependency]) {
                        dependencyMap[dependency] = []
                    }
                    dependencyMap[dependency].push(bonus)
                }
            }
            let difference = compareObjects(oldBaseStats, newBaseStats)
            console.log(
                bonus.name,
                JSON.stringify(oldBaseStats) !== JSON.stringify(newBaseStats)
            )
            for (const key in difference) {
                console.log(key, difference[key])
                if (dependencyMap[key]) {
                    redoBonuses.push(...dependencyMap[key])
                    delete dependencyMap[key]
                }
            }

            if (JSON.stringify(oldBaseStats) !== JSON.stringify(newBaseStats)) {
                hasChanged = true
            }
        }
        appliedBonuses = redoBonuses
        redoBonuses = []
    }
    if (maxIterations <= 0) {
        throw new Error('Max iterations reached! An infinite loop has occured.')
    }
    return { baseStats: newBaseStats, updatedActiveSkills: newActiveSkills }
}
