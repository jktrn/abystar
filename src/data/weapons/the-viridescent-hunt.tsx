import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TheViridescentHunt: Weapon = {
    name: 'The Viridescent Hunt',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15409_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 4,
    description:
        'A pure green hunting bow. This once belonged to a certain hunter whose home was the forest.',
    effectName: 'Verdant Wind',
    effectDescription:
        'Upon hit, Normal and Charged Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding opponents, dealing 40% of ATK as DMG to these opponents every 0.5s for 4s. This effect can only occur once every 14s.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus CRIT Rate': 0.06,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus CRIT Rate': 0.106,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus CRIT Rate': 0.106,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus CRIT Rate': 0.1787,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus CRIT Rate': 0.1787,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus CRIT Rate': 0.203,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus CRIT Rate': 0.203,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus CRIT Rate': 0.2514,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus CRIT Rate': 0.2514,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus CRIT Rate': 0.2756,
        },
    },
    refinements: [
        {
            description:
                'Upon hit, Normal and Charged Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding opponents, dealing 40% of ATK as DMG to these opponents every 0.5s for 4s. This effect can only occur once every 14s.',
            level: 1,
        },
        {
            description:
                'Upon hit, Normal and Charged Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding opponents, dealing 50% of ATK as DMG to these opponents every 0.5s for 4s. This effect can only occur once every 13s.',
            level: 2,
        },
        {
            description:
                'Upon hit, Normal and Charged Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding opponents, dealing 60% of ATK as DMG to these opponents every 0.5s for 4s. This effect can only occur once every 12s.',
            level: 3,
        },
        {
            description:
                'Upon hit, Normal and Charged Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding opponents, dealing 70% of ATK as DMG to these opponents every 0.5s for 4s. This effect can only occur once every 11s.',
            level: 4,
        },
        {
            description:
                'Upon hit, Normal and Charged Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding opponents, dealing 80% of ATK as DMG to these opponents every 0.5s for 4s. This effect can only occur once every 10s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TheViridescentHunt
