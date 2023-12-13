import { Weapon, WeaponEffect } from '@/interfaces/Weapon'

const effect: WeaponEffect = ({ attributes, initialAttributes, refinement }) => {
    // Effect logic here
}

const DullBlade: Weapon = {
    name: 'Dull Blade',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11101_gacha_icon_w145.webp',
    rarity: 1,
    description:
        "Youthful dreams and the thrill of adventure. If this isn't enough, then make it up with valiance.",
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

export default DullBlade
