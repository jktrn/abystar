import Image from 'next/image';
import Select from 'react-select';
import { selectStyles } from '../styles/selectStyles';
import { Character } from '../types/Character';

const activeSkillOptions: any[] = [];

for (let i = 1; i <= 15; i++) {
    activeSkillOptions.push({ value: i, label: `Lv${i}` });
}

function ActiveSkillsSelect({
    character,
    activeSkills,
    setActiveSkills,
}: {
    character: Character;
    activeSkills: string[];
    setActiveSkills: (value: string[]) => void;
}) {
    return (
        <div className="flex flex-col gap-2 justify-end ml-4">
            {character.activeSkills.map((skill, index) => (
                <div key={skill.name} className="flex items-center gap-2">
                    <Image src={skill.image} alt={skill.name} width={32} height={32} />
                    <Select
                        options={activeSkillOptions}
                        defaultValue={{ value: activeSkills[index], label: activeSkills[index] }}
                        onChange={(value) => {
                            const newActiveSkills = [...activeSkills];
                            newActiveSkills[index] = value?.label ?? '';
                            setActiveSkills(newActiveSkills);
                        }}
                        className="w-full"
                        styles={selectStyles}
                    />
                </div>
            ))}
        </div>
    );
}

export default ActiveSkillsSelect;
