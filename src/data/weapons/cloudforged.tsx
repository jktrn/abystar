import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
                // TODO: Implement
                // ]

const Cloudforged: Weapon = {
    name: "Cloudforged",
    image: "/images/weapons/UI_EquipIcon_Bow_Ultimatum.png",
    type: "Bow",
    rarity: 4,
    description: "A prototype for a standard-issue weapon the Yuheng commissioned from Blackcliff Forge after having analyzed the ancient mechanisms that protected the adeptal abode upon Tianheng.",
    effectName: "Crag-Chiseled Forge",
    effectDescription: "After Elemental Energy is decreased, the equipping character's Elemental Mastery will increase by 40 for 18s. Max 2 stacks.",
    baseStats: {
    "1/20": {
        "Base ATK": 42.4,
        "Bonus Elemental Mastery": 36.0
    },
    "20/20": {
        "Base ATK": 108.93,
        "Bonus Elemental Mastery": 63.61
    },
    "20/40": {
        "Base ATK": 134.83,
        "Bonus Elemental Mastery": 63.61
    },
    "40/40": {
        "Base ATK": 204.83,
        "Bonus Elemental Mastery": 92.7
    },
    "40/50": {
        "Base ATK": 230.83,
        "Bonus Elemental Mastery": 92.7
    },
    "50/50": {
        "Base ATK": 265.86,
        "Bonus Elemental Mastery": 107.24
    },
    "50/60": {
        "Base ATK": 291.76,
        "Bonus Elemental Mastery": 107.24
    },
    "60/60": {
        "Base ATK": 326.78,
        "Bonus Elemental Mastery": 121.79
    },
    "60/70": {
        "Base ATK": 352.68,
        "Bonus Elemental Mastery": 121.79
    },
    "70/70": {
        "Base ATK": 387.66,
        "Bonus Elemental Mastery": 136.3
    },
    "70/80": {
        "Base ATK": 413.66,
        "Bonus Elemental Mastery": 136.3
    },
    "80/80": {
        "Base ATK": 448.68,
        "Bonus Elemental Mastery": 150.84
    },
    "80/90": {
        "Base ATK": 474.58,
        "Bonus Elemental Mastery": 150.84
    },
    "90/90": {
        "Base ATK": 509.61,
        "Bonus Elemental Mastery": 165.38
    }
},
    refinements: [
    {
        "description": "After Elemental Energy is decreased, the equipping character's Elemental Mastery will increase by 40 for 18s. Max 2 stacks.",
        "level": 1
    },
    {
        "description": "After Elemental Energy is decreased, the equipping character's Elemental Mastery will increase by 50 for 18s. Max 2 stacks.",
        "level": 2
    },
    {
        "description": "After Elemental Energy is decreased, the equipping character's Elemental Mastery will increase by 60 for 18s. Max 2 stacks.",
        "level": 3
    },
    {
        "description": "After Elemental Energy is decreased, the equipping character's Elemental Mastery will increase by 70 for 18s. Max 2 stacks.",
        "level": 4
    },
    {
        "description": "After Elemental Energy is decreased, the equipping character's Elemental Mastery will increase by 80 for 18s. Max 2 stacks.",
        "level": 5
    }
],
   // weaponBonuses
}

export default Cloudforged
