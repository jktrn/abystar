import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Gladiator',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const attackBonusPerStack = [0.16, 0.2, 0.24, 0.28, 0.32]
            const defenceBonusPerStack = [0.16, 0.2, 0.24, 0.28, 0.32]
            const opponentLowAttackBonusPerStack = [0.24, 0.3, 0.36, 0.42, 0.48]

            let attackBonus = 0
            let defenceBonus = 0

            if (currentStacks === 1) {
                attackBonus = attributes['ATK'] * attackBonusPerStack[state.weaponRefinement - 1]
                defenceBonus = attributes['DEF'] * defenceBonusPerStack[state.weaponRefinement - 1]
            } else if (currentStacks === 2) {
                attackBonus = attributes['ATK'] * opponentLowAttackBonusPerStack[state.weaponRefinement - 1]
            }

            const newAttributes = {
                ...attributes,
                ATK: (attributes['ATK'] || 0) + attackBonus,
                DEF: (attributes['DEF'] || 0) + defenceBonus
            }
            return { attributes: newAttributes }
        },
        maxStacks: 2,
        stackOptions: ['Off', '>=2 Opponents', '<2 Opponents'],
        priority: 1
    }
]

const Deathmatch: Weapon = {
    name: 'Deathmatch',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13405_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 4,
    description:
        "A sharp crimson polearm that was once a gladiator's priceless treasure. Its awl has been stained by the blood of countless beasts and men.",
    effectName: 'Gladiator',
    effectDescription:
        'If there are at least 2 opponents nearby, ATK is increased by 16% and DEF is increased by 16%. If there are fewer than 2 opponents nearby, ATK is increased by 24%.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus CRIT Rate': 0.08,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus CRIT Rate': 0.1414,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus CRIT Rate': 0.1414,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus CRIT Rate': 0.206,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus CRIT Rate': 0.206,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus CRIT Rate': 0.2383,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus CRIT Rate': 0.2383,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus CRIT Rate': 0.2706,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus CRIT Rate': 0.2706,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus CRIT Rate': 0.3029,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus CRIT Rate': 0.3029,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus CRIT Rate': 0.3352,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus CRIT Rate': 0.3352,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus CRIT Rate': 0.3675,
        },
    },
    refinements: [
        {
            description:
                <span>
                    If there are at least 2 opponents nearby, ATK is increased by <span style={{ color: '#ddd' }}>16%</span> and DEF is increased by <span style={{ color: '#ddd' }}>16%</span>. 
                    If there are fewer than 2 opponents nearby, ATK is increased by <span style={{ color: '#ddd' }}>24%</span>.
                </span>
                ,
            level: 1,
        },
        {
            description:
                <span>
                    If there are at least 2 opponents nearby, ATK is increased by <span style={{ color: '#ddd' }}>20%</span> and DEF is increased by <span style={{ color: '#ddd' }}>20%</span>. 
                    If there are fewer than 2 opponents nearby, ATK is increased by <span style={{ color: '#ddd' }}>30%</span>.
                </span>
                ,
            level: 2,
        },
        {
            description:
                <span>
                    If there are at least 2 opponents nearby, ATK is increased by <span style={{ color: '#ddd' }}>24%</span> and DEF is increased by <span style={{ color: '#ddd' }}>24%</span>. 
                    If there are fewer than 2 opponents nearby, ATK is increased by <span style={{ color: '#ddd' }}>36%</span>.
                </span>
                ,
            level: 3,
        },
        {
            description:
                <span>
                    If there are at least 2 opponents nearby, ATK is increased by <span style={{ color: '#ddd' }}>28%</span> and DEF is increased by <span style={{ color: '#ddd' }}>28%</span>. 
                    If there are fewer than 2 opponents nearby, ATK is increased by <span style={{ color: '#ddd' }}>42%</span>.
                </span>
                ,
            level: 4,
        },
        {
            description:
                <span>
                    If there are at least 2 opponents nearby, ATK is increased by <span style={{ color: '#ddd' }}>32%</span> and DEF is increased by <span style={{ color: '#ddd' }}>32%</span>. 
                    If there are fewer than 2 opponents nearby, ATK is increased by <span style={{ color: '#ddd' }}>48%</span>.
                </span>
                ,
            level: 5,
        },
    ],
    weaponBonuses
}

export default Deathmatch
