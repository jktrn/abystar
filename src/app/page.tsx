'use client'

import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import ActiveSkillsSelect from '@/components/ActiveSkillsSelect'
import AttributesTable from '@/components/AttributesTable'
import CharacterImage from '@/components/CharacterImage'
import CharacterModal from '@/components/CharacterModal'
import ConstellationSelect from '@/components/ConstellationSelect'
import LevelSelect from '@/components/LevelSelect'
import charactersData from '@/data/characters/characters.json'
import { Character } from '@/types/Character'
import { useBaseStats } from '@/utils/useBaseStats'

export default function Home() {
    // Setting default values for character, ascension/talent level, constellations
    const defaultCharacter = charactersData['Hu Tao']
    const [character, setCharacter] = useState<Character>(defaultCharacter)
    const [level, setLevel] = useState<string>('90/90')
    const [constellation, setConstellation] = useState<string>('0')
    const [activeSkills, setActiveSkills] = useState<string[]>([
        'Lv10',
        'Lv10',
        'Lv10',
    ])

    const characters = Object.values(charactersData) as Character[]
    // For CharacterModal
    const { isOpen, onOpen, onClose } = useDisclosure()
    // Updating base stats when character/level changes
    const baseStats = useBaseStats(character, level)

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
                                            <LevelSelect
                                                character={character}
                                                level={level}
                                                setLevel={setLevel}
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            Constellation:
                                            <ConstellationSelect
                                                character={character}
                                                constellation={constellation}
                                                setConstellation={
                                                    setConstellation
                                                }
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
                    </div>
                </div>

                <div id="attributes">
                    <h2 className="bg-main-800 px-4 py-3 text-lg font-bold">
                        Attributes
                    </h2>
                    <div className="bg-main-900 p-4">
                        <div className="rounded-md border border-main-700 p-2">
                            <AttributesTable baseStats={baseStats} />
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
