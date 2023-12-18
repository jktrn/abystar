import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TalkingStick: Weapon = {
    name: 'Talking Stick',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12424_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 4,
    description:
        'Most people will find this obsidian-inlaid club quite convincing indeed.',
    effectName: '"The Silver Tongue"',
    effectDescription:
        'ATK will be increased by 16% for 15s after being affected by Pyro. This effect can be triggered once every 12s. All Elemental DMG Bonus will be increased by 12% for 15s after being affected by Hydro, Cryo, Electro, or Dendro. This effect can be triggered once every 12s.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus CRIT Rate': 0.04,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus CRIT Rate': 0.0707,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus CRIT Rate': 0.0707,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus CRIT Rate': 0.103,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus CRIT Rate': 0.103,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus CRIT Rate': 0.1192,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus CRIT Rate': 0.1192,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus CRIT Rate': 0.1353,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus CRIT Rate': 0.1353,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus CRIT Rate': 0.1514,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus CRIT Rate': 0.1514,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus CRIT Rate': 0.1676,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus CRIT Rate': 0.1676,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus CRIT Rate': 0.1838,
        },
    },
    refinements: [
        {
            description:
                'ATK will be increased by 16% for 15s after being affected by Pyro. This effect can be triggered once every 12s. All Elemental DMG Bonus will be increased by 12% for 15s after being affected by Hydro, Cryo, Electro, or Dendro. This effect can be triggered once every 12s.',
            level: 1,
        },
        {
            description:
                'ATK will be increased by 20% for 15s after being affected by Pyro. This effect can be triggered once every 12s. All Elemental DMG Bonus will be increased by 15% for 15s after being affected by Hydro, Cryo, Electro, or Dendro. This effect can be triggered once every 12s.',
            level: 2,
        },
        {
            description:
                'ATK will be increased by 24% for 15s after being affected by Pyro. This effect can be triggered once every 12s. All Elemental DMG Bonus will be increased by 18% for 15s after being affected by Hydro, Cryo, Electro, or Dendro. This effect can be triggered once every 12s.',
            level: 3,
        },
        {
            description:
                'ATK will be increased by 28% for 15s after being affected by Pyro. This effect can be triggered once every 12s. All Elemental DMG Bonus will be increased by 21% for 15s after being affected by Hydro, Cryo, Electro, or Dendro. This effect can be triggered once every 12s.',
            level: 4,
        },
        {
            description:
                'ATK will be increased by 32% for 15s after being affected by Pyro. This effect can be triggered once every 12s. All Elemental DMG Bonus will be increased by 24% for 15s after being affected by Hydro, Cryo, Electro, or Dendro. This effect can be triggered once every 12s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TalkingStick
