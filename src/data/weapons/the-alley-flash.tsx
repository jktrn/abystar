import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TheAlleyFlash: Weapon = {
    name: 'The Alley Flash',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11410_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 4,
    description:
        'A straight sword as black as the night. It once belonged to a thief who roamed the benighted streets.',
    effectName: 'Itinerant Hero',
    effectDescription:
        'Increases DMG dealt by the character equipping this weapon by 12%. Taking DMG disables this effect for 5s.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.07,
            'Bonus Elemental Mastery': 12.0,
        },
        '20/20': {
            'Base ATK': 128.22,
            'Bonus Elemental Mastery': 21.2,
        },
        '20/40': {
            'Base ATK': 154.12,
            'Bonus Elemental Mastery': 21.2,
        },
        '40/40': {
            'Base ATK': 247.14,
            'Bonus Elemental Mastery': 30.9,
        },
        '40/50': {
            'Base ATK': 273.14,
            'Bonus Elemental Mastery': 30.9,
        },
        '50/50': {
            'Base ATK': 320.87,
            'Bonus Elemental Mastery': 35.75,
        },
        '50/60': {
            'Base ATK': 346.77,
            'Bonus Elemental Mastery': 35.75,
        },
        '60/60': {
            'Base ATK': 395.04,
            'Bonus Elemental Mastery': 40.6,
        },
        '60/70': {
            'Base ATK': 420.94,
            'Bonus Elemental Mastery': 40.6,
        },
        '70/70': {
            'Base ATK': 469.66,
            'Bonus Elemental Mastery': 45.43,
        },
        '70/80': {
            'Base ATK': 495.66,
            'Bonus Elemental Mastery': 45.43,
        },
        '80/80': {
            'Base ATK': 544.74,
            'Bonus Elemental Mastery': 50.28,
        },
        '80/90': {
            'Base ATK': 570.64,
            'Bonus Elemental Mastery': 50.28,
        },
        '90/90': {
            'Base ATK': 620.03,
            'Bonus Elemental Mastery': 55.13,
        },
    },
    refinements: [
        {
            description:
                'Increases DMG dealt by the character equipping this weapon by 12%. Taking DMG disables this effect for 5s.',
            level: 1,
        },
        {
            description:
                'Increases DMG dealt by the character equipping this weapon by 15%. Taking DMG disables this effect for 5s.',
            level: 2,
        },
        {
            description:
                'Increases DMG dealt by the character equipping this weapon by 18%. Taking DMG disables this effect for 5s.',
            level: 3,
        },
        {
            description:
                'Increases DMG dealt by the character equipping this weapon by 21%. Taking DMG disables this effect for 5s.',
            level: 4,
        },
        {
            description:
                'Increases DMG dealt by the character equipping this weapon by 24%. Taking DMG disables this effect for 5s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TheAlleyFlash
