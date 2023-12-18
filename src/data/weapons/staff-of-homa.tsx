import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const StaffOfHoma: Weapon = {
    name: 'Staff of Homa',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13501_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 5,
    description:
        'A "firewood staff" that was once used in ancient and long-lost rituals.',
    effectName: 'Reckless Cinnabar',
    effectDescription:
        "HP increased by 20%. Additionally, provides an ATK Bonus based on 0.8% of the wielder's Max HP. When the wielder's HP is less than 50%, this ATK Bonus is increased by an additional 1% of Max HP.",
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus CRIT DMG': 0.144,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus CRIT DMG': 0.2544,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus CRIT DMG': 0.2544,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus CRIT DMG': 0.3708,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus CRIT DMG': 0.3708,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus CRIT DMG': 0.429,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus CRIT DMG': 0.429,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus CRIT DMG': 0.4872,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus CRIT DMG': 0.4872,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus CRIT DMG': 0.5452,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus CRIT DMG': 0.5452,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus CRIT DMG': 0.6034,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus CRIT DMG': 0.6034,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus CRIT DMG': 0.6615,
        },
    },
    refinements: [
        {
            description:
                "HP increased by 20%. Additionally, provides an ATK Bonus based on 0.8% of the wielder's Max HP. When the wielder's HP is less than 50%, this ATK Bonus is increased by an additional 1% of Max HP.",
            level: 1,
        },
        {
            description:
                "HP increased by 25%. Additionally, provides an ATK Bonus based on 1% of the wielder's Max HP. When the wielder's HP is less than 50%, this ATK Bonus is increased by an additional 1.2% of Max HP.",
            level: 2,
        },
        {
            description:
                "HP increased by 30%. Additionally, provides an ATK Bonus based on 1.2% of the wielder's Max HP. When the wielder's HP is less than 50%, this ATK Bonus is increased by an additional 1.4% of Max HP.",
            level: 3,
        },
        {
            description:
                "HP increased by 35%. Additionally, provides an ATK Bonus based on 1.4% of the wielder's Max HP. When the wielder's HP is less than 50%, this ATK Bonus is increased by an additional 1.6% of Max HP.",
            level: 4,
        },
        {
            description:
                "HP increased by 40%. Additionally, provides an ATK Bonus based on 1.6% of the wielder's Max HP. When the wielder's HP is less than 50%, this ATK Bonus is increased by an additional 1.8% of Max HP.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default StaffOfHoma
