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

const Razor: Character = {
    name: 'Razor',
    icon: '/images/characters/UI_AvatarIcon_Razor.png',
    weapon: 'Claymore',
    vision: 'Electro',
    rarity: 4,
    description:
        'A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.',
    occupation: 'Wolvendom',
    baseStats: {
        '1/20': {
            'Base HP': 1003.0,
            'Base ATK': 19.59,
            'Base DEF': 62.95,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.0,
        },
        '20/20': {
            'Base HP': 2577.0,
            'Base ATK': 50.32,
            'Base DEF': 161.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.0,
        },
        '20/40': {
            'Base HP': 3326.0,
            'Base ATK': 64.96,
            'Base DEF': 208.74,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.0,
        },
        '40/40': {
            'Base HP': 4982.0,
            'Base ATK': 97.3,
            'Base DEF': 312.66,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.0,
        },
        '40/50': {
            'Base HP': 5514.0,
            'Base ATK': 107.7,
            'Base DEF': 346.08,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.075,
        },
        '50/50': {
            'Base HP': 6343.0,
            'Base ATK': 123.88,
            'Base DEF': 398.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.075,
        },
        '50/60': {
            'Base HP': 7052.0,
            'Base ATK': 137.74,
            'Base DEF': 442.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.15,
        },
        '60/60': {
            'Base HP': 7881.0,
            'Base ATK': 153.92,
            'Base DEF': 494.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.15,
        },
        '60/70': {
            'Base HP': 8413.0,
            'Base ATK': 164.32,
            'Base DEF': 528.03,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.15,
        },
        '70/70': {
            'Base HP': 9241.0,
            'Base ATK': 180.48,
            'Base DEF': 579.96,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.15,
        },
        '70/80': {
            'Base HP': 9773.0,
            'Base ATK': 190.88,
            'Base DEF': 613.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.225,
        },
        '80/80': {
            'Base HP': 10602.0,
            'Base ATK': 207.06,
            'Base DEF': 665.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.225,
        },
        '80/90': {
            'Base HP': 11134.0,
            'Base ATK': 217.46,
            'Base DEF': 698.78,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.3,
        },
        '90/90': {
            'Base HP': 11962.0,
            'Base ATK': 233.64,
            'Base DEF': 750.77,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Physical DMG Bonus': 0.3,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Steel Fang',
            image: '/images/characters/Skill_A_04.png',
            description:
                'Normal Attack\nPerforms up to 4 consecutive strikes.\nCharged Attack\nDrains Stamina over time to perform continuous spinning attacks against all nearby opponents.\nAt the end of the sequence, performs a more powerful slash.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '95.92%',
                    Lv2: '102.46%',
                    Lv3: '109%',
                    Lv4: '117.72%',
                    Lv5: '124.26%',
                    Lv6: '131.89%',
                    Lv7: '141.7%',
                    Lv8: '151.51%',
                    Lv9: '161.32%',
                    Lv10: '171.13%',
                    Lv11: '180.94%',
                    Lv12: '190.75%',
                    Lv13: '200.56%',
                    Lv14: '210.37%',
                    Lv15: '220.18%',
                },
                '2-Hit DMG': {
                    Lv1: '82.63%',
                    Lv2: '88.27%',
                    Lv3: '93.9%',
                    Lv4: '101.41%',
                    Lv5: '107.05%',
                    Lv6: '113.62%',
                    Lv7: '122.07%',
                    Lv8: '130.52%',
                    Lv9: '138.97%',
                    Lv10: '147.42%',
                    Lv11: '155.87%',
                    Lv12: '164.33%',
                    Lv13: '172.78%',
                    Lv14: '181.23%',
                    Lv15: '189.68%',
                },
                '3-Hit DMG': {
                    Lv1: '103.31%',
                    Lv2: '110.36%',
                    Lv3: '117.4%',
                    Lv4: '126.79%',
                    Lv5: '133.84%',
                    Lv6: '142.05%',
                    Lv7: '152.62%',
                    Lv8: '163.19%',
                    Lv9: '173.75%',
                    Lv10: '184.32%',
                    Lv11: '194.88%',
                    Lv12: '205.45%',
                    Lv13: '216.02%',
                    Lv14: '226.58%',
                    Lv15: '237.15%',
                },
                '4-Hit DMG': {
                    Lv1: '136.05%',
                    Lv2: '145.32%',
                    Lv3: '154.6%',
                    Lv4: '166.97%',
                    Lv5: '176.24%',
                    Lv6: '187.07%',
                    Lv7: '200.98%',
                    Lv8: '214.89%',
                    Lv9: '228.81%',
                    Lv10: '242.72%',
                    Lv11: '256.64%',
                    Lv12: '270.55%',
                    Lv13: '284.46%',
                    Lv14: '298.38%',
                    Lv15: '312.29%',
                },
                'Charged Attack Cyclic DMG': {
                    Lv1: '62.54%',
                    Lv2: '67.63%',
                    Lv3: '72.72%',
                    Lv4: '79.99%',
                    Lv5: '85.08%',
                    Lv6: '90.9%',
                    Lv7: '98.9%',
                    Lv8: '106.9%',
                    Lv9: '114.9%',
                    Lv10: '123.62%',
                    Lv11: '132.35%',
                    Lv12: '141.08%',
                    Lv13: '149.8%',
                    Lv14: '158.53%',
                    Lv15: '167.26%',
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
                    Lv1: '82.05%',
                    Lv2: '88.72%',
                    Lv3: '95.4%',
                    Lv4: '104.94%',
                    Lv5: '111.62%',
                    Lv6: '119.25%',
                    Lv7: '129.75%',
                    Lv8: '140.24%',
                    Lv9: '150.74%',
                    Lv10: '162.19%',
                    Lv11: '173.63%',
                    Lv12: '185.08%',
                    Lv13: '196.53%',
                    Lv14: '207.98%',
                    Lv15: '219.43%',
                },
                'Low Plunge DMG': {
                    Lv1: '164.06%',
                    Lv2: '177.41%',
                    Lv3: '190.77%',
                    Lv4: '209.84%',
                    Lv5: '223.2%',
                    Lv6: '238.46%',
                    Lv7: '259.44%',
                    Lv8: '280.43%',
                    Lv9: '301.41%',
                    Lv10: '324.3%',
                    Lv11: '347.19%',
                    Lv12: '370.09%',
                    Lv13: '392.98%',
                    Lv14: '415.87%',
                    Lv15: '438.76%',
                },
                'High Plunge DMG': {
                    Lv1: '204.92%',
                    Lv2: '221.6%',
                    Lv3: '238.28%',
                    Lv4: '262.1%',
                    Lv5: '278.78%',
                    Lv6: '297.85%',
                    Lv7: '324.06%',
                    Lv8: '350.27%',
                    Lv9: '376.48%',
                    Lv10: '405.07%',
                    Lv11: '433.66%',
                    Lv12: '462.26%',
                    Lv13: '490.85%',
                    Lv14: '519.44%',
                    Lv15: '548.04%',
                },
            },
        },
        {
            name: 'Claw and Thunder',
            image: '/images/characters/Skill_S_Razor_01.png',
            description:
                "Hunts his prey using the techniques taught to him by his master and his lupical.\nPress\nSwings the Thunder Wolf Claw, dealing\nElectro DMG\nto opponents in front of Razor.\nUpon striking an opponent, Razor will gain an Electro Sigil, which increases his Energy Recharge rate.\nRazor can have up to 3 Electro Sigils simultaneously, and gaining a new Electro Sigil refreshes their duration.\nHold\nGathers Electro energy to unleash a lightning storm over a small AoE, causing massive\nElectro DMG\n, and clears all of Razor's Electro Sigils.\nEach Electro Sigil cleared in this manner will be converted into Energy for Razor.\nIn the moment when lightning strikes, you can sometimes glimpse the look of a predator sizing up his prey deep within Razor's eyes.",
            data: {
                'Press Skill DMG': {
                    Lv1: '199.2%',
                    Lv2: '214.14%',
                    Lv3: '229.08%',
                    Lv4: '249%',
                    Lv5: '263.94%',
                    Lv6: '278.88%',
                    Lv7: '298.8%',
                    Lv8: '318.72%',
                    Lv9: '338.64%',
                    Lv10: '358.56%',
                    Lv11: '378.48%',
                    Lv12: '398.4%',
                    Lv13: '423.3%',
                    Lv14: '448.2%',
                    Lv15: '473.1%',
                },
                'Hold Skill DMG': {
                    Lv1: '295.2%',
                    Lv2: '317.34%',
                    Lv3: '339.48%',
                    Lv4: '369%',
                    Lv5: '391.14%',
                    Lv6: '413.28%',
                    Lv7: '442.8%',
                    Lv8: '472.32%',
                    Lv9: '501.84%',
                    Lv10: '531.36%',
                    Lv11: '560.88%',
                    Lv12: '590.4%',
                    Lv13: '627.3%',
                    Lv14: '664.2%',
                    Lv15: '701.1%',
                },
                'Energy Recharge Bonus': {
                    Lv1: '20% per Electro Sigil',
                    Lv2: '20% per Electro Sigil',
                    Lv3: '20% per Electro Sigil',
                    Lv4: '20% per Electro Sigil',
                    Lv5: '20% per Electro Sigil',
                    Lv6: '20% per Electro Sigil',
                    Lv7: '20% per Electro Sigil',
                    Lv8: '20% per Electro Sigil',
                    Lv9: '20% per Electro Sigil',
                    Lv10: '20% per Electro Sigil',
                    Lv11: '20% per Electro Sigil',
                    Lv12: '20% per Electro Sigil',
                    Lv13: '20% per Electro Sigil',
                    Lv14: '20% per Electro Sigil',
                    Lv15: '20% per Electro Sigil',
                },
                'Energy Regenerated': {
                    Lv1: '5 per Electro Sigil Absorbed',
                    Lv2: '5 per Electro Sigil Absorbed',
                    Lv3: '5 per Electro Sigil Absorbed',
                    Lv4: '5 per Electro Sigil Absorbed',
                    Lv5: '5 per Electro Sigil Absorbed',
                    Lv6: '5 per Electro Sigil Absorbed',
                    Lv7: '5 per Electro Sigil Absorbed',
                    Lv8: '5 per Electro Sigil Absorbed',
                    Lv9: '5 per Electro Sigil Absorbed',
                    Lv10: '5 per Electro Sigil Absorbed',
                    Lv11: '5 per Electro Sigil Absorbed',
                    Lv12: '5 per Electro Sigil Absorbed',
                    Lv13: '5 per Electro Sigil Absorbed',
                    Lv14: '5 per Electro Sigil Absorbed',
                    Lv15: '5 per Electro Sigil Absorbed',
                },
                'Electro Sigil duration': {
                    Lv1: '18s',
                    Lv2: '18s',
                    Lv3: '18s',
                    Lv4: '18s',
                    Lv5: '18s',
                    Lv6: '18s',
                    Lv7: '18s',
                    Lv8: '18s',
                    Lv9: '18s',
                    Lv10: '18s',
                    Lv11: '18s',
                    Lv12: '18s',
                    Lv13: '18s',
                    Lv14: '18s',
                    Lv15: '18s',
                },
                'Press CD': {
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
                'Hold CD': {
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
            name: 'Lightning Fang',
            image: '/images/characters/Skill_E_Razor_01.png',
            description:
                "Summons the Wolf Within, which deals\nElectro DMG\nto all nearby opponents. This clears all of Razor's Electro Sigils, which will be converted into Elemental Energy for him.\nThe Wolf Within will fight alongside Razor for the skill's duration.\nThe Wolf Within\n\u00b7Strikes alongside Razor's normal attacks, dealing\nElectro DMG\n.\n\u00b7Raises Razor's ATK SPD and\nElectro RES\n.\n\u00b7Causes Razor to be immune to DMG inflicted by the\nElectro-Charged\nstatus.\n\u00b7Disables Razor's Charged Attacks.\n\u00b7Increases Razor's resistance to interruption.\nThese effects end when Razor leaves the battlefield.\nWhen Razor leaves the field, a maximum of 10 Energy will be returned to him based off the duration remaining on this skill.\nThe wolf has awoken. The hunt is on.",
            data: {
                'Burst DMG': {
                    Lv1: '160%',
                    Lv2: '172%',
                    Lv3: '184%',
                    Lv4: '200%',
                    Lv5: '212%',
                    Lv6: '224%',
                    Lv7: '240%',
                    Lv8: '256%',
                    Lv9: '272%',
                    Lv10: '288%',
                    Lv11: '304%',
                    Lv12: '320%',
                    Lv13: '340%',
                    Lv14: '360%',
                    Lv15: '380%',
                },
                'Soul Companion DMG': {
                    Lv1: '24% Normal Attack DMG',
                    Lv2: '25.8% Normal Attack DMG',
                    Lv3: '27.6% Normal Attack DMG',
                    Lv4: '30% Normal Attack DMG',
                    Lv5: '31.8% Normal Attack DMG',
                    Lv6: '33.6% Normal Attack DMG',
                    Lv7: '36% Normal Attack DMG',
                    Lv8: '38.4% Normal Attack DMG',
                    Lv9: '40.8% Normal Attack DMG',
                    Lv10: '43.2% Normal Attack DMG',
                    Lv11: '45.6% Normal Attack DMG',
                    Lv12: '48% Normal Attack DMG',
                    Lv13: '51% Normal Attack DMG',
                    Lv14: '54% Normal Attack DMG',
                    Lv15: '57% Normal Attack DMG',
                },
                'Normal ATK SPD Bonus': {
                    Lv1: '26%',
                    Lv2: '28%',
                    Lv3: '30%',
                    Lv4: '32%',
                    Lv5: '34%',
                    Lv6: '36%',
                    Lv7: '37%',
                    Lv8: '38%',
                    Lv9: '39%',
                    Lv10: '40%',
                    Lv11: '40%',
                    Lv12: '40%',
                    Lv13: '40%',
                    Lv14: '40%',
                    Lv15: '40%',
                },
                'Electro RES Bonus': {
                    Lv1: '80%',
                    Lv2: '80%',
                    Lv3: '80%',
                    Lv4: '80%',
                    Lv5: '80%',
                    Lv6: '80%',
                    Lv7: '80%',
                    Lv8: '80%',
                    Lv9: '80%',
                    Lv10: '80%',
                    Lv11: '80%',
                    Lv12: '80%',
                    Lv13: '80%',
                    Lv14: '80%',
                    Lv15: '80%',
                },
                Duration: {
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
            name: 'Wolvensprint',
            image: '/images/characters/UI_Talent_Explosion_Sprint.png',
            description:
                'Decreases sprinting Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects.',
        },
        {
            name: 'Awakening',
            image: '/images/characters/UI_Talent_S_Razor_05.png',
            description:
                "Decreases\nClaw and Thunder\n's CD by 18%.\nUsing\nLightning Fang\nresets the CD of\nClaw and Thunder\n.",
        },
        {
            name: 'Hunger',
            image: '/images/characters/UI_Talent_S_Razor_06.png',
            description:
                "When Razor's Energy is below 50%, increases Energy Recharge by 30%.",
        },
    ],
    constellations: [
        {
            name: "Wolf's Instinct",
            image: '/images/characters/UI_Talent_S_Razor_01.png',
            description:
                "Picking up an Elemental Orb or Particle increases Razor's DMG by 10% for 8s.",
            level: 1,
        },
        {
            name: 'Suppression',
            image: '/images/characters/UI_Talent_S_Razor_02.png',
            description:
                'Increases CRIT Rate against opponents with less than 30% HP by 10%.',
            level: 2,
        },
        {
            name: 'Soul Companion',
            image: '/images/characters/UI_Talent_U_Razor_02.png',
            description:
                'Increases the Level of\nLightning Fang\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Bite',
            image: '/images/characters/UI_Talent_S_Razor_03.png',
            description:
                'When casting\nClaw and Thunder\n(Press), opponents hit will have their DEF decreased by 15% for 7s.',
            level: 4,
        },
        {
            name: 'Sharpened Claws',
            image: '/images/characters/UI_Talent_U_Razor_01.png',
            description:
                'Increases the Level of\nClaw and Thunder\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Lupus Fulguris',
            image: '/images/characters/UI_Talent_S_Razor_04.png',
            description:
                "Every 10s, Razor's sword charges up, causing the next Normal Attack to release lightning that deals 100% of Razor's ATK as\nElectro DMG\n.\nWhen Razor is not using\nLightning Fang\n, a lightning strike on an opponent will grant Razor an Electro Sigil for\nClaw and Thunder\n.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Razor
