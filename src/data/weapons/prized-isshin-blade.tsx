import { Weapon, WeaponEffect } from '@/interfaces/Weapon'

const effect: WeaponEffect = ({ attributes, initialAttributes, refinement }) => {
    // Effect logic here
}

const PrizedIsshinBlade: Weapon = {
    name: 'Prized Isshin Blade',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11421_gacha_icon_w145.webp',
    rarity: 4,
    description:
        'An ominous purple aura clings to this bizarre blade. Its wicked aura and hostility have both decreased greatly.',
    effectName: 'Wandering Striker',
    effectDescription:
        "When a Normal, Charged, or Plunging Attack hits an opponent, it will release an Accursed Spirit, dealing AoE DMG equal to 180% of ATK and restoring 100% of ATK as HP. This effect can be triggered once every 8s. The DMG done by this weapon's wielder is decreased by 50%.",
    mainStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus ATK': 0.045,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus ATK': 0.0795,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus ATK': 0.0795,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus ATK': 0.1159,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus ATK': 0.1159,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus ATK': 0.1341,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus ATK': 0.1341,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus ATK': 0.1522,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus ATK': 0.1522,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus ATK': 0.1704,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus ATK': 0.1704,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus ATK': 0.1886,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus ATK': 0.1886,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus ATK': 0.2067,
        },
    },
    refinements: [
        {
            description:
                "When a Normal, Charged, or Plunging Attack hits an opponent, it will release an Accursed Spirit, dealing AoE DMG equal to 180% of ATK and restoring 100% of ATK as HP. This effect can be triggered once every 8s. The DMG done by this weapon's wielder is decreased by 50%.",
            level: 1,
        },
    ],
    effect,
}

export default PrizedIsshinBlade
