import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Freedomsworn: Weapon = {
    name: 'Freedom-Sworn',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11503_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 5,
    description:
        'A straight sword, azure as antediluvian song, and as keen as the oaths of freedom taken in the Land of Wind.',
    effectName: 'Revolutionary Chorale',
    effectDescription:
        'A part of the "Millennial Movement" that wanders amidst the winds. Increases DMG by 10%. When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field. When you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain "Millennial Movement: Song of Resistance" for 12s. "Millennial Movement: Song of Resistance" increases Normal, Charged and Plunging Attack DMG by 16% and increases ATK by 20%. Once this effect is triggered, you will not gain Sigils of Rebellion for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus Elemental Mastery': 43.2,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus Elemental Mastery': 76.33,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus Elemental Mastery': 76.33,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus Elemental Mastery': 111.24,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus Elemental Mastery': 111.24,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus Elemental Mastery': 128.69,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus Elemental Mastery': 128.69,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus Elemental Mastery': 146.15,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus Elemental Mastery': 146.15,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus Elemental Mastery': 163.56,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus Elemental Mastery': 163.56,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus Elemental Mastery': 181.01,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus Elemental Mastery': 181.01,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus Elemental Mastery': 198.46,
        },
    },
    refinements: [
        {
            description:
                'A part of the "Millennial Movement" that wanders amidst the winds. Increases DMG by 10%. When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field. When you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain "Millennial Movement: Song of Resistance" for 12s. "Millennial Movement: Song of Resistance" increases Normal, Charged and Plunging Attack DMG by 16% and increases ATK by 20%. Once this effect is triggered, you will not gain Sigils of Rebellion for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
            level: 1,
        },
        {
            description:
                'A part of the "Millennial Movement" that wanders amidst the winds. Increases DMG by 12.5%. When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field. When you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain "Millennial Movement: Song of Resistance" for 12s. "Millennial Movement: Song of Resistance" increases Normal, Charged and Plunging Attack DMG by 20% and increases ATK by 25%. Once this effect is triggered, you will not gain Sigils of Rebellion for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
            level: 2,
        },
        {
            description:
                'A part of the "Millennial Movement" that wanders amidst the winds. Increases DMG by 15%. When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field. When you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain "Millennial Movement: Song of Resistance" for 12s. "Millennial Movement: Song of Resistance" increases Normal, Charged and Plunging Attack DMG by 24% and increases ATK by 30%. Once this effect is triggered, you will not gain Sigils of Rebellion for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
            level: 3,
        },
        {
            description:
                'A part of the "Millennial Movement" that wanders amidst the winds. Increases DMG by 17.5%. When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field. When you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain "Millennial Movement: Song of Resistance" for 12s. "Millennial Movement: Song of Resistance" increases Normal, Charged and Plunging Attack DMG by 28% and increases ATK by 35%. Once this effect is triggered, you will not gain Sigils of Rebellion for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
            level: 4,
        },
        {
            description:
                'A part of the "Millennial Movement" that wanders amidst the winds. Increases DMG by 20%. When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field. When you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain "Millennial Movement: Song of Resistance" for 12s. "Millennial Movement: Song of Resistance" increases Normal, Charged and Plunging Attack DMG by 32% and increases ATK by 40%. Once this effect is triggered, you will not gain Sigils of Rebellion for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default Freedomsworn
