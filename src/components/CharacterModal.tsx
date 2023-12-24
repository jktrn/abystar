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
    const [filteredCharacters, setFilteredCharacters] = useState<RawCharacter[]>([]);
    const DEFAULT_CHARACTER = 'Nahida'
    const [hoveredCharacter, setHoveredCharacter] = useState<string | null>(null);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const charactersArray = Object.values(characterData)
        setRawCharacters(charactersArray)
        selectDefaultCharacter(DEFAULT_CHARACTER, charactersArray)
        setFilteredCharacters(charactersArray)
    }, [])

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const filteredList = rawCharacters.filter((char) =>
          char.name.toLowerCase().startsWith(lowerCaseSearchTerm)
        );
        setFilteredCharacters(filteredList);
    }, [searchTerm, rawCharacters]);

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
        const id: number = window.setTimeout(() => {
            setHoveredCharacter(characterName);
        }, 500);
        setTimeoutId(id);
    };

    const handleMouseLeave = () => {
        if (timeoutId !== null) {
            window.clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setHoveredCharacter(null);
    };

    rawCharacters.sort((a, b) =>
        compareElement(a.vision.toLowerCase(), b.vision.toLowerCase())
    )

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="mb-4 flex items-center justify-between">
                    <DialogTitle>Select a Character</DialogTitle>
                    <DialogDescription>
                        {`${filteredCharacters.length} available characters`}
                    </DialogDescription>
                    <input
                        type="text"
                        placeholder="Search characters"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border rounded focus:outline-none focus:border-emerald-400"
                    />
                </DialogHeader>
                <div className="flex flex-wrap justify-center gap-[6px]">
                    {filteredCharacters.map((rawCharacter) => (
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
