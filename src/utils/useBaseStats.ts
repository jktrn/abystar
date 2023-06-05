import { Bonus, Character } from '@/types/Character'
import { useEffect, useState, useMemo } from 'react'
import { attributeKeyMap, fullBaseStats } from '@/utils'

export default function useBaseStats(
    character: Character,
    characterLevel: string,
    activeSkills: string[],
    activeBonuses: Bonus[]
) {
    const currentBaseStats = character.baseStats[characterLevel]
    const initialBaseStats = useMemo(() => {
        const baseStats = { ...fullBaseStats }

        for (const [key, value] of Object.entries(currentBaseStats)) {
            const newKey =
                attributeKeyMap[key.replace('Bonus ', '').replace('%', '')]
            if (newKey) {
                baseStats[newKey] += parseFloat(value.replace('%', ''))
            }
        }

        return baseStats
    }, [currentBaseStats])

    const [baseStats, setBaseStats] = useState(initialBaseStats)

    useEffect(() => {
        let newBaseStats = { ...initialBaseStats }
        for (const bonus of activeBonuses) {
            newBaseStats = bonus.effect(newBaseStats, bonus.currentStacks, activeSkills)
        }
        setBaseStats(newBaseStats)
    }, [activeBonuses, initialBaseStats, activeSkills])

    return baseStats
}