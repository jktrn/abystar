import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const KitainCrossSpear: Weapon = {
    name: 'Kitain Cross Spear',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13414_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A special lance that was once used by a famed warrior who guarded the Tatarigami on Yashiori Island.',
    effectName: 'Samurai Conduct',
    effectDescription:
        'Increases Elemental Skill DMG by 6%. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates 3 Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus Elemental Mastery': 24.0,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus Elemental Mastery': 42.41,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus Elemental Mastery': 42.41,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus Elemental Mastery': 61.8,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus Elemental Mastery': 61.8,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus Elemental Mastery': 71.5,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus Elemental Mastery': 71.5,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus Elemental Mastery': 81.19,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus Elemental Mastery': 81.19,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus Elemental Mastery': 90.86,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus Elemental Mastery': 90.86,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus Elemental Mastery': 100.56,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus Elemental Mastery': 100.56,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus Elemental Mastery': 110.26,
        },
    },
    refinements: [
        {
            description:
                'Increases Elemental Skill DMG by 6%. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates 3 Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.',
            level: 1,
        },
        {
            description:
                'Increases Elemental Skill DMG by 7.5%. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates 3.5 Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.',
            level: 2,
        },
        {
            description:
                'Increases Elemental Skill DMG by 9%. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates 4 Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.',
            level: 3,
        },
        {
            description:
                'Increases Elemental Skill DMG by 10.5%. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates 4.5 Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.',
            level: 4,
        },
        {
            description:
                'Increases Elemental Skill DMG by 12%. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates 5 Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default KitainCrossSpear
