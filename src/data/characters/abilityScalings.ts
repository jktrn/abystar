import { AbilityScaling, FormulaType } from '@/types/Character'

const abilityScalings: AbilityScaling = {
    'Hu Tao': {
        'Normal Attack: Secret Spear of Wangsheng': {
            '1-Hit DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Normal Attack DMG Bonus',
                multiplicativeBonusStat: 'Physical DMG Bonus',
            },
            '2-Hit DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Normal Attack DMG Bonus',
                multiplicativeBonusStat: 'Physical DMG Bonus',
            },
            // ...
        },
        'Guide to Afterlife': {
            'ATK Increase': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'HP',
                additiveBonusStat: 'Elemental Skill DMG Bonus',
                multiplicativeBonusStat: 'Pyro DMG Bonus',
            },
            // ...
        },
        'Spirit Soother': {
            'Skill DMG': {
                formulaType: FormulaType.DamageFormula,
                baseStat: 'ATK',
                additiveBonusStat: 'Elemental Burst DMG Bonus',
                multiplicativeBonusStat: 'Pyro DMG Bonus',
            },
            // ...
        },
    },
}

export default abilityScalings
