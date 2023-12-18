import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const CompoundBow: Weapon = {
    name: 'Compound Bow',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15407_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'An exotic metallic bow from a distant land. Though extremely difficult to maintain, it is easy to nock and fires with tremendous force.',
    effectName: 'Infusion Arrow',
    effectDescription:
        'Normal Attack and Charged Attack hits increase ATK by 4% and Normal ATK SPD by 1.2% for 6s. Max 4 stacks. Can only occur once every 0.3s.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Physical DMG Bonus': 0.1501,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Physical DMG Bonus': 0.2653,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Physical DMG Bonus': 0.2653,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Physical DMG Bonus': 0.3866,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Physical DMG Bonus': 0.3866,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Physical DMG Bonus': 0.4472,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Physical DMG Bonus': 0.4472,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Physical DMG Bonus': 0.5079,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Physical DMG Bonus': 0.5079,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Physical DMG Bonus': 0.5684,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Physical DMG Bonus': 0.5684,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Physical DMG Bonus': 0.6291,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Physical DMG Bonus': 0.6291,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Physical DMG Bonus': 0.6897,
        },
    },
    refinements: [
        {
            description:
                'Normal Attack and Charged Attack hits increase ATK by 4% and Normal ATK SPD by 1.2% for 6s. Max 4 stacks. Can only occur once every 0.3s.',
            level: 1,
        },
        {
            description:
                'Normal Attack and Charged Attack hits increase ATK by 5% and Normal ATK SPD by 1.5% for 6s. Max 4 stacks. Can only occur once every 0.3s.',
            level: 2,
        },
        {
            description:
                'Normal Attack and Charged Attack hits increase ATK by 6% and Normal ATK SPD by 1.8% for 6s. Max 4 stacks. Can only occur once every 0.3s.',
            level: 3,
        },
        {
            description:
                'Normal Attack and Charged Attack hits increase ATK by 7% and Normal ATK SPD by 2.1% for 6s. Max 4 stacks. Can only occur once every 0.3s.',
            level: 4,
        },
        {
            description:
                'Normal Attack and Charged Attack hits increase ATK by 8% and Normal ATK SPD by 2.4% for 6s. Max 4 stacks. Can only occur once every 0.3s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default CompoundBow
