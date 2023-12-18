import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const HuntersPath: Weapon = {
    name: "Hunter's Path",
    image: 'https://genshin.honeyhunterworld.com/img/i_n15511_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 5,
    description:
        'This gilded bow was made using precious white branches. It has felled countless wicked beasts attempting to infiltrate the woods.',
    effectName: 'At the End of the Beast-Paths',
    effectDescription:
        'Gain 12% All Elemental DMG Bonus. Obtain the Tireless Hunt effect after hitting an opponent with a Charged Attack. This effect increases Charged Attack DMG by 160% of Elemental Mastery. This effect will be removed after 12 Charged Attacks or 10s. Only 1 instance of Tireless Hunt can be gained every 12s.',
    baseStats: {
        '1/20': {
            'Base ATK': 44.34,
            'Bonus CRIT Rate': 0.096,
        },
        '20/20': {
            'Base ATK': 110.17,
            'Bonus CRIT Rate': 0.1696,
        },
        '20/40': {
            'Base ATK': 141.27,
            'Bonus CRIT Rate': 0.1696,
        },
        '40/40': {
            'Base ATK': 209.82,
            'Bonus CRIT Rate': 0.2472,
        },
        '40/50': {
            'Base ATK': 240.92,
            'Bonus CRIT Rate': 0.2472,
        },
        '50/50': {
            'Base ATK': 275.46,
            'Bonus CRIT Rate': 0.286,
        },
        '50/60': {
            'Base ATK': 306.66,
            'Bonus CRIT Rate': 0.286,
        },
        '60/60': {
            'Base ATK': 341.46,
            'Bonus CRIT Rate': 0.3248,
        },
        '60/70': {
            'Base ATK': 372.56,
            'Bonus CRIT Rate': 0.3248,
        },
        '70/70': {
            'Base ATK': 407.81,
            'Bonus CRIT Rate': 0.3635,
        },
        '70/80': {
            'Base ATK': 438.91,
            'Bonus CRIT Rate': 0.3635,
        },
        '80/80': {
            'Base ATK': 474.55,
            'Bonus CRIT Rate': 0.4022,
        },
        '80/90': {
            'Base ATK': 505.65,
            'Bonus CRIT Rate': 0.4022,
        },
        '90/90': {
            'Base ATK': 541.83,
            'Bonus CRIT Rate': 0.441,
        },
    },
    refinements: [
        {
            description:
                'Gain 12% All Elemental DMG Bonus. Obtain the Tireless Hunt effect after hitting an opponent with a Charged Attack. This effect increases Charged Attack DMG by 160% of Elemental Mastery. This effect will be removed after 12 Charged Attacks or 10s. Only 1 instance of Tireless Hunt can be gained every 12s.',
            level: 1,
        },
        {
            description:
                'Gain 15% All Elemental DMG Bonus. Obtain the Tireless Hunt effect after hitting an opponent with a Charged Attack. This effect increases Charged Attack DMG by 200% of Elemental Mastery. This effect will be removed after 12 Charged Attacks or 10s. Only 1 instance of Tireless Hunt can be gained every 12s.',
            level: 2,
        },
        {
            description:
                'Gain 18% All Elemental DMG Bonus. Obtain the Tireless Hunt effect after hitting an opponent with a Charged Attack. This effect increases Charged Attack DMG by 240% of Elemental Mastery. This effect will be removed after 12 Charged Attacks or 10s. Only 1 instance of Tireless Hunt can be gained every 12s.',
            level: 3,
        },
        {
            description:
                'Gain 21% All Elemental DMG Bonus. Obtain the Tireless Hunt effect after hitting an opponent with a Charged Attack. This effect increases Charged Attack DMG by 280% of Elemental Mastery. This effect will be removed after 12 Charged Attacks or 10s. Only 1 instance of Tireless Hunt can be gained every 12s.',
            level: 4,
        },
        {
            description:
                'Gain 24% All Elemental DMG Bonus. Obtain the Tireless Hunt effect after hitting an opponent with a Charged Attack. This effect increases Charged Attack DMG by 320% of Elemental Mastery. This effect will be removed after 12 Charged Attacks or 10s. Only 1 instance of Tireless Hunt can be gained every 12s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default HuntersPath
