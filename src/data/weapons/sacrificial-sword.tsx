import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SacrificialSword: Weapon = {
    name: 'Sacrificial Sword',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11403_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 4,
    description:
        'A ceremonial sword that has become petrified over time. The trinkets on it are still visible. It grants the wielder the power to withstand the winds of time.',
    effectName: 'Composed',
    effectDescription:
        'After damaging an opponent with an Elemental Skill, the skill has a 40% chance to end its own CD. Can only occur once every 30s.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus Energy Recharge': 0.1333,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus Energy Recharge': 0.2356,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus Energy Recharge': 0.2356,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus Energy Recharge': 0.3433,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus Energy Recharge': 0.3433,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus Energy Recharge': 0.3972,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus Energy Recharge': 0.3972,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus Energy Recharge': 0.4511,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus Energy Recharge': 0.4511,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus Energy Recharge': 0.5048,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus Energy Recharge': 0.5048,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus Energy Recharge': 0.5587,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus Energy Recharge': 0.5587,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus Energy Recharge': 0.6125,
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

export default SacrificialSword
