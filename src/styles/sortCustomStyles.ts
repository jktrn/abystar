import { StylesConfig } from 'react-select'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

interface TailwindConfig {
    theme: {
        colors: {
            main: Record<string, string>
            lightgray: Record<string, string>
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
const borderRadius = '6px'

export const sortCustomStyles: StylesConfig<OptionTypeBase, false> = {
    control: (provided) => ({
        ...provided,
        backgroundColor,
        color,
    }),
    singleValue: (provided) => ({
        ...provided,
        color,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor:
            state.isFocused || state.isSelected
                ? colors.theme.colors.main[600]
                : backgroundColor,

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
    }),
}
