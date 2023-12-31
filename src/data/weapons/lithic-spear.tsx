import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Lithic Axiom: Unity',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const attackBonusPerStack = [0.07, 0.08, 0.09, 0.1, 0.11]
            const critRateBonusPerStack = [0.03, 0.04, 0.05, 0.06, 0.07]

            const newAttributes = {
                ...attributes,
                ATK: (attributes['ATK'] || 0) * (1 + currentStacks * attackBonusPerStack[state.weaponRefinement - 1]),
                'CRIT Rate': (attributes['CRIT Rate'] || 0) + (currentStacks * critRateBonusPerStack[state.weaponRefinement - 1])
            }
            return { attributes: newAttributes }
        },
        maxStacks: 4,
        stackOptions: ['Off', '1 Stack', '2 Stacks', '3 Stacks', '4 Stacks'],
        priority: 1
    }
]

const LithicSpear: Weapon = {
    name: 'Lithic Spear',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13406_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        'A spear forged from the rocks of the Guyun Stone Forest. Its hardness knows no equal.',
    effectName: 'Lithic Axiom: Unity',
    effectDescription:
        'For every character in the party who hails from Liyue, the character who equips this weapon gains a 7% ATK increase and a 3% CRIT Rate increase. This effect stacks up to 4 times.',
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
                    For every character in the party who hails from Liyue, the character who equips this weapon gains a <span style={{ color: '#ddd' }}>7%</span> ATK increase 
                    and a <span style={{ color: '#ddd' }}>3%</span> CRIT Rate increase. This effect stacks up to 4 times.
                </span>
                ,
            level: 1,
        },
        {
            description:
            <span>
                For every character in the party who hails from Liyue, the character who equips this weapon gains a <span style={{ color: '#ddd' }}>8%</span> ATK increase 
                and a <span style={{ color: '#ddd' }}>4%</span> CRIT Rate increase. This effect stacks up to 4 times.
            </span>
            ,
            level: 2,
        },
        {
            description:
            <span>
                For every character in the party who hails from Liyue, the character who equips this weapon gains a <span style={{ color: '#ddd' }}>9%</span> ATK increase 
                and a <span style={{ color: '#ddd' }}>5%</span> CRIT Rate increase. This effect stacks up to 4 times.
            </span>
            ,
            level: 3,
        },
        {
            description:
                <span>
                    For every character in the party who hails from Liyue, the character who equips this weapon gains a <span style={{ color: '#ddd' }}>10%</span> ATK increase 
                    and a <span style={{ color: '#ddd' }}>6%</span> CRIT Rate increase. This effect stacks up to 4 times.
                </span>
                ,
            level: 4,
        },
        {
            description:
                <span>
                    For every character in the party who hails from Liyue, the character who equips this weapon gains a <span style={{ color: '#ddd' }}>11%</span> ATK increase 
                    and a <span style={{ color: '#ddd' }}>7%</span> CRIT Rate increase. This effect stacks up to 4 times.
                </span>
                ,
            level: 5,
        },
    ],
    weaponBonuses
}

export default LithicSpear
