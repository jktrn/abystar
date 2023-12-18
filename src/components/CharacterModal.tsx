'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Character, RawCharacter } from '@/interfaces/Character'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'
import { elementColors, compareElement, kebabCase } from '@/lib'
import { characterData } from '@/data'

interface CharacterModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    setCharacter: (character: Character) => void
}

const CharacterModal = ({
    open,
    onOpenChange,
    setCharacter,
}: CharacterModalProps) => {
    const [rawCharacters, setRawCharacters] = useState<RawCharacter[]>([])
    const DEFAULT_CHARACTER = 'Nahida'

    useEffect(() => {
        const charactersArray = Object.values(characterData)
        setRawCharacters(charactersArray)
        selectDefaultCharacter(DEFAULT_CHARACTER, charactersArray)
    }, [])

    const selectDefaultCharacter = async (
        defaultName: string,
        charactersArray: RawCharacter[]
    ) => {
        const defaultCharacter = charactersArray.find((c) => c.name === defaultName)
        if (defaultCharacter) {
            await handleCharacterSelect(defaultCharacter.name)
        }
    }

    const handleCharacterSelect = async (characterName: string) => {
        try {
            const characterModule = await import(
                `@/data/characters/${kebabCase(characterName)}.tsx`
            )
            setCharacter(characterModule.default)
        } catch (error) {
            console.error('Error loading character data:', error)
        }
        onOpenChange(false)
    }

    const sortedRawCharacters = rawCharacters.sort((a, b) =>
        compareElement(a.vision.toLowerCase(), b.vision.toLowerCase())
    )

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="mb-4 flex items-center justify-between">
                    <DialogTitle>Select a Character</DialogTitle>
                    <DialogDescription>
                        {`${sortedRawCharacters.length} available characters`}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap justify-center gap-[6px]">
                    {sortedRawCharacters.map((rawCharacter) => (
                        <Image
                            key={rawCharacter.name}
                            src={rawCharacter.icon}
                            alt={rawCharacter.name}
                            onClick={() => handleCharacterSelect(rawCharacter.name)}
                            className={`cursor-pointer rounded-full object-cover transition-all duration-100 ease-in hover:scale-105 ${
                                rawCharacter.implemented ? '' : 'opacity-50'
                            }`}
                            width={70}
                            height={70}
                            style={{
                                backgroundColor:
                                    elementColors[
                                        rawCharacter.vision.toLowerCase() as keyof typeof elementColors
                                    ],
                            }}
                        />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CharacterModal
