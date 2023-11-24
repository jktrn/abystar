export interface BaseStat {
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

export interface RawCharacter {
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

export interface Character extends RawCharacter {
    abilityScalings: AbilityScaling
    characterBonuses: Bonus[]
    constellationBonuses: Bonus[]
}

export interface Bonus {
    name: string
    description: JSX.Element
    icon: string
    effect: Effect
    maxStacks?: number
    currentStacks?: number
    stackOptions?: string[]
    dependencies?: string[]
    affectsAbilityIndex?: number
    applyToAbilityScaling?: (abilityScaling: AbilityScaling) => void
    minConstellation?: number
    enabled?: boolean
}

export interface Effect {
    (
        baseStats: BaseStat,
        currentStacks?: number,
        activeSkills?: string[],
        initialBaseStats?: BaseStat
    ): BaseStat
}

export interface AbilityScaling {
    [skillName: string]: {
        [aspectName: string]: AbilityScalingData
    }
}

export interface AbilityScalingData {
    formulaType: FormulaType
    baseStat?: string | string[]
    additiveBonusStat?: string | string[]
    multiplicativeBonusStat?: string | string[]
    damageType?: string
    outputType?: FormulaOutputType
    minConstellation?: number
}

export interface CharacterState {
    character: Character
    characterLevel: string
    characterConstellation: number
    characterActiveBonuses: Bonus[]
    characterActiveSkillLevels: number[]
}

export enum FormulaType {
    DamageFormula,
    GenericFormulaWithScaling,
    GenericFormulaWithoutScaling,
    ElementalReactionFormula,
}

export enum FormulaOutputType {
    Healing,
    Time,
    Percentage,
    Generic,
}
