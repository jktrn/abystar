import { Weapon, WeaponEffect } from '@/interfaces/Weapon'

const effect: WeaponEffect = ({ attributes, initialAttributes, refinement }) => {
    // Effect logic here
}

const EbonyBow: Weapon = {
    name: 'Ebony Bow',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15306_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 3,
    description:
        'A longbow made of ebony wood with stiffer limbs than ordinary bows. It is also a far more powerful weapon.',
    effectName: 'Decimate',
    effectDescription: 'Increases DMG against mechanoid Ruin opponents by 40%.',
    mainStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Bonus ATK': 0.0766,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Bonus ATK': 0.1354,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Bonus ATK': 0.1354,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Bonus ATK': 0.1972,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Bonus ATK': 0.1972,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Bonus ATK': 0.2282,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Bonus ATK': 0.2282,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Bonus ATK': 0.2591,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Bonus ATK': 0.2591,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Bonus ATK': 0.29,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Bonus ATK': 0.29,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Bonus ATK': 0.321,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Bonus ATK': 0.321,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Bonus ATK': 0.3519,
        },
    },
    refinements: [
        {
            description: 'Increases DMG against mechanoid Ruin opponents by 40%.',
            level: 1,
        },
        {
            description: 'Increases DMG against mechanoid Ruin opponents by 50%.',
            level: 2,
        },
        {
            description: 'Increases DMG against mechanoid Ruin opponents by 60%.',
            level: 3,
        },
        {
            description: 'Increases DMG against mechanoid Ruin opponents by 70%.',
            level: 4,
        },
        {
            description: 'Increases DMG against mechanoid Ruin opponents by 80%.',
            level: 5,
        },
    ],
    effect,
}

export default EbonyBow
