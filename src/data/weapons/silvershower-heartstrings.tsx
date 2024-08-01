import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
                // TODO: Implement
                // ]

const SilvershowerHeartstrings: Weapon = {
    name: "Silvershower Heartstrings",
    image: "/images/weapons/UI_EquipIcon_Bow_Arcdange.png",
    type: "Bow",
    rarity: 5,
    description: "Legendary bow of the fairies. Whether on the stage or the battlefield, it can easily touch the hearts of the listener.",
    effectName: "Dryas's Nocturne",
    effectDescription: "The equipping character can gain the Remedy effect. When they possess 1/2/3 Remedy stacks, Max HP will increase by 12%/24%/40%. 1 stack may be gained when the following conditions are met: 1 stack for 25s when using an Elemental Skill; 1 stack for 25s when the value of a Bond of Life value increases; 1 stack for 20s for performing healing. Stacks can still be triggered when the equipping character is not on the field. Each stack's duration is counted independently. In addition, when 3 stacks are active, Elemental Burst CRIT Rate will be increased by 28%. This effect will be canceled 4s after falling under 3 stacks.",
    baseStats: {
    "1/20": {
        "Base ATK": 44.34,
        "Bonus HP": 0.144
    },
    "20/20": {
        "Base ATK": 110.17,
        "Bonus HP": 0.2544
    },
    "20/40": {
        "Base ATK": 141.27,
        "Bonus HP": 0.2544
    },
    "40/40": {
        "Base ATK": 209.82,
        "Bonus HP": 0.3708
    },
    "40/50": {
        "Base ATK": 240.92,
        "Bonus HP": 0.3708
    },
    "50/50": {
        "Base ATK": 275.46,
        "Bonus HP": 0.429
    },
    "50/60": {
        "Base ATK": 306.66,
        "Bonus HP": 0.429
    },
    "60/60": {
        "Base ATK": 341.46,
        "Bonus HP": 0.4872
    },
    "60/70": {
        "Base ATK": 372.56,
        "Bonus HP": 0.4872
    },
    "70/70": {
        "Base ATK": 407.81,
        "Bonus HP": 0.5452
    },
    "70/80": {
        "Base ATK": 438.91,
        "Bonus HP": 0.5452
    },
    "80/80": {
        "Base ATK": 474.55,
        "Bonus HP": 0.6034
    },
    "80/90": {
        "Base ATK": 505.65,
        "Bonus HP": 0.6034
    },
    "90/90": {
        "Base ATK": 541.83,
        "Bonus HP": 0.6615
    }
},
    refinements: [
    {
        "description": "The equipping character can gain the Remedy effect. When they possess 1/2/3 Remedy stacks, Max HP will increase by 12%/24%/40%. 1 stack may be gained when the following conditions are met: 1 stack for 25s when using an Elemental Skill; 1 stack for 25s when the value of a Bond of Life value increases; 1 stack for 20s for performing healing. Stacks can still be triggered when the equipping character is not on the field. Each stack's duration is counted independently. In addition, when 3 stacks are active, Elemental Burst CRIT Rate will be increased by 28%. This effect will be canceled 4s after falling under 3 stacks.",
        "level": 1
    },
    {
        "description": "The equipping character can gain the Remedy effect. When they possess 1/2/3 Remedy stacks, Max HP will increase by 15%/30%/50%. 1 stack may be gained when the following conditions are met: 1 stack for 25s when using an Elemental Skill; 1 stack for 25s when the value of a Bond of Life value increases; 1 stack for 20s for performing healing. Stacks can still be triggered when the equipping character is not on the field. Each stack's duration is counted independently. In addition, when 3 stacks are active, Elemental Burst CRIT Rate will be increased by 35%. This effect will be canceled 4s after falling under 3 stacks.",
        "level": 2
    },
    {
        "description": "The equipping character can gain the Remedy effect. When they possess 1/2/3 Remedy stacks, Max HP will increase by 18%/36%/60%. 1 stack may be gained when the following conditions are met: 1 stack for 25s when using an Elemental Skill; 1 stack for 25s when the value of a Bond of Life value increases; 1 stack for 20s for performing healing. Stacks can still be triggered when the equipping character is not on the field. Each stack's duration is counted independently. In addition, when 3 stacks are active, Elemental Burst CRIT Rate will be increased by 42%. This effect will be canceled 4s after falling under 3 stacks.",
        "level": 3
    },
    {
        "description": "The equipping character can gain the Remedy effect. When they possess 1/2/3 Remedy stacks, Max HP will increase by 21%/42%/70%. 1 stack may be gained when the following conditions are met: 1 stack for 25s when using an Elemental Skill; 1 stack for 25s when the value of a Bond of Life value increases; 1 stack for 20s for performing healing. Stacks can still be triggered when the equipping character is not on the field. Each stack's duration is counted independently. In addition, when 3 stacks are active, Elemental Burst CRIT Rate will be increased by 49%. This effect will be canceled 4s after falling under 3 stacks.",
        "level": 4
    },
    {
        "description": "The equipping character can gain the Remedy effect. When they possess 1/2/3 Remedy stacks, Max HP will increase by 24%/48%/80%. 1 stack may be gained when the following conditions are met: 1 stack for 25s when using an Elemental Skill; 1 stack for 25s when the value of a Bond of Life value increases; 1 stack for 20s for performing healing. Stacks can still be triggered when the equipping character is not on the field. Each stack's duration is counted independently. In addition, when 3 stacks are active, Elemental Burst CRIT Rate will be increased by 56%. This effect will be canceled 4s after falling under 3 stacks.",
        "level": 5
    }
],
   // weaponBonuses
}

export default SilvershowerHeartstrings
