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

export const filterCustomStyles: StylesConfig<OptionTypeBase, true> = {
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
    multiValue: (provided) => ({
        ...provided,
        borderRadius: '6px',
    }),
    multiValueLabel: (provided, state) => ({
        ...provided,
        backgroundColor:
            elementColors[state.data.value as keyof typeof elementColors] ||
            provided.backgroundColor,
        color: '#fff',
        borderRadius: '6px 0 0 6px',
    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        backgroundColor:
            elementColors[state.data.value as keyof typeof elementColors] ||
            provided.backgroundColor,
        color: '#fff',
        borderRadius: '0 6px 6px 0',
        ':hover': {
            backgroundColor:
                elementColors[state.data.value as keyof typeof elementColors] ||
                provided.backgroundColor,
            color: '#fff',
        },
    }),
}
