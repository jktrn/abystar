import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SolarPearl: Weapon = {
    name: 'Solar Pearl',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14405_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 4,
    description:
        'A dull, golden pearl made of an unknown substance that harbors the light of the sun and the moon and pulses with a warm strength.',
    effectName: 'Solar Shine',
    effectDescription:
        'Normal Attack hits increase Elemental Skill and Elemental Burst DMG by 20% for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by 20% for 6s.',
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
                'Normal Attack hits increase Elemental Skill and Elemental Burst DMG by 20% for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by 20% for 6s.',
            level: 1,
        },
        {
            description:
                'Normal Attack hits increase Elemental Skill and Elemental Burst DMG by 25% for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by 25% for 6s.',
            level: 2,
        },
        {
            description:
                'Normal Attack hits increase Elemental Skill and Elemental Burst DMG by 30% for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by 30% for 6s.',
            level: 3,
        },
        {
            description:
                'Normal Attack hits increase Elemental Skill and Elemental Burst DMG by 35% for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by 35% for 6s.',
            level: 4,
        },
        {
            description:
                'Normal Attack hits increase Elemental Skill and Elemental Burst DMG by 40% for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by 40% for 6s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SolarPearl
