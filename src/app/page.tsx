'use client'

import { useState, useEffect } from 'react'
import { formatCharacterName } from '../utils/formatCharacterName'

export default function Home() {
    const [characters, setCharacters] = useState<string[]>([])
    const [character, setCharacter] = useState('')

    useEffect(() => {
        fetch('https://api.genshin.dev/characters')
            .then((response) => response.json())
            .then((data) =>
                setCharacters(
                    data.map((character: string) =>
                        formatCharacterName(character)
                    )
                )
            )
    }, [])

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
                    <select
                        id="character"
                        value={character}
                        onChange={(event) => setCharacter(event.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
                    >
                        {characters.map((character) => (
                            <option key={character} value={character}>
                                {character}
                            </option>
                        ))}
                    </select>
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
