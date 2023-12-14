import { BaseStat, Bonus } from './Character'

export interface WeaponRefinement {
    description: string
    level: number
}

export interface RawWeapon {
    name: string
    image: string
    type: string
    rarity: number
    description: string
    effectName?: string
    effectDescription?: string
    baseStats: {
        [level: string]: BaseStat
    }
    refinements?: WeaponRefinement[]
}

export interface Weapon extends RawWeapon {
    weaponBonus?: Bonus
}
