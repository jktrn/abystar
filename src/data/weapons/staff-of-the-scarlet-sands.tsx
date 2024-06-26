import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: "Heat Haze at Horizon's End",
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const elementalMasterytoAttackScaling = [0.52, 0.65, 0.78, 0.91, 1.04]
            const elementalMasterytoAttackBonusPerStack = [
                0.28, 0.35, 0.42, 0.49, 0.56,
            ]

            let newAttack =
                (attributes['Elemental Mastery'] || 0) *
                elementalMasterytoAttackScaling[state.weaponRefinement - 1]
            let stackNewAttack =
                (attributes['Elemental Mastery'] || 0) *
                (currentStacks *
                    elementalMasterytoAttackBonusPerStack[
                        state.weaponRefinement - 1
                    ])

            const newAttributes = {
                ...attributes,
                ATK: (attributes['ATK'] || 0) + newAttack + stackNewAttack,
            }
            return { attributes: newAttributes }
        },
        maxStacks: 3,
        stackOptions: ['Off', '1 Stack', '2 Stacks', '3 Stacks'],
        priority: 2,
    },
]

const StaffOfTheScarletSands: Weapon = {
    name: 'Staff of the Scarlet Sands',
    image: '/images/weapons/UI_EquipIcon_Pole_Deshret.png',
    type: 'Polearm',
    rarity: 5,
    description:
        'One of a paired set of scepters fashioned from obsidian. Legend has it that these staves grant the right to lead the people of the desert, but no retainer now lives who can verify the proper appearance of these regalia.',
    effectName: "Heat Haze at Horizon's End",
    effectDescription:
        'The equipping character gains 52% of their Elemental Mastery as bonus ATK. When an Elemental Skill hits opponents, the Dream of the Scarlet Sands effect will be gained for 10s: The equipping character will gain 28% of their Elemental Mastery as bonus ATK. Max 3 stacks.',
    baseStats: {
        '1/20': {
            'Base ATK': 44.34,
            'Bonus CRIT Rate': 0.096,
        },
        '20/20': {
            'Base ATK': 110.17,
            'Bonus CRIT Rate': 0.1696,
        },
        '20/40': {
            'Base ATK': 141.27,
            'Bonus CRIT Rate': 0.1696,
        },
        '40/40': {
            'Base ATK': 209.82,
            'Bonus CRIT Rate': 0.2472,
        },
        '40/50': {
            'Base ATK': 240.92,
            'Bonus CRIT Rate': 0.2472,
        },
        '50/50': {
            'Base ATK': 275.46,
            'Bonus CRIT Rate': 0.286,
        },
        '50/60': {
            'Base ATK': 306.66,
            'Bonus CRIT Rate': 0.286,
        },
        '60/60': {
            'Base ATK': 341.46,
            'Bonus CRIT Rate': 0.3248,
        },
        '60/70': {
            'Base ATK': 372.56,
            'Bonus CRIT Rate': 0.3248,
        },
        '70/70': {
            'Base ATK': 407.81,
            'Bonus CRIT Rate': 0.3635,
        },
        '70/80': {
            'Base ATK': 438.91,
            'Bonus CRIT Rate': 0.3635,
        },
        '80/80': {
            'Base ATK': 474.55,
            'Bonus CRIT Rate': 0.4022,
        },
        '80/90': {
            'Base ATK': 505.65,
            'Bonus CRIT Rate': 0.4022,
        },
        '90/90': {
            'Base ATK': 541.83,
            'Bonus CRIT Rate': 0.441,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    The equipping character gains{' '}
                    <span style={{ color: '#ddd' }}>52%</span> of their Elemental
                    Mastery as bonus ATK. When an Elemental Skill hits opponents, the
                    Dream of the Scarlet Sands effect will be gained for{' '}
                    <span style={{ color: '#ddd' }}>10s</span>: The equipping
                    character will gain <span style={{ color: '#ddd' }}>28%</span> of
                    their Elemental Mastery as bonus ATK. Max 3 stacks.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    The equipping character gains{' '}
                    <span style={{ color: '#ddd' }}>65%</span> of their Elemental
                    Mastery as bonus ATK. When an Elemental Skill hits opponents, the
                    Dream of the Scarlet Sands effect will be gained for{' '}
                    <span style={{ color: '#ddd' }}>10s</span>: The equipping
                    character will gain <span style={{ color: '#ddd' }}>35%</span> of
                    their Elemental Mastery as bonus ATK. Max 3 stacks.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    The equipping character gains{' '}
                    <span style={{ color: '#ddd' }}>78%</span> of their Elemental
                    Mastery as bonus ATK. When an Elemental Skill hits opponents, the
                    Dream of the Scarlet Sands effect will be gained for{' '}
                    <span style={{ color: '#ddd' }}>10s</span>: The equipping
                    character will gain <span style={{ color: '#ddd' }}>42%</span> of
                    their Elemental Mastery as bonus ATK. Max 3 stacks.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    The equipping character gains{' '}
                    <span style={{ color: '#ddd' }}>91%</span> of their Elemental
                    Mastery as bonus ATK. When an Elemental Skill hits opponents, the
                    Dream of the Scarlet Sands effect will be gained for{' '}
                    <span style={{ color: '#ddd' }}>10s</span>: The equipping
                    character will gain <span style={{ color: '#ddd' }}>49%</span> of
                    their Elemental Mastery as bonus ATK. Max 3 stacks.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    The equipping character gains{' '}
                    <span style={{ color: '#ddd' }}>104%</span> of their Elemental
                    Mastery as bonus ATK. When an Elemental Skill hits opponents, the
                    Dream of the Scarlet Sands effect will be gained for{' '}
                    <span style={{ color: '#ddd' }}>10s</span>: The equipping
                    character will gain <span style={{ color: '#ddd' }}>56%</span> of
                    their Elemental Mastery as bonus ATK. Max 3 stacks.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default StaffOfTheScarletSands
