import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const HarbingerOfDawn: Weapon = {
    name: 'Harbinger of Dawn',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11302_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 3,
    description:
        'A sword that once shone like the sun. The wielder of this sword will be blessed with a "feel-good" buff. The reflective material on the blade has long worn off.',
    effectName: 'Vigorous',
    effectDescription: 'When HP is above 90%, increases CRIT Rate by 14%.',
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
            description: 'When HP is above 90%, increases CRIT Rate by 14%.',
            level: 1,
        },
        {
            description: 'When HP is above 90%, increases CRIT Rate by 17.5%.',
            level: 2,
        },
        {
            description: 'When HP is above 90%, increases CRIT Rate by 21%.',
            level: 3,
        },
        {
            description: 'When HP is above 90%, increases CRIT Rate by 24.5%.',
            level: 4,
        },
        {
            description: 'When HP is above 90%, increases CRIT Rate by 28%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default HarbingerOfDawn
