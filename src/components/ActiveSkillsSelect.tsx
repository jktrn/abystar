import { Image } from '@chakra-ui/react'
import Select from 'react-select'
import { selectStyles } from '../styles/selectStyles'
import { Character } from '../types/Character'
import elementColors from '../utils/elementColors'

const activeSkillOptions: any[] = []

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
    return (
        <div className="ml-4 flex flex-col justify-end gap-2">
            {character.activeSkills.map((skill, index) => (
                <div key={skill.name} className="flex items-center gap-2">
                    <Image
                        src={skill.image}
                        alt={skill.name}
                        bg={
                            elementColors[
                                character.vision.toLowerCase() as keyof typeof elementColors
                            ]
                        }
                        className="!h-8 !w-10 overflow-hidden rounded-full object-cover p-1"
                    />
                    <Select
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
