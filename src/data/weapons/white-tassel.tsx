import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Sharp',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const normalAttackBonusPerStack = [0.24, 0.3, 0.36, 0.42, 0.48]

            const newAttributes = {
                ...attributes,
                'Normal Attack DMG Bonus':
                    (attributes['Normal Attack DMG Bonus'] || 0) +
                    normalAttackBonusPerStack[state.weaponRefinement - 1],
            }
            return { attributes: newAttributes }
        },
        enabled: false,
        priority: 1,
    },
]

const WhiteTassel: Weapon = {
    name: 'White Tassel',
    image: 'https://api.ambr.top/assets/UI/UI_EquipIcon_Pole_Ruby.png',
    type: 'Polearm',
    rarity: 3,
    description:
        "A standard-issue weapon of the Millelith soldiers. It has a sturdy shaft and sharp spearhead. It's a reliable weapon.",
    effectName: 'Sharp',
    effectDescription: 'Increases Normal Attack DMG by 24%.',
    baseStats: {
        '1/20': {
            'Base ATK': 38.74,
            'Bonus CRIT Rate': 0.051,
        },
        '20/20': {
            'Base ATK': 93.75,
            'Bonus CRIT Rate': 0.0901,
        },
        '20/40': {
            'Base ATK': 113.25,
            'Bonus CRIT Rate': 0.0901,
        },
        '40/40': {
            'Base ATK': 169.27,
            'Bonus CRIT Rate': 0.1313,
        },
        '40/50': {
            'Base ATK': 188.67,
            'Bonus CRIT Rate': 0.1313,
        },
        '50/50': {
            'Base ATK': 216.1,
            'Bonus CRIT Rate': 0.1519,
        },
        '50/60': {
            'Base ATK': 235.6,
            'Bonus CRIT Rate': 0.1519,
        },
        '60/60': {
            'Base ATK': 262.72,
            'Bonus CRIT Rate': 0.1725,
        },
        '60/70': {
            'Base ATK': 282.12,
            'Bonus CRIT Rate': 0.1725,
        },
        '70/70': {
            'Base ATK': 309.01,
            'Bonus CRIT Rate': 0.1931,
        },
        '70/80': {
            'Base ATK': 328.51,
            'Bonus CRIT Rate': 0.1931,
        },
        '80/80': {
            'Base ATK': 355.28,
            'Bonus CRIT Rate': 0.2137,
        },
        '80/90': {
            'Base ATK': 374.68,
            'Bonus CRIT Rate': 0.2137,
        },
        '90/90': {
            'Base ATK': 401.29,
            'Bonus CRIT Rate': 0.2343,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    Increases Normal Attack DMG by{' '}
                    <span style={{ color: '#ddd' }}>24%</span>.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    Increases Normal Attack DMG by{' '}
                    <span style={{ color: '#ddd' }}>30%</span>.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    Increases Normal Attack DMG by{' '}
                    <span style={{ color: '#ddd' }}>36%</span>.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    Increases Normal Attack DMG by{' '}
                    <span style={{ color: '#ddd' }}>42%</span>.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    Increases Normal Attack DMG by{' '}
                    <span style={{ color: '#ddd' }}>48%</span>.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default WhiteTassel
