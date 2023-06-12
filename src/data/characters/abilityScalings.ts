import {
    AbilityScaling,
    FormulaType,
    FormulaOutputType,
} from '@/types/Character'

const abilityScalings: AbilityScaling = {
    'Hu Tao': {
        'Normal Attack: Secret Spear of Wangsheng': {
            '1-Hit DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Normal Attack Additive Bonus',
                multiplicativeBonusStat: [
                    'Physical DMG Bonus',
                    'Normal Attack DMG Bonus',
                ],
                damageType: 'Physical',
            },
            '2-Hit DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Normal Attack Additive Bonus',
                multiplicativeBonusStat: [
                    'Physical DMG Bonus',
                    'Normal Attack DMG Bonus',
                ],
                damageType: 'Physical',
            },
            '3-Hit DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Normal Attack Additive Bonus',
                multiplicativeBonusStat: [
                    'Physical DMG Bonus',
                    'Normal Attack DMG Bonus',
                ],
                damageType: 'Physical',
            },
            '4-Hit DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Normal Attack Additive Bonus',
                multiplicativeBonusStat: [
                    'Physical DMG Bonus',
                    'Normal Attack DMG Bonus',
                ],
                damageType: 'Physical',
            },
            '5-Hit DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Normal Attack Additive Bonus',
                multiplicativeBonusStat: [
                    'Physical DMG Bonus',
                    'Normal Attack DMG Bonus',
                ],
                damageType: 'Physical',
            },
            '6-Hit DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Normal Attack Additive Bonus',
                multiplicativeBonusStat: [
                    'Physical DMG Bonus',
                    'Normal Attack DMG Bonus',
                ],
                damageType: 'Physical',
            },
            'Charged Attack': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Charged Attack Additive Bonus',
                multiplicativeBonusStat: [
                    'Physical DMG Bonus',
                    'Charged Attack DMG Bonus',
                ],
                damageType: 'Physical',
            },
            'Charged Attack Stamina Cost': {
                formulaType: FormulaType.GenericFormulaWithoutScaling,
                multiplicativeBonusStat: 'Charged Attack Stamina Cost Multiplier',
                outputType: FormulaOutputType.Generic,
            },
            'Plunge DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Plunging Attack Additive Bonus',
                multiplicativeBonusStat: [
                    'Physical DMG Bonus',
                    'Plunging Attack DMG Bonus',
                ],
                damageType: 'Physical',
            },
            'Low Plunge DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Plunging Attack Additive Bonus',
                multiplicativeBonusStat: [
                    'Physical DMG Bonus',
                    'Plunging Attack DMG Bonus',
                ],
                damageType: 'Physical',
            },
            'High Plunge DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Plunging Attack Additive Bonus',
                multiplicativeBonusStat: [
                    'Physical DMG Bonus',
                    'Plunging Attack DMG Bonus',
                ],
                damageType: 'Physical',
            },
        },
        'Guide to Afterlife': {
            'ATK Increase': {
                formulaType: FormulaType.GenericFormulaWithScaling,
                baseStat: 'HP',
                outputType: FormulaOutputType.Generic,
            },
            'Blood Blossom DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Elemental Skill Additive Bonus',
                multiplicativeBonusStat: [
                    'Pyro DMG Bonus',
                    'Elemental Skill DMG Bonus',
                ],
                damageType: 'Pyro',
            },
            'Blood Blossom Duration': {
                formulaType: FormulaType.GenericFormulaWithoutScaling,
                outputType: FormulaOutputType.Time,
            },
            'Duration': {
                formulaType: FormulaType.GenericFormulaWithoutScaling,
                outputType: FormulaOutputType.Time,
            },
            'CD': {
                formulaType: FormulaType.GenericFormulaWithoutScaling,
                multiplicativeBonusStat: 'Elemental Skill CD Reduction',
                outputType: FormulaOutputType.Time,
            }
        },
        'Spirit Soother': {
            'Skill DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Elemental Burst Additive Bonus',
                multiplicativeBonusStat: [
                    'Pyro DMG Bonus',
                    'Elemental Burst DMG Bonus',
                ],
                damageType: 'Pyro',
            },
            'Low HP Skill DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Elemental Burst Additive Bonus',
                multiplicativeBonusStat: [
                    'Pyro DMG Bonus',
                    'Elemental Burst DMG Bonus',
                ],
                damageType: 'Pyro',
            },
            'Skill HP Regeneration': {
                formulaType: FormulaType.GenericFormulaWithScaling,
                baseStat: 'HP',
                multiplicativeBonusStat: 'Healing Bonus',
                outputType: FormulaOutputType.Healing,
            },
            'Low HP Skill Regeneration': {
                formulaType: FormulaType.GenericFormulaWithScaling,
                baseStat: 'HP',
                multiplicativeBonusStat: 'Healing Bonus',
                outputType: FormulaOutputType.Healing,
            },
            'CD': {
                formulaType: FormulaType.GenericFormulaWithoutScaling,
                multiplicativeBonusStat: 'Elemental Burst CD Reduction',
                outputType: FormulaOutputType.Time,
            },
            'Energy Cost': {
                formulaType: FormulaType.GenericFormulaWithoutScaling,
                outputType: FormulaOutputType.Generic,
            },
        },
    },
}

export default abilityScalings
