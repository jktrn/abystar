import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const MakhairaAquamarine: Weapon = {
    name: 'Makhaira Aquamarine',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12415_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 4,
    description:
        'An ancient greatsword that gleams like the waters themselves. A thousand years of sand erosion has not dulled its unnaturally sharp edge one bit.',
    effectName: 'Desert Pavilion',
    effectDescription:
        'The following effect will trigger every 10s: The equipping character will gain 24% of their Elemental Mastery as bonus ATK for 12s, with nearby party members gaining 30% of this buff for the same duration. Multiple instances of this weapon can allow this buff to stack. This effect will still trigger even if the character is not on the field.',
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
                'The following effect will trigger every 10s: The equipping character will gain 24% of their Elemental Mastery as bonus ATK for 12s, with nearby party members gaining 30% of this buff for the same duration. Multiple instances of this weapon can allow this buff to stack. This effect will still trigger even if the character is not on the field.',
            level: 1,
        },
        {
            description:
                'The following effect will trigger every 10s: The equipping character will gain 30% of their Elemental Mastery as bonus ATK for 12s, with nearby party members gaining 30% of this buff for the same duration. Multiple instances of this weapon can allow this buff to stack. This effect will still trigger even if the character is not on the field.',
            level: 2,
        },
        {
            description:
                'The following effect will trigger every 10s: The equipping character will gain 36% of their Elemental Mastery as bonus ATK for 12s, with nearby party members gaining 30% of this buff for the same duration. Multiple instances of this weapon can allow this buff to stack. This effect will still trigger even if the character is not on the field.',
            level: 3,
        },
        {
            description:
                'The following effect will trigger every 10s: The equipping character will gain 42% of their Elemental Mastery as bonus ATK for 12s, with nearby party members gaining 30% of this buff for the same duration. Multiple instances of this weapon can allow this buff to stack. This effect will still trigger even if the character is not on the field.',
            level: 4,
        },
        {
            description:
                'The following effect will trigger every 10s: The equipping character will gain 48% of their Elemental Mastery as bonus ATK for 12s, with nearby party members gaining 30% of this buff for the same duration. Multiple instances of this weapon can allow this buff to stack. This effect will still trigger even if the character is not on the field.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default MakhairaAquamarine
