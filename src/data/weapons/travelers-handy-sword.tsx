import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TravelersHandySword: Weapon = {
    name: "Traveler's Handy Sword",
    image: 'https://genshin.honeyhunterworld.com/img/i_n11303_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 3,
    description:
        'A handy steel sword which contains scissors, a magnifying glass, tinder, and other useful items in its sheath.',
    effectName: 'Journey',
    effectDescription: 'Each Elemental Orb or Particle collected restores 1% HP.',
    baseStats: {
        '1/20': {
            'Base ATK': 39.88,
            'Bonus Def': 0.0637,
        },
        '20/20': {
            'Base ATK': 101.96,
            'Bonus Def': 0.1126,
        },
        '20/40': {
            'Base ATK': 121.46,
            'Bonus Def': 0.1126,
        },
        '40/40': {
            'Base ATK': 187.21,
            'Bonus Def': 0.1641,
        },
        '40/50': {
            'Base ATK': 206.61,
            'Bonus Def': 0.1641,
        },
        '50/50': {
            'Base ATK': 239.47,
            'Bonus Def': 0.1899,
        },
        '50/60': {
            'Base ATK': 258.97,
            'Bonus Def': 0.1899,
        },
        '60/60': {
            'Base ATK': 291.75,
            'Bonus Def': 0.2156,
        },
        '60/70': {
            'Base ATK': 311.15,
            'Bonus Def': 0.2156,
        },
        '70/70': {
            'Base ATK': 343.89,
            'Bonus Def': 0.2413,
        },
        '70/80': {
            'Base ATK': 363.39,
            'Bonus Def': 0.2413,
        },
        '80/80': {
            'Base ATK': 396.08,
            'Bonus Def': 0.267,
        },
        '80/90': {
            'Base ATK': 415.48,
            'Bonus Def': 0.267,
        },
        '90/90': {
            'Base ATK': 448.22,
            'Bonus Def': 0.2928,
        },
    },
    refinements: [
        {
            description: 'Each Elemental Orb or Particle collected restores 1% HP.',
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

export default TravelersHandySword
