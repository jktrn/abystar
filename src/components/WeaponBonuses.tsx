'use client'

import React from 'react'
import BonusToggle from './BonusToggle'
import { Weapon } from '@/interfaces/Weapon'
import { Bonus, CharacterState } from '@/interfaces/Character'
import { elementColors, handleBonusToggle } from '@/lib'

interface WeaponBonusesProps {
    state: CharacterState
    weapon: Weapon | undefined
    activeBonuses: Bonus[]
    setActiveBonuses: (bonuses: Bonus[]) => void
}

const WeaponBonuses = ({
    state,
    weapon,
    activeBonuses,
    setActiveBonuses,
}: WeaponBonusesProps) => {
    const handleToggle = (bonus: Bonus, bonusStacks: number) => {
        handleBonusToggle(bonus, bonusStacks, activeBonuses, setActiveBonuses, 0)
    }

    return (
        <div className="mt-4 flex flex-col gap-2">
            {weapon?.weaponBonus && (
                <BonusToggle
                    key={weapon.weaponBonus.name}
                    bonus={weapon.weaponBonus}
                    onToggle={handleToggle}
                    color={
                        elementColors[
                            state.character.vision.toLowerCase() as keyof typeof elementColors
                        ]
                    }
                    state={state}
                    isWeaponBonus={true}
                />
            )}
        </div>
    )
}

export default WeaponBonuses
