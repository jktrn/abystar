import { Bonus, Character } from '@/types/Character'
import { convertBaseStats } from '@/utils'
import { useMemo } from 'react'

function findDiff(obj1: any, obj2: any) {
    const diff: any = {}
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            diff[key] = [obj1[key], obj2[key]]
        }
    }
    return diff
}

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
            let diff = findDiff(oldBaseStats, newBaseStats)
            console.log(bonus.name, JSON.stringify(oldBaseStats) !== JSON.stringify(newBaseStats))
            for (const key in diff) {
                console.log(key, diff[key])
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
    }
    if (maxIterations <= 0) {
        throw new Error("Max iterations reached")
    }
    return { baseStats: newBaseStats, updatedActiveSkills: newActiveSkills }
}

// DEBUG
// import { Bonus, Character } from '@/types/Character'
// import { convertBaseStats } from '@/utils'
// import { useMemo } from 'react'

// export default function useBaseStats(
//     character: Character,
//     characterLevel: string,
//     activeSkills: string[],
//     activeBonuses: Bonus[],
//     activeConstellations: Bonus[]
// ) {
//     const currentBaseStats = character.baseStats[characterLevel]
//     const initialBaseStats = useMemo(
//         () => convertBaseStats(currentBaseStats),
//         [currentBaseStats]
//     )

//     let newBaseStats = { ...initialBaseStats }
//     let newActiveSkills = [...activeSkills]
//     let hasChanged = true

//     function iterate() {
//         console.log('Calculating base stats...')
//         hasChanged = false
//         for (const bonus of [...activeBonuses, ...activeConstellations]) {
//             const oldBaseStats = { ...newBaseStats }
//             newBaseStats = bonus.effect(
//                 newBaseStats,
//                 bonus.currentStacks,
//                 newActiveSkills,
//                 initialBaseStats
//             )
//             console.log("Old:")
//             console.log(oldBaseStats)
//             console.log("New:")
//             console.log(newBaseStats)
//             if (JSON.stringify(oldBaseStats) !== JSON.stringify(newBaseStats)) {
//                 hasChanged = true
//             }
//         }
//         if (hasChanged) {
//             setTimeout(iterate, 1000)
//         }
//     }

//     iterate()

//     return { baseStats: newBaseStats, updatedActiveSkills: newActiveSkills }
// }
