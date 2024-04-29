import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Black Wing',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const critRateBonusPerStack = [0.08, 0.1, 0.12, 0.14, 0.16]

            const newAttributes = {
                ...attributes,
                'CRIT Rate':
                    (attributes['CRIT Rate'] || 0) +
                    critRateBonusPerStack[state.weaponRefinement - 1],
            }
            return { attributes: newAttributes }
        },
        enabled: false,
        priority: 1,
    },
]

const SkywardSpine: Weapon = {
    name: 'Skyward Spine',
    image: 'https://api.ambr.top/assets/UI/UI_EquipIcon_Pole_Dvalin.png',
    type: 'Polearm',
    rarity: 5,
    description:
        "A polearm that symbolizes Dvalin's firm resolve. The upright shaft of this weapon points towards the heavens, clad in the might of sky and wind.",
    effectName: 'Black Wing',
    effectDescription:
        'Increases CRIT Rate by 8% and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on opponents have a 50% chance to trigger a vacuum blade that deals 40% of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.',
    baseStats: {
        '1/20': {
            'Base ATK': 47.54,
            'Bonus Energy Recharge': 0.08,
        },
        '20/20': {
            'Base ATK': 133.29,
            'Bonus Energy Recharge': 0.1414,
        },
        '20/40': {
            'Base ATK': 164.39,
            'Bonus Energy Recharge': 0.1414,
        },
        '40/40': {
            'Base ATK': 260.56,
            'Bonus Energy Recharge': 0.206,
        },
        '40/50': {
            'Base ATK': 291.66,
            'Bonus Energy Recharge': 0.206,
        },
        '50/50': {
            'Base ATK': 341.43,
            'Bonus Energy Recharge': 0.2383,
        },
        '50/60': {
            'Base ATK': 372.63,
            'Bonus Energy Recharge': 0.2383,
        },
        '60/60': {
            'Base ATK': 423.4,
            'Bonus Energy Recharge': 0.2706,
        },
        '60/70': {
            'Base ATK': 454.5,
            'Bonus Energy Recharge': 0.2706,
        },
        '70/70': {
            'Base ATK': 506.22,
            'Bonus Energy Recharge': 0.3029,
        },
        '70/80': {
            'Base ATK': 537.32,
            'Bonus Energy Recharge': 0.3029,
        },
        '80/80': {
            'Base ATK': 589.85,
            'Bonus Energy Recharge': 0.3352,
        },
        '80/90': {
            'Base ATK': 620.95,
            'Bonus Energy Recharge': 0.3352,
        },
        '90/90': {
            'Base ATK': 674.33,
            'Bonus Energy Recharge': 0.3675,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    Increases CRIT Rate by <span style={{ color: '#ddd' }}>8%</span>{' '}
                    and increases Normal ATK SPD by{' '}
                    <span style={{ color: '#ddd' }}>12%</span>. Additionally, Normal
                    and Charged Attacks hits on opponents have a{' '}
                    <span style={{ color: '#ddd' }}>50%</span> chance to trigger a
                    vacuum blade that deals{' '}
                    <span style={{ color: '#ddd' }}>40%</span> of ATK as DMG in a
                    small AoE. This effect can occur no more than once every{' '}
                    <span style={{ color: '#ddd' }}>2s</span>.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    Increases CRIT Rate by <span style={{ color: '#ddd' }}>10%</span>{' '}
                    and increases Normal ATK SPD by{' '}
                    <span style={{ color: '#ddd' }}>12%</span>. Additionally, Normal
                    and Charged Attacks hits on opponents have a{' '}
                    <span style={{ color: '#ddd' }}>50%</span> chance to trigger a
                    vacuum blade that deals{' '}
                    <span style={{ color: '#ddd' }}>55%</span> of ATK as DMG in a
                    small AoE. This effect can occur no more than once every{' '}
                    <span style={{ color: '#ddd' }}>2s</span>.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    Increases CRIT Rate by <span style={{ color: '#ddd' }}>12%</span>{' '}
                    and increases Normal ATK SPD by{' '}
                    <span style={{ color: '#ddd' }}>12%</span>. Additionally, Normal
                    and Charged Attacks hits on opponents have a{' '}
                    <span style={{ color: '#ddd' }}>50%</span> chance to trigger a
                    vacuum blade that deals{' '}
                    <span style={{ color: '#ddd' }}>70%</span> of ATK as DMG in a
                    small AoE. This effect can occur no more than once every{' '}
                    <span style={{ color: '#ddd' }}>2s</span>.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    Increases CRIT Rate by <span style={{ color: '#ddd' }}>14%</span>{' '}
                    and increases Normal ATK SPD by{' '}
                    <span style={{ color: '#ddd' }}>12%</span>. Additionally, Normal
                    and Charged Attacks hits on opponents have a{' '}
                    <span style={{ color: '#ddd' }}>50%</span> chance to trigger a
                    vacuum blade that deals{' '}
                    <span style={{ color: '#ddd' }}>85%</span> of ATK as DMG in a
                    small AoE. This effect can occur no more than once every{' '}
                    <span style={{ color: '#ddd' }}>2s</span>.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    Increases CRIT Rate by <span style={{ color: '#ddd' }}>16%</span>{' '}
                    and increases Normal ATK SPD by{' '}
                    <span style={{ color: '#ddd' }}>12%</span>. Additionally, Normal
                    and Charged Attacks hits on opponents have a{' '}
                    <span style={{ color: '#ddd' }}>50%</span> chance to trigger a
                    vacuum blade that deals{' '}
                    <span style={{ color: '#ddd' }}>100%</span> of ATK as DMG in a
                    small AoE. This effect can occur no more than once every{' '}
                    <span style={{ color: '#ddd' }}>2s</span>.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default SkywardSpine
