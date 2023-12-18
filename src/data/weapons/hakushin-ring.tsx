import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const HakushinRing: Weapon = {
    name: 'Hakushin Ring',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14414_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A catalyst that carries the memory of the Kitsune Saiguu of ancient times. However, this device is but an impoverished vessel for the full breadth of her thought.',
    effectName: 'Sakura Saiguu',
    effectDescription:
        'After the character equipped with this weapon triggers an Electro elemental reaction, nearby party members of an Elemental Type involved in the elemental reaction receive a 10% Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus Energy Recharge': 0.0667,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus Energy Recharge': 0.1178,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus Energy Recharge': 0.1178,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus Energy Recharge': 0.1717,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus Energy Recharge': 0.1717,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus Energy Recharge': 0.1986,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus Energy Recharge': 0.1986,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus Energy Recharge': 0.2255,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus Energy Recharge': 0.2255,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus Energy Recharge': 0.2524,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus Energy Recharge': 0.2524,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus Energy Recharge': 0.2793,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus Energy Recharge': 0.2793,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus Energy Recharge': 0.3063,
        },
    },
    refinements: [
        {
            description:
                'After the character equipped with this weapon triggers an Electro elemental reaction, nearby party members of an Elemental Type involved in the elemental reaction receive a 10% Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked.',
            level: 1,
        },
        {
            description:
                'After the character equipped with this weapon triggers an Electro elemental reaction, nearby party members of an Elemental Type involved in the elemental reaction receive a 12.5% Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked.',
            level: 2,
        },
        {
            description:
                'After the character equipped with this weapon triggers an Electro elemental reaction, nearby party members of an Elemental Type involved in the elemental reaction receive a 15% Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked.',
            level: 3,
        },
        {
            description:
                'After the character equipped with this weapon triggers an Electro elemental reaction, nearby party members of an Elemental Type involved in the elemental reaction receive a 17.5% Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked.',
            level: 4,
        },
        {
            description:
                'After the character equipped with this weapon triggers an Electro elemental reaction, nearby party members of an Elemental Type involved in the elemental reaction receive a 20% Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default HakushinRing
