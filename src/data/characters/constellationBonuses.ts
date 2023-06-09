import { Bonus } from '@/types/Character'

const constellationBonuses: Record<string, Bonus[]> = {
    'Hu Tao': [
        {
            name: 'Crimson Bouquet',
            description:
                "While in Paramita Papilio state, Hu Tao's Charge Attacks do not consume Stamina.",
            icon: '/images/constellation-icons/hu-tao-constellation1.png',
            effect: (baseStats) => {
                //TODO
                return baseStats
            },
        },
        {
            name: 'Ominous Rainfall',
            description:
                "Increases the Blood Blossom DMG by an amount equal to 10% of Hu Tao's Max HP at the time the effect is applied. Additionally, Spirit Soother will also apply the Blood Blossom effect. ",
            icon: '/images/constellation-icons/hu-tao-constellation2.png',
            effect: (baseStats) => {
                baseStats['Elemental Skill Additive Bonus'] = 10
                return baseStats
            },
        },
        {
            name: 'Lingering Carmine',
            description:
                'Increases the Level of Guide to Afterlife by 3. Maximum upgrade level is 15.',
            icon: '/images/constellation-icons/hu-tao-constellation3.png',
            effect: (baseStats, currentStacks, activeSkills) => {
                if (!activeSkills) return baseStats
                const currentSkillLevel = parseInt(activeSkills[1].slice(2))
                if (currentSkillLevel >= 13) return baseStats
                const newSkillLevel = currentSkillLevel + 3
                activeSkills[1] = `Lv${newSkillLevel}`
                return baseStats
            },
        },
        {
            name: 'Garden of Eternal Rest',
            description:
                'Upon defeating an enemy affected by a Blood Blossom that Hu Tao applied herself, all nearby allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 15s.',
            icon: '/images/constellation-icons/hu-tao-constellation4.png',
            effect: (baseStats) => {
                return baseStats
            },
        },
        {
            name: 'Floral Incense',
            description:
                'Increases the Level of Spirit Soother by 3. Maximum upgrade level is 15.',
            icon: '/images/constellation-icons/hu-tao-constellation5.png',
            effect: (baseStats, currentStacks, activeSkills) => {
                if (!activeSkills) return baseStats
                const currentSkillLevel = parseInt(activeSkills[2].slice(2))
                if (currentSkillLevel >= 13) return baseStats
                const newSkillLevel = currentSkillLevel + 3
                activeSkills[2] = `Lv${newSkillLevel}`
                return baseStats
            },
        },
    ],
}

export default constellationBonuses
