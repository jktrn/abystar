import React from 'react'
import { Text, Flex } from '@chakra-ui/react'
import Select from 'react-select'
import { filterCustomStyles } from '../styles/filterCustomStyles'
import { sortCustomStyles } from '../styles/sortCustomStyles'

// Define an interface for the props
interface FilterAndSortProps {
    filterValue: string[]
    setFilterValue: (value: string[]) => void
    sortOrder: string
    setSortOrder: (value: string) => void
}

// Define a custom component that renders the filter and sort dropdowns
const FilterAndSort = ({
    // Add a colon and the type after the prop name
    filterValue,
    setFilterValue,
    sortOrder,
    setSortOrder,
}: FilterAndSortProps) => {
    // Define the options for the filter select
    const filterOptions = [
        { value: 'pyro', label: 'Pyro' },
        { value: 'geo', label: 'Geo' },
        { value: 'dendro', label: 'Dendro' },
        { value: 'anemo', label: 'Anemo' },
        { value: 'hydro', label: 'Hydro' },
        { value: 'cryo', label: 'Cryo' },
        { value: 'electro', label: 'Electro' },
    ]

    // Define the options for the sort select
    const sortOptions = [
        { value: '', label: 'None' },
        { value: 'asc', label: 'Name (A-Z)' },
        { value: 'desc', label: 'Name (Z-A)' },
    ]

    return (
        <>
            <Flex className="items-center flex-col sm:flex-row sm:gap-4 mb-4">
                <Text>Filter:</Text>
                <Select
                    isMulti
                    value={filterOptions.filter((option) =>
                        filterValue.includes(option.value)
                    )}
                    onChange={(options) =>
                        setFilterValue(options.map((option) => option.value))
                    }
                    options={filterOptions}
                    className="w-full sm:w-auto"
                    styles={filterCustomStyles}
                    menuPortalTarget={document.body}
                />
                <Text className="text-gray-300">Sort:</Text>
                <Select
                    value={sortOptions.find(
                        (option) => option.value === sortOrder
                    )}
                    onChange={(option) => setSortOrder(option?.value ?? '')}
                    options={sortOptions}
                    className="w-full sm:w-auto"
                    styles={sortCustomStyles}
                    menuPortalTarget={document.body}
                />
            </Flex>
        </>
    )
}

// Export the FilterAndSort component as a default export
export default FilterAndSort
