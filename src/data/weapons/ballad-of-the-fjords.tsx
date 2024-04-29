import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Tales of the Tundra',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const elementalMasteryBonusPerStack = [120, 150, 180, 210, 240]

            const newAttributes = {
                ...attributes,
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

const BalladOfTheFjords: Weapon = {
    name: 'Ballad of the Fjords',
    image: 'https://api.ambr.top/assets/UI/UI_EquipIcon_Pole_Shanty.png',
    type: 'Polearm',
    rarity: 4,
    description:
        'A polearm used by those seeking to catch fish in the tundra. It lets none escape.',
    effectName: 'Tales of the Tundra',
    effectDescription:
        'When there are at least 3 different Elemental Types in your party, Elemental Mastery will be increased by 120.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus CRIT Rate': 0.06,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus CRIT Rate': 0.106,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus CRIT Rate': 0.106,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus CRIT Rate': 0.1545,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus CRIT Rate': 0.1787,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus CRIT Rate': 0.1787,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus CRIT Rate': 0.203,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus CRIT Rate': 0.203,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus CRIT Rate': 0.2272,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus CRIT Rate': 0.2514,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus CRIT Rate': 0.2514,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus CRIT Rate': 0.2756,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    When there are at least <span style={{ color: '#ddd' }}>3</span>{' '}
                    different Elemental Types in your party, Elemental Mastery will
                    be increased by <span style={{ color: '#ddd' }}>120</span>.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    When there are at least <span style={{ color: '#ddd' }}>3</span>{' '}
                    different Elemental Types in your party, Elemental Mastery will
                    be increased by <span style={{ color: '#ddd' }}>150</span>.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    When there are at least <span style={{ color: '#ddd' }}>3</span>{' '}
                    different Elemental Types in your party, Elemental Mastery will
                    be increased by <span style={{ color: '#ddd' }}>180</span>.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    When there are at least <span style={{ color: '#ddd' }}>3</span>{' '}
                    different Elemental Types in your party, Elemental Mastery will
                    be increased by <span style={{ color: '#ddd' }}>210</span>.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    When there are at least <span style={{ color: '#ddd' }}>3</span>{' '}
                    different Elemental Types in your party, Elemental Mastery will
                    be increased by <span style={{ color: '#ddd' }}>240</span>.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default BalladOfTheFjords
