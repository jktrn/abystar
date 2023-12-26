import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonuses: Bonus[] = [
    {
        name: 'Heavy',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !state || !state.weaponRefinement) {
                return { attributes }
            }

            const normalAttackAdditivePerStack = [1.6, 2.0, 2.4, 2.8, 3.2] 

            const newAttributes = {
                ...attributes,
                'Normal Attack Additive Bonus': (attributes['Normal Attack Additive Bonus'] || 0) + (normalAttackAdditivePerStack[state.weaponRefinement - 1] * attributes['ATK'])
            }
            return { attributes: newAttributes }
        },
        enabled: false,
        priority: 2
    }
]

const Halberd: Weapon = {
    name: 'Halberd',
    image: 'https://genshin.honeyhunterworld.com/img/i_n13302_gacha_icon_w145.webp',
    type: 'Polearm',
    rarity: 3,
    description:
        "A polearm with an axe blade mounted on top that can deal quite a lot of damage. It's favored by the Millelith officers.",
    effectName: 'Heavy',
    effectDescription:
        'Normal Attacks deal an additional 160% ATK as DMG. Can only occur once every 10s.',
    baseStats: {
        '1/20': {
            'Base ATK': 39.88,
            'Bonus ATK': 0.0511,
        },
        '20/20': {
            'Base ATK': 101.96,
            'Bonus ATK': 0.0902,
        },
        '20/40': {
            'Base ATK': 121.46,
            'Bonus ATK': 0.0902,
        },
        '40/40': {
            'Base ATK': 187.21,
            'Bonus ATK': 0.1315,
        },
        '40/50': {
            'Base ATK': 206.61,
            'Bonus ATK': 0.1315,
        },
        '50/50': {
            'Base ATK': 239.47,
            'Bonus ATK': 0.1521,
        },
        '50/60': {
            'Base ATK': 258.97,
            'Bonus ATK': 0.1521,
        },
        '60/60': {
            'Base ATK': 291.75,
            'Bonus ATK': 0.1728,
        },
        '60/70': {
            'Base ATK': 311.15,
            'Bonus ATK': 0.1728,
        },
        '70/70': {
            'Base ATK': 343.89,
            'Bonus ATK': 0.1933,
        },
        '70/80': {
            'Base ATK': 363.39,
            'Bonus ATK': 0.1933,
        },
        '80/80': {
            'Base ATK': 396.08,
            'Bonus ATK': 0.214,
        },
        '80/90': {
            'Base ATK': 415.48,
            'Bonus ATK': 0.214,
        },
        '90/90': {
            'Base ATK': 448.22,
            'Bonus ATK': 0.2346,
        },
    },
    refinements: [
        {
            description:
                <span>
                    Normal Attacks deal an additional <span style={{ color: '#ddd' }}>160%</span> ATK as DMG. This effect can only occur once every <span style={{ color: '#ddd' }}>10s</span>.
                </span>
                ,
            level: 1,
        },
        {
            description:
                <span>
                    Normal Attacks deal an additional <span style={{ color: '#ddd' }}>200%</span> ATK as DMG. This effect can only occur once every <span style={{ color: '#ddd' }}>10s</span>.
                </span>
                ,
            level: 2,
        },
        {
            description:
                <span>
                    Normal Attacks deal an additional <span style={{ color: '#ddd' }}>240%</span> ATK as DMG. This effect can only occur once every <span style={{ color: '#ddd' }}>10s</span>.
                </span>
                ,
            level: 3,
        },
        {
            description:
                <span>
                    Normal Attacks deal an additional <span style={{ color: '#ddd' }}>280%</span> ATK as DMG. This effect can only occur once every <span style={{ color: '#ddd' }}>10s</span>.
                </span>
                ,
            level: 4,
        },
        {
            description:
                <span>
                    Normal Attacks deal an additional <span style={{ color: '#ddd' }}>320%</span> ATK as DMG. This effect can only occur once every <span style={{ color: '#ddd' }}>10s</span>.
                </span>
                ,
            level: 5,
        },
    ],
    weaponBonuses
}

export default Halberd
