import {
    Bonus,
    Character,
    DamageType,
    FormulaOutputType,
    FormulaType,
    TalentScaling,
} from '@/interfaces/Character'
import { getTalentScalingValue } from '@/lib'

const talentScalings: TalentScaling = {
    'Normal Attack: Secret Spear of Wangsheng': {
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
        '6-Hit DMG': {
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
    'Guide to Afterlife': {
        'ATK Increase': {
            formulaType: FormulaType.GenericFormulaWithScaling,
            attribute: ['HP'],
            outputType: FormulaOutputType.Generic,
        },
        'Blood Blossom DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: ['Pyro DMG Bonus', 'Elemental Skill DMG Bonus'],
            damageType: DamageType.Pyro,
        },
        'Blood Blossom Duration': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        Duration: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        CD: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Elemental Skill CD Reduction'],
            outputType: FormulaOutputType.Time,
        },
    },
    'Spirit Soother': {
        'Skill DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: ['Pyro DMG Bonus', 'Elemental Burst DMG Bonus'],
            damageType: DamageType.Pyro,
        },
        'Low HP Skill DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: ['Pyro DMG Bonus', 'Elemental Burst DMG Bonus'],
            damageType: DamageType.Pyro,
        },
        'Skill HP Regeneration': {
            formulaType: FormulaType.GenericFormulaWithScaling,
            attribute: ['HP'],
            multiplicativeBonusStat: ['Healing Bonus'],
            outputType: FormulaOutputType.Healing,
        },
        'Low HP Skill Regeneration': {
            formulaType: FormulaType.GenericFormulaWithScaling,
            attribute: ['HP'],
            multiplicativeBonusStat: ['Healing Bonus'],
            outputType: FormulaOutputType.Healing,
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
        name: 'Guide to Afterlife',
        description: (
            <span>
                Activates <span style={{ color: '#ddd' }}>Paramita Papilio</span>{' '}
                (Elemental Skill) stance, converting Normal Attack DMG to{' '}
                <span style={{ color: '#bf612d' }}>Pyro DMG</span>. Increases ATK
                based on Max HP (maximum gained cannot exceed 400% original ATK)
            </span>
        ),
        icon: '/images/characters/hu-tao-skill.png',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!state || !talentLevels) return { attributes }

            const scalingValue = getTalentScalingValue(
                state,
                'Guide to Afterlife',
                'ATK Increase',
                talentLevels[1]
            )

            // Buff caps at 400% of base ATK
            const cappedScalingValue = Math.min(
                attributes['HP'] * (scalingValue / 100),
                attributes['ATK'] * 4
            )

            const newAttributes = {
                ...attributes,
                ATK: attributes['ATK'] + (cappedScalingValue || 0),
            }

            return { attributes: newAttributes }
        },
        affectsTalentIndex: 0,
        applyToTalentScaling: (talentScaling) => {
            const normalAttackScaling =
                talentScaling['Normal Attack: Secret Spear of Wangsheng']

            if (normalAttackScaling) {
                Object.values(normalAttackScaling).forEach((aspect) => {
                    if (
                        aspect.formulaType !== FormulaType.DamageFormula ||
                        !aspect.multiplicativeBonusStat
                    )
                        return
                    aspect.multiplicativeBonusStat[0] = 'Pyro DMG Bonus'
                    aspect.damageType = DamageType.Pyro
                })
            }
            const chargedAttackScaling =
                talentScaling['Normal Attack: Secret Spear of Wangsheng'][
                    'Charged Attack Stamina Cost'
                ].multiplicativeBonusStat
            if (chargedAttackScaling) {
                chargedAttackScaling.push('Crimson Bouquet Stamina Reduction')
            }
        },
        origin: 'E',
        priority: 3,
    },
    {
        name: 'Sanguine Rogue',
        description: (
            <span>
                +33% <span style={{ color: '#bf612d' }}>Pyro DMG Bonus</span> when
                under 50% Max HP
            </span>
        ),
        icon: '/images/characters/hu-tao-passive2.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Pyro DMG Bonus': attributes['Pyro DMG Bonus'] + 0.33,
            }

            return { attributes: newAttributes }
        },
        origin: 'Q',
        priority: 1,
    },
]

const constellationBonuses: Bonus[] = [
    {
        name: 'Crimson Bouquet',
        description: (
            <span>
                While in <span style={{ color: '#DDD' }}>Paramita Papilio</span>{' '}
                state, Hu Tao&apos;s Charge Attacks do not consume Stamina.
            </span>
        ),
        icon: '/images/characters/hu-tao-constellation1.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Crimson Bouquet Stamina Reduction': -1,
            }
            return { attributes: newAttributes }
        },
        minConstellation: 1,
        origin: 'C1',
        visible: false,
        priority: 1,
    },
    {
        name: 'Ominous Rainfall',
        description: (
            <span>
                Increases the <span style={{ color: '#DDD' }}>Blood Blossom</span>{' '}
                DMG by an amount equal to 10% of Hu Tao&apos;s Max HP at the time the
                effect is applied. Additionally,
                <span style={{ color: '#DDD' }}>Spirit Soother</span> will also apply
                the <span style={{ color: '#DDD' }}>Blood Blossom</span> effect.
            </span>
        ),
        icon: '/images/characters/hu-tao-constellation2.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Elemental Skill Additive Bonus':
                    attributes['Elemental Skill Additive Bonus'] +
                    attributes['HP'] * 0.1,
            }

            return { attributes: newAttributes }
        },
        minConstellation: 2,
        origin: 'C2',
        priority: 3,
    },
    {
        name: 'Lingering Carmine',
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>Guide to Afterlife</span> by 3.
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/hu-tao-constellation3.png',
        effect: (attributes, talentLevels) => {
            if (!talentLevels) return { attributes }

            const newTalentLevels = [...talentLevels]
            newTalentLevels[1] = Math.min(newTalentLevels[1] + 3, 13)

            return { attributes: attributes, updatedTalentLevels: newTalentLevels }
        },
        minConstellation: 3,
        origin: 'C3',
        enabled: true,
        visible: false,
        priority: 0,
    },
    {
        name: 'Garden of Eternal Rest',
        description: (
            <span>
                Upon defeating an enemy affected by a{' '}
                <span style={{ color: '#DDD' }}>Blood Blossom</span> that Hu Tao
                applied herself, all nearby allies in the party (excluding Hu Tao
                herself) will have their CRIT Rate increased by 12% for 15s.
            </span>
        ),
        icon: '/images/characters/hu-tao-constellation4.png',
        effect: (attributes) => {
            // TODO: Handle
            return { attributes }
        },
        minConstellation: 4,
        implemented: false,
        origin: 'C4',
    },
    {
        name: 'Floral Incense',
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>Spirit Soother</span> by 3. Maximum
                upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/hu-tao-constellation5.png',
        effect: (attributes, talentLevels) => {
            if (!talentLevels) return { attributes }

            const newTalentLevels = [...talentLevels]
            newTalentLevels[2] = Math.min(newTalentLevels[2] + 3, 13)

            return { attributes: attributes, updatedTalentLevels: newTalentLevels }
        },
        minConstellation: 5,
        origin: 'C5',
        enabled: true,
        visible: false,
        priority: 0,
    },
    {
        name: "Butterfly's Embrace",
        description: (
            <span>
                Triggers when receiving fatal blow or below 25% HP. All
                Elemental/Physical RES increased by 200%, CRIT Rate increased by 100%
            </span>
        ),
        icon: '/images/characters/hu-tao-constellation6.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Pyro RES': attributes['Pyro RES'] + 2,
                'Cryo RES': attributes['Cryo RES'] + 2,
                'Electro RES': attributes['Electro RES'] + 2,
                'Hydro RES': attributes['Hydro RES'] + 2,
                'Geo RES': attributes['Geo RES'] + 2,
                'Anemo RES': attributes['Anemo RES'] + 2,
                'Dendro RES': attributes['Dendro RES'] + 2,
                'Physical RES': attributes['Physical RES'] + 2,
                'CRIT Rate': attributes['CRIT Rate'] + 1,
            }

            return { attributes: newAttributes }
        },
        minConstellation: 6,
        origin: 'C6',
        priority: 1,
    },
]

const HuTao: Character = {
    name: 'Hu Tao',
    icon: '/images/characters/hu-tao.png',
    weapon: 'Polearm',
    vision: 'Pyro',
    rarity: 5,
    description:
        'The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.',
    occupation: 'Wangsheng Funeral Parlor',
    baseStats: {
        '1/20': {
            'Base HP': 1211.0,
            'Base ATK': 8.29,
            'Base DEF': 68.21,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/20': {
            'Base HP': 3141.0,
            'Base ATK': 21.49,
            'Base DEF': 176.93,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/40': {
            'Base HP': 4179.0,
            'Base ATK': 28.6,
            'Base DEF': 235.41,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/40': {
            'Base HP': 6253.0,
            'Base ATK': 42.79,
            'Base DEF': 352.25,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/50': {
            'Base HP': 6990.0,
            'Base ATK': 47.84,
            'Base DEF': 393.8,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/50': {
            'Base HP': 8042.0,
            'Base ATK': 55.04,
            'Base DEF': 453.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/60': {
            'Base HP': 9026.0,
            'Base ATK': 61.77,
            'Base DEF': 508.47,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/60': {
            'Base HP': 10089.0,
            'Base ATK': 69.04,
            'Base DEF': 568.36,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/70': {
            'Base HP': 10826.0,
            'Base ATK': 74.09,
            'Base DEF': 609.91,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/70': {
            'Base HP': 11899.0,
            'Base ATK': 81.43,
            'Base DEF': 670.34,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/80': {
            'Base HP': 12637.0,
            'Base ATK': 86.48,
            'Base DEF': 711.9,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/80': {
            'Base HP': 13721.0,
            'Base ATK': 93.9,
            'Base DEF': 773.01,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/90': {
            'Base HP': 14459.0,
            'Base ATK': 98.95,
            'Base DEF': 814.56,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
        '90/90': {
            'Base HP': 15552.0,
            'Base ATK': 106.43,
            'Base DEF': 876.15,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Secret Spear of Wangsheng',
            image: 'https://genshin.honeyhunterworld.com/img/s_463101.webp',
            description:
                'Normal Attack\nPerforms up to 6 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '46.89%',
                    Lv2: '50.08%',
                    Lv3: '53.28%',
                    Lv4: '57.54%',
                    Lv5: '60.74%',
                    Lv6: '64.47%',
                    Lv7: '69.26%',
                    Lv8: '74.06%',
                    Lv9: '78.85%',
                    Lv10: '83.65%',
                    Lv11: '88.44%',
                    Lv12: '93.24%',
                    Lv13: '98.04%',
                    Lv14: '102.83%',
                    Lv15: '107.63%',
                },
                '2-Hit DMG': {
                    Lv1: '48.25%',
                    Lv2: '51.54%',
                    Lv3: '54.83%',
                    Lv4: '59.22%',
                    Lv5: '62.51%',
                    Lv6: '66.35%',
                    Lv7: '71.28%',
                    Lv8: '76.22%',
                    Lv9: '81.15%',
                    Lv10: '86.09%',
                    Lv11: '91.02%',
                    Lv12: '95.96%',
                    Lv13: '100.89%',
                    Lv14: '105.83%',
                    Lv15: '110.76%',
                },
                '3-Hit DMG': {
                    Lv1: '61.05%',
                    Lv2: '65.21%',
                    Lv3: '69.38%',
                    Lv4: '74.92%',
                    Lv5: '79.09%',
                    Lv6: '83.94%',
                    Lv7: '90.19%',
                    Lv8: '96.43%',
                    Lv9: '102.67%',
                    Lv10: '108.92%',
                    Lv11: '115.16%',
                    Lv12: '121.41%',
                    Lv13: '127.65%',
                    Lv14: '133.89%',
                    Lv15: '140.14%',
                },
                '4-Hit DMG': {
                    Lv1: '65.64%',
                    Lv2: '70.12%',
                    Lv3: '74.59%',
                    Lv4: '80.56%',
                    Lv5: '85.03%',
                    Lv6: '90.26%',
                    Lv7: '96.97%',
                    Lv8: '103.68%',
                    Lv9: '110.4%',
                    Lv10: '117.11%',
                    Lv11: '123.82%',
                    Lv12: '130.54%',
                    Lv13: '137.25%',
                    Lv14: '143.96%',
                    Lv15: '150.68%',
                },
                '5-Hit DMG': {
                    Lv1: '68.47%',
                    Lv2: '73.14%',
                    Lv3: '77.81%',
                    Lv4: '84.04%',
                    Lv5: '88.70%',
                    Lv6: '94.15%',
                    Lv7: '101.15%',
                    Lv8: '108.16%',
                    Lv9: '115.16%',
                    Lv10: '122.16%',
                    Lv11: '129.17%',
                    Lv12: '136.17%',
                    Lv13: '143.17%',
                    Lv14: '150.18%',
                    Lv15: '157.18%',
                },
                '6-Hit DMG': {
                    Lv1: '85.96%',
                    Lv2: '91.82%',
                    Lv3: '97.68%',
                    Lv4: '105.49%',
                    Lv5: '111.36%',
                    Lv6: '118.19%',
                    Lv7: '126.98%',
                    Lv8: '135.78%',
                    Lv9: '144.57%',
                    Lv10: '153.36%',
                    Lv11: '162.15%',
                    Lv12: '170.94%',
                    Lv13: '179.73%',
                    Lv14: '188.52%',
                    Lv15: '197.31%',
                },
                'Charged Attack DMG': {
                    Lv1: '135.96%',
                    Lv2: '145.23%',
                    Lv3: '154.5%',
                    Lv4: '166.86%',
                    Lv5: '176.13%',
                    Lv6: '186.94%',
                    Lv7: '200.85%',
                    Lv8: '214.76%',
                    Lv9: '228.66%',
                    Lv10: '242.56%',
                    Lv11: '256.47%',
                    Lv12: '270.37%',
                    Lv13: '284.28%',
                    Lv14: '298.18%',
                    Lv15: '312.09%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '25',
                    Lv2: '25',
                    Lv3: '25',
                    Lv4: '25',
                    Lv5: '25',
                    Lv6: '25',
                    Lv7: '25',
                    Lv8: '25',
                    Lv9: '25',
                    Lv10: '25',
                    Lv11: '25',
                    Lv12: '25',
                    Lv13: '25',
                    Lv14: '25',
                    Lv15: '25',
                },
                'Plunge DMG': {
                    Lv1: '65.42%',
                    Lv2: '69.88%',
                    Lv3: '74.34%',
                    Lv4: '80.29%',
                    Lv5: '84.75%',
                    Lv6: '89.95%',
                    Lv7: '96.64%',
                    Lv8: '103.33%',
                    Lv9: '110.02%',
                    Lv10: '116.71%',
                    Lv11: '123.4%',
                    Lv12: '130.1%',
                    Lv13: '136.79%',
                    Lv14: '143.48%',
                    Lv15: '150.17%',
                },
                'Low Plunge DMG': {
                    Lv1: '130.81%',
                    Lv2: '139.73%',
                    Lv3: '148.65%',
                    Lv4: '160.54%',
                    Lv5: '169.46%',
                    Lv6: '179.86%',
                    Lv7: '193.24%',
                    Lv8: '206.62%',
                    Lv9: '220%',
                    Lv10: '233.38%',
                    Lv11: '246.76%',
                    Lv12: '260.13%',
                    Lv13: '273.51%',
                    Lv14: '286.89%',
                    Lv15: '300.27%',
                },
                'High Plunge DMG': {
                    Lv1: '163.39%',
                    Lv2: '174.53%',
                    Lv3: '185.67%',
                    Lv4: '200.52%',
                    Lv5: '211.66%',
                    Lv6: '224.66%',
                    Lv7: '241.37%',
                    Lv8: '258.08%',
                    Lv9: '274.79%',
                    Lv10: '291.5%',
                    Lv11: '308.21%',
                    Lv12: '324.92%',
                    Lv13: '341.63%',
                    Lv14: '358.34%',
                    Lv15: '375.05%',
                },
            },
        },
        {
            name: 'Guide to Afterlife',
            image: 'https://genshin.honeyhunterworld.com/img/s_463201.webp',
            description:
                "Only an unwavering flame can cleanse the impurities of this world.\nHu Tao consumes a set portion of her HP to knock the surrounding enemies back and enter the Paramita Papilio state.\nParamita Papilio\n\u00b7Increases Hu Tao's ATK based on her Max HP at the time of entering this state. ATK Bonus gained this way cannot exceed 400% of Hu Tao's Base ATK.\n\u00b7Converts attack DMG to\nPyro DMG\n, which cannot be overridden by any other elemental infusion.\n\u00b7Charged Attacks apply the Blood Blossom effect to the enemies hit.\n\u00b7Increases Hu Tao's resistance to interruption.\nBlood Blossom\nEnemies affected by Blood Blossom will take\nPyro DMG\nevery 4s. This DMG is considered Elemental Skill DMG.\nEach enemy can be affected by only one Blood Blossom effect at a time, and its duration may only be refreshed by Hu Tao herself.\nParamita Papilio\nends when its duration is over, or Hu Tao has left the battlefield or fallen.\nHu Tao's Secret Spear technique is based on several rules, the first of which is: \"The spear opens the path to the afterlife, and the butterflies bridge this world and the next.\"",
            data: {
                'Activation Cost': {
                    Lv1: '30% Current HP',
                    Lv2: '30% Current HP',
                    Lv3: '30% Current HP',
                    Lv4: '30% Current HP',
                    Lv5: '30% Current HP',
                    Lv6: '30% Current HP',
                    Lv7: '30% Current HP',
                    Lv8: '30% Current HP',
                    Lv9: '30% Current HP',
                    Lv10: '30% Current HP',
                    Lv11: '30% Current HP',
                    Lv12: '30% Current HP',
                    Lv13: '30% Current HP',
                    Lv14: '30% Current HP',
                    Lv15: '30% Current HP',
                },
                'ATK Increase': {
                    Lv1: '3.84% Max HP',
                    Lv2: '4.07% Max HP',
                    Lv3: '4.3% Max HP',
                    Lv4: '4.6% Max HP',
                    Lv5: '4.83% Max HP',
                    Lv6: '5.06% Max HP',
                    Lv7: '5.36% Max HP',
                    Lv8: '5.66% Max HP',
                    Lv9: '5.96% Max HP',
                    Lv10: '6.26% Max HP',
                    Lv11: '6.55% Max HP',
                    Lv12: '6.85% Max HP',
                    Lv13: '7.15% Max HP',
                    Lv14: '7.45% Max HP',
                    Lv15: '7.75% Max HP',
                },
                'Blood Blossom DMG': {
                    Lv1: '64%',
                    Lv2: '68.8%',
                    Lv3: '73.6%',
                    Lv4: '80%',
                    Lv5: '84.8%',
                    Lv6: '89.6%',
                    Lv7: '96%',
                    Lv8: '102.4%',
                    Lv9: '108.8%',
                    Lv10: '115.2%',
                    Lv11: '121.6%',
                    Lv12: '128%',
                    Lv13: '136%',
                    Lv14: '144%',
                    Lv15: '152%',
                },
                'Blood Blossom Duration': {
                    Lv1: '8s',
                    Lv2: '8s',
                    Lv3: '8s',
                    Lv4: '8s',
                    Lv5: '8s',
                    Lv6: '8s',
                    Lv7: '8s',
                    Lv8: '8s',
                    Lv9: '8s',
                    Lv10: '8s',
                    Lv11: '8s',
                    Lv12: '8s',
                    Lv13: '8s',
                    Lv14: '8s',
                    Lv15: '8s',
                },
                Duration: {
                    Lv1: '9s',
                    Lv2: '9s',
                    Lv3: '9s',
                    Lv4: '9s',
                    Lv5: '9s',
                    Lv6: '9s',
                    Lv7: '9s',
                    Lv8: '9s',
                    Lv9: '9s',
                    Lv10: '9s',
                    Lv11: '9s',
                    Lv12: '9s',
                    Lv13: '9s',
                    Lv14: '9s',
                    Lv15: '9s',
                },
                CD: {
                    Lv1: '16s',
                    Lv2: '16s',
                    Lv3: '16s',
                    Lv4: '16s',
                    Lv5: '16s',
                    Lv6: '16s',
                    Lv7: '16s',
                    Lv8: '16s',
                    Lv9: '16s',
                    Lv10: '16s',
                    Lv11: '16s',
                    Lv12: '16s',
                    Lv13: '16s',
                    Lv14: '16s',
                    Lv15: '16s',
                },
            },
        },
        {
            name: 'Spirit Soother',
            image: 'https://genshin.honeyhunterworld.com/img/s_463901.webp',
            description:
                "Commands a blazing spirit to attack, dealing\nPyro DMG\nin a large AoE.\nUpon striking the enemy, regenerates a percentage of Hu Tao's Max HP. This effect can be triggered up to 5 times, based on the number of enemies hit.\nIf Hu Tao's HP is below or equal to 50% when the enemy is hit, both the DMG and HP Regeneration are increased.\nSupernatural activity by those who have already left this world is a source of great anxiety for the Wangsheng Funeral Parlor. In such cases, cremation always lets Hu Tao find peace of mind. The more anxious she feels, the stronger the flame.",
            data: {
                'Skill DMG': {
                    Lv1: '303.27%',
                    Lv2: '321.43%',
                    Lv3: '339.59%',
                    Lv4: '363.2%',
                    Lv5: '381.36%',
                    Lv6: '399.52%',
                    Lv7: '423.13%',
                    Lv8: '446.74%',
                    Lv9: '470.34%',
                    Lv10: '493.95%',
                    Lv11: '517.56%',
                    Lv12: '541.17%',
                    Lv13: '564.78%',
                    Lv14: '588.38%',
                    Lv15: '611.99%',
                },
                'Low HP Skill DMG': {
                    Lv1: '379.09%',
                    Lv2: '401.79%',
                    Lv3: '424.49%',
                    Lv4: '454%',
                    Lv5: '476.7%',
                    Lv6: '499.4%',
                    Lv7: '528.91%',
                    Lv8: '558.42%',
                    Lv9: '587.93%',
                    Lv10: '617.44%',
                    Lv11: '646.95%',
                    Lv12: '676.46%',
                    Lv13: '705.97%',
                    Lv14: '735.48%',
                    Lv15: '764.99%',
                },
                'Skill HP Regeneration': {
                    Lv1: '6.26% Max HP',
                    Lv2: '6.64% Max HP',
                    Lv3: '7.01% Max HP',
                    Lv4: '7.5% Max HP',
                    Lv5: '7.87% Max HP',
                    Lv6: '8.25% Max HP',
                    Lv7: '8.74% Max HP',
                    Lv8: '9.22% Max HP',
                    Lv9: '9.71% Max HP',
                    Lv10: '10.2% Max HP',
                    Lv11: '10.69% Max HP',
                    Lv12: '11.17% Max HP',
                    Lv13: '11.66% Max HP',
                    Lv14: '12.15% Max HP',
                    Lv15: '12.64% Max HP',
                },
                'Low HP Skill Regeneration': {
                    Lv1: '8.35% Max HP',
                    Lv2: '8.85% Max HP',
                    Lv3: '9.35% Max HP',
                    Lv4: '10% Max HP',
                    Lv5: '10.5% Max HP',
                    Lv6: '11% Max HP',
                    Lv7: '11.65% Max HP',
                    Lv8: '12.3% Max HP',
                    Lv9: '12.95% Max HP',
                    Lv10: '13.6% Max HP',
                    Lv11: '14.25% Max HP',
                    Lv12: '14.9% Max HP',
                    Lv13: '15.55% Max HP',
                    Lv14: '16.2% Max HP',
                    Lv15: '16.85% Max HP',
                },
                CD: {
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
                'Energy Cost': {
                    Lv1: '60',
                    Lv2: '60',
                    Lv3: '60',
                    Lv4: '60',
                    Lv5: '60',
                    Lv6: '60',
                    Lv7: '60',
                    Lv8: '60',
                    Lv9: '60',
                    Lv10: '60',
                    Lv11: '60',
                    Lv12: '60',
                    Lv13: '60',
                    Lv14: '60',
                    Lv15: '60',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'The More the Merrier',
            image: 'https://genshin.honeyhunterworld.com/img/p_462301.webp',
            description:
                'When Hu Tao cooks a dish perfectly, she has a 18% chance to receive an additional "Suspicious" dish of the same type.',
        },
        {
            name: 'Flutter By',
            image: 'https://genshin.honeyhunterworld.com/img/p_462101.webp',
            description:
                'When a\nParamita Papilio\nstate activated by\nGuide to Afterlife\nends, all allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 8s.',
        },
        {
            name: 'Sanguine Rouge',
            image: 'https://genshin.honeyhunterworld.com/img/p_462201.webp',
            description:
                "When Hu Tao's HP is equal to or less than 50%, her\nPyro DMG Bonus\nis increased by 33%.",
        },
    ],
    constellations: [
        {
            name: 'Crimson Bouquet',
            image: 'https://genshin.honeyhunterworld.com/img/c_461.webp',
            description:
                "While in a\nParamita Papilio\nstate activated by\nGuide to Afterlife\n, Hu Tao's Charged Attacks do not consume Stamina.",
            level: 1,
        },
        {
            name: 'Ominous Rainfall',
            image: 'https://genshin.honeyhunterworld.com/img/c_462.webp',
            description:
                "Increases the\nBlood Blossom\nDMG by an amount equal to 10% of Hu Tao's Max HP at the time the effect is applied.\nAdditionally,\nSpirit Soother\nwill also apply the\nBlood Blossom\neffect.",
            level: 2,
        },
        {
            name: 'Lingering Carmine',
            image: 'https://genshin.honeyhunterworld.com/img/c_463.webp',
            description:
                'Increases the Level of\nGuide to Afterlife\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Garden of Eternal Rest',
            image: 'https://genshin.honeyhunterworld.com/img/c_464.webp',
            description:
                'Upon defeating an enemy affected by a\nBlood Blossom\nthat Hu Tao applied herself, all nearby allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 15s.',
            level: 4,
        },
        {
            name: 'Floral Incense',
            image: 'https://genshin.honeyhunterworld.com/img/c_465.webp',
            description:
                'Increases the Level of\nSpirit Soother\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: "Butterfly's Embrace",
            image: 'https://genshin.honeyhunterworld.com/img/c_466.webp',
            description:
                "Triggers when Hu Tao's HP drops below 25%, or when she suffers a lethal strike:\nHu Tao will not fall as a result of the DMG sustained. Additionally, for the next 10s, her All Elemental and Physical RES is increased by 200%, her CRIT Rate is increased by 100%, and her resistance to interruption is greatly increased.\nThis effect triggers automatically when Hu Tao has 1 HP left.\nCan only occur once every 60s.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default HuTao
