import React from 'react'
import { CharacterState } from '@/interfaces/Character'
import CustomSelect from './CustomSelect'
import Image from 'next/image'
import { getTalentOptions, kebabCase } from '@/lib'

interface TalentSelectProps {
    characterState: CharacterState
    setTalentLevels: (value: number[]) => void
}

const TalentSelect = ({ characterState, setTalentLevels }: TalentSelectProps) => {
    //TODO: this is scuffed
    const skillIcons = [
        `/images/normal-attacks/${kebabCase(characterState.character.weapon)}.png`,
        `/images/characters/${kebabCase(characterState.character.name)}-skill.png`,
        `/images/characters/${kebabCase(characterState.character.name)}-burst.png`,
    ]

    return (
        <div className="ml-4 mt-4 flex flex-row flex-wrap justify-center gap-2 md:mt-0 md:flex-col md:justify-end">
            {characterState.character.talents.map((talent, index) => {
                const isAltered =
                    characterState.effectiveTalentLevels[index] !==
                    characterState.characterTalentLevels[index]

                return (
                    <div
                        key={talent.name}
                        className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-normal"
                    >
                        <div className="flex h-9 w-9 min-w-min flex-none items-center justify-center">
                            <Image
                                src={skillIcons[index]}
                                alt={talent.name}
                                width={36}
                                height={36}
                                className="rounded-full bg-secondary/25 object-cover p-1"
                            />
                        </div>
                        <CustomSelect
                            key={`talent-select-${kebabCase(talent.name)}-${
                                characterState.effectiveTalentLevels[index]
                            }`}
                            options={getTalentOptions}
                            value={characterState.effectiveTalentLevels[
                                index
                            ].toString()}
                            onChange={(value) => {
                                const newTalentLevels = [
                                    ...characterState.characterTalentLevels,
                                ]
                                newTalentLevels[index] = parseInt(value, 10)
                                setTalentLevels(newTalentLevels)
                            }}
                            isAltered={isAltered}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default TalentSelect
