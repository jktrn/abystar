import {
    Select as ShadcnSelect,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface CustomSelectProps {
    options: { value: string | number; label: string }[]
    value: string | number
    onChange: (value: string | number) => void
    [key: string]: any
}

const CustomSelect = ({ options, value, onChange, ...props }: CustomSelectProps) => {
    return (
        <ShadcnSelect
            onValueChange={onChange}
            defaultValue={value}
            {...props}
        >
            <SelectTrigger>
                <SelectValue placeholder={options.find((option) => option.value === value)?.label} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </ShadcnSelect>
    )
}

export default CustomSelect
