import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const BalladOfTheBoundlessBlue: Weapon = {
    name: 'Ballad of the Boundless Blue',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14426_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 4,
    description:
        'An anthology of exquisite poetry. It contains quite a few poems beloved by Mondstadters, concerning the skies, dandelions, and other such topics.',
    effectName: 'Azure Skies',
    effectDescription:
        'Within 6s after Normal or Charged Attacks hit an opponent, Normal Attack DMG will be increased by 8% and Charged Attack DMG will be increased by 6%. Max 3 stacks. This effect can be triggered once every 0.3s.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus Energy Recharge': 0.0667,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus Energy Recharge': 0.1178,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus Energy Recharge': 0.1178,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus Energy Recharge': 0.1717,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus Energy Recharge': 0.1717,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus Energy Recharge': 0.1986,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus Energy Recharge': 0.1986,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus Energy Recharge': 0.2255,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus Energy Recharge': 0.2255,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus Energy Recharge': 0.2524,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus Energy Recharge': 0.2524,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus Energy Recharge': 0.2793,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus Energy Recharge': 0.2793,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus Energy Recharge': 0.3063,
        },
    },
    refinements: [
        {
            description:
                'Within 6s after Normal or Charged Attacks hit an opponent, Normal Attack DMG will be increased by 8% and Charged Attack DMG will be increased by 6%. Max 3 stacks. This effect can be triggered once every 0.3s.',
            level: 1,
        },
        {
            description:
                'Within 6s after Normal or Charged Attacks hit an opponent, Normal Attack DMG will be increased by 10% and Charged Attack DMG will be increased by 7.5%. Max 3 stacks. This effect can be triggered once every 0.3s.',
            level: 2,
        },
        {
            description:
                'Within 6s after Normal or Charged Attacks hit an opponent, Normal Attack DMG will be increased by 12% and Charged Attack DMG will be increased by 9%. Max 3 stacks. This effect can be triggered once every 0.3s.',
            level: 3,
        },
        {
            description:
                'Within 6s after Normal or Charged Attacks hit an opponent, Normal Attack DMG will be increased by 14% and Charged Attack DMG will be increased by 10.5%. Max 3 stacks. This effect can be triggered once every 0.3s.',
            level: 4,
        },
        {
            description:
                'Within 6s after Normal or Charged Attacks hit an opponent, Normal Attack DMG will be increased by 16% and Charged Attack DMG will be increased by 12%. Max 3 stacks. This effect can be triggered once every 0.3s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default BalladOfTheBoundlessBlue
