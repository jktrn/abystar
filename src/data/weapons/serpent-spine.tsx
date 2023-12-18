import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SerpentSpine: Weapon = {
    name: 'Serpent Spine',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12409_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 4,
    description:
        'A rare weapon whose origin is the ancient ocean. One can hear the sound of the ageless waves as one swings it.',
    effectName: 'Wavesplitter',
    effectDescription:
        'Every 4s a character is on the field, they will deal 6% more DMG and take 3% more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be reduced by 1 stack when the character takes DMG.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus CRIT Rate': 0.06,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus CRIT Rate': 0.106,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus CRIT Rate': 0.106,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus CRIT Rate': 0.1787,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus CRIT Rate': 0.1787,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus CRIT Rate': 0.203,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus CRIT Rate': 0.203,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus CRIT Rate': 0.2514,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus CRIT Rate': 0.2514,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus CRIT Rate': 0.2756,
        },
    },
    refinements: [
        {
            description:
                'Every 4s a character is on the field, they will deal 6% more DMG and take 3% more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be reduced by 1 stack when the character takes DMG.',
            level: 1,
        },
        {
            description:
                'Every 4s a character is on the field, they will deal 7% more DMG and take 2.7% more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be reduced by 1 stack when the character takes DMG.',
            level: 2,
        },
        {
            description:
                'Every 4s a character is on the field, they will deal 8% more DMG and take 2.4% more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be reduced by 1 stack when the character takes DMG.',
            level: 3,
        },
        {
            description:
                'Every 4s a character is on the field, they will deal 9% more DMG and take 2.2% more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be reduced by 1 stack when the character takes DMG.',
            level: 4,
        },
        {
            description:
                'Every 4s a character is on the field, they will deal 10% more DMG and take 2% more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be reduced by 1 stack when the character takes DMG.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SerpentSpine
