import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const MissiveWindspear: Weapon = {
    name: 'Missive Windspear',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13419_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        'A beacon that shows the direction of the wind. Not every idyll carried on the breeze remains a gentle thing...',
    effectName: 'The Wind Unattained',
    effectDescription:
        'Within 10s after an Elemental Reaction is triggered, ATK is increased by 12% and Elemental Mastery is increased by 48.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus ATK': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus ATK': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus ATK': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus ATK': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus ATK': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus ATK': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus ATK': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus ATK': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus ATK': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus ATK': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus ATK': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus ATK': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus ATK': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus ATK': 0.4135,
        },
    },
    refinements: [
        {
            description:
                'Within 10s after an Elemental Reaction is triggered, ATK is increased by 12% and Elemental Mastery is increased by 48.',
            level: 1,
        },
        {
            description:
                'Within 10s after an Elemental Reaction is triggered, ATK is increased by 15% and Elemental Mastery is increased by 60.',
            level: 2,
        },
        {
            description:
                'Within 10s after an Elemental Reaction is triggered, ATK is increased by 18% and Elemental Mastery is increased by 72.',
            level: 3,
        },
        {
            description:
                'Within 10s after an Elemental Reaction is triggered, ATK is increased by 21% and Elemental Mastery is increased by 84.',
            level: 4,
        },
        {
            description:
                'Within 10s after an Elemental Reaction is triggered, ATK is increased by 24% and Elemental Mastery is increased by 96.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default MissiveWindspear
