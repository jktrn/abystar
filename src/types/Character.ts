interface BaseStat {
    [key: string]: string
}

interface ActiveSkill {
    name: string
    image: string
    description: string
    data: {
        [key: string]: any
    }
}

interface PassiveSkill {
    name: string
    image: string
    description: string
}

interface Constellation {
    name: string
    image: string
    description: string
    level: number
}

export interface Character {
    name: string
    icon: string
    weapon: string
    vision: string
    rarity: number
    description: string
    occupation: string
    baseStats: {
        [key: string]: BaseStat
    }
    activeSkills: ActiveSkill[]
    passiveSkills?: PassiveSkill[]
    constellations: Constellation[]
}
