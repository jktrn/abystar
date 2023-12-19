import React, { useState } from 'react'
import { Bonus, CharacterState } from '@/interfaces/Character'
import Image from 'next/image'
import Switch from 'react-switch'
import CustomSelect from './CustomSelect'
import { elementColors } from '@/lib'

interface BonusToggleProps {
    characterState: CharacterState
    bonus: Bonus
    onToggle: (bonus: Bonus, currentStacks: number) => void
    disabled?: boolean
    isWeaponBonus?: boolean
}

const BonusToggle = ({
    characterState,
    bonus,
    onToggle,
    disabled = false,
    isWeaponBonus,
}: BonusToggleProps) => {
    const [currentStacks, setCurrentStacks] = useState(bonus.enabled ? 1 : 0)

    if (!characterState) return null

    const isBonusDisabled =
        disabled ||
        (bonus.minConstellation !== undefined &&
            (characterState.characterConstellation === undefined ||
                bonus.minConstellation > characterState.characterConstellation))

    const handleStackChange = (newStacks: number) => {
        setCurrentStacks(newStacks)
        onToggle(bonus, newStacks)
    }

    return (
        <div
            className={`flex flex-col items-center justify-between rounded-md bg-secondary/25 p-4 md:flex-row ${
                bonus.icon ? 'md:p-4 md:pl-2' : 'md:p-4'
            } ${isBonusDisabled ? 'pointer-events-none brightness-50' : ''}`}
        >
            <div className="flex items-center gap-2 md:flex-row">
                {bonus.icon && (
                    <div className="relative h-10 w-10 min-w-min">
                        <Image
                            className="flex flex-none shrink-0"
                            src={bonus.icon}
                            alt={bonus.name}
                            fill={true}
                            sizes="100%"
                        />
                    </div>
                )}
                <div className="flex flex-col text-center md:text-left">
                    <span className="text-md">{bonus.name}</span>
                    {isWeaponBonus &&
                    characterState.weapon.refinements &&
                    characterState.weaponRefinement ? (
                        <span className="max-w-full break-words text-xs text-muted-foreground md:w-[22rem]">
                            {
                                characterState.weapon.refinements[
                                    characterState.weaponRefinement - 1
                                ].description
                            }
                        </span>
                    ) : (
                        <span className="max-w-full break-words text-xs text-muted-foreground md:w-[22rem]">
                            {bonus.description}
                        </span>
                    )}
                </div>
            </div>
            <div className="ml-4">
                {bonus.maxStacks ? (
                    <CustomSelect
                        options={[
                            ...(bonus.stackOptions || []).map((option, index) => ({
                                value: index.toString(),
                                label: option,
                            })),
                        ]}
                        value={currentStacks.toString()}
                        onChange={(value) => handleStackChange(parseInt(value, 10))}
                        disabled={isBonusDisabled}
                    />
                ) : (
                    <Switch
                        id={bonus.name}
                        checked={currentStacks > 0}
                        onChange={() => handleStackChange(currentStacks > 0 ? 0 : 1)}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor={
                            elementColors[
                                characterState.character
                                    .vision as keyof typeof elementColors
                            ]
                        }
                        disabled={isBonusDisabled}
                        className="mt-4 md:mt-0"
                    />
                )}
            </div>
        </div>
    )
}

export default BonusToggle
