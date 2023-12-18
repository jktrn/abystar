import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const WhiteIronGreatsword: Weapon = {
    name: 'White Iron Greatsword',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12303_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 3,
    description:
        'A claymore made from white iron. Lightweight without compromising on power. Effective even when wielded by one of average strength, it is extremely deadly in the hands of a physically stronger wielder.',
    effectName: 'Cull the Weak',
    effectDescription: 'Defeating an opponent restores 8% HP.',
    baseStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Bonus Def': 0.0956,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Bonus Def': 0.1689,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Bonus Def': 0.1689,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Bonus Def': 0.2462,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Bonus Def': 0.2462,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Bonus Def': 0.2848,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Bonus Def': 0.2848,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Bonus Def': 0.3234,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Bonus Def': 0.3234,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Bonus Def': 0.3619,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Bonus Def': 0.3619,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Bonus Def': 0.4006,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Bonus Def': 0.4006,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Bonus Def': 0.4392,
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

export default WhiteIronGreatsword
