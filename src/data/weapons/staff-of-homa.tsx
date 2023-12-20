import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Reckless Cinnabar',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement)
                return { attributes }

            const hpBonus = [0.2, 0.25, 0.3, 0.35, 0.4]
            const attackBonusPerStack = [0.008, 0.01, 0.012, 0.014, 0.016]
            const hpLowAttackBonusPerStack = [0.018, 0.022, 0.026, 0.03, 0.034]

            let attackBonus = 0
            let newHealth =
                (attributes['HP'] || 0) + hpBonus[state.weaponRefinement - 1]

            if (currentStacks === 1) {
                attackBonus = attackBonusPerStack[state.weaponRefinement - 1]
            } else if (currentStacks === 2) {
                attackBonus = hpLowAttackBonusPerStack[state.weaponRefinement - 1]
            }

            const newAttributes = {
                ...attributes,
                HP: newHealth,
                ATK: (attributes['ATK'] || 0) + newHealth * attackBonus,
            }
            return { attributes: newAttributes }
        },
        maxStacks: 2,
        stackOptions: ['Off', '>50% HP', '<=50% HP'],
        priority: 2,
    },
]

const StaffOfHoma: Weapon = {
    name: 'Staff of Homa',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13501_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 5,
    description:
        'A "firewood staff" that was once used in ancient and long-lost rituals.',
    effectName: 'Reckless Cinnabar',
    effectDescription:
        "HP increased by 20%. Additionally, provides an ATK Bonus based on 0.8% of the wielder's Max HP. When the wielder's HP is less than 50%, this ATK Bonus is increased by an additional 1% of Max HP.",
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus CRIT DMG': 0.144,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus CRIT DMG': 0.2544,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus CRIT DMG': 0.2544,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus CRIT DMG': 0.3708,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus CRIT DMG': 0.3708,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus CRIT DMG': 0.429,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus CRIT DMG': 0.429,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus CRIT DMG': 0.4872,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus CRIT DMG': 0.4872,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus CRIT DMG': 0.5452,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus CRIT DMG': 0.5452,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus CRIT DMG': 0.6034,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus CRIT DMG': 0.6034,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus CRIT DMG': 0.6615,
        },
    },
    refinements: [
        {
            description: (
                <span>
                    HP is increased by <span style={{ color: '#ddd' }}>20%</span>.
                    Additionally, provides an ATK Bonus based on{' '}
                    <span style={{ color: '#ddd' }}>0.8%</span> of the wielder's Max
                    HP. This bonus increases to{' '}
                    <span style={{ color: '#ddd' }}>1.8%</span> if the wielder is
                    less than 50% HP
                </span>
            ),
            level: 1,
        },
        {
            description: (
                <span>
                    HP is increased by <span style={{ color: '#ddd' }}>25%</span>.
                    Additionally, provides an ATK Bonus based on{' '}
                    <span style={{ color: '#ddd' }}>1%</span> of the wielder's Max
                    HP. This bonus increases to{' '}
                    <span style={{ color: '#ddd' }}>2.2%</span> if the wielder is
                    less than 50% HP
                </span>
            ),
            level: 2,
        },
        {
            description: (
                <span>
                    HP is increased by <span style={{ color: '#ddd' }}>30%</span>.
                    Additionally, provides an ATK Bonus based on{' '}
                    <span style={{ color: '#ddd' }}>1.2%</span> of the wielder's Max
                    HP. This bonus increases to{' '}
                    <span style={{ color: '#ddd' }}>2.6%</span> if the wielder is
                    less than 50% HP
                </span>
            ),
            level: 3,
        },
        {
            description: (
                <span>
                    HP is increased by <span style={{ color: '#ddd' }}>35%</span>.
                    Additionally, provides an ATK Bonus based on{' '}
                    <span style={{ color: '#ddd' }}>1.4%</span> of the wielder's Max
                    HP. This bonus increases to{' '}
                    <span style={{ color: '#ddd' }}>3%</span> if the wielder is less
                    than 50% HP
                </span>
            ),
            level: 4,
        },
        {
            description: (
                <span>
                    HP is increased by <span style={{ color: '#ddd' }}>40%</span>.
                    Additionally, provides an ATK Bonus based on{' '}
                    <span style={{ color: '#ddd' }}>1.6%</span> of the wielder's Max
                    HP. This bonus increases to{' '}
                    <span style={{ color: '#ddd' }}>3.4%</span> if the wielder is
                    less than 50% HP
                </span>
            ),
            level: 5,
        },
    ],
    weaponBonuses,
}

export default StaffOfHoma
