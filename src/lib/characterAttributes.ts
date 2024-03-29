import { CharacterAttributes } from '@/interfaces/Character'

export const defaultCharacterAttributes = {
    HP: 0,
    'Base HP': 0,
    'Bonus HP': 0,
    ATK: 0,
    'Base ATK': 0,
    'Bonus ATK': 0,
    DEF: 0,
    'Base DEF': 0,
    'Bonus DEF': 0,
    'Elemental Mastery': 0,
    'Bonus Elemental Mastery': 0,
    'Energy Recharge': 1,
    'Bonus Energy Recharge': 0,
    'CRIT Rate': 0,
    'Bonus CRIT Rate': 0,
    'CRIT DMG': 0,
    'Bonus CRIT DMG': 0,
    'Pyro DMG Bonus': 0,
    'Cryo DMG Bonus': 0,
    'Hydro DMG Bonus': 0,
    'Electro DMG Bonus': 0,
    'Anemo DMG Bonus': 0,
    'Geo DMG Bonus': 0,
    'Dendro DMG Bonus': 0,
    'Physical DMG Bonus': 0,
    'Healing Bonus': 0,
    'Shield Strength': 0,
    'Normal Attack DMG Bonus': 0,
    'Normal Attack Additive Bonus': 0,
    'Charged Attack DMG Bonus': 0,
    'Charged Attack Additive Bonus': 0,
    'Charged Attack Stamina Cost Multiplier': 0,
    'Plunging Attack DMG Bonus': 0,
    'Plunging Attack Additive Bonus': 0,
    'Elemental Skill DMG Bonus': 0,
    'Elemental Skill CRIT Rate': 0,
    'Elemental Skill CRIT DMG': 0,
    'Elemental Skill Additive Bonus': 0,
    'Elemental Skill CD Reduction': 0,
    'Elemental Burst DMG Bonus': 0,
    'Elemental Burst CRIT Rate': 0,
    'Elemental Burst CRIT DMG': 0,
    'Elemental Burst Additive Bonus': 0,
    'Elemental Burst CD Reduction': 0,
    'All CD Reduction': 0,
    'All DMG Bonus': 0,
    'All Elemental DMG Bonus': 0,
    'Overloaded DMG Bonus': 0,
    'Burning DMG Bonus': 0,
    'Vaporize DMG Bonus': 0,
    'Melt DMG Bonus': 0,
    'Superconduct DMG Bonus': 0,
    'Swirl DMG Bonus': 0,
    'Electro-Charged DMG Bonus': 0,
    'Shattered DMG Bonus': 0,
    'Aggravate DMG Bonus': 0,
    'Spread DMG Bonus': 0,
    'Bloom DMG Bonus': 0,
    'Burgeon DMG Bonus': 0,
    'Hyperbloom DMG Bonus': 0,
    'Bountiful Core DMG Bonus': 0,
    'Pyro RES': 0,
    'Pyro RES Shred': 0,
    'Cryo RES': 0,
    'Cryo RES Shred': 0,
    'Hydro RES': 0,
    'Hydro RES Shred': 0,
    'Electro RES': 0,
    'Electro RES Shred': 0,
    'Anemo RES': 0,
    'Anemo RES Shred': 0,
    'Geo RES': 0,
    'Geo RES Shred': 0,
    'Dendro RES': 0,
    'Dendro RES Shred': 0,
    'Physical RES': 0,
    'Physical RES Shred': 0,
}

export const applySpecialBonuses = (
    attributes: CharacterAttributes
): CharacterAttributes => {
    return {
        ...attributes,
        HP: attributes['Base HP'] * (1 + attributes['Bonus HP']),
        ATK: attributes['Base ATK'] * (1 + attributes['Bonus ATK']),
        DEF: attributes['Base DEF'] * (1 + attributes['Bonus DEF']),
        'Elemental Mastery':
            attributes['Elemental Mastery'] + attributes['Bonus Elemental Mastery'],
        'Energy Recharge':
            attributes['Energy Recharge'] + attributes['Bonus Energy Recharge'],
        'CRIT Rate': attributes['CRIT Rate'] + attributes['Bonus CRIT Rate'],
        'CRIT DMG': attributes['CRIT DMG'] + attributes['Bonus CRIT DMG'],
    }
}
