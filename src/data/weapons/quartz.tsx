import { Weapon, WeaponEffect } from '@/interfaces/Weapon'

const effect: WeaponEffect = ({ attributes, initialAttributes, refinement }) => {
    // Effect logic here
}

const Quartz: Weapon = {
    name: 'Quartz',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12304_gacha_icon_w145.webp',
    rarity: 3,
    description:
        'A simple but heavy greatsword made of polished black quartz with a golden gilt. It has an air of elegance and dignity about it.',
    effectName: 'Residual Heat',
    effectDescription:
        'Upon causing an Overloaded, Melt, Burning, Vaporize, Burgeon, or a Pyro-infused Swirl reaction, ATK is increased by 20% for 12s.',
    mainStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Bonus Elemental Mastery': 30.6,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Bonus Elemental Mastery': 54.07,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Bonus Elemental Mastery': 54.07,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Bonus Elemental Mastery': 78.8,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Bonus Elemental Mastery': 78.8,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Bonus Elemental Mastery': 91.16,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Bonus Elemental Mastery': 91.16,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Bonus Elemental Mastery': 103.52,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Bonus Elemental Mastery': 103.52,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Bonus Elemental Mastery': 115.85,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Bonus Elemental Mastery': 115.85,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Bonus Elemental Mastery': 128.21,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Bonus Elemental Mastery': 128.21,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Bonus Elemental Mastery': 140.58,
        },
    },
    refinements: [
        {
            description:
                'Upon causing an Overloaded, Melt, Burning, Vaporize, Burgeon, or a Pyro-infused Swirl reaction, ATK is increased by 20% for 12s.',
            level: 1,
        },
        {
            description:
                'Upon causing an Overloaded, Melt, Burning, Vaporize, Burgeon, or a Pyro-infused Swirl reaction, ATK is increased by 25% for 12s.',
            level: 2,
        },
        {
            description:
                'Upon causing an Overloaded, Melt, Burning, Vaporize, Burgeon, or a Pyro-infused Swirl reaction, ATK is increased by 30% for 12s.',
            level: 3,
        },
        {
            description:
                'Upon causing an Overloaded, Melt, Burning, Vaporize, Burgeon, or a Pyro-infused Swirl reaction, ATK is increased by 35% for 12s.',
            level: 4,
        },
        {
            description:
                'Upon causing an Overloaded, Melt, Burning, Vaporize, Burgeon, or a Pyro-infused Swirl reaction, ATK is increased by 40% for 12s.',
            level: 5,
        },
    ],
    effect,
}

export default Quartz
