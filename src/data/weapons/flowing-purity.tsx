import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const FlowingPurity: Weapon = {
    name: 'Flowing Purity',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14425_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A strangely-shaped anthology of scripts. All the scripts written by Coppelius are recorded within.',
    effectName: 'Unfinished Masterpiece',
    effectDescription:
        'When using an Elemental Skill, All Elemental DMG Bonus will be increased by 8% for 15s, and a Bond of Life worth 24% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, every 1,000 HP cleared in the process will provide 2% All Elemental DMG Bonus, up to a maximum of 12%. This effect lasts 15s.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus ATK': 0.06,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus ATK': 0.106,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus ATK': 0.106,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus ATK': 0.1545,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus ATK': 0.1545,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus ATK': 0.1787,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus ATK': 0.1787,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus ATK': 0.203,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus ATK': 0.203,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus ATK': 0.2272,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus ATK': 0.2272,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus ATK': 0.2514,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus ATK': 0.2514,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus ATK': 0.2756,
        },
    },
    refinements: [
        {
            description:
                'When using an Elemental Skill, All Elemental DMG Bonus will be increased by 8% for 15s, and a Bond of Life worth 24% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, every 1,000 HP cleared in the process will provide 2% All Elemental DMG Bonus, up to a maximum of 12%. This effect lasts 15s.',
            level: 1,
        },
        {
            description:
                'When using an Elemental Skill, All Elemental DMG Bonus will be increased by 10% for 15s, and a Bond of Life worth 24% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, every 1,000 HP cleared in the process will provide 2.5% All Elemental DMG Bonus, up to a maximum of 15%. This effect lasts 15s.',
            level: 2,
        },
        {
            description:
                'When using an Elemental Skill, All Elemental DMG Bonus will be increased by 12% for 15s, and a Bond of Life worth 24% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, every 1,000 HP cleared in the process will provide 3% All Elemental DMG Bonus, up to a maximum of 18%. This effect lasts 15s.',
            level: 3,
        },
        {
            description:
                'When using an Elemental Skill, All Elemental DMG Bonus will be increased by 14% for 15s, and a Bond of Life worth 24% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, every 1,000 HP cleared in the process will provide 3.5% All Elemental DMG Bonus, up to a maximum of 21%. This effect lasts 15s.',
            level: 4,
        },
        {
            description:
                'When using an Elemental Skill, All Elemental DMG Bonus will be increased by 16% for 15s, and a Bond of Life worth 24% of Max HP will be granted. This effect can be triggered once every 10s. When the Bond of Life is cleared, every 1,000 HP cleared in the process will provide 4% All Elemental DMG Bonus, up to a maximum of 24%. This effect lasts 15s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default FlowingPurity
