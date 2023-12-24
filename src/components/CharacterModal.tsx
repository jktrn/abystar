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
    const [hoveredCharacter, setHoveredCharacter] = useState<string | null>(null);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

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

    const handleMouseEnter = (characterName: string) => {
        // Delay showing the character name after 0.5 seconds
        const id: number = window.setTimeout(() => {
            setHoveredCharacter(characterName);
        }, 500);
        setTimeoutId(id);
    };

    const handleMouseLeave = () => {
        // Clear the timeout and reset the hovered character
        if (timeoutId !== null) {
            window.clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setHoveredCharacter(null);
    };

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
                        <div
                            key={rawCharacter.name}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(rawCharacter.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src={rawCharacter.icon}
                                alt={rawCharacter.name}
                                onClick={() => handleCharacterSelect(rawCharacter.name)}
                                className={`cursor-pointer rounded-full object-cover transition-all duration-100 ease-in hover:scale-105 ${
                                    rawCharacter.implemented ? '' : 'opacity-25'
                                }`}
                                width={70}
                                height={70}
                                style={{
                                    backgroundColor:
                                        elementColors[
                                            rawCharacter.vision as keyof typeof elementColors
                                        ],
                                }}
                            />
                            {hoveredCharacter === rawCharacter.name && (
                                <div className={`absolute top-10 bg-black p-1 rounded-md transition-all duration-100 ease-in ${
                                    rawCharacter.implemented ? 'opacity-80' : 'opacity-25'
                                }`}
                                style={{ 
                                    zIndex: 1,
                                    pointerEvents: 'none' }}
                                >
                                    {rawCharacter.name}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CharacterModal
