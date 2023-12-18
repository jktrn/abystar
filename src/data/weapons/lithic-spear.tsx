import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const LithicSpear: Weapon = {
    name: 'Lithic Spear',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13406_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        'A spear forged from the rocks of the Guyun Stone Forest. Its hardness knows no equal.',
    effectName: 'Lithic Axiom: Unity',
    effectDescription:
        'For every character in the party who hails from Liyue, the character who equips this weapon gains a 7% ATK increase and a 3% CRIT Rate increase. This effect stacks up to 4 times.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus ATK': 0.06,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus ATK': 0.106,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus ATK': 0.106,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus ATK': 0.1545,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus ATK': 0.1545,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus ATK': 0.1787,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus ATK': 0.1787,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus ATK': 0.203,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus ATK': 0.203,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus ATK': 0.2272,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus ATK': 0.2272,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus ATK': 0.2514,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus ATK': 0.2514,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus ATK': 0.2756,
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

export default LithicSpear
