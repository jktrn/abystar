import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TheStringless: Weapon = {
    name: 'The Stringless',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15402_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 4,
    description:
        'A bow that once served as an extraordinary instrument. It is no longer capable of getting people up and dancing.',
    effectName: 'Arrowless Song',
    effectDescription: 'Increases Elemental Skill and Elemental Burst DMG by 24%.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus Elemental Mastery': 36.0,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus Elemental Mastery': 63.61,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus Elemental Mastery': 63.61,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus Elemental Mastery': 92.7,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus Elemental Mastery': 92.7,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus Elemental Mastery': 107.24,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus Elemental Mastery': 107.24,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus Elemental Mastery': 121.79,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus Elemental Mastery': 121.79,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus Elemental Mastery': 136.3,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus Elemental Mastery': 136.3,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus Elemental Mastery': 150.84,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus Elemental Mastery': 150.84,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus Elemental Mastery': 165.38,
        },
    },
    refinements: [
        {
            description: 'Increases Elemental Skill and Elemental Burst DMG by 24%.',
            level: 1,
        },
        {
            description: 'Increases Elemental Skill and Elemental Burst DMG by 30%.',
            level: 2,
        },
        {
            description: 'Increases Elemental Skill and Elemental Burst DMG by 36%.',
            level: 3,
        },
        {
            description: 'Increases Elemental Skill and Elemental Burst DMG by 42%.',
            level: 4,
        },
        {
            description: 'Increases Elemental Skill and Elemental Burst DMG by 48%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TheStringless
