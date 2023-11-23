'use client'

import React, { useState, useEffect } from 'react'
import CharacterModal from '@/components/CharacterModal'
import CharacterImage from '@/components/CharacterImage'
import { RawCharacter, Character } from '@/interfaces/Character'
import { kebabCase } from '@/lib'

//TODO: GET RID OF CHARACTERS ARRAY DEPENDENCY AND MOVE IT TO THE MODAL

export default function Home() {
    const [characters, setCharacters] = useState<RawCharacter[]>([])
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
        null
    )
    const [isModalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        import('@/data/characters/characters.json').then(
            ({ default: charactersData }) => {
                const charactersArray = Object.values(charactersData)
                setCharacters(charactersArray)
                const defaultCharacter = charactersArray.find(
                    (c) => c.name === 'Hu Tao'
                )
                handleCharacterSelect(defaultCharacter!.name)
            }
        )
    }, [])

    const handleCharacterSelect = async (characterName: string) => {
        try {
            const characterModule = await import(
                `@/data/characters/${kebabCase(characterName)}.tsx`
            )
            setSelectedCharacter(characterModule.default)
        } catch (error) {
            console.error('Error loading character data:', error)
        }
        setModalOpen(false)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {selectedCharacter && (
                <CharacterImage
                    icon={selectedCharacter.icon}
                    rarity={selectedCharacter.rarity}
                    element={selectedCharacter.vision}
                    onClick={() => setModalOpen(true)}
                />
            )}
            <CharacterModal
                open={isModalOpen}
                onOpenChange={setModalOpen}
                characters={characters}
                setCharacter={handleCharacterSelect}
            />
            {/* Other page content */}
        </main>
    )
}
