import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const LionsRoar: Weapon = {
    name: "Lion's Roar",
    image: 'https://api.ambr.top/assets/UI/UI_EquipIcon_Sword_Rockkiller.png',
    type: 'Sword',
    rarity: 4,
    description:
        'A sharp blade with extravagant carvings that somehow does not compromise on durability and sharpness. It roars like a lion as it cuts through the air.',
    effectName: 'Bane of Fire and Thunder',
    effectDescription:
        'Increases DMG against opponents affected by Pyro or Electro by 20%.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus ATK': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus ATK': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus ATK': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus ATK': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus ATK': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus ATK': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus ATK': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus ATK': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus ATK': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus ATK': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus ATK': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus ATK': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus ATK': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus ATK': 0.4135,
        },
    },
    refinements: [
        {
            description:
                'Increases DMG against opponents affected by Pyro or Electro by 20%.',
            level: 1,
        },
        {
            description:
                'Increases DMG against opponents affected by Pyro or Electro by 24%.',
            level: 2,
        },
        {
            description:
                'Increases DMG against opponents affected by Pyro or Electro by 28%.',
            level: 3,
        },
        {
            description:
                'Increases DMG against opponents affected by Pyro or Electro by 32%.',
            level: 4,
        },
        {
            description:
                'Increases DMG against opponents affected by Pyro or Electro by 36%.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default LionsRoar
