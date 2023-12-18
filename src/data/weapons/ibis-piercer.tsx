import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const IbisPiercer: Weapon = {
    name: 'Ibis Piercer',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15419_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 4,
    description:
        'A golden bow forged from the description in the story. If you use it as a normal weapon, you can also view it as a part of a fictional world that has made it off the pages.',
    effectName: "Secret Wisdom's Favor",
    effectDescription:
        "The character's Elemental Mastery will increase by 40 within 6s after Charged Attacks hit opponents. Max 2 stacks. This effect can be triggered once every 0.5s.",
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
                "The character's Elemental Mastery will increase by 40 within 6s after Charged Attacks hit opponents. Max 2 stacks. This effect can be triggered once every 0.5s.",
            level: 1,
        },
        {
            description:
                "The character's Elemental Mastery will increase by 50 within 6s after Charged Attacks hit opponents. Max 2 stacks. This effect can be triggered once every 0.5s.",
            level: 2,
        },
        {
            description:
                "The character's Elemental Mastery will increase by 60 within 6s after Charged Attacks hit opponents. Max 2 stacks. This effect can be triggered once every 0.5s.",
            level: 3,
        },
        {
            description:
                "The character's Elemental Mastery will increase by 70 within 6s after Charged Attacks hit opponents. Max 2 stacks. This effect can be triggered once every 0.5s.",
            level: 4,
        },
        {
            description:
                "The character's Elemental Mastery will increase by 80 within 6s after Charged Attacks hit opponents. Max 2 stacks. This effect can be triggered once every 0.5s.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default IbisPiercer
