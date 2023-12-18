import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface CustomSelectProps {
    options: { [key: string]: any }[]
    value: string
    onChange: (value: string) => void
    isAltered?: boolean
    [key: string]: any
}

const CustomSelect = ({
    options,
    value,
    onChange,
    isAltered,
    ...props
}: CustomSelectProps) => {
    const alteredClass = isAltered ? 'custom-select-altered' : ''
    const isDisabled = options.length === 1

    return (
        <Select
            onValueChange={onChange}
            defaultValue={value}
            disabled={isDisabled}
            {...props}
        >
            <SelectTrigger className={alteredClass}>
                <SelectValue
                    placeholder={
                        options.find((option) => option.value === value)?.label
                    }
                />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default CustomSelect
