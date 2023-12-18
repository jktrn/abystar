import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Predator: Weapon = {
    name: 'Predator',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15415_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 4,
    description: 'A uniquely-designed bow. This should not belong in this world.',
    effectName: 'Strong Strike',
    effectDescription:
        'Effective only on the following platform: "PlayStation Network"Dealing Cryo DMG to opponents increases this character\'s Normal and Charged Attack DMG by 10% for 6s. This effect can have a maximum of 2 stacks. Additionally, when Aloy equips Predator, ATK is increased by 66.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus ATK': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus ATK': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus ATK': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus ATK': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus ATK': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus ATK': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus ATK': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus ATK': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus ATK': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus ATK': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus ATK': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus ATK': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus ATK': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus ATK': 0.4135,
        },
    },
    refinements: [
        {
            description:
                'Effective only on the following platform: "PlayStation Network"Dealing Cryo DMG to opponents increases this character\'s Normal and Charged Attack DMG by 10% for 6s. This effect can have a maximum of 2 stacks. Additionally, when Aloy equips Predator, ATK is increased by 66.',
            level: 1,
        },
    ],
    // weaponBonuses
}

export default Predator
