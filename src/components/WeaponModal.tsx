'use client'

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
import { weaponData } from '@/data'
import { RawWeapon, Weapon } from '@/interfaces/Weapon'
import { kebabCase } from '@/lib'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CustomSelect from './CustomSelect'

interface WeaponModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    setWeapon: (weapon: Weapon) => void
    characterWeaponType?: string
}

const WeaponModal = ({
    open,
    onOpenChange,
    setWeapon,
    characterWeaponType,
}: WeaponModalProps) => {
    const [rawWeapons, setRawWeapons] = useState<RawWeapon[]>([])
    const [filteredWeapons, setFilteredWeapons] = useState<RawWeapon[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [selectedRarity, setSelectedRarity] = useState<string>('All')

    // Sorts by rarity
    useEffect(() => {
        const weaponsArray = Object.values(weaponData)
            .filter((weapon) => weapon.type === characterWeaponType)
            .sort((a, b) => b.rarity - a.rarity)
        setRawWeapons(weaponsArray)
        setFilteredWeapons(weaponsArray)
    }, [characterWeaponType])

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase()
        const filteredList = rawWeapons.filter(
            (weap) =>
                weap.name.toLowerCase().startsWith(lowerCaseSearchTerm) &&
                (selectedRarity === 'All' ||
                    weap.rarity === parseInt(selectedRarity.substring(0, 1)))
        )
        setFilteredWeapons(filteredList)
    }, [searchTerm, selectedRarity, rawWeapons])

    const handleWeaponSelect = async (weaponName: string) => {
        try {
            const weaponModule = await import(
                `@/data/weapons/${kebabCase(weaponName)}.tsx`
            )
            setWeapon(weaponModule.default)
        } catch (error) {
            console.error('Error loading weapon data:', error)
        }
        onOpenChange(false)
    }

    const rarityOptions = ['All', '5 Star', '4 Star', '3 Star', '2 Star', '1 Star']

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="mb-4 flex items-center justify-between">
                    <DialogTitle>Select a Weapon</DialogTitle>
                    <DialogDescription>
                        {`${filteredWeapons.length} available weapons`}
                    </DialogDescription>
                </DialogHeader>
                <div className="-mt-4 flex flex-wrap items-center justify-center gap-2 rounded-md bg-secondary/25 p-4">
                    <Input
                        type="text"
                        placeholder="Search weapons..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-[20rem]"
                    />
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
                <div className="flex flex-wrap justify-center gap-[10px]">
                    {filteredWeapons.map((rawWeapon) => (
                        <div
                            key={rawWeapon.name}
                            style={{
                                backgroundImage: `url(/images/item-backgrounds/${rawWeapon.rarity}-star.png)`,
                            }}
                            className={`relative cursor-pointer rounded-lg bg-cover bg-center duration-100 ease-in hover:scale-105 ${
                                rawWeapon.implemented ? '' : 'opacity-25'
                            }`}
                            onClick={() => handleWeaponSelect(rawWeapon.name)}
                        >
                            <TooltipProvider>
                                <Tooltip delayDuration={300} skipDelayDuration={300}>
                                    <TooltipTrigger asChild>
                                        <Image
                                            src={`/images/weapons/${kebabCase(
                                                rawWeapon.name
                                            )}.png`}
                                            alt={rawWeapon.name}
                                            width={100}
                                            height={100}
                                            className="drop-shadow"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side="top"
                                        align="center"
                                        className="z-[100] !opacity-100"
                                    >
                                        {rawWeapon.name}
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

export default WeaponModal
