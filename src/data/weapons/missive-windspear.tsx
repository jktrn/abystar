import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'The Wind Unattained',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const attackBonusPerStack = [0.12, 0.15, 0.18, 0.21, 0.24]
            const elementalMasteryBonusPerStack = [48, 60, 72, 84, 96]

            const newAttributes = {
                ...attributes,
                ATK:
                    (attributes['ATK'] || 0) *
                    (1 + attackBonusPerStack[state.weaponRefinement - 1]),
                'Elemental Mastery':
                    (attributes['Elemental Mastery'] || 0) +
                    elementalMasteryBonusPerStack[state.weaponRefinement - 1],
            }
            return { attributes: newAttributes }
        },
        enabled: false,
        priority: 1,
    },
]

const MissiveWindspear: Weapon = {
    name: 'Missive Windspear',
    image: 'https://api.ambr.top/assets/UI/UI_EquipIcon_Pole_Windvane.png',
    type: 'Polearm',
    rarity: 4,
    description:
        'A beacon that shows the direction of the wind. Not every idyll carried on the breeze remains a gentle thing...',
    effectName: 'The Wind Unattained',
    effectDescription:
        'Within 10s after an Elemental Reaction is triggered, ATK is increased by 12% and Elemental Mastery is increased by 48.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus ATK': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus ATK': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus ATK': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus ATK': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus ATK': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus ATK': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus ATK': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus ATK': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus ATK': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus ATK': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus ATK': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus ATK': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus ATK': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus ATK': 0.4135,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    Within <span style={{ color: '#ddd' }}>10s</span> after an
                    Elemental Reaction is triggered, ATK is increased by{' '}
                    <span style={{ color: '#ddd' }}>12%</span> and Elemental Mastery
                    is increased by <span style={{ color: '#ddd' }}>48</span>.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    Within <span style={{ color: '#ddd' }}>10s</span> after an
                    Elemental Reaction is triggered, ATK is increased by{' '}
                    <span style={{ color: '#ddd' }}>15%</span> and Elemental Mastery
                    is increased by <span style={{ color: '#ddd' }}>60</span>.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    Within <span style={{ color: '#ddd' }}>10s</span> after an
                    Elemental Reaction is triggered, ATK is increased by{' '}
                    <span style={{ color: '#ddd' }}>18%</span> and Elemental Mastery
                    is increased by <span style={{ color: '#ddd' }}>72</span>.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    Within <span style={{ color: '#ddd' }}>10s</span> after an
                    Elemental Reaction is triggered, ATK is increased by{' '}
                    <span style={{ color: '#ddd' }}>21%</span> and Elemental Mastery
                    is increased by <span style={{ color: '#ddd' }}>84</span>.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    Within <span style={{ color: '#ddd' }}>10s</span> after an
                    Elemental Reaction is triggered, ATK is increased by{' '}
                    <span style={{ color: '#ddd' }}>24%</span> and Elemental Mastery
                    is increased by <span style={{ color: '#ddd' }}>96</span>.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default MissiveWindspear
