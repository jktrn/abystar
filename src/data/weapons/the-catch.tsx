import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Shanty',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const elementalBurstDMGBonusPerStack = [0.16, 0.2, 0.24, 0.28, 0.32]
            const elementalBurstCritRateBonusPerStack = [
                0.06, 0.075, 0.09, 0.105, 0.12,
            ]

            const newAttributes = {
                ...attributes,
                'Elemental Burst DMG Bonus':
                    (attributes['Elemental Burst DMG Bonus'] || 0) +
                    elementalBurstDMGBonusPerStack[state.weaponRefinement - 1],
                'Elemental Burst CRIT Rate':
                    (attributes['Elemental Burst CRIT Rate'] || 0) +
                    elementalBurstCritRateBonusPerStack[state.weaponRefinement - 1],
            }
            return { attributes: newAttributes }
        },
        enabled: false,
        priority: 1,
    },
]

const TheCatch: Weapon = {
    name: '"The Catch"',
    image: 'https://api.ambr.top/assets/UI/UI_EquipIcon_Pole_Mori.png',
    type: 'Polearm',
    rarity: 4,
    description:
        'In the distant past, this was the beloved spear of a famed Inazuman bandit.',
    effectName: 'Shanty',
    effectDescription:
        'Increases Elemental Burst DMG by 16% and Elemental Burst CRIT Rate by 6%.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus Energy Recharge': 0.1,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus Energy Recharge': 0.1767,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus Energy Recharge': 0.1767,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus Energy Recharge': 0.2575,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus Energy Recharge': 0.2575,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus Energy Recharge': 0.2979,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus Energy Recharge': 0.2979,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus Energy Recharge': 0.3383,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus Energy Recharge': 0.3383,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus Energy Recharge': 0.3786,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus Energy Recharge': 0.3786,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus Energy Recharge': 0.419,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus Energy Recharge': 0.419,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus Energy Recharge': 0.4594,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    Increases Elemental Burst DMG by{' '}
                    <span style={{ color: '#ddd' }}>16%</span> and Elemental Burst
                    CRIT Rate by <span style={{ color: '#ddd' }}>6%</span>.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    Increases Elemental Burst DMG by{' '}
                    <span style={{ color: '#ddd' }}>20%</span> and Elemental Burst
                    CRIT Rate by <span style={{ color: '#ddd' }}>7.5%</span>.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    Increases Elemental Burst DMG by{' '}
                    <span style={{ color: '#ddd' }}>24%</span> and Elemental Burst
                    CRIT Rate by <span style={{ color: '#ddd' }}>9%</span>.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    Increases Elemental Burst DMG by{' '}
                    <span style={{ color: '#ddd' }}>28%</span> and Elemental Burst
                    CRIT Rate by <span style={{ color: '#ddd' }}>10.5%</span>.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    Increases Elemental Burst DMG by{' '}
                    <span style={{ color: '#ddd' }}>32%</span> and Elemental Burst
                    CRIT Rate by <span style={{ color: '#ddd' }}>12%</span>.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default TheCatch
