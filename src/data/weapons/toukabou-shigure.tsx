import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const ToukabouShigure: Weapon = {
    name: 'Toukabou Shigure',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11422_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 4,
    description:
        'A rather special oil-paper umbrella. While long wanderings may make one used to the wind and the rain, there might be some fun in admiring a rainy scene beneath this parasol.',
    effectName: 'Kaidan: Rainfall Earthbinder',
    effectDescription:
        "After an attack hits opponents, it will inflict an instance of Cursed Parasol upon one of them for 10s. This effect can be triggered once every 15s. If this opponent is defeated during Cursed Parasol's duration, Cursed Parasol's CD will be refreshed immediately. The character wielding this weapon will deal 16% more DMG to the opponent affected by Cursed Parasol.",
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
            description:
                "After an attack hits opponents, it will inflict an instance of Cursed Parasol upon one of them for 10s. This effect can be triggered once every 15s. If this opponent is defeated during Cursed Parasol's duration, Cursed Parasol's CD will be refreshed immediately. The character wielding this weapon will deal 16% more DMG to the opponent affected by Cursed Parasol.",
            level: 1,
        },
        {
            description:
                "After an attack hits opponents, it will inflict an instance of Cursed Parasol upon one of them for 10s. This effect can be triggered once every 15s. If this opponent is defeated during Cursed Parasol's duration, Cursed Parasol's CD will be refreshed immediately. The character wielding this weapon will deal 20% more DMG to the opponent affected by Cursed Parasol.",
            level: 2,
        },
        {
            description:
                "After an attack hits opponents, it will inflict an instance of Cursed Parasol upon one of them for 10s. This effect can be triggered once every 15s. If this opponent is defeated during Cursed Parasol's duration, Cursed Parasol's CD will be refreshed immediately. The character wielding this weapon will deal 24% more DMG to the opponent affected by Cursed Parasol.",
            level: 3,
        },
        {
            description:
                "After an attack hits opponents, it will inflict an instance of Cursed Parasol upon one of them for 10s. This effect can be triggered once every 15s. If this opponent is defeated during Cursed Parasol's duration, Cursed Parasol's CD will be refreshed immediately. The character wielding this weapon will deal 28% more DMG to the opponent affected by Cursed Parasol.",
            level: 4,
        },
        {
            description:
                "After an attack hits opponents, it will inflict an instance of Cursed Parasol upon one of them for 10s. This effect can be triggered once every 15s. If this opponent is defeated during Cursed Parasol's duration, Cursed Parasol's CD will be refreshed immediately. The character wielding this weapon will deal 32% more DMG to the opponent affected by Cursed Parasol.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default ToukabouShigure
