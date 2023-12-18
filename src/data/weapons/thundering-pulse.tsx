import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const ThunderingPulse: Weapon = {
    name: 'Thundering Pulse',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15509_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 5,
    description:
        'A longbow that was a gift from the Shogun. Eternal lightning crackles all around it.',
    effectName: 'Rule by Thunder',
    effectDescription:
        "Increases ATK by 20% and grants the might of the Thunder Emblem. At stack levels 1/2/3, the Thunder Emblem increases Normal Attack DMG by 12/24/40%. The character will obtain 1 stack of Thunder Emblem in each of the following scenarios: Normal Attack deals DMG (stack lasts 5s), casting Elemental Skill (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
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
                "Increases ATK by 20% and grants the might of the Thunder Emblem. At stack levels 1/2/3, the Thunder Emblem increases Normal Attack DMG by 12/24/40%. The character will obtain 1 stack of Thunder Emblem in each of the following scenarios: Normal Attack deals DMG (stack lasts 5s), casting Elemental Skill (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
            level: 1,
        },
        {
            description:
                "Increases ATK by 25% and grants the might of the Thunder Emblem. At stack levels 1/2/3, the Thunder Emblem increases Normal Attack DMG by 15/30/50%. The character will obtain 1 stack of Thunder Emblem in each of the following scenarios: Normal Attack deals DMG (stack lasts 5s), casting Elemental Skill (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
            level: 2,
        },
        {
            description:
                "Increases ATK by 30% and grants the might of the Thunder Emblem. At stack levels 1/2/3, the Thunder Emblem increases Normal Attack DMG by 18/36/60%. The character will obtain 1 stack of Thunder Emblem in each of the following scenarios: Normal Attack deals DMG (stack lasts 5s), casting Elemental Skill (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
            level: 3,
        },
        {
            description:
                "Increases ATK by 35% and grants the might of the Thunder Emblem. At stack levels 1/2/3, the Thunder Emblem increases Normal Attack DMG by 21/42/70%. The character will obtain 1 stack of Thunder Emblem in each of the following scenarios: Normal Attack deals DMG (stack lasts 5s), casting Elemental Skill (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
            level: 4,
        },
        {
            description:
                "Increases ATK by 40% and grants the might of the Thunder Emblem. At stack levels 1/2/3, the Thunder Emblem increases Normal Attack DMG by 24/48/80%. The character will obtain 1 stack of Thunder Emblem in each of the following scenarios: Normal Attack deals DMG (stack lasts 5s), casting Elemental Skill (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default ThunderingPulse
