import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const WavebreakersFin: Weapon = {
    name: "Wavebreaker's Fin",
    image: 'https://genshin.honeyhunterworld.com/img/i_n13416_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        'A naginata forged from luminescent material deep in the ocean depths. It was once the possession of the tengu race.',
    effectName: 'Watatsumi Wavewalker',
    effectDescription:
        "For every point of the entire party's combined maximum Energy capacity, the Elemental Burst DMG of the character equipping this weapon is increased by 0.12%. A maximum of 40% increased Elemental Burst DMG can be achieved this way.",
    baseStats: {
        '1/20': {
            'Base ATK': 45.07,
            'Bonus ATK': 0.03,
        },
        '20/20': {
            'Base ATK': 128.22,
            'Bonus ATK': 0.053,
        },
        '20/40': {
            'Base ATK': 154.12,
            'Bonus ATK': 0.053,
        },
        '40/40': {
            'Base ATK': 247.14,
            'Bonus ATK': 0.0772,
        },
        '40/50': {
            'Base ATK': 273.14,
            'Bonus ATK': 0.0772,
        },
        '50/50': {
            'Base ATK': 320.87,
            'Bonus ATK': 0.0894,
        },
        '50/60': {
            'Base ATK': 346.77,
            'Bonus ATK': 0.0894,
        },
        '60/60': {
            'Base ATK': 395.04,
            'Bonus ATK': 0.1015,
        },
        '60/70': {
            'Base ATK': 420.94,
            'Bonus ATK': 0.1015,
        },
        '70/70': {
            'Base ATK': 469.66,
            'Bonus ATK': 0.1136,
        },
        '70/80': {
            'Base ATK': 495.66,
            'Bonus ATK': 0.1136,
        },
        '80/80': {
            'Base ATK': 544.74,
            'Bonus ATK': 0.1257,
        },
        '80/90': {
            'Base ATK': 570.64,
            'Bonus ATK': 0.1257,
        },
        '90/90': {
            'Base ATK': 620.03,
            'Bonus ATK': 0.1378,
        },
    },
    refinements: [
        {
            description:
                "For every point of the entire party's combined maximum Energy capacity, the Elemental Burst DMG of the character equipping this weapon is increased by 0.12%. A maximum of 40% increased Elemental Burst DMG can be achieved this way.",
            level: 1,
        },
        {
            description:
                "For every point of the entire party's combined maximum Energy capacity, the Elemental Burst DMG of the character equipping this weapon is increased by 0.15%. A maximum of 50% increased Elemental Burst DMG can be achieved this way.",
            level: 2,
        },
        {
            description:
                "For every point of the entire party's combined maximum Energy capacity, the Elemental Burst DMG of the character equipping this weapon is increased by 0.18%. A maximum of 60% increased Elemental Burst DMG can be achieved this way.",
            level: 3,
        },
        {
            description:
                "For every point of the entire party's combined maximum Energy capacity, the Elemental Burst DMG of the character equipping this weapon is increased by 0.21%. A maximum of 70% increased Elemental Burst DMG can be achieved this way.",
            level: 4,
        },
        {
            description:
                "For every point of the entire party's combined maximum Energy capacity, the Elemental Burst DMG of the character equipping this weapon is increased by 0.24%. A maximum of 80% increased Elemental Burst DMG can be achieved this way.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default WavebreakersFin
