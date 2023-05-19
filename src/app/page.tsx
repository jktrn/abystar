'use client'

import { useState, useEffect } from 'react'
import { formatCharacterName } from '../utils/formatCharacterName'
import CustomOption from '../components/CustomOption'
import { Character } from '../types/Character'
import Select from 'react-select'

export default function Home() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [character, setCharacter] = useState('')

    const getImageUrl = (character: string) => {
        const isTraveler = character.startsWith('traveler-')
        return isTraveler
            ? `https://api.genshin.dev/characters/${character}/icon-big-lumine`
            : `https://api.genshin.dev/characters/${character}/icon-big`
    }

    useEffect(() => {
        fetch('https://api.genshin.dev/characters')
            .then((response) => response.json())
            .then((data) =>
                Promise.all(
                    data.map(async (character: string) => {
                        const response = await fetch(
                            `https://api.genshin.dev/characters/${character}`
                        )
                        const characterData = await response.json()
                        return {
                            name: formatCharacterName(character),
                            image: getImageUrl(character),
                            vision: characterData.vision,
                            rarity: characterData.rarity,
                        }
                    })
                )
            )
            .then((characters) => setCharacters(characters))
    }, [])

    const options = characters.map((character) => ({
        value: character.name,
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
                        onChange={(option) => setCharacter(option!.value)}
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
        </main>
    )
}
