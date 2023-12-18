import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const WineAndSong: Weapon = {
    name: 'Wine and Song',
    image: 'https://genshin.honeyhunterworld.com/img/i_n14410_gacha_icon_w145.webp',
    type: 'Catalyst',
    rarity: 4,
    description:
        'A songbook from the bygone aristocratic era, whose composer has become forgotten. It chronicles the tale of a certain heroic outlaw.',
    effectName: 'Ever-Changing',
    effectDescription:
        'Hitting an opponent with a Normal Attack decreases the Stamina consumption of Sprint or Alternate Sprint by 14% for 5s. Additionally, using a Sprint or Alternate Sprint ability increases ATK by 20% for 5s.',
    baseStats: {
        '1/20': {
            'Base ATK': 43.73,
            'Bonus Energy Recharge': 0.0667,
        },
        '20/20': {
            'Base ATK': 118.57,
            'Bonus Energy Recharge': 0.1178,
        },
        '20/40': {
            'Base ATK': 144.47,
            'Bonus Energy Recharge': 0.1178,
        },
        '40/40': {
            'Base ATK': 225.99,
            'Bonus Energy Recharge': 0.1717,
        },
        '40/50': {
            'Base ATK': 251.99,
            'Bonus Energy Recharge': 0.1717,
        },
        '50/50': {
            'Base ATK': 293.36,
            'Bonus Energy Recharge': 0.1986,
        },
        '50/60': {
            'Base ATK': 319.26,
            'Bonus Energy Recharge': 0.1986,
        },
        '60/60': {
            'Base ATK': 360.9,
            'Bonus Energy Recharge': 0.2255,
        },
        '60/70': {
            'Base ATK': 386.8,
            'Bonus Energy Recharge': 0.2255,
        },
        '70/70': {
            'Base ATK': 428.69,
            'Bonus Energy Recharge': 0.2524,
        },
        '70/80': {
            'Base ATK': 454.69,
            'Bonus Energy Recharge': 0.2524,
        },
        '80/80': {
            'Base ATK': 496.72,
            'Bonus Energy Recharge': 0.2793,
        },
        '80/90': {
            'Base ATK': 522.62,
            'Bonus Energy Recharge': 0.2793,
        },
        '90/90': {
            'Base ATK': 564.78,
            'Bonus Energy Recharge': 0.3063,
        },
    },
    refinements: [
        {
            description:
                'Hitting an opponent with a Normal Attack decreases the Stamina consumption of Sprint or Alternate Sprint by 14% for 5s. Additionally, using a Sprint or Alternate Sprint ability increases ATK by 20% for 5s.',
            level: 1,
        },
        {
            description:
                'Hitting an opponent with a Normal Attack decreases the Stamina consumption of Sprint or Alternate Sprint by 16% for 5s. Additionally, using a Sprint or Alternate Sprint ability increases ATK by 25% for 5s.',
            level: 2,
        },
        {
            description:
                'Hitting an opponent with a Normal Attack decreases the Stamina consumption of Sprint or Alternate Sprint by 18% for 5s. Additionally, using a Sprint or Alternate Sprint ability increases ATK by 30% for 5s.',
            level: 3,
        },
        {
            description:
                'Hitting an opponent with a Normal Attack decreases the Stamina consumption of Sprint or Alternate Sprint by 20% for 5s. Additionally, using a Sprint or Alternate Sprint ability increases ATK by 35% for 5s.',
            level: 4,
        },
        {
            description:
                'Hitting an opponent with a Normal Attack decreases the Stamina consumption of Sprint or Alternate Sprint by 22% for 5s. Additionally, using a Sprint or Alternate Sprint ability increases ATK by 40% for 5s.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default WineAndSong
