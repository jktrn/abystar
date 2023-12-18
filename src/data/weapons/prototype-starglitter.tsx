import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const PrototypeStarglitter: Weapon = {
    name: 'Prototype Starglitter',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13402_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A hooked spear discovered hidden away in the Blackcliff Forge. The glimmers along the sharp edge are like stars in the night.',
    effectName: 'Magic Affinity',
    effectDescription:
        'After using an Elemental Skill, increases Normal and Charged Attack DMG by 8% for 12s. Max 2 stacks.',
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
                'After using an Elemental Skill, increases Normal and Charged Attack DMG by 8% for 12s. Max 2 stacks.',
            level: 1,
        },
        {
            description:
                'After using an Elemental Skill, increases Normal and Charged Attack DMG by 10% for 12s. Max 2 stacks.',
            level: 2,
        },
        {
            description:
                'After using an Elemental Skill, increases Normal and Charged Attack DMG by 12% for 12s. Max 2 stacks.',
            level: 3,
        },
        {
            description:
                'After using an Elemental Skill, increases Normal and Charged Attack DMG by 14% for 12s. Max 2 stacks.',
            level: 4,
        },
        {
            description:
                'After using an Elemental Skill, increases Normal and Charged Attack DMG by 16% for 12s. Max 2 stacks.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default PrototypeStarglitter
