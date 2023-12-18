import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const PolarStar: Weapon = {
    name: 'Polar Star',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15507_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 5,
    description: 'A pristine bow that is as sharp as the glaciers of the far north.',
    effectName: "Daylight's Augury",
    effectDescription:
        'Elemental Skill and Elemental Burst DMG increased by 12%. After a Normal Attack, Charged Attack, Elemental Skill or Elemental Burst hits an opponent, 1 stack of Ashen Nightstar will be gained for 12s. When 1/2/3/4 stacks of Ashen Nightstar are present, ATK is increased by 10/20/30/48%. The stack of Ashen Nightstar created by the Normal Attack, Charged Attack, Elemental Skill or Elemental Burst will be counted independently of the others.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus CRIT Rate': 0.072,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus CRIT Rate': 0.1272,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus CRIT Rate': 0.1272,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus CRIT Rate': 0.1854,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus CRIT Rate': 0.1854,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus CRIT Rate': 0.2145,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus CRIT Rate': 0.2145,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus CRIT Rate': 0.2436,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus CRIT Rate': 0.2436,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus CRIT Rate': 0.2726,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus CRIT Rate': 0.2726,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus CRIT Rate': 0.3017,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus CRIT Rate': 0.3017,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus CRIT Rate': 0.3308,
        },
    },
    refinements: [
        {
            description:
                'Elemental Skill and Elemental Burst DMG increased by 12%. After a Normal Attack, Charged Attack, Elemental Skill or Elemental Burst hits an opponent, 1 stack of Ashen Nightstar will be gained for 12s. When 1/2/3/4 stacks of Ashen Nightstar are present, ATK is increased by 10/20/30/48%. The stack of Ashen Nightstar created by the Normal Attack, Charged Attack, Elemental Skill or Elemental Burst will be counted independently of the others.',
            level: 1,
        },
        {
            description:
                'Elemental Skill and Elemental Burst DMG increased by 15%. After a Normal Attack, Charged Attack, Elemental Skill or Elemental Burst hits an opponent, 1 stack of Ashen Nightstar will be gained for 12s. When 1/2/3/4 stacks of Ashen Nightstar are present, ATK is increased by 12.5/25/37.5/60%. The stack of Ashen Nightstar created by the Normal Attack, Charged Attack, Elemental Skill or Elemental Burst will be counted independently of the others.',
            level: 2,
        },
        {
            description:
                'Elemental Skill and Elemental Burst DMG increased by 18%. After a Normal Attack, Charged Attack, Elemental Skill or Elemental Burst hits an opponent, 1 stack of Ashen Nightstar will be gained for 12s. When 1/2/3/4 stacks of Ashen Nightstar are present, ATK is increased by 15/30/45/72%. The stack of Ashen Nightstar created by the Normal Attack, Charged Attack, Elemental Skill or Elemental Burst will be counted independently of the others.',
            level: 3,
        },
        {
            description:
                'Elemental Skill and Elemental Burst DMG increased by 21%. After a Normal Attack, Charged Attack, Elemental Skill or Elemental Burst hits an opponent, 1 stack of Ashen Nightstar will be gained for 12s. When 1/2/3/4 stacks of Ashen Nightstar are present, ATK is increased by 17.5/35/52.5/84%. The stack of Ashen Nightstar created by the Normal Attack, Charged Attack, Elemental Skill or Elemental Burst will be counted independently of the others.',
            level: 4,
        },
        {
            description:
                'Elemental Skill and Elemental Burst DMG increased by 24%. After a Normal Attack, Charged Attack, Elemental Skill or Elemental Burst hits an opponent, 1 stack of Ashen Nightstar will be gained for 12s. When 1/2/3/4 stacks of Ashen Nightstar are present, ATK is increased by 20/40/60/96%. The stack of Ashen Nightstar created by the Normal Attack, Charged Attack, Elemental Skill or Elemental Burst will be counted independently of the others.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default PolarStar
