'use client'

import { useState } from 'react'
import CustomOption from '../components/CustomOption'
import { Character } from '../types/Character'
import Select from 'react-select'
import Image from 'next/image'
import charactersData from '../data/characters/characters.json'

export default function Home() {
    const [character, setCharacter] = useState<Character | null>(null)

    const characters = Object.values(charactersData).map(
        (characterData: any) => ({
            name: characterData.name,
            image: characterData.icon,
            vision: characterData.vision,
            rarity: characterData.rarity,
            baseStats: characterData.baseStats,
        })
    )

    const options = characters.map((character) => ({
        value: character,
        label: character.name,
        image: character.image,
        vision: character.vision,
        rarity: character.rarity,
    }))

    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(character)
    }

    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-stone-800 rounded-lg mr-2 ml-4 my-4">
                <div id="character">
                    <h2 className="text-lg bg-stone-600 rounded-t-lg font-bold py-3 px-4">
                        Character
                    </h2>
                    <div className="bg-stone-700 p-4">
                        <form onSubmit={handleSubmit}>
                            <label
                                htmlFor="character"
                                className="block text-white font-bold mb-2"
                            >
                                Character:
                            </label>
                            <Select
                                id="character"
                                value={options.find(
                                    (option) => option.value === character
                                )}
                                onChange={(option) => {
                                    setCharacter(option!.value)
                                }}
                                options={options}
                                components={{ Option: CustomOption }}
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        width: 300,
                                    }),
                                }}
                            />
                            <input
                                type="submit"
                                value="Submit"
                                className="bg-blue-500 text-stone-700 font-bold px-4 py-2 rounded-lg hover:bg-blue-600 mt-4"
                            />
                        </form>
                    </div>
                </div>
                <div id="attributes">
                    <h2 className="text-lg bg-stone-600 font-bold py-3 px-4">
                        Attributes
                    </h2>
                    <div className="bg-stone-700 rounded-lg p-4">
                        Attributes
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-stone-800 rounded-lg mx-2 my-4">
                <div id="weapon">
                    <h2 className="text-lg bg-stone-600 rounded-t-lg font-bold py-3 px-4">
                        Weapon
                    </h2>
                    <div className="bg-stone-700 p-4">Weapon</div>
                </div>
                <div id="artifacts">
                    <h2 className="text-lg bg-stone-600 font-bold py-3 px-4">
                        Artifacts
                    </h2>
                    <div className="bg-stone-700 p-4">Artifacts</div>
                </div>
                <div id="party-buffs">
                    <h2 className="text-lg bg-stone-600 font-bold py-3 px-4">
                        Party Buffs
                    </h2>
                    <div className="bg-stone-700 p-4">Party Buffs</div>
                </div>
            </div>
            <div className="flex-1 bg-stone-800 rounded-lg ml-2 mr-4 my-4">
                <div id="results">
                    <h2 className="text-lg bg-stone-600 rounded-t-lg font-bold py-3 px-4">
                        Results
                    </h2>
                    <div className="bg-stone-700 p-4">Results</div>
                </div>
            </div>
        </div>
    )
}
