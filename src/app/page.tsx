'use client'

import React, { useEffect, useState } from 'react'
import {
    CharacterBonuses,
    CharacterImage,
    CharacterModal,
    CustomSelect,
    TalentSelect,
} from '@/components'
import {
    Character,
    CharacterAttributes,
    CharacterState,
} from '@/interfaces/Character'
import {
    applySpecialBonuses,
    defaultCharacterAttributes,
    getLevelOptions,
    getConstellationOptions,
    kebabCase,
} from '@/lib'

export default function Home() {
    const [characterState, setCharacterState] = useState<CharacterState | null>(null)
    const [characterAttributes, setCharacterAttributes] =
        useState<CharacterAttributes | null>(null)
    const [isCharacterModalOpen, setCharacterModalOpen] = useState(false)

    const handleCharacterSelect = (selectedCharacter: Character) => {
        const initialState: CharacterState = {
            character: selectedCharacter,
            characterLevel: '90/90',
            characterConstellation: 0,
            characterActiveBonuses: selectedCharacter.characterBonuses.filter(
                (bonus) => bonus.enabled ?? false
            ),
            characterTalentLevels: [10, 10, 10],
        }

        setCharacterState(initialState)
        setCharacterModalOpen(false)

        const initialAttributes: CharacterAttributes = applySpecialBonuses({
            ...defaultCharacterAttributes,
            ...initialState.character.baseStats[initialState.characterLevel],
        })

        setCharacterAttributes(initialAttributes)
    }

    const updateCharacterStateAndAttributes = <K extends keyof CharacterState>(
        key: K,
        newValue: CharacterState[K]
    ) => {
        setCharacterState((prevState) => {
            if (prevState === null) return null

            const updatedState = { ...prevState, [key]: newValue }

            const newAttributes = recalculateAttributes(updatedState)
            setCharacterAttributes(newAttributes)

            return updatedState
        })
    }

    const recalculateAttributes = (state: CharacterState): CharacterAttributes => {
        let newAttributes = applySpecialBonuses({
            ...defaultCharacterAttributes,
            ...state.character.baseStats[state.characterLevel],
        })

        // TODO: Apply any active bonuses
        // ...

        // TODO: Apply constellation effects
        // ...

        return newAttributes
    }

    useEffect(() => {
        console.log('Character State has been updated: ', characterState)
    }, [characterState])

    useEffect(() => {
        console.log('Character Attributes has been updated: ', characterAttributes)
    }, [characterAttributes])

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

                    <CustomSelect
                        key={`level-select-${kebabCase(
                            characterState.character.name
                        )}`}
                        options={getLevelOptions(characterState.character)}
                        value={characterState.characterLevel}
                        onChange={(newLevel) =>
                            updateCharacterStateAndAttributes(
                                'characterLevel',
                                newLevel
                            )
                        }
                    />

                    <CustomSelect
                        key={`constellation-select-${kebabCase(
                            characterState.character.name
                        )}`}
                        options={getConstellationOptions}
                        value={characterState.characterConstellation.toString()}
                        onChange={(newConstellation) =>
                            updateCharacterStateAndAttributes(
                                'characterConstellation',
                                parseInt(newConstellation, 10)
                            )
                        }
                    />

                    <TalentSelect
                        character={characterState.character}
                        talentLevels={characterState.characterTalentLevels}
                        setTalentLevels={(newTalentLevels) =>
                            updateCharacterStateAndAttributes(
                                'characterTalentLevels',
                                newTalentLevels
                            )
                        }
                    />

                    <CharacterBonuses
                        character={characterState.character}
                        activeBonuses={characterState.characterActiveBonuses}
                        setActiveBonuses={(newActiveBonuses) =>
                            updateCharacterStateAndAttributes(
                                'characterActiveBonuses',
                                newActiveBonuses
                            )
                        }
                        constellation={characterState.characterConstellation}
                    />
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
