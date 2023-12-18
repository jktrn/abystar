import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const StaffOfTheScarletSands: Weapon = {
    name: 'Staff of the Scarlet Sands',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13511_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 5,
    description:
        'One of a paired set of scepters fashioned from obsidian. Legend has it that these staves grant the right to lead the people of the desert, but no retainer now lives who can verify the proper appearance of these regalia.',
    effectName: "Heat Haze at Horizon's End",
    effectDescription:
        'The equipping character gains 52% of their Elemental Mastery as bonus ATK. When an Elemental Skill hits opponents, the Dream of the Scarlet Sands effect will be gained for 10s: The equipping character will gain 28% of their Elemental Mastery as bonus ATK. Max 3 stacks.',
    baseStats: {
        '1/20': {
            'Base ATK': 44.34,
            'Bonus CRIT Rate': 0.096,
        },
        '20/20': {
            'Base ATK': 110.17,
            'Bonus CRIT Rate': 0.1696,
        },
        '20/40': {
            'Base ATK': 141.27,
            'Bonus CRIT Rate': 0.1696,
        },
        '40/40': {
            'Base ATK': 209.82,
            'Bonus CRIT Rate': 0.2472,
        },
        '40/50': {
            'Base ATK': 240.92,
            'Bonus CRIT Rate': 0.2472,
        },
        '50/50': {
            'Base ATK': 275.46,
            'Bonus CRIT Rate': 0.286,
        },
        '50/60': {
            'Base ATK': 306.66,
            'Bonus CRIT Rate': 0.286,
        },
        '60/60': {
            'Base ATK': 341.46,
            'Bonus CRIT Rate': 0.3248,
        },
        '60/70': {
            'Base ATK': 372.56,
            'Bonus CRIT Rate': 0.3248,
        },
        '70/70': {
            'Base ATK': 407.81,
            'Bonus CRIT Rate': 0.3635,
        },
        '70/80': {
            'Base ATK': 438.91,
            'Bonus CRIT Rate': 0.3635,
        },
        '80/80': {
            'Base ATK': 474.55,
            'Bonus CRIT Rate': 0.4022,
        },
        '80/90': {
            'Base ATK': 505.65,
            'Bonus CRIT Rate': 0.4022,
        },
        '90/90': {
            'Base ATK': 541.83,
            'Bonus CRIT Rate': 0.441,
        },
    },
    refinements: [
        {
            description:
                'The equipping character gains 52% of their Elemental Mastery as bonus ATK. When an Elemental Skill hits opponents, the Dream of the Scarlet Sands effect will be gained for 10s: The equipping character will gain 28% of their Elemental Mastery as bonus ATK. Max 3 stacks.',
            level: 1,
        },
        {
            description:
                'The equipping character gains 65% of their Elemental Mastery as bonus ATK. When an Elemental Skill hits opponents, the Dream of the Scarlet Sands effect will be gained for 10s: The equipping character will gain 35% of their Elemental Mastery as bonus ATK. Max 3 stacks.',
            level: 2,
        },
        {
            description:
                'The equipping character gains 78% of their Elemental Mastery as bonus ATK. When an Elemental Skill hits opponents, the Dream of the Scarlet Sands effect will be gained for 10s: The equipping character will gain 42% of their Elemental Mastery as bonus ATK. Max 3 stacks.',
            level: 3,
        },
        {
            description:
                'The equipping character gains 91% of their Elemental Mastery as bonus ATK. When an Elemental Skill hits opponents, the Dream of the Scarlet Sands effect will be gained for 10s: The equipping character will gain 49% of their Elemental Mastery as bonus ATK. Max 3 stacks.',
            level: 4,
        },
        {
            description:
                'The equipping character gains 104% of their Elemental Mastery as bonus ATK. When an Elemental Skill hits opponents, the Dream of the Scarlet Sands effect will be gained for 10s: The equipping character will gain 56% of their Elemental Mastery as bonus ATK. Max 3 stacks.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default StaffOfTheScarletSands
