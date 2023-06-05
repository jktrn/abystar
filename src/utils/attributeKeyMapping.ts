import { BaseStat, NewBaseStat } from '@/types/Character'

export const attributeKeyMap: BaseStat = {
    HP: 'HP',
    Atk: 'ATK',
    Def: 'DEF',
    EM: 'Elemental Mastery',
    ER: 'Energy Recharge',
    CritRate: 'CRIT Rate',
    CritDMG: 'CRIT DMG',
    Heal: 'Healing Bonus',
    Pyro: 'Pyro DMG Bonus',
    Cryo: 'Cryo DMG Bonus',
    Hydro: 'Hydro DMG Bonus',
    Elec: 'Electro DMG Bonus',
    Anemo: 'Anemo DMG Bonus',
    Geo: 'Geo DMG Bonus',
    Dendro: 'Dendro DMG Bonus',
    Phys: 'Physical DMG Bonus',
}

export const fullBaseStats: NewBaseStat = {
    HP: 0,
    ATK: 0,
    DEF: 0,
    'Elemental Mastery': 0,
    'Energy Recharge': 100,
    'CRIT Rate': 0,
    'CRIT DMG': 0,
    'Healing Bonus': 0,
    'Pyro DMG Bonus': 0,
    'Cryo DMG Bonus': 0,
    'Hydro DMG Bonus': 0,
    'Electro DMG Bonus': 0,
    'Anemo DMG Bonus': 0,
    'Geo DMG Bonus': 0,
    'Dendro DMG Bonus': 0,
    'Physical DMG Bonus': 0,
}
