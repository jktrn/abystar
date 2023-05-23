import { StylesConfig } from 'react-select'
import { elementColors } from '../utils/elementColors'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

interface TailwindConfig {
    theme: {
        colors: {
            main: Record<string, string>
        }
    }
}

type OptionTypeBase = {
    value: string
    label: string
}

const colors = resolveConfig(tailwindConfig) as TailwindConfig

export const sortCustomStyles: StylesConfig<OptionTypeBase, false> = {
    control: (provided) => ({
        ...provided,
        backgroundColor: colors.theme.colors.main[700],
        color: '#fff',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#fff',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor:
            state.isFocused || state.isSelected
                ? colors.theme.colors.main[600]
                : colors.theme.colors.main[700],
        color:
            elementColors[state.data.value as keyof typeof elementColors] ||
            provided.color,
    }),
    menuPortal: (provided) => ({
        ...provided,
        zIndex: 999,
        borderRadius: '6px',
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: colors.theme.colors.main[700],
        borderRadius: '6px',
    }),
    menuList: (provided) => ({
        ...provided,
        backgroundColor: colors.theme.colors.main[700],
        padding: 0,
        borderRadius: '6px',
    }),
}
