import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SacrificialJade: Weapon = {
    name: 'Sacrificial Jade',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14424_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 4,
    description:
        'An ancient jade pendant that gleams like clear water. It seems to have been used in ancient ceremonies.',
    effectName: 'Jade Circulation',
    effectDescription:
        'When not on the field for more than 5s, Max HP will be increased by 32% and Elemental Mastery will be increased by 40. These effects will be canceled after the wielder has been on the field for 10s.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus CRIT Rate': 0.08,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus CRIT Rate': 0.1414,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus CRIT Rate': 0.1414,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus CRIT Rate': 0.206,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus CRIT Rate': 0.206,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus CRIT Rate': 0.2383,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus CRIT Rate': 0.2383,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus CRIT Rate': 0.2706,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus CRIT Rate': 0.2706,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus CRIT Rate': 0.3029,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus CRIT Rate': 0.3029,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus CRIT Rate': 0.3352,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus CRIT Rate': 0.3352,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus CRIT Rate': 0.3675,
        },
    },
    refinements: [
        {
            description:
                'When not on the field for more than 5s, Max HP will be increased by 32% and Elemental Mastery will be increased by 40. These effects will be canceled after the wielder has been on the field for 10s.',
            level: 1,
        },
        {
            description:
                'When not on the field for more than 5s, Max HP will be increased by 40% and Elemental Mastery will be increased by 50. These effects will be canceled after the wielder has been on the field for 10s.',
            level: 2,
        },
        {
            description:
                'When not on the field for more than 5s, Max HP will be increased by 48% and Elemental Mastery will be increased by 60. These effects will be canceled after the wielder has been on the field for 10s.',
            level: 3,
        },
        {
            description:
                'When not on the field for more than 5s, Max HP will be increased by 56% and Elemental Mastery will be increased by 70. These effects will be canceled after the wielder has been on the field for 10s.',
            level: 4,
        },
        {
            description:
                'When not on the field for more than 5s, Max HP will be increased by 64% and Elemental Mastery will be increased by 80. These effects will be canceled after the wielder has been on the field for 10s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SacrificialJade
