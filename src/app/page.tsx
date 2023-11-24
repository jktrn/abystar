'use client'

import React, { useEffect, useState } from 'react'
import { CharacterImage, CharacterModal, CustomSelect } from '@/components'
import { Character, CharacterState } from '@/interfaces/Character'
import {
    getLevelOptions,
    getConstellationOptions,
    getTalentOptions,
} from '@/lib'

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
            characterTalentLevels: [10, 10, 10],
        }
        setCharacterState(defaultState)
        setCharacterModalOpen(false)
    }

    const updateCharacterState = <K extends keyof CharacterState>(
        key: K,
        newValue: CharacterState[K]
    ) => {
        setCharacterState((prevState) => {
            if (prevState === null) return null

            return { ...prevState, [key]: newValue }
        })
    }

    useEffect(() => {
        console.log("Character State has been updated: ", characterState)
    }, [characterState])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {characterState && (
                <>
                    <CharacterImage
                        icon={characterState.character.icon}
                        rarity={characterState.character.rarity}
                        element={characterState.character.vision}
                        onClick={() => setCharacterModalOpen(true)}
                    />

                    {/* Character Level Select */}
                    <CustomSelect
                        key={`level-select-${characterState.character.name}`}
                        options={getLevelOptions(characterState.character)}
                        value={characterState.characterLevel}
                        onChange={(newLevel) =>
                            updateCharacterState('characterLevel', newLevel)
                        }
                    />

                    {/* Character Constellation Select */}
                    <CustomSelect
                        key={`constellation-select-${characterState.character.name}`}
                        options={getConstellationOptions}
                        value={characterState.characterConstellation.toString()}
                        onChange={(newConstellation) =>
                            updateCharacterState(
                                'characterConstellation',
                                parseInt(newConstellation, 10)
                            )
                        }
                    />

                    {/* Character Talent Levels Select (for each skill) */}
                    {characterState.characterTalentLevels.map(
                        (skillLevel, index) => (
                            <CustomSelect
                                key={`skill-${index + 1}-select-${characterState.character.name}`}
                                options={getTalentOptions}
                                value={skillLevel.toString()}
                                onChange={(newLevel) => {
                                    const newSkills = [
                                        ...characterState.characterTalentLevels,
                                    ]
                                    newSkills[index] = parseInt(newLevel, 10)
                                    updateCharacterState(
                                        'characterTalentLevels',
                                        newSkills.map(Number)
                                    )
                                }}
                            />
                        )
                    )}
                </>
            )}

            <CharacterModal
                open={isCharacterModalOpen}
                onOpenChange={setCharacterModalOpen}
                setCharacter={handleCharacterSelect}
            />
        </main>
    )
}
