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

    const { baseStats, updatedActiveSkills } = useMemo(() => {
        let newBaseStats = { ...initialBaseStats }
        let newActiveSkills = [...activeSkills]
        for (const bonus of [...activeBonuses, ...activeConstellations]) {
            newBaseStats = bonus.effect(
                newBaseStats,
                bonus.currentStacks,
                newActiveSkills
            )
        }
        return { baseStats: newBaseStats, updatedActiveSkills: newActiveSkills }
    }, [activeBonuses, initialBaseStats, activeSkills, activeConstellations])

    return { baseStats, updatedActiveSkills }
}
