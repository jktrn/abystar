import { CharacterState } from '@/interfaces/Character'
import { kebabCase } from '@/lib'
import Image from 'next/image'

const roundStatValue = (statName: string, value: number) => {
    if (
        ['Base HP', 'Base DEF', 'Bonus Elemental Mastery', 'Base ATK'].includes(
            statName
        )
    ) {
        return Math.round(value)
    } else {
        return `${(value * 100).toFixed(1)}%`
    }
}

const WeaponAttributes = ({
    characterState,
}: {
    characterState: CharacterState
}) => {
    const stats = characterState.weapon.baseStats[characterState.weaponLevel]

    return (
        <div className="flex h-min flex-col self-end rounded-md bg-secondary/25 px-3 py-2 text-muted-foreground md:justify-normal">
            {Object.entries(stats).map(([statName, statValue], index) => (
                <div key={index} className="flex items-center gap-2">
                    <Image
                        src={`/images/attributes/${kebabCase(statName)}.png`}
                        alt={statName}
                        width={12}
                        height={12}
                    />
                    <span>{roundStatValue(statName, statValue)}</span>
                </div>
            ))}
        </div>
    )
}

export default WeaponAttributes
