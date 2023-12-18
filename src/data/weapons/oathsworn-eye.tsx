import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const OathswornEye: Weapon = {
    name: 'Oathsworn Eye',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14415_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 4,
    description:
        'A national treasure of Byakuyakoku stored in the Dainichi Mikoshi. With the coming of the Serpent God, this item was used to notarize great oaths and wishes.',
    effectName: 'People of the Faltering Light',
    effectDescription:
        'Increases Energy Recharge by 24% for 10s after using an Elemental Skill.',
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
                'Increases Energy Recharge by 24% for 10s after using an Elemental Skill.',
            level: 1,
        },
        {
            description:
                'Increases Energy Recharge by 30% for 10s after using an Elemental Skill.',
            level: 2,
        },
        {
            description:
                'Increases Energy Recharge by 36% for 10s after using an Elemental Skill.',
            level: 3,
        },
        {
            description:
                'Increases Energy Recharge by 42% for 10s after using an Elemental Skill.',
            level: 4,
        },
        {
            description:
                'Increases Energy Recharge by 48% for 10s after using an Elemental Skill.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default OathswornEye
