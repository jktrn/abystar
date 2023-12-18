import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = []

const HuntersBow: Weapon = {
    name: "Hunter's Bow",
    image: 'https://genshin.honeyhunterworld.com/img/i_n15101_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 1,
    description:
        "A hunter's music consists of but two sounds: the twang of the bowstring and the whoosh of soaring arrows.",
    baseStats: {
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
    weaponBonuses,
}

export default HuntersBow
