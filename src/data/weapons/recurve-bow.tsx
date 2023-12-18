import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const RecurveBow: Weapon = {
    name: 'Recurve Bow',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15303_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 3,
    description:
        'It is said that this bow can shoot down eagles in flight, but ultimately how true that is depends on the skill of the archer.',
    effectName: 'Cull the Weak',
    effectDescription: 'Defeating an opponent restores 8% HP.',
    baseStats: {
        '1/20': {
            'Base ATK': 37.61,
            'Bonus HP': 0.1021,
        },
        '20/20': {
            'Base ATK': 85.56,
            'Bonus HP': 0.1805,
        },
        '20/40': {
            'Base ATK': 105.06,
            'Bonus HP': 0.1805,
        },
        '40/40': {
            'Base ATK': 151.28,
            'Bonus HP': 0.263,
        },
        '40/50': {
            'Base ATK': 170.68,
            'Bonus HP': 0.263,
        },
        '50/50': {
            'Base ATK': 192.71,
            'Bonus HP': 0.3043,
        },
        '50/60': {
            'Base ATK': 212.21,
            'Bonus HP': 0.3043,
        },
        '60/60': {
            'Base ATK': 233.69,
            'Bonus HP': 0.3455,
        },
        '60/70': {
            'Base ATK': 253.09,
            'Bonus HP': 0.3455,
        },
        '70/70': {
            'Base ATK': 274.19,
            'Bonus HP': 0.3867,
        },
        '70/80': {
            'Base ATK': 293.69,
            'Bonus HP': 0.3867,
        },
        '80/80': {
            'Base ATK': 314.45,
            'Bonus HP': 0.4279,
        },
        '80/90': {
            'Base ATK': 333.85,
            'Bonus HP': 0.4279,
        },
        '90/90': {
            'Base ATK': 354.38,
            'Bonus HP': 0.4692,
        },
    },
    refinements: [
        {
            description: 'Defeating an opponent restores 8% HP.',
            level: 1,
        },
        {
            description: 'Defeating an opponent restores 10% HP.',
            level: 2,
        },
        {
            description: 'Defeating an opponent restores 12% HP.',
            level: 3,
        },
        {
            description: 'Defeating an opponent restores 14% HP.',
            level: 4,
        },
        {
            description: 'Defeating an opponent restores 16% HP.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default RecurveBow
