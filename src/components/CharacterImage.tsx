import React, { HTMLAttributes } from 'react'

interface CharacterImageProps extends HTMLAttributes<HTMLDivElement> {
    icon: string
    rarity: number
}

export default function CharacterImage({
    icon,
    rarity,
    ...props
}: CharacterImageProps) {
    console.log(rarity)
    const backgroundImage = `/images/item-backgrounds/${rarity}-star.png`

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
            className="w-32 h-32 bg-center bg-cover rounded-lg cursor-pointer hover:scale-105 ease-in duration-100"
            {...props}
        >
            <img
                src={icon}
                alt="character"
                className="object-cover rounded-lg cursor-pointer ease-in duration-100"
            />
        </div>
    )
}
