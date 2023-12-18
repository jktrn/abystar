import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SplendorOfTranquilWaters: Weapon = {
    name: 'Splendor of Tranquil Waters',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11513_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 5,
    description:
        'A scepter around which swirls pure water. In days long past, it once symbolized the highest authority over the seas.',
    effectName: 'Dawn and Dusk by the Lake',
    effectDescription:
        "When the equipping character's current HP increases or decreases, Elemental Skill DMG dealt will be increased by 8% for 6s. Max 3 stacks. This effect can be triggered once every 0.2s. When other party members' current HP increases or decreases, the equipping character's Max HP will be increased by 14% for 6s. Max 2 stacks. This effect can be triggered once every 0.2s. The aforementioned effects can be triggered even if the wielder is off-field.",
    baseStats: {
        '1/20': {
            'Base ATK': 44.34,
            'Bonus CRIT DMG': 0.192,
        },
        '20/20': {
            'Base ATK': 110.17,
            'Bonus CRIT DMG': 0.3393,
        },
        '20/40': {
            'Base ATK': 141.27,
            'Bonus CRIT DMG': 0.3393,
        },
        '40/40': {
            'Base ATK': 209.82,
            'Bonus CRIT DMG': 0.4944,
        },
        '40/50': {
            'Base ATK': 240.92,
            'Bonus CRIT DMG': 0.4944,
        },
        '50/50': {
            'Base ATK': 275.46,
            'Bonus CRIT DMG': 0.572,
        },
        '50/60': {
            'Base ATK': 306.66,
            'Bonus CRIT DMG': 0.572,
        },
        '60/60': {
            'Base ATK': 341.46,
            'Bonus CRIT DMG': 0.6495,
        },
        '60/70': {
            'Base ATK': 372.56,
            'Bonus CRIT DMG': 0.6495,
        },
        '70/70': {
            'Base ATK': 407.81,
            'Bonus CRIT DMG': 0.7269,
        },
        '70/80': {
            'Base ATK': 438.91,
            'Bonus CRIT DMG': 0.7269,
        },
        '80/80': {
            'Base ATK': 474.55,
            'Bonus CRIT DMG': 0.8045,
        },
        '80/90': {
            'Base ATK': 505.65,
            'Bonus CRIT DMG': 0.8045,
        },
        '90/90': {
            'Base ATK': 541.83,
            'Bonus CRIT DMG': 0.882,
        },
    },
    refinements: [
        {
            description:
                "When the equipping character's current HP increases or decreases, Elemental Skill DMG dealt will be increased by 8% for 6s. Max 3 stacks. This effect can be triggered once every 0.2s. When other party members' current HP increases or decreases, the equipping character's Max HP will be increased by 14% for 6s. Max 2 stacks. This effect can be triggered once every 0.2s. The aforementioned effects can be triggered even if the wielder is off-field.",
            level: 1,
        },
        {
            description:
                "When the equipping character's current HP increases or decreases, Elemental Skill DMG dealt will be increased by 10% for 6s. Max 3 stacks. This effect can be triggered once every 0.2s. When other party members' current HP increases or decreases, the equipping character's Max HP will be increased by 17.5% for 6s. Max 2 stacks. This effect can be triggered once every 0.2s. The aforementioned effects can be triggered even if the wielder is off-field.",
            level: 2,
        },
        {
            description:
                "When the equipping character's current HP increases or decreases, Elemental Skill DMG dealt will be increased by 12% for 6s. Max 3 stacks. This effect can be triggered once every 0.2s. When other party members' current HP increases or decreases, the equipping character's Max HP will be increased by 21% for 6s. Max 2 stacks. This effect can be triggered once every 0.2s. The aforementioned effects can be triggered even if the wielder is off-field.",
            level: 3,
        },
        {
            description:
                "When the equipping character's current HP increases or decreases, Elemental Skill DMG dealt will be increased by 14% for 6s. Max 3 stacks. This effect can be triggered once every 0.2s. When other party members' current HP increases or decreases, the equipping character's Max HP will be increased by 24.5% for 6s. Max 2 stacks. This effect can be triggered once every 0.2s. The aforementioned effects can be triggered even if the wielder is off-field.",
            level: 4,
        },
        {
            description:
                "When the equipping character's current HP increases or decreases, Elemental Skill DMG dealt will be increased by 16% for 6s. Max 3 stacks. This effect can be triggered once every 0.2s. When other party members' current HP increases or decreases, the equipping character's Max HP will be increased by 28% for 6s. Max 2 stacks. This effect can be triggered once every 0.2s. The aforementioned effects can be triggered even if the wielder is off-field.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SplendorOfTranquilWaters
