import React from 'react'
import { Select, Text, Flex } from '@chakra-ui/react'
import EmptyIcon from './EmptyIcon'

// Define an interface for the props
interface FilterAndSortProps {
    filterValue: string
    setFilterValue: (value: string) => void
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
    return (
        <>
            <Flex className="justify-between items-center mb-4">
                <Text className="text-gray-300 mr-2">Filter:</Text>
                <Select
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    className="bg-main-700 p-2 text-gray-700 outline-none rounded-md shadow-sm focus:border-blue-500 hover:shadow-lg hover:cursor-pointer"
                    icon={EmptyIcon}
                >
                    <option value="all">All Elements</option>
                    <option value="electro">Electro</option>
                    <option value="geo">Geo</option>
                    <option value="anemo">Anemo</option>
                    <option value="hydro">Hydro</option>
                    <option value="dendro">Dendro</option>
                    <option value="pyro">Pyro</option>
                    <option value="cryo">Cryo</option>
                </Select>
                <Text className="text-gray-300 ml-4 mr-2">Sort:</Text>
                <Select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="bg-main-700 p-2 text-gray-700 outline-none rounded-md shadow-sm focus:border-blue-500 hover:shadow-lg hover:cursor-pointer"
                    icon={EmptyIcon}
                >
                    <option value="element">Element</option>
                    <option value="asc">Name (A-Z)</option>
                    <option value="desc">Name (Z-A)</option>
                </Select>
            </Flex>
        </>
    )
}

// Export the FilterAndSort component as a default export
export default FilterAndSort
