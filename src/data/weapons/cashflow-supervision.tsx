import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const CashflowSupervision: Weapon = {
    name: 'Cashflow Supervision',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14513_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 5,
    description:
        'A floating device that can monitor certain phenomena. It was picked up and modified to serve other purposes following its abandonment.',
    effectName: 'Golden Blood-Tide',
    effectDescription:
        'ATK is increased by 16%. When current HP increases or decreases, Normal Attack DMG will be increased by 16% and Charged Attack DMG will be increased by 14% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the wielder has 3 stacks, ATK SPD will be increased by 8%.',
    baseStats: {
        '1/20': {
            'Base ATK': 47.54,
            'Bonus CRIT Rate': 0.048,
        },
        '20/20': {
            'Base ATK': 133.29,
            'Bonus CRIT Rate': 0.0848,
        },
        '20/40': {
            'Base ATK': 164.39,
            'Bonus CRIT Rate': 0.0848,
        },
        '40/40': {
            'Base ATK': 260.56,
            'Bonus CRIT Rate': 0.1236,
        },
        '40/50': {
            'Base ATK': 291.66,
            'Bonus CRIT Rate': 0.1236,
        },
        '50/50': {
            'Base ATK': 341.43,
            'Bonus CRIT Rate': 0.143,
        },
        '50/60': {
            'Base ATK': 372.63,
            'Bonus CRIT Rate': 0.143,
        },
        '60/60': {
            'Base ATK': 423.4,
            'Bonus CRIT Rate': 0.1624,
        },
        '60/70': {
            'Base ATK': 454.5,
            'Bonus CRIT Rate': 0.1624,
        },
        '70/70': {
            'Base ATK': 506.22,
            'Bonus CRIT Rate': 0.1817,
        },
        '70/80': {
            'Base ATK': 537.32,
            'Bonus CRIT Rate': 0.1817,
        },
        '80/80': {
            'Base ATK': 589.85,
            'Bonus CRIT Rate': 0.2011,
        },
        '80/90': {
            'Base ATK': 620.95,
            'Bonus CRIT Rate': 0.2011,
        },
        '90/90': {
            'Base ATK': 674.33,
            'Bonus CRIT Rate': 0.2205,
        },
    },
    refinements: [
        {
            description:
                'ATK is increased by 16%. When current HP increases or decreases, Normal Attack DMG will be increased by 16% and Charged Attack DMG will be increased by 14% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the wielder has 3 stacks, ATK SPD will be increased by 8%.',
            level: 1,
        },
        {
            description:
                'ATK is increased by 20%. When current HP increases or decreases, Normal Attack DMG will be increased by 20% and Charged Attack DMG will be increased by 17.5% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the wielder has 3 stacks, ATK SPD will be increased by 10%.',
            level: 2,
        },
        {
            description:
                'ATK is increased by 24%. When current HP increases or decreases, Normal Attack DMG will be increased by 24% and Charged Attack DMG will be increased by 21% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the wielder has 3 stacks, ATK SPD will be increased by 12%.',
            level: 3,
        },
        {
            description:
                'ATK is increased by 28%. When current HP increases or decreases, Normal Attack DMG will be increased by 28% and Charged Attack DMG will be increased by 24.5% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the wielder has 3 stacks, ATK SPD will be increased by 14%.',
            level: 4,
        },
        {
            description:
                'ATK is increased by 32%. When current HP increases or decreases, Normal Attack DMG will be increased by 32% and Charged Attack DMG will be increased by 28% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the wielder has 3 stacks, ATK SPD will be increased by 16%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default CashflowSupervision
