import { Character } from '@/types/Character'
import { Image } from '@chakra-ui/react'
import {
    Select as ShadcnSelect,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

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
        <div className="ml-0 mt-4 flex flex-row flex-wrap justify-center gap-2 md:mt-0 md:flex-col md:justify-normal md:justify-end ">
            {character.activeSkills.map((skill, index) => (
                <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-normal"
                >
                    <div className="flex h-9 w-9 min-w-min flex-none items-center justify-center">
                        <Image
                            src={skillIcons[index]}
                            alt={skill.name}
                            sizes="100%"
                            className="rounded-full bg-secondary/25 object-cover p-1"
                        />
                    </div>
                    <ShadcnSelect
                        onValueChange={(value: any) => {
                            const newActiveSkills = [...activeSkills]
                            newActiveSkills[index] = `Lv${value}` ?? ''
                            setActiveSkills(newActiveSkills)
                            console.log(newActiveSkills)
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={activeSkills[index]} />
                        </SelectTrigger>
                        <SelectContent>
                            {activeSkillOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </ShadcnSelect>
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
