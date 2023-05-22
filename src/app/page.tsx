'use client'

import { useState } from 'react'
import CustomOption from '../components/CustomOption'
import { Character } from '../types/Character'
import Select from 'react-select'
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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md"
            >
                <div className="mb-4">
                    <label
                        htmlFor="character"
                        className="block text-gray-700 font-bold mb-2"
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
                </div>
                <input
                    type="submit"
                    value="Submit"
                    className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600"
                />
            </form>
            {character && (
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">{character.name}</h2>
                    <img src={character.image} alt={character.name} />
                    <p>Vision: {character.vision}</p>
                    <p>Rarity: {character.rarity}</p>
                    {/* <h3 className="text-lg font-bold mt-4 mb-2">Base Stats:</h3>
                    <table className="table-auto border-collapse border border-gray-400">
                        <thead>
                            <tr>
                                <th className="border border-gray-400 px-4 py-2 text-gray-800">
                                    Stat
                                </th>
                                {Object.keys(character.baseStats.HP).map(
                                    (key) => (
                                        <th
                                            key={key}
                                            className="border border-gray-400 px-4 py-2 text-gray-800"
                                        >
                                            {key}
                                        </th>
                                    )
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(character.baseStats).map(
                                ([stat, values]) => (
                                    <tr key={stat}>
                                        <td className="border border-gray-400 px-4 py-2 text-gray-800">
                                            {stat}
                                        </td>
                                        {Object.values(values).map((value) => (
                                            <td
                                                key={value}
                                                className="border border-gray-400 px-4 py-2 text-gray-800"
                                            >
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table> */}
                </div>
            )}
        </main>
    )
}
