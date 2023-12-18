import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const UltimateOverlordsMegaMagicSword: Weapon = {
    name: '"Ultimate Overlord\'s Mega Magic Sword"',
    image: 'https://genshin.honeyhunterworld.com/img/i_n12426_gacha_icon_w145.webp',
    type: 'Claymore',
    rarity: 4,
    description:
        'A magical sword that can only be wielded by the ultimate overlord who rules the seas. As it has been made with special water-resistant materials, it will not get soaked even when immersed in water. Why, one might even call it invincible!',
    effectName: 'We Believe in You!',
    effectDescription:
        "ATK increased by 12%. That's not all! The support from all Melusines you've helped in Merusea Village fills you with strength! Based on the number of them you've helped, your ATK is increased by up to an additional 12%.",
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
                "ATK increased by 12%. That's not all! The support from all Melusines you've helped in Merusea Village fills you with strength! Based on the number of them you've helped, your ATK is increased by up to an additional 12%.",
            level: 1,
        },
        {
            description:
                "ATK increased by 15%. That's not all! The support from all Melusines you've helped in Merusea Village fills you with strength! Based on the number of them you've helped, your ATK is increased by up to an additional 15%.",
            level: 2,
        },
        {
            description:
                "ATK increased by 18%. That's not all! The support from all Melusines you've helped in Merusea Village fills you with strength! Based on the number of them you've helped, your ATK is increased by up to an additional 18%.",
            level: 3,
        },
        {
            description:
                "ATK increased by 21%. That's not all! The support from all Melusines you've helped in Merusea Village fills you with strength! Based on the number of them you've helped, your ATK is increased by up to an additional 21%.",
            level: 4,
        },
        {
            description:
                "ATK increased by 24%. That's not all! The support from all Melusines you've helped in Merusea Village fills you with strength! Based on the number of them you've helped, your ATK is increased by up to an additional 24%.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default UltimateOverlordsMegaMagicSword
