import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Golden Majesty',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const shieldStrengthBonusPerStack = [0.2, 0.25, 0.3, 0.35, 0.4]
            const attackBonusPerStack = [0.04, 0.05, 0.06, 0.07, 0.08]

            let attackBonus = 0

            if(currentStacks <= 5) {
                attackBonus = 1 + currentStacks * attackBonusPerStack[state.weaponRefinement - 1] * 2
            } else if (currentStacks > 5) {
                attackBonus = 1 + currentStacks * attackBonusPerStack[state.weaponRefinement - 1]
            }

            const newAttributes = {
                ...attributes,
                'Shield Strength': (attributes['Shield Strength'] || 0) + shieldStrengthBonusPerStack[state.weaponRefinement - 1],
                ATK: (attributes['ATK'] || 0) * attackBonus
            }
            return { attributes: newAttributes }
        },
        maxStacks: 10,
        stackOptions: ['Off', 'Shielded 1 Stack', 'Shielded 2 Stacks', 'Shielded 3 Stacks', 'Shielded 4 Stacks', 'Shielded 5 Stacks', 'Unshielded 1 Stack', 'Unshielded 2 Stacks', 'Unshielded 3 Stacks', 'Unshielded 4 Stacks', 'Unshielded 5 Stacks'],
        priority: 1
    }
]

const VortexVanquisher: Weapon = {
    name: 'Vortex Vanquisher',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13504_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 5,
    description:
        'This sharp polearm can seemingly pierce through anything. When swung, one can almost see the rift it tears in the air.',
    effectName: 'Golden Majesty',
    effectDescription:
        'Increases Shield Strength by 20%. Scoring hits on opponents increases ATK by 4% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus ATK': 0.108,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus ATK': 0.1908,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus ATK': 0.1908,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus ATK': 0.2781,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus ATK': 0.2781,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus ATK': 0.3217,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus ATK': 0.3217,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus ATK': 0.3654,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus ATK': 0.3654,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus ATK': 0.4089,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus ATK': 0.4089,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus ATK': 0.4525,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus ATK': 0.4525,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus ATK': 0.4962,
        },
    },
    refinements: [
        {
            description:
                <span>
                    Increases Shield Strength by <span style={{ color: '#ddd' }}>20%</span>. Scoring hits on opponents increases ATK by <span style={{ color: '#ddd' }}>4%</span> {' '}
                    for <span style={{ color: '#ddd' }}>8s</span>. Max 5 stacks. 
                    Can only occur once every <span style={{ color: '#ddd' }}>0.3s</span>. 
                    While protected by a shield, this ATK increase effect is increased by <span style={{ color: '#ddd' }}>100%</span>.
                </span>
                ,
            level: 1,
        },
        {
            description:
            <span>
                Increases Shield Strength by <span style={{ color: '#ddd' }}>25%</span>. Scoring hits on opponents increases ATK by <span style={{ color: '#ddd' }}>5%</span> {' '}
                for <span style={{ color: '#ddd' }}>8s</span>. Max 5 stacks. 
                Can only occur once every <span style={{ color: '#ddd' }}>0.3s</span>. 
                While protected by a shield, this ATK increase effect is increased by <span style={{ color: '#ddd' }}>100%</span>.
            </span>
            ,
            level: 2,
        },
        {
            description:
            <span>
                Increases Shield Strength by <span style={{ color: '#ddd' }}>30%</span>. Scoring hits on opponents increases ATK by <span style={{ color: '#ddd' }}>6%</span> {' '}
                for <span style={{ color: '#ddd' }}>8s</span>. Max 5 stacks. 
                Can only occur once every <span style={{ color: '#ddd' }}>0.3s</span>. 
                While protected by a shield, this ATK increase effect is increased by <span style={{ color: '#ddd' }}>100%</span>.
            </span>
            ,
            level: 3,
        },
        {
            description:
            <span>
                Increases Shield Strength by <span style={{ color: '#ddd' }}>35%</span>. Scoring hits on opponents increases ATK by <span style={{ color: '#ddd' }}>7%</span> {' '}
                for <span style={{ color: '#ddd' }}>8s</span>. Max 5 stacks. 
                Can only occur once every <span style={{ color: '#ddd' }}>0.3s</span>. 
                While protected by a shield, this ATK increase effect is increased by <span style={{ color: '#ddd' }}>100%</span>.
            </span>
            ,
            level: 4,
        },
        {
            description:
            <span>
                Increases Shield Strength by <span style={{ color: '#ddd' }}>40%</span>. Scoring hits on opponents increases ATK by <span style={{ color: '#ddd' }}>8%</span> {' '}
                for <span style={{ color: '#ddd' }}>8s</span>. Max 5 stacks. 
                Can only occur once every <span style={{ color: '#ddd' }}>0.3s</span>. 
                While protected by a shield, this ATK increase effect is increased by <span style={{ color: '#ddd' }}>100%</span>.
            </span>
            ,
            level: 5,
        },
    ],
    weaponBonuses
}

export default VortexVanquisher
