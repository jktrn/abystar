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
import { kebabCase } from '@/lib'
import { weaponData } from '@/data'

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
    const [hoveredWeapon, setHoveredWeapon] = useState<string | null>(null);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    // Sorts by rarity
    useEffect(() => {
        const weaponsArray = Object.values(weaponData)
            .filter((weapon) => weapon.type === characterWeaponType)
            .sort((a, b) => b.rarity - a.rarity)
        setRawWeapons(weaponsArray)
    }, [characterWeaponType])

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

    const handleMouseEnter = (weaponName: string) => {
        // Delay showing the weapon name after 0.5 seconds
        const id: number = window.setTimeout(() => {
            setHoveredWeapon(weaponName);
        }, 500);
        setTimeoutId(id);
    };

    const handleMouseLeave = () => {
        // Clear the timeout and reset the hovered weapon
        if (timeoutId !== null) {
            window.clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setHoveredWeapon(null);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="mb-4 flex items-center justify-between">
                    <DialogTitle>Select a Weapon</DialogTitle>
                    <DialogDescription>
                        {`${rawWeapons.length} available weapons`}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap justify-center gap-[6px]">
                    {rawWeapons.map((rawWeapon) => (
                        <div
                            key={rawWeapon.name}
                            style={{
                                backgroundImage: `url(/images/item-backgrounds/${rawWeapon.rarity}-star.png)`,
                            }}
                            className={`relative cursor-pointer rounded-lg bg-cover bg-center duration-100 ease-in hover:scale-105 ${
                                rawWeapon.implemented ? '' : 'opacity-25'
                            }`}
                            onClick={() => handleWeaponSelect(rawWeapon.name)}
                            onMouseEnter={() => handleMouseEnter(rawWeapon.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src={`/images/weapons/${kebabCase(
                                    rawWeapon.name
                                )}.png`}
                                alt={rawWeapon.name}
                                width={100}
                                height={100}
                                className="drop-shadow"
                            />
                            {hoveredWeapon === rawWeapon.name && (
                                <div className={`absolute top-20 bg-black p-1 rounded-md transition-all duration-100 ease-in ${
                                    rawWeapon.implemented ? 'opacity-80' : 'opacity-25'
                                }`}
                                style={{ 
                                    zIndex: 1,
                                    pointerEvents: 'none' }}
                                >
                                    {rawWeapon.name}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default WeaponModal
