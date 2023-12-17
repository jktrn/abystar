import { CharacterState } from '@/interfaces/Character'
import Image from 'next/image'
import { HTMLAttributes, memo } from 'react'
import { levelOptions, kebabCase } from '@/lib'

interface WeaponImageProps extends HTMLAttributes<HTMLDivElement> {
    characterState: CharacterState
}

const WeaponImage = ({ characterState, ...props }: WeaponImageProps) => {
    if (!characterState.weapon || !characterState.weaponLevel) {
        return (
            <div
                style={{
                    backgroundImage: `url(/images/item-backgrounds/1-star.png)`,
                }}
                className="relative h-[148px] w-[148px] cursor-pointer rounded-lg bg-cover bg-center duration-100 ease-in hover:scale-105"
                {...props}
            >
                <Image
                    src="/images/characters/placeholder.png"
                    alt="empty"
                    className="cursor-pointer rounded-lg object-cover duration-100 ease-in"
                    width={148}
                    height={148}
                    unoptimized={true}
                    priority={true}
                />
            </div>
        )
    }

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
            {/* <div className="absolute bottom-0.5 right-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-background">
                <Image
                    src={typeIcon}
                    alt={`${type} type`}
                    width={24}
                    height={24}
                />
            </div> */}
        </div>
    )
}

export default memo(WeaponImage)
