import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const WolfsGravestone: Weapon = {
    name: "Wolf's Gravestone",
    image: 'https://genshin.honeyhunterworld.com/img/i_n12502_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 5,
    description:
        'A longsword used by the Wolf Knight. Originally just a heavy sheet of iron given to the knight by a blacksmith from the city, it became endowed with legendary power owing to his friendship with the wolves.',
    effectName: 'Wolfish Tracker',
    effectDescription:
        "Increases ATK by 20%. On hit, attacks against opponents with less than 30% HP increase all party members' ATK by 40% for 12s. Can only occur once every 30s.",
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus ATK': 0.108,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus ATK': 0.1908,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus ATK': 0.1908,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus ATK': 0.2781,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus ATK': 0.2781,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus ATK': 0.3217,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus ATK': 0.3217,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus ATK': 0.3654,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus ATK': 0.3654,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus ATK': 0.4089,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus ATK': 0.4089,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus ATK': 0.4525,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus ATK': 0.4525,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus ATK': 0.4962,
        },
    },
    refinements: [
        {
            description:
                "Increases ATK by 20%. On hit, attacks against opponents with less than 30% HP increase all party members' ATK by 40% for 12s. Can only occur once every 30s.",
            level: 1,
        },
        {
            description:
                "Increases ATK by 25%. On hit, attacks against opponents with less than 30% HP increase all party members' ATK by 50% for 12s. Can only occur once every 30s.",
            level: 2,
        },
        {
            description:
                "Increases ATK by 30%. On hit, attacks against opponents with less than 30% HP increase all party members' ATK by 60% for 12s. Can only occur once every 30s.",
            level: 3,
        },
        {
            description:
                "Increases ATK by 35%. On hit, attacks against opponents with less than 30% HP increase all party members' ATK by 70% for 12s. Can only occur once every 30s.",
            level: 4,
        },
        {
            description:
                "Increases ATK by 40%. On hit, attacks against opponents with less than 30% HP increase all party members' ATK by 80% for 12s. Can only occur once every 30s.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default WolfsGravestone
