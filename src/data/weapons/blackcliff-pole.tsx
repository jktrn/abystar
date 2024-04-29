import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Press the Advantage',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const attackBonusPerStack = [0.12, 0.15, 0.18, 0.21, 0.24]

            const newAttributes = {
                ...attributes,
                ATK:
                    (attributes['ATK'] || 0) *
                    (1 +
                        currentStacks *
                            attackBonusPerStack[state.weaponRefinement - 1]),
            }
            return { attributes: newAttributes }
        },
        maxStacks: 3,
        stackOptions: ['Off', '1 Stack', '2 Stacks', '3 Stacks'],
        priority: 1,
    },
]

const BlackcliffPole: Weapon = {
    name: 'Blackcliff Pole',
    image: '/images/weapons/UI_EquipIcon_Pole_Blackrock.png',
    type: 'Polearm',
    rarity: 4,
    description:
        'A weapon made of blackcliff and aerosiderite. There is a dark crimson glow on its cold black sheen.',
    effectName: 'Press the Advantage',
    effectDescription:
        'After defeating an enemy, ATK is increased by 12% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus CRIT DMG': 0.12,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus CRIT DMG': 0.212,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus CRIT DMG': 0.212,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus CRIT DMG': 0.309,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus CRIT DMG': 0.309,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus CRIT DMG': 0.3575,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus CRIT DMG': 0.3575,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus CRIT DMG': 0.406,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus CRIT DMG': 0.406,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus CRIT DMG': 0.4543,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus CRIT DMG': 0.4543,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus CRIT DMG': 0.5028,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus CRIT DMG': 0.5028,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus CRIT DMG': 0.5513,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    After defeating an enemy, ATK is increased by{' '}
                    <span style={{ color: '#ddd' }}>12%</span> for 30s. This effect
                    has a maximum of 3 stacks, and the duration of each stack is
                    independent of the others.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    After defeating an enemy, ATK is increased by{' '}
                    <span style={{ color: '#ddd' }}>15%</span> for 30s. This effect
                    has a maximum of 3 stacks, and the duration of each stack is
                    independent of the others.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    After defeating an enemy, ATK is increased by{' '}
                    <span style={{ color: '#ddd' }}>18%</span> for 30s. This effect
                    has a maximum of 3 stacks, and the duration of each stack is
                    independent of the others.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    After defeating an enemy, ATK is increased by{' '}
                    <span style={{ color: '#ddd' }}>21%</span> for 30s. This effect
                    has a maximum of 3 stacks, and the duration of each stack is
                    independent of the others.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    After defeating an enemy, ATK is increased by{' '}
                    <span style={{ color: '#ddd' }}>24%</span> for 30s. This effect
                    has a maximum of 3 stacks, and the duration of each stack is
                    independent of the others.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default BlackcliffPole
