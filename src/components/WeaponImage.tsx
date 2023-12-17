import { CharacterState } from '@/interfaces/Character'
import Image from 'next/image'
import { HTMLAttributes, memo } from 'react'
import { kebabCase } from '@/lib'

interface WeaponImageProps extends HTMLAttributes<HTMLDivElement> {
    characterState: CharacterState
}

const WeaponImage = ({ characterState, ...props }: WeaponImageProps) => {
    return (
        <div
            style={{
                backgroundImage: `url(/images/item-backgrounds/${characterState.weapon.rarity}-star.png)`,
            }}
            className="relative h-[148px] w-[148px] cursor-pointer rounded-lg bg-cover bg-center duration-100 ease-in hover:scale-105"
            {...props}
        >
            <Image
                src={`/images/weapons/${kebabCase(characterState.weapon.name)}.png`}
                alt="weapon"
                className="object-fit cursor-pointer rounded-lg drop-shadow duration-100 ease-in"
                width={148}
                height={148}
                unoptimized={true}
                priority={true}
            />
        </div>
    )
}

export default memo(WeaponImage)
