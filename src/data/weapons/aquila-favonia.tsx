import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const AquilaFavonia: Weapon = {
    name: 'Aquila Favonia',
    image: 'https://genshin.honeyhunterworld.com/img/i_n11501_gacha_icon_w145.webp',
    type: 'Sword',
    rarity: 5,
    description:
        'The soul of the Knights of Favonius. Millennia later, it still calls on the winds of swift justice to vanquish all evil \u2014 just like the last heroine who wielded it.',
    effectName: "Falcon's Defiance",
    effectDescription:
        'ATK is increased by 20%. Triggers on taking DMG: the soul of the Falcon of the West awakens, holding the banner of resistance aloft, regenerating HP equal to 100% of ATK and dealing 200% of ATK as DMG to surrounding opponents. This effect can only occur once every 15s.',
    baseStats: {
        '1/20': {
            'Base ATK': 47.54,
            'Physical DMG Bonus': 0.09,
        },
        '20/20': {
            'Base ATK': 133.29,
            'Physical DMG Bonus': 0.159,
        },
        '20/40': {
            'Base ATK': 164.39,
            'Physical DMG Bonus': 0.159,
        },
        '40/40': {
            'Base ATK': 260.56,
            'Physical DMG Bonus': 0.2318,
        },
        '40/50': {
            'Base ATK': 291.66,
            'Physical DMG Bonus': 0.2318,
        },
        '50/50': {
            'Base ATK': 341.43,
            'Physical DMG Bonus': 0.2681,
        },
        '50/60': {
            'Base ATK': 372.63,
            'Physical DMG Bonus': 0.2681,
        },
        '60/60': {
            'Base ATK': 423.4,
            'Physical DMG Bonus': 0.3045,
        },
        '60/70': {
            'Base ATK': 454.5,
            'Physical DMG Bonus': 0.3045,
        },
        '70/70': {
            'Base ATK': 506.22,
            'Physical DMG Bonus': 0.3407,
        },
        '70/80': {
            'Base ATK': 537.32,
            'Physical DMG Bonus': 0.3407,
        },
        '80/80': {
            'Base ATK': 589.85,
            'Physical DMG Bonus': 0.3771,
        },
        '80/90': {
            'Base ATK': 620.95,
            'Physical DMG Bonus': 0.3771,
        },
        '90/90': {
            'Base ATK': 674.33,
            'Physical DMG Bonus': 0.4135,
        },
    },
    refinements: [
        {
            description:
                'ATK is increased by 20%. Triggers on taking DMG: the soul of the Falcon of the West awakens, holding the banner of resistance aloft, regenerating HP equal to 100% of ATK and dealing 200% of ATK as DMG to surrounding opponents. This effect can only occur once every 15s.',
            level: 1,
        },
        {
            description:
                'ATK is increased by 25%. Triggers on taking DMG: the soul of the Falcon of the West awakens, holding the banner of resistance aloft, regenerating HP equal to 115% of ATK and dealing 230% of ATK as DMG to surrounding opponents. This effect can only occur once every 15s.',
            level: 2,
        },
        {
            description:
                'ATK is increased by 30%. Triggers on taking DMG: the soul of the Falcon of the West awakens, holding the banner of resistance aloft, regenerating HP equal to 130% of ATK and dealing 260% of ATK as DMG to surrounding opponents. This effect can only occur once every 15s.',
            level: 3,
        },
        {
            description:
                'ATK is increased by 35%. Triggers on taking DMG: the soul of the Falcon of the West awakens, holding the banner of resistance aloft, regenerating HP equal to 145% of ATK and dealing 290% of ATK as DMG to surrounding opponents. This effect can only occur once every 15s.',
            level: 4,
        },
        {
            description:
                'ATK is increased by 40%. Triggers on taking DMG: the soul of the Falcon of the West awakens, holding the banner of resistance aloft, regenerating HP equal to 160% of ATK and dealing 320% of ATK as DMG to surrounding opponents. This effect can only occur once every 15s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default AquilaFavonia
