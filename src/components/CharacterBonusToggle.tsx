import { Bonus } from '@/types/Character'
import { useState } from 'react'
import Switch from 'react-switch'
import CustomSelect from './CustomSelect'

interface CharacterBonusToggleProps {
    bonus: Bonus
    onToggle: (bonus: Bonus, currentStacks: number) => void
}

const CharacterBonusToggle = ({
    bonus,
    onToggle,
}: CharacterBonusToggleProps) => {
    const [currentStacks, setCurrentStacks] = useState(0)

    const handleCurrentStacksChange = (newCurrentStacks: number) => {
        setCurrentStacks(newCurrentStacks)
        onToggle(bonus, newCurrentStacks)
    }

    return (
        <label className="flex items-center justify-between rounded-md bg-main-800 p-2">
            <div className="flex flex-col">
                <span className="text-md">{bonus.name}</span>
                <span className="text-xs text-lightgray-200">
                    {bonus.description}
                </span>
            </div>
            {bonus.maxStacks ? (
                <div className="!min-w-max">
                    <CustomSelect
                        options={[
                            { value: '0', label: 'Off' },
                            ...[...Array(bonus.maxStacks)].map((_, i) => ({
                                value: (i + 1).toString(),
                                label: `${i + 1}-Stack`,
                            })),
                        ]}
                        value={currentStacks.toString()}
                        onChange={(value) =>
                            handleCurrentStacksChange(parseInt(value))
                        }
                    />
                </div>
            ) : (
                <Switch
                    id={bonus.name}
                    checked={currentStacks > 0}
                    onChange={() =>
                        handleCurrentStacksChange(currentStacks > 0 ? 0 : 1)
                    }
                    uncheckedIcon={false}
                    checkedIcon={false}
                />
            )}
        </label>
    )
}

export default CharacterBonusToggle
