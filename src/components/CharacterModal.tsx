import React from 'react'
import Image from 'next/image'
import { RawCharacter } from '@/interfaces/Character'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'
import { elementColors, compareElement } from '@/lib'

interface CharacterModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    characters: RawCharacter[]
    setCharacter: (characterName: string) => void
}

const CharacterModal = ({
    open,
    onOpenChange,
    characters,
    setCharacter,
}: CharacterModalProps) => {
    const sortedCharacters = characters.sort((a, b) =>
        compareElement(a.vision.toLowerCase(), b.vision.toLowerCase())
    )

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="mb-4 flex items-center justify-between">
                    <DialogTitle>Select a Character</DialogTitle>
                    <DialogDescription>
                        {`${sortedCharacters.length} available characters`}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap justify-center gap-[6px]">
                    {sortedCharacters.map((character) => (
                        <Image
                            key={character.name}
                            src={character.icon}
                            alt={character.name}
                            onClick={() => {
                                setCharacter(character.name)
                                onOpenChange(false)
                            }}
                            className="cursor-pointer rounded-full object-cover hover:scale-105"
                            width={70}
                            height={70}
                            style={{
                                backgroundColor:
                                    elementColors[
                                        character.vision.toLowerCase() as keyof typeof elementColors
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
