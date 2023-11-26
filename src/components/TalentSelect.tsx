import React from 'react'
import { Character } from '@/interfaces/Character'
import CustomSelect from './CustomSelect'
import Image from 'next/image'
import { getTalentOptions, kebabCase } from '@/lib'

interface TalentSelectProps {
    character: Character
    talentLevels: number[]
    setTalentLevels: (value: number[]) => void
}

const TalentSelect = ({
    character,
    talentLevels,
    setTalentLevels,
}: TalentSelectProps) => {
    const skillIcons = [
        `/images/skill-icons/normal-attacks/${kebabCase(character.weapon)}.png`,
        `/images/skill-icons/skills/${kebabCase(character.name)}-skill.png`,
        `/images/skill-icons/bursts/${kebabCase(character.name)}-burst.png`,
    ]

    return (
        <div className="ml-4 mt-4 flex flex-row flex-wrap justify-center gap-2 md:mt-0 md:flex-col md:justify-end">
            {character.talents.map((talent, index) => (
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
                        // Changing keys forces re-render
                        key={`talent-select-${kebabCase(talent.name)}-${
                            talentLevels[index]
                        }`}
                        options={getTalentOptions}
                        value={talentLevels[index].toString()}
                        onChange={(value) => {
                            const newTalentLevels = [...talentLevels]
                            newTalentLevels[index] = parseInt(value, 10)
                            setTalentLevels(newTalentLevels)
                        }}
                    />
                </div>
            ))}
        </div>
    )
}

export default TalentSelect
