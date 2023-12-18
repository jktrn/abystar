import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const EngulfingLightning: Weapon = {
    name: 'Engulfing Lightning',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13509_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 5,
    description:
        'A naginata used to "cut grass." Any army that stands before this weapon will probably be likewise cut down...',
    effectName: 'Timeless Dream: Eternal Stove',
    effectDescription:
        'ATK increased by 28% of Energy Recharge over the base 100%. You can gain a maximum bonus of 80% ATK. Gain 30% Energy Recharge for 12s after using an Elemental Burst.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus Energy Recharge': 0.12,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus Energy Recharge': 0.212,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus Energy Recharge': 0.212,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus Energy Recharge': 0.309,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus Energy Recharge': 0.309,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus Energy Recharge': 0.3575,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus Energy Recharge': 0.3575,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus Energy Recharge': 0.406,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus Energy Recharge': 0.406,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus Energy Recharge': 0.4543,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus Energy Recharge': 0.4543,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus Energy Recharge': 0.5028,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus Energy Recharge': 0.5028,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus Energy Recharge': 0.5513,
        },
    },
    refinements: [
        {
            description:
                'ATK increased by 28% of Energy Recharge over the base 100%. You can gain a maximum bonus of 80% ATK. Gain 30% Energy Recharge for 12s after using an Elemental Burst.',
            level: 1,
        },
        {
            description:
                'ATK increased by 35% of Energy Recharge over the base 100%. You can gain a maximum bonus of 90% ATK. Gain 35% Energy Recharge for 12s after using an Elemental Burst.',
            level: 2,
        },
        {
            description:
                'ATK increased by 42% of Energy Recharge over the base 100%. You can gain a maximum bonus of 100% ATK. Gain 40% Energy Recharge for 12s after using an Elemental Burst.',
            level: 3,
        },
        {
            description:
                'ATK increased by 49% of Energy Recharge over the base 100%. You can gain a maximum bonus of 110% ATK. Gain 45% Energy Recharge for 12s after using an Elemental Burst.',
            level: 4,
        },
        {
            description:
                'ATK increased by 56% of Energy Recharge over the base 100%. You can gain a maximum bonus of 120% ATK. Gain 50% Energy Recharge for 12s after using an Elemental Burst.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default EngulfingLightning
