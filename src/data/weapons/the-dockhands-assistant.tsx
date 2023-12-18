import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const TheDockhandsAssistant: Weapon = {
    name: "The Dockhand's Assistant",
    image: 'https://genshin.honeyhunterworld.com/img/i_n11427_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 4,
    description:
        'A convenient cutting tool that you can rarely find nowadays. You can replace the blades as they are dulled by usage.',
    effectName: 'Sea Shanty',
    effectDescription:
        "When the wielder is healed or heals others, they will gain a Stoic's Symbol that lasts 30s, up to a maximum of 3 Symbols. When using their Elemental Skill or Burst, all Symbols will be consumed and the Roused effect will be granted for 10s. For each Symbol consumed, gain 40 Elemental Mastery, and 2s after the effect occurs, 2 Energy per Symbol consumed will be restored for said character. The Roused effect can be triggered once every 15s, and Symbols can be gained even when the character is not on the field.",
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
                "When the wielder is healed or heals others, they will gain a Stoic's Symbol that lasts 30s, up to a maximum of 3 Symbols. When using their Elemental Skill or Burst, all Symbols will be consumed and the Roused effect will be granted for 10s. For each Symbol consumed, gain 40 Elemental Mastery, and 2s after the effect occurs, 2 Energy per Symbol consumed will be restored for said character. The Roused effect can be triggered once every 15s, and Symbols can be gained even when the character is not on the field.",
            level: 1,
        },
        {
            description:
                "When the wielder is healed or heals others, they will gain a Stoic's Symbol that lasts 30s, up to a maximum of 3 Symbols. When using their Elemental Skill or Burst, all Symbols will be consumed and the Roused effect will be granted for 10s. For each Symbol consumed, gain 50 Elemental Mastery, and 2s after the effect occurs, 2.5 Energy per Symbol consumed will be restored for said character. The Roused effect can be triggered once every 15s, and Symbols can be gained even when the character is not on the field.",
            level: 2,
        },
        {
            description:
                "When the wielder is healed or heals others, they will gain a Stoic's Symbol that lasts 30s, up to a maximum of 3 Symbols. When using their Elemental Skill or Burst, all Symbols will be consumed and the Roused effect will be granted for 10s. For each Symbol consumed, gain 60 Elemental Mastery, and 2s after the effect occurs, 3 Energy per Symbol consumed will be restored for said character. The Roused effect can be triggered once every 15s, and Symbols can be gained even when the character is not on the field.",
            level: 3,
        },
        {
            description:
                "When the wielder is healed or heals others, they will gain a Stoic's Symbol that lasts 30s, up to a maximum of 3 Symbols. When using their Elemental Skill or Burst, all Symbols will be consumed and the Roused effect will be granted for 10s. For each Symbol consumed, gain 70 Elemental Mastery, and 2s after the effect occurs, 3.5 Energy per Symbol consumed will be restored for said character. The Roused effect can be triggered once every 15s, and Symbols can be gained even when the character is not on the field.",
            level: 4,
        },
        {
            description:
                "When the wielder is healed or heals others, they will gain a Stoic's Symbol that lasts 30s, up to a maximum of 3 Symbols. When using their Elemental Skill or Burst, all Symbols will be consumed and the Roused effect will be granted for 10s. For each Symbol consumed, gain 80 Elemental Mastery, and 2s after the effect occurs, 4 Energy per Symbol consumed will be restored for said character. The Roused effect can be triggered once every 15s, and Symbols can be gained even when the character is not on the field.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default TheDockhandsAssistant
