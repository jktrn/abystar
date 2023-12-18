import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TomeOfTheEternalFlow: Weapon = {
    name: 'Tome of the Eternal Flow',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14514_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 5,
    description:
        'A manual that was once passed down from generation to generation within an underwater priory. Today, none know of its existence.',
    effectName: 'Aeon Wave',
    effectDescription:
        "HP is increased by 16%. When current HP increases or decreases, Charged Attack DMG will be increased by 14% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the character has 3 stacks or a third stack's duration refreshes, 8 Energy will be restored. This Energy restoration effect can be triggered once every 12s.",
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
                "HP is increased by 16%. When current HP increases or decreases, Charged Attack DMG will be increased by 14% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the character has 3 stacks or a third stack's duration refreshes, 8 Energy will be restored. This Energy restoration effect can be triggered once every 12s.",
            level: 1,
        },
        {
            description:
                "HP is increased by 20%. When current HP increases or decreases, Charged Attack DMG will be increased by 18% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the character has 3 stacks or a third stack's duration refreshes, 9 Energy will be restored. This Energy restoration effect can be triggered once every 12s.",
            level: 2,
        },
        {
            description:
                "HP is increased by 24%. When current HP increases or decreases, Charged Attack DMG will be increased by 22% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the character has 3 stacks or a third stack's duration refreshes, 10 Energy will be restored. This Energy restoration effect can be triggered once every 12s.",
            level: 3,
        },
        {
            description:
                "HP is increased by 28%. When current HP increases or decreases, Charged Attack DMG will be increased by 26% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the character has 3 stacks or a third stack's duration refreshes, 11 Energy will be restored. This Energy restoration effect can be triggered once every 12s.",
            level: 4,
        },
        {
            description:
                "HP is increased by 32%. When current HP increases or decreases, Charged Attack DMG will be increased by 30% for 4s. Max 3 stacks. This effect can be triggered once every 0.3s. When the character has 3 stacks or a third stack's duration refreshes, 12 Energy will be restored. This Energy restoration effect can be triggered once every 12s.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TomeOfTheEternalFlow
