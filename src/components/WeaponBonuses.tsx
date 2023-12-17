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

    return (
        <div className="mt-4 flex flex-col gap-2">
            {characterState.weapon.weaponBonus && (
                <BonusToggle
                    key={characterState.weapon.weaponBonus.name}
                    characterState={characterState}
                    bonus={characterState.weapon.weaponBonus}
                    onToggle={handleToggle}
                    isWeaponBonus={true}
                />
            )}
        </div>
    )
}

export default WeaponBonuses
