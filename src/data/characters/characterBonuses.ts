import { AbilityScaling, Bonus, NewBaseStat } from '@/types/Character'
import { characterData } from '@/data'

const characterBonuses: Record<string, Bonus[]> = {
    'Hu Tao': [
        {
            name: 'Guide to Afterlife',
            description: 'Paramita Papilio (Elemental Skill Stance)',
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
            description: '+33% Pyro DMG Bonus when under 50% Max HP',
            icon: '/images/skill-icons/passives/hu-tao-passive2.png',
            effect: (baseStats: NewBaseStat) => {
                baseStats['Pyro DMG Bonus'] += 33
                return baseStats
            },
        },
    ],
}

export default characterBonuses
