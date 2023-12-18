import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: "A Thousand Nights' Dawnsong",
        effect: (
            attributes,
            initialAttributes,
            talentLevels,
            currentStacks,
            state
        ) => {
            if (
                !currentStacks ||
                currentStacks === 0 ||
                !state ||
                !state.weaponRefinement
            )
                return { attributes }

            const elementalMasteryBonusPerStack = [32, 40, 48, 56, 64]
            const elementalTypeDmgBonusPerStack = [0.1, 0.12, 0.14, 0.16, 0.18]

            return {
                attributes: {
                    ...attributes,
                    'Elemental Mastery':
                        (attributes['Elemental Mastery'] || 0) +
                        elementalMasteryBonusPerStack[state.weaponRefinement - 1] *
                            (currentStacks - 1),
                    [`${state.character.vision} DMG Bonus`]:
                        (attributes[`${state.character.vision} DMG Bonus`] || 0) +
                        elementalTypeDmgBonusPerStack[state.weaponRefinement - 1] *
                            (4 - currentStacks),
                },
            }
        },
        maxStacks: 3,
        stackOptions: ['Off', 'O Same', '1 Same', '2 Same', '3 Same'],
    },
]

const AThousandFloatingDreams: Weapon = {
    name: 'A Thousand Floating Dreams',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14511_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 5,
    description:
        'This lamp illuminates the dreams that float up over a thousand nights, and in its emerald-green light flows a song of ancient days.',
    effectName: "A Thousand Nights' Dawnsong",
    effectDescription:
        "Party members other than the equipping character will provide the equipping character with buffs based on whether their Elemental Type is the same as the latter or not. If their Elemental Types are the same, increase Elemental Mastery by 32. If not, increase the equipping character's DMG Bonus from their Elemental Type by 10%. Each of the aforementioned effects can have up to 3 stacks. Additionally, all nearby party members other than the equipping character will have their Elemental Mastery increased by 40. Multiple such effects from multiple such weapons can stack.",
    baseStats: {
        '1/20': {
            'Base ATK': 44.34,
            'Bonus Elemental Mastery': 57.6,
        },
        '20/20': {
            'Base ATK': 110.17,
            'Bonus Elemental Mastery': 101.78,
        },
        '20/40': {
            'Base ATK': 141.27,
            'Bonus Elemental Mastery': 101.78,
        },
        '40/40': {
            'Base ATK': 209.82,
            'Bonus Elemental Mastery': 148.32,
        },
        '40/50': {
            'Base ATK': 240.92,
            'Bonus Elemental Mastery': 148.32,
        },
        '50/50': {
            'Base ATK': 275.46,
            'Bonus Elemental Mastery': 171.59,
        },
        '50/60': {
            'Base ATK': 306.66,
            'Bonus Elemental Mastery': 171.59,
        },
        '60/60': {
            'Base ATK': 341.46,
            'Bonus Elemental Mastery': 194.86,
        },
        '60/70': {
            'Base ATK': 372.56,
            'Bonus Elemental Mastery': 194.86,
        },
        '70/70': {
            'Base ATK': 407.81,
            'Bonus Elemental Mastery': 218.07,
        },
        '70/80': {
            'Base ATK': 438.91,
            'Bonus Elemental Mastery': 218.07,
        },
        '80/80': {
            'Base ATK': 474.55,
            'Bonus Elemental Mastery': 241.34,
        },
        '80/90': {
            'Base ATK': 505.65,
            'Bonus Elemental Mastery': 241.34,
        },
        '90/90': {
            'Base ATK': 541.83,
            'Bonus Elemental Mastery': 264.61,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    The wielder will gain buffs based on whether their Elemental Type
                    is the same as their party members. Same: Increase Elemental
                    Mastery by <span style={{ color: '#ddd' }}>32</span>. Different:
                    Increase DMG Bonus from their Elemental Type by{' '}
                    <span style={{ color: '#ddd' }}>10%</span>. Collectively, these
                    effects can have up to 3 stacks.
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    The wielder will gain buffs based on whether their Elemental Type
                    is the same as their party members. Same: Increase Elemental
                    Mastery by <span style={{ color: '#ddd' }}>40</span>. Different:
                    Increase DMG Bonus from their Elemental Type by{' '}
                    <span style={{ color: '#ddd' }}>12%</span>. Collectively, these
                    effects can have up to 3 stacks.
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    The wielder will gain buffs based on whether their Elemental Type
                    is the same as their party members. Same: Increase Elemental
                    Mastery by <span style={{ color: '#ddd' }}>48</span>. Different:
                    Increase DMG Bonus from their Elemental Type by{' '}
                    <span style={{ color: '#ddd' }}>14%</span>. Collectively, these
                    effects can have up to 3 stacks.
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    The wielder will gain buffs based on whether their Elemental Type
                    is the same as their party members. Same: Increase Elemental
                    Mastery by <span style={{ color: '#ddd' }}>56</span>. Different:
                    Increase DMG Bonus from their Elemental Type by{' '}
                    <span style={{ color: '#ddd' }}>16%</span>. Collectively, these
                    effects can have up to 3 stacks.
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    The wielder will gain buffs based on whether their Elemental Type
                    is the same as their party members. Same: Increase Elemental
                    Mastery by <span style={{ color: '#ddd' }}>64</span>. Different:
                    Increase DMG Bonus from their Elemental Type by{' '}
                    <span style={{ color: '#ddd' }}>18%</span>. Collectively, these
                    effects can have up to 3 stacks.
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default AThousandFloatingDreams
