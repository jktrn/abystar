import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const LuxuriousSealord: Weapon = {
    name: 'Luxurious Sea-Lord',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12412_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 4,
    description:
        'The great king of the ocean. Having been air-dried, it makes for a fine weapon as well as emergency sustenance.',
    effectName: 'Oceanic Victory',
    effectDescription:
        'Increases Elemental Burst DMG by 12%. When Elemental Burst hits opponents, there is a 100% chance of summoning a huge onrush of tuna that deals 100% ATK as AoE DMG. This effect can occur once every 15s.',
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
                'Increases Elemental Burst DMG by 12%. When Elemental Burst hits opponents, there is a 100% chance of summoning a huge onrush of tuna that deals 100% ATK as AoE DMG. This effect can occur once every 15s.',
            level: 1,
        },
        {
            description:
                'Increases Elemental Burst DMG by 15%. When Elemental Burst hits opponents, there is a 100% chance of summoning a huge onrush of tuna that deals 125% ATK as AoE DMG. This effect can occur once every 15s.',
            level: 2,
        },
        {
            description:
                'Increases Elemental Burst DMG by 18%. When Elemental Burst hits opponents, there is a 100% chance of summoning a huge onrush of tuna that deals 150% ATK as AoE DMG. This effect can occur once every 15s.',
            level: 3,
        },
        {
            description:
                'Increases Elemental Burst DMG by 21%. When Elemental Burst hits opponents, there is a 100% chance of summoning a huge onrush of tuna that deals 175% ATK as AoE DMG. This effect can occur once every 15s.',
            level: 4,
        },
        {
            description:
                'Increases Elemental Burst DMG by 24%. When Elemental Burst hits opponents, there is a 100% chance of summoning a huge onrush of tuna that deals 200% ATK as AoE DMG. This effect can occur once every 15s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default LuxuriousSealord
