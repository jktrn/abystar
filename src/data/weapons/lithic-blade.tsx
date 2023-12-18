import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const LithicBlade: Weapon = {
    name: 'Lithic Blade',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12410_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 4,
    description: 'A greatsword carved and chiseled from the very bedrock of Liyue.',
    effectName: 'Lithic Axiom: Unity',
    effectDescription:
        'For every character in the party who hails from Liyue, the character who equips this weapon gains a 7% ATK increase and a 3% CRIT Rate increase. This effect stacks up to 4 times.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus ATK': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus ATK': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus ATK': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus ATK': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus ATK': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus ATK': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus ATK': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus ATK': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus ATK': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus ATK': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus ATK': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus ATK': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus ATK': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus ATK': 0.4135,
        },
    },
    refinements: [
        {
            description:
                'For every character in the party who hails from Liyue, the character who equips this weapon gains a 7% ATK increase and a 3% CRIT Rate increase. This effect stacks up to 4 times.',
            level: 1,
        },
        {
            description:
                'For every character in the party who hails from Liyue, the character who equips this weapon gains a 8% ATK increase and a 4% CRIT Rate increase. This effect stacks up to 4 times.',
            level: 2,
        },
        {
            description:
                'For every character in the party who hails from Liyue, the character who equips this weapon gains a 9% ATK increase and a 5% CRIT Rate increase. This effect stacks up to 4 times.',
            level: 3,
        },
        {
            description:
                'For every character in the party who hails from Liyue, the character who equips this weapon gains a 10% ATK increase and a 6% CRIT Rate increase. This effect stacks up to 4 times.',
            level: 4,
        },
        {
            description:
                'For every character in the party who hails from Liyue, the character who equips this weapon gains a 11% ATK increase and a 7% CRIT Rate increase. This effect stacks up to 4 times.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default LithicBlade
