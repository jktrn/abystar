import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const PrimordialJadeCutter: Weapon = {
    name: 'Primordial Jade Cutter',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11505_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 5,
    description:
        'A ceremonial sword masterfully carved from pure jade. There almost seems to be an audible sigh in the wind as it is swung.',
    effectName: "Protector's Virtue",
    effectDescription:
        "HP increased by 20%. Additionally, provides an ATK Bonus based on 1.2% of the wielder's Max HP.",
    baseStats: {
        '1/20': {
            'Base ATK': 44.34,
            'Bonus CRIT Rate': 0.096,
        },
        '20/20': {
            'Base ATK': 110.17,
            'Bonus CRIT Rate': 0.1696,
        },
        '20/40': {
            'Base ATK': 141.27,
            'Bonus CRIT Rate': 0.1696,
        },
        '40/40': {
            'Base ATK': 209.82,
            'Bonus CRIT Rate': 0.2472,
        },
        '40/50': {
            'Base ATK': 240.92,
            'Bonus CRIT Rate': 0.2472,
        },
        '50/50': {
            'Base ATK': 275.46,
            'Bonus CRIT Rate': 0.286,
        },
        '50/60': {
            'Base ATK': 306.66,
            'Bonus CRIT Rate': 0.286,
        },
        '60/60': {
            'Base ATK': 341.46,
            'Bonus CRIT Rate': 0.3248,
        },
        '60/70': {
            'Base ATK': 372.56,
            'Bonus CRIT Rate': 0.3248,
        },
        '70/70': {
            'Base ATK': 407.81,
            'Bonus CRIT Rate': 0.3635,
        },
        '70/80': {
            'Base ATK': 438.91,
            'Bonus CRIT Rate': 0.3635,
        },
        '80/80': {
            'Base ATK': 474.55,
            'Bonus CRIT Rate': 0.4022,
        },
        '80/90': {
            'Base ATK': 505.65,
            'Bonus CRIT Rate': 0.4022,
        },
        '90/90': {
            'Base ATK': 541.83,
            'Bonus CRIT Rate': 0.441,
        },
    },
    refinements: [
        {
            description:
                "HP increased by 20%. Additionally, provides an ATK Bonus based on 1.2% of the wielder's Max HP.",
            level: 1,
        },
        {
            description:
                "HP increased by 25%. Additionally, provides an ATK Bonus based on 1.5% of the wielder's Max HP.",
            level: 2,
        },
        {
            description:
                "HP increased by 30%. Additionally, provides an ATK Bonus based on 1.8% of the wielder's Max HP.",
            level: 3,
        },
        {
            description:
                "HP increased by 35%. Additionally, provides an ATK Bonus based on 2.1% of the wielder's Max HP.",
            level: 4,
        },
        {
            description:
                "HP increased by 40%. Additionally, provides an ATK Bonus based on 2.4% of the wielder's Max HP.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default PrimordialJadeCutter
