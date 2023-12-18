import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SkywardPride: Weapon = {
    name: 'Skyward Pride',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12501_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 5,
    description:
        "A claymore that symbolizes the pride of Dvalin soaring through the skies. When swung, it emits a deep hum as the full force of Dvalin's command of the sky and the wind is unleashed.",
    effectName: 'Sky-ripping Dragon Spine',
    effectDescription:
        'Increases all DMG by 8%. After using an Elemental Burst, a vacuum blade that does 80% of ATK as DMG to opponents along its path will be created when Normal or Charged Attacks hit. Lasts for 20s or 8 vacuum blades.',
    baseStats: {
        '1/20': {
            'Base ATK': 47.54,
            'Bonus Energy Recharge': 0.08,
        },
        '20/20': {
            'Base ATK': 133.29,
            'Bonus Energy Recharge': 0.1414,
        },
        '20/40': {
            'Base ATK': 164.39,
            'Bonus Energy Recharge': 0.1414,
        },
        '40/40': {
            'Base ATK': 260.56,
            'Bonus Energy Recharge': 0.206,
        },
        '40/50': {
            'Base ATK': 291.66,
            'Bonus Energy Recharge': 0.206,
        },
        '50/50': {
            'Base ATK': 341.43,
            'Bonus Energy Recharge': 0.2383,
        },
        '50/60': {
            'Base ATK': 372.63,
            'Bonus Energy Recharge': 0.2383,
        },
        '60/60': {
            'Base ATK': 423.4,
            'Bonus Energy Recharge': 0.2706,
        },
        '60/70': {
            'Base ATK': 454.5,
            'Bonus Energy Recharge': 0.2706,
        },
        '70/70': {
            'Base ATK': 506.22,
            'Bonus Energy Recharge': 0.3029,
        },
        '70/80': {
            'Base ATK': 537.32,
            'Bonus Energy Recharge': 0.3029,
        },
        '80/80': {
            'Base ATK': 589.85,
            'Bonus Energy Recharge': 0.3352,
        },
        '80/90': {
            'Base ATK': 620.95,
            'Bonus Energy Recharge': 0.3352,
        },
        '90/90': {
            'Base ATK': 674.33,
            'Bonus Energy Recharge': 0.3675,
        },
    },
    refinements: [
        {
            description:
                'Increases all DMG by 8%. After using an Elemental Burst, a vacuum blade that does 80% of ATK as DMG to opponents along its path will be created when Normal or Charged Attacks hit. Lasts for 20s or 8 vacuum blades.',
            level: 1,
        },
        {
            description:
                'Increases all DMG by 10%. After using an Elemental Burst, a vacuum blade that does 100% of ATK as DMG to opponents along its path will be created when Normal or Charged Attacks hit. Lasts for 20s or 8 vacuum blades.',
            level: 2,
        },
        {
            description:
                'Increases all DMG by 12%. After using an Elemental Burst, a vacuum blade that does 120% of ATK as DMG to opponents along its path will be created when Normal or Charged Attacks hit. Lasts for 20s or 8 vacuum blades.',
            level: 3,
        },
        {
            description:
                'Increases all DMG by 14%. After using an Elemental Burst, a vacuum blade that does 140% of ATK as DMG to opponents along its path will be created when Normal or Charged Attacks hit. Lasts for 20s or 8 vacuum blades.',
            level: 4,
        },
        {
            description:
                'Increases all DMG by 16%. After using an Elemental Burst, a vacuum blade that does 160% of ATK as DMG to opponents along its path will be created when Normal or Charged Attacks hit. Lasts for 20s or 8 vacuum blades.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SkywardPride
