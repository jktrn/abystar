import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const IronSting: Weapon = {
    name: 'Iron Sting',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11407_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'An exotic long-bladed rapier that somehow found its way into Liyue via foreign traders. It is light, agile, and sharp.',
    effectName: 'Infusion Stinger',
    effectDescription:
        'Dealing Elemental DMG increases all DMG by 6% for 6s. Max 2 stacks. Can occur once every 1s.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus Elemental Mastery': 36.0,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus Elemental Mastery': 63.61,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus Elemental Mastery': 63.61,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus Elemental Mastery': 92.7,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus Elemental Mastery': 92.7,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus Elemental Mastery': 107.24,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus Elemental Mastery': 107.24,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus Elemental Mastery': 121.79,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus Elemental Mastery': 121.79,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus Elemental Mastery': 136.3,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus Elemental Mastery': 136.3,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus Elemental Mastery': 150.84,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus Elemental Mastery': 150.84,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus Elemental Mastery': 165.38,
        },
    },
    refinements: [
        {
            description:
                'Dealing Elemental DMG increases all DMG by 6% for 6s. Max 2 stacks. Can occur once every 1s.',
            level: 1,
        },
        {
            description:
                'Dealing Elemental DMG increases all DMG by 7.5% for 6s. Max 2 stacks. Can occur once every 1s.',
            level: 2,
        },
        {
            description:
                'Dealing Elemental DMG increases all DMG by 9% for 6s. Max 2 stacks. Can occur once every 1s.',
            level: 3,
        },
        {
            description:
                'Dealing Elemental DMG increases all DMG by 10.5% for 6s. Max 2 stacks. Can occur once every 1s.',
            level: 4,
        },
        {
            description:
                'Dealing Elemental DMG increases all DMG by 12% for 6s. Max 2 stacks. Can occur once every 1s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default IronSting
