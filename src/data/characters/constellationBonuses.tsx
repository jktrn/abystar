import { Bonus } from '@/types/Character'

const constellationBonuses: Record<string, Bonus[]> = {
    'Hu Tao': [
        {
            name: 'Crimson Bouquet',
            description: (
                <span>
                    While in Paramita Papilio state, Hu Tao&apos;s Charge
                    Attacks do not consume Stamina.
                </span>
            ),
            icon: '/images/constellation-icons/hu-tao-constellation1.png',
            effect: (baseStats) => {
                baseStats['Charged Attack Stamina Cost Multiplier'] = -100
                return baseStats
            },
        },
        {
            name: 'Ominous Rainfall',
            description: (
                <span>
                    Increases the Blood Blossom DMG by an amount equal to 10% of
                    Hu Tao&apos;s Max HP at the time the effect is applied.
                    Additionally, Spirit Soother will also apply the Blood
                    Blossom effect.
                </span>
            ),
            icon: '/images/constellation-icons/hu-tao-constellation2.png',
            effect: (baseStats) => {
                baseStats['Elemental Skill Additive Bonus'] = 10
                return baseStats
            },
        },
        {
            name: 'Lingering Carmine',
            description: (
                <span>
                    Increases the Level of Guide to Afterlife by 3. Maximum
                    upgrade level is 15.
                </span>
            ),
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
            description: (
                <span>
                    Upon defeating an enemy affected by a Blood Blossom that Hu
                    Tao applied herself, all nearby allies in the party
                    (excluding Hu Tao herself) will have their CRIT Rate
                    increased by 12% for 15s.
                </span>
            ),
            icon: '/images/constellation-icons/hu-tao-constellation4.png',
            effect: (baseStats) => {
                return baseStats
            },
        },
        {
            name: 'Floral Incense',
            description: (
                <span>
                    Increases the Level of Spirit Soother by 3. Maximum upgrade
                    level is 15.
                </span>
            ),
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
        {
            name: "Butterfly's Embrace",
            description: (
                <span>
                    Triggers when Hu Tao&apos;s HP drops below 25%, or when she
                    suffers a lethal strike: Hu Tao will not fall as a result of
                    the DMG sustained. Additionally, for the next 10s, all of
                    her Elemental and Physical RES is increased by 200%, her
                    CRIT Rate is increased by 100%, and her resistance to
                    interruption is greatly increased. This effect triggers
                    automatically when Hu Tao has 1 HP left. Can only occur once
                    every 60s.
                </span>
            ),
            icon: '/images/constellation-icons/hu-tao-constellation6.png',
            effect: (baseStats) => {
                // Already handled in characterBonuses.tsx
                return baseStats
            },
        },
    ],
}

export default constellationBonuses
