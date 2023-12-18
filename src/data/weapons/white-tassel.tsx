import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const WhiteTassel: Weapon = {
    name: 'White Tassel',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13301_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 3,
    description:
        "A standard-issue weapon of the Millelith soldiers. It has a sturdy shaft and sharp spearhead. It's a reliable weapon.",
    effectName: 'Sharp',
    effectDescription: 'Increases Normal Attack DMG by 24%.',
    baseStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Bonus CRIT Rate': 0.051,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Bonus CRIT Rate': 0.0901,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Bonus CRIT Rate': 0.0901,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Bonus CRIT Rate': 0.1313,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Bonus CRIT Rate': 0.1313,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Bonus CRIT Rate': 0.1519,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Bonus CRIT Rate': 0.1519,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Bonus CRIT Rate': 0.1725,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Bonus CRIT Rate': 0.1725,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Bonus CRIT Rate': 0.1931,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Bonus CRIT Rate': 0.1931,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Bonus CRIT Rate': 0.2137,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Bonus CRIT Rate': 0.2137,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Bonus CRIT Rate': 0.2343,
        },
    },
    refinements: [
        {
            description: 'Increases Normal Attack DMG by 24%.',
            level: 1,
        },
        {
            description: 'Increases Normal Attack DMG by 30%.',
            level: 2,
        },
        {
            description: 'Increases Normal Attack DMG by 36%.',
            level: 3,
        },
        {
            description: 'Increases Normal Attack DMG by 42%.',
            level: 4,
        },
        {
            description: 'Increases Normal Attack DMG by 48%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default WhiteTassel
