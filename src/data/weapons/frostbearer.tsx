import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Frostbearer: Weapon = {
    name: 'Frostbearer',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14412_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A fruit that possesses a strange, frosty will. A faint sense of agony emanates from it.',
    effectName: 'Frost Burial',
    effectDescription:
        'Hitting an opponent with Normal and Charged Attacks has a 60% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 80% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 200% of ATK. Can only occur once every 10s.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus ATK': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus ATK': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus ATK': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus ATK': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus ATK': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus ATK': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus ATK': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus ATK': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus ATK': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus ATK': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus ATK': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus ATK': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus ATK': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus ATK': 0.4135,
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

export default Frostbearer
