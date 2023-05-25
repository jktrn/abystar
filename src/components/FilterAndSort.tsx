import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
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
        { value: 'cryo', label: 'Cryo' },
        { value: 'hydro', label: 'Hydro' },
        { value: 'electro', label: 'Electro' },
    ]

    // Define the options for the sort select
    const sortOptions = [
        { value: 'element', label: 'Element' },
        { value: 'asc', label: 'Name (A-Z)' },
        { value: 'desc', label: 'Name (Z-A)' },
    ]

    return (
        <>
            <Flex className="items-center flex-col w-full sm:flex-row gap-4 mb-4">
                <Flex className="items-center w-full gap-2">
                    <Text>Filter:</Text>
                    <Select
                        isMulti
                        value={filterOptions.filter((option) =>
                            filterValue.includes(option.value)
                        )}
                        onChange={(options) =>
                            setFilterValue(
                                options.map((option) => option.value)
                            )
                        }
                        options={filterOptions}
                        formatOptionLabel={({ value, label }) => (
                            <Flex>
                                <Image src={`/images/elements/${value}.svg`} className="white-svg" alt={label} width={20} height={20} />
                                <Text className="ml-2">{label}</Text>
                            </Flex>
                          )}
                        className="w-full"
                        styles={filterCustomStyles}
                        menuPortalTarget={document.body}
                        hideSelectedOptions={false}
                    />
                </Flex>
                <Flex className="items-center w-full gap-2">
                    <Text>Sort:</Text>
                    <Select
                        value={sortOptions.find(
                            (option) => option.value === sortOrder
                        )}
                        onChange={(option) => setSortOrder(option?.value ?? '')}
                        options={sortOptions}
                        className="w-full"
                        styles={sortCustomStyles}
                        menuPortalTarget={document.body}
                    />
                </Flex>
            </Flex>
        </>
    )
}

// Export the FilterAndSort component as a default export
export default FilterAndSort
