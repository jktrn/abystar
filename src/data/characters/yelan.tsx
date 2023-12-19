import { Badge } from '@/components/ui/badge'
import {
    Bonus,
    Character,
    DamageType,
    FormulaOutputType,
    FormulaType,
    TalentScaling,
} from '@/interfaces/Character'

const talentScalings: TalentScaling = {
    'Normal Attack: Stealthy Bowshot': {
        '1-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Normal Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        '2-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Normal Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        '3-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Normal Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        '4-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Normal Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'Aimed Shot': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Charged Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Charged Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'Fully-Charged Aimed Shot': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Charged Attack Additive Bonus'],
            multiplicativeBonusStat: ['Hydro DMG Bonus', 'Charged Attack DMG Bonus'],
            damageType: DamageType.Hydro,
        },
        'Breakthrough Barb DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['HP'],
            additiveBonusStat: ['Charged Attack Additive Bonus'],
            multiplicativeBonusStat: ['Hydro DMG Bonus', 'Charged Attack DMG Bonus'],
            damageType: DamageType.Hydro,
        },
        'C6 Breakthrough Barb DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['HP'],
            additiveBonusStat: ['Charged Attack Additive Bonus'],
            multiplicativeBonusStat: ['Hydro DMG Bonus', 'Charged Attack DMG Bonus'],
            damageType: DamageType.Hydro,
            minConstellation: 6,
        },
        'Plunge DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Plunging Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'Low Plunge DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Plunging Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'High Plunge DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Plunging Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
    },
    'Lingering Lifeline': {
        'Skill DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['HP'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        'Max Duration (Hold)': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        CD: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Elemental Skill CD Reduction'],
            outputType: FormulaOutputType.Time,
        },
    },
    'Depth-Clarion Dice': {
        'Skill DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['HP'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Burst DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        'Exquisite Throw DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['HP'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Burst DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        'Taking All Comers Additional Arrow': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['HP'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Burst DMG Bonus',
            ],
            damageType: DamageType.Hydro,
            minConstellation: 2,
        },
        Duration: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        CD: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Elemental Burst CD Reduction'],
            outputType: FormulaOutputType.Time,
        },
        'Energy Cost': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Generic,
        },
    },
}

const characterBonuses: Bonus[] = [
    {
        name: 'Turn Control',
        description: (
            <span>
                <Badge variant="secondary">A1</Badge> When the party has 1/2/3/4 of
                the same Elemental Type(s), Yelan&apos;s Max HP is increased by
                6%/12%/18%/30%
            </span>
        ),
        icon: '/images/characters/yelan-passive1.png',
        effect: (attributes, talentLevels, currentStacks) => {
            if (!currentStacks) return { attributes }

            const maxHPOptions = [0, 0.06, 0.12, 0.18, 0.3]

            const newAttributes = {
                ...attributes,
                HP: attributes['HP'] * (1 + maxHPOptions[currentStacks]),
            }

            return { attributes: newAttributes }
        },
        maxStacks: 4,
        stackOptions: ['Off', '1 Same', '2 Same', '3 Same', '4 Same'],
        priority: 3,
    },
    {
        name: 'Adapt With Ease',
        description: (
            <span>
                <Badge variant="secondary">A4</Badge> When{' '}
                <span style={{ color: '#ddd' }}>Exquisite Throw</span> (Elemental
                Burst) is in effect, your own active character deals 1% more DMG,
                increasing by a further 3.5% per second (up to 50%)
            </span>
        ),
        icon: '/images/characters/yelan-passive2.png',
        effect: (attributes, talentLevels, currentStacks) => {
            if (!currentStacks) return { attributes }

            const newAttributes = {
                ...attributes,
                'All DMG Bonus':
                    (attributes['All DMG Bonus'] || 0) +
                    (1 + 3.5 * (currentStacks - 1)) / 100,
            }

            return { attributes: newAttributes }
        },
        maxStacks: 15,
        stackOptions: [
            'Off',
            '0s',
            '1s',
            '2s',
            '3s',
            '4s',
            '5s',
            '6s',
            '7s',
            '8s',
            '9s',
            '10s',
            '11s',
            '12s',
            '13s',
            '14s',
        ],
        priority: 1,
    },
    {
        name: 'Bait-And-Switch',
        description: (
            <span>
                <Badge variant="secondary">C4</Badge> Increases all party
                members&apos; Max HP by 10% for 25s for every opponent marked by{' '}
                <span style={{ color: '#ddd' }}>Lifeline</span> when the Lifeline
                explodes (up to 40% Max HP)
            </span>
        ),
        icon: '/images/characters/yelan-constellation4.png',
        effect: (attributes, talentLevels, currentStacks) => {
            if (!currentStacks) return { attributes }

            const newAttributes = {
                ...attributes,
                HP: attributes['HP'] * (1 + 0.1 * currentStacks),
            }

            return { attributes: newAttributes }
        },
        maxStacks: 4,
        stackOptions: ['Off', '1 Stack', '2 Stacks', '3 Stacks', '4 Stacks'],
        minConstellation: 4,
        priority: 3,
    },
]

const constellationBonuses: Bonus[] = [
    {
        name: 'Enter the Plotters',
        description: (
            <span>
                <span style={{ color: '#ddd' }}>Lingering Lifeline</span> (Elemental
                Skill) gains 1 additional charge
            </span>
        ),
        icon: '/images/characters/yelan-constellation1.png',
        effect: (attributes) => {
            // * Unimplementable
            return { attributes }
        },
        minConstellation: 1,
    },
    {
        name: 'Taking All Comers',
        description: (
            <span>
                When <span style={{ color: '#ddd' }}>Exquisite Throw</span>{' '}
                (Elemental Burst) conducts a coordinated attack, it will fire an
                additional water arrow that will deal 14% of Yelan&apos;s Max HP as{' '}
                <span style={{ color: '#3d9bc1' }}>Hydro DMG</span>
                {''}. This effect can trigger once every 1.8s.
            </span>
        ),
        icon: '/images/characters/yelan-constellation2.png',
        effect: (attributes) => {
            // * Already handled in talentScalings
            return { attributes }
        },
        minConstellation: 2,
    },
    {
        name: "Beware the Trickster's Dice",
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>Depth-Clarion Dice</span> by 3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/yelan-constellation3.png',
        effect: (attributes, talentLevels) => {
            if (!talentLevels) return { attributes }

            const newTalentLevels = [...talentLevels]
            newTalentLevels[1] = Math.min(newTalentLevels[1] + 3, 13)

            return { attributes: attributes, updatedTalentLevels: newTalentLevels }
        },
        minConstellation: 3,
        priority: 0,
    },
    {
        name: 'Bait-And-Switch',
        description: (
            <span>
                Increases all party members&apos; Max HP by 10% for 25s for every
                opponent marked by <span style={{ color: '#ddd' }}>Lifeline</span>{' '}
                when the Lifeline explodes. A maximum increase of 40% Max HP can be
                attained in this manner.
            </span>
        ),
        icon: '/images/characters/yelan-constellation4.png',
        effect: (attributes) => {
            // * Already handled in characterBonuses
            return { attributes }
        },
        minConstellation: 4,
    },
    {
        name: "Dealer's Sleight",
        description: (
            <span>
                Increase the Level of{' '}
                <span style={{ color: '#DDD' }}>Lingering Lifeline</span> by 3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/yelan-constellation5.png',
        effect: (attributes, talentLevels) => {
            if (!talentLevels) return { attributes }

            const newTalentLevels = [...talentLevels]
            newTalentLevels[2] = Math.min(newTalentLevels[2] + 3, 13)

            return { attributes: attributes, updatedTalentLevels: newTalentLevels }
        },
        minConstellation: 5,
        priority: 0,
    },
    {
        name: 'Winner Takes All',
        description: (
            <span>
                After using <span style={{ color: '#ddd' }}>Depth-Clarion Dice</span>{' '}
                (Elemental Burst) all of Yelan&apos;s Norsmal Attacks will be special{' '}
                <span style={{ color: '#ddd' }}>Breakthrough Barbs</span>
                {''}. These Breakthrough Barbs will have similar abilities to normal
                ones and the DMG dealt will be considered Charged Attack DMG, dealing
                156% of a normal Breakthrough Barb&apos;s DMG. This state lasts 20s
                and will be cleared after Yelan fires 5 arrows.
            </span>
        ),
        icon: '/images/characters/yelan-constellation6.png',
        effect: (attributes) => {
            // * Already handled in talentScalings
            return { attributes }
        },
        minConstellation: 6,
    },
]

const Yelan: Character = {
    name: 'Yelan',
    icon: '/images/characters/yelan.png',
    weapon: 'Bow',
    vision: 'Hydro',
    rarity: 5,
    description:
        'A mysterious person who claims to work for the Ministry of Civil Affairs, but is a "non-entity" on the Ministry of Civil Affairs\' list.',
    occupation: 'Yanshang Teahouse',
    baseStats: {
        '1/20': {
            'Base HP': 1125.0,
            'Base ATK': 18.99,
            'Base DEF': 42.66,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/20': {
            'Base HP': 2918.0,
            'Base ATK': 49.27,
            'Base DEF': 110.66,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/40': {
            'Base HP': 3883.0,
            'Base ATK': 65.55,
            'Base DEF': 147.23,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/40': {
            'Base HP': 5810.0,
            'Base ATK': 98.08,
            'Base DEF': 220.31,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/50': {
            'Base HP': 6495.0,
            'Base ATK': 109.65,
            'Base DEF': 246.3,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/50': {
            'Base HP': 7472.0,
            'Base ATK': 126.16,
            'Base DEF': 283.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/60': {
            'Base HP': 8386.0,
            'Base ATK': 141.58,
            'Base DEF': 318.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/60': {
            'Base HP': 9374.0,
            'Base ATK': 158.26,
            'Base DEF': 355.47,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/70': {
            'Base HP': 10059.0,
            'Base ATK': 169.83,
            'Base DEF': 381.46,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/70': {
            'Base HP': 11056.0,
            'Base ATK': 186.66,
            'Base DEF': 419.26,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/80': {
            'Base HP': 11741.0,
            'Base ATK': 198.23,
            'Base DEF': 445.25,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/80': {
            'Base HP': 12749.0,
            'Base ATK': 215.24,
            'Base DEF': 483.47,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/90': {
            'Base HP': 13434.0,
            'Base ATK': 226.81,
            'Base DEF': 509.46,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
        '90/90': {
            'Base HP': 14450.0,
            'Base ATK': 243.96,
            'Base DEF': 547.98,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Stealthy Bowshot',
            image: 'https://genshin.honeyhunterworld.com/img/s_603101.webp',
            description:
                'Normal Attack\nPerforms up to 4 consecutive shots with a bow.\nCharged Attack\nPerforms a more precise\nAimed Shot\nwith increased DMG.\nWhile aiming, flowing water will accumulate on the arrowhead. A fully charged torrential arrow will deal\nHydro DMG\n.\nBreakthrough\nYelan will enter a "Breakthrough" state after spending 5s out of combat, which will cause her next Charged Aimed Shot to have 80% decreased charge time, and once charged, she can fire a "Breakthrough Barb" that will deal\nAoE Hydro DMG\nbased on Yelan\'s Max HP.\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '40.68%',
                    Lv2: '43.99%',
                    Lv3: '47.3%',
                    Lv4: '52.03%',
                    Lv5: '55.34%',
                    Lv6: '59.13%',
                    Lv7: '64.33%',
                    Lv8: '69.53%',
                    Lv9: '74.73%',
                    Lv10: '80.41%',
                    Lv11: '86.09%',
                    Lv12: '91.76%',
                    Lv13: '97.44%',
                    Lv14: '103.11%',
                    Lv15: '108.79%',
                },
                '2-Hit DMG': {
                    Lv1: '39.04%',
                    Lv2: '42.22%',
                    Lv3: '45.4%',
                    Lv4: '49.94%',
                    Lv5: '53.12%',
                    Lv6: '56.75%',
                    Lv7: '61.74%',
                    Lv8: '66.74%',
                    Lv9: '71.73%',
                    Lv10: '77.18%',
                    Lv11: '82.63%',
                    Lv12: '88.08%',
                    Lv13: '93.52%',
                    Lv14: '98.97%',
                    Lv15: '104.42%',
                },
                '3-Hit DMG': {
                    Lv1: '51.6%',
                    Lv2: '55.8%',
                    Lv3: '60%',
                    Lv4: '66%',
                    Lv5: '70.2%',
                    Lv6: '75%',
                    Lv7: '81.6%',
                    Lv8: '88.2%',
                    Lv9: '94.8%',
                    Lv10: '102%',
                    Lv11: '109.2%',
                    Lv12: '116.4%',
                    Lv13: '123.6%',
                    Lv14: '130.8%',
                    Lv15: '138%',
                },
                '4-Hit DMG': {
                    Lv1: '65.02%',
                    Lv2: '70.30%',
                    Lv3: '75.60%',
                    Lv4: '83.16%',
                    Lv5: '88.46%',
                    Lv6: '94.50%',
                    Lv7: '102.82%',
                    Lv8: '111.14%',
                    Lv9: '119.44%',
                    Lv10: '128.52%',
                    Lv11: '137.60%',
                    Lv12: '146.66%',
                    Lv13: '155.74%',
                    Lv14: '164.80%',
                    Lv15: '173.88%',
                },
                'Aimed Shot': {
                    Lv1: '43.86%',
                    Lv2: '47.43%',
                    Lv3: '51%',
                    Lv4: '56.1%',
                    Lv5: '59.67%',
                    Lv6: '63.75%',
                    Lv7: '69.36%',
                    Lv8: '74.97%',
                    Lv9: '80.58%',
                    Lv10: '86.7%',
                    Lv11: '92.82%',
                    Lv12: '98.94%',
                    Lv13: '105.06%',
                    Lv14: '111.18%',
                    Lv15: '117.3%',
                },
                'Fully-Charged Aimed Shot': {
                    Lv1: '124%',
                    Lv2: '133.3%',
                    Lv3: '142.6%',
                    Lv4: '155%',
                    Lv5: '164.3%',
                    Lv6: '173.6%',
                    Lv7: '186%',
                    Lv8: '198.4%',
                    Lv9: '210.8%',
                    Lv10: '223.2%',
                    Lv11: '235.6%',
                    Lv12: '248%',
                    Lv13: '263.5%',
                    Lv14: '279%',
                    Lv15: '294.5%',
                },
                'Breakthrough Barb DMG': {
                    Lv1: '11.58% Max HP',
                    Lv2: '12.44% Max HP',
                    Lv3: '13.31% Max HP',
                    Lv4: '14.47% Max HP',
                    Lv5: '15.34% Max HP',
                    Lv6: '16.21% Max HP',
                    Lv7: '17.36% Max HP',
                    Lv8: '18.52% Max HP',
                    Lv9: '19.68% Max HP',
                    Lv10: '20.84% Max HP',
                    Lv11: '21.99% Max HP',
                    Lv12: '23.15% Max HP',
                    Lv13: '24.6% Max HP',
                    Lv14: '26.05% Max HP',
                    Lv15: '27.49% Max HP',
                },
                'C6 Breakthrough Barb DMG': {
                    Lv1: '18.06% Max HP',
                    Lv2: '19.41% Max HP',
                    Lv3: '20.76% Max HP',
                    Lv4: '22.57% Max HP',
                    Lv5: '23.93% Max HP',
                    Lv6: '25.28% Max HP',
                    Lv7: '27.08% Max HP',
                    Lv8: '28.89% Max HP',
                    Lv9: '30.70% Max HP',
                    Lv10: '32.51% Max HP',
                    Lv11: '34.30% Max HP',
                    Lv12: '36.11% Max HP',
                    Lv13: '38.38% Max HP',
                    Lv14: '40.63% Max HP',
                    Lv15: '42.88% Max HP',
                },
                'Plunge DMG': {
                    Lv1: '56.83%',
                    Lv2: '61.45%',
                    Lv3: '66.08%',
                    Lv4: '72.69%',
                    Lv5: '77.31%',
                    Lv6: '82.6%',
                    Lv7: '89.87%',
                    Lv8: '97.14%',
                    Lv9: '104.41%',
                    Lv10: '112.34%',
                    Lv11: '120.27%',
                    Lv12: '128.2%',
                    Lv13: '136.12%',
                    Lv14: '144.05%',
                    Lv15: '151.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '113.63%',
                    Lv2: '122.88%',
                    Lv3: '132.13%',
                    Lv4: '145.35%',
                    Lv5: '154.59%',
                    Lv6: '165.16%',
                    Lv7: '179.7%',
                    Lv8: '194.23%',
                    Lv9: '208.77%',
                    Lv10: '224.62%',
                    Lv11: '240.48%',
                    Lv12: '256.34%',
                    Lv13: '272.19%',
                    Lv14: '288.05%',
                    Lv15: '303.9%',
                },
                'High Plunge DMG': {
                    Lv1: '141.93%',
                    Lv2: '153.49%',
                    Lv3: '165.04%',
                    Lv4: '181.54%',
                    Lv5: '193.1%',
                    Lv6: '206.3%',
                    Lv7: '224.45%',
                    Lv8: '242.61%',
                    Lv9: '260.76%',
                    Lv10: '280.57%',
                    Lv11: '300.37%',
                    Lv12: '320.18%',
                    Lv13: '339.98%',
                    Lv14: '359.79%',
                    Lv15: '379.59%',
                },
            },
        },
        {
            name: 'Lingering Lifeline',
            image: 'https://genshin.honeyhunterworld.com/img/s_603201.webp',
            description:
                "Fires off a Lifeline that allows her to move rapidly, entangling and marking opponents along its path.\nWhen this rapid movement ends, the Lifeline will explode, dealing\nHydro DMG\nto the marked opponents based on Yelan's Max HP.\nTap\nMoves a certain distance forward swiftly.\nHold\nEngages in continuous, swift movement, during which Yelan's resistance to interruption is increased.\nDuring this time, Yelan can control this rapid movement and end it by using this Skill again.\nAdditionally, each opponent marked by the Lifeline when it explodes grants Yelan a 34% chance to reset her Breakthrough state.\nNot until she begins to tug on the strings do evildoers, crooks, and scheming villains alike know that there is no escape.",
            data: {
                'Skill DMG': {
                    Lv1: '22.61% Max HP',
                    Lv2: '24.31% Max HP',
                    Lv3: '26.01% Max HP',
                    Lv4: '28.27% Max HP',
                    Lv5: '29.96% Max HP',
                    Lv6: '31.66% Max HP',
                    Lv7: '33.92% Max HP',
                    Lv8: '36.18% Max HP',
                    Lv9: '38.44% Max HP',
                    Lv10: '40.7% Max HP',
                    Lv11: '42.97% Max HP',
                    Lv12: '45.23% Max HP',
                    Lv13: '48.05% Max HP',
                    Lv14: '50.88% Max HP',
                    Lv15: '53.71% Max HP',
                },
                'Max Duration (Hold)': {
                    Lv1: '3s',
                    Lv2: '3s',
                    Lv3: '3s',
                    Lv4: '3s',
                    Lv5: '3s',
                    Lv6: '3s',
                    Lv7: '3s',
                    Lv8: '3s',
                    Lv9: '3s',
                    Lv10: '3s',
                    Lv11: '3s',
                    Lv12: '3s',
                    Lv13: '3s',
                    Lv14: '3s',
                    Lv15: '3s',
                },
                CD: {
                    Lv1: '10s',
                    Lv2: '10s',
                    Lv3: '10s',
                    Lv4: '10s',
                    Lv5: '10s',
                    Lv6: '10s',
                    Lv7: '10s',
                    Lv8: '10s',
                    Lv9: '10s',
                    Lv10: '10s',
                    Lv11: '10s',
                    Lv12: '10s',
                    Lv13: '10s',
                    Lv14: '10s',
                    Lv15: '10s',
                },
            },
        },
        {
            name: 'Depth-Clarion Dice',
            image: 'https://genshin.honeyhunterworld.com/img/s_603901.webp',
            description:
                'Deals\nAoE Hydro DMG\nand creates an "Exquisite Throw," which aids her in battle.\nExquisite Throw\nFollows the character around and will initiate a coordinated attack under the following circumstances, dealing\nHydro DMG\nbased on Yelan\'s Max HP:\n\u00b7Can occur once every second when your active character uses a Normal Attack.\n\u00b7Will occur each time Yelan\'s Lifeline explodes and hits opponents.\n"A gambling addiction is going to do you no good. I mean, let me just do the math for you as the dealer. What do you think your odds of beating me are, when I have seven dice and you, only one?"',
            data: {
                'Skill DMG': {
                    Lv1: '7.31% Max HP',
                    Lv2: '7.86% Max HP',
                    Lv3: '8.4% Max HP',
                    Lv4: '9.13% Max HP',
                    Lv5: '9.68% Max HP',
                    Lv6: '10.23% Max HP',
                    Lv7: '10.96% Max HP',
                    Lv8: '11.69% Max HP',
                    Lv9: '12.42% Max HP',
                    Lv10: '13.15% Max HP',
                    Lv11: '13.89% Max HP',
                    Lv12: '14.62% Max HP',
                    Lv13: '15.53% Max HP',
                    Lv14: '16.44% Max HP',
                    Lv15: '17.36% Max HP',
                },
                'Exquisite Throw DMG': {
                    Lv1: '4.87% Max HP \u00d73',
                    Lv2: '5.24% Max HP \u00d73',
                    Lv3: '5.6% Max HP \u00d73',
                    Lv4: '6.09% Max HP \u00d73',
                    Lv5: '6.46% Max HP \u00d73',
                    Lv6: '6.82% Max HP \u00d73',
                    Lv7: '7.31% Max HP \u00d73',
                    Lv8: '7.8% Max HP \u00d73',
                    Lv9: '8.28% Max HP \u00d73',
                    Lv10: '8.77% Max HP \u00d73',
                    Lv11: '9.26% Max HP \u00d73',
                    Lv12: '9.74% Max HP \u00d73',
                    Lv13: '10.35% Max HP \u00d73',
                    Lv14: '10.96% Max HP \u00d73',
                    Lv15: '11.57% Max HP \u00d73',
                },
                'Taking All Comers Additional Arrow': {
                    Lv1: '14.00% Max HP',
                    Lv2: '14.00% Max HP',
                    Lv3: '14.00% Max HP',
                    Lv4: '14.00% Max HP',
                    Lv5: '14.00% Max HP',
                    Lv6: '14.00% Max HP',
                    Lv7: '14.00% Max HP',
                    Lv8: '14.00% Max HP',
                    Lv9: '14.00% Max HP',
                    Lv10: '14.00% Max HP',
                    Lv11: '14.00% Max HP',
                    Lv12: '14.00% Max HP',
                    Lv13: '14.00% Max HP',
                    Lv14: '14.00% Max HP',
                    Lv15: '14.00% Max HP',
                },
                Duration: {
                    Lv1: '15s',
                    Lv2: '15s',
                    Lv3: '15s',
                    Lv4: '15s',
                    Lv5: '15s',
                    Lv6: '15s',
                    Lv7: '15s',
                    Lv8: '15s',
                    Lv9: '15s',
                    Lv10: '15s',
                    Lv11: '15s',
                    Lv12: '15s',
                    Lv13: '15s',
                    Lv14: '15s',
                    Lv15: '15s',
                },
                CD: {
                    Lv1: '18s',
                    Lv2: '18s',
                    Lv3: '18s',
                    Lv4: '18s',
                    Lv5: '18s',
                    Lv6: '18s',
                    Lv7: '18s',
                    Lv8: '18s',
                    Lv9: '18s',
                    Lv10: '18s',
                    Lv11: '18s',
                    Lv12: '18s',
                    Lv13: '18s',
                    Lv14: '18s',
                    Lv15: '18s',
                },
                'Energy Cost': {
                    Lv1: '70',
                    Lv2: '70',
                    Lv3: '70',
                    Lv4: '70',
                    Lv5: '70',
                    Lv6: '70',
                    Lv7: '70',
                    Lv8: '70',
                    Lv9: '70',
                    Lv10: '70',
                    Lv11: '70',
                    Lv12: '70',
                    Lv13: '70',
                    Lv14: '70',
                    Lv15: '70',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Necessary Calculation',
            image: 'https://genshin.honeyhunterworld.com/img/p_602301.webp',
            description:
                'Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.',
        },
        {
            name: 'Turn Control',
            image: 'https://genshin.honeyhunterworld.com/img/p_602101.webp',
            description:
                "When the party has 1/2/3/4 Elemental Types, Yelan's Max HP is increased by 6%/12%/18%/30%.",
        },
        {
            name: 'Adapt With Ease',
            image: 'https://genshin.honeyhunterworld.com/img/p_602201.webp',
            description:
                'So long as an\nExquisite Throw\nis in play, your own active character deals 1% more DMG. This increases by a further 3.5% DMG every second. The maximum increase to DMG dealt is 50%.\nThe pre-existing effect will be dispelled if Depth-Clarion Dice is recast during its duration.',
        },
    ],
    constellations: [
        {
            name: 'Enter the Plotters',
            image: 'https://genshin.honeyhunterworld.com/img/c_601.webp',
            description: 'Lingering Lifeline\ngains 1 additional charge.',
            level: 1,
        },
        {
            name: 'Taking All Comers',
            image: 'https://genshin.honeyhunterworld.com/img/c_602.webp',
            description:
                "When\nExquisite Throw\nconducts a coordinated attack, it will fire an additional water arrow that will deal 14% of Yelan's Max HP as Hydro DMG.\nThis effect can trigger once every 1.8s.",
            level: 2,
        },
        {
            name: "Beware the Trickster's Dice",
            image: 'https://genshin.honeyhunterworld.com/img/c_603.webp',
            description:
                'Increases the Level of\nDepth-Clarion Dice\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Bait-and-Switch',
            image: 'https://genshin.honeyhunterworld.com/img/c_604.webp',
            description:
                "Increases all party members' Max HP by 10% for 25s for every opponent marked by\nLifeline\nwhen the Lifeline explodes. A maximum increase of 40% Max HP can be attained in this manner.",
            level: 4,
        },
        {
            name: "Dealer's Sleight",
            image: 'https://genshin.honeyhunterworld.com/img/c_605.webp',
            description:
                'Increases the Level of\nLingering Lifeline\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Winner Takes All',
            image: 'https://genshin.honeyhunterworld.com/img/c_606.webp',
            description:
                "After using\nDepth-Clarion Dice\n, Yelan will enter the Mastermind state.\nIn this state, all of Yelan's Normal Attacks will be special Breakthrough Barbs. These Breakthrough Barbs will have similar abilities to normal ones and the DMG dealt will be considered Charged Attack DMG, dealing 156% of a normal Breakthrough Barb's DMG.\nThe Mastermind state lasts 20s and will be cleared after Yelan fires 5 arrows.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Yelan
