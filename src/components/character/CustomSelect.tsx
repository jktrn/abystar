import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface CustomSelectProps {
    options: { value: string; label: string }[]
    value: string
    onChange: (value: string) => void
    [key: string]: any
}

const CustomSelect = ({ options, value, onChange, ...props }: CustomSelectProps) => {
    return (
        <Select onValueChange={onChange} defaultValue={value} {...props}>
            <SelectTrigger>
                <SelectValue
                    placeholder={
                        options.find((option) => option.value === value)?.label
                    }
                />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default CustomSelect
