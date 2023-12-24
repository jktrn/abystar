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
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { elementColors, compareElement, kebabCase } from '@/lib'
import { characterData } from '@/data'
import CustomSelect from '@/components/CustomSelect';

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
    const [filteredCharacters, setFilteredCharacters] = useState<RawCharacter[]>([])
    const DEFAULT_CHARACTER = 'Nahida'
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [selectedVision, setSelectedVision] = useState<string>('All')
    const [selectedWeapon, setSelectedWeapon] = useState<string>('All')
    const [selectedRarity, setSelectedRarity] = useState<string>('All')

    useEffect(() => {
        const charactersArray = Object.values(characterData)
        setRawCharacters(charactersArray)
        selectDefaultCharacter(DEFAULT_CHARACTER, charactersArray)
        setFilteredCharacters(charactersArray)
    }, [])

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase()
        const filteredList = rawCharacters.filter((char) =>
          char.name.toLowerCase().startsWith(lowerCaseSearchTerm) &&
          (selectedVision === 'All' || char.vision.toLowerCase() === selectedVision.toLowerCase()) &&
          (selectedWeapon === 'All' || char.weapon.toLowerCase() === selectedWeapon.toLowerCase()) &&
          (selectedRarity === 'All' || char.rarity === parseInt(selectedRarity.substring(0,1)))
        )
        setFilteredCharacters(filteredList)
    }, [searchTerm, selectedVision, selectedWeapon, selectedRarity, rawCharacters]);

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

    rawCharacters.sort((a, b) =>
        compareElement(a.vision.toLowerCase(), b.vision.toLowerCase())
    )

    const visionOptions = ['All', 'Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'];
    const weaponOptions = ['All', 'Bow', 'Claymore', 'Catalyst', 'Polearm', 'Sword'];
    const rarityOptions = ['All', '5 Star', '4 Star'];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="mb-4 flex items-center justify-between">
                    <DialogTitle>Select a Character</DialogTitle>
                    <DialogDescription>
                        {`${filteredCharacters.length} available characters`}
                    </DialogDescription>
                    <div className="flex flex-wrap justify-center">
                        <Input
                            type="text"
                            placeholder="Search characters"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-3 grid-rows-1 gap-x-10">
                        <div>
                            <p>
                                Element: 
                            </p>
                            <CustomSelect
                                options={visionOptions.map((vision) => ({ value: vision, label: vision }))}
                                value={selectedVision}
                                onChange={(value) => setSelectedVision(value)}
                            />
                        </div>
                        <div>
                            <p>
                                Weapon: 
                            </p>
                            <CustomSelect
                                options={weaponOptions.map((weapon) => ({ value: weapon, label: weapon }))}
                                value={selectedWeapon}
                                onChange={(value) => setSelectedWeapon(value)}
                            />
                        </div>
                        <div>
                            <p>
                                Quality: 
                            </p>
                            <CustomSelect
                                options={rarityOptions.map((rarity) => ({ value: rarity, label: rarity }))}
                                value={selectedRarity}
                                onChange={(value) => setSelectedRarity(value)}
                            />
                        </div>
                    </div>
                </DialogHeader>
                <div className="flex flex-wrap justify-center gap-[6px]">
                    {filteredCharacters.map((rawCharacter) => (
                        <div
                            key={rawCharacter.name}
                            className="relative"
                        >
                            <TooltipProvider>
                                <Tooltip delayDuration={300} disableHoverableContent={true}>
                                    <TooltipTrigger asChild>
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
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" align="center" collisionPadding={150}>
                                        {rawCharacter.name}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CharacterModal
