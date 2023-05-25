export interface Character {
    name: string
    icon: string
    weapon: string
    vision: string
    rarity: number
    description: string
    occupation: string
    baseStats: {
        [key: string]: {
            [key: string]: string
        }
    }
    activeSkills: {
        name: string
        image: string
        description: string
        data: {
            [key: string]: any
        }
    }[]
    passiveSkills?: {
        name: string
        image: string
        description: string
    }[]
    constellations?: {
        name: string
        image: string
        description: string
        level?: number
    }[]
}
