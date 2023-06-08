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

    const baseStats = useMemo(() => {
        let newBaseStats = { ...initialBaseStats }
        for (const bonus of [...activeBonuses, ...activeConstellations]) {
            newBaseStats = bonus.effect(
                newBaseStats,
                bonus.currentStacks,
                activeSkills
            )
        }
        return newBaseStats
    }, [activeBonuses, initialBaseStats, activeSkills, activeConstellations])

    return baseStats
}
