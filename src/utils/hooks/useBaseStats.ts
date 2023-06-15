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
