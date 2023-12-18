import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const EyeOfPerception: Weapon = {
    name: 'Eye of Perception',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14409_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 4,
    description:
        "A dim black glaze pearl that is said to have the power to read the purity of one's heart.",
    effectName: 'Echo',
    effectDescription:
        'Normal and Charged Attacks have a 50% chance to fire a Bolt of Perception, dealing 240% ATK as DMG. This bolt can bounce between opponents a maximum of 4 times. This effect can occur once every 12s.',
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
                'Normal and Charged Attacks have a 50% chance to fire a Bolt of Perception, dealing 240% ATK as DMG. This bolt can bounce between opponents a maximum of 4 times. This effect can occur once every 12s.',
            level: 1,
        },
        {
            description:
                'Normal and Charged Attacks have a 50% chance to fire a Bolt of Perception, dealing 270% ATK as DMG. This bolt can bounce between opponents a maximum of 4 times. This effect can occur once every 11s.',
            level: 2,
        },
        {
            description:
                'Normal and Charged Attacks have a 50% chance to fire a Bolt of Perception, dealing 300% ATK as DMG. This bolt can bounce between opponents a maximum of 4 times. This effect can occur once every 10s.',
            level: 3,
        },
        {
            description:
                'Normal and Charged Attacks have a 50% chance to fire a Bolt of Perception, dealing 330% ATK as DMG. This bolt can bounce between opponents a maximum of 4 times. This effect can occur once every 9s.',
            level: 4,
        },
        {
            description:
                'Normal and Charged Attacks have a 50% chance to fire a Bolt of Perception, dealing 360% ATK as DMG. This bolt can bounce between opponents a maximum of 4 times. This effect can occur once every 8s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default EyeOfPerception
