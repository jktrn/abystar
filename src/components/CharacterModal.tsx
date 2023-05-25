import {
    Box,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import FilterAndSort from '../components/FilterAndSort'
import { Character } from '../types/Character'
import { compareElement } from '../utils/compareElement'
import { elementColors } from '../utils/elementColors'

interface CharacterModalProps {
    isOpen: boolean
    onClose: () => void
    characters: Character[]
    setCharacter: (character: Character) => void
}

export default function CharacterModal({
    isOpen,
    onClose,
    characters,
    setCharacter,
}: CharacterModalProps) {
    const [filterValue, setFilterValue] = useState<string[]>(['all'])
    const [sortOrder, setSortOrder] = useState<string>('element')

    const filterAndSortCharacters = () => {
        const filteredCharacters =
            filterValue.includes('all') || !filterValue.length
                ? characters
                : characters.filter((character) =>
                      filterValue.includes(character.vision.toLowerCase())
                  )
        const sortedCharacters = filteredCharacters.sort((a, b) => {
            switch (sortOrder) {
                case 'asc':
                    return a.name.localeCompare(b.name)
                case 'desc':
                    return b.name.localeCompare(a.name)
                case 'element':
                    return compareElement(
                        a.vision.toLowerCase(),
                        b.vision.toLowerCase()
                    )
                default:
                    return 0
            }
        })
        return sortedCharacters
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                sx={{ backdropFilter: 'blur(5px)' }}
                bg={useColorModeValue(
                    'rgba(0, 0, 0, 0.5)',
                    'rgba(255, 255, 255, 0.2)'
                )}
            />
            <ModalContent>
                <Flex
                    as={ModalBody}
                    className="items-center justify-center h-screen"
                >
                    <Box className="overflow-x-hidden overflow-auto xl:w-[80vw] xl:h-auto max-h-[80vh] w-[80vw] bg-main-900 rounded-lg p-4">
                        <ModalHeader className="flex justify-between items-center mb-4">
                            Select a Character
                            <ModalCloseButton />
                        </ModalHeader>
                        <FilterAndSort
                            filterValue={filterValue}
                            setFilterValue={setFilterValue}
                            sortOrder={sortOrder}
                            setSortOrder={setSortOrder}
                        />
                        <Flex className="flex-wrap gap-[6px] justify-center">
                            {filterAndSortCharacters().map((character) => (
                                <Image
                                    key={character.name}
                                    src={character.icon}
                                    alt={character.name}
                                    onClick={() => {
                                        setCharacter(character)
                                        onClose()
                                    }}
                                    bg={
                                        elementColors[
                                            character.vision.toLowerCase() as keyof typeof elementColors
                                        ]
                                    }
                                    className="object-cover rounded-full cursor-pointer hover:scale-105"
                                    boxSize="70px"
                                />
                            ))}
                        </Flex>
                    </Box>
                </Flex>
            </ModalContent>
        </Modal>
    )
}
