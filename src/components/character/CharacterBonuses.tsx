import { CharacterBonusToggle } from '@/components'
import { characterBonuses } from '@/data'
import { Bonus, Character } from '@/types/Character'
import { handleBonusToggle } from '@/utils'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Fragment, useRef, useEffect, useState } from 'react'

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
  const hiddenBonusesRef = useRef<HTMLDivElement>(null)
  const [isHiddenCollapsed, setIsHiddenCollapsed] = useState(true)
  const [hiddenBonuses, setHiddenBonuses] = useState<Bonus[]>([])

  const allBonuses = characterBonuses[character.name]
  const visibleBonuses = allBonuses.filter(
    (bonus) =>
      !bonus.enabled &&
      (!bonus.minConstellation || bonus.minConstellation <= constellation)
  )

  useEffect(() => {
    setHiddenBonuses(
      allBonuses.filter(
        (bonus) =>
          bonus.enabled ||
          (bonus.minConstellation && bonus.minConstellation > constellation)
      )
    )
  }, [character, constellation])

  useEffect(() => {
    const hiddenBonusesElement = hiddenBonusesRef.current
    if (hiddenBonusesElement) {
      if (isHiddenCollapsed) {
        hiddenBonusesElement.style.height = '0'
        hiddenBonusesElement.style.opacity = '0'
      } else {
        hiddenBonusesElement.style.height = 'auto'
        const scrollHeight = hiddenBonusesElement.scrollHeight
        hiddenBonusesElement.style.height = '0'
        hiddenBonusesElement.style.opacity = '0'
        setTimeout(() => {
          hiddenBonusesElement.style.height = `${scrollHeight}px`
          hiddenBonusesElement.style.opacity = '1'
        }, 0)
      }
    }
  }, [isHiddenCollapsed, hiddenBonuses.length])

  const handleCollapseClick = () => {
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
          <div
            id="hidden-bonuses"
            className="hidden-bonuses"
            ref={hiddenBonusesRef}
            style={{
              height: isHiddenCollapsed ? '0' : 'auto',
              opacity: isHiddenCollapsed ? '0' : '1',
            }}
          >
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