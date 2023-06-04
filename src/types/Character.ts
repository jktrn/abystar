export interface BaseStat {
    [key: string]: string
}

export interface NewBaseStat {
    [key: string]: number
}

export interface ActiveSkill {
    name: string
    image: string
    description: string
    data: {
        [key: string]: any
    }
}

export interface PassiveSkill {
    name: string
    image: string
    description: string
}

export interface Constellation {
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

export type Bonus = {
    name: string
    effect: (baseStats: NewBaseStat) => NewBaseStat
}
