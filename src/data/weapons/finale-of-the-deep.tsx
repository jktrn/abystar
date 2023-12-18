import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const FinaleOfTheDeep: Weapon = {
    name: 'Finale of the Deep',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11425_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'This longsword is as silent as the mysterious ocean depths. It is even more ancient than its stylings might imply.',
    effectName: 'An End Sublime',
    effectDescription:
        'When using an Elemental Skill, ATK will be increased by 12% for 15s, and a Bond of Life worth 25% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, a maximum of 150 ATK will be gained based on 2.4% of the total amount of the Life Bond cleared, lasting for 15s.',
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
                'When using an Elemental Skill, ATK will be increased by 12% for 15s, and a Bond of Life worth 25% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, a maximum of 150 ATK will be gained based on 2.4% of the total amount of the Life Bond cleared, lasting for 15s.',
            level: 1,
        },
        {
            description:
                'When using an Elemental Skill, ATK will be increased by 15% for 15s, and a Bond of Life worth 25% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, a maximum of 187.5 ATK will be gained based on 3% of the total amount of the Life Bond cleared, lasting for 15s.',
            level: 2,
        },
        {
            description:
                'When using an Elemental Skill, ATK will be increased by 18% for 15s, and a Bond of Life worth 25% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, a maximum of 225 ATK will be gained based on 3.6% of the total amount of the Life Bond cleared, lasting for 15s.',
            level: 3,
        },
        {
            description:
                'When using an Elemental Skill, ATK will be increased by 21% for 15s, and a Bond of Life worth 25% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, a maximum of 262.5 ATK will be gained based on 4.2% of the total amount of the Life Bond cleared, lasting for 15s.',
            level: 4,
        },
        {
            description:
                'When using an Elemental Skill, ATK will be increased by 24% for 15s, and a Bond of Life worth 25% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, a maximum of 300 ATK will be gained based on 4.8% of the total amount of the Life Bond cleared, lasting for 15s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default FinaleOfTheDeep
