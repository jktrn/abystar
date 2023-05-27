// Don't worry about this, it's just a custom style for the react-select component

import { StylesConfig } from 'react-select'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import elementColors from '@/utils/elementColors'

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
const borderRadius = '6px'

export const filterCustomStyles: StylesConfig<OptionTypeBase, true> = {
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
        color:
            elementColors[state.data.value as keyof typeof elementColors] ||
            provided.color,
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
    multiValue: (provided) => ({
        ...provided,
        borderRadius: '8px',
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        backgroundColor: colors.theme.colors.main[600],
        color,
        borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        backgroundColor: colors.theme.colors.main[600],
        color,
        borderRadius: `0 ${borderRadius} ${borderRadius} 0`,
        ':hover': {
            backgroundColor:
                elementColors[state.data.value as keyof typeof elementColors] ||
                provided.backgroundColor,
        },
    }),
}
