import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Deathmatch: Weapon = {
    name: 'Deathmatch',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13405_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        "A sharp crimson polearm that was once a gladiator's priceless treasure. Its awl has been stained by the blood of countless beasts and men.",
    effectName: 'Gladiator',
    effectDescription:
        'If there are at least 2 opponents nearby, ATK is increased by 16% and DEF is increased by 16%. If there are fewer than 2 opponents nearby, ATK is increased by 24%.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus CRIT Rate': 0.08,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus CRIT Rate': 0.1414,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus CRIT Rate': 0.1414,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus CRIT Rate': 0.206,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus CRIT Rate': 0.206,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus CRIT Rate': 0.2383,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus CRIT Rate': 0.2383,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus CRIT Rate': 0.2706,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus CRIT Rate': 0.2706,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus CRIT Rate': 0.3029,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus CRIT Rate': 0.3029,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus CRIT Rate': 0.3352,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus CRIT Rate': 0.3352,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus CRIT Rate': 0.3675,
        },
    },
    refinements: [
        {
            description:
                'If there are at least 2 opponents nearby, ATK is increased by 16% and DEF is increased by 16%. If there are fewer than 2 opponents nearby, ATK is increased by 24%.',
            level: 1,
        },
        {
            description:
                'If there are at least 2 opponents nearby, ATK is increased by 20% and DEF is increased by 20%. If there are fewer than 2 opponents nearby, ATK is increased by 30%.',
            level: 2,
        },
        {
            description:
                'If there are at least 2 opponents nearby, ATK is increased by 24% and DEF is increased by 24%. If there are fewer than 2 opponents nearby, ATK is increased by 36%.',
            level: 3,
        },
        {
            description:
                'If there are at least 2 opponents nearby, ATK is increased by 28% and DEF is increased by 28%. If there are fewer than 2 opponents nearby, ATK is increased by 42%.',
            level: 4,
        },
        {
            description:
                'If there are at least 2 opponents nearby, ATK is increased by 32% and DEF is increased by 32%. If there are fewer than 2 opponents nearby, ATK is increased by 48%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default Deathmatch
