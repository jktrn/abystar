import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const BloodtaintedGreatsword: Weapon = {
    name: 'Bloodtainted Greatsword',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12302_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 3,
    description:
        'A steel sword that is said to have been coated with dragon blood, rendering it invulnerable to damage. This effect is not extended to its wielder, however.',
    effectName: 'Bane of Fire and Thunder',
    effectDescription:
        'Increases DMG dealt against opponents affected by Pyro or Electro by 12%.',
    baseStats: {
        '1/20': {
            'Base ATK': 37.61,
            'Bonus Elemental Mastery': 40.8,
        },
        '20/20': {
            'Base ATK': 85.56,
            'Bonus Elemental Mastery': 72.09,
        },
        '20/40': {
            'Base ATK': 105.06,
            'Bonus Elemental Mastery': 72.09,
        },
        '40/40': {
            'Base ATK': 151.28,
            'Bonus Elemental Mastery': 105.06,
        },
        '40/50': {
            'Base ATK': 170.68,
            'Bonus Elemental Mastery': 105.06,
        },
        '50/50': {
            'Base ATK': 192.71,
            'Bonus Elemental Mastery': 121.54,
        },
        '50/60': {
            'Base ATK': 212.21,
            'Bonus Elemental Mastery': 121.54,
        },
        '60/60': {
            'Base ATK': 233.69,
            'Bonus Elemental Mastery': 138.03,
        },
        '60/70': {
            'Base ATK': 253.09,
            'Bonus Elemental Mastery': 138.03,
        },
        '70/70': {
            'Base ATK': 274.19,
            'Bonus Elemental Mastery': 154.47,
        },
        '70/80': {
            'Base ATK': 293.69,
            'Bonus Elemental Mastery': 154.47,
        },
        '80/80': {
            'Base ATK': 314.45,
            'Bonus Elemental Mastery': 170.95,
        },
        '80/90': {
            'Base ATK': 333.85,
            'Bonus Elemental Mastery': 170.95,
        },
        '90/90': {
            'Base ATK': 354.38,
            'Bonus Elemental Mastery': 187.44,
        },
    },
    refinements: [
        {
            description:
                'Increases DMG dealt against opponents affected by Pyro or Electro by 12%.',
            level: 1,
        },
        {
            description:
                'Increases DMG dealt against opponents affected by Pyro or Electro by 15%.',
            level: 2,
        },
        {
            description:
                'Increases DMG dealt against opponents affected by Pyro or Electro by 18%.',
            level: 3,
        },
        {
            description:
                'Increases DMG dealt against opponents affected by Pyro or Electro by 21%.',
            level: 4,
        },
        {
            description:
                'Increases DMG against opponents affected by Pyro or Electro by 24%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default BloodtaintedGreatsword
