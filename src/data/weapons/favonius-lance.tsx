import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        // LMAO
        name: 'Windfall',
        effect: (attributes) => {
            return { attributes }
        },
    },
]

const FavoniusLance: Weapon = {
    name: 'Favonius Lance',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13407_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        'A polearm made in the style of the Knights of Favonius. Its shaft is straight, and its tip flows lightly like the wind.',
    effectName: 'Windfall',
    effectDescription:
        'CRIT Hits have a 60% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 12s.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus Energy Recharge': 0.0667,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus Energy Recharge': 0.1178,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus Energy Recharge': 0.1178,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus Energy Recharge': 0.1717,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus Energy Recharge': 0.1717,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus Energy Recharge': 0.1986,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus Energy Recharge': 0.1986,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus Energy Recharge': 0.2255,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus Energy Recharge': 0.2255,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus Energy Recharge': 0.2524,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus Energy Recharge': 0.2524,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus Energy Recharge': 0.2793,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus Energy Recharge': 0.2793,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus Energy Recharge': 0.3063,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    CRIT Hits have a <span style={{ color: '#ddd' }}>60%</span>{' '}
                    chance to generate a small amount of Elemental Particles, which
                    will regenerate <span style={{ color: '#ddd' }}>6</span> Energy
                    for the character. Can only occur once every{' '}
                    <span style={{ color: '#ddd' }}>12s</span>.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    CRIT Hits have a <span style={{ color: '#ddd' }}>70%</span>{' '}
                    chance to generate a small amount of Elemental Particles, which
                    will regenerate <span style={{ color: '#ddd' }}>6</span> Energy
                    for the character. Can only occur once every{' '}
                    <span style={{ color: '#ddd' }}>10.5s</span>.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    CRIT Hits have a <span style={{ color: '#ddd' }}>80%</span>{' '}
                    chance to generate a small amount of Elemental Particles, which
                    will regenerate <span style={{ color: '#ddd' }}>6</span> Energy
                    for the character. Can only occur once every{' '}
                    <span style={{ color: '#ddd' }}>9s</span>.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    CRIT Hits have a <span style={{ color: '#ddd' }}>90%</span>{' '}
                    chance to generate a small amount of Elemental Particles, which
                    will regenerate <span style={{ color: '#ddd' }}>6</span> Energy
                    for the character. Can only occur once every{' '}
                    <span style={{ color: '#ddd' }}>7.5s</span>.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    CRIT Hits have a <span style={{ color: '#ddd' }}>100%</span>{' '}
                    chance to generate a small amount of Elemental Particles, which
                    will regenerate <span style={{ color: '#ddd' }}>6</span> Energy
                    for the character. Can only occur once every{' '}
                    <span style={{ color: '#ddd' }}>6s</span>.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default FavoniusLance
