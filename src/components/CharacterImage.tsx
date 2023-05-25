import React, { HTMLAttributes, memo } from 'react'
import Image from 'next/image'

interface CharacterImageProps extends HTMLAttributes<HTMLDivElement> {
    icon: string
    rarity: number
    element: string
}

function CharacterImage({
    icon,
    rarity,
    element,
    ...props
}: CharacterImageProps) {
    const backgroundImage = `/images/item-backgrounds/${rarity}-star.png`
    const elementIcon = `/images/elements/${element}.svg`

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
            className="relative w-32 h-32 bg-center bg-cover rounded-lg cursor-pointer hover:scale-105 ease-in duration-100"
            {...props}
        >
            <Image
                src={icon}
                alt="character"
                className="object-cover rounded-lg cursor-pointer ease-in duration-100"
                width={128}
                height={128}
            />
            <div className="w-8 h-8 flex rounded-full bg-main-900 absolute bottom-0.5 right-0.5 items-center justify-center">
                <Image
                    src={elementIcon}
                    alt={`${element} element`}
                    width={24}
                    height={24}
                />
            </div>
        </div>
    )
}

export default memo(CharacterImage)
