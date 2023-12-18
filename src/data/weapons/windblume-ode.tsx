import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const WindblumeOde: Weapon = {
    name: 'Windblume Ode',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15413_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 4,
    description:
        'A bow adorned with nameless flowers that bears the earnest hopes of an equally nameless person.',
    effectName: 'Windblume Wish',
    effectDescription:
        'After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by 16% for 6s.',
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
                'After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by 16% for 6s.',
            level: 1,
        },
        {
            description:
                'After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by 20% for 6s.',
            level: 2,
        },
        {
            description:
                'After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by 24% for 6s.',
            level: 3,
        },
        {
            description:
                'After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by 28% for 6s.',
            level: 4,
        },
        {
            description:
                'After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by 32% for 6s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default WindblumeOde
