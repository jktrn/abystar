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

    const elementColors = {
        electro: 'rgb(146, 92, 194)',
        geo: 'rgb(190, 153, 72)',
        anemo: 'rgb(58, 172, 173)',
        hydro: 'rgb(59, 113, 185)',
        dendro: 'rgb(123, 179, 73)',
        pyro: 'rgb(185, 95, 65)',
        cryo: 'rgb(115, 211, 227)',
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(character)
    }

    // Use the useDisclosure hook to manage the state of the modal
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                                        <Box className="overflow-auto w-1/2 bg-main-900 rounded-lg p-4">
                                            <ModalHeader>
                                                <Flex className="justify-between items-center mb-4">
                                                    Select Character
                                                    <ModalCloseButton />
                                                </Flex>
                                            </ModalHeader>
                                            <Flex className="flex-wrap gap-[6px] justify-center">
                                                {options.map((option) => (
                                                    <Image
                                                        key={option.value.name}
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
                                                ))}
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
