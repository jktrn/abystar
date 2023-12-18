import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const HaranGeppakuFutsu: Weapon = {
    name: 'Haran Geppaku Futsu',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11510_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 5,
    description:
        'A famed work by the Futsu line of smiths. The name "Haran" comes from the manner in which it resembles the violent, roiling waves.',
    effectName: 'Honed Flow',
    effectDescription:
        'Obtain 12% All Elemental DMG Bonus. When other nearby party members use Elemental Skills, the character equipping this weapon will gain 1 Wavespike stack. Max 2 stacks. This effect can be triggered once every 0.3s. When the character equipping this weapon uses an Elemental Skill, all stacks of Wavespike will be consumed to gain Rippling Upheaval: each stack of Wavespike consumed will increase Normal Attack DMG by 20% for 8s.',
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
                'Obtain 12% All Elemental DMG Bonus. When other nearby party members use Elemental Skills, the character equipping this weapon will gain 1 Wavespike stack. Max 2 stacks. This effect can be triggered once every 0.3s. When the character equipping this weapon uses an Elemental Skill, all stacks of Wavespike will be consumed to gain Rippling Upheaval: each stack of Wavespike consumed will increase Normal Attack DMG by 20% for 8s.',
            level: 1,
        },
        {
            description:
                'Obtain 15% All Elemental DMG Bonus. When other nearby party members use Elemental Skills, the character equipping this weapon will gain 1 Wavespike stack. Max 2 stacks. This effect can be triggered once every 0.3s. When the character equipping this weapon uses an Elemental Skill, all stacks of Wavespike will be consumed to gain Rippling Upheaval: each stack of Wavespike consumed will increase Normal Attack DMG by 25% for 8s.',
            level: 2,
        },
        {
            description:
                'Obtain 18% All Elemental DMG Bonus. When other nearby party members use Elemental Skills, the character equipping this weapon will gain 1 Wavespike stack. Max 2 stacks. This effect can be triggered once every 0.3s. When the character equipping this weapon uses an Elemental Skill, all stacks of Wavespike will be consumed to gain Rippling Upheaval: each stack of Wavespike consumed will increase Normal Attack DMG by 30% for 8s.',
            level: 3,
        },
        {
            description:
                'Obtain 21% All Elemental DMG Bonus. When other nearby party members use Elemental Skills, the character equipping this weapon will gain 1 Wavespike stack. Max 2 stacks. This effect can be triggered once every 0.3s. When the character equipping this weapon uses an Elemental Skill, all stacks of Wavespike will be consumed to gain Rippling Upheaval: each stack of Wavespike consumed will increase Normal Attack DMG by 35% for 8s.',
            level: 4,
        },
        {
            description:
                'Obtain 24% All Elemental DMG Bonus. When other nearby party members use Elemental Skills, the character equipping this weapon will gain 1 Wavespike stack. Max 2 stacks. This effect can be triggered once every 0.3s. When the character equipping this weapon uses an Elemental Skill, all stacks of Wavespike will be consumed to gain Rippling Upheaval: each stack of Wavespike consumed will increase Normal Attack DMG by 40% for 8s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default HaranGeppakuFutsu
