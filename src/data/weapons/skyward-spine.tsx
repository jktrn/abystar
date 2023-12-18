import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SkywardSpine: Weapon = {
    name: 'Skyward Spine',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13502_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 5,
    description:
        "A polearm that symbolizes Dvalin's firm resolve. The upright shaft of this weapon points towards the heavens, clad in the might of sky and wind.",
    effectName: 'Black Wing',
    effectDescription:
        'Increases CRIT Rate by 8% and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on opponents have a 50% chance to trigger a vacuum blade that deals 40% of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.',
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
                'Increases CRIT Rate by 8% and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on opponents have a 50% chance to trigger a vacuum blade that deals 40% of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.',
            level: 1,
        },
        {
            description:
                'Increases CRIT Rate by 10% and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on opponents have a 50% chance to trigger a vacuum blade that deals 55% of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.',
            level: 2,
        },
        {
            description:
                'Increases CRIT Rate by 12% and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on opponents have a 50% chance to trigger a vacuum blade that deals 70% of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.',
            level: 3,
        },
        {
            description:
                'Increases CRIT Rate by 14% and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on opponents have a 50% chance to trigger a vacuum blade that deals 85% of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.',
            level: 4,
        },
        {
            description:
                'Increases CRIT Rate by 16% and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on opponents have a 50% chance to trigger a vacuum blade that deals 100% of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SkywardSpine
