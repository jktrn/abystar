import { selectStyles } from '@/styles/selectStyles'
import { Character } from '@/types/Character'
import { Image } from '@chakra-ui/react'
import Select from 'react-select'

const activeSkillOptions: any[] = []

function kebabCase(str: string) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase()
}

// TODO: There has got to be a better way of doing this
for (let i = 1; i <= 15; i++) {
    activeSkillOptions.push({ value: i, label: `Lv${i}` })
}

function ActiveSkillsSelect({
    character,
    activeSkills,
    setActiveSkills,
}: {
    character: Character
    activeSkills: string[]
    setActiveSkills: (value: string[]) => void
}) {
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
                        className="!h-8 !w-10 bg-main-700 overflow-hidden rounded-full object-cover p-1"
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

export default ActiveSkillsSelect
