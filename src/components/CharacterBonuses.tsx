import React, { Fragment, useState } from 'react'
import CharacterBonusToggle from './CharacterBonusToggle'
import { Bonus, Character } from '@/interfaces/Character'
import { ChevronUp, ChevronDown } from 'lucide-react'
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

    const allBonuses = character.characterBonuses
    const hiddenBonuses = allBonuses.filter(
        (bonus) => bonus.minConstellation && bonus.minConstellation > constellation
    )
    const visibleBonuses = allBonuses.filter(
        (bonus) => !bonus.minConstellation || bonus.minConstellation <= constellation
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
            {visibleBonuses.map((bonus) => (
                <CharacterBonusToggle
                    key={bonus.name}
                    character={character}
                    bonus={bonus}
                    onToggle={handleToggle}
                    constellation={constellation}
                    currentStacks={
                        activeBonuses.find((b) => b.name === bonus.name)
                            ?.currentStacks || 0
                    }
                />
            ))}

            {hiddenBonuses.length > 0 && (
                <Fragment>
                    <button
                        onClick={() => setIsHiddenCollapsed(!isHiddenCollapsed)}
                        className="w-full rounded-md bg-secondary/25 py-2"
                    >
                        {isHiddenCollapsed ? (
                            <Fragment>
                                Show Hidden Bonuses{' '}
                                <ChevronDown className="inline-block h-5 w-5" />
                            </Fragment>
                        ) : (
                            <Fragment>
                                Hide Hidden Bonuses{' '}
                                <ChevronUp className="inline-block h-5 w-5" />
                            </Fragment>
                        )}
                    </button>
                    {!isHiddenCollapsed && (
                        <div id="hidden-bonuses">
                            {hiddenBonuses.map((bonus) => (
                                <CharacterBonusToggle
                                    key={bonus.name}
                                    character={character}
                                    bonus={bonus}
                                    onToggle={handleToggle}
                                    constellation={constellation}
                                    currentStacks={
                                        activeBonuses.find(
                                            (b) => b.name === bonus.name
                                        )?.currentStacks || 0
                                    }
                                />
                            ))}
                        </div>
                    )}
                </Fragment>
            )}
        </div>
    )
}

export default CharacterBonuses
