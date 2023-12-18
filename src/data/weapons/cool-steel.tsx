import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const CoolSteel: Weapon = {
    name: 'Cool Steel',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11301_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 3,
    description:
        'A reliable steel-forged weapon that serves as a testament to the great adventures of its old master.',
    effectName: 'Bane of Water and Ice',
    effectDescription:
        'Increases DMG against opponents affected by Hydro or Cryo by 12%.',
    baseStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Bonus ATK': 0.0766,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Bonus ATK': 0.1354,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Bonus ATK': 0.1354,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Bonus ATK': 0.1972,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Bonus ATK': 0.1972,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Bonus ATK': 0.2282,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Bonus ATK': 0.2282,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Bonus ATK': 0.2591,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Bonus ATK': 0.2591,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Bonus ATK': 0.29,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Bonus ATK': 0.29,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Bonus ATK': 0.321,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Bonus ATK': 0.321,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Bonus ATK': 0.3519,
        },
    },
    refinements: [
        {
            description:
                'Increases DMG against opponents affected by Hydro or Cryo by 12%.',
            level: 1,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Cryo by 15%.',
            level: 2,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Cryo by 18%.',
            level: 3,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Cryo by 21%.',
            level: 4,
        },
        {
            description:
                'Increases DMG against opponents affected by Hydro or Cryo by 24%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default CoolSteel
