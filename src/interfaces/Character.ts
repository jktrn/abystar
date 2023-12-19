import { Weapon } from './Weapon'

export interface BaseStat {
    [key: string]: number
}

export interface Talent {
    name: string
    image: string
    description: string
    data: {
        [key: string]: any
    }
}

export interface TalentRawData {
    [key: string]:
        | {
              [key: string]: string | undefined
          }
        | undefined
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
    talents: Talent[]
    passiveSkills?: PassiveSkill[]
    constellations: Constellation[]
    implemented?: boolean
}

export interface Character extends RawCharacter {
    talentScalings: TalentScaling
    characterBonuses: Bonus[]
    constellationBonuses: Bonus[]
}

export interface Bonus {
    name: string
    description?: JSX.Element
    icon?: string
    // the effect that the bonus has on characterAttributes
    effect: Effect
    // The maximum number of stacks the bonus can have
    maxStacks?: number
    // The stack options that the user can choose from
    stackOptions?: string[]
    // For bonuses that are locked behind constellations
    minConstellation?: number
    // Whether the bonus is enabled by default (passives)
    enabled?: boolean
    // In what order the bonus should be applied (lower = earlier)
    priority?: number
    // The index of the talent that the bonus changes the scaling of
    affectsTalentIndex?: number
    // What should be changed in the talent scaling
    applyToTalentScaling?: (talentScaling: TalentScaling) => void
}

export interface Effect {
    (
        attributes: CharacterAttributes,
        talentLevels?: number[] | undefined,
        currentStacks?: number | undefined,
        state?: CharacterState | undefined
    ): {
        attributes: CharacterAttributes
        updatedTalentLevels?: number[]
    }
}

export interface TalentScaling {
    [skillName: string]: {
        [aspectName: string]: TalentScalingData
    }
}

export interface TalentScalingData {
    formulaType: FormulaType
    attribute?: string[]
    additiveBonusStat?: string[]
    multiplicativeBonusStat?: string[]
    critRateBonusStat?: string[]
    critDamageBonusStat?: string[]
    damageType?: DamageType
    outputType?: FormulaOutputType
    minConstellation?: number
}

export interface CharacterState {
    character: Character
    characterLevel: string
    characterConstellation: number
    characterActiveBonuses: Bonus[]
    characterTalentLevels: number[]
    effectiveTalentLevels: number[]
    weapon: Weapon
    weaponLevel: string
    weaponRefinement: number
}

export interface CharacterAttributes {
    'Base HP': number
    'Bonus HP': number
    'Base ATK': number
    'Bonus ATK': number
    'Base DEF': number
    'Bonus DEF': number
    'Elemental Mastery': number
    'Bonus Elemental Mastery': number
    'Energy Recharge': number
    'Bonus Energy Recharge': number
    'CRIT Rate': number
    'Bonus CRIT Rate': number
    'CRIT DMG': number
    'Bonus CRIT DMG': number
    'Pyro DMG Bonus': number
    'Cryo DMG Bonus': number
    'Hydro DMG Bonus': number
    'Electro DMG Bonus': number
    'Anemo DMG Bonus': number
    'Geo DMG Bonus': number
    'Dendro DMG Bonus': number
    'Physical DMG Bonus': number
    'Healing Bonus': number
    'Shield Strength': number
    'Normal Attack DMG Bonus': number
    'Normal Attack Additive Bonus': number
    'Charged Attack DMG Bonus': number
    'Charged Attack Additive Bonus': number
    'Charged Attack Stamina Cost Multiplier': number
    'Plunging Attack DMG Bonus': number
    'Plunging Attack Additive Bonus': number
    'Elemental Skill DMG Bonus': number
    'Elemental Skill CRIT Rate': number
    'Elemental Skill CRIT DMG': number
    'Elemental Skill Additive Bonus': number
    'Elemental Skill CD Reduction': number
    'Elemental Burst DMG Bonus': number
    'Elemental Burst CRIT Rate': number
    'Elemental Burst CRIT DMG': number
    'Elemental Burst Additive Bonus': number
    'Elemental Burst CD Reduction': number
    'All CD Reduction': number
    'All DMG Bonus': number
    'All Elemental DMG Bonus': number
    'Overloaded DMG Bonus': number
    'Burning DMG Bonus': number
    'Vaporize DMG Bonus': number
    'Melt DMG Bonus': number
    'Superconduct DMG Bonus': number
    'Swirl DMG Bonus': number
    'Electro-Charged DMG Bonus': number
    'Shattered DMG Bonus': number
    'Aggravate DMG Bonus': number
    'Spread DMG Bonus': number
    'Bloom DMG Bonus': number
    'Burgeon DMG Bonus': number
    'Hyperbloom DMG Bonus': number
    'Bountiful Core DMG Bonus': number
    'Pyro RES': number
    'Pyro RES Shred': number
    'Cryo RES': number
    'Cryo RES Shred': number
    'Hydro RES': number
    'Hydro RES Shred': number
    'Electro RES': number
    'Electro RES Shred': number
    'Anemo RES': number
    'Anemo RES Shred': number
    'Geo RES': number
    'Geo RES Shred': number
    'Dendro RES': number
    'Dendro RES Shred': number
    'Physical RES': number
    'Physical RES Shred': number
    [key: string]: number
}

export interface DamageResultAspect {
    aspectName: string
    damage: {
        [key: string]: any
    }
}

export interface DamageResult {
    talentName: string
    aspects: DamageResultAspect[]
}

export enum ScalingType {
    Flat,
    Percentage,
}

export enum DamageType {
    Physical,
    Pyro,
    Hydro,
    Electro,
    Anemo,
    Geo,
    Dendro,
    Cryo,
}

export enum FormulaType {
    DamageFormula,
    GenericFormulaWithScaling,
    GenericFormulaWithoutScaling,
    ElementalReactionFormula,
}

export enum FormulaOutputType {
    Healing,
    Drain,
    Time,
    Percentage,
    Generic,
}
