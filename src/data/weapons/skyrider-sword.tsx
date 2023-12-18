import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SkyriderSword: Weapon = {
    name: 'Skyrider Sword',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11306_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 3,
    description:
        'A reliable steel sword. The legendary Skyrider once tried to ride it as a flying sword...',
    effectName: 'Determination',
    effectDescription:
        'Using an Elemental Burst grants a 12% increase in ATK and Movement SPD for 15s.',
    baseStats: {
        '1/20': {
            'Base ATK': 37.61,
            'Bonus Energy Recharge': 0.1133,
        },
        '20/20': {
            'Base ATK': 85.56,
            'Bonus Energy Recharge': 0.2003,
        },
        '20/40': {
            'Base ATK': 105.06,
            'Bonus Energy Recharge': 0.2003,
        },
        '40/40': {
            'Base ATK': 151.28,
            'Bonus Energy Recharge': 0.2918,
        },
        '40/50': {
            'Base ATK': 170.68,
            'Bonus Energy Recharge': 0.2918,
        },
        '50/50': {
            'Base ATK': 192.71,
            'Bonus Energy Recharge': 0.3376,
        },
        '50/60': {
            'Base ATK': 212.21,
            'Bonus Energy Recharge': 0.3376,
        },
        '60/60': {
            'Base ATK': 233.69,
            'Bonus Energy Recharge': 0.3834,
        },
        '60/70': {
            'Base ATK': 253.09,
            'Bonus Energy Recharge': 0.3834,
        },
        '70/70': {
            'Base ATK': 274.19,
            'Bonus Energy Recharge': 0.4291,
        },
        '70/80': {
            'Base ATK': 293.69,
            'Bonus Energy Recharge': 0.4291,
        },
        '80/80': {
            'Base ATK': 314.45,
            'Bonus Energy Recharge': 0.4749,
        },
        '80/90': {
            'Base ATK': 333.85,
            'Bonus Energy Recharge': 0.4749,
        },
        '90/90': {
            'Base ATK': 354.38,
            'Bonus Energy Recharge': 0.5207,
        },
    },
    refinements: [
        {
            description:
                'Using an Elemental Burst grants a 12% increase in ATK and Movement SPD for 15s.',
            level: 1,
        },
        {
            description:
                'Using an Elemental Burst grants a 15% increase in ATK and Movement SPD for 15s.',
            level: 2,
        },
        {
            description:
                'Using an Elemental Burst grants a 18% increase in ATK and Movement SPD for 15s.',
            level: 3,
        },
        {
            description:
                'Using an Elemental Burst grants a 21% increase in ATK and Movement SPD for 15s.',
            level: 4,
        },
        {
            description:
                'Using an Elemental Burst grants a 24% increase in ATK and Movement SPD for 15s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SkyriderSword
