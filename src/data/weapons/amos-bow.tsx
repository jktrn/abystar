import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const AmosBow: Weapon = {
    name: "Amos' Bow",
    image: 'https://genshin.honeyhunterworld.com/img/i_n15502_gacha_icon_w145.webp',
    type: 'Bow',
    rarity: 5,
    description:
        'An extremely ancient bow that has retained its power despite its original master being long gone. It draws power from everyone and everything in the world, and the further away you are from that which your heart desires, the more powerful it is.',
    effectName: 'Strong-Willed',
    effectDescription:
        'Increases Normal and Charged Attack DMG by 12%. After a Normal or Charged Attack is fired, DMG dealt increases by a further 8% every 0.1s the arrow is in the air for up to 5 times.',
    baseStats: {
        '1/20': {
            'Base ATK': 45.94,
            'Bonus ATK': 0.108,
        },
        '20/20': {
            'Base ATK': 121.73,
            'Bonus ATK': 0.1908,
        },
        '20/40': {
            'Base ATK': 152.83,
            'Bonus ATK': 0.1908,
        },
        '40/40': {
            'Base ATK': 235.2,
            'Bonus ATK': 0.2781,
        },
        '40/50': {
            'Base ATK': 266.3,
            'Bonus ATK': 0.2781,
        },
        '50/50': {
            'Base ATK': 308.42,
            'Bonus ATK': 0.3217,
        },
        '50/60': {
            'Base ATK': 339.62,
            'Bonus ATK': 0.3217,
        },
        '60/60': {
            'Base ATK': 382.43,
            'Bonus ATK': 0.3654,
        },
        '60/70': {
            'Base ATK': 413.53,
            'Bonus ATK': 0.3654,
        },
        '70/70': {
            'Base ATK': 456.99,
            'Bonus ATK': 0.4089,
        },
        '70/80': {
            'Base ATK': 488.09,
            'Bonus ATK': 0.4089,
        },
        '80/80': {
            'Base ATK': 532.23,
            'Bonus ATK': 0.4525,
        },
        '80/90': {
            'Base ATK': 563.33,
            'Bonus ATK': 0.4525,
        },
        '90/90': {
            'Base ATK': 608.07,
            'Bonus ATK': 0.4962,
        },
    },
    refinements: [
        {
            description:
                'Increases Normal and Charged Attack DMG by 12%. After a Normal or Charged Attack is fired, DMG dealt increases by a further 8% every 0.1s the arrow is in the air for up to 5 times.',
            level: 1,
        },
        {
            description:
                'Increases Normal and Charged Attack DMG by 15%. After a Normal or Charged Attack is fired, DMG dealt increases by a further 10% every 0.1s the arrow is in the air for up to 5 times.',
            level: 2,
        },
        {
            description:
                'Increases Normal and Charged Attack DMG by 18%. After a Normal or Charged Attack is fired, DMG dealt increases by a further 12% every 0.1s the arrow is in the air for up to 5 times.',
            level: 3,
        },
        {
            description:
                'Increases Normal and Charged Attack DMG by 21%. After a Normal or Charged Attack is fired, DMG dealt increases by a further 14% every 0.1s the arrow is in the air for up to 5 times.',
            level: 4,
        },
        {
            description:
                'Increases Normal and Charged Attack DMG by 24%. After a Normal or Charged Attack is fired, DMG dealt increases by a further 16% every 0.1s the arrow is in the air for up to 5 times.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default AmosBow
