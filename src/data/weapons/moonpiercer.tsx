import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Moonpiercer: Weapon = {
    name: 'Moonpiercer',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13417_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A weapon you obtained from an Aranara tale. It is shaped like a giant arrow and can be used as a spear.',
    effectName: 'Stillwood Moonshadow',
    effectDescription:
        'After triggering Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon, a Leaf of Revival will be created around the character for a maximum of 10s. When picked up, the Leaf will grant the character 16% ATK for 12s. Only 1 Leaf can be generated this way every 20s. This effect can still be triggered if the character is not on the field.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus Elemental Mastery': 24.0,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus Elemental Mastery': 42.41,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus Elemental Mastery': 42.41,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus Elemental Mastery': 61.8,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus Elemental Mastery': 61.8,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus Elemental Mastery': 71.5,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus Elemental Mastery': 71.5,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus Elemental Mastery': 81.19,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus Elemental Mastery': 81.19,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus Elemental Mastery': 90.86,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus Elemental Mastery': 90.86,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus Elemental Mastery': 100.56,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus Elemental Mastery': 100.56,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus Elemental Mastery': 110.26,
        },
    },
    refinements: [
        {
            description:
                'After triggering Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon, a Leaf of Revival will be created around the character for a maximum of 10s. When picked up, the Leaf will grant the character 16% ATK for 12s. Only 1 Leaf can be generated this way every 20s. This effect can still be triggered if the character is not on the field.',
            level: 1,
        },
        {
            description:
                'After triggering Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon, a Leaf of Revival will be created around the character for a maximum of 10s. When picked up, the Leaf will grant the character 20% ATK for 12s. Only 1 Leaf can be generated this way every 20s. This effect can still be triggered if the character is not on the field.',
            level: 2,
        },
        {
            description:
                'After triggering Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon, a Leaf of Revival will be created around the character for a maximum of 10s. When picked up, the Leaf will grant the character 24% ATK for 12s. Only 1 Leaf can be generated this way every 20s. This effect can still be triggered if the character is not on the field.',
            level: 3,
        },
        {
            description:
                'After triggering Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon, a Leaf of Revival will be created around the character for a maximum of 10s. When picked up, the Leaf will grant the character 28% ATK for 12s. Only 1 Leaf can be generated this way every 20s. This effect can still be triggered if the character is not on the field.',
            level: 4,
        },
        {
            description:
                'After triggering Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon, a Leaf of Revival will be created around the character for a maximum of 10s. When picked up, the Leaf will grant the character 32% ATK for 12s. Only 1 Leaf can be generated this way every 20s. This effect can still be triggered if the character is not on the field.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default Moonpiercer
