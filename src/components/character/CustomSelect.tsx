import { selectStyles } from '@/styles'
import Select from 'react-select'

interface CustomSelectProps {
    options: { value: string | number; label: string }[]
    value: string | number
    onChange: (value: string | number) => void
    [key: string]: any
}

const CustomSelect = ({ options, value, onChange, ...props }: CustomSelectProps) => {
    return (
        <Select
            value={options.find((option) => option.value === value)}
            onChange={(option) => onChange(option?.value ?? '')}
            options={options}
            styles={selectStyles}
            maxMenuHeight={200}
            isSearchable={false}
            className="md:w-full"
            {...props}
        />
    )
}

export default CustomSelect
