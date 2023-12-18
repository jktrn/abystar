import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const RightfulReward: Weapon = {
    name: 'Rightful Reward',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13425_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description: 'A sharp spear. Only its tip remains freshly bloodstained.',
    effectName: 'Tip of the Spear',
    effectDescription:
        'When the wielder is healed, restore 8 Energy. This effect can be triggered once every 10s, and can occur even when the character is not on the field.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus HP': 0.06,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus HP': 0.106,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus HP': 0.106,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus HP': 0.1545,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus HP': 0.1545,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus HP': 0.1787,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus HP': 0.1787,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus HP': 0.203,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus HP': 0.203,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus HP': 0.2272,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus HP': 0.2272,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus HP': 0.2514,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus HP': 0.2514,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus HP': 0.2756,
        },
    },
    refinements: [
        {
            description:
                'When the wielder is healed, restore 8 Energy. This effect can be triggered once every 10s, and can occur even when the character is not on the field.',
            level: 1,
        },
        {
            description:
                'When the wielder is healed, restore 10 Energy. This effect can be triggered once every 10s, and can occur even when the character is not on the field.',
            level: 2,
        },
        {
            description:
                'When the wielder is healed, restore 12 Energy. This effect can be triggered once every 10s, and can occur even when the character is not on the field.',
            level: 3,
        },
        {
            description:
                'When the wielder is healed, restore 14 Energy. This effect can be triggered once every 10s, and can occur even when the character is not on the field.',
            level: 4,
        },
        {
            description:
                'When the wielder is healed, restore 16 Energy. This effect can be triggered once every 10s, and can occur even when the character is not on the field.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default RightfulReward
