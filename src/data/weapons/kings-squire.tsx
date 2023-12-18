import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const KingsSquire: Weapon = {
    name: "King's Squire",
    image: 'https://genshin.honeyhunterworld.com/img/i_n15417_gacha_icon_w145.webp',
    type: 'Weapon',
    rarity: 4,
    description:
        'A weapon you obtained from an Aranara tale. It has taken on the shape of a bow that can shoot the enemies of the forest down.',
    effectName: "Labyrinth Lord's Instruction",
    effectDescription:
        'Obtain the Teachings of the Forest effect when unleashing Elemental Skills and Bursts, increasing Elemental Mastery by 60 for 12s. This effect will be removed when switching characters. When the Teachings of the Forest effect ends or is removed, it will deal 100% of ATK as DMG to 1 nearby opponent. The Teachings of the Forest effect can be triggered once every 20s.',
    baseStats: {
        '1/20': {
            'Base ATK': 41.07,
            'Bonus ATK': 0.12,
        },
        '20/20': {
            'Base ATK': 99.26,
            'Bonus ATK': 0.212,
        },
        '20/40': {
            'Base ATK': 125.16,
            'Bonus ATK': 0.212,
        },
        '40/40': {
            'Base ATK': 183.68,
            'Bonus ATK': 0.309,
        },
        '40/50': {
            'Base ATK': 209.68,
            'Bonus ATK': 0.309,
        },
        '50/50': {
            'Base ATK': 238.34,
            'Bonus ATK': 0.3575,
        },
        '50/60': {
            'Base ATK': 264.24,
            'Bonus ATK': 0.3575,
        },
        '60/60': {
            'Base ATK': 292.62,
            'Bonus ATK': 0.406,
        },
        '60/70': {
            'Base ATK': 318.52,
            'Bonus ATK': 0.406,
        },
        '70/70': {
            'Base ATK': 346.65,
            'Bonus ATK': 0.4543,
        },
        '70/80': {
            'Base ATK': 372.65,
            'Bonus ATK': 0.4543,
        },
        '80/80': {
            'Base ATK': 400.66,
            'Bonus ATK': 0.5028,
        },
        '80/90': {
            'Base ATK': 426.56,
            'Bonus ATK': 0.5028,
        },
        '90/90': {
            'Base ATK': 454.36,
            'Bonus ATK': 0.5513,
        },
    },
    refinements: [
        {
            description:
                'Obtain the Teachings of the Forest effect when unleashing Elemental Skills and Bursts, increasing Elemental Mastery by 60 for 12s. This effect will be removed when switching characters. When the Teachings of the Forest effect ends or is removed, it will deal 100% of ATK as DMG to 1 nearby opponent. The Teachings of the Forest effect can be triggered once every 20s.',
            level: 1,
        },
        {
            description:
                'Obtain the Teachings of the Forest effect when unleashing Elemental Skills and Bursts, increasing Elemental Mastery by 80 for 12s. This effect will be removed when switching characters. When the Teachings of the Forest effect ends or is removed, it will deal 120% of ATK as DMG to 1 nearby opponent. The Teachings of the Forest effect can be triggered once every 20s.',
            level: 2,
        },
        {
            description:
                'Obtain the Teachings of the Forest effect when unleashing Elemental Skills and Bursts, increasing Elemental Mastery by 100 for 12s. This effect will be removed when switching characters. When the Teachings of the Forest effect ends or is removed, it will deal 140% of ATK as DMG to 1 nearby opponent. The Teachings of the Forest effect can be triggered once every 20s.',
            level: 3,
        },
        {
            description:
                'Obtain the Teachings of the Forest effect when unleashing Elemental Skills and Bursts, increasing Elemental Mastery by 120 for 12s. This effect will be removed when switching characters. When the Teachings of the Forest effect ends or is removed, it will deal 160% of ATK as DMG to 1 nearby opponent. The Teachings of the Forest effect can be triggered once every 20s.',
            level: 4,
        },
        {
            description:
                'Obtain the Teachings of the Forest effect when unleashing Elemental Skills and Bursts, increasing Elemental Mastery by 140 for 12s. This effect will be removed when switching characters. When the Teachings of the Forest effect ends or is removed, it will deal 180% of ATK as DMG to 1 nearby opponent. The Teachings of the Forest effect can be triggered once every 20s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default KingsSquire
