import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = []

const IronPoint: Weapon = {
    name: 'Iron Point',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13201_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 2,
    description:
        'Sharp and pointy at one end, it is a balanced weapon that is quite popular among travelers.',
    baseStats: {
        '1/20': {
            'Base ATK': 32.93,
        },
        '20/20': {
            'Base ATK': 79.69,
        },
        '20/40': {
            'Base ATK': 91.39,
        },
        '40/40': {
            'Base ATK': 139.01,
        },
        '40/50': {
            'Base ATK': 150.61,
        },
        '50/50': {
            'Base ATK': 173.92,
        },
        '50/60': {
            'Base ATK': 185.62,
        },
        '60/60': {
            'Base ATK': 208.67,
        },
        '60/70': {
            'Base ATK': 220.37,
        },
        '70/70': {
            'Base ATK': 243.23,
        },
    },
    weaponBonuses,
}

export default IronPoint
