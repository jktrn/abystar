import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SkywardAtlas: Weapon = {
    name: 'Skyward Atlas',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14501_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 5,
    description:
        'A cloud atlas symbolizing Dvalin and his former master, the Anemo Archon. It details the winds and clouds of the northern regions and contains the powers of the sky and wind.',
    effectName: 'Wandering Clouds',
    effectDescription:
        'Increases Elemental DMG Bonus by 12%. Normal Attack hits have a 50% chance to earn the favor of the clouds, which actively seek out nearby opponents to attack for 15s, dealing 160% ATK DMG. Can only occur once every 30s.',
    baseStats: {
        '1/20': {
            'Base ATK': 47.54,
            'Bonus ATK': 0.072,
        },
        '20/20': {
            'Base ATK': 133.29,
            'Bonus ATK': 0.1272,
        },
        '20/40': {
            'Base ATK': 164.39,
            'Bonus ATK': 0.1272,
        },
        '40/40': {
            'Base ATK': 260.56,
            'Bonus ATK': 0.1854,
        },
        '40/50': {
            'Base ATK': 291.66,
            'Bonus ATK': 0.1854,
        },
        '50/50': {
            'Base ATK': 341.43,
            'Bonus ATK': 0.2145,
        },
        '50/60': {
            'Base ATK': 372.63,
            'Bonus ATK': 0.2145,
        },
        '60/60': {
            'Base ATK': 423.4,
            'Bonus ATK': 0.2436,
        },
        '60/70': {
            'Base ATK': 454.5,
            'Bonus ATK': 0.2436,
        },
        '70/70': {
            'Base ATK': 506.22,
            'Bonus ATK': 0.2726,
        },
        '70/80': {
            'Base ATK': 537.32,
            'Bonus ATK': 0.2726,
        },
        '80/80': {
            'Base ATK': 589.85,
            'Bonus ATK': 0.3017,
        },
        '80/90': {
            'Base ATK': 620.95,
            'Bonus ATK': 0.3017,
        },
        '90/90': {
            'Base ATK': 674.33,
            'Bonus ATK': 0.3308,
        },
    },
    refinements: [
        {
            description:
                'Increases Elemental DMG Bonus by 12%. Normal Attack hits have a 50% chance to earn the favor of the clouds, which actively seek out nearby opponents to attack for 15s, dealing 160% ATK DMG. Can only occur once every 30s.',
            level: 1,
        },
        {
            description:
                'Increases Elemental DMG Bonus by 15%. Normal Attack hits have a 50% chance to earn the favor of the clouds, which actively seek out nearby opponents to attack for 15s, dealing 200% ATK DMG. Can only occur once every 30s.',
            level: 2,
        },
        {
            description:
                'Increases Elemental DMG Bonus by 18%. Normal Attack hits have a 50% chance to earn the favor of the clouds, which actively seek out nearby opponents to attack for 15s, dealing 240% ATK DMG. Can only occur once every 30s.',
            level: 3,
        },
        {
            description:
                'Increases Elemental DMG Bonus by 21%. Normal Attack hits have a 50% chance to earn the favor of the clouds, which actively seek out nearby opponents to attack for 15s, dealing 280% ATK DMG. Can only occur once every 30s.',
            level: 4,
        },
        {
            description:
                'Increases Elemental DMG Bonus by 24%. Normal Attack hits have a 50% chance to earn the favor of the clouds, which actively seek out nearby opponents to attack for 15s, dealing 320% ATK DMG. Can only occur once every 30s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SkywardAtlas
