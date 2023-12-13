import { CharacterAttributes } from './Character'

export interface WeaponMainStat {
    [key: string]: number
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

export interface RawWeapon {
    name: string
    image: string
    type: string
    rarity: number
    description: string
    effectName?: string
    effectDescription?: string
    mainStats: {
        [level: string]: WeaponMainStat
    }
    refinements?: WeaponRefinement[]
}

export interface Weapon extends RawWeapon {
    effect?: WeaponEffect
}
