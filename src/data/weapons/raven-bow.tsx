import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const RavenBow: Weapon = {
    name: 'Raven Bow',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15301_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 3,
    description:
        "Ravens are known to be the ferrymen of the dead. This bow's limb is decorated with raven feathers, which forebode the imminent death of its target.",
    effectName: 'Bane of Flame and Water',
    effectDescription:
        'Increases DMG against opponents affected by Hydro or Pyro by 12%.',
    baseStats: {
        '1/20': {
            'Base ATK': 39.88,
            'Bonus Elemental Mastery': 20.4,
        },
        '20/20': {
            'Base ATK': 101.96,
            'Bonus Elemental Mastery': 36.05,
        },
        '20/40': {
            'Base ATK': 121.46,
            'Bonus Elemental Mastery': 36.05,
        },
        '40/40': {
            'Base ATK': 187.21,
            'Bonus Elemental Mastery': 52.53,
        },
        '40/50': {
            'Base ATK': 206.61,
            'Bonus Elemental Mastery': 52.53,
        },
        '50/50': {
            'Base ATK': 239.47,
            'Bonus Elemental Mastery': 60.77,
        },
        '50/60': {
            'Base ATK': 258.97,
            'Bonus Elemental Mastery': 60.77,
        },
        '60/60': {
            'Base ATK': 291.75,
            'Bonus Elemental Mastery': 69.01,
        },
        '60/70': {
            'Base ATK': 311.15,
            'Bonus Elemental Mastery': 69.01,
        },
        '70/70': {
            'Base ATK': 343.89,
            'Bonus Elemental Mastery': 77.23,
        },
        '70/80': {
            'Base ATK': 363.39,
            'Bonus Elemental Mastery': 77.23,
        },
        '80/80': {
            'Base ATK': 396.08,
            'Bonus Elemental Mastery': 85.48,
        },
        '80/90': {
            'Base ATK': 415.48,
            'Bonus Elemental Mastery': 85.48,
        },
        '90/90': {
            'Base ATK': 448.22,
            'Bonus Elemental Mastery': 93.72,
        },
    },
    refinements: [
        {
            description:
                'Increases DMG against opponents affected by Hydro or Pyro by 12%.',
            level: 1,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Pyro by 15%.',
            level: 2,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Pyro by 18%.',
            level: 3,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Pyro by 21%.',
            level: 4,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Pyro by 24%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default RavenBow
