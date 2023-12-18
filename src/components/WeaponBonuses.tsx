'use client'

import React from 'react'
import BonusToggle from './BonusToggle'
import { Bonus, CharacterState } from '@/interfaces/Character'
import { handleBonusToggle } from '@/lib'

interface WeaponBonusesProps {
    characterState: CharacterState
    setActiveBonuses: (bonuses: Bonus[]) => void
}

const WeaponBonuses = ({ characterState, setActiveBonuses }: WeaponBonusesProps) => {
    const handleToggle = (bonus: Bonus, bonusStacks: number) => {
        handleBonusToggle(
            bonus,
            bonusStacks,
            characterState.characterActiveBonuses,
            setActiveBonuses,
            0
        )
    }

    if (characterState.weapon.weaponBonuses === undefined) {
        return (
            <div className="flex flex-col gap-2">
                <span className="rounded-md bg-destructive/25 p-2 text-center text-sm">
                    This weapon is unimplemented! No bonuses.
                </span>
            </div>
        )
    }

    if (characterState.weapon.weaponBonuses.length === 0) {
        return (
            <div className="flex flex-col gap-2">
                <span className="rounded-md bg-secondary/25 p-2 text-center text-sm text-muted-foreground">
                    This weapon has no bonuses.
                </span>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-2">
            {characterState.weapon.weaponBonuses &&
                characterState.weapon.weaponBonuses.map((bonus, index) => (
                    <BonusToggle
                        key={index}
                        characterState={characterState}
                        bonus={bonus}
                        onToggle={handleToggle}
                        isWeaponBonus={true}
                    />
                ))}
        </div>
    )
}

export default WeaponBonuses
