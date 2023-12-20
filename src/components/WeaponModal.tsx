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
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default WeaponModal
