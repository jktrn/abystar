import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const FleuveCendreFerryman: Weapon = {
    name: 'Fleuve Cendre Ferryman',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11426_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 4,
    description:
        'A handy length of abandoned copper pipe that was once used as a weapon. It was famous \u2014 or infamous, depending \u2014 in some circles.',
    effectName: 'Ironbone',
    effectDescription:
        'Increases Elemental Skill CRIT Rate by 8%. Additionally, increases Energy Recharge by 16% for 5s after using an Elemental Skill.',
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
                'Increases Elemental Skill CRIT Rate by 8%. Additionally, increases Energy Recharge by 16% for 5s after using an Elemental Skill.',
            level: 1,
        },
        {
            description:
                'Increases Elemental Skill CRIT Rate by 10%. Additionally, increases Energy Recharge by 20% for 5s after using an Elemental Skill.',
            level: 2,
        },
        {
            description:
                'Increases Elemental Skill CRIT Rate by 12%. Additionally, increases Energy Recharge by 24% for 5s after using an Elemental Skill.',
            level: 3,
        },
        {
            description:
                'Increases Elemental Skill CRIT Rate by 14%. Additionally, increases Energy Recharge by 28% for 5s after using an Elemental Skill.',
            level: 4,
        },
        {
            description:
                'Increases Elemental Skill CRIT Rate by 16%. Additionally, increases Energy Recharge by 32% for 5s after using an Elemental Skill.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default FleuveCendreFerryman
