import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const DodocoTales: Weapon = {
    name: 'Dodoco Tales',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14413_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 4,
    description:
        "A children's book filled with childish short stories at which one cannot help but laugh.Even those readers who have long reached adulthood cannot help but be absorbed by the innocent, naive little adventures portrayed within.",
    effectName: 'Dodoventure!',
    effectDescription:
        'Normal Attack hits on opponents increase Charged Attack DMG by 16% for 6s. Charged Attack hits on opponents increase ATK by 8% for 6s.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus ATK': 0.12,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus ATK': 0.212,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus ATK': 0.212,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus ATK': 0.309,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus ATK': 0.309,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus ATK': 0.3575,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus ATK': 0.3575,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus ATK': 0.406,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus ATK': 0.406,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus ATK': 0.4543,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus ATK': 0.4543,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus ATK': 0.5028,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus ATK': 0.5028,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus ATK': 0.5513,
        },
    },
    refinements: [
        {
            description:
                'Normal Attack hits on opponents increase Charged Attack DMG by 16% for 6s. Charged Attack hits on opponents increase ATK by 8% for 6s.',
            level: 1,
        },
        {
            description:
                'Normal Attack hits on opponents increase Charged Attack DMG by 20% for 6s. Charged Attack hits on opponents increase ATK by 10% for 6s.',
            level: 2,
        },
        {
            description:
                'Normal Attack hits on opponents increase Charged Attack DMG by 24% for 6s. Charged Attack hits on opponents increase ATK by 12% for 6s.',
            level: 3,
        },
        {
            description:
                'Normal Attack hits on opponents increase Charged Attack DMG by 28% for 6s. Charged Attack hits on opponents increase ATK by 14% for 6s.',
            level: 4,
        },
        {
            description:
                'Normal Attack hits on opponents increase Charged Attack DMG by 32% for 6s. Charged Attack hits on opponents increase ATK by 16% for 6s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default DodocoTales
