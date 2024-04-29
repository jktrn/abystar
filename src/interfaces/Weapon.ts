import { BaseStat, Bonus } from './Character'

export interface WeaponRefinement {
    description: JSX.Element | string
    level: number
}

export interface RawWeapon {
    name: string
    image: string
    type: string
    rarity: number
    implemented?: boolean
}

export interface Weapon extends RawWeapon {
    description: string
    effectName?: string
    effectDescription?: string
    baseStats: {
        [level: string]: BaseStat
    }
    refinements?: WeaponRefinement[]
    weaponBonuses?: Bonus[]
}
