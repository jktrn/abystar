'use client'

import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import CharacterImage from '../components/CharacterImage'
import CharacterModal from '../components/CharacterModal'
import ConstellationSelect from '../components/ConstellationSelect'
import LevelSelect from '../components/LevelSelect'
import charactersData from '../data/characters/characters.json'
import { Character } from '../types/Character'

export default function Home() {
    const defaultCharacter = charactersData['Hu Tao']
    const [character, setCharacter] = useState<Character>(defaultCharacter)
    const [level, setLevel] = useState<string>('90/90')
    const [constellation, setConstellation] = useState<string>('0')

    const characters = Object.values(charactersData).map(
        (characterData: Character) => ({
            ...characterData,
        })
    )

    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(character)
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="flex-1 bg-main-1000 rounded-lg mr-2 ml-4 my-4">
                <div id="character">
                    <h2 className="text-lg bg-main-800 rounded-t-lg font-bold py-3 px-4">
                        Character
                    </h2>
                    <div className="bg-main-900 p-4">
                        <div className="flex gap-4">
                            <form onSubmit={handleSubmit}>
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
                            <div className="flex flex-col">
                                <span className="text-xl font-bold leading-tight">
                                    {character.name}
                                </span>
                                <span className="text-md mb-1">
                                    {'★'.repeat(character.rarity)}
                                </span>
                                <div className="flex items-center gap-2 mb-2">
                                    Lvl: 
                                    <LevelSelect
                                        character={character}
                                        level={level}
                                        setLevel={setLevel}
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    Con: 
                                    <ConstellationSelect
                                        character={character}
                                        constellation={constellation}
                                        setConstellation={setConstellation}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="attributes">
                    <h2 className="text-lg bg-main-800 font-bold py-3 px-4">
                        Attributes
                    </h2>
                    <div className="bg-main-900 p-4">Attributes</div>
                </div>
            </div>

            <div className="flex-1 bg-main-1000 rounded-lg mx-2 my-4">
                <div id="weapon">
                    <h2 className="text-lg bg-main-800 rounded-t-lg font-bold py-3 px-4">
                        Weapon
                    </h2>
                    <div className="bg-main-900 p-4">Weapon</div>
                </div>

                <div id="artifacts">
                    <h2 className="text-lg bg-main-800 font-bold py-3 px-4">
                        Artifacts
                    </h2>

                    <div className="bg-main-900 p-4">Artifacts</div>
                </div>

                <div id="party-buffs">
                    <h2 className="text-lg bg-main-800 font-bold py-3 px-4">
                        Party Buffs
                    </h2>
                    <div className="bg-main-900 p-4">Party Buffs</div>
                </div>
            </div>

            <div className="flex-1 bg-main-1000 rounded-lg ml-2 mr-4 my-4">
                <div id="results">
                    <h2 className="text-lg bg-main-800 rounded-t-lg font-bold py-3 px-4">
                        Results
                    </h2>
                    <div className="bg-main-900 p-4">Results</div>
                </div>
            </div>
        </div>
    )
}
