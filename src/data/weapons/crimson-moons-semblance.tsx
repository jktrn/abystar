import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const CrimsonMoonsSemblance: Weapon = {
    name: "Crimson Moon's Semblance",
    image: 'https://api.ambr.top/assets/UI/UI_EquipIcon_Pole_BloodMoon.png',
    type: 'Polearm',
    rarity: 5,
    description:
        'A keen-edged weapon, luster dazzling as the crimson moon. It is said that an ancient dynasty once regarded it as a ritual object that could bridge two worlds, but none still remember the beliefs and ceremonies of that bygone age.',
    effectName: "Ashen Sun's Shadow",
    effectDescription:
        'Grants a Bond of Life equal to 25% of Max HP when a Charged Attack hits an opponent. This effect can be triggered up to once every 14s. In addition, when the equipping character has a Bond of Life, they gain a 12% DMG Bonus; if the value of the Bond of Life is greater than or equal to 30% of Max HP, then gain an additional 24% DMG Bonus.',
    baseStats: {
        '1/20': {
            'Base ATK': 47.54,
            'Bonus CRIT Rate': 0.048,
        },
        '20/20': {
            'Base ATK': 133.29,
            'Bonus CRIT Rate': 0.0848,
        },
        '20/40': {
            'Base ATK': 164.39,
            'Bonus CRIT Rate': 0.0848,
        },
        '40/40': {
            'Base ATK': 260.56,
            'Bonus CRIT Rate': 0.1236,
        },
        '40/50': {
            'Base ATK': 291.66,
            'Bonus CRIT Rate': 0.1236,
        },
        '50/50': {
            'Base ATK': 341.43,
            'Bonus CRIT Rate': 0.143,
        },
        '50/60': {
            'Base ATK': 372.63,
            'Bonus CRIT Rate': 0.143,
        },
        '60/60': {
            'Base ATK': 423.4,
            'Bonus CRIT Rate': 0.1624,
        },
        '60/70': {
            'Base ATK': 454.5,
            'Bonus CRIT Rate': 0.1624,
        },
        '70/70': {
            'Base ATK': 506.22,
            'Bonus CRIT Rate': 0.1817,
        },
        '70/80': {
            'Base ATK': 537.32,
            'Bonus CRIT Rate': 0.1817,
        },
        '80/80': {
            'Base ATK': 589.85,
            'Bonus CRIT Rate': 0.2011,
        },
        '80/90': {
            'Base ATK': 620.95,
            'Bonus CRIT Rate': 0.2011,
        },
        '90/90': {
            'Base ATK': 674.33,
            'Bonus CRIT Rate': 0.2205,
        },
    },
    refinements: [
        {
            description:
                'Grants a Bond of Life equal to 25% of Max HP when a Charged Attack hits an opponent. This effect can be triggered up to once every 14s. In addition, when the equipping character has a Bond of Life, they gain a 12% DMG Bonus; if the value of the Bond of Life is greater than or equal to 30% of Max HP, then gain an additional 24% DMG Bonus.',
            level: 1,
        },
        {
            description:
                'Grants a Bond of Life equal to 25% of Max HP when a Charged Attack hits an opponent. This effect can be triggered up to once every 14s. In addition, when the equipping character has a Bond of Life, they gain a 16% DMG Bonus; if the value of the Bond of Life is greater than or equal to 30% of Max HP, then gain an additional 32% DMG Bonus.',
            level: 2,
        },
        {
            description:
                'Grants a Bond of Life equal to 25% of Max HP when a Charged Attack hits an opponent. This effect can be triggered up to once every 14s. In addition, when the equipping character has a Bond of Life, they gain a 20% DMG Bonus; if the value of the Bond of Life is greater than or equal to 30% of Max HP, then gain an additional 40% DMG Bonus.',
            level: 3,
        },
        {
            description:
                'Grants a Bond of Life equal to 25% of Max HP when a Charged Attack hits an opponent. This effect can be triggered up to once every 14s. In addition, when the equipping character has a Bond of Life, they gain a 24% DMG Bonus; if the value of the Bond of Life is greater than or equal to 30% of Max HP, then gain an additional 48% DMG Bonus.',
            level: 4,
        },
        {
            description:
                'Grants a Bond of Life equal to 25% of Max HP when a Charged Attack hits an opponent. This effect can be triggered up to once every 14s. In addition, when the equipping character has a Bond of Life, they gain a 28% DMG Bonus; if the value of the Bond of Life is greater than or equal to 30% of Max HP, then gain an additional 56% DMG Bonus.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default CrimsonMoonsSemblance
