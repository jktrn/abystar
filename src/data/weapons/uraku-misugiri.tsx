import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const UrakuMisugiri: Weapon = {
    name: 'Uraku Misugiri',
    image: 'https://api.ambr.top/assets/UI/UI_EquipIcon_Sword_Needle.png',
    type: 'Sword',
    rarity: 5,
    description:
        'This famous blade was once created by the hand of Urakusai, the renowned literatus. Legend has it that it has never cut any living creature in all these hundreds of years.',
    effectName: 'Brocade Bloom, Shrine Sword',
    effectDescription:
        "Normal Attack DMG is increased by 16% and Elemental Skill DMG is increased by 24%. After a nearby active character deals Geo DMG, the aforementioned effects increase by 100% for 15s. Additionally, the wielder's DEF is increased by 20%.",
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
                "Normal Attack DMG is increased by 16% and Elemental Skill DMG is increased by 24%. After a nearby active character deals Geo DMG, the aforementioned effects increase by 100% for 15s. Additionally, the wielder's DEF is increased by 20%.",
            level: 1,
        },
        {
            description:
                "Normal Attack DMG is increased by 20% and Elemental Skill DMG is increased by 30%. After a nearby active character deals Geo DMG, the aforementioned effects increase by 100% for 15s. Additionally, the wielder's DEF is increased by 25%.",
            level: 2,
        },
        {
            description:
                "Normal Attack DMG is increased by 24% and Elemental Skill DMG is increased by 36%. After a nearby active character deals Geo DMG, the aforementioned effects increase by 100% for 15s. Additionally, the wielder's DEF is increased by 30%.",
            level: 3,
        },
        {
            description:
                "Normal Attack DMG is increased by 28% and Elemental Skill DMG is increased by 42%. After a nearby active character deals Geo DMG, the aforementioned effects increase by 100% for 15s. Additionally, the wielder's DEF is increased by 35%.",
            level: 4,
        },
        {
            description:
                "Normal Attack DMG is increased by 32% and Elemental Skill DMG is increased by 48%. After a nearby active character deals Geo DMG, the aforementioned effects increase by 100% for 15s. Additionally, the wielder's DEF is increased by 40%.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default UrakuMisugiri
