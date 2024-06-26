import { TalentScaling, Bonus, Character } from '@/interfaces/Character'

const talentScalings: TalentScaling = {
    // ...
}

const characterBonuses: Bonus[] = [
    // ...
]

const constellationBonuses: Bonus[] = [
    // ...
]

const TravelerGeo: Character = {
    name: 'Traveler (Geo)',
    icon: '/images/characters/traveler.png',
    weapon: 'Sword',
    vision: 'Geo',
    rarity: 5,
    description:
        'A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.',
    occupation: '-',
    baseStats: {
        '1/20': {
            'Base HP': 912.0,
            'Base ATK': 17.81,
            'Base DEF': 57.22,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/20': {
            'Base HP': 2342.0,
            'Base ATK': 45.75,
            'Base DEF': 147.01,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/40': {
            'Base HP': 3024.0,
            'Base ATK': 59.05,
            'Base DEF': 189.76,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/40': {
            'Base HP': 4529.0,
            'Base ATK': 88.45,
            'Base DEF': 284.24,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/50': {
            'Base HP': 5013.0,
            'Base ATK': 97.91,
            'Base DEF': 314.61,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/50': {
            'Base HP': 5766.0,
            'Base ATK': 112.62,
            'Base DEF': 361.88,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/60': {
            'Base HP': 6411.0,
            'Base ATK': 125.22,
            'Base DEF': 402.38,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/60': {
            'Base HP': 7164.0,
            'Base ATK': 139.93,
            'Base DEF': 449.65,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/70': {
            'Base HP': 7648.0,
            'Base ATK': 149.38,
            'Base DEF': 480.03,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/70': {
            'Base HP': 8401.0,
            'Base ATK': 164.07,
            'Base DEF': 527.24,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/80': {
            'Base HP': 8885.0,
            'Base ATK': 173.53,
            'Base DEF': 557.61,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/80': {
            'Base HP': 9638.0,
            'Base ATK': 188.24,
            'Base DEF': 604.88,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/90': {
            'Base HP': 10122.0,
            'Base ATK': 197.69,
            'Base DEF': 635.25,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
        '90/90': {
            'Base HP': 10875.0,
            'Base ATK': 212.4,
            'Base DEF': 682.52,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Foreign Rockblade',
            image: '/images/characters/Skill_A_01.png',
            description:
                'Normal Attack\nPerforms up to 5 rapid strikes.\nCharged Attack\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '44.46%',
                    Lv2: '48.08%',
                    Lv3: '51.7%',
                    Lv4: '56.87%',
                    Lv5: '60.49%',
                    Lv6: '64.63%',
                    Lv7: '70.31%',
                    Lv8: '76%',
                    Lv9: '81.69%',
                    Lv10: '87.89%',
                    Lv11: '94.09%',
                    Lv12: '100.3%',
                    Lv13: '106.5%',
                    Lv14: '112.71%',
                    Lv15: '118.91%',
                },
                '2-Hit DMG': {
                    Lv1: '43.43%',
                    Lv2: '46.97%',
                    Lv3: '50.5%',
                    Lv4: '55.55%',
                    Lv5: '59.08%',
                    Lv6: '63.13%',
                    Lv7: '68.68%',
                    Lv8: '74.23%',
                    Lv9: '79.79%',
                    Lv10: '85.85%',
                    Lv11: '91.91%',
                    Lv12: '97.97%',
                    Lv13: '104.03%',
                    Lv14: '110.09%',
                    Lv15: '116.15%',
                },
                '3-Hit DMG': {
                    Lv1: '52.98%',
                    Lv2: '57.29%',
                    Lv3: '61.6%',
                    Lv4: '67.76%',
                    Lv5: '72.07%',
                    Lv6: '77%',
                    Lv7: '83.78%',
                    Lv8: '90.55%',
                    Lv9: '97.33%',
                    Lv10: '104.72%',
                    Lv11: '112.11%',
                    Lv12: '119.5%',
                    Lv13: '126.9%',
                    Lv14: '134.29%',
                    Lv15: '141.68%',
                },
                '4-Hit DMG': {
                    Lv1: '58.31%',
                    Lv2: '63.05%',
                    Lv3: '67.8%',
                    Lv4: '74.58%',
                    Lv5: '79.33%',
                    Lv6: '84.75%',
                    Lv7: '92.21%',
                    Lv8: '99.67%',
                    Lv9: '107.12%',
                    Lv10: '115.26%',
                    Lv11: '123.4%',
                    Lv12: '131.53%',
                    Lv13: '139.67%',
                    Lv14: '147.8%',
                    Lv15: '155.94%',
                },
                '5-Hit DMG': {
                    Lv1: '70.78%',
                    Lv2: '76.54%',
                    Lv3: '82.3%',
                    Lv4: '90.53%',
                    Lv5: '96.29%',
                    Lv6: '102.87%',
                    Lv7: '111.93%',
                    Lv8: '120.98%',
                    Lv9: '130.03%',
                    Lv10: '139.91%',
                    Lv11: '149.79%',
                    Lv12: '159.66%',
                    Lv13: '169.54%',
                    Lv14: '179.41%',
                    Lv15: '189.29%',
                },
                'Charged Attack DMG': {
                    Lv1: '116.62%',
                    Lv2: '126.11%',
                    Lv3: '135.60%',
                    Lv4: '149.16%',
                    Lv5: '158.65%',
                    Lv6: '169.50%',
                    Lv7: '184.42%',
                    Lv8: '199.33%',
                    Lv9: '214.25%',
                    Lv10: '230.52%',
                    Lv11: '246.79%',
                    Lv12: '263.06%',
                    Lv13: '279.34%',
                    Lv14: '295.61%',
                    Lv15: '311.88%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '20',
                    Lv2: '20',
                    Lv3: '20',
                    Lv4: '20',
                    Lv5: '20',
                    Lv6: '20',
                    Lv7: '20',
                    Lv8: '20',
                    Lv9: '20',
                    Lv10: '20',
                    Lv11: '20',
                    Lv12: '20',
                    Lv13: '20',
                    Lv14: '20',
                    Lv15: '20',
                },
                'Plunge DMG': {
                    Lv1: '63.93%',
                    Lv2: '69.14%',
                    Lv3: '74.34%',
                    Lv4: '81.77%',
                    Lv5: '86.98%',
                    Lv6: '92.93%',
                    Lv7: '101.1%',
                    Lv8: '109.28%',
                    Lv9: '117.46%',
                    Lv10: '126.38%',
                    Lv11: '135.3%',
                    Lv12: '144.22%',
                    Lv13: '153.14%',
                    Lv14: '162.06%',
                    Lv15: '170.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '127.84%',
                    Lv2: '138.24%',
                    Lv3: '148.65%',
                    Lv4: '163.51%',
                    Lv5: '173.92%',
                    Lv6: '185.81%',
                    Lv7: '202.16%',
                    Lv8: '218.51%',
                    Lv9: '234.86%',
                    Lv10: '252.7%',
                    Lv11: '270.54%',
                    Lv12: '288.38%',
                    Lv13: '306.22%',
                    Lv14: '324.05%',
                    Lv15: '341.89%',
                },
                'High Plunge DMG': {
                    Lv1: '159.68%',
                    Lv2: '172.67%',
                    Lv3: '185.67%',
                    Lv4: '204.24%',
                    Lv5: '217.23%',
                    Lv6: '232.09%',
                    Lv7: '252.51%',
                    Lv8: '272.93%',
                    Lv9: '293.36%',
                    Lv10: '315.64%',
                    Lv11: '337.92%',
                    Lv12: '360.2%',
                    Lv13: '382.48%',
                    Lv14: '404.76%',
                    Lv15: '427.04%',
                },
            },
        },
        {
            name: 'Starfell Sword',
            image: '/images/characters/Skill_S_PlayerRock_01.png',
            description:
                "You disgorge a meteorite from the depths of the earth, dealing\nAoE Geo DMG\n.\nThe meteorite is considered a\nGeo Construct\n, and can be climbed or used to block attacks.\nHold\nThis skill's positioning may be adjusted.\nYou spoke with Paimon about the final destination of falling stars.",
            data: {
                'Skill DMG': {
                    Lv1: '248%',
                    Lv2: '266.6%',
                    Lv3: '285.2%',
                    Lv4: '310%',
                    Lv5: '328.6%',
                    Lv6: '347.2%',
                    Lv7: '372%',
                    Lv8: '396.8%',
                    Lv9: '421.6%',
                    Lv10: '446.4%',
                    Lv11: '471.2%',
                    Lv12: '496%',
                    Lv13: '527%',
                    Lv14: '558%',
                    Lv15: '589%',
                },
                'Meteorite Duration': {
                    Lv1: '30s',
                    Lv2: '30s',
                    Lv3: '30s',
                    Lv4: '30s',
                    Lv5: '30s',
                    Lv6: '30s',
                    Lv7: '30s',
                    Lv8: '30s',
                    Lv9: '30s',
                    Lv10: '30s',
                    Lv11: '30s',
                    Lv12: '30s',
                    Lv13: '30s',
                    Lv14: '30s',
                    Lv15: '30s',
                },
                CD: {
                    Lv1: '8s',
                    Lv2: '8s',
                    Lv3: '8s',
                    Lv4: '8s',
                    Lv5: '8s',
                    Lv6: '8s',
                    Lv7: '8s',
                    Lv8: '8s',
                    Lv9: '8s',
                    Lv10: '8s',
                    Lv11: '8s',
                    Lv12: '8s',
                    Lv13: '8s',
                    Lv14: '8s',
                    Lv15: '8s',
                },
            },
        },
        {
            name: 'Wake of Earth',
            image: '/images/characters/Skill_E_PlayerRock_01.png',
            description:
                'Energizing the Geo deep underground, you set off expanding shockwaves.\nLaunches surrounding opponents back and deals\nAoE Geo DMG\n.\nA stone wall is erected at the edges of the shockwave.\nThe stone wall is considered a\nGeo Construct\n, and may be used to block attacks.\nYou and Paimon studied the pulse of the mountains.',
            data: {
                'DMG Per Shockwave': {
                    Lv1: '148%',
                    Lv2: '159.1%',
                    Lv3: '170.2%',
                    Lv4: '185%',
                    Lv5: '196.1%',
                    Lv6: '207.2%',
                    Lv7: '222%',
                    Lv8: '236.8%',
                    Lv9: '251.6%',
                    Lv10: '266.4%',
                    Lv11: '281.2%',
                    Lv12: '296%',
                    Lv13: '314.5%',
                    Lv14: '333%',
                    Lv15: '351.5%',
                },
                'Stonewall Duration': {
                    Lv1: '15s',
                    Lv2: '15s',
                    Lv3: '15s',
                    Lv4: '15s',
                    Lv5: '15s',
                    Lv6: '15s',
                    Lv7: '15s',
                    Lv8: '15s',
                    Lv9: '15s',
                    Lv10: '15s',
                    Lv11: '15s',
                    Lv12: '15s',
                    Lv13: '15s',
                    Lv14: '15s',
                    Lv15: '15s',
                },
                CD: {
                    Lv1: '15s',
                    Lv2: '15s',
                    Lv3: '15s',
                    Lv4: '15s',
                    Lv5: '15s',
                    Lv6: '15s',
                    Lv7: '15s',
                    Lv8: '15s',
                    Lv9: '15s',
                    Lv10: '15s',
                    Lv11: '15s',
                    Lv12: '15s',
                    Lv13: '15s',
                    Lv14: '15s',
                    Lv15: '15s',
                },
                'Energy Cost': {
                    Lv1: '60',
                    Lv2: '60',
                    Lv3: '60',
                    Lv4: '60',
                    Lv5: '60',
                    Lv6: '60',
                    Lv7: '60',
                    Lv8: '60',
                    Lv9: '60',
                    Lv10: '60',
                    Lv11: '60',
                    Lv12: '60',
                    Lv13: '60',
                    Lv14: '60',
                    Lv15: '60',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Shattered Darkrock',
            image: '/images/characters/UI_Talent_S_PlayerRock_05.png',
            description: "Reduces\nStarfell Sword\n's CD by 2s.",
        },
        {
            name: 'Frenzied Rockslide',
            image: '/images/characters/UI_Talent_S_PlayerRock_06.png',
            description:
                'The final hit of a Normal Attack combo triggers a collapse, dealing 60% of ATK as\nAoE Geo DMG\n.',
        },
    ],
    constellations: [
        {
            name: 'Invincible Stonewall',
            image: '/images/characters/UI_Talent_S_PlayerRock_01.png',
            description:
                'Party members within the radius of\nWake of Earth\nhave their CRIT Rate increased by 10% and have increased resistance against interruption.',
            level: 1,
        },
        {
            name: 'Rockcore Meltdown',
            image: '/images/characters/UI_Talent_S_PlayerRock_02.png',
            description:
                'When the meteorite created by\nStarfell Sword\nis destroyed, it will also explode, dealing additional\nAoE Geo DMG\nequal to the amount of damage dealt by Starfell Sword.',
            level: 2,
        },
        {
            name: 'Will of the Rock',
            image: '/images/characters/UI_Talent_U_PlayerRock_02.png',
            description:
                'Increases the Level of\nWake of Earth\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Reaction Force',
            image: '/images/characters/UI_Talent_S_PlayerRock_03.png',
            description:
                'The shockwave triggered by\nWake of Earth\nregenerates 5 Energy for every opponent hit.\nA maximum of 25 Energy can be regenerated in this manner at any one time.',
            level: 4,
        },
        {
            name: 'Meteorite Impact',
            image: '/images/characters/UI_Talent_U_PlayerRock_01.png',
            description:
                'Increases the Level of\nStarfell Sword\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Everlasting Boulder',
            image: '/images/characters/UI_Talent_S_PlayerRock_04.png',
            description:
                'The barrier created by\nWake of Earth\nlasts 5s longer.\nThe meteorite created by\nStarfell Sword\nlasts 10s longer.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default TravelerGeo
