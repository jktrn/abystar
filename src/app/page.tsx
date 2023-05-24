'use client'

import { useState } from 'react'
import { Character } from '../types/Character'
import charactersData from '../data/characters/characters.json'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    useColorModeValue,
    Image,
    Box,
    Flex,
} from '@chakra-ui/react'

import { elementColors } from '../utils/elementColors'
import FilterAndSort from '../components/FilterAndSort'
import { compareElement } from '../utils/compareElement'
import { darken } from 'polished'

export default function Home() {
    const [character, setCharacter] = useState<Character | null>(null)

    const characters = Object.values(charactersData).map(
        (characterData: any) => ({
            name: characterData.name,
            image: characterData.icon,
            vision: characterData.vision,
            rarity: characterData.rarity,
            baseStats: characterData.baseStats,
        })
    )

    const options = characters.map((character) => ({
        value: character,
        label: character.name,
        image: character.image,
        vision: character.vision,
        rarity: character.rarity,
    }))

    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(character)
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [filterValue, setFilterValue] = useState<string[]>(['all'])
    const [sortOrder, setSortOrder] = useState<string>('element')

    const filterAndSortOptions = () => {
        let filteredOptions =
            filterValue.includes('all') || filterValue.length === 0
                ? options
                : options.filter((option) =>
                      filterValue.includes(option.value.vision.toLowerCase())
                  )

        let sortedOptions = filteredOptions.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.value.name.localeCompare(b.value.name)
            } else if (sortOrder === 'desc') {
                return b.value.name.localeCompare(a.value.name)
            } else if (sortOrder === 'element') {
                return compareElement(
                    a.value.vision.toLowerCase(),
                    b.value.vision.toLowerCase()
                )
            }
        })

        return sortedOptions
    }

    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-main-1000 rounded-lg mr-2 ml-4 my-4">
                <div id="character">
                    <h2 className="text-lg bg-main-800 rounded-t-lg font-bold py-3 px-4">
                        Character
                    </h2>
                    <div className="bg-main-900 p-4">
                        <form onSubmit={handleSubmit}>
                            <button onClick={onOpen}>Select Character</button>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay
                                    sx={{ backdropFilter: 'blur(5px)' }}
                                    bg={useColorModeValue(
                                        'rgba(0,0,0,0.5)',
                                        'rgba(255,255,255,0.2)'
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
                                                {filterAndSortOptions().map(
                                                    (option) => (
                                                        <Image
                                                            key={
                                                                option.value
                                                                    .name
                                                            }
                                                            src={option.image}
                                                            alt={option.label}
                                                            onClick={() => {
                                                                setCharacter(
                                                                    option.value
                                                                )
                                                                onClose()
                                                            }}
                                                            bg={
                                                                elementColors[
                                                                    option.value.vision.toLowerCase() as keyof typeof elementColors
                                                                ]
                                                            }
                                                            className="object-cover rounded-full cursor-pointer hover:scale-105"
                                                            boxSize="70px"
                                                        />
                                                    )
                                                )}
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ModalContent>
                            </Modal>
                        </form>
                    </div>
                </div>

                <div id="attributes">
                    <h2 className="text-lg bg-main-800 font-bold py-3 px-4">
                        Attributes
                    </h2>
                    <div className="bg-main-900 p-4">Attributes</div>
                </div>
            </div>

            <div className="flex-1 bg-main-1000 rounded-lg mx-2 my-4">
                <div id="weapon">
                    <h2 className="text-lg bg-main-800 rounded-t-lg font-bold py-3 px-4">
                        Weapon
                    </h2>
                    <div className="bg-main-900 p-4">Weapon</div>
                </div>

                <div id="artifacts">
                    <h2 className="text-lg bg-main-800 font-bold py-3 px-4">
                        Artifacts
                    </h2>
                    <div className="bg-main-900 p-4">Artifacts</div>
                </div>

                <div id="party-buffs">
                    <h2 className="text-lg bg-main-800 font-bold py-3 px-4">
                        Party Buffs
                    </h2>
                    <div className="bg-main-900 p-4">Party Buffs</div>
                </div>
            </div>

            <div className="flex-1 bg-main-1000 rounded-lg ml-2 mr-4 my-4">
                <div id="results">
                    <h2 className="text-lg bg-main-800 rounded-t-lg font-bold py-3 px-4">
                        Results
                    </h2>
                    <div className="bg-main-900 p-4">Results</div>
                </div>
            </div>
        </div>
    )
}
