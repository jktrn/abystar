import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const FavoniusSword: Weapon = {
    name: 'Favonius Sword',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11401_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 4,
    description:
        "A standard-issue longsword of the Knights of Favonius. When you're armed with this agile and sharp weapon, channeling the power of the elements has never been so easy!",
    effectName: 'Windfall',
    effectDescription:
        'CRIT Hits have a 60% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 12s.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus Energy Recharge': 0.1333,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus Energy Recharge': 0.2356,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus Energy Recharge': 0.2356,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus Energy Recharge': 0.3433,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus Energy Recharge': 0.3433,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus Energy Recharge': 0.3972,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus Energy Recharge': 0.3972,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus Energy Recharge': 0.4511,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus Energy Recharge': 0.4511,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus Energy Recharge': 0.5048,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus Energy Recharge': 0.5048,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus Energy Recharge': 0.5587,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus Energy Recharge': 0.5587,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus Energy Recharge': 0.6125,
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

export default FavoniusSword
