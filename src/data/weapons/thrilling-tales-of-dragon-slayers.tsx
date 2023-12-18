import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const ThrillingTalesOfDragonSlayers: Weapon = {
    name: 'Thrilling Tales of Dragon Slayers',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14302_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 3,
    description:
        'A fictional story of a band of five heroes who go off on a dragon hunt. It is poorly written and structurally incoherent. Its value lies in the many lessons that can be learned from failure.',
    effectName: 'Heritage',
    effectDescription:
        'When switching characters, the new character taking the field has their ATK increased by 24% for 10s. This effect can only occur once every 20s.',
    baseStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Bonus HP': 0.0766,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Bonus HP': 0.1354,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Bonus HP': 0.1354,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Bonus HP': 0.1972,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Bonus HP': 0.1972,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Bonus HP': 0.2282,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Bonus HP': 0.2282,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Bonus HP': 0.2591,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Bonus HP': 0.2591,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Bonus HP': 0.29,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Bonus HP': 0.29,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Bonus HP': 0.321,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Bonus HP': 0.321,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Bonus HP': 0.3519,
        },
    },
    refinements: [
        {
            description:
                'When switching characters, the new character taking the field has their ATK increased by 24% for 10s. This effect can only occur once every 20s.',
            level: 1,
        },
        {
            description:
                'When switching characters, the new character taking the field has their ATK increased by 30% for 10s. This effect can only occur once every 20s.',
            level: 2,
        },
        {
            description:
                'When switching characters, the new character taking the field has their ATK increased by 36% for 10s. This effect can only occur once every 20s.',
            level: 3,
        },
        {
            description:
                'When switching characters, the new character taking the field has their ATK increased by 42% for 10s. This effect can only occur once every 20s.',
            level: 4,
        },
        {
            description:
                'When switching characters, the new character taking the field has their ATK increased by 48% for 10s. This effect can only occur once every 20s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default ThrillingTalesOfDragonSlayers
