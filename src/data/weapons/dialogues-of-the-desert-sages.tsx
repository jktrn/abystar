import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const DialoguesOfTheDesertSages: Weapon = {
    name: 'Dialogues of the Desert Sages',
    image: 'https://api.ambr.top/assets/UI/UI_EquipIcon_Pole_Caduceus.png',
    type: 'Polearm',
    rarity: 4,
    description:
        'A caduceus symbolizing the glory of alchemy, made from special alloys to match its special status. It is exceedingly rigid and heavy, and would probably hurt pretty bad if used as a cudgel.',
    effectName: 'Principle of Equilibrium',
    effectDescription:
        'When the wielder performs healing, restore 8 Energy. This effect can be triggered once every 10s and can occur even when the character is not on the field.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus HP': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus HP': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus HP': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus HP': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus HP': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus HP': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus HP': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus HP': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus HP': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus HP': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus HP': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus HP': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus HP': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus HP': 0.4135,
        },
    },
    refinements: [
        {
            description:
                'When the wielder performs healing, restore 8 Energy. This effect can be triggered once every 10s and can occur even when the character is not on the field.',
            level: 1,
        },
        {
            description:
                'When the wielder performs healing, restore 10 Energy. This effect can be triggered once every 10s and can occur even when the character is not on the field.',
            level: 2,
        },
        {
            description:
                'When the wielder performs healing, restore 12 Energy. This effect can be triggered once every 10s and can occur even when the character is not on the field.',
            level: 3,
        },
        {
            description:
                'When the wielder performs healing, restore 14 Energy. This effect can be triggered once every 10s and can occur even when the character is not on the field.',
            level: 4,
        },
        {
            description:
                'When the wielder performs healing, restore 16 Energy. This effect can be triggered once every 10s and can occur even when the character is not on the field.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default DialoguesOfTheDesertSages
