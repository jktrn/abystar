'use client'

import CustomSelect from '@/components/CustomSelect'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { characterData } from '@/data'
import { Character, RawCharacter } from '@/interfaces/Character'
import {
    compareElement,
    elementColors,
    kebabCase,
    rarityOptions,
    visionOptions,
    weaponOptions,
} from '@/lib'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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
    const DEFAULT_CHARACTER = 'Hu Tao'

    const [rawCharacters, setRawCharacters] = useState<RawCharacter[]>([])
    const [filteredCharacters, setFilteredCharacters] = useState<RawCharacter[]>([])

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
        const filteredList = rawCharacters.filter(
            (rawCharacter) =>
                rawCharacter.name
                    .toLowerCase()
                    .startsWith(searchTerm.toLowerCase()) &&
                (selectedVision === 'All' ||
                    rawCharacter.vision === selectedVision) &&
                (selectedWeapon === 'All' ||
                    rawCharacter.weapon === selectedWeapon) &&
                (selectedRarity === 'All' ||
                    rawCharacter.rarity === parseInt(selectedRarity.substring(0, 1)))
        )
        setFilteredCharacters(filteredList)
    }, [searchTerm, selectedVision, selectedWeapon, selectedRarity, rawCharacters])

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

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="mb-4 flex items-center justify-between">
                    <DialogTitle>Select a Character</DialogTitle>
                    <DialogDescription>
                        {`${filteredCharacters.length} available characters`}
                    </DialogDescription>
                </DialogHeader>
                <div className="-mt-4 flex flex-wrap items-center justify-center gap-2 rounded-md bg-secondary/25 p-4">
                    <Input
                        type="text"
                        placeholder="Search characters..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-[20rem]"
                    />
                    <div className="flex items-center justify-center gap-2">
                        <span className="ml-4 text-sm text-muted-foreground">
                            Vision:
                        </span>
                        <div className="w-[10rem]">
                            <CustomSelect
                                options={visionOptions.map((vision) => ({
                                    value: vision,
                                    label: vision,
                                }))}
                                value={selectedVision}
                                onChange={(value) => setSelectedVision(value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <span className="ml-4 text-sm text-muted-foreground">
                            Weapon:
                        </span>
                        <div className="w-[10rem]">
                            <CustomSelect
                                options={weaponOptions.map((weapon) => ({
                                    value: weapon,
                                    label: weapon,
                                }))}
                                value={selectedWeapon}
                                onChange={(value) => setSelectedWeapon(value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <span className="ml-4 text-sm text-muted-foreground">
                            Rarity:
                        </span>
                        <div className="w-[10rem]">
                            <CustomSelect
                                options={rarityOptions.map((rarity) => ({
                                    value: rarity,
                                    label: rarity,
                                }))}
                                value={selectedRarity}
                                onChange={(value) => setSelectedRarity(value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-[6px]">
                    {filteredCharacters.map((rawCharacter) => (
                        <div key={rawCharacter.name} className="relative">
                            <TooltipProvider>
                                <Tooltip delayDuration={300}>
                                    <TooltipTrigger asChild>
                                        <Image
                                            src={rawCharacter.icon}
                                            alt={rawCharacter.name}
                                            onClick={() =>
                                                handleCharacterSelect(
                                                    rawCharacter.name
                                                )
                                            }
                                            className={`cursor-pointer rounded-full object-cover transition-all duration-100 ease-in hover:scale-105 ${
                                                rawCharacter.implemented
                                                    ? ''
                                                    : 'opacity-25'
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
                                    <TooltipContent side="top" align="center">
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
