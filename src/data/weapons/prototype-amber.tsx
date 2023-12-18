import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const PrototypeAmber: Weapon = {
    name: 'Prototype Amber',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14406_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A dully gilded catalyst secretly guarded in the Blackcliff Forge. It seems to glow with the very light from the sky.',
    effectName: 'Gilding',
    effectDescription:
        'Using an Elemental Burst regenerates 4 Energy every 2s for 6s. All party members will regenerate 4% HP every 2s for this duration.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus HP': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus HP': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus HP': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus HP': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus HP': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus HP': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus HP': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus HP': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus HP': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus HP': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus HP': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus HP': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus HP': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus HP': 0.4135,
        },
    },
    refinements: [
        {
            description:
                'Using an Elemental Burst regenerates 4 Energy every 2s for 6s. All party members will regenerate 4% HP every 2s for this duration.',
            level: 1,
        },
        {
            description:
                'Using an Elemental Burst regenerates 4.5 Energy every 2s for 6s. All party members will regenerate 4.5% HP every 2s for this duration.',
            level: 2,
        },
        {
            description:
                'Using an Elemental Burst regenerates 5 Energy every 2s for 6s. All party members will regenerate 5% HP every 2s for this duration.',
            level: 3,
        },
        {
            description:
                'Using an Elemental Burst regenerates 5.5 Energy every 2s for 6s. All party members will regenerate 5.5% HP every 2s for this duration.',
            level: 4,
        },
        {
            description:
                'Using an Elemental Burst regenerates 6 Energy every 2s for 6s. All party members will regenerate 6% HP every 2s for this duration.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default PrototypeAmber
