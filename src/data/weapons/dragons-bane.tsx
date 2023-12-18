import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const DragonsBane: Weapon = {
    name: "Dragon's Bane",
    image: 'https://genshin.honeyhunterworld.com/img/i_n13401_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        'A polearm decorated with an entwining golden dragon. Light and sharp, this weapon may very well kill dragons with ease.',
    effectName: 'Bane of Flame and Water',
    effectDescription:
        'Increases DMG against opponents affected by Hydro or Pyro by 20%.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus Elemental Mastery': 48.0,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus Elemental Mastery': 84.82,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus Elemental Mastery': 84.82,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus Elemental Mastery': 123.6,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus Elemental Mastery': 123.6,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus Elemental Mastery': 142.99,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus Elemental Mastery': 142.99,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus Elemental Mastery': 162.38,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus Elemental Mastery': 162.38,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus Elemental Mastery': 181.73,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus Elemental Mastery': 181.73,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus Elemental Mastery': 201.12,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus Elemental Mastery': 201.12,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus Elemental Mastery': 220.51,
        },
    },
    refinements: [
        {
            description:
                'Increases DMG against opponents affected by Hydro or Pyro by 20%.',
            level: 1,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Pyro by 24%.',
            level: 2,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Pyro by 28%.',
            level: 3,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Pyro by 32%.',
            level: 4,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Pyro by 36%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default DragonsBane
