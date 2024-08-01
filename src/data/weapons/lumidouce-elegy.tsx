import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
                // TODO: Implement
                // ]

const LumidouceElegy: Weapon = {
    name: "Lumidouce Elegy",
    image: "/images/weapons/UI_EquipIcon_Pole_Muguet.png",
    type: "Polearm",
    rarity: 5,
    description: "A magnificent polearm adorned with azure crystal. It is said to have been a certain legendary Champion Duelist's treasure \u2014 and yet, not once was it ever used.",
    effectName: "Bright Dawn Overture",
    effectDescription: "ATK increased by 15%. After the equipping character triggers Burning on an opponent or deals Dendro DMG to Burning opponents, the DMG dealt is increased by 18%. This effect lasts for 8s, max 2 stacks. When 2 stacks are reached or when the duration is refreshed at 2 stacks, restore 12 Energy. Energy can be restored this way once every 12s. The 2 aforementioned effects can be triggered even when the character is off-field.",
    baseStats: {
    "1/20": {
        "Base ATK": 45.94,
        "Bonus CRIT Rate": 0.072
    },
    "20/20": {
        "Base ATK": 121.73,
        "Bonus CRIT Rate": 0.1272
    },
    "20/40": {
        "Base ATK": 152.83,
        "Bonus CRIT Rate": 0.1272
    },
    "40/40": {
        "Base ATK": 235.2,
        "Bonus CRIT Rate": 0.1854
    },
    "40/50": {
        "Base ATK": 266.3,
        "Bonus CRIT Rate": 0.1854
    },
    "50/50": {
        "Base ATK": 308.42,
        "Bonus CRIT Rate": 0.2145
    },
    "50/60": {
        "Base ATK": 339.62,
        "Bonus CRIT Rate": 0.2145
    },
    "60/60": {
        "Base ATK": 382.43,
        "Bonus CRIT Rate": 0.2436
    },
    "60/70": {
        "Base ATK": 413.53,
        "Bonus CRIT Rate": 0.2436
    },
    "70/70": {
        "Base ATK": 456.99,
        "Bonus CRIT Rate": 0.2726
    },
    "70/80": {
        "Base ATK": 488.09,
        "Bonus CRIT Rate": 0.2726
    },
    "80/80": {
        "Base ATK": 532.23,
        "Bonus CRIT Rate": 0.3017
    },
    "80/90": {
        "Base ATK": 563.33,
        "Bonus CRIT Rate": 0.3017
    },
    "90/90": {
        "Base ATK": 608.07,
        "Bonus CRIT Rate": 0.3308
    }
},
    refinements: [
    {
        "description": "ATK increased by 15%. After the equipping character triggers Burning on an opponent or deals Dendro DMG to Burning opponents, the DMG dealt is increased by 18%. This effect lasts for 8s, max 2 stacks. When 2 stacks are reached or when the duration is refreshed at 2 stacks, restore 12 Energy. Energy can be restored this way once every 12s. The 2 aforementioned effects can be triggered even when the character is off-field.",
        "level": 1
    },
    {
        "description": "ATK increased by 19%. After the equipping character triggers Burning on an opponent or deals Dendro DMG to Burning opponents, the DMG dealt is increased by 23%. This effect lasts for 8s, max 2 stacks. When 2 stacks are reached or when the duration is refreshed at 2 stacks, restore 13 Energy. Energy can be restored this way once every 12s. The 2 aforementioned effects can be triggered even when the character is off-field.",
        "level": 2
    },
    {
        "description": "ATK increased by 23%. After the equipping character triggers Burning on an opponent or deals Dendro DMG to Burning opponents, the DMG dealt is increased by 28%. This effect lasts for 8s, max 2 stacks. When 2 stacks are reached or when the duration is refreshed at 2 stacks, restore 14 Energy. Energy can be restored this way once every 12s. The 2 aforementioned effects can be triggered even when the character is off-field.",
        "level": 3
    },
    {
        "description": "ATK increased by 27%. After the equipping character triggers Burning on an opponent or deals Dendro DMG to Burning opponents, the DMG dealt is increased by 33%. This effect lasts for 8s, max 2 stacks. When 2 stacks are reached or when the duration is refreshed at 2 stacks, restore 15 Energy. Energy can be restored this way once every 12s. The 2 aforementioned effects can be triggered even when the character is off-field.",
        "level": 4
    },
    {
        "description": "ATK increased by 31%. After the equipping character triggers Burning on an opponent or deals Dendro DMG to Burning opponents, the DMG dealt is increased by 38%. This effect lasts for 8s, max 2 stacks. When 2 stacks are reached or when the duration is refreshed at 2 stacks, restore 16 Energy. Energy can be restored this way once every 12s. The 2 aforementioned effects can be triggered even when the character is off-field.",
        "level": 5
    }
],
   // weaponBonuses
}

export default LumidouceElegy
