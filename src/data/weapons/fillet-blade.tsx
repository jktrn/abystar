import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const FilletBlade: Weapon = {
    name: 'Fillet Blade',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11305_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 3,
    description:
        'A sharp filleting knife. The blade is long, thin, and incredibly sharp.',
    effectName: 'Gash',
    effectDescription:
        'On hit, has a 50% chance to deal 240% ATK DMG to a single opponent. Can only occur once every 15s.',
    baseStats: {
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
            description:
                'On hit, has a 50% chance to deal 240% ATK DMG to a single opponent. Can only occur once every 15s.',
            level: 1,
        },
        {
            description:
                'On hit, has a 50% chance to deal 280% ATK DMG to a single opponent. Can only occur once every 14s.',
            level: 2,
        },
        {
            description:
                'On hit, has a 50% chance to deal 320% ATK DMG to a single opponent. Can only occur once every 13s.',
            level: 3,
        },
        {
            description:
                'On hit, has a 50% chance to deal 360% ATK DMG to a single opponent. Can only occur once every 12s.',
            level: 4,
        },
        {
            description:
                'On hit, has a 50% chance to deal 400% ATK DMG to a single target. Can only occur once every 11s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default FilletBlade
