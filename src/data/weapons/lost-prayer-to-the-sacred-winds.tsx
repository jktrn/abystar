import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const LostPrayerToTheSacredWinds: Weapon = {
    name: 'Lost Prayer to the Sacred Winds',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14502_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 5,
    description:
        'An educational tome written by anonymous early inhabitants who worshiped the wind. It has been blessed by the wind for its faithfulness and influence over the millennia.',
    effectName: 'Boundless Blessing',
    effectDescription:
        'Increases Movement SPD by 10%. When in battle, gain an 8% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus CRIT Rate': 0.072,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus CRIT Rate': 0.1272,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus CRIT Rate': 0.1272,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus CRIT Rate': 0.1854,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus CRIT Rate': 0.1854,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus CRIT Rate': 0.2145,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus CRIT Rate': 0.2145,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus CRIT Rate': 0.2436,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus CRIT Rate': 0.2436,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus CRIT Rate': 0.2726,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus CRIT Rate': 0.2726,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus CRIT Rate': 0.3017,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus CRIT Rate': 0.3017,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus CRIT Rate': 0.3308,
        },
    },
    refinements: [
        {
            description:
                'Increases Movement SPD by 10%. When in battle, gain an 8% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
            level: 1,
        },
        {
            description:
                'Increases Movement SPD by 10%. When in battle, earn a 10% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
            level: 2,
        },
        {
            description:
                'Increases Movement SPD by 10%. When in battle, gain a 12% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
            level: 3,
        },
        {
            description:
                'Increases Movement SPD by 10%. When in battle, gain a 14% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
            level: 4,
        },
        {
            description:
                'Increases Movement SPD by 10%. When in battle, gain a 16% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default LostPrayerToTheSacredWinds
