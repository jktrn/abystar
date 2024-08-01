import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
                // TODO: Implement
                // ]

const Absolution: Weapon = {
    name: "Absolution",
    image: "/images/weapons/UI_EquipIcon_Sword_Estoc.png",
    type: "Sword",
    rarity: 5,
    description: "A rapier once wielded by a deceiver who had forsaken everything. In the past, it was primarily used as a tool when he had to disguise his identity.",
    effectName: "Deathly Pact",
    effectDescription: "CRIT DMG increased by 20%. Increasing the value of a Bond of Life increases the DMG the equipping character deals by 16% for 6s. Max 3 stacks.",
    baseStats: {
    "1/20": {
        "Base ATK": 47.54,
        "Bonus CRIT DMG": 0.096
    },
    "20/20": {
        "Base ATK": 133.29,
        "Bonus CRIT DMG": 0.1696
    },
    "20/40": {
        "Base ATK": 164.39,
        "Bonus CRIT DMG": 0.1696
    },
    "40/40": {
        "Base ATK": 260.56,
        "Bonus CRIT DMG": 0.2472
    },
    "40/50": {
        "Base ATK": 291.66,
        "Bonus CRIT DMG": 0.2472
    },
    "50/50": {
        "Base ATK": 341.43,
        "Bonus CRIT DMG": 0.286
    },
    "50/60": {
        "Base ATK": 372.63,
        "Bonus CRIT DMG": 0.286
    },
    "60/60": {
        "Base ATK": 423.4,
        "Bonus CRIT DMG": 0.3248
    },
    "60/70": {
        "Base ATK": 454.5,
        "Bonus CRIT DMG": 0.3248
    },
    "70/70": {
        "Base ATK": 506.22,
        "Bonus CRIT DMG": 0.3635
    },
    "70/80": {
        "Base ATK": 537.32,
        "Bonus CRIT DMG": 0.3635
    },
    "80/80": {
        "Base ATK": 589.85,
        "Bonus CRIT DMG": 0.4022
    },
    "80/90": {
        "Base ATK": 620.95,
        "Bonus CRIT DMG": 0.4022
    },
    "90/90": {
        "Base ATK": 674.33,
        "Bonus CRIT DMG": 0.441
    }
},
    refinements: [
    {
        "description": "CRIT DMG increased by 20%. Increasing the value of a Bond of Life increases the DMG the equipping character deals by 16% for 6s. Max 3 stacks.",
        "level": 1
    },
    {
        "description": "CRIT DMG increased by 25%. Increasing the value of a Bond of Life increases the DMG the equipping character deals by 20% for 6s. Max 3 stacks.",
        "level": 2
    },
    {
        "description": "CRIT DMG increased by 30%. Increasing the value of a Bond of Life increases the DMG the equipping character deals by 24% for 6s. Max 3 stacks.",
        "level": 3
    },
    {
        "description": "CRIT DMG increased by 35%. Increasing the value of a Bond of Life increases the DMG the equipping character deals by 28% for 6s. Max 3 stacks.",
        "level": 4
    },
    {
        "description": "CRIT DMG increased by 40%. Increasing the value of a Bond of Life increases the DMG the equipping character deals by 32% for 6s. Max 3 stacks.",
        "level": 5
    }
],
   // weaponBonuses
}

export default Absolution
