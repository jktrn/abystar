import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SkywardBlade: Weapon = {
    name: 'Skyward Blade',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11502_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 5,
    description:
        'The sword of a knight that symbolizes the restored honor of Dvalin. The blessings of the Anemo Archon rest on the fuller of the blade, imbuing the sword with the powers of the sky and the wind.',
    effectName: 'Sky-Piercing Fang',
    effectDescription:
        'CRIT Rate increased by 4%. Gains Skypiercing Might upon using an Elemental Burst: Increases Movement SPD by 10%, increases ATK SPD by 10%, and Normal and Charged hits deal additional DMG equal to 20% of ATK. Skypiercing Might lasts for 12s.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus Energy Recharge': 0.12,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus Energy Recharge': 0.212,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus Energy Recharge': 0.212,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus Energy Recharge': 0.309,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus Energy Recharge': 0.309,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus Energy Recharge': 0.3575,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus Energy Recharge': 0.3575,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus Energy Recharge': 0.406,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus Energy Recharge': 0.406,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus Energy Recharge': 0.4543,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus Energy Recharge': 0.4543,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus Energy Recharge': 0.5028,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus Energy Recharge': 0.5028,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus Energy Recharge': 0.5513,
        },
    },
    refinements: [
        {
            description:
                'CRIT Rate increased by 4%. Gains Skypiercing Might upon using an Elemental Burst: Increases Movement SPD by 10%, increases ATK SPD by 10%, and Normal and Charged hits deal additional DMG equal to 20% of ATK. Skypiercing Might lasts for 12s.',
            level: 1,
        },
        {
            description:
                'CRIT Rate increased by 5%, Gains Skypiercing Might upon using an Elemental Burst: Increases Movement SPD by 10%, increases ATK SPD by 10%, and Normal and Charged hits deal additional DMG equal to 25% of ATK. Skypiercing Might lasts for 12s.',
            level: 2,
        },
        {
            description:
                'CRIT Rate increased by 6%. Gains Skypiercing Might upon using an Elemental Burst: Increases Movement SPD by 10%, increases ATK SPD by 10%, and Normal and Charged hits deal additional DMG equal to 30% of ATK. Skypiercing Might lasts for 12s.',
            level: 3,
        },
        {
            description:
                'CRIT Rate increased by 7%. Gains Skypiercing Might upon using an Elemental Burst: Increases Movement SPD by 10%, increases ATK SPD by 10%, and Normal and Charged hits deal additional DMG equal to 35% of ATK. Skypiercing Might lasts for 12s.',
            level: 4,
        },
        {
            description:
                'CRIT Rate increased by 8%. Gains Skypiercing Might upon using an Elemental Burst: Increases Movement SPD by 10%, increases ATK SPD by 10%, and Normal and Charged hits deal additional DMG equal to 40% of ATK. Skypiercing Might lasts for 12s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SkywardBlade
