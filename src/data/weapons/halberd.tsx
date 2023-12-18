import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Halberd: Weapon = {
    name: 'Halberd',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13302_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 3,
    description:
        "A polearm with an axe blade mounted on top that can deal quite a lot of damage. It's favored by the Millelith officers.",
    effectName: 'Heavy',
    effectDescription:
        'Normal Attacks deal an additional 160% ATK as DMG. Can only occur once every 10s.',
    baseStats: {
        '1/20': {
            'Base ATK': 39.88,
            'Bonus ATK': 0.0511,
        },
        '20/20': {
            'Base ATK': 101.96,
            'Bonus ATK': 0.0902,
        },
        '20/40': {
            'Base ATK': 121.46,
            'Bonus ATK': 0.0902,
        },
        '40/40': {
            'Base ATK': 187.21,
            'Bonus ATK': 0.1315,
        },
        '40/50': {
            'Base ATK': 206.61,
            'Bonus ATK': 0.1315,
        },
        '50/50': {
            'Base ATK': 239.47,
            'Bonus ATK': 0.1521,
        },
        '50/60': {
            'Base ATK': 258.97,
            'Bonus ATK': 0.1521,
        },
        '60/60': {
            'Base ATK': 291.75,
            'Bonus ATK': 0.1728,
        },
        '60/70': {
            'Base ATK': 311.15,
            'Bonus ATK': 0.1728,
        },
        '70/70': {
            'Base ATK': 343.89,
            'Bonus ATK': 0.1933,
        },
        '70/80': {
            'Base ATK': 363.39,
            'Bonus ATK': 0.1933,
        },
        '80/80': {
            'Base ATK': 396.08,
            'Bonus ATK': 0.214,
        },
        '80/90': {
            'Base ATK': 415.48,
            'Bonus ATK': 0.214,
        },
        '90/90': {
            'Base ATK': 448.22,
            'Bonus ATK': 0.2346,
        },
    },
    refinements: [
        {
            description:
                'Normal Attacks deal an additional 160% ATK as DMG. Can only occur once every 10s.',
            level: 1,
        },
        {
            description:
                'Normal Attacks deal an additional 200% ATK as DMG. This effect can only occur once every 10s.',
            level: 2,
        },
        {
            description:
                'Normal Attacks deal an additional 240% ATK as DMG. This effect can only occur once every 10s.',
            level: 3,
        },
        {
            description:
                'Normal Attacks deal an additional 280% ATK as DMG. This effect can only occur once every 10s.',
            level: 4,
        },
        {
            description:
                'Normal Attacks deal an additional 320% ATK as DMG. This effect can only occur once every 10s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default Halberd
