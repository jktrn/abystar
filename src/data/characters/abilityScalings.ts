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
            // ...
        },
        'Guide to Afterlife': {
            'ATK Increase': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'HP',
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
            // ...
        },
    },
}

export default abilityScalings
