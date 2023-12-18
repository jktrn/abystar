import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const CinnabarSpindle: Weapon = {
    name: 'Cinnabar Spindle',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11415_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 4,
    description:
        'A sword made from materials that do not belong in this world. The power within might even be able to withstand the corruption of a venom that could corrode a mighty dragon.',
    effectName: 'Spotless Heart',
    effectDescription:
        'Elemental Skill DMG is increased by 40% of DEF. The effect will be triggered no more than once every 1.5s and will be cleared 0.1s after the Elemental Skill deals DMG.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus Def': 0.1501,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus Def': 0.2653,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus Def': 0.2653,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus Def': 0.3866,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus Def': 0.3866,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus Def': 0.4472,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus Def': 0.4472,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus Def': 0.5079,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus Def': 0.5079,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus Def': 0.5684,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus Def': 0.5684,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus Def': 0.6291,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus Def': 0.6291,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus Def': 0.6897,
        },
    },
    refinements: [
        {
            description:
                'Elemental Skill DMG is increased by 40% of DEF. The effect will be triggered no more than once every 1.5s and will be cleared 0.1s after the Elemental Skill deals DMG.',
            level: 1,
        },
        {
            description:
                'Elemental Skill DMG is increased by 50% of DEF. The effect will be triggered no more than once every 1.5s and will be cleared 0.1s after the Elemental Skill deals DMG.',
            level: 2,
        },
        {
            description:
                'Elemental Skill DMG is increased by 60% of DEF. The effect will be triggered no more than once every 1.5s and will be cleared 0.1s after the Elemental Skill deals DMG.',
            level: 3,
        },
        {
            description:
                'Elemental Skill DMG is increased by 70% of DEF. The effect will be triggered no more than once every 1.5s and will be cleared 0.1s after the Elemental Skill deals DMG.',
            level: 4,
        },
        {
            description:
                'Elemental Skill DMG is increased by 80% of DEF. The effect will be triggered no more than once every 1.5s and will be cleared 0.1s after the Elemental Skill deals DMG.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default CinnabarSpindle
