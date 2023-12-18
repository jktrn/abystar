import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TheBell: Weapon = {
    name: 'The Bell',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12402_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 4,
    description:
        'A heavy greatsword. A clock is embedded within it, though its internal mechanisms have long been damaged.',
    effectName: 'Rebellious Guardian',
    effectDescription:
        'Taking DMG generates a shield which absorbs DMG up to 20% of Max HP. This shield lasts for 10s or until broken, and can only be triggered once every 45s. While protected by a shield, the character gains 12% increased DMG.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus HP': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus HP': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus HP': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus HP': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus HP': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus HP': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus HP': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus HP': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus HP': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus HP': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus HP': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus HP': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus HP': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus HP': 0.4135,
        },
    },
    refinements: [
        {
            description:
                'Taking DMG generates a shield which absorbs DMG up to 20% of Max HP. This shield lasts for 10s or until broken, and can only be triggered once every 45s. While protected by a shield, the character gains 12% increased DMG.',
            level: 1,
        },
        {
            description:
                'Taking DMG generates a shield which absorbs DMG up to 23% of Max HP. This shield lasts for 10s or until broken, and can only be triggered once every 45s. While protected by a shield, the character gains 15% increased DMG.',
            level: 2,
        },
        {
            description:
                'Taking DMG generates a shield which absorbs DMG up to 26% of Max HP. This shield lasts for 10s or until broken, and can only be triggered once every 45s. While protected by a shield, the character gains 18% increased DMG.',
            level: 3,
        },
        {
            description:
                'Taking DMG generates a shield which absorbs DMG up to 29% of Max HP. This shield lasts for 10s or until broken, and can only be triggered once every 45s. While protected by a shield, the character gains 21% increased DMG.',
            level: 4,
        },
        {
            description:
                'Taking DMG generates a shield which absorbs DMG up to 32% of Max HP. This shield lasts for 10s or until broken, and can only be triggered once every 45s. While protected by a shield, the character gains 24% increased DMG.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TheBell
