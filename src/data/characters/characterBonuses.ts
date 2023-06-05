import { Bonus, NewBaseStat } from '@/types/Character'
import { characterData } from '@/data' 

const characterBonuses: Record<string, Bonus[]> = {
    'Hu Tao': [
        {
            name: 'Guide to Afterlife',
            description: 'Paramita Papilio (Elemental Skill Stance)',
            effect: (
                baseStats: NewBaseStat,
                currentStacks?: number,
                activeSkills?: string[]
            ) => {
                const skillData = characterData['Hu Tao'].activeSkills.find(
                    (skill) => skill.name === 'Guide to Afterlife'
                )?.data
                const bonusString = skillData?.['ATK Increase']?.[activeSkills![1] as keyof typeof skillData['ATK Increase']].match(/\d+(\.\d+)?/)
                const bonusFloat = bonusString ? parseFloat(bonusString[0]) : null;
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
        },
        
        {
            name: 'Sanguine Rogue',
            description: "+33% Pyro DMG Bonus when under 50% Max HP",
            effect: (
                baseStats: NewBaseStat,
            ) => {
                baseStats['Pyro DMG Bonus'] *= 1.33
                return baseStats
            },
        },
    ],
}

export default characterBonuses
