import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = []

const SilverSword: Weapon = {
    name: 'Silver Sword',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11201_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 2,
    description:
        "A sword for exorcising demons. Everyone knows it's made of a silver alloy, not pure silver.",
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

export default SilverSword
