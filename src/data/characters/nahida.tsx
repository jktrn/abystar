import {
    TalentScaling,
    Bonus,
    Character,
    FormulaType,
    TalentRawData,
    FormulaOutputType,
} from '@/interfaces/Character'
import { Badge } from '@/components/ui/badge'

const talentScalings: TalentScaling = {
    'Normal Attack: Akara': {
        '1-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: ['Dendro DMG Bonus', 'Normal Attack DMG Bonus'],
            damageType: 'Dendro',
        },
        '2-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: ['Dendro DMG Bonus', 'Normal Attack DMG Bonus'],
            damageType: 'Dendro',
        },
        '3-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: ['Dendro DMG Bonus', 'Normal Attack DMG Bonus'],
            damageType: 'Dendro',
        },
        '4-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: ['Dendro DMG Bonus', 'Normal Attack DMG Bonus'],
            damageType: 'Dendro',
        },
        'Charged Attack DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Charged Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Dendro DMG Bonus',
                'Charged Attack DMG Bonus',
            ],
            damageType: 'Dendro',
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
                'Dendro DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: 'Dendro',
        },
        'Low Plunge DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Plunging Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Dendro DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: 'Dendro',
        },
        'High Plunge DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Plunging Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Dendro DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: 'Dendro',
        },
    },
    'All Schemes to Know': {
        'Press DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Dendro DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: 'Dendro',
        },
        'Hold DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Dendro DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: 'Dendro',
        },
        'Tri-Karma Purification DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK', 'Elemental Mastery'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Dendro DMG Bonus',
                'Elemental Skill DMG Bonus',
                'Awakening Elucidated Tri-Karma Purification DMG Bonus',
                'Illusory Heart Tri-Karma Purification DMG Bonus',
            ],
            critRateBonusStat: ['Elemental Skill CRIT Rate'],
            damageType: 'Dendro',
        },
        'Tri-Karma Purification: Karmic Oblivion DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK', 'Elemental Mastery'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Dendro DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: 'Dendro',
            minConstellation: 6,
        },
        'Tri-Karma Purification Trigger Interval': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            additiveBonusStat: ['Tri-Karma Purification Trigger Interval'],
            outputType: FormulaOutputType.Time,
        },
        'Seed of Skandha Duration': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'Press CD': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Elemental Skill CD Reduction'],
            outputType: FormulaOutputType.Time,
        },
        'Hold CD': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Elemental Skill CD Reduction'],
            outputType: FormulaOutputType.Time,
        },
    },
    'Illusory Heart': {
        'Pyro: DMG Bonus (1 Character)': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Percentage,
        },
        'Pyro: DMG Bonus (2 Characters)': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Percentage,
        },
        'Electro: Trigger Interval Decrease (1 Character)': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'Electro: Trigger Interval Decrease (2 Characters)': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'Hydro: Duration Extension (1 Character)': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'Hydro: Duration Extension (2 Characters)': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'Base Duration': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            additiveBonusStat: ['Shrine of Maya Duration Bonus'],
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
        name: 'Awakening Elucidated',
        description: (
            <span>
                Each point of Nahida&apos;s EM beyond 200 will grant 0.1% Bonus DMG
                and 0.03% CRIT Rate to{' '}
                <span style={{ color: '#DDD' }}>Tri-Karma Purification</span>{' '}
                (Elemental Skill) (capped at 80% Bonus DMG and 24% CRIT Rate)
            </span>
        ),
        icon: '/images/characters/nahida-passive2.png',
        effect: (attributes, initialAttributes) => {
            if (!initialAttributes) return { attributes }
            const bonusDMG = Math.min(
                0.8,
                Math.max(0, attributes['Elemental Mastery'] - 200) * 0.001
            )
            const bonusCritRate = Math.min(
                0.24,
                Math.max(0, attributes['Elemental Mastery'] - 200) * 0.0003
            )

            const newAttributes = {
                ...attributes,
                'Awakening Elucidated Tri-Karma Purification DMG Bonus':
                    (initialAttributes[
                        'Awakening Elucidated Tri-Karma Purification DMG Bonus'
                    ] || 0) + bonusDMG,
                'Elemental Skill CRIT Rate':
                    (initialAttributes['Elemental Skill CRIT Rate'] || 0) +
                    bonusCritRate,
            }

            return { attributes: newAttributes }
        },
        enabled: true,
        dependencies: ['Elemental Mastery'],
    },
    {
        name: 'Illusory Heart',
        description: (
            <span>
                Applies effects based on party&apos;s elements. <br />
                <span style={{ color: '#bf612d' }}>Pyro</span>: Tri-Karma
                Purification DMG increased;{' '}
                <span style={{ color: '#3d9bc1' }}>Hydro</span>: Shrine of
                Maya&apos;s duration increased;{' '}
                <span style={{ color: '#b45bff' }}>Electro</span>: Tri-Karma
                Purification Trigger Interval decreased
            </span>
        ),
        icon: '/images/characters/nahida-burst.png',
        effect: (
            attributes,
            initialAttributes,
            talentLevels,
            currentStacks,
            state
        ) => {
            if (!talentLevels || !initialAttributes || !currentStacks)
                return { attributes }

            const newAttributes = { ...attributes }

            const talentData: TalentRawData = state!.character.talents.find(
                (skill) => skill.name === 'Illusory Heart'
            )!.data

            const effectKeys = [
                'Pyro: DMG Bonus (1 Character)',
                'Pyro: DMG Bonus (2 Characters)',
                'Hydro: Duration Extension (1 Character)',
                'Hydro: Duration Extension (2 Characters)',
                'Electro: Trigger Interval Decrease (1 Character)',
                'Electro: Trigger Interval Decrease (2 Characters)',
            ]

            const effectMultipliers = effectKeys.map((key) => {
                const value = talentData?.[key]?.[`Lv${talentLevels[2]}`]
                const bonusString = value ? value.match(/\d+(\.\d+)?/)?.[0] : null
                return bonusString ? parseFloat(bonusString) : 0
            })

            if (currentStacks === 1 || currentStacks === 2) {
                newAttributes['Illusory Heart Tri-Karma Purification DMG Bonus'] =
                    (initialAttributes[
                        'Illusory Heart Tri-Karma Purification DMG Bonus'
                    ] || 0) +
                    effectMultipliers[currentStacks - 1] / 100
            } else if (currentStacks === 3 || currentStacks === 4) {
                newAttributes['Shrine of Maya Duration Bonus'] =
                    (initialAttributes['Shrine of Maya Duration Bonus'] || 0) +
                    effectMultipliers[currentStacks - 1]
            } else if (currentStacks === 5 || currentStacks === 6) {
                newAttributes['Tri-Karma Purification Trigger Interval'] =
                    (initialAttributes['Tri-Karma Purification Trigger Interval'] ||
                        0) - effectMultipliers[currentStacks - 1]
            }

            return { attributes: newAttributes }
        },
        maxStacks: 6,
        stackOptions: [
            'Off',
            'Pyro (1)',
            'Pyro (2)',
            'Hydro (1)',
            'Hydro (2)',
            'Electro (1)',
            'Electro (2)',
        ],
    },
    {
        name: 'Compassion Illuminated',
        description: (
            <span>
                While inside <span style={{ color: '#DDD' }}>Illusory Heart</span>:
                Increases Elemental Mastery by 25% of the EM of the party member with
                the highest EM
            </span>
        ),
        icon: '/images/characters/nahida-passive1.png',
        effect: (attributes, initialAttributes, talentLevels, currentStacks) => {
            if (!currentStacks || !initialAttributes) return { attributes }

            const elementalMasteryOptions = [0, 125, 150, 175, 200, 225, 250]

            const newAttributes = {
                ...attributes,
                'Elemental Mastery':
                    attributes['Elemental Mastery'] +
                    elementalMasteryOptions[currentStacks],
            }

            return { attributes: newAttributes }
        },
        maxStacks: 6,
        stackOptions: ['Off', '125', '150', '175', '200', '225', '250'],
    },
    {
        name: 'The Root of All Fullness',
        description: (
            <span>
                <Badge variant="secondary">C2</Badge>{' '}
                <Badge variant="destructive">Unimplemented</Badge> Burning, Bloom,
                Hyperbloom, and Burgeon Reaction DMG can now CRIT on opponents marked
                by <span style={{ color: '#DDD' }}>Seeds of Skanda</span> (CRIT Rate
                and CRIT DMG fixed at 20% and 100%, respectively). For 8s after being
                hit by Quicken, Aggravate, or Spread, enemies have DEF decreased by
                30%
            </span>
        ),
        icon: '/images/characters/nahida-constellation2.png',
        effect: (attributes) => {
            // TODO: Implement
            return { attributes }
        },
        minConstellation: 2,
    },
    {
        name: 'The Stem of Manifest Inference',
        description: (
            <span>
                <Badge variant="secondary">C4</Badge> When 1/2/3/(4 or more) nearby
                opponents are affected by{' '}
                <span style={{ color: '#DDD' }}>Seeds of Skandha</span>,
                Nahida&apos;s EM will be increased by 100/120/140/160
            </span>
        ),
        icon: '/images/characters/nahida-constellation4.png',
        effect: (attributes, initialAttributes, talentLevels, currentStacks) => {
            if (!currentStacks || !initialAttributes) return { attributes }

            const elementalMasteryOptions = [0, 100, 120, 140, 160]

            const newAttributes = {
                ...attributes,
                'Elemental Mastery':
                    attributes['Elemental Mastery'] +
                    elementalMasteryOptions[currentStacks],
            }

            return { attributes: newAttributes }
        },
        minConstellation: 4,
        maxStacks: 4,
        stackOptions: ['Off', '100', '120', '140', '160'],
    },
]

const constellationBonuses: Bonus[] = [
    {
        name: 'The Seed of Stored Knowledge',
        description: (
            <span>
                When the <span style={{ color: '#DDD' }}>Shrine of Maya</span> is
                unleashed and the Elemental Types of the party members are being
                tabulated, the count will add 1 to the number of Pyro, Electro, and
                Hydro characters respectively.
            </span>
        ),
        icon: '/images/characters/nahida-constellation1.png',
        effect: (attributes) => {
            // TODO: Handle
            return { attributes }
        },
    },
    {
        name: 'The Root of All Fullness',
        description: (
            <span>
                Opponents that are marked by{' '}
                <span style={{ color: '#DDD' }}>Seeds of Skandha</span> applied by
                Nahida herself will be affected by the following effects: Burning,
                Bloom, Hyperbloom, and Burgeon Reaction DMG can score CRIT Hits. CRIT
                Rate and CRIT DMG are fixed at 20% and 100% respectively. Within 8s
                of being affected by Quicken, Aggravate, Spread, DEF is decreased by
                30%.
            </span>
        ),
        icon: '/images/characters/nahida-constellation2.png',
        effect: (attributes) => {
            // TODO: Handle
            return { attributes }
        },
    },
    {
        name: 'The Shoot of Conscious Attainment',
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>All Schemes to Know</span> by 3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/nahida-constellation3.png',
        effect: (attributes, initialAttributes, talentLevels) => {
            if (!talentLevels) return { attributes }

            const newTalentLevels = [...talentLevels]
            newTalentLevels[1] = Math.min(newTalentLevels[1] + 3, 13)

            return { attributes: attributes, updatedTalentLevels: newTalentLevels }
        },
        minConstellation: 3,
    },
    {
        name: 'The Stem of Manifest Inference',
        description: (
            <span>
                When 1/2/3/(4 or more) nearby opponents are affected by{' '}
                <span style={{ color: '#DDD' }}>All Schemes to Know</span>&apos;s
                Seeds of Skandha, Nahida&apos;s Elemental Mastery will be increased
                by 100/120/140/160.
            </span>
        ),
        icon: '/images/characters/nahida-constellation4.png',
        effect: (attributes) => {
            // Handled in characterBonuses.tsx
            return { attributes }
        },
    },
    {
        name: 'The Leaves of Enlightening Speech',
        description: (
            <span>
                Increase the Level of{' '}
                <span style={{ color: '#DDD' }}>Illusory Heart</span> by 3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/nahida-constellation5.png',
        effect: (attributes, initialAttributes, talentLevels) => {
            if (!talentLevels) return { attributes }

            const newTalentLevels = [...talentLevels]
            newTalentLevels[2] = Math.min(newTalentLevels[2] + 3, 13)

            return { attributes: attributes, updatedTalentLevels: newTalentLevels }
        },
        minConstellation: 5,
    },
    {
        name: "The Fruit of Reason's Culmination",
        description: (
            <span>
                When Nahida hits an opponent affected by{' '}
                <span style={{ color: '#DDD' }}>All Schemes to Know</span>&apos;s
                Seeds of Skandha with Normal or Charged Attacks after unleashing
                Illusory Heart, she will use Tri-Karma Purification: Karmic Oblivion
                on this opponent and all connected opponents, dealing{' '}
                <span style={{ color: '#84a02f' }}>Dendro DMG</span> based on 200% of
                Nahida&apos;s ATK and 400% of her Elemental Mastery.
                <br />
                DMG dealt by Tri-Karma Purification: Karmic Oblivion is considered
                Elemental Skill DMG and can be triggered once every 0.2s. This effect
                can last up to 10s and will be removed after Nahida has unleashed 6
                instances of Tri-Karma Purification: Karmic Oblivion.
            </span>
        ),
        icon: '/images/characters/nahida-constellation6.png',
        effect: (attributes) => {
            // Handled already
            return { attributes }
        },
        minConstellation: 6,
    },
]

const Nahida: Character = {
    name: 'Nahida',
    icon: '/images/characters/nahida.png',
    weapon: 'Catalyst',
    vision: 'Dendro',
    rarity: 5,
    description:
        'A caged bird secluded within the confines of the Sanctuary of Surasthana who can only see the world in her dreams.',
    occupation: 'Sumeru City',
    baseStats: {
        '1/20': {
            'Base HP': 807.0,
            'Base ATK': 23.27,
            'Base DEF': 49.06,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 0.0,
        },
        '20/20': {
            'Base HP': 2092.0,
            'Base ATK': 60.38,
            'Base DEF': 127.26,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 0.0,
        },
        '20/40': {
            'Base HP': 2784.0,
            'Base ATK': 80.33,
            'Base DEF': 169.33,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 0.0,
        },
        '40/40': {
            'Base HP': 4165.0,
            'Base ATK': 120.2,
            'Base DEF': 253.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 0.0,
        },
        '40/50': {
            'Base HP': 4656.0,
            'Base ATK': 134.38,
            'Base DEF': 283.26,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 28.8,
        },
        '50/50': {
            'Base HP': 5357.0,
            'Base ATK': 154.6,
            'Base DEF': 325.89,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 28.8,
        },
        '50/60': {
            'Base HP': 6012.0,
            'Base ATK': 173.51,
            'Base DEF': 365.74,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 57.6,
        },
        '60/60': {
            'Base HP': 6721.0,
            'Base ATK': 193.94,
            'Base DEF': 408.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 57.6,
        },
        '60/70': {
            'Base HP': 7212.0,
            'Base ATK': 208.12,
            'Base DEF': 438.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 57.6,
        },
        '70/70': {
            'Base HP': 7926.0,
            'Base ATK': 228.74,
            'Base DEF': 482.18,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 57.6,
        },
        '70/80': {
            'Base HP': 8418.0,
            'Base ATK': 242.92,
            'Base DEF': 512.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 86.4,
        },
        '80/80': {
            'Base HP': 9140.0,
            'Base ATK': 263.78,
            'Base DEF': 556.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 86.4,
        },
        '80/90': {
            'Base HP': 9632.0,
            'Base ATK': 277.96,
            'Base DEF': 585.91,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 115.2,
        },
        '90/90': {
            'Base HP': 10360.0,
            'Base ATK': 298.97,
            'Base DEF': 630.21,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Elemental Mastery': 115.2,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Akara',
            image: 'https://genshin.honeyhunterworld.com/img/s_733101.webp',
            description:
                'Normal Attack\nPerforms up to 4 attacks that deal\nDendro DMG\nto opponents in front of her.\nCharged Attack\nConsumes a certain amount of Stamina to deal\nAoE Dendro DMG\nto opponents in front of her after a short casting time.\nPlunging Attack\nCalling upon the might of Dendro, Nahida plunges towards the ground from mid-air, damaging all opponents in her path. Deals\nAoE Dendro DMG\nupon impact with the ground.',
            data: {
                '1-Hit DMG': {
                    Lv1: '40.3%',
                    Lv2: '43.33%',
                    Lv3: '46.35%',
                    Lv4: '50.38%',
                    Lv5: '53.4%',
                    Lv6: '56.43%',
                    Lv7: '60.46%',
                    Lv8: '64.49%',
                    Lv9: '68.52%',
                    Lv10: '72.55%',
                    Lv11: '76.58%',
                    Lv12: '80.61%',
                    Lv13: '85.65%',
                    Lv14: '90.69%',
                    Lv15: '95.72%',
                },
                '2-Hit DMG': {
                    Lv1: '36.97%',
                    Lv2: '39.75%',
                    Lv3: '42.52%',
                    Lv4: '46.22%',
                    Lv5: '48.99%',
                    Lv6: '51.76%',
                    Lv7: '55.46%',
                    Lv8: '59.16%',
                    Lv9: '62.86%',
                    Lv10: '66.55%',
                    Lv11: '70.25%',
                    Lv12: '73.95%',
                    Lv13: '78.57%',
                    Lv14: '83.19%',
                    Lv15: '87.81%',
                },
                '3-Hit DMG': {
                    Lv1: '45.87%',
                    Lv2: '49.31%',
                    Lv3: '52.76%',
                    Lv4: '57.34%',
                    Lv5: '60.78%',
                    Lv6: '64.22%',
                    Lv7: '68.81%',
                    Lv8: '73.4%',
                    Lv9: '77.99%',
                    Lv10: '82.57%',
                    Lv11: '87.16%',
                    Lv12: '91.75%',
                    Lv13: '97.48%',
                    Lv14: '103.22%',
                    Lv15: '108.95%',
                },
                '4-Hit DMG': {
                    Lv1: '58.41%',
                    Lv2: '62.79%',
                    Lv3: '67.17%',
                    Lv4: '73.01%',
                    Lv5: '77.39%',
                    Lv6: '81.77%',
                    Lv7: '87.61%',
                    Lv8: '93.45%',
                    Lv9: '99.29%',
                    Lv10: '105.13%',
                    Lv11: '110.97%',
                    Lv12: '116.81%',
                    Lv13: '124.11%',
                    Lv14: '131.41%',
                    Lv15: '138.72%',
                },
                'Charged Attack DMG': {
                    Lv1: '132%',
                    Lv2: '141.9%',
                    Lv3: '151.8%',
                    Lv4: '165%',
                    Lv5: '174.9%',
                    Lv6: '184.8%',
                    Lv7: '198%',
                    Lv8: '211.2%',
                    Lv9: '224.4%',
                    Lv10: '237.6%',
                    Lv11: '250.8%',
                    Lv12: '264%',
                    Lv13: '280.5%',
                    Lv14: '297%',
                    Lv15: '313.5%',
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
            name: 'All Schemes to Know',
            image: 'https://genshin.honeyhunterworld.com/img/s_733201.webp',
            description:
                "Sends forth karmic bonds of wood and tree from her side, dealing\nAoE Dendro DMG\nand marking up to 8 opponents hit with the Seed of Skandha.\nWhen held, this skill will trigger differently.\nHold\nEnters Aiming Mode, which will allow you to select a limited number of opponents within a limited area. During this time, Nahida's resistance to interruption will be increased.\nWhen released, this skill deals\nDendro DMG\nto these opponents and marks them with the Seed of Skandha.\nAiming Mode will last up to 5s and can select a maximum of 8 opponents.\nSeed of Skandha\nOpponents who have been marked by the Seed of Skandha will be linked to one another up till a certain distance.\nAfter you trigger Elemental Reactions on opponents who are affected by the Seeds of Skandha or when they take DMG from Dendro Cores (including Burgeon and Hyperbloom DMG), Nahida will unleash Tri-Karma Purification on the opponents and all connected opponents, dealing\nDendro DMG\nbased on her ATK and Elemental Mastery.\nYou can trigger at most 1 Tri-Karma Purification within a short period of time.\nLo, the god of grass and trees shines her ultimate truth into the void, illuminating the origin and destruction of the three karmas.",
            data: {
                'Press DMG': {
                    Lv1: '98.4%',
                    Lv2: '105.78%',
                    Lv3: '113.16%',
                    Lv4: '123%',
                    Lv5: '130.38%',
                    Lv6: '137.76%',
                    Lv7: '147.6%',
                    Lv8: '157.44%',
                    Lv9: '167.28%',
                    Lv10: '177.12%',
                    Lv11: '186.96%',
                    Lv12: '196.8%',
                    Lv13: '209.1%',
                    Lv14: '221.4%',
                    Lv15: '233.7%',
                },
                'Hold DMG': {
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
                'Tri-Karma Purification DMG': {
                    Lv1: '103.2% ATK + 206.4% Elemental Mastery',
                    Lv2: '110.94% ATK + 221.88% Elemental Mastery',
                    Lv3: '118.68% ATK + 237.36% Elemental Mastery',
                    Lv4: '129% ATK + 258% Elemental Mastery',
                    Lv5: '136.74% ATK + 273.48% Elemental Mastery',
                    Lv6: '144.48% ATK + 288.96% Elemental Mastery',
                    Lv7: '154.8% ATK + 309.6% Elemental Mastery',
                    Lv8: '165.12% ATK + 330.24% Elemental Mastery',
                    Lv9: '175.44% ATK + 350.88% Elemental Mastery',
                    Lv10: '185.76% ATK + 371.52% Elemental Mastery',
                    Lv11: '196.08% ATK + 392.16% Elemental Mastery',
                    Lv12: '206.4% ATK + 412.8% Elemental Mastery',
                    Lv13: '219.3% ATK + 438.6% Elemental Mastery',
                    Lv14: '232.2% ATK + 464.4% Elemental Mastery',
                    Lv15: '245.1% ATK + 490.2% Elemental Mastery',
                },
                'Tri-Karma Purification: Karmic Oblivion DMG': {
                    Lv1: '200% ATK + 400% Elemental Mastery',
                    Lv2: '200% ATK + 400% Elemental Mastery',
                    Lv3: '200% ATK + 400% Elemental Mastery',
                    Lv4: '200% ATK + 400% Elemental Mastery',
                    Lv5: '200% ATK + 400% Elemental Mastery',
                    Lv6: '200% ATK + 400% Elemental Mastery',
                    Lv7: '200% ATK + 400% Elemental Mastery',
                    Lv8: '200% ATK + 400% Elemental Mastery',
                    Lv9: '200% ATK + 400% Elemental Mastery',
                    Lv10: '200% ATK + 400% Elemental Mastery',
                    Lv11: '200% ATK + 400% Elemental Mastery',
                    Lv12: '200% ATK + 400% Elemental Mastery',
                    Lv13: '200% ATK + 400% Elemental Mastery',
                    Lv14: '200% ATK + 400% Elemental Mastery',
                    Lv15: '200% ATK + 400% Elemental Mastery',
                },
                'Tri-Karma Purification Trigger Interval': {
                    Lv1: '2.5s',
                    Lv2: '2.5s',
                    Lv3: '2.5s',
                    Lv4: '2.5s',
                    Lv5: '2.5s',
                    Lv6: '2.5s',
                    Lv7: '2.5s',
                    Lv8: '2.5s',
                    Lv9: '2.5s',
                    Lv10: '2.5s',
                    Lv11: '2.5s',
                    Lv12: '2.5s',
                    Lv13: '2.5s',
                    Lv14: '2.5s',
                    Lv15: '2.5s',
                },
                'Seed of Skandha Duration': {
                    Lv1: '25s',
                    Lv2: '25s',
                    Lv3: '25s',
                    Lv4: '25s',
                    Lv5: '25s',
                    Lv6: '25s',
                    Lv7: '25s',
                    Lv8: '25s',
                    Lv9: '25s',
                    Lv10: '25s',
                    Lv11: '25s',
                    Lv12: '25s',
                    Lv13: '25s',
                    Lv14: '25s',
                    Lv15: '25s',
                },
                'Press CD': {
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
                'Hold CD': {
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
            },
        },
        {
            name: 'Illusory Heart',
            image: 'https://genshin.honeyhunterworld.com/img/s_733901.webp',
            description:
                'Manifests the Court of Dreams and expands the Shrine of Maya.\nWhen the Shrine of Maya field is unleashed, the following effects will be separately unleashed based on the Elemental Types present within the party.\n\u00b7\nPyro\n: While Nahida remains within the Shrine of Maya, the DMG dealt by Tri-Karma Purification from "All Schemes to Know" is increased.\n\u00b7\nElectro\n: While Nahida remains within the Shrine of Maya, the interval between each Tri-Karma Purification from "All Schemes to Know" is decreased.\n\u00b7\nHydro\n: The Shrine of Maya\'s duration is increased.\nIf there are at least 2 party members of the aforementioned Elemental Types present when the field is deployed, the aforementioned effects will be increased further.\nEven if Nahida is not on the field, these bonuses will still take effect so long as party members are within the Shrine of Maya.\nPerhaps all that dwell under the bowers of trees are naught but a fleeting upside-down dream in the eyes of the God of Wisdom.',
            data: {
                'Pyro: DMG Bonus (1 Character)': {
                    Lv1: '14.88%',
                    Lv2: '16%',
                    Lv3: '17.11%',
                    Lv4: '18.6%',
                    Lv5: '19.72%',
                    Lv6: '20.83%',
                    Lv7: '22.32%',
                    Lv8: '23.81%',
                    Lv9: '25.3%',
                    Lv10: '26.78%',
                    Lv11: '28.27%',
                    Lv12: '29.76%',
                    Lv13: '31.62%',
                    Lv14: '33.48%',
                    Lv15: '35.34%',
                },
                'Pyro: DMG Bonus (2 Characters)': {
                    Lv1: '22.32%',
                    Lv2: '23.99%',
                    Lv3: '25.67%',
                    Lv4: '27.9%',
                    Lv5: '29.57%',
                    Lv6: '31.25%',
                    Lv7: '33.48%',
                    Lv8: '35.71%',
                    Lv9: '37.94%',
                    Lv10: '40.18%',
                    Lv11: '42.41%',
                    Lv12: '44.64%',
                    Lv13: '47.43%',
                    Lv14: '50.22%',
                    Lv15: '53.01%',
                },
                'Electro: Trigger Interval Decrease (1 Character)': {
                    Lv1: '0.25s',
                    Lv2: '0.27s',
                    Lv3: '0.29s',
                    Lv4: '0.31s',
                    Lv5: '0.33s',
                    Lv6: '0.35s',
                    Lv7: '0.37s',
                    Lv8: '0.4s',
                    Lv9: '0.42s',
                    Lv10: '0.45s',
                    Lv11: '0.47s',
                    Lv12: '0.5s',
                    Lv13: '0.53s',
                    Lv14: '0.56s',
                    Lv15: '0.59s',
                },
                'Electro: Trigger Interval Decrease (2 Characters)': {
                    Lv1: '0.37s',
                    Lv2: '0.4s',
                    Lv3: '0.43s',
                    Lv4: '0.47s',
                    Lv5: '0.49s',
                    Lv6: '0.52s',
                    Lv7: '0.56s',
                    Lv8: '0.6s',
                    Lv9: '0.63s',
                    Lv10: '0.67s',
                    Lv11: '0.71s',
                    Lv12: '0.74s',
                    Lv13: '0.79s',
                    Lv14: '0.84s',
                    Lv15: '0.88s',
                },
                'Hydro: Duration Extension (1 Character)': {
                    Lv1: '3.34s',
                    Lv2: '3.59s',
                    Lv3: '3.85s',
                    Lv4: '4.18s',
                    Lv5: '4.43s',
                    Lv6: '4.68s',
                    Lv7: '5.02s',
                    Lv8: '5.35s',
                    Lv9: '5.68s',
                    Lv10: '6.02s',
                    Lv11: '6.35s',
                    Lv12: '6.69s',
                    Lv13: '7.11s',
                    Lv14: '7.52s',
                    Lv15: '7.94s',
                },
                'Hydro: Duration Extension (2 Characters)': {
                    Lv1: '5.02s',
                    Lv2: '5.39s',
                    Lv3: '5.77s',
                    Lv4: '6.27s',
                    Lv5: '6.65s',
                    Lv6: '7.02s',
                    Lv7: '7.52s',
                    Lv8: '8.03s',
                    Lv9: '8.53s',
                    Lv10: '9.03s',
                    Lv11: '9.53s',
                    Lv12: '10.03s',
                    Lv13: '10.66s',
                    Lv14: '11.29s',
                    Lv15: '11.91s',
                },
                'Base Duration': {
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
                    Lv1: '13.5s',
                    Lv2: '13.5s',
                    Lv3: '13.5s',
                    Lv4: '13.5s',
                    Lv5: '13.5s',
                    Lv6: '13.5s',
                    Lv7: '13.5s',
                    Lv8: '13.5s',
                    Lv9: '13.5s',
                    Lv10: '13.5s',
                    Lv11: '13.5s',
                    Lv12: '13.5s',
                    Lv13: '13.5s',
                    Lv14: '13.5s',
                    Lv15: '13.5s',
                },
                'Energy Cost': {
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
            },
        },
    ],
    passiveSkills: [
        {
            name: 'On All Things Meditated',
            image: 'https://genshin.honeyhunterworld.com/img/p_732301.webp',
            description:
                'Nahida can use\nAll Schemes to Know\nto interact with some harvestable items within a fixed AoE.\nThis skill may even have some other effects...',
        },
        {
            name: 'Compassion Illuminated',
            image: 'https://genshin.honeyhunterworld.com/img/p_732101.webp',
            description:
                'When unleashing\nIllusory Heart\n, the Shrine of Maya will gain the following effects:\nThe Elemental Mastery of the active character within the field will be increased by 25% of the Elemental Mastery of the party member with the highest Elemental Mastery.\nYou can gain a maximum of 250 Elemental Mastery in this manner.',
        },
        {
            name: 'Awakening Elucidated',
            image: 'https://genshin.honeyhunterworld.com/img/p_732201.webp',
            description:
                "Each point of Nahida's Elemental Mastery beyond 200 will grant 0.1% Bonus DMG and 0.03% CRIT Rate to Tri-Karma Purification from\nAll Schemes to Know\n.\nA maximum of 80% Bonus DMG and 24% CRIT Rate can be granted to Tri-Karma Purification in this manner.",
        },
    ],
    constellations: [
        {
            name: 'The Seed of Stored Knowledge',
            image: 'https://genshin.honeyhunterworld.com/img/c_731.webp',
            description:
                'When the\nShrine of Maya\nis unleashed and the Elemental Types of the party members are being tabulated, the count will add 1 to the number of Pyro, Electro, and Hydro characters respectively.',
            level: 1,
        },
        {
            name: 'The Root of All Fullness',
            image: 'https://genshin.honeyhunterworld.com/img/c_732.webp',
            description:
                'Opponents that are marked by\nSeeds of Skandha\napplied by Nahida herself will be affected by the following effects:\n\u00b7Burning, Bloom, Hyperbloom, and Burgeon Reaction DMG they receive can score CRIT Hits. CRIT Rate and CRIT DMG are fixed at 20% and 100% respectively.\n\u00b7Within 8s of being affected by Quicken, Aggravate, Spread, DEF is decreased by 30%.',
            level: 2,
        },
        {
            name: 'The Shoot of Conscious Attainment',
            image: 'https://genshin.honeyhunterworld.com/img/c_733.webp',
            description:
                'Increases the Level of\nAll Schemes to Know\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'The Stem of Manifest Inference',
            image: 'https://genshin.honeyhunterworld.com/img/c_734.webp',
            description:
                "When 1/2/3/4 (or more) nearby opponents are affected by\nAll Schemes to Know\n's Seeds of Skandha, Nahida's Elemental Mastery will be increased by 100/120/140/160.",
            level: 4,
        },
        {
            name: 'The Leaves of Enlightening Speech',
            image: 'https://genshin.honeyhunterworld.com/img/c_735.webp',
            description:
                'Increases the Level of\nIllusory Heart\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: "The Fruit of Reason's Culmination",
            image: 'https://genshin.honeyhunterworld.com/img/c_736.webp',
            description:
                "When Nahida hits an opponent affected by\nAll Schemes to Know\n's Seeds of Skandha with Normal or Charged Attacks after unleashing\nIllusory Heart\n, she will use Tri-Karma Purification: Karmic Oblivion on this opponent and all connected opponents, dealing\nDendro DMG\nbased on 200% of Nahida's ATK and 400% of her Elemental Mastery.\nDMG dealt by Tri-Karma Purification: Karmic Oblivion is considered Elemental Skill DMG and can be triggered once every 0.2s.\nThis effect can last up to 10s and will be removed after Nahida has unleashed 6 instances of Tri-Karma Purification: Karmic Oblivion.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Nahida
