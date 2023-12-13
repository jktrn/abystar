import { CharacterAttributes } from './Character'

export interface WeaponMainStat {
    [key: string]: number // Optional and can be any secondary stat
}

export interface WeaponRefinement {
    description: string
    level: number
}

export interface WeaponEffect {
    (params: WeaponEffectParams): void
}

export interface WeaponEffectParams {
    attributes: CharacterAttributes
    initialAttributes: CharacterAttributes
    refinement: number
}

export interface Weapon {
    name: string
    image: string
    rarity: number
    description: string
    effectName: string
    effectDescription: string
    mainStats: {
        [level: string]: WeaponMainStat
    }
    refinements: WeaponRefinement[]
    effect: WeaponEffect
}
