import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const KeyOfKhajnisut: Weapon = {
    name: 'Key of Khaj-Nisut',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11511_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 5,
    description:
        'One of a paired set of scepters fashioned from obsidian. They say that this can be used as a key to open the gate to a paradise that lies at the end of the ocean of sand.',
    effectName: 'Sunken Song of the Sands',
    effectDescription:
        "HP increased by 20%. When an Elemental Skill hits opponents, you gain the Grand Hymn effect for 20s. This effect increases the equipping character's Elemental Mastery by 0.12% of their Max HP. This effect can trigger once every 0.3s. Max 3 stacks. When this effect gains 3 stacks, or when the third stack's duration is refreshed, the Elemental Mastery of all nearby party members will be increased by 0.2% of the equipping character's max HP for 20s.",
    baseStats: {
        '1/20': {
            'Base ATK': 44.34,
            'Bonus HP': 0.144,
        },
        '20/20': {
            'Base ATK': 110.17,
            'Bonus HP': 0.2544,
        },
        '20/40': {
            'Base ATK': 141.27,
            'Bonus HP': 0.2544,
        },
        '40/40': {
            'Base ATK': 209.82,
            'Bonus HP': 0.3708,
        },
        '40/50': {
            'Base ATK': 240.92,
            'Bonus HP': 0.3708,
        },
        '50/50': {
            'Base ATK': 275.46,
            'Bonus HP': 0.429,
        },
        '50/60': {
            'Base ATK': 306.66,
            'Bonus HP': 0.429,
        },
        '60/60': {
            'Base ATK': 341.46,
            'Bonus HP': 0.4872,
        },
        '60/70': {
            'Base ATK': 372.56,
            'Bonus HP': 0.4872,
        },
        '70/70': {
            'Base ATK': 407.81,
            'Bonus HP': 0.5452,
        },
        '70/80': {
            'Base ATK': 438.91,
            'Bonus HP': 0.5452,
        },
        '80/80': {
            'Base ATK': 474.55,
            'Bonus HP': 0.6034,
        },
        '80/90': {
            'Base ATK': 505.65,
            'Bonus HP': 0.6034,
        },
        '90/90': {
            'Base ATK': 541.83,
            'Bonus HP': 0.6615,
        },
    },
    refinements: [
        {
            description:
                "HP increased by 20%. When an Elemental Skill hits opponents, you gain the Grand Hymn effect for 20s. This effect increases the equipping character's Elemental Mastery by 0.12% of their Max HP. This effect can trigger once every 0.3s. Max 3 stacks. When this effect gains 3 stacks, or when the third stack's duration is refreshed, the Elemental Mastery of all nearby party members will be increased by 0.2% of the equipping character's max HP for 20s.",
            level: 1,
        },
        {
            description:
                "HP increased by 25%. When an Elemental Skill hits opponents, you gain the Grand Hymn effect for 20s. This effect increases the equipping character's Elemental Mastery by 0.15% of their Max HP. This effect can trigger once every 0.3s. Max 3 stacks. When this effect gains 3 stacks, or when the third stack's duration is refreshed, the Elemental Mastery of all nearby party members will be increased by 0.25% of the equipping character's max HP for 20s.",
            level: 2,
        },
        {
            description:
                "HP increased by 30%. When an Elemental Skill hits opponents, you gain the Grand Hymn effect for 20s. This effect increases the equipping character's Elemental Mastery by 0.18% of their Max HP. This effect can trigger once every 0.3s. Max 3 stacks. When this effect gains 3 stacks, or when the third stack's duration is refreshed, the Elemental Mastery of all nearby party members will be increased by 0.3% of the equipping character's max HP for 20s.",
            level: 3,
        },
        {
            description:
                "HP increased by 35%. When an Elemental Skill hits opponents, you gain the Grand Hymn effect for 20s. This effect increases the equipping character's Elemental Mastery by 0.21% of their Max HP. This effect can trigger once every 0.3s. Max 3 stacks. When this effect gains 3 stacks, or when the third stack's duration is refreshed, the Elemental Mastery of all nearby party members will be increased by 0.35% of the equipping character's max HP for 20s.",
            level: 4,
        },
        {
            description:
                "HP increased by 40%. When an Elemental Skill hits opponents, you gain the Grand Hymn effect for 20s. This effect increases the equipping character's Elemental Mastery by 0.24% of their Max HP. This effect can trigger once every 0.3s. Max 3 stacks. When this effect gains 3 stacks, or when the third stack's duration is refreshed, the Elemental Mastery of all nearby party members will be increased by 0.4% of the equipping character's max HP for 20s.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default KeyOfKhajnisut
