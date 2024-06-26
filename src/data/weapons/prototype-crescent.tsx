import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const PrototypeCrescent: Weapon = {
    name: 'Prototype Crescent',
    image: '/images/weapons/UI_EquipIcon_Bow_Proto.png',
    type: 'Weapon',
    rarity: 4,
    description:
        'A prototype longbow discovered in the Blackcliff Forge. The arrow fired from this bow glimmers like a ray of moonlight.',
    effectName: 'Unreturning',
    effectDescription:
        'Charged Attack hits on weak points increase Movement SPD by 10% and ATK by 36% for 10s.',
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
                'Charged Attack hits on weak points increase Movement SPD by 10% and ATK by 36% for 10s.',
            level: 1,
        },
        {
            description:
                'Charged Attack hits on weak points increase Movement SPD by 10% and ATK by 45% for 10s.',
            level: 2,
        },
        {
            description:
                'Charged Attack hits on weak points increase Movement SPD by 10% and ATK by 54% for 10s.',
            level: 3,
        },
        {
            description:
                'Charged Attack hits on weak points increase Movement SPD by 10% and ATK by 63% for 10s.',
            level: 4,
        },
        {
            description:
                'Charged Attack hits on weak points increase Movement SPD by 10% and ATK by 72% for 10s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default PrototypeCrescent
