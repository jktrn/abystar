import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const JadefallsSplendor: Weapon = {
    name: "Jadefall's Splendor",
    image: 'https://genshin.honeyhunterworld.com/img/i_n14505_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 5,
    description:
        'A ritual vessel carved from jade that reflects the luster of the skies and the clear waters.',
    effectName: 'Primordial Jade Regalia',
    effectDescription:
        'For 3s after using an Elemental Burst or creating a shield, the equipping character can gain the Primordial Jade Regalia effect: Restore 4.5 Energy every 2.5s, and gain 0.3% Elemental DMG Bonus for their corresponding Elemental Type for every 1,000 Max HP they possess, up to 12%. Primordial Jade Regalia will still take effect even if the equipping character is not on the field.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus HP': 0.108,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus HP': 0.1908,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus HP': 0.1908,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus HP': 0.2781,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus HP': 0.2781,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus HP': 0.3217,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus HP': 0.3217,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus HP': 0.3654,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus HP': 0.3654,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus HP': 0.4089,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus HP': 0.4089,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus HP': 0.4525,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus HP': 0.4525,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus HP': 0.4962,
        },
    },
    refinements: [
        {
            description:
                'For 3s after using an Elemental Burst or creating a shield, the equipping character can gain the Primordial Jade Regalia effect: Restore 4.5 Energy every 2.5s, and gain 0.3% Elemental DMG Bonus for their corresponding Elemental Type for every 1,000 Max HP they possess, up to 12%. Primordial Jade Regalia will still take effect even if the equipping character is not on the field.',
            level: 1,
        },
        {
            description:
                'For 3s after using an Elemental Burst or creating a shield, the equipping character can gain the Primordial Jade Regalia effect: Restore 5 Energy every 2.5s, and gain 0.5% Elemental DMG Bonus for their corresponding Elemental Type for every 1,000 Max HP they possess, up to 20%. Primordial Jade Regalia will still take effect even if the equipping character is not on the field.',
            level: 2,
        },
        {
            description:
                'For 3s after using an Elemental Burst or creating a shield, the equipping character can gain the Primordial Jade Regalia effect: Restore 5.5 Energy every 2.5s, and gain 0.7% Elemental DMG Bonus for their corresponding Elemental Type for every 1,000 Max HP they possess, up to 28%. Primordial Jade Regalia will still take effect even if the equipping character is not on the field.',
            level: 3,
        },
        {
            description:
                'For 3s after using an Elemental Burst or creating a shield, the equipping character can gain the Primordial Jade Regalia effect: Restore 6 Energy every 2.5s, and gain 0.9% Elemental DMG Bonus for their corresponding Elemental Type for every 1,000 Max HP they possess, up to 36%. Primordial Jade Regalia will still take effect even if the equipping character is not on the field.',
            level: 4,
        },
        {
            description:
                'For 3s after using an Elemental Burst or creating a shield, the equipping character can gain the Primordial Jade Regalia effect: Restore 6.5 Energy every 2.5s, and gain 1.1% Elemental DMG Bonus for their corresponding Elemental Type for every 1,000 Max HP they possess, up to 44%. Primordial Jade Regalia will still take effect even if the equipping character is not on the field.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default JadefallsSplendor
