export interface BaseStat {
    [key: string]: string
}

export interface NewBaseStat {
    [key: string]: number
}

export interface ActiveSkill {
    name: string
    image: string
    description: string
    data: {
        [key: string]: any
    }
}

export interface PassiveSkill {
    name: string
    image: string
    description: string
}

export interface Constellation {
    name: string
    image: string
    description: string
    level: number
}

export interface Character {
    name: string
    icon: string
    weapon: string
    vision: string
    rarity: number
    description: string
    occupation: string
    baseStats: {
        [key: string]: BaseStat
    }
    activeSkills: ActiveSkill[]
    passiveSkills?: PassiveSkill[]
    constellations: Constellation[]
}

export interface Bonus {
    name: string
    description: string
    icon: string
    effect: (
        baseStats: NewBaseStat,
        currentStacks?: number,
        activeSkills?: string[]
    ) => NewBaseStat
    maxStacks?: number
    currentStacks?: number
}

export interface AbilityScaling {
    [characterName: string]: {
        [skillName: string]: {
            [aspectName: string]: AbilityScalingData
        }
    }
}

export interface AbilityScalingData {
    formulaType: FormulaType
    baseStat: string
    additiveBonusStat?: string | string[]
    multiplicativeBonusStat?: string | string[]
}

export enum FormulaType {
    DamageFormula,
    GenericFormulaWithScaling,
    GenericFormulaWithoutScaling,
    ElementalReactionFormula,
}
