import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SwordOfDescension: Weapon = {
    name: 'Sword of Descension',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11412_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 4,
    description:
        'A sword of unique craftsmanship. It does not appear to belong to this world.',
    effectName: 'Descension',
    effectDescription:
        'Effective only on the following platform: "PlayStation Network"Hitting opponents with Normal and Charged Attacks grants a 50% chance to deal 200% ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by 66.',
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
            'Base ATK': 119.65,
            'Bonus ATK': 0.1354,
        },
        '40/40': {
            'Base ATK': 175.67,
            'Bonus ATK': 0.1972,
        },
        '40/50': {
            'Base ATK': 201.67,
            'Bonus ATK': 0.1972,
        },
        '50/50': {
            'Base ATK': 229.1,
            'Bonus ATK': 0.2282,
        },
        '50/60': {
            'Base ATK': 255.0,
            'Bonus ATK': 0.2282,
        },
        '60/60': {
            'Base ATK': 282.12,
            'Bonus ATK': 0.2591,
        },
        '60/70': {
            'Base ATK': 308.02,
            'Bonus ATK': 0.2591,
        },
        '70/70': {
            'Base ATK': 334.91,
            'Bonus ATK': 0.29,
        },
        '70/80': {
            'Base ATK': 360.91,
            'Bonus ATK': 0.29,
        },
        '80/80': {
            'Base ATK': 387.68,
            'Bonus ATK': 0.321,
        },
        '80/90': {
            'Base ATK': 413.58,
            'Bonus ATK': 0.321,
        },
        '90/90': {
            'Base ATK': 440.19,
            'Bonus ATK': 0.3519,
        },
    },
    refinements: [
        {
            description:
                'Effective only on the following platform: "PlayStation Network"Hitting opponents with Normal and Charged Attacks grants a 50% chance to deal 200% ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by 66.',
            level: 1,
        },
    ],
    // weaponBonuses
}

export default SwordOfDescension
