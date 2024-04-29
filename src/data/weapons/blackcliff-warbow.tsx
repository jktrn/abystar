import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const BlackcliffWarbow: Weapon = {
    name: 'Blackcliff Warbow',
    image: '/images/weapons/UI_EquipIcon_Bow_Blackrock.png',
    type: 'Bow',
    rarity: 4,
    description:
        'A bow made of blackcliff that features extremely sturdy bow limbs. It requires an archer with a strong bow arm to use.',
    effectName: 'Press the Advantage',
    effectDescription:
        'After defeating an enemy, ATK is increased by 12% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus CRIT DMG': 0.08,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus CRIT DMG': 0.1414,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus CRIT DMG': 0.1414,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus CRIT DMG': 0.206,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus CRIT DMG': 0.206,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus CRIT DMG': 0.2383,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus CRIT DMG': 0.2383,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus CRIT DMG': 0.2706,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus CRIT DMG': 0.2706,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus CRIT DMG': 0.3029,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus CRIT DMG': 0.3029,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus CRIT DMG': 0.3352,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus CRIT DMG': 0.3352,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus CRIT DMG': 0.3675,
        },
    },
    refinements: [
        {
            description:
                'After defeating an enemy, ATK is increased by 12% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
            level: 1,
        },
        {
            description:
                'After defeating an enemy, ATK is increased by 15% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
            level: 2,
        },
        {
            description:
                'After defeating an enemy, ATK is increased by 18% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
            level: 3,
        },
        {
            description:
                'After defeating an enemy, ATK is increased by 21% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
            level: 4,
        },
        {
            description:
                'After defeating an enemy, ATK is increased by 24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default BlackcliffWarbow
