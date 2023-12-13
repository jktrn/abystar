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
}

const WeaponModal = ({ open, onOpenChange, setWeapon }: WeaponModalProps) => {
    const [rawWeapons, setRawWeapons] = useState<RawWeapon[]>([])

    useEffect(() => {
        const weaponsArray = Object.values(weaponData)
        setRawWeapons(weaponsArray)
    }, [])

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
                        <Image
                            key={rawWeapon.name}
                            src={rawWeapon.image}
                            alt={rawWeapon.name}
                            onClick={() => handleWeaponSelect(rawWeapon.name)}
                            className="cursor-pointer rounded object-cover hover:scale-105"
                            width={70}
                            height={70}
                        />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default WeaponModal
