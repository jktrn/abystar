'use client'

import React, { useEffect, useState } from 'react'
import BonusToggle from './BonusToggle'
import { Bonus, CharacterState } from '@/interfaces/Character'
import { ChevronDown } from 'lucide-react'
import { handleBonusToggle } from '@/lib'

interface CharacterBonusesProps {
    characterState: CharacterState
    setActiveBonuses: (bonuses: Bonus[]) => void
}

const CharacterBonuses = ({
    characterState,
    setActiveBonuses,
}: CharacterBonusesProps) => {
    const [isHiddenCollapsed, setIsHiddenCollapsed] = useState(true)

    // Update active bonuses when constellation changes (removing bonuses that are no longer available)
    useEffect(() => {
        const updatedActiveBonuses = characterState.characterActiveBonuses.filter(
            (bonus) =>
                !bonus.minConstellation ||
                bonus.minConstellation <= characterState.characterConstellation
        )

        const isChange =
            updatedActiveBonuses.length !==
                characterState.characterActiveBonuses.length ||
            updatedActiveBonuses.some(
                (bonus, index) =>
                    bonus.name !== characterState.characterActiveBonuses[index].name
            )

        if (isChange) {
            setActiveBonuses(updatedActiveBonuses)
        }
    }, [
        characterState.characterConstellation,
        characterState.characterActiveBonuses,
    ])

    const filterBonuses = (isHidden: boolean) =>
        [
            ...characterState.character.characterBonuses,
            ...characterState.character.constellationBonuses,
        ]
            .filter((bonus) => bonus.visible !== false)
            .filter((bonus) =>
                isHidden
                    ? (bonus.minConstellation &&
                          bonus.minConstellation >
                              characterState.characterConstellation) ||
                      bonus.enabled
                    : (!bonus.minConstellation ||
                          bonus.minConstellation <=
                              characterState.characterConstellation) &&
                      !bonus.enabled
            )

    const handleToggle = (bonus: Bonus, bonusStacks: number) => {
        handleBonusToggle(
            bonus,
            bonusStacks,
            characterState.characterActiveBonuses,
            setActiveBonuses,
            characterState.characterConstellation
        )
    }

    if (characterState.character.characterBonuses.length === 0) {
        return (
            <div className="flex flex-col gap-2">
                <span className="rounded-md bg-destructive/25 p-2 text-center text-sm">
                    This character is unimplemented! No bonuses.
                </span>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-2">
            {filterBonuses(false).map((bonus) => (
                <BonusToggle
                    key={bonus.name}
                    characterState={characterState}
                    bonus={bonus}
                    onToggle={handleToggle}
                />
            ))}

            {filterBonuses(true).length > 0 && (
                <>
                    <button
                        onClick={() => setIsHiddenCollapsed(!isHiddenCollapsed)}
                        className="h-[36px] w-full rounded-md bg-secondary/25 py-2 text-sm"
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
                                    characterState={characterState}
                                    bonus={bonus}
                                    onToggle={handleToggle}
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
