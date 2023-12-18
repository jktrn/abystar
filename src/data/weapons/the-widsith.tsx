import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TheWidsith: Weapon = {
    name: 'The Widsith',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14402_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 4,
    description:
        'A heavy notebook filled with musical scores. Though suffering from moth damage and heavy wear-and-tear, there is still much power to be found among the hand-written words within.',
    effectName: 'Debut',
    effectDescription:
        'When the character takes the field, they will gain a random theme song for 10s. This can only occur once every 30s. Recitative: ATK is increased by 60%. Aria: Increases all Elemental DMG by 48%. Interlude: Elemental Mastery is increased by 240.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus CRIT DMG': 0.12,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus CRIT DMG': 0.212,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus CRIT DMG': 0.212,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus CRIT DMG': 0.309,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus CRIT DMG': 0.309,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus CRIT DMG': 0.3575,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus CRIT DMG': 0.3575,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus CRIT DMG': 0.406,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus CRIT DMG': 0.406,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus CRIT DMG': 0.4543,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus CRIT DMG': 0.4543,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus CRIT DMG': 0.5028,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus CRIT DMG': 0.5028,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus CRIT DMG': 0.5513,
        },
    },
    refinements: [
        {
            description:
                'When the character takes the field, they will gain a random theme song for 10s. This can only occur once every 30s. Recitative: ATK is increased by 60%. Aria: Increases all Elemental DMG by 48%. Interlude: Elemental Mastery is increased by 240.',
            level: 1,
        },
        {
            description:
                'When the character takes the field, they will gain a random theme song for 10s. This can only occur once every 30s. Recitative: ATK is increased by 75%. Aria: Increases all Elemental DMG by 60%. Interlude: Elemental Mastery is increased by 300.',
            level: 2,
        },
        {
            description:
                'When the character takes the field, they will gain a random theme song for 10s. This can only occur once every 30s. Recitative: ATK is increased by 90%. Aria: Increases all Elemental DMG by 72%. Interlude: Elemental Mastery is increased by 360.',
            level: 3,
        },
        {
            description:
                'When the character takes the field, they will gain a random theme song for 10s. This can only occur once every 30s. Recitative: ATK is increased by 105%. Aria: Increases all Elemental DMG by 84%. Interlude: Elemental Mastery is increased by 420.',
            level: 4,
        },
        {
            description:
                'When the character takes the field, they will gain a random theme song for 10s. This can only occur once every 30s. Recitative: ATK is increased by 120%. Aria: Increases all Elemental DMG by 96%. Interlude: Elemental Mastery is increased by 480.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TheWidsith
