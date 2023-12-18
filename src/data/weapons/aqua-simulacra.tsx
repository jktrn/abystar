import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const AquaSimulacra: Weapon = {
    name: 'Aqua Simulacra',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15508_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 5,
    description:
        "This longbow's color is unpredictable. Under the light, it takes on a lustrous, watery blue.",
    effectName: 'The Cleansing Form',
    effectDescription:
        'HP is increased by 16%. When there are opponents nearby, the DMG dealt by the wielder of this weapon is increased by 20%. This will take effect whether the character is on-field or not.',
    baseStats: {
        '1/20': {
            'Base ATK': 44.34,
            'Bonus CRIT DMG': 0.192,
        },
        '20/20': {
            'Base ATK': 110.17,
            'Bonus CRIT DMG': 0.3393,
        },
        '20/40': {
            'Base ATK': 141.27,
            'Bonus CRIT DMG': 0.3393,
        },
        '40/40': {
            'Base ATK': 209.82,
            'Bonus CRIT DMG': 0.4944,
        },
        '40/50': {
            'Base ATK': 240.92,
            'Bonus CRIT DMG': 0.4944,
        },
        '50/50': {
            'Base ATK': 275.46,
            'Bonus CRIT DMG': 0.572,
        },
        '50/60': {
            'Base ATK': 306.66,
            'Bonus CRIT DMG': 0.572,
        },
        '60/60': {
            'Base ATK': 341.46,
            'Bonus CRIT DMG': 0.6495,
        },
        '60/70': {
            'Base ATK': 372.56,
            'Bonus CRIT DMG': 0.6495,
        },
        '70/70': {
            'Base ATK': 407.81,
            'Bonus CRIT DMG': 0.7269,
        },
        '70/80': {
            'Base ATK': 438.91,
            'Bonus CRIT DMG': 0.7269,
        },
        '80/80': {
            'Base ATK': 474.55,
            'Bonus CRIT DMG': 0.8045,
        },
        '80/90': {
            'Base ATK': 505.65,
            'Bonus CRIT DMG': 0.8045,
        },
        '90/90': {
            'Base ATK': 541.83,
            'Bonus CRIT DMG': 0.882,
        },
    },
    refinements: [
        {
            description:
                'HP is increased by 16%. When there are opponents nearby, the DMG dealt by the wielder of this weapon is increased by 20%. This will take effect whether the character is on-field or not.',
            level: 1,
        },
        {
            description:
                'HP is increased by 20%. When there are opponents nearby, the DMG dealt by the wielder of this weapon is increased by 25%. This will take effect whether the character is on-field or not.',
            level: 2,
        },
        {
            description:
                'HP is increased by 24%. When there are opponents nearby, the DMG dealt by the wielder of this weapon is increased by 30%. This will take effect whether the character is on-field or not.',
            level: 3,
        },
        {
            description:
                'HP is increased by 28%. When there are opponents nearby, the DMG dealt by the wielder of this weapon is increased by 35%. This will take effect whether the character is on-field or not.',
            level: 4,
        },
        {
            description:
                'HP is increased by 32%. When there are opponents nearby, the DMG dealt by the wielder of this weapon is increased by 40%. This will take effect whether the character is on-field or not.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default AquaSimulacra
