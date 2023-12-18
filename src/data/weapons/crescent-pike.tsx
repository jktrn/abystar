import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const CrescentPike: Weapon = {
    name: 'Crescent Pike',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13403_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'An exotic weapon with an extremely long blade on the top and a crescent blade at the bottom. It found its way into Liyue through foreign traders. With practice, it can deal heavy damage.',
    effectName: 'Infusion Needle',
    effectDescription:
        'After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal additional DMG equal to 20% of ATK for 5s.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Physical DMG Bonus': 0.0751,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Physical DMG Bonus': 0.1326,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Physical DMG Bonus': 0.1326,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Physical DMG Bonus': 0.1933,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Physical DMG Bonus': 0.1933,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Physical DMG Bonus': 0.2236,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Physical DMG Bonus': 0.2236,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Physical DMG Bonus': 0.254,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Physical DMG Bonus': 0.254,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Physical DMG Bonus': 0.2842,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Physical DMG Bonus': 0.2842,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Physical DMG Bonus': 0.3145,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Physical DMG Bonus': 0.3145,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Physical DMG Bonus': 0.3449,
        },
    },
    refinements: [
        {
            description:
                'After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal additional DMG equal to 20% of ATK for 5s.',
            level: 1,
        },
        {
            description:
                'After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal additional DMG equal to 25% of ATK for 5s.',
            level: 2,
        },
        {
            description:
                'After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal additional DMG equal to 30% of ATK for 5s.',
            level: 3,
        },
        {
            description:
                'After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal additional DMG equal to 35% of ATK for 5s.',
            level: 4,
        },
        {
            description:
                'After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal additional DMG equal to 40% of ATK for 5s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default CrescentPike
