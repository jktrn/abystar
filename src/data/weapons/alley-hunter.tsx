import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const AlleyHunter: Weapon = {
    name: 'Alley Hunter',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15410_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 4,
    description:
        'An intricate, opulent longbow. It once belonged to a gentleman thief who was never caught.',
    effectName: 'Oppidan Ambush',
    effectDescription:
        'While the character equipped with this weapon is in the party but not on the field, their DMG increases by 2% every second up to a max of 20%. When the character is on the field for more than 4s, the aforementioned DMG buff decreases by 4% per second until it reaches 0%.',
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
                'While the character equipped with this weapon is in the party but not on the field, their DMG increases by 2% every second up to a max of 20%. When the character is on the field for more than 4s, the aforementioned DMG buff decreases by 4% per second until it reaches 0%.',
            level: 1,
        },
        {
            description:
                'While the character equipped with this weapon is in the party but not on the field, their DMG increases by 2.5% every second up to a max of 25%. When the character is on the field for more than 4s, the aforementioned DMG buff decreases by 5% per second until it reaches 0%.',
            level: 2,
        },
        {
            description:
                'While the character equipped with this weapon is in the party but not on the field, their DMG increases by 3% every second up to a max of 30%. When the character is on the field for more than 4s, the aforementioned DMG buff decreases by 6% per second until it reaches 0%.',
            level: 3,
        },
        {
            description:
                'While the character equipped with this weapon is in the party but not on the field, their DMG increases by 3.5% every second up to a max of 35%. When the character is on the field for more than 4s, the aforementioned DMG buff decreases by 7% per second until it reaches 0%.',
            level: 4,
        },
        {
            description:
                'While the character equipped with this weapon is in the party but not on the field, their DMG increases by 4% every second up to a max of 40%. When the character is on the field for more than 4s, the aforementioned DMG buff decreases by 8% per second until it reaches 0%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default AlleyHunter
