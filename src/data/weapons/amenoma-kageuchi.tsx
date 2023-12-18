import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const AmenomaKageuchi: Weapon = {
    name: 'Amenoma Kageuchi',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11414_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A blade custom made for a famed samurai who could strike down a tengu warrior, known for their incredible agility, in midair.',
    effectName: 'Iwakura Succession',
    effectDescription:
        'After casting an Elemental Skill, gain 1 Succession Seed. This effect can be triggered once every 5s. The Succession Seed lasts for 30s. Up to 3 Succession Seeds may exist simultaneously. After using an Elemental Burst, all Succession Seeds are consumed and after 2s, the character regenerates 6 Energy for each seed consumed.',
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
                'After casting an Elemental Skill, gain 1 Succession Seed. This effect can be triggered once every 5s. The Succession Seed lasts for 30s. Up to 3 Succession Seeds may exist simultaneously. After using an Elemental Burst, all Succession Seeds are consumed and after 2s, the character regenerates 6 Energy for each seed consumed.',
            level: 1,
        },
        {
            description:
                'After casting an Elemental Skill, gain 1 Succession Seed. This effect can be triggered once every 5s. The Succession Seed lasts for 30s. Up to 3 Succession Seeds may exist simultaneously. After using an Elemental Burst, all Succession Seeds are consumed and after 2s, the character regenerates 7.5 Energy for each seed consumed.',
            level: 2,
        },
        {
            description:
                'After casting an Elemental Skill, gain 1 Succession Seed. This effect can be triggered once every 5s. The Succession Seed lasts for 30s. Up to 3 Succession Seeds may exist simultaneously. After using an Elemental Burst, all Succession Seeds are consumed and after 2s, the character regenerates 9 Energy for each seed consumed.',
            level: 3,
        },
        {
            description:
                'After casting an Elemental Skill, gain 1 Succession Seed. This effect can be triggered once every 5s. The Succession Seed lasts for 30s. Up to 3 Succession Seeds may exist simultaneously. After using an Elemental Burst, all Succession Seeds are consumed and after 2s, the character regenerates 10.5 Energy for each seed consumed.',
            level: 4,
        },
        {
            description:
                'After casting an Elemental Skill, gain 1 Succession Seed. This effect can be triggered once every 5s. The Succession Seed lasts for 30s. Up to 3 Succession Seeds may exist simultaneously. After using an Elemental Burst, all Succession Seeds are consumed and after 2s, the character regenerates 12 Energy for each seed consumed.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default AmenomaKageuchi
