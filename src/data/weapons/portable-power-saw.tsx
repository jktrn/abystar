import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const PortablePowerSaw: Weapon = {
    name: 'Portable Power Saw',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12427_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 4,
    description:
        'An old-school power saw that you can rarely find nowadays. It was once a cutting tool trusted by workers all around.',
    effectName: 'Sea Shanty',
    effectDescription:
        "When the wielder is healed or heals others, they will gain a Stoic's Symbol that lasts 30s, up to a maximum of 3 Symbols. When using their Elemental Skill or Burst, all Symbols will be consumed and the Roused effect will be granted for 10s. For each Symbol consumed, gain 40 Elemental Mastery, and 2s after the effect occurs, 2 Energy per Symbol consumed will be restored for said character. The Roused effect can be triggered once every 15s, and Symbols can be gained even when the character is not on the field.",
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus HP': 0.12,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus HP': 0.212,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus HP': 0.212,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus HP': 0.309,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus HP': 0.309,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus HP': 0.3575,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus HP': 0.3575,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus HP': 0.406,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus HP': 0.406,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus HP': 0.4543,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus HP': 0.4543,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus HP': 0.5028,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus HP': 0.5028,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus HP': 0.5513,
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

export default PortablePowerSaw
