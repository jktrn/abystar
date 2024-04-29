import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const PrototypeArchaic: Weapon = {
    name: 'Prototype Archaic',
    image: '/images/weapons/UI_EquipIcon_Claymore_Proto.png',
    type: 'Weapon',
    rarity: 4,
    description:
        'An ancient greatsword discovered in the Blackcliff Forge. It swings with such an immense force that one feels it could cut straight through reality itself.',
    effectName: 'Crush',
    effectDescription:
        'On hit, Normal or Charged Attacks have a 50% chance to deal an additional 240% ATK DMG to opponents within a small AoE. Can only occur once every 15s.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus ATK': 0.06,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus ATK': 0.106,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus ATK': 0.106,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus ATK': 0.1545,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus ATK': 0.1545,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus ATK': 0.1787,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus ATK': 0.1787,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus ATK': 0.203,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus ATK': 0.203,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus ATK': 0.2272,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus ATK': 0.2272,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus ATK': 0.2514,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus ATK': 0.2514,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus ATK': 0.2756,
        },
    },
    refinements: [
        {
            description:
                'On hit, Normal or Charged Attacks have a 50% chance to deal an additional 240% ATK DMG to opponents within a small AoE. Can only occur once every 15s.',
            level: 1,
        },
        {
            description:
                'On hit, Normal or Charged Attacks have a 50% chance to deal an additional 300% ATK DMG to opponents within a small AoE. Can only occur once every 15s.',
            level: 2,
        },
        {
            description:
                'On hit, Normal or Charged Attacks have a 50% chance to deal an additional 360% ATK DMG to opponents within a small AoE. Can only occur once every 15s.',
            level: 3,
        },
        {
            description:
                'On hit, Normal or Charged Attacks have a 50% chance to deal an additional 420% ATK DMG to opponents within a small AoE. Can only occur once every 15s.',
            level: 4,
        },
        {
            description:
                'On hit, Normal or Charged Attacks have a 50% chance to deal an additional 480% ATK DMG to opponents within a small AoE. Can only occur once every 15s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default PrototypeArchaic
