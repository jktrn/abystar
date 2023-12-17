import { Weapon } from '@/interfaces/Weapon'
import { Bonus } from '@/interfaces/Character'

const weaponBonus: Bonus = {
    name: "A Thousand Nights' Dawnsong",
    description: (
        <span>
            Party members other than the equipping character will provide the
            equipping character with buffs based on whether their Elemental Type is
            the same as the latter or not. If their Elemental Types are the same,
            increase Elemental Mastery by 32. If not, increase the equipping
            character&apos;s DMG Bonus from their Elemental Type by 10%. The
            aforementioned effects can have 3 stacks. Additionally, all nearby party
            members other than the equipping character will have their Elemental
            Mastery increased by 40. Multiple such effects from multiple such weapons
            can stack.
        </span>
    ),
    effect: (attributes, initialAttributes, talentLevels, currentStacks) => {
        if (!currentStacks || !initialAttributes) return { attributes }

        const elementalMasteryOptions = [0, 125, 150, 175, 200, 225, 250]

        const newAttributes = {
            ...attributes,
            'Elemental Mastery':
                attributes['Elemental Mastery'] +
                elementalMasteryOptions[currentStacks],
        }

        return { attributes: newAttributes }
    },
    maxStacks: 6,
    stackOptions: ['Off', '125', '150', '175', '200', '225', '250'],
}

const AThousandFloatingDreams: Weapon = {
    name: 'A Thousand Floating Dreams',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14511_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 5,
    description:
        'This lamp illuminates the dreams that float up over a thousand nights, and in its emerald-green light flows a song of ancient days.',
    effectName: "A Thousand Nights' Dawnsong",
    effectDescription:
        "Party members other than the equipping character will provide the equipping character with buffs based on whether their Elemental Type is the same as the latter or not. If their Elemental Types are the same, increase Elemental Mastery by 32. If not, increase the equipping character's DMG Bonus from their Elemental Type by 10%. Each of the aforementioned effects can have up to 3 stacks. Additionally, all nearby party members other than the equipping character will have their Elemental Mastery increased by 40. Multiple such effects from multiple such weapons can stack.",
    baseStats: {
        '1/20': {
            'Base ATK': 44.34,
            'Bonus Elemental Mastery': 57.6,
        },
        '20/20': {
            'Base ATK': 110.17,
            'Bonus Elemental Mastery': 101.78,
        },
        '20/40': {
            'Base ATK': 141.27,
            'Bonus Elemental Mastery': 101.78,
        },
        '40/40': {
            'Base ATK': 209.82,
            'Bonus Elemental Mastery': 148.32,
        },
        '40/50': {
            'Base ATK': 240.92,
            'Bonus Elemental Mastery': 148.32,
        },
        '50/50': {
            'Base ATK': 275.46,
            'Bonus Elemental Mastery': 171.59,
        },
        '50/60': {
            'Base ATK': 306.66,
            'Bonus Elemental Mastery': 171.59,
        },
        '60/60': {
            'Base ATK': 341.46,
            'Bonus Elemental Mastery': 194.86,
        },
        '60/70': {
            'Base ATK': 372.56,
            'Bonus Elemental Mastery': 194.86,
        },
        '70/70': {
            'Base ATK': 407.81,
            'Bonus Elemental Mastery': 218.07,
        },
        '70/80': {
            'Base ATK': 438.91,
            'Bonus Elemental Mastery': 218.07,
        },
        '80/80': {
            'Base ATK': 474.55,
            'Bonus Elemental Mastery': 241.34,
        },
        '80/90': {
            'Base ATK': 505.65,
            'Bonus Elemental Mastery': 241.34,
        },
        '90/90': {
            'Base ATK': 541.83,
            'Bonus Elemental Mastery': 264.61,
        },
    },
    refinements: [
        {
            description:
                "Party members other than the equipping character will provide the equipping character with buffs based on whether their Elemental Type is the same as the latter or not. If their Elemental Types are the same, increase Elemental Mastery by 32. If not, increase the equipping character's DMG Bonus from their Elemental Type by 10%. Each of the aforementioned effects can have up to 3 stacks. Additionally, all nearby party members other than the equipping character will have their Elemental Mastery increased by 40. Multiple such effects from multiple such weapons can stack.",
            level: 1,
        },
        {
            description:
                "Party members other than the equipping character will provide the equipping character with buffs based on whether their Elemental Type is the same as the latter or not. If their Elemental Types are the same, increase Elemental Mastery by 40. If not, increase the equipping character's DMG Bonus from their Elemental Type by 14%. The aforementioned effects can have 3 stacks. Additionally, all nearby party members other than the equipping character will have their Elemental Mastery increased by 42. Multiple such effects from multiple such weapons can stack.",
            level: 2,
        },
        {
            description:
                "Party members other than the equipping character will provide the equipping character with buffs based on whether their Elemental Type is the same as the latter or not. If their Elemental Types are the same, increase Elemental Mastery by 48. If not, increase the equipping character's DMG Bonus from their Elemental Type by 18%. The aforementioned effects can have 3 stacks. Additionally, all nearby party members other than the equipping character will have their Elemental Mastery increased by 44. Multiple such effects from multiple such weapons can stack.",
            level: 3,
        },
        {
            description:
                "Party members other than the equipping character will provide the equipping character with buffs based on whether their Elemental Type is the same as the latter or not. If their Elemental Types are the same, increase Elemental Mastery by 56. If not, increase the equipping character's DMG Bonus from their Elemental Type by 22%. The aforementioned effects can have 3 stacks. Additionally, all nearby party members other than the equipping character will have their Elemental Mastery increased by 46. Multiple such effects from multiple such weapons can stack.",
            level: 4,
        },
        {
            description:
                "Party members other than the equipping character will provide the equipping character with buffs based on whether their Elemental Type is the same as the latter or not. If their Elemental Types are the same, increase Elemental Mastery by 64. If not, increase the equipping character's DMG Bonus from their Elemental Type by 26%. The aforementioned effects can have 3 stacks. Additionally, all nearby party members other than the equipping character will have their Elemental Mastery increased by 48. Multiple such effects from multiple such weapons can stack.",
            level: 5,
        },
    ],
    weaponBonus,
}

export default AThousandFloatingDreams
