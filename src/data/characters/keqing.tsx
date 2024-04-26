import {
    Bonus,
    Character,
    DamageType,
    FormulaOutputType,
    FormulaType,
    TalentScaling,
} from '@/interfaces/Character'

const talentScalings: TalentScaling = {
    'Normal Attack: Yunlai Swordsmanship': {
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
    'Stellar Restoration': {
        'Lightning Stiletto DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Electro DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: DamageType.Electro,
        },
        'Slashing DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Electro DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: DamageType.Electro,
        },
        'Thunderclap Slash DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Electro DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: DamageType.Electro,
        },
        'Thundering Might': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Electro DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
        },
        CD: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Elemental Skill CD Reduction'],
            outputType: FormulaOutputType.Time,
        },
    },
    'Starward Sword': {
        'Skill DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: [
                'Electro DMG Bonus',
                'Elemental Burst DMG Bonus',
            ],
            damageType: DamageType.Electro,
        },
        'Consecutive Slash DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: [
                'Electro DMG Bonus',
                'Elemental Burst DMG Bonus',
            ],
            damageType: DamageType.Electro,
        },
        'Last Attack DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: [
                'Electro DMG Bonus',
                'Elemental Burst DMG Bonus',
            ],
            damageType: DamageType.Electro,
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
        name: 'Thundering Penance',
        description: (
            <span>
                After recasting Stellar Restoration while a Lightning Stiletto is
                present, Keqing&apos;s weapon deals{' '}
                <span style={{ color: '#8c729a' }}>Electro DMG</span> for{' '}
                <span style={{ color: '#ddd' }}>5s</span>.
            </span>
        ),
        icon: '/images/characters/keqing-passive1.png',
        effect: (attributes) => {
            // * Unnecessary
            return { attributes }
        },
        affectsTalentIndex: 0,
        applyToTalentScaling: (talentScaling) => {
            const normalAttackScaling =
                talentScaling['Normal Attack: Yunlai Swordsmanship']

            if (normalAttackScaling) {
                Object.values(normalAttackScaling).forEach((aspect) => {
                    if (
                        aspect.formulaType !== FormulaType.DamageFormula ||
                        !aspect.multiplicativeBonusStat
                    )
                        return
                    aspect.multiplicativeBonusStat[0] = 'Electro DMG Bonus'
                    aspect.damageType = DamageType.Electro
                })
            }
        },
        origin: 'A1',
        priority: 2,
    },
    {
        name: 'Aristocratic Dignity',
        description: (
            <span>
                When casting Starward Sword, Keqing&apos;s CRIT Rate is increased by{' '}
                <span style={{ color: '#ddd' }}>15%</span>, and her Energy Recharge
                is increased by <span style={{ color: '#ddd' }}>15%</span>. This
                effect lasts for <span style={{ color: '#ddd' }}>8s</span>.
            </span>
        ),
        icon: '/images/characters/keqing-passive2.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'CRIT Rate': attributes['CRIT Rate'] + 0.15,
                'Energy Recharge': attributes['Energy Recharge'] + 0.15,
            }
            return { attributes: newAttributes }
        },
        origin: 'A4',
        priority: 1,
    },
]

const constellationBonuses: Bonus[] = [
    {
        name: 'Thundering Might',
        description: (
            <span>
                Recasting Stellar Restoration while a Lightning Stiletto is present
                causes Keqing to deal <span style={{ color: '#ddd' }}>50%</span> of
                her ATK as AoE <span style={{ color: '#8c729a' }}>Electro DMG</span>.
            </span>
        ),
        icon: '/images/characters/keqing-constellation1.png',
        effect: (attributes) => {
            // * Unnecessary
            return { attributes }
        },
        affectsTalentIndex: 0,
        applyToTalentScaling: (talentScaling) => {
            if (talentScaling['Stellar Restoration']['Thundering Might'])
                talentScaling['Stellar Restoration']['Thundering Might'].damageType =
                    DamageType.Electro
        },
        origin: 'C1',
        minConstellation: 1,
        priority: 2,
    },
    {
        name: 'Keen Extraction',
        description: (
            <span>
                When Keqing&apos;s Normal and Charged Attacks hit opponents affected
                by Electro, they have a <span style={{ color: '#ddd' }}>50%</span>{' '}
                chance of producing an Elemental Particle. This effect can only occur
                once every <span style={{ color: '#ddd' }}>5s</span>.
            </span>
        ),
        icon: '/images/characters/keqing-constellation2.png',
        effect: (attributes) => {
            // * Unnecessary, this does nothing
            return { attributes }
        },
        origin: 'C2',
        visible: false,
        minConstellation: 2,
    },
    {
        name: 'Foreseen Reformation',
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>Starward Sword</span> by 3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/keqing-constellation3.png',
        effect: (attributes, talentLevels) => {
            if (!talentLevels) return { attributes }

            const newTalentLevels = [...talentLevels]
            newTalentLevels[2] = Math.min(newTalentLevels[2] + 3, 13)

            return { attributes: attributes, updatedTalentLevels: newTalentLevels }
        },
        minConstellation: 3,
        origin: 'C3',
        enabled: true,
        visible: false,
        priority: 0,
    },
    {
        name: 'Attunement',
        description: (
            <span>
                For <span style={{ color: '#ddd' }}>10s</span> after Keqing triggers
                an{' '}
                <span style={{ color: '#8c729a' }}>
                    Electro-related Elemental Reaction
                </span>
                , her ATK is increased by <span style={{ color: '#ddd' }}>25%</span>.
            </span>
        ),
        icon: '/images/characters/keqing-constellation4.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                ATK: attributes['ATK'] * 1.25,
            }
            return { attributes: newAttributes }
        },
        origin: 'C4',
        minConstellation: 4,
        priority: 1,
    },
    {
        name: 'Beckoning Stars',
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>Stellar Restoration</span> by 3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/keqing-constellation5.png',
        effect: (attributes, talentLevels) => {
            if (!talentLevels) return { attributes }

            const newTalentLevels = [...talentLevels]
            newTalentLevels[1] = Math.min(newTalentLevels[1] + 3, 13)

            return { attributes: attributes, updatedTalentLevels: newTalentLevels }
        },
        minConstellation: 5,
        origin: 'C5',
        enabled: true,
        visible: false,
        priority: 0,
    },
    {
        name: 'Tenacious Star',
        description: (
            <span>
                When initiating a Normal Attack, a Charged Attack, Elemental Skill or
                Elemental Burst, Keqing gains a{' '}
                <span style={{ color: '#ddd' }}>6/12/18/24%</span>{' '}
                <span style={{ color: '#8c729a' }}>Electro DMG Bonus</span> for{' '}
                <span style={{ color: '#ddd' }}>8s</span>.
            </span>
        ),
        icon: '/images/characters/keqing-constellation6.png',
        effect: (attributes, talentLevels, currentStacks) => {
            if (!currentStacks) return { attributes }

            const elementalDamageBonus = [0.06, 0.12, 0.18, 0.24]

            const newAttributes = {
                ...attributes,
                'Electro DMG Bonus':
                    attributes['Electro DMG Bonus'] +
                    elementalDamageBonus[currentStacks - 1],
            }
            return { attributes: newAttributes }
        },
        maxStacks: 4,
        stackOptions: ['None', '1 Stack', '2 Stacks', '3 Stacks', '4 Stacks'],
        origin: 'C6',
        minConstellation: 6,
        priority: 1,
    },
]

const Keqing: Character = {
    name: 'Keqing',
    icon: '/images/characters/keqing.png',
    weapon: 'Sword',
    vision: 'Electro',
    rarity: 5,
    description:
        "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis's unilateral approach to policymaking in Liyue \u2014 but in truth, gods admire skeptics such as her quite a lot.",
    occupation: 'Liyue Qixing',
    baseStats: {
        '1/20': {
            'Base HP': 1020.0,
            'Base ATK': 25.14,
            'Base DEF': 62.22,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/20': {
            'Base HP': 2646.0,
            'Base ATK': 65.21,
            'Base DEF': 161.41,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/40': {
            'Base HP': 3521.0,
            'Base ATK': 86.76,
            'Base DEF': 214.76,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/40': {
            'Base HP': 5268.0,
            'Base ATK': 129.82,
            'Base DEF': 321.35,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/50': {
            'Base HP': 5889.0,
            'Base ATK': 145.13,
            'Base DEF': 359.26,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/50': {
            'Base HP': 6776.0,
            'Base ATK': 166.97,
            'Base DEF': 413.33,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/60': {
            'Base HP': 7604.0,
            'Base ATK': 187.39,
            'Base DEF': 463.87,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/60': {
            'Base HP': 8500.0,
            'Base ATK': 209.46,
            'Base DEF': 518.5,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/70': {
            'Base HP': 9121.0,
            'Base ATK': 224.77,
            'Base DEF': 556.41,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/70': {
            'Base HP': 10025.0,
            'Base ATK': 247.04,
            'Base DEF': 611.54,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/80': {
            'Base HP': 10647.0,
            'Base ATK': 262.36,
            'Base DEF': 649.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/80': {
            'Base HP': 11561.0,
            'Base ATK': 284.88,
            'Base DEF': 705.2,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/90': {
            'Base HP': 12182.0,
            'Base ATK': 300.19,
            'Base DEF': 743.11,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
        '90/90': {
            'Base HP': 13103.0,
            'Base ATK': 322.89,
            'Base DEF': 799.3,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Yunlai Swordsmanship',
            image: 'https://genshin.honeyhunterworld.com/img/s_423101.webp',
            description:
                'Normal Attack\nPerforms up to 5 rapid strikes.\nCharged Attack\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '41.02%',
                    Lv2: '44.36%',
                    Lv3: '47.7%',
                    Lv4: '52.47%',
                    Lv5: '55.81%',
                    Lv6: '59.62%',
                    Lv7: '64.87%',
                    Lv8: '70.12%',
                    Lv9: '75.37%',
                    Lv10: '81.09%',
                    Lv11: '86.81%',
                    Lv12: '92.54%',
                    Lv13: '98.26%',
                    Lv14: '103.99%',
                    Lv15: '109.71%',
                },
                '2-Hit DMG': {
                    Lv1: '41.02%',
                    Lv2: '44.36%',
                    Lv3: '47.7%',
                    Lv4: '52.47%',
                    Lv5: '55.81%',
                    Lv6: '59.62%',
                    Lv7: '64.87%',
                    Lv8: '70.12%',
                    Lv9: '75.37%',
                    Lv10: '81.09%',
                    Lv11: '86.81%',
                    Lv12: '92.54%',
                    Lv13: '98.26%',
                    Lv14: '103.99%',
                    Lv15: '109.71%',
                },
                '3-Hit DMG': {
                    Lv1: '54.44%',
                    Lv2: '58.87%',
                    Lv3: '63.3%',
                    Lv4: '69.63%',
                    Lv5: '74.06%',
                    Lv6: '79.12%',
                    Lv7: '86.09%',
                    Lv8: '93.05%',
                    Lv9: '100.01%',
                    Lv10: '107.61%',
                    Lv11: '115.21%',
                    Lv12: '122.8%',
                    Lv13: '130.4%',
                    Lv14: '137.99%',
                    Lv15: '145.59%',
                },
                '4-Hit DMG': {
                    Lv1: '65.88%',
                    Lv2: '71.24%',
                    Lv3: '76.60%',
                    Lv4: '84.26%',
                    Lv5: '89.62%',
                    Lv6: '95.75%',
                    Lv7: '104.18%',
                    Lv8: '112.60%',
                    Lv9: '121.03%',
                    Lv10: '130.22%',
                    Lv11: '139.41%',
                    Lv12: '148.60%',
                    Lv13: '157.80%',
                    Lv14: '166.99%',
                    Lv15: '176.18%',
                },
                '5-Hit DMG': {
                    Lv1: '66.99%',
                    Lv2: '72.45%',
                    Lv3: '77.9%',
                    Lv4: '85.69%',
                    Lv5: '91.14%',
                    Lv6: '97.37%',
                    Lv7: '105.94%',
                    Lv8: '114.51%',
                    Lv9: '123.08%',
                    Lv10: '132.43%',
                    Lv11: '141.78%',
                    Lv12: '151.13%',
                    Lv13: '160.47%',
                    Lv14: '169.82%',
                    Lv15: '179.17%',
                },
                'Charged Attack DMG': {
                    Lv1: '162.80%',
                    Lv2: '176.05%',
                    Lv3: '189.30%',
                    Lv4: '208.23%',
                    Lv5: '221.48%',
                    Lv6: '236.63%',
                    Lv7: '257.45%',
                    Lv8: '278.27%',
                    Lv9: '299.09%',
                    Lv10: '321.81%',
                    Lv11: '344.53%',
                    Lv12: '367.24%',
                    Lv13: '389.96%',
                    Lv14: '412.67%',
                    Lv15: '435.39%',
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
            name: 'Stellar Restoration',
            image: 'https://genshin.honeyhunterworld.com/img/s_423201.webp',
            description:
                'Hurls a Lightning Stiletto that annihilates her opponents like the swift thunder.\nWhen the Stiletto hits its target, it deals\nElectro DMG\nto opponents in a small AoE, and places a Stiletto Mark on the spot hit.\nHold\nHold to adjust the direction in which the Stiletto shall be thrown.\nStilettos thrown by the Hold attack mode can be suspended in mid-air, allowing Keqing to jump to them when using Stellar Restoration a second time.\nLightning Stiletto\nIf Keqing uses Stellar Restoration again or uses a Charged Attack while its duration lasts, it will clear the Stiletto Mark and produce different effects:\n\u00b7If she uses Stellar Restoration again, she will blink to the location of the Mark and unleash one slashing attack that deals\nAoE Electro DMG\n. When blinking to a Stiletto that was thrown from a Holding attack, Keqing can leap across obstructing terrain.\n\u00b7If Keqing uses a Charged Attack, she will ignite a series of thundering cuts at the Mark\'s location, dealing\nAoE Electro DMG\n.\n"Humans are like moths, endlessly chasing the flame we call gods and adepti. But this light that I have here is my own."',
            data: {
                'Lightning Stiletto DMG': {
                    Lv1: '50.4%',
                    Lv2: '54.18%',
                    Lv3: '57.96%',
                    Lv4: '63%',
                    Lv5: '66.78%',
                    Lv6: '70.56%',
                    Lv7: '75.6%',
                    Lv8: '80.64%',
                    Lv9: '85.68%',
                    Lv10: '90.72%',
                    Lv11: '95.76%',
                    Lv12: '100.8%',
                    Lv13: '107.1%',
                    Lv14: '113.4%',
                    Lv15: '119.7%',
                },
                'Slashing DMG': {
                    Lv1: '168%',
                    Lv2: '180.6%',
                    Lv3: '193.2%',
                    Lv4: '210%',
                    Lv5: '222.6%',
                    Lv6: '235.2%',
                    Lv7: '252%',
                    Lv8: '268.8%',
                    Lv9: '285.6%',
                    Lv10: '302.4%',
                    Lv11: '319.2%',
                    Lv12: '336%',
                    Lv13: '357%',
                    Lv14: '378%',
                    Lv15: '399%',
                },
                'Thunderclap Slash DMG': {
                    Lv1: '168.00%',
                    Lv2: '180.60%',
                    Lv3: '193.20%',
                    Lv4: '210.00%',
                    Lv5: '222.60%',
                    Lv6: '235.20%',
                    Lv7: '252.00%',
                    Lv8: '268.80%',
                    Lv9: '285.60%',
                    Lv10: '302.40%',
                    Lv11: '319.20%',
                    Lv12: '336.00%',
                    Lv13: '357.00%',
                    Lv14: '378.00%',
                    Lv15: '399.00%',
                },
                'Thundering Might': {
                    Lv1: '50.00%',
                    Lv2: '50.00%',
                    Lv3: '50.00%',
                    Lv4: '50.00%',
                    Lv5: '50.00%',
                    Lv6: '50.00%',
                    Lv7: '50.00%',
                    Lv8: '50.00%',
                    Lv9: '50.00%',
                    Lv10: '50.00%',
                    Lv11: '50.00%',
                    Lv12: '50.00%',
                    Lv13: '50.00%',
                    Lv14: '50.00%',
                    Lv15: '50.00%',
                },
                CD: {
                    Lv1: '7.5s',
                    Lv2: '7.5s',
                    Lv3: '7.5s',
                    Lv4: '7.5s',
                    Lv5: '7.5s',
                    Lv6: '7.5s',
                    Lv7: '7.5s',
                    Lv8: '7.5s',
                    Lv9: '7.5s',
                    Lv10: '7.5s',
                    Lv11: '7.5s',
                    Lv12: '7.5s',
                    Lv13: '7.5s',
                    Lv14: '7.5s',
                    Lv15: '7.5s',
                },
            },
        },
        {
            name: 'Starward Sword',
            image: 'https://genshin.honeyhunterworld.com/img/s_423901.webp',
            description:
                "Keqing unleashes the power of lightning, dealing\nElectro DMG\nin an AOE.\nShe then blends into the shadow of her blade, striking a series of thunderclap-blows to nearby opponents simultaneously that deal multiple instances of\nElectro DMG\n. The final attack deals massive\nAoE Electro DMG\n.\nThe swiftest technique in Keqing's personal arsenal is fast enough to bring stars crashing down.",
            data: {
                'Skill DMG': {
                    Lv1: '88%',
                    Lv2: '94.6%',
                    Lv3: '101.2%',
                    Lv4: '110%',
                    Lv5: '116.6%',
                    Lv6: '123.2%',
                    Lv7: '132%',
                    Lv8: '140.8%',
                    Lv9: '149.6%',
                    Lv10: '158.4%',
                    Lv11: '167.2%',
                    Lv12: '176%',
                    Lv13: '187%',
                    Lv14: '198%',
                    Lv15: '209%',
                },
                'Consecutive Slash DMG': {
                    Lv1: '192.00%',
                    Lv2: '206.40%',
                    Lv3: '220.80%',
                    Lv4: '240.00%',
                    Lv5: '254.40%',
                    Lv6: '268.80%',
                    Lv7: '288.00%',
                    Lv8: '307.20%',
                    Lv9: '326.40%',
                    Lv10: '345.60%',
                    Lv11: '364.80%',
                    Lv12: '384.00%',
                    Lv13: '408.00%',
                    Lv14: '432.00%',
                    Lv15: '456.00%',
                },
                'Last Attack DMG': {
                    Lv1: '188.8%',
                    Lv2: '202.96%',
                    Lv3: '217.12%',
                    Lv4: '236%',
                    Lv5: '250.16%',
                    Lv6: '264.32%',
                    Lv7: '283.2%',
                    Lv8: '302.08%',
                    Lv9: '320.96%',
                    Lv10: '339.84%',
                    Lv11: '358.72%',
                    Lv12: '377.6%',
                    Lv13: '401.2%',
                    Lv14: '424.8%',
                    Lv15: '448.4%',
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
            name: "Land's Overseer",
            image: 'https://genshin.honeyhunterworld.com/img/p_422301.webp',
            description:
                'When dispatched on an expedition in Liyue, time consumed is reduced by 25%.',
        },
        {
            name: 'Thundering Penance',
            image: 'https://genshin.honeyhunterworld.com/img/p_422101.webp',
            description:
                "After recasting\nStellar Restoration\nwhile a Lightning Stiletto is present, Keqing's weapon gains an\nElectro Infusion\nfor 5s.",
        },
        {
            name: 'Aristocratic Dignity',
            image: 'https://genshin.honeyhunterworld.com/img/p_422201.webp',
            description:
                "When casting\nStarward Sword\n, Keqing's CRIT Rate is increased by 15%, and her Energy Recharge is increased by 15%. This effect lasts for 8s.",
        },
    ],
    constellations: [
        {
            name: 'Thundering Might',
            image: 'https://genshin.honeyhunterworld.com/img/c_421.webp',
            description:
                'Recasting\nStellar Restoration\nwhile a Lightning Stiletto is present causes Keqing to deal 50% of her ATK as\nAoE Electro DMG\nat the start point and terminus of her Blink.',
            level: 1,
        },
        {
            name: 'Keen Extraction',
            image: 'https://genshin.honeyhunterworld.com/img/c_422.webp',
            description:
                "When Keqing's Normal and Charged Attacks hit opponents affected by\nElectro\n, they have a 50% chance of producing an Elemental Particle.\nThis effect can only occur once every 5s.",
            level: 2,
        },
        {
            name: 'Foreseen Reformation',
            image: 'https://genshin.honeyhunterworld.com/img/c_423.webp',
            description:
                'Increases the Level of\nStarward Sword\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Attunement',
            image: 'https://genshin.honeyhunterworld.com/img/c_424.webp',
            description:
                'For 10s after Keqing triggers an\nElectro-related Elemental Reaction\n, her ATK is increased by 25%.',
            level: 4,
        },
        {
            name: 'Beckoning Stars',
            image: 'https://genshin.honeyhunterworld.com/img/c_425.webp',
            description:
                'Increases the Level of\nStellar Restoration\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Tenacious Star',
            image: 'https://genshin.honeyhunterworld.com/img/c_426.webp',
            description:
                'When initiating a Normal Attack, a Charged Attack, Elemental Skill or Elemental Burst, Keqing gains a 6%\nElectro DMG Bonus\nfor 8s.\nEffects triggered by Normal Attacks, Charged Attacks, Elemental Skills and Elemental Bursts are considered independent entities.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Keqing
