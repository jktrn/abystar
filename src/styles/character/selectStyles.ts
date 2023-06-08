// Generic styles for react-select components
import { StylesConfig } from 'react-select'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

interface TailwindConfig {
    theme: {
        colors: {
            [key: string]: Record<string, string>
        }
    }
}

type OptionTypeBase = {
    value: string
    label: string
}

const colors = resolveConfig(tailwindConfig) as TailwindConfig

const color = colors.theme.colors.lightgray[100]
const backgroundColor = colors.theme.colors.main[700]
const fontSize = '14px'
const borderRadius = '6px'

const selectStyles: StylesConfig<OptionTypeBase, false> = {
    control: (provided) => ({
        ...provided,
        backgroundColor,
        color,
        fontSize,
        minHeight: '20px',
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0 4px',
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        height: '30px',
    }),
    singleValue: (provided) => ({
        ...provided,
        color,
        fontSize,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor:
            state.isFocused || state.isSelected
                ? colors.theme.colors.main[600]
                : backgroundColor,
        color,
        fontSize,
    }),
    input: (provided) => ({
        ...provided,
        color,
    }),
    menuPortal: (provided) => ({
        ...provided,
        zIndex: 999,
        borderRadius,
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor,
        borderRadius,
    }),
    menuList: (provided) => ({
        ...provided,
        backgroundColor,
        padding: 0,
        borderRadius,
        borderColor: colors.theme.colors.main[400],
        borderWidth: '1px',
    }),
}

export default selectStyles
