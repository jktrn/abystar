import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SkyriderGreatsword: Weapon = {
    name: 'Skyrider Greatsword',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12306_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 3,
    description:
        'A reliable steel sword. The legendary Skyrider once tried to ride it as a flying sword... for the second time.',
    effectName: 'Courage',
    effectDescription:
        'On hit, Normal or Charged Attacks increase ATK by 6% for 6s. Max 4 stacks. Can occur once every 0.5s.',
    baseStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Physical DMG Bonus': 0.0956,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Physical DMG Bonus': 0.1689,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Physical DMG Bonus': 0.1689,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Physical DMG Bonus': 0.2462,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Physical DMG Bonus': 0.2462,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Physical DMG Bonus': 0.2848,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Physical DMG Bonus': 0.2848,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Physical DMG Bonus': 0.3234,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Physical DMG Bonus': 0.3234,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Physical DMG Bonus': 0.3619,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Physical DMG Bonus': 0.3619,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Physical DMG Bonus': 0.4006,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Physical DMG Bonus': 0.4006,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Physical DMG Bonus': 0.4392,
        },
    },
    refinements: [
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK by 6% for 6s. Max 4 stacks. Can occur once every 0.5s.',
            level: 1,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK by 7% for 6s. Max 4 stacks. Can occur once every 0.5s.',
            level: 2,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK by 8% for 6s. Max 4 stacks. Can occur once every 0.5s.',
            level: 3,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK by 9% for 6s. Max 4 stacks. Can occur once every 0.5s.',
            level: 4,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK by 10% for 6s. Max 4 stacks. Can occur once every 0.5s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SkyriderGreatsword
