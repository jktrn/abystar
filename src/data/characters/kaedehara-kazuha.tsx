import {
    Bonus,
    Character,
    DamageType,
    FormulaOutputType,
    FormulaType,
    TalentScaling,
} from '@/interfaces/Character'

const talentScalings: TalentScaling = {
    'Normal Attack: Garyuu Bladework': {
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
        'Midare Ranzan': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Plunging Attack Additive Bonus'],
            multiplicativeBonusStat: ['Plunging Attack DMG Bonus'],
        },
    },
    Chihayaburu: {
        'Press Skill DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Anemo DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: DamageType.Anemo,
        },
        'Press CD': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Elemental Skill CD Reduction'],
            outputType: FormulaOutputType.Time,
        },
        'Hold Skill DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Anemo DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: DamageType.Anemo,
        },
        'Hold CD': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Elemental Skill CD Reduction'],
            outputType: FormulaOutputType.Time,
        },
    },
    'Kazuha Slash': {
        'Slashing DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: [
                'Anemo DMG Bonus',
                'Elemental Burst DMG Bonus',
            ],
            damageType: DamageType.Anemo,
        },
        DoT: {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: [
                'Anemo DMG Bonus',
                'Elemental Burst DMG Bonus',
            ],
            damageType: DamageType.Anemo,
        },
        'Additional Elemental DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: ['Elemental Burst DMG Bonus'],
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
        name: 'Kazuha Slash',
        description: (
            <span>
                If Autumn Whirlwind comes into contact with
                <span style={{ color: '#3d9bc1' }}> Hydro</span>,
                <span style={{ color: '#bf612d' }}> Pyro</span>,
                <span style={{ color: '#7fabb6' }}> Cryo</span>, or
                <span style={{ color: '#8c729a' }}> Electro</span>, it will deal
                additional elemental DMG of that type.
            </span>
        ),
        icon: '/images/characters/kaedehara-kazuha-burst.png',
        effect: (attributes) => {
            // * Unnecessary
            return { attributes }
        },
        affectsTalentIndex: 0,
        applyToTalentScaling: (talentScaling, currentStacks) => {
            if (!currentStacks) return

            const burstAttackScaling =
                talentScaling['Kazuha Slash']['Additional Elemental DMG']

            const elementalDamageBonus = [
                'Hydro DMG Bonus',
                'Pyro DMG Bonus',
                'Cryo DMG Bonus',
                'Electro DMG Bonus',
            ]
            const elementalDamageType = [
                DamageType.Hydro,
                DamageType.Pyro,
                DamageType.Cryo,
                DamageType.Electro,
            ]

            if (burstAttackScaling && burstAttackScaling.multiplicativeBonusStat) {
                burstAttackScaling.multiplicativeBonusStat.push(
                    elementalDamageBonus[currentStacks - 1]
                )
                burstAttackScaling.damageType =
                    elementalDamageType[currentStacks - 1]
            }
        },
        maxStacks: 4,
        stackOptions: ['Off', 'Hydro', 'Pyro', 'Cryo', 'Electro'],
        origin: 'Q',
    },
    {
        name: 'Soumon Swordsmanship',
        description: (
            <span>
                If Chihayaburu comes into contact with{' '}
                <span style={{ color: '#3d9bc1' }}> Hydro</span>,
                <span style={{ color: '#bf612d' }}> Pyro</span>,
                <span style={{ color: '#7fabb6' }}> Cryo</span>, or
                <span style={{ color: '#8c729a' }}> Electro</span> when cast, this
                Chihayaburu will absorb that element and if Plunging Attack: Midare
                Ranzan is used before the effect expires, it will deal an additional{' '}
                <span style={{ color: '#ddd' }}>200% ATK</span> of the absorbed
                elemental type as DMG. This will be considered Plunging Attack DMG.
            </span>
        ),
        icon: '/images/characters/kaedehara-kazuha-passive1.png',
        effect: (attributes) => {
            return { attributes }
        },
        affectsTalentIndex: 0,
        applyToTalentScaling: (talentScaling, currentStacks) => {
            if (!currentStacks) return

            const plungeAttackScaling =
                talentScaling['Normal Attack: Garyuu Bladework']['Midare Ranzan']

            const elementalDamageBonus = [
                'Hydro DMG Bonus',
                'Pyro DMG Bonus',
                'Cryo DMG Bonus',
                'Electro DMG Bonus',
            ]
            const elementalDamageType = [
                DamageType.Hydro,
                DamageType.Pyro,
                DamageType.Cryo,
                DamageType.Electro,
            ]

            if (plungeAttackScaling && plungeAttackScaling.multiplicativeBonusStat) {
                plungeAttackScaling.multiplicativeBonusStat.push(
                    elementalDamageBonus[currentStacks - 1]
                )
                plungeAttackScaling.damageType =
                    elementalDamageType[currentStacks - 1]
            }
        },
        maxStacks: 4,
        stackOptions: ['Off', 'Hydro', 'Pyro', 'Cryo', 'Electro'],
        origin: 'A1',
        minAscension: 1,
    },
    {
        name: 'Poetics of Fuubutsu',
        description: (
            <span>
                Upon triggering a Swirl reaction, Kaedehara Kazuha will grant all
                party members a <span style={{ color: '#ddd' }}>0.04%</span>{' '}
                Elemental DMG Bonus to the element absorbed by Swirl for every point
                of Elemental Mastery he has for 8s. Bonuses for different elements
                obtained through this method can co-exist.
            </span>
        ),
        icon: '/images/characters/kaedehara-kazuha-passive2.png',
        effect: (attributes, talentLevels, currentStacks) => {
            if (!currentStacks) return { attributes }

            const elementalDamageBonus = [0, 0, 0, 0]

            elementalDamageBonus[currentStacks - 1] =
                0.0004 * attributes['Elemental Mastery']

            const newAttributes = {
                ...attributes,
                'Hydro DMG Bonus':
                    attributes['Hydro DMG Bonus'] + elementalDamageBonus[0],
                'Pyro DMG Bonus':
                    attributes['Pyro DMG Bonus'] + elementalDamageBonus[1],
                'Cryo DMG Bonus':
                    attributes['Cryo DMG Bonus'] + elementalDamageBonus[2],
                'Electro DMG Bonus':
                    attributes['Electro DMG Bonus'] + elementalDamageBonus[3],
            }

            return { attributes: newAttributes }
        },
        maxStacks: 4,
        stackOptions: ['Off', 'Hydro', 'Pyro', 'Cryo', 'Electro'],
        origin: 'A4',
        minAscension: 4,
        priority: 2,
    },
]

const constellationBonuses: Bonus[] = [
    {
        name: 'Scarlet Hills',
        description: (
            <span>
                Decreases Chihayaburu&apos;s CD by{' '}
                <span style={{ color: '#ddd' }}>10%</span>. Using Kazuha Slash resets
                the CD of Chihayaburu.
            </span>
        ),
        icon: '/images/characters/kaedehara-kazuha-constellation1.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Elemental Skill CD Reduction':
                    attributes['Elemental Skill CD Reduction'] - 0.1,
            }

            return { attributes: newAttributes }
        },
        origin: 'C1',
        minConstellation: 1,
        priority: 1,
    },
    {
        name: 'Yamaarashi Tailwind',
        description: (
            <span>
                The Autumn Whirlwind field created by Kazuha Slash has the following
                effects: Increases Kaedehara Kazuha&apos;s own Elemental Mastery by{' '}
                <span style={{ color: '#ddd' }}>200</span> for its duration.
                Increases the Elemental Mastery of characters within the field by{' '}
                <span style={{ color: '#ddd' }}>200</span>. The Elemental
                Mastery-increasing effects of this Constellation do not stack.
            </span>
        ),
        icon: '/images/characters/kaedehara-kazuha-constellation2.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Elemental Mastery': attributes['Elemental Mastery'] + 200,
            }

            return { attributes: newAttributes }
        },
        origin: 'C2',
        minConstellation: 2,
        priority: 1,
    },
    {
        name: 'Maple Monogatari',
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>Chihayaburu</span> by 3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/kaedehara-kazuha-constellation3.png',
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
        name: 'Oozora Genpou',
        description: (
            <span>
                When Kaedehara Kazuha&apos;s Energy is lower than 45, he obtains the
                following effects: Pressing or Holding Chihayaburu regenerates 3 or 4
                Energy for Kaedehara Kazuha, respectively. When gliding, Kaedehara
                Kazuha regenerates 2 Energy per second.
            </span>
        ),
        icon: '/images/characters/kaedehara-kazuha-constellation4.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
            }
            // This constellation literally does nothing in the calculator
            return { attributes: newAttributes }
        },
        origin: 'C4',
        visible: false,
        minConstellation: 4,
    },
    {
        name: 'Wisdom of Bansei',
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>Kazuha Slash</span> by 3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/kaedehara-kazuha-constellation5.png',
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
        name: 'Crimson Momiji',
        description: (
            <span>
                After using Chihayaburu nor Kazuha Slash, Kaedehara Kazuha gains an
                Anemo Infusion for <span style={{ color: '#ddd' }}>5s</span>.
                Additionally, each point of Elemental Mastery will increase the DMG
                dealt by Kaedehara Kazuha&apos;s Normal, Charged, and Plunging
                Attacks by <span style={{ color: '#ddd' }}>0.2%</span>.
            </span>
        ),
        icon: '/images/characters/kaedehara-kazuha-constellation6.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Normal Attack DMG Bonus':
                    attributes['Normal Attack DMG Bonus'] +
                    0.002 * attributes['Elemental Mastery'],
                'Charged Attack DMG Bonus':
                    attributes['Charged Attack DMG Bonus'] +
                    0.002 * attributes['Elemental Mastery'],
                'Plunging Attack DMG Bonus':
                    attributes['Plunging Attack DMG Bonus'] +
                    0.002 * attributes['Elemental Mastery'],
            }

            return { attributes: newAttributes }
        },
        affectsTalentIndex: 0,
        applyToTalentScaling: (talentScaling) => {
            const normalAttackScaling =
                talentScaling['Normal Attack: Garyuu Bladework']

            if (normalAttackScaling) {
                Object.values(normalAttackScaling).forEach((aspect) => {
                    if (
                        aspect.formulaType !== FormulaType.DamageFormula ||
                        !aspect.multiplicativeBonusStat ||
                        aspect ==
                            talentScaling['Normal Attack: Garyuu Bladework'][
                                'Midare Ranzan'
                            ]
                    )
                        return
                    aspect.multiplicativeBonusStat[0] = 'Anemo DMG Bonus'
                    aspect.damageType = DamageType.Anemo
                })
            }
        },
        minConstellation: 6,
        origin: 'C6',
        priority: 2,
    },
]

const KaedeharaKazuha: Character = {
    name: 'Kaedehara Kazuha',
    icon: '/images/characters/kaedehara-kazuha.png',
    weapon: 'Sword',
    vision: 'Anemo',
    rarity: 5,
    description:
        "A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past.",
    occupation: 'The Crux',
    baseStats: {
        '1/20': {
            'Base HP': 1039.0,
            'Base ATK': 23.09,
            'Base DEF': 62.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 0.0,
        },
        '20/20': {
            'Base HP': 2695.0,
            'Base ATK': 59.89,
            'Base DEF': 162.96,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 0.0,
        },
        '20/40': {
            'Base HP': 3586.0,
            'Base ATK': 79.69,
            'Base DEF': 216.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 0.0,
        },
        '40/40': {
            'Base HP': 5366.0,
            'Base ATK': 119.24,
            'Base DEF': 324.44,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 0.0,
        },
        '40/50': {
            'Base HP': 5999.0,
            'Base ATK': 133.3,
            'Base DEF': 362.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 28.8,
        },
        '50/50': {
            'Base HP': 6902.0,
            'Base ATK': 153.37,
            'Base DEF': 417.3,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 28.8,
        },
        '50/60': {
            'Base HP': 7747.0,
            'Base ATK': 172.12,
            'Base DEF': 468.33,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 57.6,
        },
        '60/60': {
            'Base HP': 8659.0,
            'Base ATK': 192.39,
            'Base DEF': 523.49,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 57.6,
        },
        '60/70': {
            'Base HP': 9292.0,
            'Base ATK': 206.46,
            'Base DEF': 561.76,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 57.6,
        },
        '70/70': {
            'Base HP': 10213.0,
            'Base ATK': 226.91,
            'Base DEF': 617.42,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 57.6,
        },
        '70/80': {
            'Base HP': 10846.0,
            'Base ATK': 240.98,
            'Base DEF': 655.69,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 86.4,
        },
        '80/80': {
            'Base HP': 11777.0,
            'Base ATK': 261.67,
            'Base DEF': 711.98,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 86.4,
        },
        '80/90': {
            'Base HP': 12410.0,
            'Base ATK': 275.73,
            'Base DEF': 750.25,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 115.2,
        },
        '90/90': {
            'Base HP': 13348.0,
            'Base ATK': 296.58,
            'Base DEF': 806.98,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 115.2,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Garyuu Bladework',
            image: 'https://genshin.honeyhunterworld.com/img/s_473101.webp',
            description:
                'Normal Attack\nPerforms up to 5 rapid strikes.\nCharged Attack\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact. If this Plunging Attack is triggered by Chihayaburu, it will be converted to Plunging Attack: Midare Ranzan.\nPlunging Attack: Midare Ranzan\nWhen a Plunging Attack is performed using the effects of the Elemental Skill Chihayaburu, Plunging Attack DMG is converted to\nAnemo DMG\nand will create a small wind tunnel via a secret blade technique that pulls in nearby objects and opponents.',
            data: {
                '1-Hit DMG': {
                    Lv1: '44.98%',
                    Lv2: '48.64%',
                    Lv3: '52.3%',
                    Lv4: '57.53%',
                    Lv5: '61.19%',
                    Lv6: '65.38%',
                    Lv7: '71.13%',
                    Lv8: '76.88%',
                    Lv9: '82.63%',
                    Lv10: '88.91%',
                    Lv11: '96.1%',
                    Lv12: '104.56%',
                    Lv13: '113.02%',
                    Lv14: '121.47%',
                    Lv15: '130.7%',
                },
                '2-Hit DMG': {
                    Lv1: '45.24%',
                    Lv2: '48.92%',
                    Lv3: '52.6%',
                    Lv4: '57.86%',
                    Lv5: '61.54%',
                    Lv6: '65.75%',
                    Lv7: '71.54%',
                    Lv8: '77.32%',
                    Lv9: '83.11%',
                    Lv10: '89.42%',
                    Lv11: '96.65%',
                    Lv12: '105.16%',
                    Lv13: '113.66%',
                    Lv14: '122.17%',
                    Lv15: '131.45%',
                },
                '3-Hit DMG': {
                    Lv1: '56.76%',
                    Lv2: '61.38%',
                    Lv3: '66.00%',
                    Lv4: '72.60%',
                    Lv5: '77.22%',
                    Lv6: '82.50%',
                    Lv7: '89.76%',
                    Lv8: '97.02%',
                    Lv9: '104.28%',
                    Lv10: '112.20%',
                    Lv11: '121.27%',
                    Lv12: '131.95%',
                    Lv13: '142.62%',
                    Lv14: '153.29%',
                    Lv15: '164.93%',
                },
                '4-Hit DMG': {
                    Lv1: '60.72%',
                    Lv2: '65.66%',
                    Lv3: '70.6%',
                    Lv4: '77.66%',
                    Lv5: '82.6%',
                    Lv6: '88.25%',
                    Lv7: '96.02%',
                    Lv8: '103.78%',
                    Lv9: '111.55%',
                    Lv10: '120.02%',
                    Lv11: '129.73%',
                    Lv12: '141.14%',
                    Lv13: '152.56%',
                    Lv14: '163.98%',
                    Lv15: '176.43%',
                },
                '5-Hit DMG': {
                    Lv1: '76.11%',
                    Lv2: '82.29%',
                    Lv3: '88.50%',
                    Lv4: '97.35%',
                    Lv5: '103.53%',
                    Lv6: '110.64%',
                    Lv7: '120.36%',
                    Lv8: '130.08%',
                    Lv9: '139.83%',
                    Lv10: '150.45%',
                    Lv11: '162.63%',
                    Lv12: '176.94%',
                    Lv13: '191.25%',
                    Lv14: '205.56%',
                    Lv15: '221.16%',
                },
                'Charged Attack DMG': {
                    Lv1: '117.65%',
                    Lv2: '127.22%',
                    Lv3: '136.80%',
                    Lv4: '150.48%',
                    Lv5: '160.06%',
                    Lv6: '171.00%',
                    Lv7: '186.05%',
                    Lv8: '201.10%',
                    Lv9: '216.14%',
                    Lv10: '232.56%',
                    Lv11: '251.36%',
                    Lv12: '273.49%',
                    Lv13: '295.62%',
                    Lv14: '317.73%',
                    Lv15: '341.86%',
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
                    Lv1: '81.83%',
                    Lv2: '88.49%',
                    Lv3: '95.16%',
                    Lv4: '104.67%',
                    Lv5: '111.33%',
                    Lv6: '118.94%',
                    Lv7: '129.41%',
                    Lv8: '139.88%',
                    Lv9: '150.35%',
                    Lv10: '161.76%',
                    Lv11: '173.18%',
                    Lv12: '184.6%',
                    Lv13: '196.02%',
                    Lv14: '207.44%',
                    Lv15: '218.86%',
                },
                'Low Plunge DMG': {
                    Lv1: '163.63%',
                    Lv2: '176.95%',
                    Lv3: '190.27%',
                    Lv4: '209.3%',
                    Lv5: '222.62%',
                    Lv6: '237.84%',
                    Lv7: '258.77%',
                    Lv8: '279.7%',
                    Lv9: '300.63%',
                    Lv10: '323.46%',
                    Lv11: '346.29%',
                    Lv12: '369.12%',
                    Lv13: '391.96%',
                    Lv14: '414.79%',
                    Lv15: '437.62%',
                },
                'High Plunge DMG': {
                    Lv1: '204.39%',
                    Lv2: '221.02%',
                    Lv3: '237.66%',
                    Lv4: '261.42%',
                    Lv5: '278.06%',
                    Lv6: '297.07%',
                    Lv7: '323.21%',
                    Lv8: '349.36%',
                    Lv9: '375.5%',
                    Lv10: '404.02%',
                    Lv11: '432.54%',
                    Lv12: '461.06%',
                    Lv13: '489.57%',
                    Lv14: '518.09%',
                    Lv15: '546.61%',
                },
                'Midare Ranzan': {
                    Lv1: '200.00%',
                    Lv2: '200.00%',
                    Lv3: '200.00%',
                    Lv4: '200.00%',
                    Lv5: '200.00%',
                    Lv6: '200.00%',
                    Lv7: '200.00%',
                    Lv8: '200.00%',
                    Lv9: '200.00%',
                    Lv10: '200.00%',
                    Lv11: '200.00%',
                    Lv12: '200.00%',
                    Lv13: '200.00%',
                    Lv14: '200.00%',
                    Lv15: '200.00%',
                },
            },
        },
        {
            name: 'Chihayaburu',
            image: 'https://genshin.honeyhunterworld.com/img/s_473201.webp',
            description:
                'Unleashes a secret technique as fierce as the rushing wind that pulls objects and opponents towards Kazuha\'s current position before launching opponents within the AoE, dealing\nAnemo DMG\nand lifting Kazuha into the air on a rushing gust of wind.\nWithin 10s of remaining airborne after casting Chihayaburu, Kazuha can unleash a powerful Plunging Attack known as Midare Ranzan.\nPress\nCan be used in mid-air.\nHold\nCharges up before unleashing greater\nAnemo DMG\nover a larger AoE than Press Mode.\nPlunging Attack: Midare Ranzan\nWhen a Plunging Attack is performed using the effects of the Elemental Skill Chihayaburu, Plunging Attack DMG is converted to\nAnemo DMG\n. On landing, Kazuha creates a small wind tunnel via a secret blade technique that pulls in nearby objects and opponents.\nMidare Ranzan\'s DMG is considered Plunging Attack DMG.\n"Wind in branches grieves\nBygone ages, gods of old\nWithered autumn leaves"',
            data: {
                'Press Skill DMG': {
                    Lv1: '192%',
                    Lv2: '206.4%',
                    Lv3: '220.8%',
                    Lv4: '240%',
                    Lv5: '254.4%',
                    Lv6: '268.8%',
                    Lv7: '288%',
                    Lv8: '307.2%',
                    Lv9: '326.4%',
                    Lv10: '345.6%',
                    Lv11: '364.8%',
                    Lv12: '384%',
                    Lv13: '408%',
                    Lv14: '432%',
                    Lv15: '456%',
                },
                'Press CD': {
                    Lv1: '6s',
                    Lv2: '6s',
                    Lv3: '6s',
                    Lv4: '6s',
                    Lv5: '6s',
                    Lv6: '6s',
                    Lv7: '6s',
                    Lv8: '6s',
                    Lv9: '6s',
                    Lv10: '6s',
                    Lv11: '6s',
                    Lv12: '6s',
                    Lv13: '6s',
                    Lv14: '6s',
                    Lv15: '6s',
                },
                'Hold Skill DMG': {
                    Lv1: '260.8%',
                    Lv2: '280.36%',
                    Lv3: '299.92%',
                    Lv4: '326%',
                    Lv5: '345.56%',
                    Lv6: '365.12%',
                    Lv7: '391.2%',
                    Lv8: '417.28%',
                    Lv9: '443.36%',
                    Lv10: '469.44%',
                    Lv11: '495.52%',
                    Lv12: '521.6%',
                    Lv13: '554.2%',
                    Lv14: '586.8%',
                    Lv15: '619.4%',
                },
                'Hold CD': {
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
            },
        },
        {
            name: 'Kazuha Slash',
            image: 'https://genshin.honeyhunterworld.com/img/s_473901.webp',
            description:
                'The signature technique of Kazuha\'s self-styled bladework \u2014 a single slash that strikes with the force of the first winds of autumn, dealing\nAoE Anemo DMG\n.\nThe blade\'s passage will leave behind a field named "Autumn Whirlwind" that periodically deals\nAoE Anemo DMG\nto opponents within its range.\nElemental Absorption\nIf Autumn Whirlwind comes into contact with\nHydro\n/\nPyro\n/\nCryo\n/\nElectro\n, it will deal additional elemental DMG of that type.\nElemental Absorption may only occur once per use.\n"I see eternity go by in an instant, the autumns of many years from a single leaf. Thus I shall slice this maple in a flash, and ask a question of the ages."',
            data: {
                'Slashing DMG': {
                    Lv1: '262.4%',
                    Lv2: '282.08%',
                    Lv3: '301.76%',
                    Lv4: '328%',
                    Lv5: '347.68%',
                    Lv6: '367.36%',
                    Lv7: '393.6%',
                    Lv8: '419.84%',
                    Lv9: '446.08%',
                    Lv10: '472.32%',
                    Lv11: '498.56%',
                    Lv12: '524.8%',
                    Lv13: '557.6%',
                    Lv14: '590.4%',
                    Lv15: '623.2%',
                },
                DoT: {
                    Lv1: '120%',
                    Lv2: '129%',
                    Lv3: '138%',
                    Lv4: '150%',
                    Lv5: '159%',
                    Lv6: '168%',
                    Lv7: '180%',
                    Lv8: '192%',
                    Lv9: '204%',
                    Lv10: '216%',
                    Lv11: '228%',
                    Lv12: '240%',
                    Lv13: '255%',
                    Lv14: '270%',
                    Lv15: '285%',
                },
                'Additional Elemental DMG': {
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
                Duration: {
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
            name: 'Cloud Strider',
            image: 'https://genshin.honeyhunterworld.com/img/p_472301.webp',
            description:
                'Decreases sprinting Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects.',
        },
        {
            name: 'Soumon Swordsmanship',
            image: 'https://genshin.honeyhunterworld.com/img/p_472101.webp',
            description:
                'If\nChihayaburu\ncomes into contact with\nHydro\n/\nPyro\n/\nCryo\n/\nElectro\nwhen cast, this\nChihayaburu\nwill absorb that element and if Plunging Attack: Midare Ranzan is used before the effect expires, it will deal an additional 200% ATK of the absorbed elemental type as DMG. This will be considered Plunging Attack DMG.\nElemental Absorption may only occur once per use of\nChihayaburu\n.',
        },
        {
            name: 'Poetics of Fuubutsu',
            image: 'https://genshin.honeyhunterworld.com/img/p_472201.webp',
            description:
                'Upon triggering a Swirl reaction, Kaedehara Kazuha will grant all party members a 0.04% Elemental DMG Bonus to the element absorbed by Swirl for every point of Elemental Mastery he has for 8s. Bonuses for different elements obtained through this method can co-exist.',
        },
    ],
    constellations: [
        {
            name: 'Scarlet Hills',
            image: 'https://genshin.honeyhunterworld.com/img/c_471.webp',
            description:
                "Decreases\nChihayaburu\n's CD by 10%.\nUsing\nKazuha Slash\nresets the CD of\nChihayaburu\n.",
            level: 1,
        },
        {
            name: 'Yamaarashi Tailwind',
            image: 'https://genshin.honeyhunterworld.com/img/c_472.webp',
            description:
                "The Autumn Whirlwind field created by\nKazuha Slash\nhas the following effects:\n\u00b7 Increases Kaedehara Kazuha's own Elemental Mastery by 200 for its duration.\n\u00b7 Increases the Elemental Mastery of characters within the field by 200.\nThe Elemental Mastery-increasing effects of this Constellation do not stack.",
            level: 2,
        },
        {
            name: 'Maple Monogatari',
            image: 'https://genshin.honeyhunterworld.com/img/c_473.webp',
            description:
                'Increases the Level of\nChihayaburu\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Oozora Genpou',
            image: 'https://genshin.honeyhunterworld.com/img/c_474.webp',
            description:
                "When Kaedehara Kazuha's Energy is lower than 45, he obtains the following effects:\n\u00b7Pressing or Holding\nChihayaburu\nregenerates 3 or 4 Energy for Kaedehara Kazuha, respectively.\n\u00b7When gliding, Kaedehara Kazuha regenerates 2 Energy per second.",
            level: 4,
        },
        {
            name: 'Wisdom of Bansei',
            image: 'https://genshin.honeyhunterworld.com/img/c_475.webp',
            description:
                'Increases the Level of\nKazuha Slash\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Crimson Momiji',
            image: 'https://genshin.honeyhunterworld.com/img/c_476.webp',
            description:
                "After using\nChihayaburu\nor\nKazuha Slash\n, Kaedehara Kazuha gains an\nAnemo Infusion\nfor 5s. Additionally, each point of Elemental Mastery will increase the DMG dealt by Kaedehara Kazuha's Normal, Charged, and Plunging Attacks by 0.2%.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default KaedeharaKazuha
