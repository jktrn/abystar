import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonus: Bonus = {
// TODO: Implement
// }

const AmberBead: Weapon = {
    name: 'Amber Bead',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14306_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 3,
    description:
        'A catalyst carved out of amber that gains a warm halo under the sun.',
    effectName: 'Elemental Mastery',
    effectDescription:
        'Normal Attack hits increase all Elemental DMG by 6% for 6s. Max 2 stacks.',
    baseStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Bonus Elemental Mastery': 30.6,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Bonus Elemental Mastery': 54.07,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Bonus Elemental Mastery': 54.07,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Bonus Elemental Mastery': 78.8,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Bonus Elemental Mastery': 78.8,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Bonus Elemental Mastery': 91.16,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Bonus Elemental Mastery': 91.16,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Bonus Elemental Mastery': 103.52,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Bonus Elemental Mastery': 103.52,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Bonus Elemental Mastery': 115.85,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Bonus Elemental Mastery': 115.85,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Bonus Elemental Mastery': 128.21,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Bonus Elemental Mastery': 128.21,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Bonus Elemental Mastery': 140.58,
        },
    },
    refinements: [
        {
            description:
                'Normal Attack hits increase all Elemental DMG by 6% for 6s. Max 2 stacks.',
            level: 1,
        },
        {
            description:
                'Normal Attack hits increase all Elemental DMG by 7.5% for 6s. Max 2 stacks.',
            level: 2,
        },
        {
            description:
                'Normal Attack hits increase all Elemental DMG by 9% for 6s. Max 2 stacks.',
            level: 3,
        },
        {
            description:
                'Normal Attack hits increase all Elemental DMG by 10.5% for 6s. Max 2 stacks.',
            level: 4,
        },
        {
            description:
                'Normal Attack hits increase all Elemental DMG by 12% for 6s. Max 2 stacks.',
            level: 5,
        },
    ],
    // weaponBonus
}

export default AmberBead
