import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const RedhornStonethresher: Weapon = {
    name: 'Redhorn Stonethresher',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12510_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 5,
    description:
        'According to its previous owner, this weapon is the "Mighty Redhorn Stoic Stonethreshing Gilded Goldcrushing Lion Lord" that can send any monster packing with its tail between its legs.',
    effectName: 'Gokadaiou Otogibanashi',
    effectDescription:
        'DEF is increased by 28%. Normal and Charged Attack DMG is increased by 40% of DEF.',
    baseStats: {
        '1/20': {
            'Base ATK': 44.34,
            'Bonus CRIT DMG': 0.192,
        },
        '20/20': {
            'Base ATK': 110.17,
            'Bonus CRIT DMG': 0.3393,
        },
        '20/40': {
            'Base ATK': 141.27,
            'Bonus CRIT DMG': 0.3393,
        },
        '40/40': {
            'Base ATK': 209.82,
            'Bonus CRIT DMG': 0.4944,
        },
        '40/50': {
            'Base ATK': 240.92,
            'Bonus CRIT DMG': 0.4944,
        },
        '50/50': {
            'Base ATK': 275.46,
            'Bonus CRIT DMG': 0.572,
        },
        '50/60': {
            'Base ATK': 306.66,
            'Bonus CRIT DMG': 0.572,
        },
        '60/60': {
            'Base ATK': 341.46,
            'Bonus CRIT DMG': 0.6495,
        },
        '60/70': {
            'Base ATK': 372.56,
            'Bonus CRIT DMG': 0.6495,
        },
        '70/70': {
            'Base ATK': 407.81,
            'Bonus CRIT DMG': 0.7269,
        },
        '70/80': {
            'Base ATK': 438.91,
            'Bonus CRIT DMG': 0.7269,
        },
        '80/80': {
            'Base ATK': 474.55,
            'Bonus CRIT DMG': 0.8045,
        },
        '80/90': {
            'Base ATK': 505.65,
            'Bonus CRIT DMG': 0.8045,
        },
        '90/90': {
            'Base ATK': 541.83,
            'Bonus CRIT DMG': 0.882,
        },
    },
    refinements: [
        {
            description:
                'DEF is increased by 28%. Normal and Charged Attack DMG is increased by 40% of DEF.',
            level: 1,
        },
        {
            description:
                'DEF is increased by 35%. Normal and Charged Attack DMG is increased by 50% of DEF.',
            level: 2,
        },
        {
            description:
                'DEF is increased by 42%. Normal and Charged Attack DMG is increased by 60% of DEF.',
            level: 3,
        },
        {
            description:
                'DEF is increased by 49%. Normal and Charged Attack DMG is increased by 70% of DEF.',
            level: 4,
        },
        {
            description:
                'DEF is increased by 56%. Normal and Charged Attack DMG is increased by 80% of DEF.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default RedhornStonethresher
