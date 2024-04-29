import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Eagle Spear of Justice',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const attackBonusPerStack = [0.032, 0.039, 0.046, 0.053, 0.06]
            const bonusDamage = [0.12, 0.15, 0.18, 0.21, 0.24]

            let extraDMG = 0

            if (currentStacks === 7) {
                extraDMG = bonusDamage[state.weaponRefinement - 1]
            }

            const newAttributes = {
                ...attributes,
                ATK:
                    (attributes['ATK'] || 0) *
                    (1 +
                        currentStacks *
                            attackBonusPerStack[state.weaponRefinement - 1]),
                'All DMG Bonus': (attributes['All DMG Bonus'] || 0) + extraDMG,
            }
            return { attributes: newAttributes }
        },
        maxStacks: 7,
        stackOptions: [
            'Off',
            '1 Stack',
            '2 Stacks',
            '3 Stacks',
            '4 Stacks',
            '5 Stacks',
            '6 Stacks',
            '7 Stacks',
        ],
        priority: 1,
    },
]

const PrimordialJadeWingedspear: Weapon = {
    name: 'Primordial Jade Winged-Spear',
    image: '/images/weapons/UI_EquipIcon_Pole_Morax.png',
    type: 'Polearm',
    rarity: 5,
    description:
        'A jade polearm made by the archons, capable of slaying ancient beasts.',
    effectName: 'Eagle Spear of Justice',
    effectDescription:
        'On hit, increases ATK by 3.2% for 6s. Max 7 stacks. This effect can only occur once every 0.3s. While in possession of the maximum possible stacks, DMG dealt is increased by 12%.',
    baseStats: {
        '1/20': {
            'Base ATK': 47.54,
            'Bonus CRIT Rate': 0.048,
        },
        '20/20': {
            'Base ATK': 133.29,
            'Bonus CRIT Rate': 0.0848,
        },
        '20/40': {
            'Base ATK': 164.39,
            'Bonus CRIT Rate': 0.0848,
        },
        '40/40': {
            'Base ATK': 260.56,
            'Bonus CRIT Rate': 0.1236,
        },
        '40/50': {
            'Base ATK': 291.66,
            'Bonus CRIT Rate': 0.1236,
        },
        '50/50': {
            'Base ATK': 341.43,
            'Bonus CRIT Rate': 0.143,
        },
        '50/60': {
            'Base ATK': 372.63,
            'Bonus CRIT Rate': 0.143,
        },
        '60/60': {
            'Base ATK': 423.4,
            'Bonus CRIT Rate': 0.1624,
        },
        '60/70': {
            'Base ATK': 454.5,
            'Bonus CRIT Rate': 0.1624,
        },
        '70/70': {
            'Base ATK': 506.22,
            'Bonus CRIT Rate': 0.1817,
        },
        '70/80': {
            'Base ATK': 537.32,
            'Bonus CRIT Rate': 0.1817,
        },
        '80/80': {
            'Base ATK': 589.85,
            'Bonus CRIT Rate': 0.2011,
        },
        '80/90': {
            'Base ATK': 620.95,
            'Bonus CRIT Rate': 0.2011,
        },
        '90/90': {
            'Base ATK': 674.33,
            'Bonus CRIT Rate': 0.2205,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    On hit, increases ATK by{' '}
                    <span style={{ color: '#ddd' }}>3.2%</span> for{' '}
                    <span style={{ color: '#ddd' }}>6s</span>. Max 7 stacks. This
                    effect can only occur once every{' '}
                    <span style={{ color: '#ddd' }}>0.3s</span>. While in possession
                    of the maximum possible stacks, DMG dealt is increased by{' '}
                    <span style={{ color: '#ddd' }}>12%</span>.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    On hit, increases ATK by{' '}
                    <span style={{ color: '#ddd' }}>3.9%</span> for{' '}
                    <span style={{ color: '#ddd' }}>6s</span>. Max 7 stacks. This
                    effect can only occur once every{' '}
                    <span style={{ color: '#ddd' }}>0.3s</span>. While in possession
                    of the maximum possible stacks, DMG dealt is increased by{' '}
                    <span style={{ color: '#ddd' }}>15%</span>.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    On hit, increases ATK by{' '}
                    <span style={{ color: '#ddd' }}>4.6%</span> for{' '}
                    <span style={{ color: '#ddd' }}>6s</span>. Max 7 stacks. This
                    effect can only occur once every{' '}
                    <span style={{ color: '#ddd' }}>0.3s</span>. While in possession
                    of the maximum possible stacks, DMG dealt is increased by{' '}
                    <span style={{ color: '#ddd' }}>18%</span>.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    On hit, increases ATK by{' '}
                    <span style={{ color: '#ddd' }}>5.3%</span> for{' '}
                    <span style={{ color: '#ddd' }}>6s</span>. Max 7 stacks. This
                    effect can only occur once every{' '}
                    <span style={{ color: '#ddd' }}>0.3s</span>. While in possession
                    of the maximum possible stacks, DMG dealt is increased by{' '}
                    <span style={{ color: '#ddd' }}>21%</span>.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    On hit, increases ATK by{' '}
                    <span style={{ color: '#ddd' }}>6%</span> for{' '}
                    <span style={{ color: '#ddd' }}>6s</span>. Max 7 stacks. This
                    effect can only occur once every{' '}
                    <span style={{ color: '#ddd' }}>0.3s</span>. While in possession
                    of the maximum possible stacks, DMG dealt is increased by{' '}
                    <span style={{ color: '#ddd' }}>24%</span>.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default PrimordialJadeWingedspear
