import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const KagurasVerity: Weapon = {
    name: "Kagura's Verity",
    image: 'https://genshin.honeyhunterworld.com/img/i_n14509_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 5,
    description:
        'The bells used when performing the Kagura Dance, blessed by the Guuji herself. The scent of the Sacred Sakura tree lingers on it.',
    effectName: 'Kagura Dance of the Sacred Sakura',
    effectDescription:
        'Gains the Kagura Dance effect when using an Elemental Skill, causing the Elemental Skill DMG of the character wielding this weapon to increase by 12% for 16s. Max 3 stacks. This character will gain 12% All Elemental DMG Bonus when they possess 3 stacks.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus CRIT DMG': 0.144,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus CRIT DMG': 0.2544,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus CRIT DMG': 0.2544,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus CRIT DMG': 0.3708,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus CRIT DMG': 0.3708,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus CRIT DMG': 0.429,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus CRIT DMG': 0.429,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus CRIT DMG': 0.4872,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus CRIT DMG': 0.4872,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus CRIT DMG': 0.5452,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus CRIT DMG': 0.5452,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus CRIT DMG': 0.6034,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus CRIT DMG': 0.6034,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus CRIT DMG': 0.6615,
        },
    },
    refinements: [
        {
            description:
                'Gains the Kagura Dance effect when using an Elemental Skill, causing the Elemental Skill DMG of the character wielding this weapon to increase by 12% for 16s. Max 3 stacks. This character will gain 12% All Elemental DMG Bonus when they possess 3 stacks.',
            level: 1,
        },
        {
            description:
                'Gains the Kagura Dance effect when using an Elemental Skill, causing the Elemental Skill DMG of the character wielding this weapon to increase by 15% for 16s. Max 3 stacks. This character will gain 15% All Elemental DMG Bonus when they possess 3 stacks.',
            level: 2,
        },
        {
            description:
                'Gains the Kagura Dance effect when using an Elemental Skill, causing the Elemental Skill DMG of the character wielding this weapon to increase by 18% for 16s. Max 3 stacks. This character will gain 18% All Elemental DMG Bonus when they possess 3 stacks.',
            level: 3,
        },
        {
            description:
                'Gains the Kagura Dance effect when using an Elemental Skill, causing the Elemental Skill DMG of the character wielding this weapon to increase by 21% for 16s. Max 3 stacks. This character will gain 21% All Elemental DMG Bonus when they possess 3 stacks.',
            level: 4,
        },
        {
            description:
                'Gains the Kagura Dance effect when using an Elemental Skill, causing the Elemental Skill DMG of the character wielding this weapon to increase by 24% for 16s. Max 3 stacks. This character will gain 24% All Elemental DMG Bonus when they possess 3 stacks.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default KagurasVerity
