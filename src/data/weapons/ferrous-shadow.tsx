import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const FerrousShadow: Weapon = {
    name: 'Ferrous Shadow',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12301_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 3,
    description:
        'A replica of the famed sword of Arundolyn, the Lion of Light. Feel the power of a legendary hero as you hold this sword in your hand! Imagine yourself as the great warrior himself! Note: Daydreaming not recommended in live combat.',
    effectName: 'Unbending',
    effectDescription:
        'When HP falls below 70%, increases Charged Attack DMG by 30% and Charged Attacks become harder to interrupt.',
    baseStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Bonus HP': 0.0766,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Bonus HP': 0.1354,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Bonus HP': 0.1354,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Bonus HP': 0.1972,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Bonus HP': 0.1972,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Bonus HP': 0.2282,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Bonus HP': 0.2282,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Bonus HP': 0.2591,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Bonus HP': 0.2591,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Bonus HP': 0.29,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Bonus HP': 0.29,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Bonus HP': 0.321,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Bonus HP': 0.321,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Bonus HP': 0.3519,
        },
    },
    refinements: [
        {
            description:
                'When HP falls below 70%, increases Charged Attack DMG by 30% and Charged Attacks become harder to interrupt.',
            level: 1,
        },
        {
            description:
                'When HP falls below 75%, increases Charged Attack DMG by 35% and Charged Attacks become harder to interrupt.',
            level: 2,
        },
        {
            description:
                'When HP falls below 80%, increases Charged Attack DMG by 40% and Charged Attacks become harder to interrupt.',
            level: 3,
        },
        {
            description:
                'When HP falls below 85%, increases Charged Attack DMG by 45% and Charged Attacks become harder to interrupt.',
            level: 4,
        },
        {
            description:
                'When HP falls below 90%, increases Charged Attack DMG by 50% and Charged Attacks become harder to interrupt.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default FerrousShadow
