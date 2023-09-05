import { constellationBonuses } from '@/data'
import Image from 'next/image'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'

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
        <Popover>
            <PopoverTrigger asChild>
                <button className="ml-2 h-10 w-full rounded border p-1 text-sm">
                    C{constellation}
                </button>
            </PopoverTrigger>
            <div className="z-50">
                <PopoverContent className="max-w-[96vw] overflow-hidden rounded-md md:max-h-[70vh] md:max-w-[35rem] md:overflow-y-auto">
                    <div className="flex flex-col">
                        <div
                            onClick={() => setConstellation(0)}
                            className={`flex cursor-pointer items-center p-2 ${constellation === 0 ? 'bg-secondary/50' : ''
                                } hover:bg-accent`}
                        >
                            <Image
                                src="/images/skill-icons/constellations/placeholder.png"
                                alt="No Constellations"
                                width={50}
                                height={50}
                                className="rounded-md object-contain"
                            />
                            <div className="flex flex-col gap-1 ml-4">
                                <p className="flex items-center gap-2">
                                    <Badge variant="secondary">C0</Badge> No
                                    Constellations
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    No Effect
                                </p>
                            </div>
                        </div>
                        {constellations.map((currentConstellation, index) => (
                            <div
                                key={currentConstellation.name}
                                onClick={() => setConstellation(index + 1)}
                                className={`flex cursor-pointer items-center p-2 ${index + 1 <= constellation
                                        ? 'bg-secondary/50'
                                        : ''
                                    } hover:bg-accent`}
                            >
                                <Image
                                    src={currentConstellation.icon}
                                    alt={currentConstellation.name}
                                    width={50}
                                    height={50}
                                    className="rounded-md object-contain"
                                />
                                <div className="flex flex-col gap-1 ml-4">
                                    <p className="flex items-center gap-2">
                                        <Badge variant="secondary">
                                            C{index + 1}
                                        </Badge>
                                        {' '}
                                        {currentConstellation.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {currentConstellation.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </PopoverContent>
            </div>
        </Popover>
    )
}

export default ConstellationPopover
