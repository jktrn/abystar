import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const DragonspineSpear: Weapon = {
    name: 'Dragonspine Spear',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13409_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A spear created from the fang of a dragon. It is oddly warm to the touch.',
    effectName: 'Frost Burial',
    effectDescription:
        'Hitting an opponent with Normal and Charged Attacks has a 60% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 80% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 200% of ATK. Can only occur once every 10s.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Physical DMG Bonus': 0.1501,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Physical DMG Bonus': 0.2653,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Physical DMG Bonus': 0.2653,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Physical DMG Bonus': 0.3866,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Physical DMG Bonus': 0.3866,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Physical DMG Bonus': 0.4472,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Physical DMG Bonus': 0.4472,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Physical DMG Bonus': 0.5079,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Physical DMG Bonus': 0.5079,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Physical DMG Bonus': 0.5684,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Physical DMG Bonus': 0.5684,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Physical DMG Bonus': 0.6291,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Physical DMG Bonus': 0.6291,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Physical DMG Bonus': 0.6897,
        },
    },
    refinements: [
        {
            description:
                'Hitting an opponent with Normal and Charged Attacks has a 60% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 80% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 200% of ATK. Can only occur once every 10s.',
            level: 1,
        },
        {
            description:
                'Hitting an opponent with Normal and Charged Attacks has a 70% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 95% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 240% of ATK. Can only occur once every 10s.',
            level: 2,
        },
        {
            description:
                'Hitting an opponent with Normal and Charged Attacks has an 80% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 110% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 280% of ATK. Can only occur once every 10s.',
            level: 3,
        },
        {
            description:
                'Hitting an opponent with Normal and Charged Attacks has a 90% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 125% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 320% of ATK. Can only occur once every 10s.',
            level: 4,
        },
        {
            description:
                'Hitting an opponent with Normal and Charged Attacks has a 100% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 140% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 360% of ATK. Can only occur once every 10s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default DragonspineSpear
