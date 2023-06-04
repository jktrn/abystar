import { selectStyles } from '@/styles'
import { Character } from '@/types/Character'
import { Image } from '@chakra-ui/react'
import Select from 'react-select'

interface ActiveSkillsSelectProps {
    character: Character
    activeSkills: string[]
    setActiveSkills: (value: string[]) => void
}

const activeSkillOptions = [...Array(15)].map((_, i) => ({
    value: (i + 1).toString(),
    label: `Lv${i + 1}`,
}))

const ActiveSkillsSelect = ({
    character,
    activeSkills,
    setActiveSkills,
}: ActiveSkillsSelectProps) => {
    //TODO: Implement this into the JSON
    const skillIcons = [
        `/images/skill-icons/normal-attacks/${kebabCase(character.weapon)}.png`,
        `/images/skill-icons/skills/${kebabCase(character.name)}-skill.png`,
        `/images/skill-icons/bursts/${kebabCase(character.name)}-burst.png`,
    ]

    return (
        <div className="ml-4 flex flex-col justify-end gap-2">
            {character.activeSkills.map((skill, index) => (
                <div key={skill.name} className="flex items-center gap-2">
                    <Image
                        src={skillIcons[index]}
                        alt={skill.name}
                        // bg={
                        //     elementColors[
                        //         character.vision.toLowerCase() as keyof typeof elementColors
                        //     ]
                        // }
                        className="!h-8 !w-10 overflow-hidden rounded-full bg-main-700 object-cover p-1"
                    />
                    <Select
                        instanceId={`active-skill-${index}-select`}
                        options={activeSkillOptions}
                        defaultValue={{
                            value: activeSkills[index],
                            label: activeSkills[index],
                        }}
                        onChange={(value) => {
                            const newActiveSkills = [...activeSkills]
                            newActiveSkills[index] = value?.label ?? ''
                            setActiveSkills(newActiveSkills)
                        }}
                        className="w-full"
                        styles={selectStyles}
                    />
                </div>
            ))}
        </div>
    )
}

function kebabCase(str: string) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase()
}

export default ActiveSkillsSelect
