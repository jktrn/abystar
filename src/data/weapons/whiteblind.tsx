import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Whiteblind: Weapon = {
    name: 'Whiteblind',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12407_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'An exotic sword with one section of the blade left blunt. It made its way into Liyue via the hands of foreign traders. Incredibly powerful in the hands of someone who knows how to use it.',
    effectName: 'Infusion Blade',
    effectDescription:
        'On hit, Normal or Charged Attacks increase ATK and DEF by 6% for 6s. Max 4 stacks. This effect can only occur once every 0.5s.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus Def': 0.1126,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus Def': 0.199,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus Def': 0.199,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus Def': 0.2899,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus Def': 0.2899,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus Def': 0.3354,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus Def': 0.3354,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus Def': 0.3809,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus Def': 0.3809,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus Def': 0.4263,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus Def': 0.4263,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus Def': 0.4718,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus Def': 0.4718,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus Def': 0.5173,
        },
    },
    refinements: [
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK and DEF by 6% for 6s. Max 4 stacks. This effect can only occur once every 0.5s.',
            level: 1,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK and DEF by 7.5% for 6s. Max 4 stacks. This effect can only occur once every 0.5s.',
            level: 2,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK and DEF by 9% for 6s. Max 4 stacks. This effect can only occur once every 0.5s.',
            level: 3,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK and DEF by 10.5% for 6s. Max 4 stacks. This effect can only occur once every 0.5s.',
            level: 4,
        },
        {
            description:
                'On hit, Normal or Charged Attacks increase ATK and DEF by 12% for 6s. Max 4 stacks. This effect can only occur once every 0.5s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default Whiteblind
