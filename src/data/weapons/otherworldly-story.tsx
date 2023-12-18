import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const OtherworldlyStory: Weapon = {
    name: 'Otherworldly Story',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14303_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 3,
    description:
        'A cheap fantasy novel with no value whatsoever. Any claim that it possesses the power of catalysis is also pure fantasy.',
    effectName: 'Energy Shower',
    effectDescription: 'Picking up an Elemental Energy Orb/Particle recovers 1% HP.',
    baseStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Bonus Energy Recharge': 0.085,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Bonus Energy Recharge': 0.1502,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Bonus Energy Recharge': 0.1502,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Bonus Energy Recharge': 0.2189,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Bonus Energy Recharge': 0.2189,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Bonus Energy Recharge': 0.2532,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Bonus Energy Recharge': 0.2532,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Bonus Energy Recharge': 0.2876,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Bonus Energy Recharge': 0.2876,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Bonus Energy Recharge': 0.3218,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Bonus Energy Recharge': 0.3218,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Bonus Energy Recharge': 0.3562,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Bonus Energy Recharge': 0.3562,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Bonus Energy Recharge': 0.3905,
        },
    },
    refinements: [
        {
            description:
                'Picking up an Elemental Energy Orb/Particle recovers 1% HP.',
            level: 1,
        },
        {
            description:
                'Each Elemental Orb or Particle collected restores 1.25% HP.',
            level: 2,
        },
        {
            description:
                'Each Elemental Orb or Particle collected restores 1.5% HP.',
            level: 3,
        },
        {
            description:
                'Each Elemental Orb or Particle collected restores 1.75% HP.',
            level: 4,
        },
        {
            description: 'Each Elemental Orb or Particle collected restores 2% HP.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default OtherworldlyStory
