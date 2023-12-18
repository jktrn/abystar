import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const RoyalLongsword: Weapon = {
    name: 'Royal Longsword',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11404_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 4,
    description:
        'An old longsword that belonged to the erstwhile rulers of Mondstadt. Exquisitely crafted, the carvings and embellishments testify to the stature of its owner.',
    effectName: 'Focus',
    effectDescription:
        'Upon damaging an opponent, increases CRIT Rate by 8%. Max 5 stacks. A CRIT Hit removes all stacks.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus ATK': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus ATK': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus ATK': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus ATK': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus ATK': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus ATK': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus ATK': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus ATK': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus ATK': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus ATK': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus ATK': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus ATK': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus ATK': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus ATK': 0.4135,
        },
    },
    refinements: [
        {
            description:
                'Upon damaging an opponent, increases CRIT Rate by 8%. Max 5 stacks. A CRIT Hit removes all stacks.',
            level: 1,
        },
        {
            description:
                'Upon damaging an opponent, increases CRIT Rate by 10%. Max 5 stacks. A CRIT Hit removes all stacks.',
            level: 2,
        },
        {
            description:
                'Upon damaging an opponent, increases CRIT Rate by 12%. Max 5 stacks. A CRIT Hit removes all stacks.',
            level: 3,
        },
        {
            description:
                'Upon damaging an opponent, increases CRIT Rate by 14%. Max 5 stacks. A CRIT Hit removes all stacks.',
            level: 4,
        },
        {
            description:
                'Upon damaging an opponent, increases CRIT Rate by 16%. Max 5 stacks. A CRIT Hit removes all stacks.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default RoyalLongsword
