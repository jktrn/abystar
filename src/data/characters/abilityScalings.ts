import { AbilityScaling, FormulaType } from '@/types/Character'

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
            // ...
        },
        'Guide to Afterlife': {
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
            // ...
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
            // ...
        },
    },
}

export default abilityScalings
