import { Bonus } from '@/types/Character'
import { characterData } from '@/data'

const characterBonuses: Record<string, Bonus[]> = {
    'Hu Tao': [
        {
            name: 'Guide to Afterlife',
            description: (
                <span>
                    Activates <b>Paramita Papilio</b> (Elemental Skill) stance,
                    converting damage to{' '}
                    <span style={{ color: '#bf612d' }}>Pyro</span>. Increases
                    ATK based on Max HP (maximum gained this way cannot exceed
                    400% original ATK)
                </span>
            ),
            icon: '/images/skill-icons/skills/hu-tao-skill.png',
            effect: (baseStats, currentStacks, activeSkills) => {
                if (!activeSkills) return baseStats
                const skillData: any = characterData[
                    'Hu Tao'
                ].activeSkills.find(
                    (skill) => skill.name === 'Guide to Afterlife'
                )?.data

                const bonusString =
                    skillData?.['ATK Increase']?.[
                        activeSkills[1] as keyof (typeof skillData)['ATK Increase']
                    ].match(/\d+(\.\d+)?/)

                const bonusFloat = bonusString
                    ? parseFloat(bonusString[0])
                    : null

                if (bonusFloat) {
                    let bonus = baseStats['HP'] * (bonusFloat / 100)
                    const maxBonus = baseStats['ATK'] * 4
                    if (bonus > maxBonus) {
                        bonus = maxBonus
                    }
                    baseStats['ATK'] += bonus
                }
                return baseStats
            },
            affectsAbilityIndex: 0,
            applyToAbilityScaling: (abilityScaling) => {
                const normalAttackScaling =
                    abilityScaling['Hu Tao'][
                        'Normal Attack: Secret Spear of Wangsheng'
                    ]
                if (normalAttackScaling) {
                    Object.values(normalAttackScaling).forEach((aspect) => {
                        aspect.multiplicativeBonusStat = 'Pyro DMG Bonus'
                        aspect.damageType = 'Pyro'
                    })
                }
            },
        },
        {
            name: 'Sanguine Rogue',
            description: (
                <span>
                    +33% <span style={{ color: '#bf612d' }}>Pyro</span> DMG
                    Bonus when under 50% Max HP
                </span>
            ),
            icon: '/images/skill-icons/passives/hu-tao-passive2.png',
            effect: (baseStats) => {
                baseStats['Pyro DMG Bonus'] += 33
                return baseStats
            },
        },
        {
            name: "Butterfly's Embrace",
            description: (
                <span>
                    <span className="min-constellation">C6</span> Triggers when
                    receiving fatal blow or below 25% HP. All Elemental/Physical
                    RES increased by 200%, CRIT Rate increased by 100%
                </span>
            ),
            icon: '/images/skill-icons/constellations/hu-tao-constellation6.png',
            effect: (baseStats) => {
                baseStats['Pyro RES'] += 200
                baseStats['Cryo RES'] += 200
                baseStats['Electro RES'] += 200
                baseStats['Hydro RES'] += 200
                baseStats['Geo RES'] += 200
                baseStats['Anemo RES'] += 200
                baseStats['Dendro RES'] += 200
                baseStats['Physical RES'] += 200
                baseStats['CRIT Rate'] += 100
                return baseStats
            },
            minConstellation: 6,
        },
    ],
    Nahida: [
        {
            name: 'Compassion Illuminated',
            description: (
                <span>
                    While inside <b>Illusory Heart</b>: Increases Elemental
                    Mastery by 25% of the EM of the party member with the
                    highest EM
                </span>
            ),
            icon: '/images/skill-icons/passives/nahida-passive1.png',
            effect: (baseStats, currentStacks) => {
                if (!currentStacks) return baseStats
                const elementalMasteryOptions = [
                    0, 125, 150, 175, 200, 225, 250,
                ]
                baseStats['Elemental Mastery'] +=
                    elementalMasteryOptions[currentStacks]
                return baseStats
            },
            maxStacks: 6,
            stackOptions: ['Off', '125', '150', '175', '200', '225', '250'],
        },
        {
            name: 'Awakening Elucidated',
            description: (
                <span>
                    Each point of Nahida&apos;s EM beyond 200 will grant 0.1%
                    Bonus DMG and 0.03% CRIT Rate to{' '}
                    <b>Tri-Karma Purification</b> (Elemental Skill) (capped at
                    80% Bonus DMG and 24% CRIT Rate)
                </span>
            ),
            icon: '/images/skill-icons/passives/nahida-passive2.png',
            effect: (baseStats) => {
                const bonusDMG = Math.min(
                    80,
                    Math.max(0, baseStats['Elemental Mastery'] - 200) * 0.1
                )
                const critRate = Math.min(
                    24,
                    Math.max(0, baseStats['Elemental Mastery'] - 200) * 0.03
                )
                baseStats['Tri-Karma Purification DMG Bonus'] =
                    (baseStats['Tri-Karma Purification DMG Bonus'] || 0) +
                    bonusDMG
                baseStats['Elemental Skill CRIT Rate'] += critRate
                return baseStats
            },
        },
        {
            name: 'The Root of All Fullness',
            description: (
                <span>
                    <span className="min-constellation">C2</span> Burning,
                    Bloom, Hyperbloom, and Burgeon Reaction DMG can now CRIT on
                    opponents marked by <b>Seeds of Skanda</b> (CRIT Rate and
                    CRIT DMG fixed at 20% and 100%, respectively). For 8s after
                    being hit by Quicken, Aggravate, or Spread, enemies have DEF
                    decreased by 30%
                </span>
            ),
            icon: '/images/skill-icons/constellations/nahida-constellation2.png',
            effect: (baseStats) => {
                return baseStats
            },
            minConstellation: 2,
        },
        {
            name: 'The Stem of Manifest Inference',
            description: (
                <span>
                    <span className="min-constellation">C4</span> When 1/2/3/(4
                    or more) nearby opponents are affected by{' '}
                    <b>Seeds of Skandha</b>, Nahida&apos;s EM will be increased
                    by 100/120/140/160
                </span>
            ),
            icon: '/images/skill-icons/constellations/nahida-constellation4.png',
            effect: (baseStats, currentStacks) => {
                if (!currentStacks) return baseStats
                const elementalMasteryOptions = [0, 100, 120, 140, 160]
                baseStats['Elemental Mastery'] += elementalMasteryOptions[
                    currentStacks
                ]
                return baseStats
            },
            minConstellation: 4,
            maxStacks: 4,
            stackOptions: ['Off', '100', '120', '140', '160'],
        },
    ],
}

export default characterBonuses
