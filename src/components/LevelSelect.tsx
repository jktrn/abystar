import { selectStyles } from '@/styles/selectStyles'
import { Character } from '@/types/Character'
import Select from 'react-select'

interface LevelSelectProps {
    character: Character
    level: string
    setLevel: (level: string) => void
    [key: string]: any
}

const LevelSelect = ({
    character,
    level,
    setLevel,
    ...props
}: LevelSelectProps) => {
    const levelOptions = Object.keys(character.baseStats).map((level) => ({
        value: level,
        label: level,
    }))

    return (
        <Select
            instanceId={'level-select'}
            value={levelOptions.find((option) => option.value === level)}
            onChange={(option) => setLevel(option?.value ?? '')}
            options={levelOptions}
            styles={selectStyles}
            maxMenuHeight={200}
            className="w-full"
            {...props}
        />
    )
}

export default LevelSelect
