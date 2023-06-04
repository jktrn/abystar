// TODO: Merge with LevelSelect.tsx
import { selectStyles } from '@/styles'
import { Character } from '@/types/Character'
import Select from 'react-select'

interface ConstellationSelectProps {
    character: Character
    constellation: string
    setConstellation: (level: string) => void
    [key: string]: any
}

const ConstellationSelect = ({
    character,
    constellation,
    setConstellation,
    ...props
}: ConstellationSelectProps) => {
    const constellationOptions = [
        { value: '0', label: '0' },
        ...(character.constellations?.map((constellation) => ({
            value: constellation.level.toString(),
            label: constellation.level.toString(),
        })) ?? []),
    ]

    return (
        <Select
            instanceId={'constellation-select'}
            value={constellationOptions.find(
                (option) => option.value === constellation
            )}
            onChange={(option) => setConstellation(option?.value ?? '')}
            options={constellationOptions}
            styles={selectStyles}
            maxMenuHeight={200}
            className="w-full"
            {...props}
        />
    )
}

export default ConstellationSelect
