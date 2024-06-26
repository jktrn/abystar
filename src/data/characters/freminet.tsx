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

const Freminet: Character = {
    name: 'Freminet',
    icon: '/images/characters/UI_AvatarIcon_Freminet.png',
    weapon: 'Claymore',
    vision: 'Cryo',
    rarity: 4,
    description:
        'A reserved young man who is well-versed in diving. Beneath his distant, icy demeanor lies a pure heart bereft of all flaws.',
    occupation: "Hotel Bouffes d'ete",
    baseStats: {
        '1/20': {
            'Base HP': 1012.0,
            'Base ATK': 21.37,
            'Base DEF': 59.4,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/20': {
            'Base HP': 2600.0,
            'Base ATK': 54.9,
            'Base DEF': 152.6,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/40': {
            'Base HP': 3356.0,
            'Base ATK': 70.86,
            'Base DEF': 196.97,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/40': {
            'Base HP': 5027.0,
            'Base ATK': 106.14,
            'Base DEF': 295.04,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/50': {
            'Base HP': 5564.0,
            'Base ATK': 117.49,
            'Base DEF': 326.57,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/50': {
            'Base HP': 6400.0,
            'Base ATK': 135.14,
            'Base DEF': 375.63,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/60': {
            'Base HP': 7117.0,
            'Base ATK': 150.26,
            'Base DEF': 417.67,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/60': {
            'Base HP': 7953.0,
            'Base ATK': 167.91,
            'Base DEF': 466.74,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/70': {
            'Base HP': 8490.0,
            'Base ATK': 179.26,
            'Base DEF': 498.27,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/70': {
            'Base HP': 9325.0,
            'Base ATK': 196.89,
            'Base DEF': 547.27,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/80': {
            'Base HP': 9862.0,
            'Base ATK': 208.23,
            'Base DEF': 578.8,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/80': {
            'Base HP': 10698.0,
            'Base ATK': 225.88,
            'Base DEF': 627.86,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/90': {
            'Base HP': 11235.0,
            'Base ATK': 237.23,
            'Base DEF': 659.39,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
        '90/90': {
            'Base HP': 12071.0,
            'Base ATK': 254.88,
            'Base DEF': 708.46,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Flowing Eddies',
            image: '/images/characters/Skill_A_04.png',
            description:
                'Normal Attack\nPerforms up to 4 consecutive strikes.\nCharged Attack\nDrains Stamina over time to perform continuous spinning attacks against all nearby opponents.\nAt the end of the sequence, performs a more powerful slash.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '84.24%',
                    Lv2: '91.09%',
                    Lv3: '97.95%',
                    Lv4: '107.75%',
                    Lv5: '114.6%',
                    Lv6: '122.44%',
                    Lv7: '133.21%',
                    Lv8: '143.99%',
                    Lv9: '154.76%',
                    Lv10: '166.52%',
                    Lv11: '178.27%',
                    Lv12: '190.02%',
                    Lv13: '201.78%',
                    Lv14: '213.53%',
                    Lv15: '225.29%',
                },
                '2-Hit DMG': {
                    Lv1: '80.68%',
                    Lv2: '87.24%',
                    Lv3: '93.81%',
                    Lv4: '103.19%',
                    Lv5: '109.76%',
                    Lv6: '117.26%',
                    Lv7: '127.58%',
                    Lv8: '137.9%',
                    Lv9: '148.22%',
                    Lv10: '159.48%',
                    Lv11: '170.73%',
                    Lv12: '181.99%',
                    Lv13: '193.25%',
                    Lv14: '204.5%',
                    Lv15: '215.76%',
                },
                '3-Hit DMG': {
                    Lv1: '101.9%',
                    Lv2: '110.2%',
                    Lv3: '118.49%',
                    Lv4: '130.34%',
                    Lv5: '138.64%',
                    Lv6: '148.12%',
                    Lv7: '161.15%',
                    Lv8: '174.18%',
                    Lv9: '187.22%',
                    Lv10: '201.44%',
                    Lv11: '215.66%',
                    Lv12: '229.88%',
                    Lv13: '244.1%',
                    Lv14: '258.31%',
                    Lv15: '272.53%',
                },
                '4-Hit DMG': {
                    Lv1: '123.8%',
                    Lv2: '133.88%',
                    Lv3: '143.96%',
                    Lv4: '158.35%',
                    Lv5: '168.43%',
                    Lv6: '179.95%',
                    Lv7: '195.78%',
                    Lv8: '211.62%',
                    Lv9: '227.46%',
                    Lv10: '244.73%',
                    Lv11: '262.01%',
                    Lv12: '279.28%',
                    Lv13: '296.56%',
                    Lv14: '313.83%',
                    Lv15: '331.11%',
                },
                'Charged Attack Cyclic DMG': {
                    Lv1: '62.52%',
                    Lv2: '67.61%',
                    Lv3: '72.7%',
                    Lv4: '79.97%',
                    Lv5: '85.06%',
                    Lv6: '90.88%',
                    Lv7: '98.87%',
                    Lv8: '106.87%',
                    Lv9: '114.87%',
                    Lv10: '123.59%',
                    Lv11: '132.31%',
                    Lv12: '141.04%',
                    Lv13: '149.76%',
                    Lv14: '158.49%',
                    Lv15: '167.21%',
                },
                'Charged Attack Final DMG': {
                    Lv1: '113.09%',
                    Lv2: '122.3%',
                    Lv3: '131.5%',
                    Lv4: '144.65%',
                    Lv5: '153.86%',
                    Lv6: '164.38%',
                    Lv7: '178.84%',
                    Lv8: '193.31%',
                    Lv9: '207.77%',
                    Lv10: '223.55%',
                    Lv11: '239.33%',
                    Lv12: '255.11%',
                    Lv13: '270.89%',
                    Lv14: '286.67%',
                    Lv15: '302.45%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '40 / s',
                    Lv2: '40 / s',
                    Lv3: '40 / s',
                    Lv4: '40 / s',
                    Lv5: '40 / s',
                    Lv6: '40 / s',
                    Lv7: '40 / s',
                    Lv8: '40 / s',
                    Lv9: '40 / s',
                    Lv10: '40 / s',
                    Lv11: '40 / s',
                    Lv12: '40 / s',
                    Lv13: '40 / s',
                    Lv14: '40 / s',
                    Lv15: '40 / s',
                },
                'Max Duration': {
                    Lv1: '5s',
                    Lv2: '5s',
                    Lv3: '5s',
                    Lv4: '5s',
                    Lv5: '5s',
                    Lv6: '5s',
                    Lv7: '5s',
                    Lv8: '5s',
                    Lv9: '5s',
                    Lv10: '5s',
                    Lv11: '5s',
                    Lv12: '5s',
                    Lv13: '5s',
                    Lv14: '5s',
                    Lv15: '5s',
                },
                'Plunge DMG': {
                    Lv1: '74.59%',
                    Lv2: '80.66%',
                    Lv3: '86.73%',
                    Lv4: '95.4%',
                    Lv5: '101.47%',
                    Lv6: '108.41%',
                    Lv7: '117.95%',
                    Lv8: '127.49%',
                    Lv9: '137.03%',
                    Lv10: '147.44%',
                    Lv11: '157.85%',
                    Lv12: '168.26%',
                    Lv13: '178.66%',
                    Lv14: '189.07%',
                    Lv15: '199.48%',
                },
                'Low Plunge DMG': {
                    Lv1: '149.14%',
                    Lv2: '161.28%',
                    Lv3: '173.42%',
                    Lv4: '190.77%',
                    Lv5: '202.91%',
                    Lv6: '216.78%',
                    Lv7: '235.86%',
                    Lv8: '254.93%',
                    Lv9: '274.01%',
                    Lv10: '294.82%',
                    Lv11: '315.63%',
                    Lv12: '336.44%',
                    Lv13: '357.25%',
                    Lv14: '378.06%',
                    Lv15: '398.87%',
                },
                'High Plunge DMG': {
                    Lv1: '186.29%',
                    Lv2: '201.45%',
                    Lv3: '216.62%',
                    Lv4: '238.28%',
                    Lv5: '253.44%',
                    Lv6: '270.77%',
                    Lv7: '294.6%',
                    Lv8: '318.42%',
                    Lv9: '342.25%',
                    Lv10: '368.25%',
                    Lv11: '394.24%',
                    Lv12: '420.23%',
                    Lv13: '446.23%',
                    Lv14: '472.22%',
                    Lv15: '498.21%',
                },
            },
        },
        {
            name: 'Pressurized Floe',
            image: '/images/characters/Skill_S_Freminet_01.png',
            description:
                'Performs an upward thrust that deals\nCryo DMG\nand causes Freminet to enter Pers Timer for 10s.\nWhile Pers Timer is active, his Elemental Skill will turn into Shattering Pressure.\nShattering Pressure\nExecutes different sorts of attacks based on the Pressure Level of Pers Timer, and then cancels Pers Timer.\n\u00b7Level 0: Unleashes a vertical cut, dealing\nCryo DMG\n.\n\u00b7Levels 1 to 3: Unleashes a vertical cut alongside Pers, dealing\nCryo DMG\nand Physical DMG. DMG dealt scales based on Pressure Level.\n\u00b7Level 4: Borrows the power of a fully-pressurized Pers to deal Physical DMG. Meanwhile, Normal Attack: Flowing Eddies will be replaced by Shattering Pressure.\nPers Timer\nWhen Freminet uses Normal Attacks, he will also unleash waves of frost that deal\nCryo DMG\nand increase Pers\'s Pressure Level.\nThe accompanying\nCryo DMG\ndealt this way is considered Elemental Skill DMG.\nArkhe: Pneuma\nAt certain intervals, after using the upward thrust, a Spiritbreath Thorn in the form of another upward thrust will be created, dealing Pneuma-aligned\nCryo DMG\n.\nTo immobilize one\'s opponent without taking their life can also be considered something of a "survival" strategy that one may choose.\n"Pers... I leave the rest to you."',
            data: {
                'Upward Thrust DMG': {
                    Lv1: '83.04%',
                    Lv2: '89.27%',
                    Lv3: '95.5%',
                    Lv4: '103.8%',
                    Lv5: '110.03%',
                    Lv6: '116.26%',
                    Lv7: '124.56%',
                    Lv8: '132.86%',
                    Lv9: '141.17%',
                    Lv10: '149.47%',
                    Lv11: '157.78%',
                    Lv12: '166.08%',
                    Lv13: '176.46%',
                    Lv14: '186.84%',
                    Lv15: '197.22%',
                },
                'Frost DMG': {
                    Lv1: '7.16%',
                    Lv2: '7.7%',
                    Lv3: '8.23%',
                    Lv4: '8.95%',
                    Lv5: '9.49%',
                    Lv6: '10.02%',
                    Lv7: '10.74%',
                    Lv8: '11.46%',
                    Lv9: '12.17%',
                    Lv10: '12.89%',
                    Lv11: '13.6%',
                    Lv12: '14.32%',
                    Lv13: '15.22%',
                    Lv14: '16.11%',
                    Lv15: '17.01%',
                },
                'Level 0 Shattering Pressure DMG': {
                    Lv1: '200.48%',
                    Lv2: '215.52%',
                    Lv3: '230.55%',
                    Lv4: '250.6%',
                    Lv5: '265.64%',
                    Lv6: '280.67%',
                    Lv7: '300.72%',
                    Lv8: '320.77%',
                    Lv9: '340.82%',
                    Lv10: '360.86%',
                    Lv11: '380.91%',
                    Lv12: '400.96%',
                    Lv13: '426.02%',
                    Lv14: '451.08%',
                    Lv15: '476.14%',
                },
                'Level 1 Shattering Pressure DMG': {
                    Lv1: '100.24% Cryo + 48.69% Physical',
                    Lv2: '107.76% Cryo + 52.34% Physical',
                    Lv3: '115.28% Cryo + 55.99% Physical',
                    Lv4: '125.3% Cryo + 60.86% Physical',
                    Lv5: '132.82% Cryo + 64.51% Physical',
                    Lv6: '140.34% Cryo + 68.16% Physical',
                    Lv7: '150.36% Cryo + 73.03% Physical',
                    Lv8: '160.38% Cryo + 77.9% Physical',
                    Lv9: '170.41% Cryo + 82.77% Physical',
                    Lv10: '180.43% Cryo + 87.64% Physical',
                    Lv11: '190.46% Cryo + 92.51% Physical',
                    Lv12: '200.48% Cryo + 97.38% Physical',
                    Lv13: '213.01% Cryo + 103.46% Physical',
                    Lv14: '225.54% Cryo + 109.55% Physical',
                    Lv15: '238.07% Cryo + 115.63% Physical',
                },
                'Level 2 Shattering Pressure DMG': {
                    Lv1: '70.17% Cryo + 85.2% Physical',
                    Lv2: '75.43% Cryo + 91.59% Physical',
                    Lv3: '80.69% Cryo + 97.98% Physical',
                    Lv4: '87.71% Cryo + 106.51% Physical',
                    Lv5: '92.97% Cryo + 112.9% Physical',
                    Lv6: '98.24% Cryo + 119.29% Physical',
                    Lv7: '105.25% Cryo + 127.81% Physical',
                    Lv8: '112.27% Cryo + 136.33% Physical',
                    Lv9: '119.29% Cryo + 144.85% Physical',
                    Lv10: '126.3% Cryo + 153.37% Physical',
                    Lv11: '133.32% Cryo + 161.89% Physical',
                    Lv12: '140.34% Cryo + 170.41% Physical',
                    Lv13: '149.11% Cryo + 181.06% Physical',
                    Lv14: '157.88% Cryo + 191.71% Physical',
                    Lv15: '166.65% Cryo + 202.36% Physical',
                },
                'Level 3 Shattering Pressure DMG': {
                    Lv1: '40.1% Cryo + 121.72% Physical',
                    Lv2: '43.1% Cryo + 130.85% Physical',
                    Lv3: '46.11% Cryo + 139.98% Physical',
                    Lv4: '50.12% Cryo + 152.15% Physical',
                    Lv5: '53.13% Cryo + 161.28% Physical',
                    Lv6: '56.13% Cryo + 170.41% Physical',
                    Lv7: '60.14% Cryo + 182.58% Physical',
                    Lv8: '64.15% Cryo + 194.75% Physical',
                    Lv9: '68.16% Cryo + 206.92% Physical',
                    Lv10: '72.17% Cryo + 219.1% Physical',
                    Lv11: '76.18% Cryo + 231.27% Physical',
                    Lv12: '80.19% Cryo + 243.44% Physical',
                    Lv13: '85.2% Cryo + 258.66% Physical',
                    Lv14: '90.22% Cryo + 273.87% Physical',
                    Lv15: '95.23% Cryo + 289.09% Physical',
                },
                'Level 4 Shattering Pressure DMG': {
                    Lv1: '243.44%',
                    Lv2: '261.7%',
                    Lv3: '279.96%',
                    Lv4: '304.3%',
                    Lv5: '322.56%',
                    Lv6: '340.82%',
                    Lv7: '365.16%',
                    Lv8: '389.5%',
                    Lv9: '413.85%',
                    Lv10: '438.19%',
                    Lv11: '462.54%',
                    Lv12: '486.88%',
                    Lv13: '517.31%',
                    Lv14: '547.74%',
                    Lv15: '578.17%',
                },
                'Spiritbreath Thorn DMG': {
                    Lv1: '14.4%',
                    Lv2: '15.48%',
                    Lv3: '16.56%',
                    Lv4: '18%',
                    Lv5: '19.08%',
                    Lv6: '20.16%',
                    Lv7: '21.6%',
                    Lv8: '23.04%',
                    Lv9: '24.48%',
                    Lv10: '25.92%',
                    Lv11: '27.36%',
                    Lv12: '28.8%',
                    Lv13: '30.6%',
                    Lv14: '32.4%',
                    Lv15: '34.2%',
                },
                'Spiritbreath Thorn Interval': {
                    Lv1: '9s',
                    Lv2: '9s',
                    Lv3: '9s',
                    Lv4: '9s',
                    Lv5: '9s',
                    Lv6: '9s',
                    Lv7: '9s',
                    Lv8: '9s',
                    Lv9: '9s',
                    Lv10: '9s',
                    Lv11: '9s',
                    Lv12: '9s',
                    Lv13: '9s',
                    Lv14: '9s',
                    Lv15: '9s',
                },
                CD: {
                    Lv1: '10s',
                    Lv2: '10s',
                    Lv3: '10s',
                    Lv4: '10s',
                    Lv5: '10s',
                    Lv6: '10s',
                    Lv7: '10s',
                    Lv8: '10s',
                    Lv9: '10s',
                    Lv10: '10s',
                    Lv11: '10s',
                    Lv12: '10s',
                    Lv13: '10s',
                    Lv14: '10s',
                    Lv15: '10s',
                },
            },
        },
        {
            name: "Shadowhunter's Ambush",
            image: '/images/characters/Skill_E_Freminet_01.png',
            description:
                'Unleashes a wave of untouchable cold, dealing\nAoE Cryo DMG\n, resetting the CD of the Elemental Skill "Pressurized Floe," and causing Freminet to enter the Subnautical Hunter mode for 10s.\nWhile in Subnautical Hunter mode, Freminet\'s resistance to interruption will increase, and his Elemental Skill "Pressurized Floe" will obtain the following buffs:\n\u00b7CD is decreased by 70%.\n\u00b7Normal Attacks will increase the Pers Timer by 1 additional Pressure Level, and the frost released by his Normal Attacks deal 200% of their original DMG.\nThese effects will be canceled when Freminet leaves the field.\n"Now... I have no need of any extraneous noise."',
            data: {
                'Skill DMG': {
                    Lv1: '318.4%',
                    Lv2: '342.28%',
                    Lv3: '366.16%',
                    Lv4: '398%',
                    Lv5: '421.88%',
                    Lv6: '445.76%',
                    Lv7: '477.6%',
                    Lv8: '509.44%',
                    Lv9: '541.28%',
                    Lv10: '573.12%',
                    Lv11: '604.96%',
                    Lv12: '636.8%',
                    Lv13: '676.6%',
                    Lv14: '716.4%',
                    Lv15: '756.2%',
                },
                Duration: {
                    Lv1: '10s',
                    Lv2: '10s',
                    Lv3: '10s',
                    Lv4: '10s',
                    Lv5: '10s',
                    Lv6: '10s',
                    Lv7: '10s',
                    Lv8: '10s',
                    Lv9: '10s',
                    Lv10: '10s',
                    Lv11: '10s',
                    Lv12: '10s',
                    Lv13: '10s',
                    Lv14: '10s',
                    Lv15: '10s',
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
            name: 'Deepwater Navigation',
            image: '/images/characters/UI_Talent_S_Freminet_07.png',
            description:
                'Decreases Aquatic Stamina consumption for your own party members by 35%.\nNot stackable with Passive Talents that provide the exact same effects.',
        },
        {
            name: 'Saturation Deep Dive',
            image: '/images/characters/UI_Talent_S_Freminet_05.png',
            description:
                'When Freminet unleashes\nPressurized Floe: Shattering Pressure\n, if Pers Timer has yet to reach Pressure Level 4, the CD of Pressurized Floe will be decreased by 1s.',
        },
        {
            name: 'Parallel Condensers',
            image: '/images/characters/UI_Talent_S_Freminet_06.png',
            description:
                'When Freminet triggers Shatter against opponents, the DMG dealt by\nPressurized Floe: Shattering Pressure\nwill be increased by 40% for 5s.',
        },
    ],
    constellations: [
        {
            name: 'Dreams of the Foamy Deep',
            image: '/images/characters/UI_Talent_S_Freminet_01.png',
            description:
                'The CRIT Rate of\nPressurized Floe: Shattering Pressure\nwill be increased by 15%.',
            level: 1,
        },
        {
            name: 'Penguins and the Land of Plenty',
            image: '/images/characters/UI_Talent_S_Freminet_02.png',
            description:
                'Unleashing\nPressurized Floe: Shattering Pressure\nwill restore 2 Energy to Freminet. If a Pressure Level 4 Shattering Pressure is unleashed, this will restore 3 Energy.',
            level: 2,
        },
        {
            name: 'Song of the Eddies and Bleached Sands',
            image: '/images/characters/UI_Talent_U_Freminet_01.png',
            description:
                'Increases the Level of\nNormal Attack: Flowing Eddies\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Dance of the Snowy Moon and Flute',
            image: '/images/characters/UI_Talent_S_Freminet_03.png',
            description:
                'After Freminet triggers Frozen, Shatter, or Superconduct against opponents, his ATK will be increased by 9% for 6s. Max 2 stacks. This can be triggered once every 0.3s.',
            level: 4,
        },
        {
            name: 'Nights of Hearth and Happiness',
            image: '/images/characters/UI_Talent_U_Freminet_02.png',
            description:
                'Increases the Level of\nPressurized Floe\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Moment of Waking and Resolve',
            image: '/images/characters/UI_Talent_S_Freminet_04.png',
            description:
                'After Freminet triggers Frozen, Shatter, or Superconduct against opponents, his CRIT DMG will be increased by 12% for 6s. Max 3 stacks. This can be triggered once every 0.3s.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Freminet
