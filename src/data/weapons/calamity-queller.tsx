import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const CalamityQueller: Weapon = {
    name: 'Calamity Queller',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13507_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 5,
    description:
        'A keenly honed weapon forged from some strange crystal. Its faint blue light seems to whisper of countless matters now past.',
    effectName: 'Extinguishing Precept',
    effectDescription:
        "Gain 12% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 3.2% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
    baseStats: {
        '1/20': {
            'Base ATK': 49.14,
            'Bonus ATK': 0.036,
        },
        '20/20': {
            'Base ATK': 144.91,
            'Bonus ATK': 0.0636,
        },
        '20/40': {
            'Base ATK': 176.01,
            'Bonus ATK': 0.0636,
        },
        '40/40': {
            'Base ATK': 285.93,
            'Bonus ATK': 0.0927,
        },
        '40/50': {
            'Base ATK': 317.03,
            'Bonus ATK': 0.0927,
        },
        '50/50': {
            'Base ATK': 374.42,
            'Bonus ATK': 0.1072,
        },
        '50/60': {
            'Base ATK': 405.62,
            'Bonus ATK': 0.1072,
        },
        '60/60': {
            'Base ATK': 464.39,
            'Bonus ATK': 0.1218,
        },
        '60/70': {
            'Base ATK': 495.49,
            'Bonus ATK': 0.1218,
        },
        '70/70': {
            'Base ATK': 555.39,
            'Bonus ATK': 0.1363,
        },
        '70/80': {
            'Base ATK': 586.49,
            'Bonus ATK': 0.1363,
        },
        '80/80': {
            'Base ATK': 647.52,
            'Bonus ATK': 0.1508,
        },
        '80/90': {
            'Base ATK': 678.62,
            'Bonus ATK': 0.1508,
        },
        '90/90': {
            'Base ATK': 740.58,
            'Bonus ATK': 0.1654,
        },
    },
    refinements: [
        {
            description:
                "Gain 12% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 3.2% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
            level: 1,
        },
        {
            description:
                "Gain 15% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 4% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
            level: 2,
        },
        {
            description:
                "Gain 18% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 4.8% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
            level: 3,
        },
        {
            description:
                "Gain 21% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 5.6% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
            level: 4,
        },
        {
            description:
                "Gain 24% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 6.4% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default CalamityQueller
