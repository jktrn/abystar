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
    'Normal Attack: Ripple of Fate': {
        '1-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: ['Hydro DMG Bonus', 'Normal Attack DMG Bonus'],
            damageType: DamageType.Hydro,
        },
        '2-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: ['Hydro DMG Bonus', 'Normal Attack DMG Bonus'],
            damageType: DamageType.Hydro,
        },
        '3-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: ['Hydro DMG Bonus', 'Normal Attack DMG Bonus'],
            damageType: DamageType.Hydro,
        },
        '4-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: ['Hydro DMG Bonus', 'Normal Attack DMG Bonus'],
            damageType: DamageType.Hydro,
        },
        'Charged Attack DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Charged Attack Additive Bonus'],
            multiplicativeBonusStat: ['Hydro DMG Bonus', 'Charged Attack DMG Bonus'],
            damageType: DamageType.Hydro,
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
                'Hydro DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        'Low Plunge DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Plunging Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        'High Plunge DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Plunging Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
    },
    'Mirror Reflection of Doom': {
        DoT: {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        'Explosion DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        CD: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Elemental Skill CD Reduction'],
            outputType: FormulaOutputType.Time,
        },
    },
    'Stellaris Phantasm': {
        'Illusory Bubble Duration': {
            formulaType: FormulaType.GenericFormulaWithScaling,
            multiplicativeBonusStat: ['Elemental Burst CD Reduction'],
            outputType: FormulaOutputType.Time,
        },
        'Illusory Bubble Explosion DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Burst DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        'DMG Bonus': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Percentage,
        },
        Duration: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'Omen Duration': {
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
        name: 'Stellaris Phantasm',
        description: (
            <span>
                During the duration of Omen, enemies take increased DMG (see
                &quot;DMG Bonus&quot; of{' '}
                <span style={{ color: '#ddd' }}>Stellaris Phantasm</span> for
                percentages)
            </span>
        ),
        icon: '/images/characters/Skill_E_Mona_01.png',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!state || !talentLevels) return { attributes }

            const scalingValue =
                getTalentScalingValue(
                    state,
                    'Stellaris Phantasm',
                    'DMG Bonus',
                    talentLevels[2]
                ) / 100

            const newAttributes = {
                ...attributes,
                'All DMG Bonus': (attributes['All DMG Bonus'] || 0) + scalingValue,
            }

            return { attributes: newAttributes }
        },
        origin: 'Q',
        priority: 1,
    },
    {
        name: 'Waterborne Destiny',
        description: (
            <span>
                Increases Mona&apos;s{' '}
                <span style={{ color: '#3d9bc1' }}>Hydro DMG Bonus</span> by 20% of
                her Energy Recharge rate
            </span>
        ),
        icon: '/images/characters/UI_Talent_S_Mona_06.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Hydro DMG Bonus':
                    attributes['Hydro DMG Bonus'] +
                    0.2 * attributes['Energy Recharge'],
            }

            return { attributes: newAttributes }
        },
        enabled: true,
        origin: 'A4',
        minAscension: 4,
        priority: 2,
    },
]

const constellationBonuses: Bonus[] = [
    {
        name: 'Prophecy of Submersion',
        description: (
            <span>
                When any of your own party members hits an opponent affected by an
                Omen, the effects of{' '}
                <span style={{ color: '#3d9bc1' }}>
                    Hydro-related Elemental Reactions
                </span>{' '}
                are enhanced for 8s:
                <ul className="mb-0">
                    <li>- Electro-Charged DMG increases by 15%</li>
                    <li>- Vaporize DMG increases by 15%</li>
                    <li>- Hydro Swirl DMG increases by 15%</li>
                    <li>- Frozen duration is extended by 15%</li>
                </ul>
            </span>
        ),
        icon: '/images/characters/UI_Talent_S_Mona_01.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Electro-Charged DMG Bonus':
                    (attributes['Electro-Charged DMG Bonus'] || 0) + 0.15,
                'Vaporize DMG Bonus': (attributes['Vaporize DMG'] || 0) + 0.15,
                'Hydro Swirl DMG Bonus': (attributes['Hydro Swirl DMG'] || 0) + 0.15,
                'Frozen Duration Bonus': (attributes['Frozen Duration'] || 0) + 0.15,
            }

            return { attributes: newAttributes }
        },
        minConstellation: 1,
        origin: 'C1',
        implemented: false,
        priority: 1,
    },
    {
        name: 'Lunar Chain',
        description: (
            <span>
                When a Normal Attack hits, there is a 20% chance that it will be
                automatically followed by a Charged Attack. This effect can only
                occur once every 5s.
            </span>
        ),
        icon: '/images/characters/UI_Talent_S_Mona_02.png',
        effect: (attributes) => {
            // * Unimplementable
            return { attributes }
        },
        minConstellation: 2,
        origin: 'C2',
        visible: false,
    },
    {
        name: 'Restless Resolution',
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>Stellaris Phantasm</span> by 3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/UI_Talent_U_Mona_01.png',
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
        name: 'Prophecy of Oblivion',
        description: (
            <span>
                When any party member attacks an opponent affected by an Omen, their
                CRIT Rate is increased by 15%
            </span>
        ),
        icon: '/images/characters/UI_Talent_S_Mona_03.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'CRIT Rate': (attributes['CRIT Rate'] || 0) + 0.15,
            }

            return { attributes: newAttributes }
        },
        minConstellation: 4,
        origin: 'C4',
        priority: 1,
    },
    {
        name: 'Mockery of Fortuna',
        description: (
            <span>
                Increase the Level of{' '}
                <span style={{ color: '#DDD' }}>Mirror Reflection of Doom</span> by
                3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/UI_Talent_U_Mona_02.png',
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
        name: 'Rhetorics of Calamitas',
        description: (
            <span>
                Upon entering <span style={{ color: '#ddd' }}>Illusory Torrent</span>
                , Mona gains a 60% increase to the DMG of her next Charged Attack per
                second of movement, with a maximum of 180% (lasting up to 8s)
            </span>
        ),
        icon: '/images/characters/UI_Talent_S_Mona_04.png',
        effect: (attributes, talentLevels, currentStacks) => {
            if (!currentStacks) return { attributes }

            const newAttributes = {
                ...attributes,
                'Charged Attack DMG Bonus':
                    attributes['Charged Attack DMG Bonus'] + 0.6 * currentStacks,
            }

            return { attributes: newAttributes }
        },
        maxStacks: 3,
        stackOptions: ['Off', '1s', '2s', '3s'],
        minConstellation: 6,
        origin: 'C6',
        priority: 1,
    },
]

const Mona: Character = {
    name: 'Mona',
    icon: '/images/characters/UI_AvatarIcon_Mona.png',
    weapon: 'Catalyst',
    vision: 'Hydro',
    rarity: 5,
    description:
        'A mysterious young astrologer who proclaims herself to be "Astrologist Mona Megistus," and who possesses abilities to match the title. Erudite, but prideful.',
    occupation: 'Mondstadt',
    baseStats: {
        '1/20': {
            'Base HP': 810.0,
            'Base ATK': 22.34,
            'Base DEF': 50.86,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '20/20': {
            'Base HP': 2102.0,
            'Base ATK': 57.96,
            'Base DEF': 131.92,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '20/40': {
            'Base HP': 2797.0,
            'Base ATK': 77.12,
            'Base DEF': 175.52,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '40/40': {
            'Base HP': 4185.0,
            'Base ATK': 115.39,
            'Base DEF': 262.64,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '40/50': {
            'Base HP': 4678.0,
            'Base ATK': 129.0,
            'Base DEF': 293.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.08,
        },
        '50/50': {
            'Base HP': 5383.0,
            'Base ATK': 148.42,
            'Base DEF': 337.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.08,
        },
        '50/60': {
            'Base HP': 6041.0,
            'Base ATK': 166.57,
            'Base DEF': 379.13,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.16,
        },
        '60/60': {
            'Base HP': 6752.0,
            'Base ATK': 186.19,
            'Base DEF': 423.78,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.16,
        },
        '60/70': {
            'Base HP': 7246.0,
            'Base ATK': 199.8,
            'Base DEF': 454.76,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.16,
        },
        '70/70': {
            'Base HP': 7964.0,
            'Base ATK': 219.59,
            'Base DEF': 499.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.16,
        },
        '70/80': {
            'Base HP': 8458.0,
            'Base ATK': 233.21,
            'Base DEF': 530.8,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.24,
        },
        '80/80': {
            'Base HP': 9184.0,
            'Base ATK': 253.23,
            'Base DEF': 576.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.24,
        },
        '80/90': {
            'Base HP': 9677.0,
            'Base ATK': 266.84,
            'Base DEF': 607.35,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.32,
        },
        '90/90': {
            'Base HP': 10409.0,
            'Base ATK': 287.01,
            'Base DEF': 653.27,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.32,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Ripple of Fate',
            image: '/images/characters/Skill_A_Catalyst_MD.png',
            description:
                'Normal Attack\nPerforms up to 4 water splash attacks that deal\nHydro DMG\n.\nCharged Attack\nConsumes a certain amount of Stamina to deal\nAoE Hydro DMG\nafter a short casting time.\nPlunging Attack\nGathering the might of Hydro, Mona plunges towards the ground from mid-air, damaging all opponents in her path. Deals\nAoE Hydro DMG\nupon impact with the ground.',
            data: {
                '1-Hit DMG': {
                    Lv1: '37.6%',
                    Lv2: '40.42%',
                    Lv3: '43.24%',
                    Lv4: '47%',
                    Lv5: '49.82%',
                    Lv6: '52.64%',
                    Lv7: '56.4%',
                    Lv8: '60.16%',
                    Lv9: '63.92%',
                    Lv10: '67.68%',
                    Lv11: '71.44%',
                    Lv12: '75.2%',
                    Lv13: '79.9%',
                    Lv14: '84.6%',
                    Lv15: '89.3%',
                },
                '2-Hit DMG': {
                    Lv1: '36%',
                    Lv2: '38.7%',
                    Lv3: '41.4%',
                    Lv4: '45%',
                    Lv5: '47.7%',
                    Lv6: '50.4%',
                    Lv7: '54%',
                    Lv8: '57.6%',
                    Lv9: '61.2%',
                    Lv10: '64.8%',
                    Lv11: '68.4%',
                    Lv12: '72%',
                    Lv13: '76.5%',
                    Lv14: '81%',
                    Lv15: '85.5%',
                },
                '3-Hit DMG': {
                    Lv1: '44.8%',
                    Lv2: '48.16%',
                    Lv3: '51.52%',
                    Lv4: '56%',
                    Lv5: '59.36%',
                    Lv6: '62.72%',
                    Lv7: '67.2%',
                    Lv8: '71.68%',
                    Lv9: '76.16%',
                    Lv10: '80.64%',
                    Lv11: '85.12%',
                    Lv12: '89.6%',
                    Lv13: '95.2%',
                    Lv14: '100.8%',
                    Lv15: '106.4%',
                },
                '4-Hit DMG': {
                    Lv1: '56.16%',
                    Lv2: '60.37%',
                    Lv3: '64.58%',
                    Lv4: '70.2%',
                    Lv5: '74.41%',
                    Lv6: '78.62%',
                    Lv7: '84.24%',
                    Lv8: '89.86%',
                    Lv9: '95.47%',
                    Lv10: '101.09%',
                    Lv11: '106.7%',
                    Lv12: '112.32%',
                    Lv13: '119.34%',
                    Lv14: '126.36%',
                    Lv15: '133.38%',
                },
                'Charged Attack DMG': {
                    Lv1: '149.72%',
                    Lv2: '160.95%',
                    Lv3: '172.18%',
                    Lv4: '187.15%',
                    Lv5: '198.38%',
                    Lv6: '209.61%',
                    Lv7: '224.58%',
                    Lv8: '239.55%',
                    Lv9: '254.52%',
                    Lv10: '269.5%',
                    Lv11: '285.07%',
                    Lv12: '305.43%',
                    Lv13: '325.79%',
                    Lv14: '346.15%',
                    Lv15: '366.51%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '50',
                    Lv2: '50',
                    Lv3: '50',
                    Lv4: '50',
                    Lv5: '50',
                    Lv6: '50',
                    Lv7: '50',
                    Lv8: '50',
                    Lv9: '50',
                    Lv10: '50',
                    Lv11: '50',
                    Lv12: '50',
                    Lv13: '50',
                    Lv14: '50',
                    Lv15: '50',
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
                    Lv6: '165.17%',
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
            name: 'Mirror Reflection of Doom',
            image: '/images/characters/Skill_S_Mona_01.png',
            description:
                'Creates an illusory Phantom of Fate from coalesced waterspouts.\nPhantom\nHas the following special properties:\n\u00b7Continuously taunts nearby opponents, attracting their fire.\n\u00b7Continuously deals\nHydro DMG\nto nearby opponents.\n\u00b7When its duration expires, the Phantom explodes, dealing\nAoE Hydro DMG\n.\nHold\nUtilizes water currents to move backwards swiftly before conjuring a Phantom.\nOnly one Phantom created by Mirror Reflection of Doom can exist at any time.\nSkilled astrologers have always dreamed of using a phantom facsimile of themselves to ward off imminent ill fate, but Mona must be the first to make such a mockery of it in all of Teyvat.',
            data: {
                DoT: {
                    Lv1: '32%',
                    Lv2: '34.4%',
                    Lv3: '36.8%',
                    Lv4: '40%',
                    Lv5: '42.4%',
                    Lv6: '44.8%',
                    Lv7: '48%',
                    Lv8: '51.2%',
                    Lv9: '54.4%',
                    Lv10: '57.6%',
                    Lv11: '60.8%',
                    Lv12: '64%',
                    Lv13: '68%',
                    Lv14: '72%',
                    Lv15: '76%',
                },
                'Explosion DMG': {
                    Lv1: '132.8%',
                    Lv2: '142.76%',
                    Lv3: '152.72%',
                    Lv4: '166%',
                    Lv5: '175.96%',
                    Lv6: '185.92%',
                    Lv7: '199.2%',
                    Lv8: '212.48%',
                    Lv9: '225.76%',
                    Lv10: '239.04%',
                    Lv11: '252.32%',
                    Lv12: '265.6%',
                    Lv13: '282.2%',
                    Lv14: '298.8%',
                    Lv15: '315.4%',
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
            },
        },
        {
            name: 'Stellaris Phantasm',
            image: '/images/characters/Skill_E_Mona_01.png',
            description:
                'Mona summons the sparkling waves and creates a reflection of the starry sky, applying the Illusory Bubble status to opponents in a large AoE.\nIllusory Bubble\nTraps opponents inside a pocket of destiny and also makes them\nWet\n. Renders weaker opponents immobile.\nWhen an opponent affected by Illusory Bubble sustains DMG, it has the following effects:\n\u00b7Applies an Omen to the opponent, which gives a DMG Bonus, also increasing the DMG of the attack that causes it.\n\u00b7Removes the Illusory Bubble, dealing\nHydro\nDMG in the process.\nOmen\nDuring its duration, increases DMG taken by opponents.\nIt was from the time that gods first traced the lights in the heavens with their eyes that the notion of "fate" was born.',
            data: {
                'Illusory Bubble Duration': {
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
                'Illusory Bubble Explosion DMG': {
                    Lv1: '442.4%',
                    Lv2: '475.58%',
                    Lv3: '508.76%',
                    Lv4: '553%',
                    Lv5: '586.18%',
                    Lv6: '619.36%',
                    Lv7: '663.6%',
                    Lv8: '707.84%',
                    Lv9: '752.08%',
                    Lv10: '796.32%',
                    Lv11: '840.56%',
                    Lv12: '884.8%',
                    Lv13: '940.1%',
                    Lv14: '995.4%',
                    Lv15: '1050.7%',
                },
                'DMG Bonus': {
                    Lv1: '42%',
                    Lv2: '44%',
                    Lv3: '46%',
                    Lv4: '48%',
                    Lv5: '50%',
                    Lv6: '52%',
                    Lv7: '54%',
                    Lv8: '56%',
                    Lv9: '58%',
                    Lv10: '60%',
                    Lv11: '60%',
                    Lv12: '60%',
                    Lv13: '60%',
                    Lv14: '60%',
                    Lv15: '60%',
                },
                'Omen Duration': {
                    Lv1: '4s',
                    Lv2: '4s',
                    Lv3: '4s',
                    Lv4: '4.5s',
                    Lv5: '4.5s',
                    Lv6: '4.5s',
                    Lv7: '5s',
                    Lv8: '5s',
                    Lv9: '5s',
                    Lv10: '5s',
                    Lv11: '5s',
                    Lv12: '5s',
                    Lv13: '5s',
                    Lv14: '5s',
                    Lv15: '5s',
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
            name: 'Principium of Astrology',
            image: '/images/characters/UI_Talent_Combine_Weapon.png',
            description:
                'When Mona crafts Weapon Ascension Materials, she has a 25% chance to refund a portion of the crafting materials used.',
        },
        {
            name: '"Come \'n\' Get Me, Hag!"',
            image: '/images/characters/UI_Talent_S_Mona_05.png',
            description:
                'After she has used\nIllusory Torrent\nfor 2s, if there are any opponents nearby, Mona will automatically create a Phantom.\nA Phantom created in this manner lasts for 2s, and its explosion DMG is equal to 50% of\nMirror Reflection of Doom\n.',
        },
        {
            name: 'Waterborne Destiny',
            image: '/images/characters/UI_Talent_S_Mona_06.png',
            description:
                "Increases Mona's\nHydro DMG Bonus\nby a degree equivalent to 20% of her Energy Recharge rate.",
        },
    ],
    constellations: [
        {
            name: 'Prophecy of Submersion',
            image: '/images/characters/UI_Talent_S_Mona_01.png',
            description:
                'When any of your own party members hits an opponent affected by an Omen, the effects of\nHydro-related Elemental Reactions\nare enhanced for 8s:\n\u00b7Electro-Charged DMG increases by 15%.\n\u00b7Vaporize DMG increases by 15%.\n\u00b7Hydro Swirl DMG increases by 15%.\n\u00b7Frozen duration is extended by 15%.',
            level: 1,
        },
        {
            name: 'Lunar Chain',
            image: '/images/characters/UI_Talent_S_Mona_02.png',
            description:
                'When a Normal Attack hits, there is a 20% chance that it will be automatically followed by a Charged Attack.\nThis effect can only occur once every 5s.',
            level: 2,
        },
        {
            name: 'Restless Revolution',
            image: '/images/characters/UI_Talent_U_Mona_01.png',
            description:
                'Increases the Level of\nStellaris Phantasm\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Prophecy of Oblivion',
            image: '/images/characters/UI_Talent_S_Mona_03.png',
            description:
                'When any party member attacks an opponent affected by an Omen, their CRIT Rate is increased by 15%.',
            level: 4,
        },
        {
            name: 'Mockery of Fortuna',
            image: '/images/characters/UI_Talent_U_Mona_02.png',
            description:
                'Increases the Level of\nMirror Reflection of Doom\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Rhetorics of Calamitas',
            image: '/images/characters/UI_Talent_S_Mona_04.png',
            description:
                'Upon entering\nIllusory Torrent\n, Mona gains a 60% increase to the DMG of her next Charged Attack per second of movement.\nA maximum DMG Bonus of 180% can be achieved in this manner. The effect lasts for no more than 8s.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Mona
