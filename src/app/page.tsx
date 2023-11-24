'use client'

import React, { useState } from 'react'
import { CharacterImage, CharacterModal } from '@/components'
import { Character, CharacterState } from '@/interfaces/Character'

export default function Home() {
    const [characterState, setCharacterState] = useState<CharacterState | null>(null)
    const [isCharacterModalOpen, setCharacterModalOpen] = useState(false)

    const handleCharacterSelect = (selectedCharacter: Character) => {
        const defaultState: CharacterState = {
            character: selectedCharacter,
            characterLevel: '90/90',
            characterConstellation: 0,
            characterActiveBonuses: selectedCharacter.characterBonuses.filter(
                (bonus) => bonus.enabled ?? false
            ),
            characterActiveSkillLevels: [10, 10, 10],
        }
        setCharacterState(defaultState)
        setCharacterModalOpen(false)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {characterState && (
                <CharacterImage
                    icon={characterState.character.icon}
                    rarity={characterState.character.rarity}
                    element={characterState.character.vision}
                    onClick={() => setCharacterModalOpen(true)}
                />
            )}
            <CharacterModal
                open={isCharacterModalOpen}
                onOpenChange={setCharacterModalOpen}
                setCharacter={handleCharacterSelect}
            />
            {/* Other page content */}
        </main>
    )
}
