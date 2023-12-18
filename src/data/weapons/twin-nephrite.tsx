import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TwinNephrite: Weapon = {
    name: 'Twin Nephrite',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14305_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 3,
    description: 'A jade pendant formed by piecing together two jade stones.',
    effectName: 'Guerilla Tactics',
    effectDescription:
        'Defeating an opponent increases Movement SPD and ATK by 12% for 15s.',
    baseStats: {
        '1/20': {
            'Base ATK': 39.88,
            'Bonus CRIT Rate': 0.034,
        },
        '20/20': {
            'Base ATK': 101.96,
            'Bonus CRIT Rate': 0.0601,
        },
        '20/40': {
            'Base ATK': 121.46,
            'Bonus CRIT Rate': 0.0601,
        },
        '40/40': {
            'Base ATK': 187.21,
            'Bonus CRIT Rate': 0.0876,
        },
        '40/50': {
            'Base ATK': 206.61,
            'Bonus CRIT Rate': 0.0876,
        },
        '50/50': {
            'Base ATK': 239.47,
            'Bonus CRIT Rate': 0.1013,
        },
        '50/60': {
            'Base ATK': 258.97,
            'Bonus CRIT Rate': 0.1013,
        },
        '60/60': {
            'Base ATK': 291.75,
            'Bonus CRIT Rate': 0.115,
        },
        '60/70': {
            'Base ATK': 311.15,
            'Bonus CRIT Rate': 0.115,
        },
        '70/70': {
            'Base ATK': 343.89,
            'Bonus CRIT Rate': 0.1287,
        },
        '70/80': {
            'Base ATK': 363.39,
            'Bonus CRIT Rate': 0.1287,
        },
        '80/80': {
            'Base ATK': 396.08,
            'Bonus CRIT Rate': 0.1425,
        },
        '80/90': {
            'Base ATK': 415.48,
            'Bonus CRIT Rate': 0.1425,
        },
        '90/90': {
            'Base ATK': 448.22,
            'Bonus CRIT Rate': 0.1562,
        },
    },
    refinements: [
        {
            description:
                'Defeating an opponent increases Movement SPD and ATK by 12% for 15s.',
            level: 1,
        },
        {
            description:
                'Defeating an opponent increases Movement SPD and ATK by 14% for 15s.',
            level: 2,
        },
        {
            description:
                'Defeating an opponent increases Movement SPD and ATK by 16% for 15s.',
            level: 3,
        },
        {
            description:
                'Defeating an opponent increases Movement SPD and ATK by 18% for 15s.',
            level: 4,
        },
        {
            description:
                'Defeating an opponent increases Movement SPD and ATK by 20% for 15s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TwinNephrite
