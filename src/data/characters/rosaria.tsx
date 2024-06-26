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

const Rosaria: Character = {
    name: 'Rosaria',
    icon: '/images/characters/UI_AvatarIcon_Rosaria.png',
    weapon: 'Polearm',
    vision: 'Cryo',
    rarity: 4,
    description:
        "A sister of the church, though you wouldn't know it if it weren't for her attire. Known for her sharp, cold words and manner, she often works alone.",
    occupation: 'Church of Favonius',
    baseStats: {
        '1/20': {
            'Base HP': 1030.0,
            'Base ATK': 20.12,
            'Base DEF': 59.51,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/20': {
            'Base HP': 2647.0,
            'Base ATK': 51.7,
            'Base DEF': 152.89,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/40': {
            'Base HP': 3417.0,
            'Base ATK': 66.73,
            'Base DEF': 197.35,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/40': {
            'Base HP': 5118.0,
            'Base ATK': 99.95,
            'Base DEF': 295.61,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/50': {
            'Base HP': 5665.0,
            'Base ATK': 110.63,
            'Base DEF': 327.2,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/50': {
            'Base HP': 6516.0,
            'Base ATK': 127.26,
            'Base DEF': 376.36,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/60': {
            'Base HP': 7245.0,
            'Base ATK': 141.5,
            'Base DEF': 418.48,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/60': {
            'Base HP': 8096.0,
            'Base ATK': 158.12,
            'Base DEF': 467.64,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/70': {
            'Base HP': 8643.0,
            'Base ATK': 168.8,
            'Base DEF': 499.23,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/70': {
            'Base HP': 9493.0,
            'Base ATK': 185.4,
            'Base DEF': 548.33,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/80': {
            'Base HP': 10040.0,
            'Base ATK': 196.08,
            'Base DEF': 579.92,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/80': {
            'Base HP': 10891.0,
            'Base ATK': 212.71,
            'Base DEF': 629.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/90': {
            'Base HP': 11438.0,
            'Base ATK': 223.39,
            'Base DEF': 660.66,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
        '90/90': {
            'Base HP': 12289.0,
            'Base ATK': 240.01,
            'Base DEF': 709.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Spear of the Church',
            image: '/images/characters/Skill_A_03.png',
            description:
                'Normal Attack\nPerforms up to 5 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '52.46%',
                    Lv2: '56.73%',
                    Lv3: '61%',
                    Lv4: '67.1%',
                    Lv5: '71.37%',
                    Lv6: '76.25%',
                    Lv7: '82.96%',
                    Lv8: '89.67%',
                    Lv9: '96.38%',
                    Lv10: '103.7%',
                    Lv11: '111.02%',
                    Lv12: '118.34%',
                    Lv13: '125.66%',
                    Lv14: '132.98%',
                    Lv15: '140.3%',
                },
                '2-Hit DMG': {
                    Lv1: '51.6%',
                    Lv2: '55.8%',
                    Lv3: '60%',
                    Lv4: '66%',
                    Lv5: '70.2%',
                    Lv6: '75%',
                    Lv7: '81.6%',
                    Lv8: '88.2%',
                    Lv9: '94.8%',
                    Lv10: '102%',
                    Lv11: '109.2%',
                    Lv12: '116.4%',
                    Lv13: '123.6%',
                    Lv14: '130.8%',
                    Lv15: '138%',
                },
                '3-Hit DMG': {
                    Lv1: '63.64%',
                    Lv2: '68.82%',
                    Lv3: '74.00%',
                    Lv4: '81.40%',
                    Lv5: '86.58%',
                    Lv6: '92.50%',
                    Lv7: '100.64%',
                    Lv8: '108.78%',
                    Lv9: '116.92%',
                    Lv10: '125.80%',
                    Lv11: '134.68%',
                    Lv12: '143.56%',
                    Lv13: '152.44%',
                    Lv14: '161.32%',
                    Lv15: '170.20%',
                },
                '4-Hit DMG': {
                    Lv1: '69.66%',
                    Lv2: '75.33%',
                    Lv3: '81%',
                    Lv4: '89.1%',
                    Lv5: '94.77%',
                    Lv6: '101.25%',
                    Lv7: '110.16%',
                    Lv8: '119.07%',
                    Lv9: '127.98%',
                    Lv10: '137.7%',
                    Lv11: '147.42%',
                    Lv12: '157.14%',
                    Lv13: '166.86%',
                    Lv14: '176.58%',
                    Lv15: '186.3%',
                },
                '5-Hit DMG': {
                    Lv1: '84.62%',
                    Lv2: '91.51%',
                    Lv3: '98.40%',
                    Lv4: '108.24%',
                    Lv5: '115.13%',
                    Lv6: '123.00%',
                    Lv7: '133.82%',
                    Lv8: '144.65%',
                    Lv9: '155.47%',
                    Lv10: '167.28%',
                    Lv11: '179.09%',
                    Lv12: '190.90%',
                    Lv13: '202.70%',
                    Lv14: '214.51%',
                    Lv15: '226.32%',
                },
                'Charged Attack DMG': {
                    Lv1: '136.74%',
                    Lv2: '147.87%',
                    Lv3: '159%',
                    Lv4: '174.9%',
                    Lv5: '186.03%',
                    Lv6: '198.75%',
                    Lv7: '216.24%',
                    Lv8: '233.73%',
                    Lv9: '251.22%',
                    Lv10: '270.3%',
                    Lv11: '289.38%',
                    Lv12: '308.46%',
                    Lv13: '327.54%',
                    Lv14: '346.62%',
                    Lv15: '365.7%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '25',
                    Lv2: '25',
                    Lv3: '25',
                    Lv4: '25',
                    Lv5: '25',
                    Lv6: '25',
                    Lv7: '25',
                    Lv8: '25',
                    Lv9: '25',
                    Lv10: '25',
                    Lv11: '25',
                    Lv12: '25',
                    Lv13: '25',
                    Lv14: '25',
                    Lv15: '25',
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
            name: 'Ravaging Confession',
            image: '/images/characters/Skill_S_Rosaria_01.png',
            description:
                'Rosaria swiftly shifts her position to appear behind her opponent, then stabs and slashes them with her polearm, dealing\nCryo DMG\n.\nThis ability cannot be used to travel behind opponents of a larger build.\nThose who confess to Sister Rosaria will be granted no absolution. All sinners shall be met with the piercing cold of punishment proportionate to the weight of their sins.',
            data: {
                'Skill DMG': {
                    Lv1: '194.40%',
                    Lv2: '208.98%',
                    Lv3: '223.56%',
                    Lv4: '243.00%',
                    Lv5: '257.58%',
                    Lv6: '272.16%',
                    Lv7: '291.60%',
                    Lv8: '311.04%',
                    Lv9: '330.48%',
                    Lv10: '349.92%',
                    Lv11: '369.36%',
                    Lv12: '388.80%',
                    Lv13: '413.10%',
                    Lv14: '437.40%',
                    Lv15: '461.70%',
                },
                CD: {
                    Lv1: '6s',
                    Lv2: '6s',
                    Lv3: '6s',
                    Lv4: '6s',
                    Lv5: '6s',
                    Lv6: '6s',
                    Lv7: '6s',
                    Lv8: '6s',
                    Lv9: '6s',
                    Lv10: '6s',
                    Lv11: '6s',
                    Lv12: '6s',
                    Lv13: '6s',
                    Lv14: '6s',
                    Lv15: '6s',
                },
            },
        },
        {
            name: 'Rites of Termination',
            image: '/images/characters/Skill_E_Rosaria_01.png',
            description:
                "Rosaria's unique take on this prayer ritual: First, she swings her weapon to slash surrounding opponents; then, she summons a frigid Ice Lance that strikes the ground. Both actions deal\nCryo DMG\n.\nWhile active, the Ice Lance periodically releases a blast of cold air, dealing\nCryo DMG\nto surrounding opponents.\nJudgment is such a tedious ordeal \u2014 much easier to skip that phase and get straight to the last rites. Rosaria was never very devoted to the Anemo God anyway, which makes performing them all too easy.",
            data: {
                'Skill DMG': {
                    Lv1: '256.00%',
                    Lv2: '275.20%',
                    Lv3: '294.40%',
                    Lv4: '320.00%',
                    Lv5: '339.20%',
                    Lv6: '358.40%',
                    Lv7: '384.00%',
                    Lv8: '409.60%',
                    Lv9: '435.20%',
                    Lv10: '460.80%',
                    Lv11: '486.40%',
                    Lv12: '512.00%',
                    Lv13: '544.00%',
                    Lv14: '576.00%',
                    Lv15: '608.00%',
                },
                'Ice Lance DoT': {
                    Lv1: '132%',
                    Lv2: '141.9%',
                    Lv3: '151.8%',
                    Lv4: '165%',
                    Lv5: '174.9%',
                    Lv6: '184.8%',
                    Lv7: '198%',
                    Lv8: '211.2%',
                    Lv9: '224.4%',
                    Lv10: '237.6%',
                    Lv11: '250.8%',
                    Lv12: '264%',
                    Lv13: '280.5%',
                    Lv14: '297%',
                    Lv15: '313.5%',
                },
                Duration: {
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
            name: 'Night Walk',
            image: '/images/characters/UI_Talent_Rosaria_NightRunner.png',
            description:
                'At night (18:00 \u2013 06:00), your party members gain the Swift Stride effect: Movement SPD increased by 10%.\nDoes not take effect in Domains, Trounce Domains, or Spiral Abyss. Swift Stride does not stack.',
        },
        {
            name: 'Regina Probationum',
            image: '/images/characters/UI_Talent_S_Rosaria_05.png',
            description:
                "When Rosaria strikes an opponent from behind using\nRavaging Confession\n, Rosaria's CRIT Rate increases by 12% for 5s.",
        },
        {
            name: 'Shadow Samaritan',
            image: '/images/characters/UI_Talent_S_Rosaria_06.png',
            description:
                "Casting\nRites of Termination\nincreases CRIT Rate of all nearby party members (except Rosaria herself) by 15% of Rosaria's CRIT Rate for 10s.\nCRIT Rate Bonus gained this way cannot exceed 15%.",
        },
    ],
    constellations: [
        {
            name: 'Unholy Revelation',
            image: '/images/characters/UI_Talent_S_Rosaria_01.png',
            description:
                'When Rosaria deals a CRIT Hit, her ATK SPD increases by 10% and her Normal Attack DMG increases by 10% for 4s.',
            level: 1,
        },
        {
            name: 'Land Without Promise',
            image: '/images/characters/UI_Talent_S_Rosaria_02.png',
            description:
                'The duration of the Ice Lance created by\nRites of Termination\nis increased by 4s.',
            level: 2,
        },
        {
            name: 'The Wages of Sin',
            image: '/images/characters/UI_Talent_U_Rosaria_01.png',
            description:
                'Increases the Level of\nRavaging Confession\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Painful Grace',
            image: '/images/characters/UI_Talent_S_Rosaria_03.png',
            description:
                "Ravaging Confession\n's CRIT Hits regenerate 5 Energy for Rosaria.\nCan only be triggered once each time Ravaging Confession is cast.",
            level: 4,
        },
        {
            name: 'Last Rites',
            image: '/images/characters/UI_Talent_U_Rosaria_02.png',
            description:
                'Increases the Level of\nRites of Termination\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Divine Retribution',
            image: '/images/characters/UI_Talent_S_Rosaria_04.png',
            description:
                "Rites of Termination\n's attack decreases opponents' Physical RES by 20% for 10s.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Rosaria
