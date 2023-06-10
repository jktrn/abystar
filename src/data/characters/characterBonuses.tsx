import { AbilityScaling, Bonus, NewBaseStat } from '@/types/Character'
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
            applyToAbilityScaling: (abilityScaling: AbilityScaling) => {
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
            effect: (baseStats: NewBaseStat) => {
                baseStats['Pyro DMG Bonus'] += 33
                return baseStats
            },
        },
        {
            name: "Butterfly's Embrace",
            description: (
                <span>
                    (C6) Triggers when receiving fatal blow or below 25% HP. All
                    Elemental/Physical RES increased by 200%, CRIT Rate
                    increased by 100%
                </span>
            ),
            icon: '/images/skill-icons/constellations/hu-tao-constellation6.png',
            effect: (baseStats: NewBaseStat) => {
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
}

export default characterBonuses
