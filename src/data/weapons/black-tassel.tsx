import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Bane of the Soft',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const slimeDamageBonusPerStack = [0.4, 0.5, 0.6, 0.7, 0.8]

            const newAttributes = {
                ...attributes,
                'All DMG Bonus':
                    (attributes['All DMG Bonus'] || 0) +
                    slimeDamageBonusPerStack[state.weaponRefinement - 1],
            }
            return { attributes: newAttributes }
        },
        enabled: false,
        priority: 1,
    },
]

const BlackTassel: Weapon = {
    name: 'Black Tassel',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13303_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 3,
    description:
        'An exceptionally powerful polearm that also offers a simple but elegant solution to the issue of the easily stained white tassel.',
    effectName: 'Bane of the Soft',
    effectDescription: 'Increases DMG against slimes by 40%.',
    baseStats: {
        '1/20': {
            'Base ATK': 37.61,
            'Bonus HP': 0.1021,
        },
        '20/20': {
            'Base ATK': 85.56,
            'Bonus HP': 0.1805,
        },
        '20/40': {
            'Base ATK': 105.06,
            'Bonus HP': 0.1805,
        },
        '40/40': {
            'Base ATK': 151.28,
            'Bonus HP': 0.263,
        },
        '40/50': {
            'Base ATK': 170.68,
            'Bonus HP': 0.263,
        },
        '50/50': {
            'Base ATK': 192.71,
            'Bonus HP': 0.3043,
        },
        '50/60': {
            'Base ATK': 212.21,
            'Bonus HP': 0.3043,
        },
        '60/60': {
            'Base ATK': 233.69,
            'Bonus HP': 0.3455,
        },
        '60/70': {
            'Base ATK': 253.09,
            'Bonus HP': 0.3455,
        },
        '70/70': {
            'Base ATK': 274.19,
            'Bonus HP': 0.3867,
        },
        '70/80': {
            'Base ATK': 293.69,
            'Bonus HP': 0.3867,
        },
        '80/80': {
            'Base ATK': 314.45,
            'Bonus HP': 0.4279,
        },
        '80/90': {
            'Base ATK': 333.85,
            'Bonus HP': 0.4279,
        },
        '90/90': {
            'Base ATK': 354.38,
            'Bonus HP': 0.4692,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    Increases DMG against slimes by{' '}
                    <span style={{ color: '#ddd' }}>40%</span>.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    Increases DMG against slimes by{' '}
                    <span style={{ color: '#ddd' }}>50%</span>.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    Increases DMG against slimes by{' '}
                    <span style={{ color: '#ddd' }}>60%</span>.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    Increases DMG against slimes by{' '}
                    <span style={{ color: '#ddd' }}>70%</span>.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    Increases DMG against slimes by{' '}
                    <span style={{ color: '#ddd' }}>80%</span>.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default BlackTassel
