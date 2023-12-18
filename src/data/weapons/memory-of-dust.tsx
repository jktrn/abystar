import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const MemoryOfDust: Weapon = {
    name: 'Memory of Dust',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14504_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 5,
    description:
        'A stone dumbbell containing distant memories. Its endless transformations reveal the power within.',
    effectName: 'Golden Majesty',
    effectDescription:
        'Increases Shield Strength by 20%. Scoring hits on opponents increases ATK by 4% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus ATK': 0.108,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus ATK': 0.1908,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus ATK': 0.1908,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus ATK': 0.2781,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus ATK': 0.2781,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus ATK': 0.3217,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus ATK': 0.3217,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus ATK': 0.3654,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus ATK': 0.3654,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus ATK': 0.4089,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus ATK': 0.4089,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus ATK': 0.4525,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus ATK': 0.4525,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus ATK': 0.4962,
        },
    },
    refinements: [
        {
            description:
                'Increases Shield Strength by 20%. Scoring hits on opponents increases ATK by 4% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.',
            level: 1,
        },
        {
            description:
                'Increases Shield Strength by 25%. Scoring hits on opponents increases ATK by 5% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.',
            level: 2,
        },
        {
            description:
                'Increases Shield Strength by 30%. Scoring hits on opponents increases ATK by 6% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.',
            level: 3,
        },
        {
            description:
                'Increases Shield Strength by 35%. Scoring hits on opponents increases ATK by 7% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.',
            level: 4,
        },
        {
            description:
                'Increases Shield Strength by 40%. Scoring hits on opponents increases ATK by 8% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default MemoryOfDust
