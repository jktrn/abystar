import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = []

const ApprenticesNotes: Weapon = {
    name: "Apprentice's Notes",
    image: 'https://genshin.honeyhunterworld.com/img/i_n14101_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 1,
    description:
        'Notes left behind by a top student. Many useful spells are listed, and the handwriting is beautiful.',
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

export default ApprenticesNotes
