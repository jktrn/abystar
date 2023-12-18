import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SharpshootersOath: Weapon = {
    name: "Sharpshooter's Oath",
    image: 'https://genshin.honeyhunterworld.com/img/i_n15302_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 3,
    description:
        'This superior bow once belonged to a master archer. However, it gives off a strong scent, thus making it unsuitable for hunting.',
    effectName: 'Precise',
    effectDescription: 'Increases DMG against weak spots by 24%.',
    baseStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Bonus CRIT DMG': 0.102,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Bonus CRIT DMG': 0.1802,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Bonus CRIT DMG': 0.1802,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Bonus CRIT DMG': 0.2626,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Bonus CRIT DMG': 0.2626,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Bonus CRIT DMG': 0.3039,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Bonus CRIT DMG': 0.3039,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Bonus CRIT DMG': 0.3451,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Bonus CRIT DMG': 0.3451,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Bonus CRIT DMG': 0.3862,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Bonus CRIT DMG': 0.3862,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Bonus CRIT DMG': 0.4274,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Bonus CRIT DMG': 0.4274,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Bonus CRIT DMG': 0.4686,
        },
    },
    refinements: [
        {
            description: 'Increases DMG against weak spots by 24%.',
            level: 1,
        },
        {
            description: 'Increases DMG against weak spots by 30%.',
            level: 2,
        },
        {
            description: 'Increases DMG against weak spots by 36%.',
            level: 3,
        },
        {
            description: 'Increases DMG against weak spots by 42%.',
            level: 4,
        },
        {
            description: 'Increases DMG against weak spots by 48%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SharpshootersOath
