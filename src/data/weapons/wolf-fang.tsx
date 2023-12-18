import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Wolffang: Weapon = {
    name: 'Wolf-Fang',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11424_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 4,
    description:
        'Legend has it that this longsword was once used by a wandering knight in the distant past.',
    effectName: 'Northwind Wolf',
    effectDescription:
        'DMG dealt by Elemental Skill and Elemental Burst is increased by 16%. When an Elemental Skill hits an opponent, its CRIT Rate will be increased by 2%. When an Elemental Burst hits an opponent, its CRIT Rate will be increased by 2%. Both of these effects last 10s separately, have 4 max stacks, and can be triggered once every 0.1s.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus CRIT Rate': 0.06,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus CRIT Rate': 0.106,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus CRIT Rate': 0.106,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus CRIT Rate': 0.1787,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus CRIT Rate': 0.1787,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus CRIT Rate': 0.203,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus CRIT Rate': 0.203,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus CRIT Rate': 0.2514,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus CRIT Rate': 0.2514,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus CRIT Rate': 0.2756,
        },
    },
    refinements: [
        {
            description:
                'DMG dealt by Elemental Skill and Elemental Burst is increased by 16%. When an Elemental Skill hits an opponent, its CRIT Rate will be increased by 2%. When an Elemental Burst hits an opponent, its CRIT Rate will be increased by 2%. Both of these effects last 10s separately, have 4 max stacks, and can be triggered once every 0.1s.',
            level: 1,
        },
        {
            description:
                'DMG dealt by Elemental Skill and Elemental Burst is increased by 20%. When an Elemental Skill hits an opponent, its CRIT Rate will be increased by 2.5%. When an Elemental Burst hits an opponent, its CRIT Rate will be increased by 2.5%. Both of these effects last 10s separately, have 4 max stacks, and can be triggered once every 0.1s.',
            level: 2,
        },
        {
            description:
                'DMG dealt by Elemental Skill and Elemental Burst is increased by 24%. When an Elemental Skill hits an opponent, its CRIT Rate will be increased by 3%. When an Elemental Burst hits an opponent, its CRIT Rate will be increased by 3%. Both of these effects last 10s separately, have 4 max stacks, and can be triggered once every 0.1s.',
            level: 3,
        },
        {
            description:
                'DMG dealt by Elemental Skill and Elemental Burst is increased by 28%. When an Elemental Skill hits an opponent, its CRIT Rate will be increased by 3.5%. When an Elemental Burst hits an opponent, its CRIT Rate will be increased by 3.5%. Both of these effects last 10s separately, have 4 max stacks, and can be triggered once every 0.1s.',
            level: 4,
        },
        {
            description:
                'DMG dealt by Elemental Skill and Elemental Burst is increased by 32%. When an Elemental Skill hits an opponent, its CRIT Rate will be increased by 4%. When an Elemental Burst hits an opponent, its CRIT Rate will be increased by 4%. Both of these effects last 10s separately, have 4 max stacks, and can be triggered once every 0.1s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default Wolffang
