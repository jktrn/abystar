import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: "Masons' Ditty",
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const attackBonusPerStack = [0.03, 0.04, 0.05, 0.06, 0.07]
            const elementalDamageBonusPerStack = [0.07, 0.085, 0.1, 0.115, 0.13]

            const newAttributes = {
                ...attributes,
                ATK: (attributes['ATK'] || 0) * (1 + currentStacks * attackBonusPerStack[state.weaponRefinement - 1]),
                'Pyro DMG Bonus': (attributes['Pyro DMG Bonus'] || 0) + (currentStacks * elementalDamageBonusPerStack[state.weaponRefinement - 1]),
                'Cryo DMG Bonus': (attributes['Cryo DMG Bonus'] || 0) + (currentStacks * elementalDamageBonusPerStack[state.weaponRefinement - 1]),
                'Hydro DMG Bonus': (attributes['Hydro DMG Bonus'] || 0) + (currentStacks * elementalDamageBonusPerStack[state.weaponRefinement - 1]),
                'Electro DMG Bonus': (attributes['Electro DMG Bonus'] || 0) + (currentStacks * elementalDamageBonusPerStack[state.weaponRefinement - 1]),
                'Anemo DMG Bonus': (attributes['Anemo DMG Bonus'] || 0) + (currentStacks * elementalDamageBonusPerStack[state.weaponRefinement - 1]),
                'Geo DMG Bonus': (attributes['Geo DMG Bonus'] || 0) + (currentStacks * elementalDamageBonusPerStack[state.weaponRefinement - 1]),
                'Dendro DMG Bonus': (attributes['Dendro DMG Bonus'] || 0) + (currentStacks * elementalDamageBonusPerStack[state.weaponRefinement - 1])
            }
            return { attributes: newAttributes }
        },
        maxStacks: 3,
        stackOptions: ['Off', '1 Symbol', '2 Symbols', '3 Symbols'],
        priority: 1
    }
]

const ProspectorsDrill: Weapon = {
    name: "Prospector's Drill",
    image: 'https://genshin.honeyhunterworld.com/img/i_n13427_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        'A long-handled drill that you can rarely find nowadays. It was often used in delving and in carving stones.',
    effectName: "Masons' Ditty",
    effectDescription:
        "When the wielder is healed or heals others, they will gain a Unity's Symbol that lasts 30s, up to a maximum of 3 Symbols. When using their Elemental Skill or Burst, all Symbols will be consumed and the Struggle effect will be granted for 10s. For each Symbol consumed, gain 3% ATK and 7% All Elemental DMG Bonus. The Struggle effect can be triggered once every 15s, and Symbols can be gained even when the character is not on the field.",
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
                <span>
                When the wielder is healed or heals others, they will gain a Unity's Symbol that lasts <span style={{ color: '#ddd' }}>30s</span>, up to a maximum of 3 Symbols. 
                When using their Elemental Skill or Burst, all Symbols will be consumed and the Struggle effect will be granted for <span style={{ color: '#ddd' }}>10s</span>. 
                For each Symbol consumed, gain <span style={{ color: '#ddd' }}>3%</span> ATK and <span style={{ color: '#ddd' }}>7%</span> All Elemental DMG Bonus. 
                The Struggle effect can be triggered once every <span style={{ color: '#ddd' }}>15s</span>, and Symbols can be gained even when the character is not on the field.
                </span>,
            level: 1,
        },
        {
            description:
            <span>
            When the wielder is healed or heals others, they will gain a Unity's Symbol that lasts <span style={{ color: '#ddd' }}>30s</span>, up to a maximum of 3 Symbols. 
            When using their Elemental Skill or Burst, all Symbols will be consumed and the Struggle effect will be granted for <span style={{ color: '#ddd' }}>10s</span>. 
            For each Symbol consumed, gain <span style={{ color: '#ddd' }}>4%</span> ATK and <span style={{ color: '#ddd' }}>8.5%</span> All Elemental DMG Bonus. 
            The Struggle effect can be triggered once every <span style={{ color: '#ddd' }}>15s</span>, and Symbols can be gained even when the character is not on the field.
            </span>,
            level: 2,
        },
        {
            description:
            <span>
            When the wielder is healed or heals others, they will gain a Unity's Symbol that lasts <span style={{ color: '#ddd' }}>30s</span>, up to a maximum of 3 Symbols. 
            When using their Elemental Skill or Burst, all Symbols will be consumed and the Struggle effect will be granted for <span style={{ color: '#ddd' }}>10s</span>. 
            For each Symbol consumed, gain <span style={{ color: '#ddd' }}>5%</span> ATK and <span style={{ color: '#ddd' }}>10%</span> All Elemental DMG Bonus. 
            The Struggle effect can be triggered once every <span style={{ color: '#ddd' }}>15s</span>, and Symbols can be gained even when the character is not on the field.
            </span>,
            level: 3,
        },
        {
            description:
            <span>
            When the wielder is healed or heals others, they will gain a Unity's Symbol that lasts <span style={{ color: '#ddd' }}>30s</span>, up to a maximum of 3 Symbols. 
            When using their Elemental Skill or Burst, all Symbols will be consumed and the Struggle effect will be granted for <span style={{ color: '#ddd' }}>10s</span>. 
            For each Symbol consumed, gain <span style={{ color: '#ddd' }}>6%</span> ATK and <span style={{ color: '#ddd' }}>11.5%</span> All Elemental DMG Bonus. 
            The Struggle effect can be triggered once every <span style={{ color: '#ddd' }}>15s</span>, and Symbols can be gained even when the character is not on the field.
            </span>,
            level: 4,
        },
        {
            description:
            <span>
            When the wielder is healed or heals others, they will gain a Unity's Symbol that lasts <span style={{ color: '#ddd' }}>30s</span>, up to a maximum of 3 Symbols. 
            When using their Elemental Skill or Burst, all Symbols will be consumed and the Struggle effect will be granted for <span style={{ color: '#ddd' }}>10s</span>. 
            For each Symbol consumed, gain <span style={{ color: '#ddd' }}>7%</span> ATK and <span style={{ color: '#ddd' }}>13%</span> All Elemental DMG Bonus. 
            The Struggle effect can be triggered once every <span style={{ color: '#ddd' }}>15s</span>, and Symbols can be gained even when the character is not on the field.
            </span>,
            level: 5,
        },
    ],
    weaponBonuses
}

export default ProspectorsDrill
