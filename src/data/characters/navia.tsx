import { Badge } from '@/components/ui/badge'
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
    'Normal Attack: Blunt Refusal': {
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
        'Charged Attack Cyclic DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Charged Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Charged Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'Charged Attack Final DMG': {
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
        'Max Duration': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Charged Attack Duration Multiplier'],
            outputType: FormulaOutputType.Time,
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
    'Ceremonial Crystalshot': {
        'Rosula Shardshot Base DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Elemental Skill DMG Bonus',
                'Geo DMG Bonus',
                'Rosula Shardshot DMG Bonus',
            ],
            critRateBonusStat: [
                'Elemental Skill Crit Rate Bonus',
                'Ceremonial Crystalshot Crit Rate Bonus',
            ],
            critDamageBonusStat: [
                'Elemental Skill Crit DMG Bonus',
                'Ceremonial Crystalshot Crit DMG Bonus',
            ],
            damageType: DamageType.Geo,
        },
        'Rosula Shardshot Total DMG': {
            origin: 'Rosula Shardshot Base DMG',
            originMultiplier: 5,
        },
        'Crystal Shrapnel Duration': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'Surging Blade DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: ['Elemental Skill DMG Bonus', 'Geo DMG Bonus'],
            critRateBonusStat: ['Elemental Skill Crit Rate Bonus'],
            critDamageBonusStat: ['Elemental Skill Crit DMG Bonus'],
            damageType: DamageType.Geo,
        },
        'Surging Blade Interval': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        CD: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
    },
    "As the Sunlit Sky's Singing Salute": {
        'Skill DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: ['Elemental Burst DMG Bonus', 'Geo DMG Bonus'],
            critRateBonusStat: ['Elemental Burst Crit Rate Bonus'],
            critDamageBonusStat: ['Elemental Burst Crit DMG Bonus'],
            damageType: DamageType.Geo,
        },
        'Cannon Fire Support DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: ['Elemental Burst DMG Bonus', 'Geo DMG Bonus'],
            critRateBonusStat: ['Elemental Burst Crit Rate Bonus'],
            critDamageBonusStat: ['Elemental Burst Crit DMG Bonus'],
            damageType: DamageType.Geo,
        },
        'Cannon Fire Support Duration': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        CD: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            additiveBonusStat: ["As the Sunlit Sky's Singing Salute CD Reduction"],
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
        name: 'Ceremonial Crystalshot',
        description: (
            <span>
                Deals <span style={{ color: '#c8922b' }}>Geo DMG</span> based off of
                number of Crystal Shrapnel stacks consumed. Consuming 0/1/2/3 stacks
                fires 5/7/9/11 Rosula Shardshots, respectively. If 11 Rosula
                Shardshots hit a single opponent, 200% of the original amount of DMG
                is dealt. Consuming more than 3 stacks increases DMG by an additional
                15% per stack consumed, with a maximum of 6 stacks.
            </span>
        ),
        icon: '/images/characters/navia-skill.png',
        effect: (attributes, talentLevels, currentStacks) => {
            if (!currentStacks) return { attributes }

            const newAttributes = {
                ...attributes,
                'Rosula Shardshot DMG Bonus':
                    currentStacks <= 2
                        ? 0
                        : currentStacks === 3
                          ? 1
                          : 1 + (currentStacks - 3) * 0.15,
            }

            return { attributes: newAttributes }
        },
        affectsTalentIndex: 1,
        applyToTalentScaling: (talentScaling, currentStacks) => {
            if (!currentStacks) return

            const multiplier =
                talentScaling['Ceremonial Crystalshot']['Rosula Shardshot Total DMG']
            multiplier.originMultiplier =
                currentStacks <= 2 ? 5 + 2 * currentStacks : 11
        },
        maxStacks: 7,
        stackOptions: ['0 (Off)', '1', '2', '3', '4', '5', '6'],
        origin: 'E',
        priority: 1,
    },
    {
        name: 'Undisclosed Distribution Channels',
        description: (
            <span>
                For 4s after using Ceremonial Crystalshot, Normal Attacks, Charged
                Attacks, and Plunging Attacks deal{' '}
                <span style={{ color: '#c8922b' }}>Geo DMG</span> which cannot be
                overridden by other Elemental infusions. Additionally, DMG dealt by
                these attacks is increased by 40%.
            </span>
        ),
        icon: '/images/characters/navia-passive1.png',
        effect: (attributes, talentLevels, currentStacks) => {
            if (!currentStacks) return { attributes }

            const newAttributes = {
                ...attributes,
                'Normal Attack DMG Bonus': 0.4,
                'Charged Attack DMG Bonus': 0.4,
                'Plunging Attack DMG Bonus': 0.4,
            }

            return { attributes: newAttributes }
        },
        affectsTalentIndex: 0,
        applyToTalentScaling: (talentScaling) => {
            const normalAttackScaling = talentScaling['Normal Attack: Blunt Refusal']

            if (normalAttackScaling) {
                Object.values(normalAttackScaling).forEach((aspect) => {
                    if (
                        aspect.formulaType !== FormulaType.DamageFormula ||
                        !aspect.multiplicativeBonusStat
                    )
                        return
                    aspect.multiplicativeBonusStat[0] = 'Geo DMG Bonus'
                    aspect.damageType = DamageType.Geo
                })
            }
        },
        origin: 'A1',
        priority: 1,
    },
    {
        name: 'Mutual Assistance Network',
        description: (
            <span>
                For each <span style={{ color: '#3d9bc1' }}>Hydro</span>/
                <span style={{ color: '#bf612d' }}>Pyro</span>/
                <span style={{ color: '#7fabb6' }}>Cryo</span>/
                <span style={{ color: '#8c729a' }}>Electro</span> party member, Navia
                gains 20% increased ATK. This effect can stack up to 2 times.
            </span>
        ),
        icon: '/images/characters/navia-passive2.png',
        effect: (attributes, talentLevels, currentStacks) => {
            if (!currentStacks) return { attributes }

            const newAttributes = {
                ...attributes,
                ATK: attributes['ATK'] * (1 + 0.2 * Math.min(currentStacks, 2)),
            }

            return { attributes: newAttributes }
        },
        maxStacks: 4,
        stackOptions: ['0 (Off)', '1', '2', '3'],
        origin: 'A4',
        priority: 1,
    },
]

const constellationBonuses: Bonus[] = [
    {
        name: "A Lady's Rules for Keeping a Courteous Distance",
        description: (
            <span>
                Each stack of Crystal Shrapnel consumed when Navia uses{' '}
                <span style={{ color: '#ddd' }}>Ceremonial Crystalshot</span> will
                reduce the CD of{' '}
                <span style={{ color: '#ddd' }}>
                    As the Sunlit Sky&apos;s Singing Salute
                </span>{' '}
                by 1s, with a maximum reduction of 3s.
            </span>
        ),
        icon: '/images/characters/navia-constellation1.png',
        effect: (attributes, talentLevels, currentStacks, characterState) => {
            if (!characterState) return { attributes }

            const stacks = characterState.characterActiveBonuses.find(
                (bonus) => bonus.name === 'Ceremonial Crystalshot'
            )?.currentStacks

            if (!stacks) return { attributes }

            const newAttributes = {
                ...attributes,
                "As the Sunlit Sky's Singing Salute CD Reduction": Math.max(
                    stacks * -1,
                    -3
                ),
            }

            return { attributes: newAttributes }
        },
        minConstellation: 1,
        origin: 'C1',
        priority: 1,
    },
    {
        name: "The President's Pursuit of Victory",
        description: (
            <span>
                Each stack of Crystal Shrapnel consumed will increase the CRIT Rate
                of this <span style={{ color: '#ddd' }}>Ceremonial Crystalshot</span>{' '}
                instance by 12%. CRIT Rate can be increased by up to 36% in this way.
            </span>
        ),
        icon: '/images/characters/navia-constellation2.png',
        effect: (attributes, talentLevels, currentStacks, characterState) => {
            if (!characterState) return { attributes }

            const stacks = characterState.characterActiveBonuses.find(
                (bonus) => bonus.name === 'Ceremonial Crystalshot'
            )?.currentStacks

            if (!stacks) return { attributes }

            const newAttributes = {
                ...attributes,
                'Ceremonial Crystalshot Crit Rate Bonus': Math.min(
                    stacks * 0.12,
                    0.36
                ),
            }

            return { attributes: newAttributes }
        },
        minConstellation: 2,
        origin: 'C2',
        priority: 1,
    },
    {
        name: "Businesswoman's Broad Vision",
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>Ceremonial Crystalshot</span> by 3.
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/navia-constellation3.png',
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
        name: 'The Oathsworn Never Capitulate',
        description: (
            <span>
                When{' '}
                <span style={{ color: '#ddd' }}>
                    As the Sunlit Sky&apos;s Singing Salute
                </span>{' '}
                hits an opponent, that opponent&apos;s{' '}
                <span style={{ color: '#c8922b' }}>Geo RES</span> will be decreased
                by 20% for 8s.
            </span>
        ),
        icon: '/images/characters/navia-constellation4.png',
        effect: (attributes, talentLevels) => {
            const newAttributes = {
                ...attributes,
                'Geo RES Shred': 0.2,
            }

            return { attributes: newAttributes }
        },
        minConstellation: 4,
        origin: 'C4',
        priority: 1,
    },
    {
        name: "Negotiator's Resolute Negotiations",
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>
                    As the Sunlit Sky&apos;s Singing Salute
                </span>{' '}
                by 3. Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/navia-constellation5.png',
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
        name: "The Flexible Finesse of the Spina's President",
        description: (
            <span>
                If more than 3 stacks of Crystal Shrapnel are consumed when using{' '}
                <span style={{ color: '#ddd' }}>Ceremonial Crystalshot</span>, each
                stack consumed beyond the first 3 increases the CRIT DMG of that{' '}
                <span style={{ color: '#ddd' }}>Ceremonial Crystalshot</span> by 45%,
                and any stacks consumed beyond the first 3 are returned to Navia.
            </span>
        ),
        icon: '/images/characters/navia-constellation6.png',
        effect: (attributes, talentLevels, currentStacks, characterState) => {
            if (!characterState) return { attributes }

            const stacks = characterState.characterActiveBonuses.find(
                (bonus) => bonus.name === 'Ceremonial Crystalshot'
            )?.currentStacks

            if (!stacks) return { attributes }

            const newAttributes = {
                ...attributes,
                'Ceremonial Crystalshot Crit DMG Bonus': Math.min(
                    (stacks - 3) * 0.45,
                    0.45
                ),
            }

            return { attributes: newAttributes }
        },
        minConstellation: 6,
        origin: 'C6',
        priority: 1,
    },
]

const Navia: Character = {
    name: 'Navia',
    icon: '/images/characters/navia.png',
    weapon: 'Claymore',
    vision: 'Geo',
    rarity: 5,
    description:
        'The current President of Spina di Rosula, who is lovely, dutiful, and a great boss.',
    occupation: 'Spina di Rosula',
    baseStats: {
        '1/20': {
            'Base HP': 985.0,
            'Base ATK': 27.37,
            'Base DEF': 61.74,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/20': {
            'Base HP': 2555.0,
            'Base ATK': 71.0,
            'Base DEF': 160.17,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/40': {
            'Base HP': 3399.0,
            'Base ATK': 94.47,
            'Base DEF': 213.11,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/40': {
            'Base HP': 5086.0,
            'Base ATK': 141.36,
            'Base DEF': 318.88,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/50': {
            'Base HP': 5686.0,
            'Base ATK': 158.03,
            'Base DEF': 356.49,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/50': {
            'Base HP': 6542.0,
            'Base ATK': 181.81,
            'Base DEF': 410.15,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/60': {
            'Base HP': 7341.0,
            'Base ATK': 204.05,
            'Base DEF': 460.3,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/60': {
            'Base HP': 8206.0,
            'Base ATK': 228.08,
            'Base DEF': 514.51,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/70': {
            'Base HP': 8806.0,
            'Base ATK': 244.75,
            'Base DEF': 552.13,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/70': {
            'Base HP': 9679.0,
            'Base ATK': 269.0,
            'Base DEF': 606.84,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/80': {
            'Base HP': 10278.0,
            'Base ATK': 285.68,
            'Base DEF': 644.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/80': {
            'Base HP': 11161.0,
            'Base ATK': 310.2,
            'Base DEF': 699.78,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/90': {
            'Base HP': 11761.0,
            'Base ATK': 326.88,
            'Base DEF': 737.39,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
        '90/90': {
            'Base HP': 12650.0,
            'Base ATK': 351.59,
            'Base DEF': 793.15,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Blunt Refusal',
            image: 'https://genshin.honeyhunterworld.com/img/s_913101.webp',
            description:
                'Normal Attack\nPerforms up to 4 consecutive strikes.\nCharged Attack\nDrains Stamina over time to perform continuous spinning attacks against all nearby opponents.\nAt the end of the sequence, performs a more powerful slash.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '93.52%',
                    Lv2: '101.13%',
                    Lv3: '108.74%',
                    Lv4: '119.62%',
                    Lv5: '127.23%',
                    Lv6: '135.93%',
                    Lv7: '147.89%',
                    Lv8: '159.85%',
                    Lv9: '171.81%',
                    Lv10: '184.86%',
                    Lv11: '197.91%',
                    Lv12: '210.96%',
                    Lv13: '224.01%',
                    Lv14: '237.06%',
                    Lv15: '250.11%',
                },
                '2-Hit DMG': {
                    Lv1: '86.51%',
                    Lv2: '93.55%',
                    Lv3: '100.59%',
                    Lv4: '110.65%',
                    Lv5: '117.69%',
                    Lv6: '125.74%',
                    Lv7: '136.8%',
                    Lv8: '147.87%',
                    Lv9: '158.93%',
                    Lv10: '171%',
                    Lv11: '183.07%',
                    Lv12: '195.14%',
                    Lv13: '207.21%',
                    Lv14: '219.28%',
                    Lv15: '231.35%',
                },
                '3-Hit DMG': {
                    Lv1: '104.67%',
                    Lv2: '113.19%',
                    Lv3: '121.68%',
                    Lv4: '133.86%',
                    Lv5: '142.38%',
                    Lv6: '152.13%',
                    Lv7: '165.51%',
                    Lv8: '178.89%',
                    Lv9: '192.27%',
                    Lv10: '206.88%',
                    Lv11: '221.49%',
                    Lv12: '236.10%',
                    Lv13: '250.68%',
                    Lv14: '265.29%',
                    Lv15: '279.90%',
                },
                '4-Hit DMG': {
                    Lv1: '133.43%',
                    Lv2: '144.29%',
                    Lv3: '155.15%',
                    Lv4: '170.67%',
                    Lv5: '181.53%',
                    Lv6: '193.94%',
                    Lv7: '211.01%',
                    Lv8: '228.07%',
                    Lv9: '245.14%',
                    Lv10: '263.76%',
                    Lv11: '282.38%',
                    Lv12: '301%',
                    Lv13: '319.62%',
                    Lv14: '338.23%',
                    Lv15: '356.85%',
                },
                'Charged Attack Cyclic DMG': {
                    Lv1: '62.52%',
                    Lv2: '67.61%',
                    Lv3: '72.7%',
                    Lv4: '79.97%',
                    Lv5: '85.06%',
                    Lv6: '90.87%',
                    Lv7: '98.87%',
                    Lv8: '106.87%',
                    Lv9: '114.87%',
                    Lv10: '123.59%',
                    Lv11: '132.31%',
                    Lv12: '141.04%',
                    Lv13: '149.76%',
                    Lv14: '158.49%',
                    Lv15: '167.21%',
                },
                'Charged Attack Final DMG': {
                    Lv1: '113.09%',
                    Lv2: '122.29%',
                    Lv3: '131.5%',
                    Lv4: '144.65%',
                    Lv5: '153.86%',
                    Lv6: '164.37%',
                    Lv7: '178.84%',
                    Lv8: '193.31%',
                    Lv9: '207.77%',
                    Lv10: '223.55%',
                    Lv11: '239.33%',
                    Lv12: '255.11%',
                    Lv13: '270.89%',
                    Lv14: '286.67%',
                    Lv15: '302.45%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '40 / s',
                    Lv2: '40 / s',
                    Lv3: '40 / s',
                    Lv4: '40 / s',
                    Lv5: '40 / s',
                    Lv6: '40 / s',
                    Lv7: '40 / s',
                    Lv8: '40 / s',
                    Lv9: '40 / s',
                    Lv10: '40 / s',
                    Lv11: '40 / s',
                    Lv12: '40 / s',
                    Lv13: '40 / s',
                    Lv14: '40 / s',
                    Lv15: '40 / s',
                },
                'Max Duration': {
                    Lv1: '5s',
                    Lv2: '5s',
                    Lv3: '5s',
                    Lv4: '5s',
                    Lv5: '5s',
                    Lv6: '5s',
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
                'Plunge DMG': {
                    Lv1: '74.59%',
                    Lv2: '80.66%',
                    Lv3: '86.73%',
                    Lv4: '95.4%',
                    Lv5: '101.47%',
                    Lv6: '108.41%',
                    Lv7: '117.95%',
                    Lv8: '127.49%',
                    Lv9: '137.03%',
                    Lv10: '147.44%',
                    Lv11: '157.85%',
                    Lv12: '168.26%',
                    Lv13: '178.66%',
                    Lv14: '189.07%',
                    Lv15: '199.48%',
                },
                'Low Plunge DMG': {
                    Lv1: '149.14%',
                    Lv2: '161.28%',
                    Lv3: '173.42%',
                    Lv4: '190.77%',
                    Lv5: '202.91%',
                    Lv6: '216.78%',
                    Lv7: '235.86%',
                    Lv8: '254.93%',
                    Lv9: '274.01%',
                    Lv10: '294.82%',
                    Lv11: '315.63%',
                    Lv12: '336.44%',
                    Lv13: '357.25%',
                    Lv14: '378.06%',
                    Lv15: '398.87%',
                },
                'High Plunge DMG': {
                    Lv1: '186.29%',
                    Lv2: '201.45%',
                    Lv3: '216.62%',
                    Lv4: '238.28%',
                    Lv5: '253.44%',
                    Lv6: '270.77%',
                    Lv7: '294.6%',
                    Lv8: '318.42%',
                    Lv9: '342.25%',
                    Lv10: '368.25%',
                    Lv11: '394.24%',
                    Lv12: '420.23%',
                    Lv13: '446.23%',
                    Lv14: '472.22%',
                    Lv15: '498.21%',
                },
            },
        },
        {
            name: 'Ceremonial Crystalshot',
            image: 'https://genshin.honeyhunterworld.com/img/s_913201.webp',
            description:
                'When a character in the party obtains an Elemental Shard created from the Crystallize reaction, Navia will gain 1 Crystal Shrapnel stack. Navia can have up to 6 stacks of Crystal Shrapnel at once. Each time Crystal Shrapnel gain is triggered, the duration of the Crystal Shrapnel stacks you already have will be reset.\nWhen she fires, Navia will consume all Crystal Shrapnel stacks and open her elegant yet lethal Gunbrella, firing multiple Rosula Shardshots that can penetrate opponents, dealing\nGeo DMG\nto opponents hit.\nWhen 0/1/2/3 or more stacks of Crystal Shrapnel are consumed, 5/7/9/11 Rosula Shardshots will be fired respectively. The more Rosula Shardshots that strike a single opponent, the greater the DMG dealt to them. When all 11 Rosula Shardshots strike, 200% of the original amount of DMG is dealt.\nIn addition, when more than 3 stacks of Crystal Shrapnel are consumed, every stack consumed beyond those 3 will increase the DMG dealt by this Gunbrella attack by an additional 15%.\nHold\nEnter Aiming Mode, continually collecting nearby Elemental Shards created by Crystallize reactions. When released, fire Rosula Shardshots with the same effect as when the skill is Tapped.\nTwo initial charges.\nArkhe: Ousia\nPeriodically, when Navia fires her Gunbrella, a Surging Blade will be summoned, dealing Ousia-aligned\nGeo DMG\n.\n"Maintaining the appropriate distance with those whom distance should be maintained is an essential part of etiquette. Naturally, there are also many ways to do this..."',
            data: {
                'Rosula Shardshot Base DMG': {
                    Lv1: '394.8%',
                    Lv2: '424.41%',
                    Lv3: '454.02%',
                    Lv4: '493.5%',
                    Lv5: '523.11%',
                    Lv6: '552.72%',
                    Lv7: '592.2%',
                    Lv8: '631.68%',
                    Lv9: '671.16%',
                    Lv10: '710.64%',
                    Lv11: '750.12%',
                    Lv12: '789.6%',
                    Lv13: '838.95%',
                    Lv14: '888.3%',
                    Lv15: '937.65%',
                },
                'Rosula Shardshot Total DMG': {
                    Lv1: '394.8%',
                    Lv2: '424.41%',
                    Lv3: '454.02%',
                    Lv4: '493.5%',
                    Lv5: '523.11%',
                    Lv6: '552.72%',
                    Lv7: '592.2%',
                    Lv8: '631.68%',
                    Lv9: '671.16%',
                    Lv10: '710.64%',
                    Lv11: '750.12%',
                    Lv12: '789.6%',
                    Lv13: '838.95%',
                    Lv14: '888.3%',
                    Lv15: '937.65%',
                },
                'Crystal Shrapnel Duration': {
                    Lv1: '300s',
                    Lv2: '300s',
                    Lv3: '300s',
                    Lv4: '300s',
                    Lv5: '300s',
                    Lv6: '300s',
                    Lv7: '300s',
                    Lv8: '300s',
                    Lv9: '300s',
                    Lv10: '300s',
                    Lv11: '300s',
                    Lv12: '300s',
                    Lv13: '300s',
                    Lv14: '300s',
                    Lv15: '300s',
                },
                'Surging Blade DMG': {
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
                'Surging Blade Interval': {
                    Lv1: '7s',
                    Lv2: '7s',
                    Lv3: '7s',
                    Lv4: '7s',
                    Lv5: '7s',
                    Lv6: '7s',
                    Lv7: '7s',
                    Lv8: '7s',
                    Lv9: '7s',
                    Lv10: '7s',
                    Lv11: '7s',
                    Lv12: '7s',
                    Lv13: '7s',
                    Lv14: '7s',
                    Lv15: '7s',
                },
                CD: {
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
            name: "As the Sunlit Sky's Singing Salute",
            image: 'https://genshin.honeyhunterworld.com/img/s_913901.webp',
            description:
                "On the orders of the President of the Spina di Rosula, call for a magnificent Rosula Dorata Salute. Unleashes a massive cannon bombardment on opponents in front of her, dealing\nAoE Geo DMG\nand providing Cannon Fire Support for a duration afterward, periodically dealing\nGeo DMG\nto nearby opponents.\nWhen cannon attacks hit opponents, Navia will gain 1 stack of Crystal Shrapnel. This effect can be triggered up to once every 2.4s.\n\"The Spina di Rosula's salute is a preemptive celebration of the successful conclusion of our negotiations and is fired just before talks begin. Don't misunderstand, it isn't in any way, shape, or form some kind of threat.\"",
            data: {
                'Skill DMG': {
                    Lv1: '75.2%',
                    Lv2: '80.84%',
                    Lv3: '86.48%',
                    Lv4: '94%',
                    Lv5: '99.64%',
                    Lv6: '105.28%',
                    Lv7: '112.8%',
                    Lv8: '120.32%',
                    Lv9: '127.84%',
                    Lv10: '135.36%',
                    Lv11: '142.88%',
                    Lv12: '150.4%',
                    Lv13: '159.8%',
                    Lv14: '169.2%',
                    Lv15: '178.6%',
                },
                'Cannon Fire Support DMG': {
                    Lv1: '43.15%',
                    Lv2: '46.39%',
                    Lv3: '49.62%',
                    Lv4: '53.94%',
                    Lv5: '57.17%',
                    Lv6: '60.41%',
                    Lv7: '64.72%',
                    Lv8: '69.04%',
                    Lv9: '73.36%',
                    Lv10: '77.67%',
                    Lv11: '81.99%',
                    Lv12: '86.3%',
                    Lv13: '91.69%',
                    Lv14: '97.09%',
                    Lv15: '102.48%',
                },
                'Cannon Fire Support Duration': {
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
            name: 'Painstaking Transaction',
            image: 'https://genshin.honeyhunterworld.com/img/p_912301.webp',
            description:
                'Gains 25% more rewards when dispatched on a Fontaine Expedition for 20 hours.',
        },
        {
            name: 'Undisclosed Distribution Channels',
            image: 'https://genshin.honeyhunterworld.com/img/p_912101.webp',
            description:
                "For 4s after using\nCeremonial Crystalshot\n, the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be converted into\nGeo DMG\nwhich cannot be overridden by other Elemental infusions, and the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be increased by 40%.",
        },
        {
            name: 'Mutual Assistance Network',
            image: 'https://genshin.honeyhunterworld.com/img/p_912201.webp',
            description:
                'For each\nPyro\n/\nElectro\n/\nCryo\n/\nHydro\nparty member, Navia gains 20% increased ATK. This effect can stack up to 2 times.',
        },
    ],
    constellations: [
        {
            name: "A Lady's Rules for Keeping a Courteous Distance",
            image: 'https://genshin.honeyhunterworld.com/img/c_911.webp',
            description:
                'Each stack of Crystal Shrapnel consumed when Navia uses\nCeremonial Crystalshot\nwill restore 3 Energy to her and decrease the CD of\nAs the Sunlit Sky\'s Singing Salute\nby 1s. Up to 9 Energy can be gained this way, and the CD of "As the Sunlit Sky\'s Singing Salute" can be decreased by up to 3s.',
            level: 1,
        },
        {
            name: "The President's Pursuit of Victory",
            image: 'https://genshin.honeyhunterworld.com/img/c_912.webp',
            description:
                "Each stack of Crystal Shrapnel consumed will increase the CRIT Rate of this\nCeremonial Crystalshot\ninstance by 12%. CRIT Rate can be increased by up to 36% in this way.\nIn addition, when Ceremonial Crystalshot hits an opponent, one Cannon Fire Support shot from\nAs the Sunlit Sky's Singing Salute\nwill strike near the location of the hit. Up to one instance of Cannon Fire Support can be triggered each time Ceremonial Crystalshot is used, and DMG dealt by said Cannon Fire Support this way is considered Elemental Burst DMG.",
            level: 2,
        },
        {
            name: "Businesswoman's Broad Vision",
            image: 'https://genshin.honeyhunterworld.com/img/c_913.webp',
            description:
                'Increases the Level of\nCeremonial Crystalshot\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'The Oathsworn Never Capitulate',
            image: 'https://genshin.honeyhunterworld.com/img/c_914.webp',
            description:
                "When\nAs the Sunlit Sky's Singing Salute\nhits an opponent, that opponent's\nGeo RES\nwill be decreased by 20% for 8s.",
            level: 4,
        },
        {
            name: "Negotiator's Resolute Negotiations",
            image: 'https://genshin.honeyhunterworld.com/img/c_915.webp',
            description:
                "Increases the Level of\nAs the Sunlit Sky's Singing Salute\nby 3.\nMaximum upgrade level is 15.",
            level: 5,
        },
        {
            name: "The Flexible Finesse of the Spina's President",
            image: 'https://genshin.honeyhunterworld.com/img/c_916.webp',
            description:
                'If more than 3 stacks of Crystal Shrapnel are consumed when using\nCeremonial Crystalshot\n, each stack consumed beyond the first 3 increases the CRIT DMG of that Ceremonial Crystalshot by 45%, and any stacks consumed beyond the first 3 are returned to Navia.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Navia
