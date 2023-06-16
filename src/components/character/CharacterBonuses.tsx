import { CharacterBonusToggle } from '@/components'
import { characterBonuses } from '@/data'
import { Bonus, Character } from '@/types/Character'
import { handleBonusToggle } from '@/utils'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Fragment, useEffect, useState } from 'react'

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

    useEffect(() => {
        setIsHiddenCollapsed(true)
    }, [character])

    const hiddenBonuses = characterBonuses[character.name].filter(
        (bonus) => bonus.enabled
    )
    const visibleBonuses = characterBonuses[character.name].filter(
        (bonus) => !bonus.enabled
    )

    const handleCollapseClick = () => {
        const hiddenBonusesElement = document.getElementById('hidden-bonuses')
        if (hiddenBonusesElement) {
            if (hiddenBonusesElement.classList.contains('expanded')) {
                hiddenBonusesElement.style.height = `${hiddenBonusesElement.scrollHeight}px`
                requestAnimationFrame(() => {
                    hiddenBonusesElement.classList.remove('expanded')
                    hiddenBonusesElement.style.height = '0'
                    hiddenBonusesElement.style.opacity = '0'
                })
            } else {
                hiddenBonusesElement.style.height = 'auto'
                const scrollHeight = hiddenBonusesElement.scrollHeight
                hiddenBonusesElement.style.height = '0'
                requestAnimationFrame(() => {
                    hiddenBonusesElement.classList.add('expanded')
                    hiddenBonusesElement.style.height = `${scrollHeight}px`
                    hiddenBonusesElement.style.opacity = '1'
                })
            }
        }
        setIsHiddenCollapsed(!isHiddenCollapsed)
    }

    return (
        <div className="mt-4 flex flex-col gap-2">
            {visibleBonuses.map((bonus) => (
                <CharacterBonusToggle
                    character={character}
                    key={bonus.name}
                    bonus={bonus}
                    onToggle={(bonus, bonusStacks) =>
                        handleBonusToggle(
                            bonus,
                            bonusStacks,
                            activeBonuses,
                            setActiveBonuses,
                            constellation
                        )
                    }
                    constellation={constellation}
                />
            ))}

            {hiddenBonuses.length > 0 && (
                <Fragment>
                    <button
                        onClick={handleCollapseClick}
                        className="w-full rounded-md bg-main-700 py-2"
                    >
                        {isHiddenCollapsed ? (
                            <Fragment>
                                Show Hidden Bonuses{' '}
                                <ChevronDownIcon className="inline-block h-5 w-5" />
                            </Fragment>
                        ) : (
                            <Fragment>
                                Hide Hidden Bonuses{' '}
                                <ChevronUpIcon className="inline-block h-5 w-5" />
                            </Fragment>
                        )}
                    </button>
                    <div id="hidden-bonuses" className="hidden-bonuses">
                        {hiddenBonuses.map((bonus) => (
                            <CharacterBonusToggle
                                character={character}
                                key={bonus.name}
                                bonus={bonus}
                                onToggle={(bonus, bonusStacks) =>
                                    handleBonusToggle(
                                        bonus,
                                        bonusStacks,
                                        activeBonuses,
                                        setActiveBonuses,
                                        constellation
                                    )
                                }
                                constellation={constellation}
                            />
                        ))}
                    </div>
                </Fragment>
            )}
        </div>
    )
}

export default CharacterBonuses
