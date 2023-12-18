import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Messenger: Weapon = {
    name: 'Messenger',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15305_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 3,
    description:
        'A basic wooden bow. It is said to have once been used as a tool for long-distance communication.',
    effectName: "Archer's Message",
    effectDescription:
        'Charged Attack hits on weak points deal an additional 100% ATK DMG as CRIT DMG. Can only occur once every 10s.',
    baseStats: {
        '1/20': {
            'Base ATK': 39.88,
            'Bonus CRIT DMG': 0.068,
        },
        '20/20': {
            'Base ATK': 101.96,
            'Bonus CRIT DMG': 0.1202,
        },
        '20/40': {
            'Base ATK': 121.46,
            'Bonus CRIT DMG': 0.1202,
        },
        '40/40': {
            'Base ATK': 187.21,
            'Bonus CRIT DMG': 0.1751,
        },
        '40/50': {
            'Base ATK': 206.61,
            'Bonus CRIT DMG': 0.1751,
        },
        '50/50': {
            'Base ATK': 239.47,
            'Bonus CRIT DMG': 0.2026,
        },
        '50/60': {
            'Base ATK': 258.97,
            'Bonus CRIT DMG': 0.2026,
        },
        '60/60': {
            'Base ATK': 291.75,
            'Bonus CRIT DMG': 0.23,
        },
        '60/70': {
            'Base ATK': 311.15,
            'Bonus CRIT DMG': 0.23,
        },
        '70/70': {
            'Base ATK': 343.89,
            'Bonus CRIT DMG': 0.2574,
        },
        '70/80': {
            'Base ATK': 363.39,
            'Bonus CRIT DMG': 0.2574,
        },
        '80/80': {
            'Base ATK': 396.08,
            'Bonus CRIT DMG': 0.2849,
        },
        '80/90': {
            'Base ATK': 415.48,
            'Bonus CRIT DMG': 0.2849,
        },
        '90/90': {
            'Base ATK': 448.22,
            'Bonus CRIT DMG': 0.3124,
        },
    },
    refinements: [
        {
            description:
                'Charged Attack hits on weak points deal an additional 100% ATK DMG as CRIT DMG. Can only occur once every 10s.',
            level: 1,
        },
        {
            description:
                'Charged Attack hits on weak points deal an additional 125% ATK DMG as CRIT DMG. Can only occur once every 10s.',
            level: 2,
        },
        {
            description:
                'Charged Attack hits on weak points deal an additional 150% ATK DMG as CRIT DMG. Can only occur once every 10s.',
            level: 3,
        },
        {
            description:
                'Charged Attack hits on weak points deal an additional 175% ATK DMG as CRIT DMG. Can only occur once every 10s.',
            level: 4,
        },
        {
            description:
                'Charged Attack hits on weak points deal an additional 200% ATK DMG as CRIT DMG. Can only occur once every 10s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default Messenger
