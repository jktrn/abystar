import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Watatsumi Wavewalker',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const elementalBurstBonusPerStack = [
                0.0012, 0.0015, 0.0018, 0.0021, 0.0024,
            ]
            const maxBonusPerStack = [0.4, 0.5, 0.6, 0.7, 0.8]

            const newAttributes = {
                ...attributes,
                'Elemental Burst DMG Bonus':
                    (attributes['Elemental Burst DMG Bonus'] || 0) +
                    Math.min(
                        elementalBurstBonusPerStack[state.weaponRefinement - 1] *
                            ((currentStacks * 10 + 30) * 4),
                        maxBonusPerStack[state.weaponRefinement - 1]
                    ),
            }
            return { attributes: newAttributes }
        },
        maxStacks: 6,
        stackOptions: [
            'Off',
            '40 Cost',
            '50 Cost',
            '60 Cost',
            '70 Cost',
            '80 Cost',
            '90 Cost',
        ],
        priority: 1,
    },
]

const WavebreakersFin: Weapon = {
    name: "Wavebreaker's Fin",
    image: 'https://api.ambr.top/assets/UI/UI_EquipIcon_Pole_Maria.png',
    type: 'Polearm',
    rarity: 4,
    description:
        'A naginata forged from luminescent material deep in the ocean depths. It was once the possession of the tengu race.',
    effectName: 'Watatsumi Wavewalker',
    effectDescription:
        "For every point of the entire party's combined maximum Energy capacity, the Elemental Burst DMG of the character equipping this weapon is increased by 0.12%. A maximum of 40% increased Elemental Burst DMG can be achieved this way.",
    baseStats: {
        '1/20': {
            'Base ATK': 45.07,
            'Bonus ATK': 0.03,
        },
        '20/20': {
            'Base ATK': 128.22,
            'Bonus ATK': 0.053,
        },
        '20/40': {
            'Base ATK': 154.12,
            'Bonus ATK': 0.053,
        },
        '40/40': {
            'Base ATK': 247.14,
            'Bonus ATK': 0.0772,
        },
        '40/50': {
            'Base ATK': 273.14,
            'Bonus ATK': 0.0772,
        },
        '50/50': {
            'Base ATK': 320.87,
            'Bonus ATK': 0.0894,
        },
        '50/60': {
            'Base ATK': 346.77,
            'Bonus ATK': 0.0894,
        },
        '60/60': {
            'Base ATK': 395.04,
            'Bonus ATK': 0.1015,
        },
        '60/70': {
            'Base ATK': 420.94,
            'Bonus ATK': 0.1015,
        },
        '70/70': {
            'Base ATK': 469.66,
            'Bonus ATK': 0.1136,
        },
        '70/80': {
            'Base ATK': 495.66,
            'Bonus ATK': 0.1136,
        },
        '80/80': {
            'Base ATK': 544.74,
            'Bonus ATK': 0.1257,
        },
        '80/90': {
            'Base ATK': 570.64,
            'Bonus ATK': 0.1257,
        },
        '90/90': {
            'Base ATK': 620.03,
            'Bonus ATK': 0.1378,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    For every point of the entire party&apos;s combined maximum
                    Energy capacity, the Elemental Burst DMG of the character
                    equipping this weapon is increased by{' '}
                    <span style={{ color: '#ddd' }}>0.12%</span>. A maximum of{' '}
                    <span style={{ color: '#ddd' }}>40%</span> increased Elemental
                    Burst DMG can be achieved this way.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    For every point of the entire party&apos;s combined maximum
                    Energy capacity, the Elemental Burst DMG of the character
                    equipping this weapon is increased by{' '}
                    <span style={{ color: '#ddd' }}>0.15%</span>. A maximum of{' '}
                    <span style={{ color: '#ddd' }}>50%</span> increased Elemental
                    Burst DMG can be achieved this way.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    For every point of the entire party&apos;s combined maximum
                    Energy capacity, the Elemental Burst DMG of the character
                    equipping this weapon is increased by{' '}
                    <span style={{ color: '#ddd' }}>0.18%</span>. A maximum of{' '}
                    <span style={{ color: '#ddd' }}>60%</span> increased Elemental
                    Burst DMG can be achieved this way.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    For every point of the entire party&apos;s combined maximum
                    Energy capacity, the Elemental Burst DMG of the character
                    equipping this weapon is increased by{' '}
                    <span style={{ color: '#ddd' }}>0.21%</span>. A maximum of{' '}
                    <span style={{ color: '#ddd' }}>70%</span> increased Elemental
                    Burst DMG can be achieved this way.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    For every point of the entire party&apos;s combined maximum
                    Energy capacity, the Elemental Burst DMG of the character
                    equipping this weapon is increased by{' '}
                    <span style={{ color: '#ddd' }}>0.24%</span>. A maximum of{' '}
                    <span style={{ color: '#ddd' }}>80%</span> increased Elemental
                    Burst DMG can be achieved this way.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default WavebreakersFin
