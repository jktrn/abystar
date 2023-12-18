import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const MailedFlower: Weapon = {
    name: 'Mailed Flower',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12418_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 4,
    description:
        'A graceful and elegant greatsword that is decorated with flowers and ribbons.',
    effectName: 'Whispers of Wind and Flower',
    effectDescription:
        "Within 8s after the character's Elemental Skill hits an opponent or the character triggers an Elemental Reaction, their ATK and Elemental Mastery will be increased by 12% and 48 respectively.",
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus Elemental Mastery': 24.0,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus Elemental Mastery': 42.41,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus Elemental Mastery': 42.41,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus Elemental Mastery': 61.8,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus Elemental Mastery': 61.8,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus Elemental Mastery': 71.5,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus Elemental Mastery': 71.5,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus Elemental Mastery': 81.19,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus Elemental Mastery': 81.19,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus Elemental Mastery': 90.86,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus Elemental Mastery': 90.86,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus Elemental Mastery': 100.56,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus Elemental Mastery': 100.56,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus Elemental Mastery': 110.26,
        },
    },
    refinements: [
        {
            description:
                "Within 8s after the character's Elemental Skill hits an opponent or the character triggers an Elemental Reaction, their ATK and Elemental Mastery will be increased by 12% and 48 respectively.",
            level: 1,
        },
        {
            description:
                "Within 8s after the character's Elemental Skill hits an opponent or the character triggers an Elemental Reaction, their ATK and Elemental Mastery will be increased by 15% and 60 respectively.",
            level: 2,
        },
        {
            description:
                "Within 8s after the character's Elemental Skill hits an opponent or the character triggers an Elemental Reaction, their ATK and Elemental Mastery will be increased by 18% and 72 respectively.",
            level: 3,
        },
        {
            description:
                "Within 8s after the character's Elemental Skill hits an opponent or the character triggers an Elemental Reaction, their ATK and Elemental Mastery will be increased by 21% and 84 respectively.",
            level: 4,
        },
        {
            description:
                "Within 8s after the character's Elemental Skill hits an opponent or the character triggers an Elemental Reaction, their ATK and Elemental Mastery will be increased by 24% and 96 respectively.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default MailedFlower
