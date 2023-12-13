import Image from 'next/image'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'
import { CharacterState } from '@/interfaces/Character'

interface ConstellationSelectProps {
    characterState: CharacterState
    value: number
    onChange: (value: number) => void
}

const ConstellationSelect = ({
    characterState,
    value,
    onChange,
}: ConstellationSelectProps) => {
    const constellations = characterState.character.constellationBonuses

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button className="ml-2 h-10 w-full rounded border p-1 text-sm">
                    C{value}
                </button>
            </PopoverTrigger>
            <div className="z-50">
                <PopoverContent className="max-w-[96vw] overflow-hidden rounded-md md:max-h-[70vh] md:max-w-[35rem] md:overflow-y-auto">
                    <div className="flex flex-col">
                        {/* C0 - No Constellations */}
                        <div
                            onClick={() => onChange(0)}
                            className={`flex cursor-pointer items-center p-2 ${
                                value === 0 ? 'bg-secondary/50' : ''
                            } hover:bg-accent`}
                        >
                            <Image
                                src="/images/skill-icons/constellations/placeholder.png"
                                alt="No Constellations"
                                width={50}
                                height={50}
                                className="rounded-md object-contain"
                            />
                            <div className="ml-4 flex flex-col gap-1">
                                <span className="flex items-center gap-2">
                                    <Badge variant="secondary">C0</Badge> No
                                    Constellations
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    No Effect
                                </span>
                            </div>
                        </div>

                        {/* Other Constellations */}
                        {constellations.map((currentConstellation, index) => (
                            <div
                                key={currentConstellation.name}
                                onClick={() => onChange(index + 1)}
                                className={`flex cursor-pointer items-center p-2 ${
                                    index + 1 <= value ? 'bg-secondary/50' : ''
                                } hover:bg-accent`}
                            >
                                <Image
                                    src={currentConstellation.icon}
                                    alt={currentConstellation.name}
                                    width={50}
                                    height={50}
                                    className="rounded-md object-contain"
                                />
                                <div className="ml-4 flex flex-col gap-1">
                                    <span className="flex items-center gap-2">
                                        <Badge variant="secondary">
                                            C{index + 1}
                                        </Badge>{' '}
                                        {currentConstellation.name}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        {currentConstellation.description}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </PopoverContent>
            </div>
        </Popover>
    )
}

export default ConstellationSelect
