import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const PrimordialJadeWingedspear: Weapon = {
    name: 'Primordial Jade Winged-Spear',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13505_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 5,
    description:
        'A jade polearm made by the archons, capable of slaying ancient beasts.',
    effectName: 'Eagle Spear of Justice',
    effectDescription:
        'On hit, increases ATK by 3.2% for 6s. Max 7 stacks. This effect can only occur once every 0.3s. While in possession of the maximum possible stacks, DMG dealt is increased by 12%.',
    baseStats: {
        '1/20': {
            'Base ATK': 47.54,
            'Bonus CRIT Rate': 0.048,
        },
        '20/20': {
            'Base ATK': 133.29,
            'Bonus CRIT Rate': 0.0848,
        },
        '20/40': {
            'Base ATK': 164.39,
            'Bonus CRIT Rate': 0.0848,
        },
        '40/40': {
            'Base ATK': 260.56,
            'Bonus CRIT Rate': 0.1236,
        },
        '40/50': {
            'Base ATK': 291.66,
            'Bonus CRIT Rate': 0.1236,
        },
        '50/50': {
            'Base ATK': 341.43,
            'Bonus CRIT Rate': 0.143,
        },
        '50/60': {
            'Base ATK': 372.63,
            'Bonus CRIT Rate': 0.143,
        },
        '60/60': {
            'Base ATK': 423.4,
            'Bonus CRIT Rate': 0.1624,
        },
        '60/70': {
            'Base ATK': 454.5,
            'Bonus CRIT Rate': 0.1624,
        },
        '70/70': {
            'Base ATK': 506.22,
            'Bonus CRIT Rate': 0.1817,
        },
        '70/80': {
            'Base ATK': 537.32,
            'Bonus CRIT Rate': 0.1817,
        },
        '80/80': {
            'Base ATK': 589.85,
            'Bonus CRIT Rate': 0.2011,
        },
        '80/90': {
            'Base ATK': 620.95,
            'Bonus CRIT Rate': 0.2011,
        },
        '90/90': {
            'Base ATK': 674.33,
            'Bonus CRIT Rate': 0.2205,
        },
    },
    refinements: [
        {
            description:
                'On hit, increases ATK by 3.2% for 6s. Max 7 stacks. This effect can only occur once every 0.3s. While in possession of the maximum possible stacks, DMG dealt is increased by 12%.',
            level: 1,
        },
        {
            description:
                'On hit, increases ATK by 3.9% for 6s. Max 7 stacks. This effect can only occur once every 0.3s. While in possession of the maximum possible stacks, DMG dealt is increased by 15%.',
            level: 2,
        },
        {
            description:
                'On hit, increases ATK by 4.6% for 6s. Max 7 stacks. This effect can only occur once every 0.3s. While in possession of the maximum possible stacks, DMG dealt is increased by 18%.',
            level: 3,
        },
        {
            description:
                'On hit, increases ATK by 5.3% for 6s. Max 7 stacks. This effect can only occur once every 0.3s. While in possession of the maximum possible stacks, DMG dealt is increased by 21%.',
            level: 4,
        },
        {
            description:
                'On hit, increases ATK by 6% for 6s. Max 7 stacks. This effect can only occur once every 0.3s. While in possession of the maximum possible stacks, DMG dealt is increased by 24%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default PrimordialJadeWingedspear
