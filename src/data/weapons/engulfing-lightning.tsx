import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Timeless Dream: Eternal Stove',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const energyRechargetoAttackBonus = [0.28, 0.35, 0.42, 0.49, 0.56]
            const energyRechargetoAttackMax = [0.8, 0.9, 1.0, 1.1, 1.2]
            const burstEnergyRechargeBonus = [0.3, 0.35, 0.4, 0.45, 0.5]

            let hasBurst = 0

            if(currentStacks === 2) {
                hasBurst = burstEnergyRechargeBonus[state.weaponRefinement - 1]
            }

            const newAttributes = {
                ...attributes,
                ATK: attributes['ATK' || 0] * (1 + Math.min(((attributes['Energy Recharge'] || 0) - 1 + hasBurst) * energyRechargetoAttackBonus[state.weaponRefinement - 1], energyRechargetoAttackMax[state.weaponRefinement - 1])),
                'Energy Recharge': attributes['Energy Recharge' || 0] + hasBurst
            }
            return { attributes: newAttributes }
        },
        maxStacks: 2,
        stackOptions: ['Off', 'Enabled', 'Enabled + Burst'],
        priority: 2
    }
]

const EngulfingLightning: Weapon = {
    name: 'Engulfing Lightning',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13509_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 5,
    description:
        'A naginata used to "cut grass." Any army that stands before this weapon will probably be likewise cut down...',
    effectName: 'Timeless Dream: Eternal Stove',
    effectDescription:
        'ATK increased by 28% of Energy Recharge over the base 100%. You can gain a maximum bonus of 80% ATK. Gain 30% Energy Recharge for 12s after using an Elemental Burst.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus Energy Recharge': 0.12,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus Energy Recharge': 0.212,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus Energy Recharge': 0.212,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus Energy Recharge': 0.309,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus Energy Recharge': 0.309,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus Energy Recharge': 0.3575,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus Energy Recharge': 0.3575,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus Energy Recharge': 0.406,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus Energy Recharge': 0.406,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus Energy Recharge': 0.4543,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus Energy Recharge': 0.4543,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus Energy Recharge': 0.5028,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus Energy Recharge': 0.5028,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus Energy Recharge': 0.5513,
        },
    },
    refinements: [
        {
            description:
                <span>
                    ATK increased by <span style={{ color: '#ddd' }}>28%</span> of Energy Recharge over the base 100%. 
                    You can gain a maximum bonus of <span style={{ color: '#ddd' }}>80%</span> ATK.
                    Gain <span style={{ color: '#ddd' }}>30%</span> Energy Recharge for <span style={{ color: '#ddd' }}>12s</span> after using an Elemental Burst.
                </span>
                ,
            level: 1,
        },
        {
            description:
                <span>
                    ATK increased by <span style={{ color: '#ddd' }}>35%</span> of Energy Recharge over the base 100%. 
                    You can gain a maximum bonus of <span style={{ color: '#ddd' }}>90%</span> ATK.
                    Gain <span style={{ color: '#ddd' }}>35%</span> Energy Recharge for <span style={{ color: '#ddd' }}>12s</span> after using an Elemental Burst.
                </span>
                ,
            level: 2,
        },
        {
            description:
                <span>
                    ATK increased by <span style={{ color: '#ddd' }}>42%</span> of Energy Recharge over the base 100%. 
                    You can gain a maximum bonus of <span style={{ color: '#ddd' }}>100%</span> ATK.
                    Gain <span style={{ color: '#ddd' }}>40%</span> Energy Recharge for <span style={{ color: '#ddd' }}>12s</span> after using an Elemental Burst.
                </span>
                ,
            level: 3,
        },
        {
            description:
                <span>
                    ATK increased by <span style={{ color: '#ddd' }}>49%</span> of Energy Recharge over the base 100%. 
                    You can gain a maximum bonus of <span style={{ color: '#ddd' }}>110%</span> ATK.
                    Gain <span style={{ color: '#ddd' }}>45%</span> Energy Recharge for <span style={{ color: '#ddd' }}>12s</span> after using an Elemental Burst.
                </span>
                ,
            level: 4,
        },
        {
            description:
                <span>
                    ATK increased by <span style={{ color: '#ddd' }}>56%</span> of Energy Recharge over the base 100%. 
                    You can gain a maximum bonus of <span style={{ color: '#ddd' }}>120%</span> ATK.
                    Gain <span style={{ color: '#ddd' }}>50%</span> Energy Recharge for <span style={{ color: '#ddd' }}>12s</span> after using an Elemental Burst.
                </span>
                ,
            level: 5,
        },
    ],
    weaponBonuses
}

export default EngulfingLightning
