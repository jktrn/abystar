import { constellationBonuses } from '@/data'
import { Bonus } from '@/types/Character'
import { useEffect } from 'react'

export default function useActiveConstellations(
    characterName: string,
    constellation: string,
    setActiveConstellations: (activeConstellations: Bonus[]) => void,
    setActiveSkills: (activeSkills: string[]) => void
) {
    useEffect(() => {
        if (constellation === '0') {
            setActiveConstellations([])
            return
        }

        const currentConstellationIndex = parseInt(constellation) - 1
        const newActiveConstellations = constellationBonuses[characterName]
            .slice(0, currentConstellationIndex + 1)
            .map((bonus) => ({
                ...bonus,
                currentStacks: 1,
            }))

        setActiveConstellations(newActiveConstellations)

        // Recalculate the skill level increases caused by the selected constellation from scratch
        let newActiveSkills = [
            'Lv10', // Normal Attack
            'Lv10', // Elemental Skill
            'Lv10', // Elemental Burst
        ]
        if (currentConstellationIndex >= 2) {
            // C3 increases the level of the Elemental Skill by 3
            newActiveSkills[1] = `Lv${Math.min(
                parseInt(newActiveSkills[1].slice(2)) + 3,
                15
            )}`
        }
        if (currentConstellationIndex >= 4) {
            // C5 increases the level of the Elemental Burst by 3
            newActiveSkills[2] = `Lv${Math.min(
                parseInt(newActiveSkills[2].slice(2)) + 3,
                15
            )}`
        }
        setActiveSkills(newActiveSkills)
    }, [characterName, constellation])
}
