import React, { useEffect, useState } from 'react'
import CharacterBonusToggle from './CharacterBonusToggle'
import { Bonus, Character } from '@/interfaces/Character'
import { ChevronDown } from 'lucide-react'
import { handleBonusToggle } from '@/lib'

interface CharacterBonusesProps {
    character: Character
    activeBonuses: Bonus[]
    setActiveBonuses: (bonuses: Bonus[]) => void
    constellation: number
}

const CharacterBonuses = ({
    character,
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
        character.characterBonuses.filter((bonus) =>
            isHidden
                ? bonus.minConstellation && bonus.minConstellation > constellation
                : !bonus.minConstellation || bonus.minConstellation <= constellation
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
                <CharacterBonusToggle
                    key={bonus.name}
                    character={character}
                    bonus={bonus}
                    onToggle={handleToggle}
                    constellation={constellation}
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
                            className={`inline-block h-5 w-5 ${
                                isHiddenCollapsed ? '' : 'rotate-180'
                            }`}
                        />
                    </button>
                    {!isHiddenCollapsed && (
                        <div id="hidden-bonuses">
                            {filterBonuses(true).map((bonus) => (
                                <CharacterBonusToggle
                                    key={bonus.name}
                                    character={character}
                                    bonus={bonus}
                                    onToggle={handleToggle}
                                    constellation={constellation}
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
