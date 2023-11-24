import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface CustomSelectProps {
    options: string[]
    value: string
    onChange: (value: string) => void
    [key: string]: any
}

const CustomSelect = ({ options, value, onChange, ...props }: CustomSelectProps) => {
    return (
        <Select onValueChange={onChange} defaultValue={value} {...props}>
            <SelectTrigger>
                <SelectValue placeholder={value} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option} value={option}>
                        {option}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default CustomSelect
