'use client'

import { characterBonuses } from '@/data'
import { Bonus, Character } from '@/types/Character'
import { compareElement, elementColors } from '@/utils'
import Image from 'next/image'
import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface CharacterModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    characters: Character[]
    setCharacter: (character: Character) => void
    setActiveBonuses: (activeBonuses: Bonus[]) => void
}

const CharacterModal = ({
    open,
    onOpenChange,
    characters,
    setCharacter,
    setActiveBonuses,
}: CharacterModalProps) => {
    // Defaulting to "all" filter, "element" sort
    const [filterValue, setFilterValue] = useState<string[]>(['all'])
    const [sortOrder, setSortOrder] = useState<string>('element')

    const filterAndSortCharacters = () => {
        // Filters characters by element
        const filteredCharacters =
            filterValue.includes('all') || !filterValue.length
                ? characters
                : characters.filter((character) =>
                    filterValue.includes(character.vision.toLowerCase())
                )
        // Sorts characters by name and element
        const sortedCharacters = filteredCharacters.sort((a, b) => {
            switch (sortOrder) {
                case 'asc':
                    return a.name.localeCompare(b.name)
                case 'desc':
                    return b.name.localeCompare(a.name)
                case 'element':
                    return compareElement(
                        a.vision.toLowerCase(),
                        b.vision.toLowerCase()
                    )
                default:
                    return 0
            }
        })
        return sortedCharacters
    }

    const availableCharacter = (character: Character) =>
        !!characterBonuses[character.name]

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="mb-4 flex items-center justify-between">
                    <DialogTitle>Select a Character</DialogTitle>
                    <DialogDescription>
                        {`${characters.filter(availableCharacter).length} implemented characters of ${characters.length} available characters`}
                    </DialogDescription>
                </DialogHeader>
                {/* <FilterAndSort
                    filterValue={filterValue}
                    setFilterValue={setFilterValue}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                /> */}
                <div className="flex flex-wrap justify-center gap-[6px]">
                    {filterAndSortCharacters().map((character) => (
                        <Image
                            key={character.name}
                            src={character.icon}
                            alt={character.name}
                            onClick={() => {
                                if (!availableCharacter(character)) return
                                setCharacter(character)
                                setActiveBonuses(
                                    characterBonuses[character.name].filter(
                                        (bonus) => bonus.enabled
                                    )
                                )
                                onOpenChange(false)
                            }}
                            style={{
                                backgroundColor:
                                    elementColors[
                                    character.vision.toLowerCase() as keyof typeof elementColors
                                    ],
                            }}
                            className={`cursor-pointer rounded-full object-cover hover:scale-105 ${availableCharacter(character)
                                ? ''
                                : 'pointer-events-none opacity-50'
                                }`}
                            width={70}
                            height={70}
                        />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CharacterModal
