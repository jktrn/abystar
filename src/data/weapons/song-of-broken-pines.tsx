import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SongOfBrokenPines: Weapon = {
    name: 'Song of Broken Pines',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12503_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 5,
    description:
        'A greatsword as light as the sigh of grass in the breeze, yet as merciless to the corrupt as a typhoon.',
    effectName: "Rebel's Banner-Hymn",
    effectDescription:
        'A part of the "Millennial Movement" that wanders amidst the winds. Increases ATK by 16%, and when Normal or Charged Attacks hit opponents, the character gains a Sigil of Whispers. This effect can be triggered once every 0.3s. When you possess 4 Sigils of Whispers, all of them will be consumed and all nearby party members will obtain the "Millennial Movement: Banner-Hymn" effect for 12s. "Millennial Movement: Banner-Hymn" increases Normal ATK SPD by 12% and increases ATK by 20%. Once this effect is triggered, you will not gain Sigils of Whispers for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
    baseStats: {
        '1/20': {
            'Base ATK': 49.14,
            'Physical DMG Bonus': 0.045,
        },
        '20/20': {
            'Base ATK': 144.91,
            'Physical DMG Bonus': 0.0795,
        },
        '20/40': {
            'Base ATK': 176.01,
            'Physical DMG Bonus': 0.0795,
        },
        '40/40': {
            'Base ATK': 285.93,
            'Physical DMG Bonus': 0.1159,
        },
        '40/50': {
            'Base ATK': 317.03,
            'Physical DMG Bonus': 0.1159,
        },
        '50/50': {
            'Base ATK': 374.42,
            'Physical DMG Bonus': 0.1341,
        },
        '50/60': {
            'Base ATK': 405.62,
            'Physical DMG Bonus': 0.1341,
        },
        '60/60': {
            'Base ATK': 464.39,
            'Physical DMG Bonus': 0.1522,
        },
        '60/70': {
            'Base ATK': 495.49,
            'Physical DMG Bonus': 0.1522,
        },
        '70/70': {
            'Base ATK': 555.39,
            'Physical DMG Bonus': 0.1704,
        },
        '70/80': {
            'Base ATK': 586.49,
            'Physical DMG Bonus': 0.1704,
        },
        '80/80': {
            'Base ATK': 647.52,
            'Physical DMG Bonus': 0.1886,
        },
        '80/90': {
            'Base ATK': 678.62,
            'Physical DMG Bonus': 0.1886,
        },
        '90/90': {
            'Base ATK': 740.58,
            'Physical DMG Bonus': 0.2067,
        },
    },
    refinements: [
        {
            description:
                'A part of the "Millennial Movement" that wanders amidst the winds. Increases ATK by 16%, and when Normal or Charged Attacks hit opponents, the character gains a Sigil of Whispers. This effect can be triggered once every 0.3s. When you possess 4 Sigils of Whispers, all of them will be consumed and all nearby party members will obtain the "Millennial Movement: Banner-Hymn" effect for 12s. "Millennial Movement: Banner-Hymn" increases Normal ATK SPD by 12% and increases ATK by 20%. Once this effect is triggered, you will not gain Sigils of Whispers for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
            level: 1,
        },
        {
            description:
                'A part of the "Millennial Movement" that wanders amidst the winds. Increases ATK by 20%, and when Normal or Charged Attacks hit opponents, the character gains a Sigil of Whispers. This effect can be triggered once every 0.3s. When you possess 4 Sigils of Whispers, all of them will be consumed and all nearby party members will obtain the "Millennial Movement: Banner-Hymn" effect for 12s. "Millennial Movement: Banner-Hymn" increases Normal ATK SPD by 15% and increases ATK by 25%. Once this effect is triggered, you will not gain Sigils of Whispers for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
            level: 2,
        },
        {
            description:
                'A part of the "Millennial Movement" that wanders amidst the winds. Increases ATK by 24%, and when Normal or Charged Attacks hit opponents, the character gains a Sigil of Whispers. This effect can be triggered once every 0.3s. When you possess 4 Sigils of Whispers, all of them will be consumed and all nearby party members will obtain the "Millennial Movement: Banner-Hymn" effect for 12s. "Millennial Movement: Banner-Hymn" increases Normal ATK SPD by 18% and increases ATK by 30%. Once this effect is triggered, you will not gain Sigils of Whispers for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
            level: 3,
        },
        {
            description:
                'A part of the "Millennial Movement" that wanders amidst the winds. Increases ATK by 28%, and when Normal or Charged Attacks hit opponents, the character gains a Sigil of Whispers. This effect can be triggered once every 0.3s. When you possess 4 Sigils of Whispers, all of them will be consumed and all nearby party members will obtain the "Millennial Movement: Banner-Hymn" effect for 12s. "Millennial Movement: Banner-Hymn" increases Normal ATK SPD by 21% and increases ATK by 35%. Once this effect is triggered, you will not gain Sigils of Whispers for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
            level: 4,
        },
        {
            description:
                'A part of the "Millennial Movement" that wanders amidst the winds. Increases ATK by 32%, and when Normal or Charged Attacks hit opponents, the character gains a Sigil of Whispers. This effect can be triggered once every 0.3s. When you possess 4 Sigils of Whispers, all of them will be consumed and all nearby party members will obtain the "Millennial Movement: Banner-Hymn" effect for 12s. "Millennial Movement: Banner-Hymn" increases Normal ATK SPD by 24% and increases ATK by 40%. Once this effect is triggered, you will not gain Sigils of Whispers for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SongOfBrokenPines
