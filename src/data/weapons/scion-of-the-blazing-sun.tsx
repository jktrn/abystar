import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const ScionOfTheBlazingSun: Weapon = {
    name: 'Scion of the Blazing Sun',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15424_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 4,
    description:
        "An ancient longbow that is a remnant of King Deshret's ancient era. An indecipherable ancient text and solemn patterns have been carved into it.",
    effectName: 'The Way of Sunfire',
    effectDescription:
        'After a Charged Attack hits an opponent, a Sunfire Arrow will descend upon the opponent hit, dealing 60% ATK as DMG, and applying the Heartsearer effect to the opponent damaged by said Arrow for 10s. Opponents affected by Heartsearer take 28% more Charged Attack DMG from the wielder. A Sunfire Arrow can be triggered once every 10s.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus CRIT Rate': 0.04,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus CRIT Rate': 0.0707,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus CRIT Rate': 0.0707,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus CRIT Rate': 0.103,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus CRIT Rate': 0.103,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus CRIT Rate': 0.1192,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus CRIT Rate': 0.1192,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus CRIT Rate': 0.1353,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus CRIT Rate': 0.1353,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus CRIT Rate': 0.1514,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus CRIT Rate': 0.1514,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus CRIT Rate': 0.1676,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus CRIT Rate': 0.1676,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus CRIT Rate': 0.1838,
        },
    },
    refinements: [
        {
            description:
                'After a Charged Attack hits an opponent, a Sunfire Arrow will descend upon the opponent hit, dealing 60% ATK as DMG, and applying the Heartsearer effect to the opponent damaged by said Arrow for 10s. Opponents affected by Heartsearer take 28% more Charged Attack DMG from the wielder. A Sunfire Arrow can be triggered once every 10s.',
            level: 1,
        },
        {
            description:
                'After a Charged Attack hits an opponent, a Sunfire Arrow will descend upon the opponent hit, dealing 75% ATK as DMG, and applying the Heartsearer effect to the opponent damaged by said Arrow for 10s. Opponents affected by Heartsearer take 35% more Charged Attack DMG from the wielder. A Sunfire Arrow can be triggered once every 10s.',
            level: 2,
        },
        {
            description:
                'After a Charged Attack hits an opponent, a Sunfire Arrow will descend upon the opponent hit, dealing 90% ATK as DMG, and applying the Heartsearer effect to the opponent damaged by said Arrow for 10s. Opponents affected by Heartsearer take 42% more Charged Attack DMG from the wielder. A Sunfire Arrow can be triggered once every 10s.',
            level: 3,
        },
        {
            description:
                'After a Charged Attack hits an opponent, a Sunfire Arrow will descend upon the opponent hit, dealing 105% ATK as DMG, and applying the Heartsearer effect to the opponent damaged by said Arrow for 10s. Opponents affected by Heartsearer take 49% more Charged Attack DMG from the wielder. A Sunfire Arrow can be triggered once every 10s.',
            level: 4,
        },
        {
            description:
                'After a Charged Attack hits an opponent, a Sunfire Arrow will descend upon the opponent hit, dealing 120% ATK as DMG, and applying the Heartsearer effect to the opponent damaged by said Arrow for 10s. Opponents affected by Heartsearer take 56% more Charged Attack DMG from the wielder. A Sunfire Arrow can be triggered once every 10s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default ScionOfTheBlazingSun
