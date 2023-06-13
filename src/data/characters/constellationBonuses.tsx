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
                // TODO: Broken, implement later
                // baseStats['Charged Attack Stamina Cost Multiplier'] = -100
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
    Nahida: [
        {
            name: 'The Seed of Stored Knowledge',
            description: (
                <span>
                    When the Shrine of Maya is unleashed and the Elemental Types
                    of the party members are being tabulated, the count will add
                    1 to the number of Pyro, Electro, and Hydro characters
                    respectively.
                </span>
            ),
            icon: '/images/constellation-icons/nahida-constellation1.png',
            effect: (baseStats) => {
                // TODO: Handle
                return baseStats
            },
        },
        {
            name: 'The Root of All Fullness',
            description: (
                <span>
                    Opponents that are marked by Seeds of Skandha applied by
                    Nahida herself will be affected by the following effects:
                    Burning, Bloom, Hyperbloom, and Burgeon Reaction DMG can
                    score CRIT Hits. CRIT Rate and CRIT DMG are fixed at 20% and
                    100% respectively. Within 8s of being affected by Quicken,
                    Aggravate, Spread, DEF is decreased by 30%.
                </span>
            ),
            icon: '/images/constellation-icons/nahida-constellation2.png',
            effect: (baseStats) => {
                // TODO: Handle
                return baseStats
            },
        },
        {
            name: 'The Shoot of Conscious Attainment',
            description: (
                <span>
                    Increases the Level of All Schemes to Know by 3.
                    <br />
                    Maximum upgrade level is 15.
                </span>
            ),
            icon: '/images/constellation-icons/nahida-constellation3.png',
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
            name: 'The Stem of Manifest Inference',
            description: (
                <span>
                    When 1/2/3/(4 or more) nearby opponents are affected by All
                    Schemes to Know&apos;s Seeds of Skandha, Nahida&apos;s Elemental
                    Mastery will be increased by 100/120/140/160.
                </span>
            ),
            icon: '/images/constellation-icons/nahida-constellation4.png',
            effect: (baseStats) => {
                // Handled in characterBonuses.tsx
                return baseStats
            },
        },
        {
            name: 'The Leaves of Enlightening Speech',
            description: (
                <span>
                    Increase the Level of Illusory Heart by 3.
                    <br />
                    Maximum upgrade level is 15.
                </span>
            ),
            icon: '/images/constellation-icons/nahida-constellation5.png',
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
            name: "The Fruit of Reason's Culmination",
            description: (
                <span>
                    When Nahida hits an opponent affected by All Schemes to
                    Know&apos;s Seeds of Skandha with Normal or Charged Attacks after
                    unleashing Illusory Heart, she will use Tri-Karma
                    Purification: Karmic Oblivion on this opponent and all
                    connected opponents, dealing{' '}
                    <span style={{ color: '#84a02f' }}>Dendro</span> DMG based
                    on 200% of Nahida&apos;s ATK and 400% of her Elemental Mastery.
                    <br />
                    DMG dealt by Tri-Karma Purification: Karmic Oblivion is
                    considered Elemental Skill DMG and can be triggered once
                    every 0.2s. This effect can last up to 10s and will be
                    removed after Nahida has unleashed 6 instances of Tri-Karma
                    Purification: Karmic Oblivion.
                </span>
            ),
            icon: '/images/constellation-icons/nahida-constellation6.png',
            effect: (baseStats) => {
                // TODO: Add ability aspects locked behind constellations
                return baseStats
            },
        },
    ],
}

export default constellationBonuses
