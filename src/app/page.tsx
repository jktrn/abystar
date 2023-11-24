'use client'

import React, { useState } from 'react'
import { CharacterImage, CharacterModal } from '@/components'
import { Character } from '@/interfaces/Character'

export default function Home() {
    const [character, setCharacter] = useState<Character | null>(null)
    const [isCharacterModalOpen, setCharacterModalOpen] = useState(false)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {character && (
                <CharacterImage
                    icon={character.icon}
                    rarity={character.rarity}
                    element={character.vision}
                    onClick={() => setCharacterModalOpen(true)}
                />
            )}
            <CharacterModal
                open={isCharacterModalOpen}
                onOpenChange={setCharacterModalOpen}
                setCharacter={setCharacter}
            />
            {/* Other page content */}
        </main>
    )
}
