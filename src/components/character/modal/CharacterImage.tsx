import Image from 'next/image'
import { HTMLAttributes, memo } from 'react'

interface CharacterImageProps extends HTMLAttributes<HTMLDivElement> {
    icon: string
    rarity: number
    element: string
}

const CharacterImage = ({
    icon,
    rarity,
    element,
    ...props
}: CharacterImageProps) => {
    const backgroundImage = `/images/item-backgrounds/${rarity}-star.png`
    const elementIcon = `/images/elements/${element.toLowerCase()}.svg`

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
            className="relative cursor-pointer rounded-lg bg-cover bg-center duration-100 ease-in hover:scale-105"
            {...props}
        >
            <Image
                src={icon}
                alt="character"
                className="cursor-pointer rounded-lg object-cover duration-100 ease-in"
                width={148}
                height={148}
                unoptimized={true}
                priority={true}
            />
            <div className="absolute bottom-0.5 right-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-background">
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

// Memoize the component so it doesn't rerender when it doesn't need to
export default memo(CharacterImage)
