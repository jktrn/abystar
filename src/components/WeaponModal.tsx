'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { RawWeapon, Weapon } from '@/interfaces/Weapon'
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
import { kebabCase } from '@/lib'
import { weaponData } from '@/data'
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
    const [filteredWeapons, setFilteredWeapons] = useState<RawWeapon[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
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
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const filteredList = rawWeapons.filter((weap) =>
          weap.name.toLowerCase().startsWith(lowerCaseSearchTerm) &&
          (selectedRarity === 'All' || weap.rarity === parseInt(selectedRarity.substring(0,1)))
        );
        setFilteredWeapons(filteredList);
    }, [searchTerm, selectedRarity, rawWeapons]);

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

    const rarityOptions = ['All', '5 Star', '4 Star'];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="mb-4 flex items-center justify-between">
                    <DialogTitle>Select a Weapon</DialogTitle>
                    <DialogDescription>
                        {`${filteredWeapons.length} available weapons`}
                    </DialogDescription>
                    <div className="flex flex-wrap justify-center">
                        <Input
                            type="text"
                            placeholder="Search weapons"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-1 grid-rows-1">
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
                                <Tooltip delayDuration={300} disableHoverableContent={true}>
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
                                    <TooltipContent side="top" align="start" collisionPadding={150}>
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
