import Image from 'next/image'
import { HTMLAttributes, memo } from 'react'

// IDK why this works it just does
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
    const elementIcon = `/images/elements/${element.toLowerCase()}.svg`

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
            className="relative h-32 w-32 cursor-pointer rounded-lg bg-cover bg-center duration-100 ease-in hover:scale-105"
            {...props}
        >
            <Image
                src={icon}
                alt="character"
                className="cursor-pointer rounded-lg object-cover duration-100 ease-in"
                width={128}
                height={128}
                unoptimized={true}
            />
            <div className="absolute bottom-0.5 right-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-main-900">
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
