'use client'

import {
    ActiveSkillsSelect,
    AttributesTable,
    CharacterBonusToggle,
    CharacterImage,
    CharacterModal,
    CustomSelect,
} from '@/components'

import { characterBonuses, characterData } from '@/data'
import { Bonus, Character } from '@/types/Character'
import {
    convertBaseStats,
    getConstellationOptions,
    getLevelOptions,
    handleBonusToggle,
    useBaseStats,
} from '@/utils'

import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Home() {
    // Setting default values for character, ascension/talent level, constellations
    const defaultCharacter = characterData['Hu Tao']
    const [character, setCharacter] = useState<Character>(defaultCharacter)
    const [constellation, setConstellation] = useState<string>('0')
    const constellationOptions = getConstellationOptions(character)
    const [level, setLevel] = useState<string>('90/90')
    const levelOptions = getLevelOptions(character)
    const [activeSkills, setActiveSkills] = useState<string[]>([
        'Lv10', // Normal Attack
        'Lv10', // Elemental Skill
        'Lv10', // Elemental Burst
    ])
    // For CharacterModal
    const { isOpen, onOpen, onClose } = useDisclosure()

    const characters = Object.values(characterData) as Character[]
    const [activeBonuses, setActiveBonuses] = useState<Bonus[]>([])
    useEffect(() => {
        setActiveBonuses([])
      }, [character])
    const initialBaseStats = convertBaseStats(character.baseStats[level])
    const baseStats = useBaseStats(
        character,
        level,
        activeSkills,
        activeBonuses,
    )

    return (
        <div className="flex h-screen flex-wrap p-2">
            <div className="m-2 min-w-max min-w-max flex-1 rounded-lg bg-main-1000 md:max-w-max">
                <div id="character">
                    <h2 className="rounded-t-lg bg-main-800 px-4 py-3 text-lg font-bold">
                        Character
                    </h2>
                    <div className="bg-main-900 p-4">
                        <div className="flex">
                            <form>
                                <CharacterImage
                                    icon={character.icon}
                                    rarity={character.rarity}
                                    element={character.vision}
                                    onClick={onOpen}
                                />
                                <CharacterModal
                                    isOpen={isOpen}
                                    onClose={onClose}
                                    characters={characters}
                                    setCharacter={setCharacter}
                                    setActiveBonuses={setActiveBonuses}
                                />
                            </form>
                            <div className="ml-4 flex w-full justify-between">
                                <div className="flex flex-col justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xl font-bold">
                                            {character.name}
                                        </span>
                                        <span className="text-md">
                                            {'★'.repeat(character.rarity)}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            Ascension:
                                            <CustomSelect
                                                options={levelOptions}
                                                value={level}
                                                onChange={setLevel}
                                                instanceId="ascension"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            Constellation:
                                            <CustomSelect
                                                options={constellationOptions}
                                                value={constellation}
                                                onChange={setConstellation}
                                                instanceId="constellation"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <ActiveSkillsSelect
                                    character={character}
                                    activeSkills={activeSkills}
                                    setActiveSkills={setActiveSkills}
                                />
                            </div>
                        </div>
                        {characterBonuses[character.name] && (
                            <div className="mt-4 flex flex-col gap-2">
                                {characterBonuses[character.name].map(
                                    (bonus) => (
                                        <CharacterBonusToggle
                                            key={bonus.name}
                                            bonus={bonus}
                                            onToggle={(bonus, bonusStacks) =>
                                                handleBonusToggle(
                                                    bonus,
                                                    bonusStacks,
                                                    activeBonuses,
                                                    setActiveBonuses
                                                )
                                            }
                                        />
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div id="attributes">
                    <h2 className="bg-main-800 px-4 py-3 text-lg font-bold">
                        Attributes
                    </h2>
                    <div className="bg-main-900 p-4">
                        <div className="rounded-md border border-main-700 p-2">
                            <AttributesTable
                                baseStats={baseStats}
                                initialBaseStats={initialBaseStats}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-2 flex-1 rounded-lg bg-main-1000">
                <div id="weapon">
                    <h2 className="rounded-t-lg bg-main-800 px-4 py-3 text-lg font-bold">
                        Weapon
                    </h2>
                    <div className="bg-main-900 p-4">Weapon</div>
                </div>

                <div id="artifacts">
                    <h2 className="bg-main-800 px-4 py-3 text-lg font-bold">
                        Artifacts
                    </h2>

                    <div className="bg-main-900 p-4">Artifacts</div>
                </div>

                <div id="party-buffs">
                    <h2 className="bg-main-800 px-4 py-3 text-lg font-bold">
                        Party Buffs
                    </h2>
                    <div className="bg-main-900 p-4">Party Buffs</div>
                </div>
            </div>

            <div className="m-2 flex-1 rounded-lg bg-main-1000">
                <div id="results">
                    <h2 className="rounded-t-lg bg-main-800 px-4 py-3 text-lg font-bold">
                        Results
                    </h2>
                    <div className="bg-main-900 p-4">Results</div>
                </div>
            </div>
        </div>
    )
}
