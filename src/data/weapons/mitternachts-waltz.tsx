import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const MitternachtsWaltz: Weapon = {
    name: 'Mitternachts Waltz',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15412_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 4,
    description: 'A bow painted the color of transgression and nights of illusion.',
    effectName: 'Evernight Duet',
    effectDescription:
        'Normal Attack hits on opponents increase Elemental Skill DMG by 20% for 5s. Elemental Skill hits on opponents increase Normal Attack DMG by 20% for 5s.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Physical DMG Bonus': 0.1126,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Physical DMG Bonus': 0.199,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Physical DMG Bonus': 0.199,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Physical DMG Bonus': 0.2899,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Physical DMG Bonus': 0.2899,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Physical DMG Bonus': 0.3354,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Physical DMG Bonus': 0.3354,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Physical DMG Bonus': 0.3809,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Physical DMG Bonus': 0.3809,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Physical DMG Bonus': 0.4263,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Physical DMG Bonus': 0.4263,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Physical DMG Bonus': 0.4718,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Physical DMG Bonus': 0.4718,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Physical DMG Bonus': 0.5173,
        },
    },
    refinements: [
        {
            description:
                'Normal Attack hits on opponents increase Elemental Skill DMG by 20% for 5s. Elemental Skill hits on opponents increase Normal Attack DMG by 20% for 5s.',
            level: 1,
        },
        {
            description:
                'Normal Attack hits on opponents increase Elemental Skill DMG by 25% for 5s. Elemental Skill hits on opponents increase Normal Attack DMG by 25% for 5s.',
            level: 2,
        },
        {
            description:
                'Normal Attack hits on opponents increase Elemental Skill DMG by 30% for 5s. Elemental Skill hits on opponents increase Normal Attack DMG by 30% for 5s.',
            level: 3,
        },
        {
            description:
                'Normal Attack hits on opponents increase Elemental Skill DMG by 35% for 5s. Elemental Skill hits on opponents increase Normal Attack DMG by 35% for 5s.',
            level: 4,
        },
        {
            description:
                'Normal Attack hits on opponents increase Elemental Skill DMG by 40% for 5s. Elemental Skill hits on opponents increase Normal Attack DMG by 40% for 5s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default MitternachtsWaltz
