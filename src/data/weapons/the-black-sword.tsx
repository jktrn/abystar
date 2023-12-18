import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TheBlackSword: Weapon = {
    name: 'The Black Sword',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11409_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 4,
    description:
        'A pitch-black longsword that thirsts for violence and conflict. It is said that this weapon can cause its user to become drunk on the red wine of slaughter.',
    effectName: 'Justice',
    effectDescription:
        'Increases DMG dealt by Normal and Charged Attacks by 20%. Additionally, regenerates 60% of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur once every 5s.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus CRIT Rate': 0.06,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus CRIT Rate': 0.106,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus CRIT Rate': 0.106,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus CRIT Rate': 0.1787,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus CRIT Rate': 0.1787,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus CRIT Rate': 0.203,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus CRIT Rate': 0.203,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus CRIT Rate': 0.2514,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus CRIT Rate': 0.2514,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus CRIT Rate': 0.2756,
        },
    },
    refinements: [
        {
            description:
                'Increases DMG dealt by Normal and Charged Attacks by 20%. Additionally, regenerates 60% of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur once every 5s.',
            level: 1,
        },
        {
            description:
                'Increases DMG dealt by Normal and Charged Attacks by 25%. Additionally, regenerates 70% of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur once every 5s.',
            level: 2,
        },
        {
            description:
                'Increases DMG dealt by Normal and Charged Attacks by 30%. Additionally, regenerates 80% of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur once every 5s.',
            level: 3,
        },
        {
            description:
                'Increases DMG dealt by Normal and Charged Attacks by 35%. Additionally, regenerates 90% of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur once every 5s.',
            level: 4,
        },
        {
            description:
                'Increases DMG dealt by Normal and Charged Attacks by 40%. Additionally, regenerates 100% of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur once every 5s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TheBlackSword
