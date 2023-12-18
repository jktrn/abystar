import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const EverlastingMoonglow: Weapon = {
    name: 'Everlasting Moonglow',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14506_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 5,
    description:
        'A string of lovely jasper from the deep sea. It shines with a pure radiance like that of the moon, and just as ever-distant.',
    effectName: 'Byakuya Kougetsu',
    effectDescription:
        'Healing Bonus increased by 10%, Normal Attack DMG is increased by 1% of the Max HP of the character equipping this weapon. For 12s after using an Elemental Burst, Normal Attacks that hit opponents will restore 0.6 Energy. Energy can be restored this way once every 0.1s.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus HP': 0.108,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus HP': 0.1908,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus HP': 0.1908,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus HP': 0.2781,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus HP': 0.2781,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus HP': 0.3217,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus HP': 0.3217,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus HP': 0.3654,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus HP': 0.3654,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus HP': 0.4089,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus HP': 0.4089,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus HP': 0.4525,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus HP': 0.4525,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus HP': 0.4962,
        },
    },
    refinements: [
        {
            description:
                'Healing Bonus increased by 10%, Normal Attack DMG is increased by 1% of the Max HP of the character equipping this weapon. For 12s after using an Elemental Burst, Normal Attacks that hit opponents will restore 0.6 Energy. Energy can be restored this way once every 0.1s.',
            level: 1,
        },
        {
            description:
                'Healing Bonus increased by 12.5%, Normal Attack DMG is increased by 1.5% of the Max HP of the character equipping this weapon. For 12s after using an Elemental Burst, Normal Attacks that hit opponents will restore 0.6 Energy. Energy can be restored this way once every 0.1s.',
            level: 2,
        },
        {
            description:
                'Healing Bonus increased by 15%, Normal Attack DMG is increased by 2% of the Max HP of the character equipping this weapon. For 12s after using an Elemental Burst, Normal Attacks that hit opponents will restore 0.6 Energy. Energy can be restored this way once every 0.1s.',
            level: 3,
        },
        {
            description:
                'Healing Bonus increased by 17.5%, Normal Attack DMG is increased by 2.5% of the Max HP of the character equipping this weapon. For 12s after using an Elemental Burst, Normal Attacks that hit opponents will restore 0.6 Energy. Energy can be restored this way once every 0.1s.',
            level: 4,
        },
        {
            description:
                'Healing Bonus increased by 20%, Normal Attack DMG is increased by 3% of the Max HP of the character equipping this weapon. For 12s after using an Elemental Burst, Normal Attacks that hit opponents will restore 0.6 Energy. Energy can be restored this way once every 0.1s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default EverlastingMoonglow
