import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SacrificialFragments: Weapon = {
    name: 'Sacrificial Fragments',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14403_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 4,
    description:
        'A weathered script, the text of which is no longer legible. A cursed item eroded by the winds of time.',
    effectName: 'Composed',
    effectDescription:
        'After damaging an opponent with an Elemental Skill, the skill has a 40% chance to end its own CD. Can only occur once every 30s.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus Elemental Mastery': 48.0,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus Elemental Mastery': 84.82,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus Elemental Mastery': 84.82,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus Elemental Mastery': 123.6,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus Elemental Mastery': 123.6,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus Elemental Mastery': 142.99,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus Elemental Mastery': 142.99,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus Elemental Mastery': 162.38,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus Elemental Mastery': 162.38,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus Elemental Mastery': 181.73,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus Elemental Mastery': 181.73,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus Elemental Mastery': 201.12,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus Elemental Mastery': 201.12,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus Elemental Mastery': 220.51,
        },
    },
    refinements: [
        {
            description:
                'After damaging an opponent with an Elemental Skill, the skill has a 40% chance to end its own CD. Can only occur once every 30s.',
            level: 1,
        },
        {
            description:
                'After damaging an opponent with an Elemental Skill, the skill has a 50% chance to end its own CD. Can only occur once every 26s.',
            level: 2,
        },
        {
            description:
                'After damaging an opponent with an Elemental Skill, the skill has a 60% chance to end its own CD. Can only occur once every 22s.',
            level: 3,
        },
        {
            description:
                'After damaging an opponent with an Elemental Skill, the skill has a 70% chance to end its own CD. Can only occur once every 19s.',
            level: 4,
        },
        {
            description:
                'After damaging an opponent with an Elemental Skill, the skill has a 80% chance to end its own CD. Can only occur once every 16s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SacrificialFragments
