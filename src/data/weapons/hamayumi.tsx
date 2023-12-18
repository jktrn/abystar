import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const Hamayumi: Weapon = {
    name: 'Hamayumi',
    image: 'https://genshin.honeyhunterworld.com/img/i_n15414_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A certain shrine maiden once owned this warbow. It was made with surpassing skill, and is both intricate and sturdy.',
    effectName: 'Full Draw',
    effectDescription:
        "Increases Normal Attack DMG by 16% and Charged Attack DMG by 12%. When the equipping character's Energy reaches 100%, this effect is increased by 100%.",
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus ATK': 0.12,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus ATK': 0.212,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus ATK': 0.212,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus ATK': 0.309,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus ATK': 0.309,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus ATK': 0.3575,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus ATK': 0.3575,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus ATK': 0.406,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus ATK': 0.406,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus ATK': 0.4543,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus ATK': 0.4543,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus ATK': 0.5028,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus ATK': 0.5028,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus ATK': 0.5513,
        },
    },
    refinements: [
        {
            description:
                "Increases Normal Attack DMG by 16% and Charged Attack DMG by 12%. When the equipping character's Energy reaches 100%, this effect is increased by 100%.",
            level: 1,
        },
        {
            description:
                "Increases Normal Attack DMG by 20% and Charged Attack DMG by 15%. When the equipping character's Energy reaches 100%, this effect is increased by 100%.",
            level: 2,
        },
        {
            description:
                "Increases Normal Attack DMG by 24% and Charged Attack DMG by 18%. When the equipping character's Energy reaches 100%, this effect is increased by 100%.",
            level: 3,
        },
        {
            description:
                "Increases Normal Attack DMG by 28% and Charged Attack DMG by 21%. When the equipping character's Energy reaches 100%, this effect is increased by 100%.",
            level: 4,
        },
        {
            description:
                "Increases Normal Attack DMG by 32% and Charged Attack DMG by 24%. When the equipping character's Energy reaches 100%, this effect is increased by 100%.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default Hamayumi
