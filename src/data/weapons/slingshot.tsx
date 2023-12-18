import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Slingshot: Weapon = {
    name: 'Slingshot',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15304_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 3,
    description:
        'A bow, despite the name. After countless experiments and improvements to the design, the creator of the ultimate slingshot found himself to have made what was actually a bow.',
    effectName: 'Slingshot',
    effectDescription:
        'If a Normal or Charged Attack hits a target within 0.3s of being fired, increases DMG by 36%. Otherwise, decreases DMG by 10%.',
    baseStats: {
        '1/20': {
            'Base ATK': 37.61,
            'Bonus CRIT Rate': 0.068,
        },
        '20/20': {
            'Base ATK': 85.56,
            'Bonus CRIT Rate': 0.1202,
        },
        '20/40': {
            'Base ATK': 105.06,
            'Bonus CRIT Rate': 0.1202,
        },
        '40/40': {
            'Base ATK': 151.28,
            'Bonus CRIT Rate': 0.1751,
        },
        '40/50': {
            'Base ATK': 170.68,
            'Bonus CRIT Rate': 0.1751,
        },
        '50/50': {
            'Base ATK': 192.71,
            'Bonus CRIT Rate': 0.2026,
        },
        '50/60': {
            'Base ATK': 212.21,
            'Bonus CRIT Rate': 0.2026,
        },
        '60/60': {
            'Base ATK': 233.69,
            'Bonus CRIT Rate': 0.23,
        },
        '60/70': {
            'Base ATK': 253.09,
            'Bonus CRIT Rate': 0.23,
        },
        '70/70': {
            'Base ATK': 274.19,
            'Bonus CRIT Rate': 0.2574,
        },
        '70/80': {
            'Base ATK': 293.69,
            'Bonus CRIT Rate': 0.2574,
        },
        '80/80': {
            'Base ATK': 314.45,
            'Bonus CRIT Rate': 0.2849,
        },
        '80/90': {
            'Base ATK': 333.85,
            'Bonus CRIT Rate': 0.2849,
        },
        '90/90': {
            'Base ATK': 354.38,
            'Bonus CRIT Rate': 0.3124,
        },
    },
    refinements: [
        {
            description:
                'If a Normal or Charged Attack hits a target within 0.3s of being fired, increases DMG by 36%. Otherwise, decreases DMG by 10%.',
            level: 1,
        },
        {
            description:
                'If a Normal or Charged Attack hits a target within 0.3s of being fired, increases DMG by 42%. Otherwise, decreases DMG by 10%.',
            level: 2,
        },
        {
            description:
                'If a Normal or Charged Attack hits a target within 0.3s of being fired, increases DMG by 48%. Otherwise, decreases DMG by 10%.',
            level: 3,
        },
        {
            description:
                'If a Normal or Charged Attack hits a target within 0.3s of being fired, increases DMG by 54%. Otherwise, decreases DMG by 10%.',
            level: 4,
        },
        {
            description:
                'If a Normal or Charged Attack hits a target within 0.3s of being fired, increases DMG by 60%. Otherwise, decreases DMG by 10%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default Slingshot
