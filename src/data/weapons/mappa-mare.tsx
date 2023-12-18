import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const MappaMare: Weapon = {
    name: 'Mappa Mare',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14407_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A nautical chart featuring nearby currents and climates that somehow found its way into Liyue via foreign traders.',
    effectName: 'Infusion Scroll',
    effectDescription:
        'Triggering an Elemental reaction grants a 8% Elemental DMG Bonus for 10s. Max 2 stacks.',
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
                'Triggering an Elemental reaction grants a 8% Elemental DMG Bonus for 10s. Max 2 stacks.',
            level: 1,
        },
        {
            description:
                'Triggering an Elemental reaction grants a 10% Elemental DMG Bonus for 10s. Max 2 stacks.',
            level: 2,
        },
        {
            description:
                'Triggering an Elemental reaction grants a 12% Elemental DMG Bonus for 10s. Max 2 stacks.',
            level: 3,
        },
        {
            description:
                'Triggering an Elemental reaction grants a 14% Elemental DMG Bonus for 10s. Max 2 stacks.',
            level: 4,
        },
        {
            description:
                'Triggering an Elemental reaction grants a 16% Elemental DMG Bonus for 10s. Max 2 stacks.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default MappaMare
