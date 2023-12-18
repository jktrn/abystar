import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TheFirstGreatMagic: Weapon = {
    name: 'The First Great Magic',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15512_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 5,
    description:
        'A stage prop once used by a past "Great Magician." Its final secret was that it was also a weapon beyond the pale.',
    effectName: 'Parsifal the Great',
    effectDescription:
        'DMG dealt by Charged Attacks increased by 16%. For every party member with the same Elemental Type as the wielder (including the wielder themselves), gain 1 Gimmick stack. For every party member with a different Elemental Type from the wielder, gain 1 Theatrics stack. When the wielder has 1/2/3 or more Gimmick stacks, ATK will be increased by 16%/32%/48%. When the wielder has 1/2/3 or more Theatrics stacks, Movement SPD will be increased by 4%/7%/10%.',
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
                'DMG dealt by Charged Attacks increased by 16%. For every party member with the same Elemental Type as the wielder (including the wielder themselves), gain 1 Gimmick stack. For every party member with a different Elemental Type from the wielder, gain 1 Theatrics stack. When the wielder has 1/2/3 or more Gimmick stacks, ATK will be increased by 16%/32%/48%. When the wielder has 1/2/3 or more Theatrics stacks, Movement SPD will be increased by 4%/7%/10%.',
            level: 1,
        },
        {
            description:
                'DMG dealt by Charged Attacks increased by 20%. For every party member with the same Elemental Type as the wielder (including the wielder themselves), gain 1 Gimmick stack. For every party member with a different Elemental Type from the wielder, gain 1 Theatrics stack. When the wielder has 1/2/3 or more Gimmick stacks, ATK will be increased by 20%/40%/60%. When the wielder has 1/2/3 or more Theatrics stacks, Movement SPD will be increased by 6%/9%/12%.',
            level: 2,
        },
        {
            description:
                'DMG dealt by Charged Attacks increased by 24%. For every party member with the same Elemental Type as the wielder (including the wielder themselves), gain 1 Gimmick stack. For every party member with a different Elemental Type from the wielder, gain 1 Theatrics stack. When the wielder has 1/2/3 or more Gimmick stacks, ATK will be increased by 24%/48%/72%. When the wielder has 1/2/3 or more Theatrics stacks, Movement SPD will be increased by 8%/11%/14%.',
            level: 3,
        },
        {
            description:
                'DMG dealt by Charged Attacks increased by 28%. For every party member with the same Elemental Type as the wielder (including the wielder themselves), gain 1 Gimmick stack. For every party member with a different Elemental Type from the wielder, gain 1 Theatrics stack. When the wielder has 1/2/3 or more Gimmick stacks, ATK will be increased by 28%/56%/84%. When the wielder has 1/2/3 or more Theatrics stacks, Movement SPD will be increased by 10%/13%/16%.',
            level: 4,
        },
        {
            description:
                'DMG dealt by Charged Attacks increased by 32%. For every party member with the same Elemental Type as the wielder (including the wielder themselves), gain 1 Gimmick stack. For every party member with a different Elemental Type from the wielder, gain 1 Theatrics stack. When the wielder has 1/2/3 or more Gimmick stacks, ATK will be increased by 32%/64%/96%. When the wielder has 1/2/3 or more Theatrics stacks, Movement SPD will be increased by 12%/15%/18%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TheFirstGreatMagic
