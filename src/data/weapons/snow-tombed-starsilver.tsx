import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SnowtombedStarsilver: Weapon = {
    name: 'Snow-Tombed Starsilver',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12411_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'An ancient greatsword that was stored between frescoes. Forged from Starsilver, it has the power to cleave through ice and snow.',
    effectName: 'Frost Burial',
    effectDescription:
        'Hitting an opponent with Normal and Charged Attacks has a 60% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 80% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 200% of ATK. Can only occur once every 10s.',
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
                'Hitting an opponent with Normal and Charged Attacks has a 60% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 80% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 200% of ATK. Can only occur once every 10s.',
            level: 1,
        },
        {
            description:
                'Hitting an opponent with Normal and Charged Attacks has a 70% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 95% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 240% of ATK. Can only occur once every 10s.',
            level: 2,
        },
        {
            description:
                'Hitting an opponent with Normal and Charged Attacks has an 80% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 110% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 280% of ATK. Can only occur once every 10s.',
            level: 3,
        },
        {
            description:
                'Hitting an opponent with Normal and Charged Attacks has a 90% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 125% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 320% of ATK. Can only occur once every 10s.',
            level: 4,
        },
        {
            description:
                'Hitting an opponent with Normal and Charged Attacks has a 100% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 140% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 360% of ATK. Can only occur once every 10s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SnowtombedStarsilver
