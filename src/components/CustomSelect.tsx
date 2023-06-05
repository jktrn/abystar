import { selectStyles } from '@/styles'
import Select from 'react-select'

interface CustomSelectProps {
    options: { value: string; label: string }[]
    value: string
    onChange: (value: string) => void
    [key: string]: any
}

const CustomSelect = ({
    options,
    value,
    onChange,
    ...props
}: CustomSelectProps) => {
    return (
        <Select
            instanceId={'select'}
            value={options.find((option) => option.value === value)}
            onChange={(option) => onChange(option?.value ?? '')}
            options={options}
            styles={selectStyles}
            maxMenuHeight={200}
            className="w-full"
            {...props}
        />
    )
}

export default CustomSelect
