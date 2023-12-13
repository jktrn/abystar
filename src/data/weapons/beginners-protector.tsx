import { Weapon, WeaponEffect } from '@/interfaces/Weapon'

const effect: WeaponEffect = ({ attributes, initialAttributes, refinement }) => {
    // Effect logic here
}

const BeginnersProtector: Weapon = {
    name: "Beginner's Protector",
    image: 'https://genshin.honeyhunterworld.com/img/i_n13101_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 1,
    description:
        'A polearm as straight as a flag pole. Well suited to most combat situations, it has an imposing presence when swung.',
    mainStats: {
        '1/20': {
            'Base ATK': 23.25,
        },
        '20/20': {
            'Base ATK': 56.25,
        },
        '20/40': {
            'Base ATK': 67.95,
        },
        '40/40': {
            'Base ATK': 101.57,
        },
        '40/50': {
            'Base ATK': 113.17,
        },
        '50/50': {
            'Base ATK': 129.62,
        },
        '50/60': {
            'Base ATK': 141.32,
        },
        '60/60': {
            'Base ATK': 157.59,
        },
        '60/70': {
            'Base ATK': 169.29,
        },
        '70/70': {
            'Base ATK': 185.43,
        },
    },
    effect,
}

export default BeginnersProtector
