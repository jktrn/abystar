import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const MistsplitterReforged: Weapon = {
    name: 'Mistsplitter Reforged',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11509_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 5,
    description:
        'A sword that blazes with a fierce violet light. The name "Reforged" comes from it having been broken once before.',
    effectName: "Mistsplitter's Edge",
    effectDescription:
        "Gain a 12% Elemental DMG Bonus for all elements and receive the might of the Mistsplitter's Emblem. At stack levels 1/2/3, the Mistsplitter's Emblem provides a 8/16/28% Elemental DMG Bonus for the character's Elemental Type. The character will obtain 1 stack of Mistsplitter's Emblem in each of the following scenarios: Normal Attack deals Elemental DMG (stack lasts 5s), casting Elemental Burst (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
    baseStats: {
        '1/20': {
            'Base ATK': 47.54,
            'Bonus CRIT DMG': 0.096,
        },
        '20/20': {
            'Base ATK': 133.29,
            'Bonus CRIT DMG': 0.1696,
        },
        '20/40': {
            'Base ATK': 164.39,
            'Bonus CRIT DMG': 0.1696,
        },
        '40/40': {
            'Base ATK': 260.56,
            'Bonus CRIT DMG': 0.2472,
        },
        '40/50': {
            'Base ATK': 291.66,
            'Bonus CRIT DMG': 0.2472,
        },
        '50/50': {
            'Base ATK': 341.43,
            'Bonus CRIT DMG': 0.286,
        },
        '50/60': {
            'Base ATK': 372.63,
            'Bonus CRIT DMG': 0.286,
        },
        '60/60': {
            'Base ATK': 423.4,
            'Bonus CRIT DMG': 0.3248,
        },
        '60/70': {
            'Base ATK': 454.5,
            'Bonus CRIT DMG': 0.3248,
        },
        '70/70': {
            'Base ATK': 506.22,
            'Bonus CRIT DMG': 0.3635,
        },
        '70/80': {
            'Base ATK': 537.32,
            'Bonus CRIT DMG': 0.3635,
        },
        '80/80': {
            'Base ATK': 589.85,
            'Bonus CRIT DMG': 0.4022,
        },
        '80/90': {
            'Base ATK': 620.95,
            'Bonus CRIT DMG': 0.4022,
        },
        '90/90': {
            'Base ATK': 674.33,
            'Bonus CRIT DMG': 0.441,
        },
    },
    refinements: [
        {
            description:
                "Gain a 12% Elemental DMG Bonus for all elements and receive the might of the Mistsplitter's Emblem. At stack levels 1/2/3, the Mistsplitter's Emblem provides a 8/16/28% Elemental DMG Bonus for the character's Elemental Type. The character will obtain 1 stack of Mistsplitter's Emblem in each of the following scenarios: Normal Attack deals Elemental DMG (stack lasts 5s), casting Elemental Burst (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
            level: 1,
        },
        {
            description:
                "Gain a 15% Elemental DMG Bonus for all elements and receive the might of the Mistsplitter's Emblem. At stack levels 1/2/3, the Mistsplitter's Emblem provides a 10/20/35% Elemental DMG Bonus for the character's Elemental Type. The character will obtain 1 stack of Mistsplitter's Emblem in each of the following scenarios: Normal Attack deals Elemental DMG (stack lasts 5s), casting Elemental Burst (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
            level: 2,
        },
        {
            description:
                "Gain a 18% Elemental DMG Bonus for all elements and receive the might of the Mistsplitter's Emblem. At stack levels 1/2/3, the Mistsplitter's Emblem provides a 12/24/42% Elemental DMG Bonus for the character's Elemental Type. The character will obtain 1 stack of Mistsplitter's Emblem in each of the following scenarios: Normal Attack deals Elemental DMG (stack lasts 5s), casting Elemental Burst (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
            level: 3,
        },
        {
            description:
                "Gain a 21% Elemental DMG Bonus for all elements and receive the might of the Mistsplitter's Emblem. At stack levels 1/2/3, the Mistsplitter's Emblem provides a 14/28/49% Elemental DMG Bonus for the character's Elemental Type. The character will obtain 1 stack of Mistsplitter's Emblem in each of the following scenarios: Normal Attack deals Elemental DMG (stack lasts 5s), casting Elemental Burst (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
            level: 4,
        },
        {
            description:
                "Gain a 24% Elemental DMG Bonus for all elements and receive the might of the Mistsplitter's Emblem. At stack levels 1/2/3, the Mistsplitter's Emblem provides a 16/32/56% Elemental DMG Bonus for the character's Elemental Type. The character will obtain 1 stack of the Mistsplitter's Emblem in each of the following scenarios: Normal Attack deals Elemental DMG (stack lasts 5s), casting Elemental Burst (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default MistsplitterReforged
