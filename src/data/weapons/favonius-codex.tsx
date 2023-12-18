import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const FavoniusCodex: Weapon = {
    name: 'Favonius Codex',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14401_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 4,
    description:
        'A secret tome that belonged to the scholars of the Knights of Favonius. It describes the logic and power of elements and matter.',
    effectName: 'Windfall',
    effectDescription:
        'CRIT Hits have a 60% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 12s.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus Energy Recharge': 0.1,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus Energy Recharge': 0.1767,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus Energy Recharge': 0.1767,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus Energy Recharge': 0.2575,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus Energy Recharge': 0.2575,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus Energy Recharge': 0.2979,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus Energy Recharge': 0.2979,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus Energy Recharge': 0.3383,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus Energy Recharge': 0.3383,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus Energy Recharge': 0.3786,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus Energy Recharge': 0.3786,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus Energy Recharge': 0.419,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus Energy Recharge': 0.419,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus Energy Recharge': 0.4594,
        },
    },
    refinements: [
        {
            description:
                'CRIT Hits have a 60% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 12s.',
            level: 1,
        },
        {
            description:
                'CRIT Hits have a 70% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 10.5s.',
            level: 2,
        },
        {
            description:
                'CRIT Hits have a 80% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 9s.',
            level: 3,
        },
        {
            description:
                'CRIT Hits have a 90% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 7.5s.',
            level: 4,
        },
        {
            description:
                'CRIT Hits have a 100% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 6s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default FavoniusCodex
