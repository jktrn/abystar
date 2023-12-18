import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const BeaconOfTheReedSea: Weapon = {
    name: 'Beacon of the Reed Sea',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12511_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 5,
    description:
        'A large, flat-tipped sword designed in to fit as the weapon of an ancient king or some ceremonial instrument.',
    effectName: 'Desert Watch',
    effectDescription:
        "After the character's Elemental Skill hits an opponent, their ATK will be increased by 20% for 8s. After the character takes DMG, their ATK will be increased by 20% for 8s. The 2 aforementioned effects can be triggered even when the character is not on the field. Additionally, when not protected by a shield, the character's Max HP will be increased by 32%.",
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
                "After the character's Elemental Skill hits an opponent, their ATK will be increased by 20% for 8s. After the character takes DMG, their ATK will be increased by 20% for 8s. The 2 aforementioned effects can be triggered even when the character is not on the field. Additionally, when not protected by a shield, the character's Max HP will be increased by 32%.",
            level: 1,
        },
        {
            description:
                "After the character's Elemental Skill hits an opponent, their ATK will be increased by 25% for 8s. After the character takes DMG, their ATK will be increased by 25% for 8s. The 2 aforementioned effects can be triggered even when the character is not on the field. Additionally, when not protected by a shield, the character's Max HP will be increased by 40%.",
            level: 2,
        },
        {
            description:
                "After the character's Elemental Skill hits an opponent, their ATK will be increased by 30% for 8s. After the character takes DMG, their ATK will be increased by 30% for 8s. The 2 aforementioned effects can be triggered even when the character is not on the field. Additionally, when not protected by a shield, the character's Max HP will be increased by 48%.",
            level: 3,
        },
        {
            description:
                "After the character's Elemental Skill hits an opponent, their ATK will be increased by 35% for 8s. After the character takes DMG, their ATK will be increased by 35% for 8s. The 2 aforementioned effects can be triggered even when the character is not on the field. Additionally, when not protected by a shield, the character's Max HP will be increased by 56%.",
            level: 4,
        },
        {
            description:
                "After the character's Elemental Skill hits an opponent, their ATK will be increased by 40% for 8s. After the character takes DMG, their ATK will be increased by 40% for 8s. The 2 aforementioned effects can be triggered even when the character is not on the field. Additionally, when not protected by a shield, the character's Max HP will be increased by 64%.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default BeaconOfTheReedSea
