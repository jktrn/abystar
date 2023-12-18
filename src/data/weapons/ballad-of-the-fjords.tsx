import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const BalladOfTheFjords: Weapon = {
    name: 'Ballad of the Fjords',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13424_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        'A polearm used by those seeking to catch fish in the tundra. It lets none escape.',
    effectName: 'Tales of the Tundra',
    effectDescription:
        'When there are at least 3 different Elemental Types in your party, Elemental Mastery will be increased by 120.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus CRIT Rate': 0.06,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus CRIT Rate': 0.106,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus CRIT Rate': 0.106,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus CRIT Rate': 0.1787,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus CRIT Rate': 0.1787,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus CRIT Rate': 0.203,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus CRIT Rate': 0.203,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus CRIT Rate': 0.2514,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus CRIT Rate': 0.2514,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus CRIT Rate': 0.2756,
        },
    },
    refinements: [
        {
            description:
                'When there are at least 3 different Elemental Types in your party, Elemental Mastery will be increased by 120.',
            level: 1,
        },
        {
            description:
                'When there are at least 3 different Elemental Types in your party, Elemental Mastery will be increased by 150.',
            level: 2,
        },
        {
            description:
                'When there are at least 3 different Elemental Types in your party, Elemental Mastery will be increased by 180.',
            level: 3,
        },
        {
            description:
                'When there are at least 3 different Elemental Types in your party, Elemental Mastery will be increased by 210.',
            level: 4,
        },
        {
            description:
                'When there are at least 3 different Elemental Types in your party, Elemental Mastery will be increased by 240.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default BalladOfTheFjords
