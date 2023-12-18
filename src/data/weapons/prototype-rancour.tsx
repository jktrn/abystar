import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const PrototypeRancour: Weapon = {
    name: 'Prototype Rancour',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11406_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'An ancient longsword discovered in the Blackcliff Forge that cuts through rocks like a hot knife through butter.',
    effectName: 'Smashed Stone',
    effectDescription:
        'On hit, Normal or Charged Attacks increase ATK and DEF by 4% for 6s. Max 4 stacks. This effect can only occur once every 0.3s.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Physical DMG Bonus': 0.0751,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Physical DMG Bonus': 0.1326,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Physical DMG Bonus': 0.1326,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Physical DMG Bonus': 0.1933,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Physical DMG Bonus': 0.1933,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Physical DMG Bonus': 0.2236,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Physical DMG Bonus': 0.2236,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Physical DMG Bonus': 0.254,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Physical DMG Bonus': 0.254,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Physical DMG Bonus': 0.2842,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Physical DMG Bonus': 0.2842,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Physical DMG Bonus': 0.3145,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Physical DMG Bonus': 0.3145,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Physical DMG Bonus': 0.3449,
        },
    },
    refinements: [
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK and DEF by 4% for 6s. Max 4 stacks. This effect can only occur once every 0.3s.',
            level: 1,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK and DEF by 5% for 6s. Max 4 stacks. This effect can only occur once every 0.3s.',
            level: 2,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK and DEF by 6% for 6s. Max 4 stacks. This effect can only occur once every 0.3s.',
            level: 3,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK and DEF by 7% for 6s. Max 4 stacks. This effect can only occur once every 0.3s.',
            level: 4,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK and DEF by 8% for 6s. Max 4 stacks. This effect can only occur once every 0.3s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default PrototypeRancour
