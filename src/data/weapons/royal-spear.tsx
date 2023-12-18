import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const RoyalSpear: Weapon = {
    name: 'Royal Spear',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13408_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        'This polearm was once cherished by a member of the old nobility that governed Mondstadt long ago. Although it has never seen the light of day, it is still incomparably sharp.',
    effectName: 'Focus',
    effectDescription:
        'Upon damaging an opponent, increases CRIT Rate by 8%. Max 5 stacks. A CRIT Hit removes all stacks.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus ATK': 0.06,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus ATK': 0.106,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus ATK': 0.106,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus ATK': 0.1545,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus ATK': 0.1545,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus ATK': 0.1787,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus ATK': 0.1787,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus ATK': 0.203,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus ATK': 0.203,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus ATK': 0.2272,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus ATK': 0.2272,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus ATK': 0.2514,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus ATK': 0.2514,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus ATK': 0.2756,
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

export default RoyalSpear
