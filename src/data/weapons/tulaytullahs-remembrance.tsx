import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TulaytullahsRemembrance: Weapon = {
    name: "Tulaytullah's Remembrance",
    image: 'https://genshin.honeyhunterworld.com/img/i_n14512_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 5,
    description:
        'A bell crafted of deep sapphire and sterling silver. Its echoes are as crisp as they are distant.',
    effectName: 'Bygone Azure Teardrop',
    effectDescription:
        'Normal Attack SPD is increased by 10%. After the wielder unleashes an Elemental Skill, Normal Attack DMG will increase by 4.8% every second for 14s. After hitting an opponent with a Normal Attack during this duration, Normal Attack DMG will be increased by 9.6%. This increase can be triggered once every 0.3s. The maximum Normal Attack DMG increase per single duration of the overall effect is 48%. The effect will be removed when the wielder leaves the field, and using the Elemental Skill again will reset all DMG buffs.',
    baseStats: {
        '1/20': {
            'Base ATK': 47.54,
            'Bonus CRIT DMG': 0.096,
        },
        '20/20': {
            'Base ATK': 133.29,
            'Bonus CRIT DMG': 0.1696,
        },
        '20/40': {
            'Base ATK': 164.39,
            'Bonus CRIT DMG': 0.1696,
        },
        '40/40': {
            'Base ATK': 260.56,
            'Bonus CRIT DMG': 0.2472,
        },
        '40/50': {
            'Base ATK': 291.66,
            'Bonus CRIT DMG': 0.2472,
        },
        '50/50': {
            'Base ATK': 341.43,
            'Bonus CRIT DMG': 0.286,
        },
        '50/60': {
            'Base ATK': 372.63,
            'Bonus CRIT DMG': 0.286,
        },
        '60/60': {
            'Base ATK': 423.4,
            'Bonus CRIT DMG': 0.3248,
        },
        '60/70': {
            'Base ATK': 454.5,
            'Bonus CRIT DMG': 0.3248,
        },
        '70/70': {
            'Base ATK': 506.22,
            'Bonus CRIT DMG': 0.3635,
        },
        '70/80': {
            'Base ATK': 537.32,
            'Bonus CRIT DMG': 0.3635,
        },
        '80/80': {
            'Base ATK': 589.85,
            'Bonus CRIT DMG': 0.4022,
        },
        '80/90': {
            'Base ATK': 620.95,
            'Bonus CRIT DMG': 0.4022,
        },
        '90/90': {
            'Base ATK': 674.33,
            'Bonus CRIT DMG': 0.441,
        },
    },
    refinements: [
        {
            description:
                'Normal Attack SPD is increased by 10%. After the wielder unleashes an Elemental Skill, Normal Attack DMG will increase by 4.8% every second for 14s. After hitting an opponent with a Normal Attack during this duration, Normal Attack DMG will be increased by 9.6%. This increase can be triggered once every 0.3s. The maximum Normal Attack DMG increase per single duration of the overall effect is 48%. The effect will be removed when the wielder leaves the field, and using the Elemental Skill again will reset all DMG buffs.',
            level: 1,
        },
        {
            description:
                'Normal Attack SPD is increased by 12.5%. After the wielder unleashes an Elemental Skill, Normal Attack DMG will increase by 6% every second for 14s. After hitting an opponent with a Normal Attack during this duration, Normal Attack DMG will be increased by 12%. This increase can be triggered once every 0.3s. The maximum Normal Attack DMG increase per single duration of the overall effect is 60%. The effect will be removed when the wielder leaves the field, and using the Elemental Skill again will reset all DMG buffs.',
            level: 2,
        },
        {
            description:
                'Normal Attack SPD is increased by 15%. After the wielder unleashes an Elemental Skill, Normal Attack DMG will increase by 7.2% every second for 14s. After hitting an opponent with a Normal Attack during this duration, Normal Attack DMG will be increased by 14.4%. This increase can be triggered once every 0.3s. The maximum Normal Attack DMG increase per single duration of the overall effect is 72%. The effect will be removed when the wielder leaves the field, and using the Elemental Skill again will reset all DMG buffs.',
            level: 3,
        },
        {
            description:
                'Normal Attack SPD is increased by 17.5%. After the wielder unleashes an Elemental Skill, Normal Attack DMG will increase by 8.4% every second for 14s. After hitting an opponent with a Normal Attack during this duration, Normal Attack DMG will be increased by 16.8%. This increase can be triggered once every 0.3s. The maximum Normal Attack DMG increase per single duration of the overall effect is 84%. The effect will be removed when the wielder leaves the field, and using the Elemental Skill again will reset all DMG buffs.',
            level: 4,
        },
        {
            description:
                'Normal Attack SPD is increased by 20%. After the wielder unleashes an Elemental Skill, Normal Attack DMG will increase by 9.6% every second for 14s. After hitting an opponent with a Normal Attack during this duration, Normal Attack DMG will be increased by 19.2%. This increase can be triggered once every 0.3s. The maximum Normal Attack DMG increase per single duration of the overall effect is 96%. The effect will be removed when the wielder leaves the field, and using the Elemental Skill again will reset all DMG buffs.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TulaytullahsRemembrance
