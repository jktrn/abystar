import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Extinguishing Precept',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const elementalDamageBonus = [0.12, 0.15, 0.18, 0.21, 0.24]
            const attackBonusPerStack = [0.032, 0.04, 0.048, 0.056, 0.064]

            let attackBonus = 0

            if(currentStacks <= 6) {
                attackBonus = (attributes['ATK'] || 0) * (currentStacks * attackBonusPerStack[state.weaponRefinement - 1])
            } else if (currentStacks > 6) {
                attackBonus = (attributes['ATK'] || 0) * ((currentStacks - 5) * attackBonusPerStack[state.weaponRefinement - 1] * 2)
            }

            const newAttributes = {
                ...attributes,
                ATK: (attributes['ATK'] || 0) + attackBonus,
                'Pyro DMG Bonus': (attributes['Pyro DMG Bonus'] || 0) + elementalDamageBonus[state.weaponRefinement - 1],
                'Cryo DMG Bonus': (attributes['Cryo DMG Bonus'] || 0) + elementalDamageBonus[state.weaponRefinement - 1],
                'Hydro DMG Bonus': (attributes['Hydro DMG Bonus'] || 0) + elementalDamageBonus[state.weaponRefinement - 1],
                'Electro DMG Bonus': (attributes['Electro DMG Bonus'] || 0) + elementalDamageBonus[state.weaponRefinement - 1],
                'Anemo DMG Bonus': (attributes['Anemo DMG Bonus'] || 0) + elementalDamageBonus[state.weaponRefinement - 1],
                'Geo DMG Bonus': (attributes['Geo DMG Bonus'] || 0) + elementalDamageBonus[state.weaponRefinement - 1],
                'Dendro DMG Bonus': (attributes['Dendro DMG Bonus'] || 0) + elementalDamageBonus[state.weaponRefinement - 1]
            }
            return { attributes: newAttributes }
        },
        maxStacks: 12,
        stackOptions: ['Off', '1 Stack On-Field', '2 Stacks On-Field', '3 Stacks On-Field', '4 Stacks On-Field', '5 Stacks On-Field', '6 Stacks On-Field', '1 Stack Off-Field', '2 Stacks Off-Field', '3 Stacks Off-Field', '4 Stacks Off-Field', '5 Stacks Off-Field', '6 Stacks Off-Field'],
        priority: 1
    }
]

const CalamityQueller: Weapon = {
    name: 'Calamity Queller',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13507_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 5,
    description:
        'A keenly honed weapon forged from some strange crystal. Its faint blue light seems to whisper of countless matters now past.',
    effectName: 'Extinguishing Precept',
    effectDescription:
        "Gain 12% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 3.2% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
    baseStats: {
        '1/20': {
            'Base ATK': 49.14,
            'Bonus ATK': 0.036,
        },
        '20/20': {
            'Base ATK': 144.91,
            'Bonus ATK': 0.0636,
        },
        '20/40': {
            'Base ATK': 176.01,
            'Bonus ATK': 0.0636,
        },
        '40/40': {
            'Base ATK': 285.93,
            'Bonus ATK': 0.0927,
        },
        '40/50': {
            'Base ATK': 317.03,
            'Bonus ATK': 0.0927,
        },
        '50/50': {
            'Base ATK': 374.42,
            'Bonus ATK': 0.1072,
        },
        '50/60': {
            'Base ATK': 405.62,
            'Bonus ATK': 0.1072,
        },
        '60/60': {
            'Base ATK': 464.39,
            'Bonus ATK': 0.1218,
        },
        '60/70': {
            'Base ATK': 495.49,
            'Bonus ATK': 0.1218,
        },
        '70/70': {
            'Base ATK': 555.39,
            'Bonus ATK': 0.1363,
        },
        '70/80': {
            'Base ATK': 586.49,
            'Bonus ATK': 0.1363,
        },
        '80/80': {
            'Base ATK': 647.52,
            'Bonus ATK': 0.1508,
        },
        '80/90': {
            'Base ATK': 678.62,
            'Bonus ATK': 0.1508,
        },
        '90/90': {
            'Base ATK': 740.58,
            'Bonus ATK': 0.1654,
        },
    },
    refinements: [
        {
            description:
                <span>
                    Gain <span style={{ color: '#ddd' }}>12%</span> All Elemental DMG Bonus. 
                    Obtain Consummation for <span style={{ color: '#ddd' }}>20s</span> after using an Elemental Skill, causing ATK to increase by <span style={{ color: '#ddd' }}>3.2%</span> per second. 
                    This ATK increase has a maximum of 6 stacks. 
                    When the character equipped with this weapon is not on the field, Consummation&apos;s ATK increase is doubled.
                </span>
                ,
            level: 1,
        },
        {
            description:
            <span>
                Gain <span style={{ color: '#ddd' }}>15%</span> All Elemental DMG Bonus. 
                Obtain Consummation for <span style={{ color: '#ddd' }}>20s</span> after using an Elemental Skill, causing ATK to increase by <span style={{ color: '#ddd' }}>4%</span> per second. 
                This ATK increase has a maximum of 6 stacks. 
                When the character equipped with this weapon is not on the field, Consummation&apos;s ATK increase is doubled.
            </span>
            ,
            level: 2,
        },
        {
            description:
            <span>
                Gain <span style={{ color: '#ddd' }}>18%</span> All Elemental DMG Bonus. 
                Obtain Consummation for <span style={{ color: '#ddd' }}>20s</span> after using an Elemental Skill, causing ATK to increase by <span style={{ color: '#ddd' }}>4.8%</span> per second. 
                This ATK increase has a maximum of 6 stacks. 
                When the character equipped with this weapon is not on the field, Consummation&apos;s ATK increase is doubled.
            </span>
            ,
            level: 3,
        },
        {
            description:
            <span>
                Gain <span style={{ color: '#ddd' }}>21%</span> All Elemental DMG Bonus. 
                Obtain Consummation for <span style={{ color: '#ddd' }}>20s</span> after using an Elemental Skill, causing ATK to increase by <span style={{ color: '#ddd' }}>5.6%</span> per second. 
                This ATK increase has a maximum of 6 stacks. 
                When the character equipped with this weapon is not on the field, Consummation&apos;s ATK increase is doubled.
            </span>
            ,
            level: 4,
        },
        {
            description:
            <span>
                Gain <span style={{ color: '#ddd' }}>24%</span> All Elemental DMG Bonus. 
                Obtain Consummation for <span style={{ color: '#ddd' }}>20s</span> after using an Elemental Skill, causing ATK to increase by <span style={{ color: '#ddd' }}>6.4%</span> per second. 
                This ATK increase has a maximum of 6 stacks. 
                When the character equipped with this weapon is not on the field, Consummation&apos;s ATK increase is doubled.
            </span>
            ,
            level: 5,
        },
    ],
    weaponBonuses
}

export default CalamityQueller
