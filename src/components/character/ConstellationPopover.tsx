import { constellationBonuses } from '@/data'
import {
    Box,
    Flex,
    Image,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Portal,
    Text,
} from '@chakra-ui/react'

interface ConstellationPopoverProps {
    characterName: string
    constellation: number
    setConstellation: (constellation: number) => void
}

const ConstellationPopover = ({
    characterName,
    constellation,
    setConstellation,
}: ConstellationPopoverProps) => {
    const constellations = constellationBonuses[characterName]

    return (
        <Popover placement="auto">
            <PopoverTrigger>
                <button className="ml-2 w-full rounded border bg-main-700 p-1 text-sm">
                    C{constellation}
                </button>
            </PopoverTrigger>
            <Box className="z-50">
                <Portal>
                    <PopoverContent className="max-w-[96vw] overflow-hidden rounded-md bg-main-700 md:max-h-[70vh] md:max-w-[35rem] md:overflow-y-auto">
                        <PopoverArrow />
                        <PopoverBody>
                            <Flex className="flex-col">
                                <Flex
                                    onClick={() => setConstellation(0)}
                                    className={`cursor-pointer items-center p-2 ${
                                        constellation === 0
                                            ? 'bg-main-600'
                                            : 'hover:bg-main-500'
                                    }`}
                                >
                                    <Image
                                        src="/images/skill-icons/constellations/placeholder.png"
                                        alt="No Constellations"
                                        boxSize="50px"
                                        className="rounded-md"
                                    />
                                    <Box className="ml-4">
                                        <Text className="mb-1">
                                            <span className="min-constellation">
                                                C0
                                            </span>{' '}
                                            No Constellations
                                        </Text>
                                        <Text className="text-xs text-lightgray-200">
                                            No Effect
                                        </Text>
                                    </Box>
                                </Flex>
                                {constellations.map(
                                    (currentConstellation, index) => (
                                        <Flex
                                            key={currentConstellation.name}
                                            onClick={() =>
                                                setConstellation(index + 1)
                                            }
                                            className={`cursor-pointer p-2 ${
                                                index + 1 <= constellation
                                                    ? 'bg-main-600'
                                                    : ''
                                            } hover:bg-main-500`}
                                        >
                                            <Image
                                                src={currentConstellation.icon}
                                                alt={currentConstellation.name}
                                                boxSize="50px"
                                                className="rounded-md"
                                            />
                                            <Box className="ml-4">
                                                <Text className="mb-1">
                                                    <span className="min-constellation">{`C${
                                                        index + 1
                                                    }`}</span>{' '}
                                                    {currentConstellation.name}
                                                </Text>
                                                <Text className="text-xs text-lightgray-200">
                                                    {
                                                        currentConstellation.description
                                                    }
                                                </Text>
                                            </Box>
                                        </Flex>
                                    )
                                )}
                            </Flex>
                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Box>
        </Popover>
    )
}

export default ConstellationPopover
