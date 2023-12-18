import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TheCatch: Weapon = {
    name: '"The Catch"',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13415_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        'In the distant past, this was the beloved spear of a famed Inazuman bandit.',
    effectName: 'Shanty',
    effectDescription:
        'Increases Elemental Burst DMG by 16% and Elemental Burst CRIT Rate by 6%.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus Energy Recharge': 0.1,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus Energy Recharge': 0.1767,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus Energy Recharge': 0.1767,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus Energy Recharge': 0.2575,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus Energy Recharge': 0.2575,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus Energy Recharge': 0.2979,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus Energy Recharge': 0.2979,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus Energy Recharge': 0.3383,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus Energy Recharge': 0.3383,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus Energy Recharge': 0.3786,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus Energy Recharge': 0.3786,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus Energy Recharge': 0.419,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus Energy Recharge': 0.419,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus Energy Recharge': 0.4594,
        },
    },
    refinements: [
        {
            description:
                'Increases Elemental Burst DMG by 16% and Elemental Burst CRIT Rate by 6%.',
            level: 1,
        },
        {
            description:
                'Increases Elemental Burst DMG by 20% and Elemental Burst CRIT Rate by 7.5%.',
            level: 2,
        },
        {
            description:
                'Increases Elemental Burst DMG by 24% and Elemental Burst CRIT Rate by 9%.',
            level: 3,
        },
        {
            description:
                'Increases Elemental Burst DMG by 28% and Elemental Burst CRIT Rate by 10.5%.',
            level: 4,
        },
        {
            description:
                'Increases Elemental Burst DMG by 32% and Elemental Burst CRIT Rate by 12%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TheCatch
