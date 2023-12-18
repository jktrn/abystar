import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const DebateClub: Weapon = {
    name: 'Debate Club',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12305_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 3,
    description:
        "A handy club made of fine steel. The most persuasive line of reasoning in any debater's arsenal.",
    effectName: 'Blunt Conclusion',
    effectDescription:
        'After using an Elemental Skill, on hit, Normal and Charged Attacks deal additional DMG equal to 60% of ATK in a small AoE. Effect lasts 15s. DMG can only occur once every 3s.',
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
                'After using an Elemental Skill, on hit, Normal and Charged Attacks deal additional DMG equal to 60% of ATK in a small AoE. Effect lasts 15s. DMG can only occur once every 3s.',
            level: 1,
        },
        {
            description:
                'After using an Elemental Skill, on hit, Normal and Charged Attacks deal additional DMG equal to 75% of ATK in a small AoE. Effect lasts 15s. DMG can only occur once every 3s.',
            level: 2,
        },
        {
            description:
                'After using an Elemental Skill, on hit, Normal and Charged Attacks deal additional DMG equal to 90% of ATK in a small AoE. Effect lasts 15s. DMG can only occur once every 3s.',
            level: 3,
        },
        {
            description:
                'After using an Elemental Skill, on hit, Normal and Charged Attacks deal additional DMG equal to 105% of ATK in a small AoE. Effect lasts 15s. DMG can only occur once every 3s.',
            level: 4,
        },
        {
            description:
                'After using an Elemental Skill, on hit, Normal and Charged Attacks deal additional DMG equal to 120% of ATK in a small AoE. Effect lasts 15s. DMG can only occur once every 3s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default DebateClub
