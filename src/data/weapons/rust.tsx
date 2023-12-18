import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Rust: Weapon = {
    name: 'Rust',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15405_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 4,
    description:
        'A completely rusted iron greatbow. The average person would lack the strength to even lift it, let alone fire it.',
    effectName: 'Rapid Firing',
    effectDescription:
        'Increases Normal Attack DMG by 40% but decreases Charged Attack DMG by 10%.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus ATK': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus ATK': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus ATK': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus ATK': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus ATK': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus ATK': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus ATK': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus ATK': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus ATK': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus ATK': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus ATK': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus ATK': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus ATK': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus ATK': 0.4135,
        },
    },
    refinements: [
        {
            description:
                'Increases Normal Attack DMG by 40% but decreases Charged Attack DMG by 10%.',
            level: 1,
        },
        {
            description:
                'Increases Normal Attack DMG by 50% but decreases Charged Attack DMG by 10%.',
            level: 2,
        },
        {
            description:
                'Increases Normal Attack DMG by 60% but decreases Charged Attack DMG by 10%.',
            level: 3,
        },
        {
            description:
                'Increases Normal Attack DMG by 70% but decreases Charged Attack DMG by 10%.',
            level: 4,
        },
        {
            description:
                'Increases Normal Attack DMG by 80% but decreases Charged Attack DMG by 10%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default Rust
