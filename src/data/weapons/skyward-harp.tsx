import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SkywardHarp: Weapon = {
    name: 'Skyward Harp',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15501_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 5,
    description:
        "A greatbow that symbolizes Dvalin's affiliation with the Anemo Archon. The sound of the bow firing is music to the Anemo Archon's ears. It contains the power of the sky and wind within.",
    effectName: 'Echoing Ballad',
    effectDescription:
        'Increases CRIT DMG by 20%. Hits have a 60% chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every 4s.',
    baseStats: {
        '1/20': {
            'Base ATK': 47.54,
            'Bonus CRIT Rate': 0.048,
        },
        '20/20': {
            'Base ATK': 133.29,
            'Bonus CRIT Rate': 0.0848,
        },
        '20/40': {
            'Base ATK': 164.39,
            'Bonus CRIT Rate': 0.0848,
        },
        '40/40': {
            'Base ATK': 260.56,
            'Bonus CRIT Rate': 0.1236,
        },
        '40/50': {
            'Base ATK': 291.66,
            'Bonus CRIT Rate': 0.1236,
        },
        '50/50': {
            'Base ATK': 341.43,
            'Bonus CRIT Rate': 0.143,
        },
        '50/60': {
            'Base ATK': 372.63,
            'Bonus CRIT Rate': 0.143,
        },
        '60/60': {
            'Base ATK': 423.4,
            'Bonus CRIT Rate': 0.1624,
        },
        '60/70': {
            'Base ATK': 454.5,
            'Bonus CRIT Rate': 0.1624,
        },
        '70/70': {
            'Base ATK': 506.22,
            'Bonus CRIT Rate': 0.1817,
        },
        '70/80': {
            'Base ATK': 537.32,
            'Bonus CRIT Rate': 0.1817,
        },
        '80/80': {
            'Base ATK': 589.85,
            'Bonus CRIT Rate': 0.2011,
        },
        '80/90': {
            'Base ATK': 620.95,
            'Bonus CRIT Rate': 0.2011,
        },
        '90/90': {
            'Base ATK': 674.33,
            'Bonus CRIT Rate': 0.2205,
        },
    },
    refinements: [
        {
            description:
                'Increases CRIT DMG by 20%. Hits have a 60% chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every 4s.',
            level: 1,
        },
        {
            description:
                'Increases CRIT DMG by 25%. Hits have a 70% chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every 3.5s.',
            level: 2,
        },
        {
            description:
                'Increases CRIT DMG by 30%. Hits have a 80% chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every 3s.',
            level: 3,
        },
        {
            description:
                'Increases CRIT DMG by 35%. Hits have a 90% chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every 2.5s.',
            level: 4,
        },
        {
            description:
                'Increases CRIT DMG by 40%. Hits have a 100% chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every 2s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SkywardHarp
