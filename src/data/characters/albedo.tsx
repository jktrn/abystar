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
    'Normal Attack: Favonius Bladework - Weiss': {
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
        '5-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Normal Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'Charged Attack DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Charged Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Charged Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'Charged Attack Stamina Cost': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Charged Attack Stamina Cost Multiplier'],
            outputType: FormulaOutputType.Generic,
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
    'Abiogenesis: Solar Isotoma': {
        'Skill DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: ['Geo DMG Bonus', 'Elemental Skill DMG Bonus'],
            damageType: DamageType.Geo,
        },
        'Transient Blossom DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['DEF'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Geo DMG Bonus',
                'Transient Blossom DMG Bonus',
            ],
            damageType: DamageType.Geo,
        },
        Duration: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'Skill CD': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
    },
    'Rite of Progeniture: Tectonic Tide': {
        'Burst DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: [
                'Elemental Burst Additive Bonus',
                'Rise of Phanerozoic DMG Bonus',
            ],
            multiplicativeBonusStat: ['Geo DMG Bonus', 'Elemental Burst DMG Bonus'],
            damageType: DamageType.Geo,
        },
        'Fatal Blossom DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: [
                'Elemental Burst Additive Bonus',
                'Rise of Phanerozoic DMG Bonus',
            ],
            multiplicativeBonusStat: ['Geo DMG Bonus', 'Elemental Burst DMG Bonus'],
            damageType: DamageType.Geo,
        },
        CD: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
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
        name: 'Calcite Might',
        description: (
            <span>
                <Badge variant="secondary">A1</Badge> Transient Blossoms generated by{' '}
                <span style={{ color: '#ddd' }}>Abiogenesis: Solar Isotoma</span>{' '}
                deal 25% more DMG to opponents whose HP is below 50%
            </span>
        ),
        icon: '/images/characters/albedo-passive1.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Transient Blossom DMG Bonus':
                    (attributes['Transient Blossom DMG Bonus'] || 0) + 0.25,
            }
            return { attributes: newAttributes }
        },
        priority: 1,
    },
    {
        name: 'Homuncular Nature',
        description: (
            <span>
                <Badge variant="secondary">A4</Badge> Using{' '}
                <span style={{ color: '#ddd' }}>
                    Rite of Progeniture: Tectonic Tide
                </span>{' '}
                increases the Elemental Mastery of all party members by 125 for 10s
            </span>
        ),
        icon: '/images/characters/albedo-passive2.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Elemental Mastery': (attributes['Elemental Mastery'] || 0) + 125,
            }
            return { attributes: newAttributes }
        },
        priority: 1,
    },
    {
        name: 'Opening of Phanerozoic',
        description: (
            <span>
                <Badge variant="secondary">C2</Badge> Transient Blossoms generated by{' '}
                <span style={{ color: '#ddd' }}>Abiogenesis: Solar Isotoma</span>{' '}
                grant Albedo a stack of Fatal Reckoning. Each stack increases DMG
                from{' '}
                <span style={{ color: '#ddd' }}>Abiogenesis: Solar Isotoma</span> by
                30% of Albedo&apos;s DEF (up to 4 stacks)
            </span>
        ),
        icon: '/images/characters/albedo-constellation2.png',
        effect: (attributes, talentLevels, currentStacks) => {
            if (!currentStacks) return { attributes }

            const newAttributes = {
                ...attributes,
                'Rise of Phanerozoic DMG Bonus':
                    (attributes['Rise of Phanerozoic DMG Bonus'] || 0) +
                    attributes['DEF'] * 0.3 * currentStacks,
            }

            return { attributes: newAttributes }
        },
        maxStacks: 4,
        stackOptions: ['Off', '1 Stack', '2 Stacks', '3 Stacks', '4 Stacks'],
        minConstellation: 2,
        priority: 3,
    },
    {
        name: 'Descent of Divinity',
        description: (
            <span>
                <Badge variant="secondary">C4</Badge> Active party members within the
                Solar Isotoma field have their Plunging Attack DMG increased by 30%
            </span>
        ),
        icon: '/images/characters/albedo-constellation4.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Plunging Attack DMG Bonus':
                    (attributes['Plunging Attack DMG Bonus'] || 0) + 0.3,
            }
            return { attributes: newAttributes }
        },
        minConstellation: 4,
        priority: 1,
    },
    {
        name: 'Dust of Purification',
        description: (
            <span>
                <Badge variant="secondary">C6</Badge> Active party members within the
                Solar Isotoma field who are protected by a shield created by
                Crystallize have their DMG increased by 17%
            </span>
        ),
        icon: '/images/characters/albedo-constellation6.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'All DMG Bonus': (attributes['All DMG Bonus'] || 0) + 0.17,
            }
            return { attributes: newAttributes }
        },
        minConstellation: 6,
        priority: 1,
    },
]

const constellationBonuses: Bonus[] = [
    {
        name: 'Flower of Eden',
        description: (
            <span>
                Transient Blossoms generated by Albedo&apos;s{' '}
                <span style={{ color: '#ddd' }}>Abiogenesis: Solar Isotoma</span>{' '}
                regenerate 1.2 Energy for Albedo.
            </span>
        ),
        icon: '/images/characters/albedo-constellation1.png',
        effect: (attributes) => {
            // * Unimplementable
            return { attributes }
        },
        minConstellation: 1,
    },
    {
        name: 'Opening of Phanerozoic',
        description: (
            <span>
                Transient Blossoms generated by{' '}
                <span style={{ color: '#ddd' }}>Abiogenesis: Solar Isotoma</span>{' '}
                grant Albedo a stack of Fatal Reckoning. Each stack increases DMG
                from{' '}
                <span style={{ color: '#ddd' }}>Abiogenesis: Solar Isotoma</span> by
                30% of Albedo&apos;s DEF (up to 4 stacks)
            </span>
        ),
        icon: '/images/characters/albedo-constellation2.png',
        effect: (attributes) => {
            // * Already handled in characterBonuses
            return { attributes }
        },
        minConstellation: 2,
    },
    {
        name: 'Grace of Helios',
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#ddd' }}>Abiogenesis: Solar Isotoma</span> by
                3. Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/albedo-constellation3.png',
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
        name: 'Descent of Divinity',
        description: (
            <span>
                Active party members within the Solar Isotoma field have their
                Plunging Attack DMG increased by 30%.
            </span>
        ),
        icon: '/images/characters/albedo-constellation4.png',
        effect: (attributes) => {
            // * Already handled in characterBonuses
            return { attributes }
        },
    },
    {
        name: 'Tide of Hadean',
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#ddd' }}>
                    Rite of Progeniture: Tectonic Tide
                </span>{' '}
                by 3. Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/albedo-constellation5.png',
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
        name: 'Dust of Purification',
        description: (
            <span>
                Active party members within the Solar Isotoma field who are protected
                by a shield created by Crystallize have their DMG increased by 17%.
            </span>
        ),
        icon: '/images/characters/albedo-constellation6.png',
        effect: (attributes) => {
            // * Already handled in characterBonuses
            return { attributes }
        },
        minConstellation: 6,
    },
]

const Albedo: Character = {
    name: 'Albedo',
    icon: '/images/characters/albedo.png',
    weapon: 'Sword',
    vision: 'Geo',
    rarity: 5,
    description:
        'A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.',
    occupation: 'Knights of Favonius',
    baseStats: {
        '1/20': {
            'Base HP': 1030.0,
            'Base ATK': 19.55,
            'Base DEF': 68.21,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.0,
        },
        '20/20': {
            'Base HP': 2671.0,
            'Base ATK': 50.72,
            'Base DEF': 176.93,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.0,
        },
        '20/40': {
            'Base HP': 3554.0,
            'Base ATK': 67.48,
            'Base DEF': 235.41,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.0,
        },
        '40/40': {
            'Base HP': 5317.0,
            'Base ATK': 100.97,
            'Base DEF': 352.25,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.0,
        },
        '40/50': {
            'Base HP': 5944.0,
            'Base ATK': 112.88,
            'Base DEF': 393.8,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.072,
        },
        '50/50': {
            'Base HP': 6839.0,
            'Base ATK': 129.87,
            'Base DEF': 453.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.072,
        },
        '50/60': {
            'Base HP': 7675.0,
            'Base ATK': 145.75,
            'Base DEF': 508.47,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.144,
        },
        '60/60': {
            'Base HP': 8579.0,
            'Base ATK': 162.91,
            'Base DEF': 568.36,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.144,
        },
        '60/70': {
            'Base HP': 9207.0,
            'Base ATK': 174.82,
            'Base DEF': 609.91,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.144,
        },
        '70/70': {
            'Base HP': 10119.0,
            'Base ATK': 192.15,
            'Base DEF': 670.34,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.144,
        },
        '70/80': {
            'Base HP': 10746.0,
            'Base ATK': 204.06,
            'Base DEF': 711.9,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.216,
        },
        '80/80': {
            'Base HP': 11669.0,
            'Base ATK': 221.57,
            'Base DEF': 773.01,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.216,
        },
        '80/90': {
            'Base HP': 12296.0,
            'Base ATK': 233.48,
            'Base DEF': 814.56,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.288,
        },
        '90/90': {
            'Base HP': 13226.0,
            'Base ATK': 251.14,
            'Base DEF': 876.15,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Geo DMG Bonus': 0.288,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Favonius Bladework - Weiss',
            image: 'https://genshin.honeyhunterworld.com/img/s_383101.webp',
            description:
                'Normal Attack\nPerforms up to 5 rapid strikes.\nCharged Attack\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '36.74%',
                    Lv2: '39.73%',
                    Lv3: '42.72%',
                    Lv4: '46.99%',
                    Lv5: '49.98%',
                    Lv6: '53.4%',
                    Lv7: '58.1%',
                    Lv8: '62.8%',
                    Lv9: '67.5%',
                    Lv10: '72.62%',
                    Lv11: '78.5%',
                    Lv12: '85.41%',
                    Lv13: '92.31%',
                    Lv14: '99.22%',
                    Lv15: '106.76%',
                },
                '2-Hit DMG': {
                    Lv1: '36.74%',
                    Lv2: '39.73%',
                    Lv3: '42.72%',
                    Lv4: '46.99%',
                    Lv5: '49.98%',
                    Lv6: '53.4%',
                    Lv7: '58.1%',
                    Lv8: '62.8%',
                    Lv9: '67.5%',
                    Lv10: '72.62%',
                    Lv11: '78.5%',
                    Lv12: '85.41%',
                    Lv13: '92.31%',
                    Lv14: '99.22%',
                    Lv15: '106.76%',
                },
                '3-Hit DMG': {
                    Lv1: '47.45%',
                    Lv2: '51.32%',
                    Lv3: '55.18%',
                    Lv4: '60.7%',
                    Lv5: '64.56%',
                    Lv6: '68.98%',
                    Lv7: '75.04%',
                    Lv8: '81.11%',
                    Lv9: '87.18%',
                    Lv10: '93.81%',
                    Lv11: '101.39%',
                    Lv12: '110.32%',
                    Lv13: '119.24%',
                    Lv14: '128.16%',
                    Lv15: '137.89%',
                },
                '4-Hit DMG': {
                    Lv1: '49.75%',
                    Lv2: '53.8%',
                    Lv3: '57.85%',
                    Lv4: '63.63%',
                    Lv5: '67.68%',
                    Lv6: '72.31%',
                    Lv7: '78.68%',
                    Lv8: '85.04%',
                    Lv9: '91.4%',
                    Lv10: '98.34%',
                    Lv11: '106.3%',
                    Lv12: '115.65%',
                    Lv13: '125.01%',
                    Lv14: '134.36%',
                    Lv15: '144.57%',
                },
                '5-Hit DMG': {
                    Lv1: '62.07%',
                    Lv2: '67.13%',
                    Lv3: '72.18%',
                    Lv4: '79.4%',
                    Lv5: '84.45%',
                    Lv6: '90.22%',
                    Lv7: '98.16%',
                    Lv8: '106.1%',
                    Lv9: '114.04%',
                    Lv10: '122.7%',
                    Lv11: '132.63%',
                    Lv12: '144.3%',
                    Lv13: '155.97%',
                    Lv14: '167.64%',
                    Lv15: '180.38%',
                },
                'Charged Attack DMG': {
                    Lv1: '107.50%',
                    Lv2: '116.25%',
                    Lv3: '125.00%',
                    Lv4: '137.50%',
                    Lv5: '146.25%',
                    Lv6: '156.25%',
                    Lv7: '170.00%',
                    Lv8: '183.75%',
                    Lv9: '197.50%',
                    Lv10: '212.50%',
                    Lv11: '229.68%',
                    Lv12: '249.90%',
                    Lv13: '270.11%',
                    Lv14: '290.32%',
                    Lv15: '312.37%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '20',
                    Lv2: '20',
                    Lv3: '20',
                    Lv4: '20',
                    Lv5: '20',
                    Lv6: '20',
                    Lv7: '20',
                    Lv8: '20',
                    Lv9: '20',
                    Lv10: '20',
                    Lv11: '20',
                    Lv12: '20',
                    Lv13: '20',
                    Lv14: '20',
                    Lv15: '20',
                },
                'Plunge DMG': {
                    Lv1: '63.93%',
                    Lv2: '69.14%',
                    Lv3: '74.34%',
                    Lv4: '81.77%',
                    Lv5: '86.98%',
                    Lv6: '92.93%',
                    Lv7: '101.1%',
                    Lv8: '109.28%',
                    Lv9: '117.46%',
                    Lv10: '126.38%',
                    Lv11: '135.3%',
                    Lv12: '144.22%',
                    Lv13: '153.14%',
                    Lv14: '162.06%',
                    Lv15: '170.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '127.84%',
                    Lv2: '138.24%',
                    Lv3: '148.65%',
                    Lv4: '163.51%',
                    Lv5: '173.92%',
                    Lv6: '185.81%',
                    Lv7: '202.16%',
                    Lv8: '218.51%',
                    Lv9: '234.86%',
                    Lv10: '252.7%',
                    Lv11: '270.54%',
                    Lv12: '288.38%',
                    Lv13: '306.22%',
                    Lv14: '324.05%',
                    Lv15: '341.89%',
                },
                'High Plunge DMG': {
                    Lv1: '159.68%',
                    Lv2: '172.67%',
                    Lv3: '185.67%',
                    Lv4: '204.24%',
                    Lv5: '217.23%',
                    Lv6: '232.09%',
                    Lv7: '252.51%',
                    Lv8: '272.93%',
                    Lv9: '293.36%',
                    Lv10: '315.64%',
                    Lv11: '337.92%',
                    Lv12: '360.2%',
                    Lv13: '382.48%',
                    Lv14: '404.76%',
                    Lv15: '427.04%',
                },
            },
        },
        {
            name: 'Abiogenesis: Solar Isotoma',
            image: 'https://genshin.honeyhunterworld.com/img/s_383201.webp',
            description:
                "Albedo creates a Solar Isotoma using alchemy, which deals\nAoE Geo DMG\non appearance.\nSolar Isotoma\nhas the following properties:\n\u00b7When opponents within the Solar Isotoma field take DMG, the Solar Isotoma will generate Transient Blossoms which deal\nAoE Geo DMG\n. DMG dealt scales off Albedo's DEF.\n\u00b7Transient Blossoms can only be generated once every 2s.\n\u00b7When a character is located at the locus of the Solar Isotoma, the Solar Isotoma will accumulate Geo power to form a crystallized platform that lifts the character up to a certain height. Only one crystallized platform can exist at a time.\n\u00b7Solar Isotoma is considered a\nGeo construct\n. Only one Solar Isotoma created by Albedo himself can exist at a time.\nHold\nto designate the location of the skill.\nThis Geo bloom has an unusual property mirrored in the aim of alchemy. To rise from the earth, soar into the sky, and become the sun.",
            data: {
                'Skill DMG': {
                    Lv1: '130.4%',
                    Lv2: '140.18%',
                    Lv3: '149.96%',
                    Lv4: '163%',
                    Lv5: '172.78%',
                    Lv6: '182.56%',
                    Lv7: '195.6%',
                    Lv8: '208.64%',
                    Lv9: '221.68%',
                    Lv10: '234.72%',
                    Lv11: '247.76%',
                    Lv12: '260.8%',
                    Lv13: '277.1%',
                    Lv14: '293.4%',
                    Lv15: '309.7%',
                },
                'Transient Blossom DMG': {
                    Lv1: '133.6% DEF',
                    Lv2: '143.62% DEF',
                    Lv3: '153.64% DEF',
                    Lv4: '167% DEF',
                    Lv5: '177.02% DEF',
                    Lv6: '187.04% DEF',
                    Lv7: '200.4% DEF',
                    Lv8: '213.76% DEF',
                    Lv9: '227.12% DEF',
                    Lv10: '240.48% DEF',
                    Lv11: '253.84% DEF',
                    Lv12: '267.2% DEF',
                    Lv13: '283.9% DEF',
                    Lv14: '300.6% DEF',
                    Lv15: '317.3% DEF',
                },
                Duration: {
                    Lv1: '30s',
                    Lv2: '30s',
                    Lv3: '30s',
                    Lv4: '30s',
                    Lv5: '30s',
                    Lv6: '30s',
                    Lv7: '30s',
                    Lv8: '30s',
                    Lv9: '30s',
                    Lv10: '30s',
                    Lv11: '30s',
                    Lv12: '30s',
                    Lv13: '30s',
                    Lv14: '30s',
                    Lv15: '30s',
                },
                'Skill CD': {
                    Lv1: '4s',
                    Lv2: '4s',
                    Lv3: '4s',
                    Lv4: '4s',
                    Lv5: '4s',
                    Lv6: '4s',
                    Lv7: '4s',
                    Lv8: '4s',
                    Lv9: '4s',
                    Lv10: '4s',
                    Lv11: '4s',
                    Lv12: '4s',
                    Lv13: '4s',
                    Lv14: '4s',
                    Lv15: '4s',
                },
            },
        },
        {
            name: 'Rite of Progeniture: Tectonic Tide',
            image: 'https://genshin.honeyhunterworld.com/img/s_383901.webp',
            description:
                "Under Albedo's command, Geo crystals surge and burst forth, dealing\nAoE Geo DMG\nin front of him.\nIf a Solar Isotoma created by Albedo himself is on the field, 7 Fatal Blossoms will be generated in the Solar Isotoma field, bursting violently into bloom and dealing\nAoE Geo DMG\n.\nTectonic Tide DMG and Fatal Blossom DMG will not generate Transient Blossoms.\nUnder the Kreideprinz's command, the tectonic tide of creation seethes into life.",
            data: {
                'Burst DMG': {
                    Lv1: '367.2%',
                    Lv2: '394.74%',
                    Lv3: '422.28%',
                    Lv4: '459%',
                    Lv5: '486.54%',
                    Lv6: '514.08%',
                    Lv7: '550.8%',
                    Lv8: '587.52%',
                    Lv9: '624.24%',
                    Lv10: '660.96%',
                    Lv11: '697.68%',
                    Lv12: '734.4%',
                    Lv13: '780.3%',
                    Lv14: '826.2%',
                    Lv15: '872.1%',
                },
                'Fatal Blossom DMG': {
                    Lv1: '72%',
                    Lv2: '77.4%',
                    Lv3: '82.8%',
                    Lv4: '90%',
                    Lv5: '95.4%',
                    Lv6: '100.8%',
                    Lv7: '108%',
                    Lv8: '115.2%',
                    Lv9: '122.4%',
                    Lv10: '129.6%',
                    Lv11: '136.8%',
                    Lv12: '144%',
                    Lv13: '153%',
                    Lv14: '162%',
                    Lv15: '171%',
                },
                CD: {
                    Lv1: '12s',
                    Lv2: '12s',
                    Lv3: '12s',
                    Lv4: '12s',
                    Lv5: '12s',
                    Lv6: '12s',
                    Lv7: '12s',
                    Lv8: '12s',
                    Lv9: '12s',
                    Lv10: '12s',
                    Lv11: '12s',
                    Lv12: '12s',
                    Lv13: '12s',
                    Lv14: '12s',
                    Lv15: '12s',
                },
                'Energy Cost': {
                    Lv1: '40',
                    Lv2: '40',
                    Lv3: '40',
                    Lv4: '40',
                    Lv5: '40',
                    Lv6: '40',
                    Lv7: '40',
                    Lv8: '40',
                    Lv9: '40',
                    Lv10: '40',
                    Lv11: '40',
                    Lv12: '40',
                    Lv13: '40',
                    Lv14: '40',
                    Lv15: '40',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Flash of Genius',
            image: 'https://genshin.honeyhunterworld.com/img/p_382301.webp',
            description:
                'When Albedo crafts Weapon Ascension Materials, he has a 10% chance to receive double the product.',
        },
        {
            name: 'Calcite Might',
            image: 'https://genshin.honeyhunterworld.com/img/p_382101.webp',
            description:
                'Transient Blossoms generated by\nAbiogenesis: Solar Isotoma\ndeal 25% more DMG to opponents whose HP is below 50%.',
        },
        {
            name: 'Homuncular Nature',
            image: 'https://genshin.honeyhunterworld.com/img/p_382201.webp',
            description:
                'Using\nRite of Progeniture: Tectonic Tide\nincreases the Elemental Mastery of nearby party members by 125 for 10s.',
        },
    ],
    constellations: [
        {
            name: 'Flower of Eden',
            image: 'https://genshin.honeyhunterworld.com/img/c_381.webp',
            description:
                "Transient Blossoms generated by Albedo's\nAbiogenesis: Solar Isotoma\nregenerate 1.2 Energy for Albedo.",
            level: 1,
        },
        {
            name: 'Opening of Phanerozoic',
            image: 'https://genshin.honeyhunterworld.com/img/c_382.webp',
            description:
                "Transient Blossoms generated by\nAbiogenesis: Solar Isotoma\ngrant Albedo Fatal Reckoning for 30s:\n\u00b7Unleashing\nRite of Progeniture: Tectonic Tide\nconsumes all stacks of Fatal Reckoning. Each stack of Fatal Reckoning consumed increases the DMG dealt by Fatal Blossoms and Rite of Progeniture: Tectonic Tide's burst DMG by 30% of Albedo's DEF.\n\u00b7This effect stacks up to 4 times.",
            level: 2,
        },
        {
            name: 'Grace of Helios',
            image: 'https://genshin.honeyhunterworld.com/img/c_383.webp',
            description:
                'Increases the Level of\nAbiogenesis: Solar Isotoma\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Descent of Divinity',
            image: 'https://genshin.honeyhunterworld.com/img/c_384.webp',
            description:
                'Active party members within the Solar Isotoma field have their Plunging Attack DMG increased by 30%.',
            level: 4,
        },
        {
            name: 'Tide of Hadean',
            image: 'https://genshin.honeyhunterworld.com/img/c_385.webp',
            description:
                'Increases the Level of\nRite of Progeniture: Tectonic Tide\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Dust of Purification',
            image: 'https://genshin.honeyhunterworld.com/img/c_386.webp',
            description:
                'Active party members within the Solar Isotoma field who are protected by a shield created by Crystallize have their DMG increased by 17%.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Albedo
