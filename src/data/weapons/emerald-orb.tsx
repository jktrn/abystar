import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const EmeraldOrb: Weapon = {
    name: 'Emerald Orb',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14304_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 3,
    description:
        'A catalyst carved out of the hard jade from Jueyun Karst north of Liyue. Small, light, and durable, it is known more colloquially as the "jade ball."',
    effectName: 'Rapids',
    effectDescription:
        'Upon causing a Vaporize, Electro-Charged, Frozen, Bloom, or a Hydro-infused Swirl reaction, increases ATK by 20% for 12s.',
    baseStats: {
        '1/20': {
            'Base ATK': 39.88,
            'Bonus Elemental Mastery': 20.4,
        },
        '20/20': {
            'Base ATK': 101.96,
            'Bonus Elemental Mastery': 36.05,
        },
        '20/40': {
            'Base ATK': 121.46,
            'Bonus Elemental Mastery': 36.05,
        },
        '40/40': {
            'Base ATK': 187.21,
            'Bonus Elemental Mastery': 52.53,
        },
        '40/50': {
            'Base ATK': 206.61,
            'Bonus Elemental Mastery': 52.53,
        },
        '50/50': {
            'Base ATK': 239.47,
            'Bonus Elemental Mastery': 60.77,
        },
        '50/60': {
            'Base ATK': 258.97,
            'Bonus Elemental Mastery': 60.77,
        },
        '60/60': {
            'Base ATK': 291.75,
            'Bonus Elemental Mastery': 69.01,
        },
        '60/70': {
            'Base ATK': 311.15,
            'Bonus Elemental Mastery': 69.01,
        },
        '70/70': {
            'Base ATK': 343.89,
            'Bonus Elemental Mastery': 77.23,
        },
        '70/80': {
            'Base ATK': 363.39,
            'Bonus Elemental Mastery': 77.23,
        },
        '80/80': {
            'Base ATK': 396.08,
            'Bonus Elemental Mastery': 85.48,
        },
        '80/90': {
            'Base ATK': 415.48,
            'Bonus Elemental Mastery': 85.48,
        },
        '90/90': {
            'Base ATK': 448.22,
            'Bonus Elemental Mastery': 93.72,
        },
    },
    refinements: [
        {
            description:
                'Upon causing a Vaporize, Electro-Charged, Frozen, Bloom, or a Hydro-infused Swirl reaction, increases ATK by 20% for 12s.',
            level: 1,
        },
        {
            description:
                'Upon causing a Vaporize, Electro-Charged, Frozen, Bloom, or a Hydro-infused Swirl reaction, increases ATK by 25% for 12s.',
            level: 2,
        },
        {
            description:
                'Upon causing a Vaporize, Electro-Charged, Frozen, Bloom, or a Hydro-infused Swirl reaction, increases ATK by 30% for 12s.',
            level: 3,
        },
        {
            description:
                'Upon causing a Vaporize, Electro-Charged, Frozen, Bloom, or a Hydro-infused Swirl reaction, increases ATK by 35% for 12s.',
            level: 4,
        },
        {
            description:
                'Upon causing a Vaporize, Electro-Charged, Frozen, Bloom, or a Hydro-infused Swirl reaction, increases ATK by 40% for 12s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default EmeraldOrb
