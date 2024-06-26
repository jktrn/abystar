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

const TravelerHydro: Character = {
    name: 'Traveler (Hydro)',
    icon: '/images/characters/traveler.png',
    weapon: 'Sword',
    vision: 'Hydro',
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
            name: 'Normal Attack: Foreign Stream',
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
            name: 'Aquacrest Saber',
            image: '/images/characters/Skill_S_PlayerWater_01.png',
            description:
                "Unleashes a torrent that can cleanse the world.\nPress\nSends a Torrent Surge forward that will deal\nHydro DMG\nto opponents it comes into contact with.\nHold\nEnter Aiming Mode and constantly fire off Dewdrops in the direction in which you are aiming, dealing\nHydro DMG\nto opponents they hit.\nWhen the skill ends, it will send a Torrent Surge forward that will deal\nHydro DMG\nto opponents it comes into contact with.\nSuffusion: When using the Hold configuration of this skill, if the Traveler's HP is higher than 50%, the DMG dealt by Dewdrops will increase based on the Traveler's Max HP, and the Traveler will lose a fixed amount of HP every second.\nArkhe: Pneuma\nAt certain intervals, after using Torrent Surge, this skill will unleash a Spiritbreath Thorn that pierces opponents, dealing Pneuma-aligned\nHydro DMG\n.\nYou studied the ripples in the water with Paimon.",
            data: {
                'Torrent Surge DMG': {
                    Lv1: '189.28%',
                    Lv2: '203.48%',
                    Lv3: '217.67%',
                    Lv4: '236.6%',
                    Lv5: '250.8%',
                    Lv6: '264.99%',
                    Lv7: '283.92%',
                    Lv8: '302.85%',
                    Lv9: '321.78%',
                    Lv10: '340.7%',
                    Lv11: '359.63%',
                    Lv12: '378.56%',
                    Lv13: '402.22%',
                    Lv14: '425.88%',
                    Lv15: '449.54%',
                },
                'Dewdrop DMG': {
                    Lv1: '32.8%',
                    Lv2: '35.26%',
                    Lv3: '37.72%',
                    Lv4: '41%',
                    Lv5: '43.46%',
                    Lv6: '45.92%',
                    Lv7: '49.2%',
                    Lv8: '52.48%',
                    Lv9: '55.76%',
                    Lv10: '59.04%',
                    Lv11: '62.32%',
                    Lv12: '65.6%',
                    Lv13: '69.7%',
                    Lv14: '73.8%',
                    Lv15: '77.9%',
                },
                'Spiritbreath Thorn DMG': {
                    Lv1: '32.8%',
                    Lv2: '35.26%',
                    Lv3: '37.72%',
                    Lv4: '41%',
                    Lv5: '43.46%',
                    Lv6: '45.92%',
                    Lv7: '49.2%',
                    Lv8: '52.48%',
                    Lv9: '55.76%',
                    Lv10: '59.04%',
                    Lv11: '62.32%',
                    Lv12: '65.6%',
                    Lv13: '69.7%',
                    Lv14: '73.8%',
                    Lv15: '77.9%',
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
                'Suffusion HP Cost': {
                    Lv1: '4% Max HP',
                    Lv2: '4% Max HP',
                    Lv3: '4% Max HP',
                    Lv4: '4% Max HP',
                    Lv5: '4% Max HP',
                    Lv6: '4% Max HP',
                    Lv7: '4% Max HP',
                    Lv8: '4% Max HP',
                    Lv9: '4% Max HP',
                    Lv10: '4% Max HP',
                    Lv11: '4% Max HP',
                    Lv12: '4% Max HP',
                    Lv13: '4% Max HP',
                    Lv14: '4% Max HP',
                    Lv15: '4% Max HP',
                },
                'Suffusion DMG Bonus': {
                    Lv1: '0.64% Max HP',
                    Lv2: '0.69% Max HP',
                    Lv3: '0.74% Max HP',
                    Lv4: '0.8% Max HP',
                    Lv5: '0.85% Max HP',
                    Lv6: '0.9% Max HP',
                    Lv7: '0.96% Max HP',
                    Lv8: '1.02% Max HP',
                    Lv9: '1.09% Max HP',
                    Lv10: '1.15% Max HP',
                    Lv11: '1.22% Max HP',
                    Lv12: '1.28% Max HP',
                    Lv13: '1.36% Max HP',
                    Lv14: '1.44% Max HP',
                    Lv15: '1.52% Max HP',
                },
                'Hold Duration': {
                    Lv1: 'Max 6s',
                    Lv2: 'Max 6s',
                    Lv3: 'Max 6s',
                    Lv4: 'Max 6s',
                    Lv5: 'Max 6s',
                    Lv6: 'Max 6s',
                    Lv7: 'Max 6s',
                    Lv8: 'Max 6s',
                    Lv9: 'Max 6s',
                    Lv10: 'Max 6s',
                    Lv11: 'Max 6s',
                    Lv12: 'Max 6s',
                    Lv13: 'Max 6s',
                    Lv14: 'Max 6s',
                    Lv15: 'Max 6s',
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
            name: 'Rising Waters',
            image: '/images/characters/Skill_E_PlayerWater_01.png',
            description:
                'Unleashes a slow-moving floating bubble that deals continuous\nHydro DMG\nto nearby opponents.\nYou studied the ebb and flow of the tides with Paimon.',
            data: {
                'Skill DMG': {
                    Lv1: '101.87%',
                    Lv2: '109.51%',
                    Lv3: '117.15%',
                    Lv4: '127.33%',
                    Lv5: '134.97%',
                    Lv6: '142.61%',
                    Lv7: '152.8%',
                    Lv8: '162.99%',
                    Lv9: '173.17%',
                    Lv10: '183.36%',
                    Lv11: '193.55%',
                    Lv12: '203.73%',
                    Lv13: '216.47%',
                    Lv14: '229.2%',
                    Lv15: '241.93%',
                },
                Duration: {
                    Lv1: '4s',
                    Lv2: '4s',
                    Lv3: '4s',
                    Lv4: '4s',
                    Lv5: '4s',
                    Lv6: '4s',
                    Lv7: '4s',
                    Lv8: '4s',
                    Lv9: '4s',
                    Lv10: '4s',
                    Lv11: '4s',
                    Lv12: '4s',
                    Lv13: '4s',
                    Lv14: '4s',
                    Lv15: '4s',
                },
                CD: {
                    Lv1: '20s',
                    Lv2: '20s',
                    Lv3: '20s',
                    Lv4: '20s',
                    Lv5: '20s',
                    Lv6: '20s',
                    Lv7: '20s',
                    Lv8: '20s',
                    Lv9: '20s',
                    Lv10: '20s',
                    Lv11: '20s',
                    Lv12: '20s',
                    Lv13: '20s',
                    Lv14: '20s',
                    Lv15: '20s',
                },
                'Energy Cost': {
                    Lv1: '80',
                    Lv2: '80',
                    Lv3: '80',
                    Lv4: '80',
                    Lv5: '80',
                    Lv6: '80',
                    Lv7: '80',
                    Lv8: '80',
                    Lv9: '80',
                    Lv10: '80',
                    Lv11: '80',
                    Lv12: '80',
                    Lv13: '80',
                    Lv14: '80',
                    Lv15: '80',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Spotless Waters',
            image: '/images/characters/UI_Talent_S_PlayerWater_05.png',
            description:
                'After the Dewdrop fired by the Hold Mode of the\nAquacrest Saber\nhits an opponent, a Sourcewater Droplet will be generated near to the Traveler. If the Traveler picks it up, they will restore 7% HP.\n1 Droplet can be created this way every second, and each use of Aquacrest Saber can create 4 Droplets at most.',
        },
        {
            name: 'Clear Waters',
            image: '/images/characters/UI_Talent_S_PlayerWater_06.png',
            description:
                "If HP has been consumed via Suffusion while using the Hold Mode\nAquacrest Saber\n, the Torrent Surge at the skill's end will deal Bonus DMG equal to 45% of the total HP the Traveler has consumed in this skill use via Suffusion.\nThe maximum DMG Bonus that can be gained this way is 5,000.",
        },
    ],
    constellations: [
        {
            name: 'Swelling Lake',
            image: '/images/characters/UI_Talent_S_PlayerWater_01.png',
            description:
                'Picking up a Sourcewater Droplet will restore 2 Energy to the Traveler.\nRequires the Passive Talent "Spotless Waters."',
            level: 1,
        },
        {
            name: 'Trickling Purity',
            image: '/images/characters/UI_Talent_S_PlayerWater_02.png',
            description:
                "The Movement SPD of\nRising Waters\n' bubble will be decreased by 30%, and its duration increased by 3s.",
            level: 2,
        },
        {
            name: 'Turbulent Ripples',
            image: '/images/characters/UI_Talent_U_PlayerWater_01.png',
            description:
                'Increases the Level of\nAquacrest Saber\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Pouring Descent',
            image: '/images/characters/UI_Talent_S_PlayerWater_03.png',
            description:
                "When using\nAquacrest Saber\n, an Aquacrest Aegis that can absorb 10% of the Traveler's Max HP in DMG will be created and will absorb\nHydro DMG\nwith 250% effectiveness. It will persist until the Traveler finishes using the skill.\nOnce every 2s, after a Dewdrop hits an opponent, if the Traveler is being protected by Aquacrest Aegis, the DMG Absorption of the Aegis will be restored to 10% of the Traveler's Max HP. If the Traveler is not presently being protected by an Aegis, one will be redeployed.",
            level: 4,
        },
        {
            name: 'Churning Whirlpool',
            image: '/images/characters/UI_Talent_U_PlayerWater_02.png',
            description:
                'Increases the Level of\nRising Waters\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Tides of Justice',
            image: '/images/characters/UI_Talent_S_PlayerWater_04.png',
            description:
                "When the Traveler picks up a Sourcewater Droplet, they will restore HP to a nearby party member with the lowest remaining HP percentage based on 6% of said member's Max HP.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default TravelerHydro
