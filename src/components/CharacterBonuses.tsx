'use client'

import React, { useEffect, useState } from 'react'
import BonusToggle from './BonusToggle'
import { Bonus, CharacterState } from '@/interfaces/Character'
import { ChevronDown } from 'lucide-react'
import { elementColors, handleBonusToggle } from '@/lib'

interface CharacterBonusesProps {
    state: CharacterState
    activeBonuses: Bonus[]
    setActiveBonuses: (bonuses: Bonus[]) => void
    constellation: number
}

const CharacterBonuses = ({
    state,
    activeBonuses,
    setActiveBonuses,
    constellation,
}: CharacterBonusesProps) => {
    const [isHiddenCollapsed, setIsHiddenCollapsed] = useState(true)

    // Update active bonuses when constellation changes (removing bonuses that are no longer available)
    useEffect(() => {
        const updatedActiveBonuses = activeBonuses.filter(
            (bonus) =>
                !bonus.minConstellation || bonus.minConstellation <= constellation
        )

        const isChange =
            updatedActiveBonuses.length !== activeBonuses.length ||
            updatedActiveBonuses.some(
                (bonus, index) => bonus.name !== activeBonuses[index].name
            )

        if (isChange) {
            setActiveBonuses(updatedActiveBonuses)
        }
    }, [constellation, activeBonuses])

    const filterBonuses = (isHidden: boolean) =>
        state.character.characterBonuses.filter((bonus) =>
            isHidden
                ? (bonus.minConstellation &&
                      bonus.minConstellation > constellation) ||
                  bonus.enabled
                : (!bonus.minConstellation ||
                      bonus.minConstellation <= constellation) &&
                  !bonus.enabled
        )

    const handleToggle = (bonus: Bonus, bonusStacks: number) => {
        handleBonusToggle(
            bonus,
            bonusStacks,
            activeBonuses,
            setActiveBonuses,
            constellation
        )
    }

    return (
        <div className="mt-4 flex flex-col gap-2">
            {filterBonuses(false).map((bonus) => (
                <BonusToggle
                    key={bonus.name}
                    bonus={bonus}
                    onToggle={handleToggle}
                    constellation={constellation}
                    color={
                        elementColors[
                            state.character.vision.toLowerCase() as keyof typeof elementColors
                        ]
                    }
                    state={state}
                />
            ))}

            {filterBonuses(true).length > 0 && (
                <>
                    <button
                        onClick={() => setIsHiddenCollapsed(!isHiddenCollapsed)}
                        className="w-full rounded-md bg-secondary/25 py-2"
                    >
                        {isHiddenCollapsed ? 'Show' : 'Hide'} Hidden Bonuses
                        <ChevronDown
                            className={`ml-1 inline-block h-5 w-5 ${
                                isHiddenCollapsed ? '' : 'rotate-180'
                            }`}
                        />
                    </button>
                    {!isHiddenCollapsed && (
                        <div className="mt-4 flex flex-col gap-2">
                            {filterBonuses(true).map((bonus) => (
                                <BonusToggle
                                    key={bonus.name}
                                    bonus={bonus}
                                    onToggle={handleToggle}
                                    constellation={constellation}
                                    color={
                                        elementColors[
                                            state.character.vision.toLowerCase() as keyof typeof elementColors
                                        ]
                                    }
                                    state={state}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default CharacterBonuses
