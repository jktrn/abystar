import { AbilityScaling, Bonus, Character } from '@/interfaces/Character'

const abilityScalings: AbilityScaling = {
    // ...
}

const characterBonuses: Bonus[] = [
    // ...
]

const constellationBonuses: Bonus[] = [
    // ...
]

const Qiqi: Character = {
    name: 'Qiqi',
    icon: '/images/characters/qiqi.png',
    weapon: 'Sword',
    vision: 'Cryo',
    rarity: 5,
    description:
        'An apprentice and herb gatherer at Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.',
    occupation: 'Bubu Pharmacy',
    baseStats: {
        '1/20': {
            'Base HP': '963',
            'Base ATK': '22.34',
            'Base DEF': '71.8',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '0%',
        },
        '20/20': {
            'Base HP': '2498',
            'Base ATK': '57.96',
            'Base DEF': '186.24',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '0%',
        },
        '20/40': {
            'Base HP': '3323',
            'Base ATK': '77.12',
            'Base DEF': '247.8',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '0%',
        },
        '40/40': {
            'Base HP': '4973',
            'Base ATK': '115.39',
            'Base DEF': '370.79',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '0%',
        },
        '40/50': {
            'Base HP': '5559',
            'Base ATK': '129.0',
            'Base DEF': '414.53',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '5.54%',
        },
        '50/50': {
            'Base HP': '6396',
            'Base ATK': '148.42',
            'Base DEF': '476.92',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '5.54%',
        },
        '50/60': {
            'Base HP': '7178',
            'Base ATK': '166.57',
            'Base DEF': '535.24',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '11.08%',
        },
        '60/60': {
            'Base HP': '8023',
            'Base ATK': '186.19',
            'Base DEF': '598.27',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '11.08%',
        },
        '60/70': {
            'Base HP': '8610',
            'Base ATK': '199.8',
            'Base DEF': '642.01',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '11.08%',
        },
        '70/70': {
            'Base HP': '9463',
            'Base ATK': '219.59',
            'Base DEF': '705.62',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '11.08%',
        },
        '70/80': {
            'Base HP': '10050',
            'Base ATK': '233.21',
            'Base DEF': '749.36',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '16.62%',
        },
        '80/80': {
            'Base HP': '10912',
            'Base ATK': '253.23',
            'Base DEF': '813.69',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '16.62%',
        },
        '80/90': {
            'Base HP': '11499',
            'Base ATK': '266.84',
            'Base DEF': '857.43',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '22.15%',
        },
        '90/90': {
            'Base HP': '12368',
            'Base ATK': '287.01',
            'Base DEF': '922.27',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Healing Bonus': '22.15%',
        },
    },
    activeSkills: [
        {
            name: 'Normal Attack: Ancient Sword Art',
            image: 'https://genshin.honeyhunterworld.com/img/s_353101.webp',
            description:
                'Normal Attack\nPerforms up to 5 rapid strikes.\nCharged Attack\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '37.75%',
                    Lv2: '40.83%',
                    Lv3: '43.9%',
                    Lv4: '48.29%',
                    Lv5: '51.36%',
                    Lv6: '54.87%',
                    Lv7: '59.7%',
                    Lv8: '64.53%',
                    Lv9: '69.36%',
                    Lv10: '74.63%',
                    Lv11: '79.9%',
                    Lv12: '85.17%',
                    Lv13: '90.43%',
                    Lv14: '95.7%',
                    Lv15: '100.97%',
                },
                '2-Hit DMG': {
                    Lv1: '38.87%',
                    Lv2: '42.04%',
                    Lv3: '45.2%',
                    Lv4: '49.72%',
                    Lv5: '52.88%',
                    Lv6: '56.5%',
                    Lv7: '61.47%',
                    Lv8: '66.44%',
                    Lv9: '71.42%',
                    Lv10: '76.84%',
                    Lv11: '82.26%',
                    Lv12: '87.69%',
                    Lv13: '93.11%',
                    Lv14: '98.54%',
                    Lv15: '103.96%',
                },
                '3-Hit DMG': {
                    Lv1: '48.34%',
                    Lv2: '52.26%',
                    Lv3: '56.20%',
                    Lv4: '61.82%',
                    Lv5: '65.76%',
                    Lv6: '70.24%',
                    Lv7: '76.44%',
                    Lv8: '82.62%',
                    Lv9: '88.80%',
                    Lv10: '95.54%',
                    Lv11: '102.28%',
                    Lv12: '109.02%',
                    Lv13: '115.78%',
                    Lv14: '122.52%',
                    Lv15: '129.26%',
                },
                '4-Hit DMG': {
                    Lv1: '49.36%',
                    Lv2: '53.38%',
                    Lv3: '57.40%',
                    Lv4: '63.14%',
                    Lv5: '67.16%',
                    Lv6: '71.74%',
                    Lv7: '78.06%',
                    Lv8: '84.38%',
                    Lv9: '90.70%',
                    Lv10: '97.58%',
                    Lv11: '104.46%',
                    Lv12: '111.36%',
                    Lv13: '118.24%',
                    Lv14: '125.14%',
                    Lv15: '132.02%',
                },
                '5-Hit DMG': {
                    Lv1: '63.04%',
                    Lv2: '68.17%',
                    Lv3: '73.3%',
                    Lv4: '80.63%',
                    Lv5: '85.76%',
                    Lv6: '91.62%',
                    Lv7: '99.69%',
                    Lv8: '107.75%',
                    Lv9: '115.81%',
                    Lv10: '124.61%',
                    Lv11: '133.41%',
                    Lv12: '142.2%',
                    Lv13: '151%',
                    Lv14: '159.79%',
                    Lv15: '168.59%',
                },
                'Charged Attack DMG': {
                    Lv1: '128.66%',
                    Lv2: '139.12%',
                    Lv3: '149.60%',
                    Lv4: '164.56%',
                    Lv5: '175.04%',
                    Lv6: '187.00%',
                    Lv7: '203.46%',
                    Lv8: '219.92%',
                    Lv9: '236.36%',
                    Lv10: '254.32%',
                    Lv11: '272.28%',
                    Lv12: '290.22%',
                    Lv13: '308.18%',
                    Lv14: '326.12%',
                    Lv15: '344.08%',
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
            name: 'Adeptus Art: Herald of Frost',
            image: 'https://genshin.honeyhunterworld.com/img/s_353201.webp',
            description:
                "Using the Icevein Talisman, Qiqi brings forth the Herald of Frost, dealing\nCryo DMG\nto surrounding opponents.\nHerald of Frost\n\u00b7On hit, Qiqi's Normal and Charged Attacks regenerate HP for your own party members and nearby teammates. Healing scales based on Qiqi's ATK.\n\u00b7Periodically regenerates your active character's HP.\n\u00b7Follows the character around, dealing\nCryo DMG\nto opponents in their path.\nI use this to prevent warming and rot... of Dr. Bai's precious ingredients. Yes.",
            data: {
                'Skill DMG': {
                    Lv1: '96%',
                    Lv2: '103.2%',
                    Lv3: '110.4%',
                    Lv4: '120%',
                    Lv5: '127.2%',
                    Lv6: '134.4%',
                    Lv7: '144%',
                    Lv8: '153.6%',
                    Lv9: '163.2%',
                    Lv10: '172.8%',
                    Lv11: '182.4%',
                    Lv12: '192%',
                    Lv13: '204%',
                    Lv14: '216%',
                    Lv15: '228%',
                },
                'Regeneration on Hit': {
                    Lv1: '10.56% ATK + 67.41',
                    Lv2: '11.35% ATK + 74.15',
                    Lv3: '12.14% ATK + 81.45',
                    Lv4: '13.2% ATK + 89.32',
                    Lv5: '13.99% ATK + 97.75',
                    Lv6: '14.78% ATK + 106.73',
                    Lv7: '15.84% ATK + 116.29',
                    Lv8: '16.9% ATK + 126.4',
                    Lv9: '17.95% ATK + 137.07',
                    Lv10: '19.01% ATK + 148.31',
                    Lv11: '20.06% ATK + 160.11',
                    Lv12: '21.12% ATK + 172.47',
                    Lv13: '22.44% ATK + 185.39',
                    Lv14: '23.76% ATK + 198.87',
                    Lv15: '25.08% ATK + 212.92',
                },
                'Continuous Regeneration': {
                    Lv1: '69.6% ATK + 450.55',
                    Lv2: '74.82% ATK + 495.61',
                    Lv3: '80.04% ATK + 544.43',
                    Lv4: '87% ATK + 597',
                    Lv5: '92.22% ATK + 653.33',
                    Lv6: '97.44% ATK + 713.41',
                    Lv7: '104.4% ATK + 777.25',
                    Lv8: '111.36% ATK + 844.84',
                    Lv9: '118.32% ATK + 916.18',
                    Lv10: '125.28% ATK + 991.29',
                    Lv11: '132.24% ATK + 1070.14',
                    Lv12: '139.2% ATK + 1152.76',
                    Lv13: '147.9% ATK + 1239.12',
                    Lv14: '156.6% ATK + 1329.25',
                    Lv15: '165.3% ATK + 1423.12',
                },
                'Herald of Frost DMG': {
                    Lv1: '36%',
                    Lv2: '38.7%',
                    Lv3: '41.4%',
                    Lv4: '45%',
                    Lv5: '47.7%',
                    Lv6: '50.4%',
                    Lv7: '54%',
                    Lv8: '57.6%',
                    Lv9: '61.2%',
                    Lv10: '64.8%',
                    Lv11: '68.4%',
                    Lv12: '72%',
                    Lv13: '76.5%',
                    Lv14: '81%',
                    Lv15: '85.5%',
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
            },
        },
        {
            name: 'Adeptus Art: Preserver of Fortune',
            image: 'https://genshin.honeyhunterworld.com/img/s_353901.webp',
            description:
                'Qiqi releases the adeptus power sealed within her body, marking nearby opponents with a Fortune-Preserving Talisman that deals\nCryo DMG\n.\nFortune-Preserving Talisman\nWhen opponents affected by this Talisman take DMG, the character that dealt this DMG regenerates HP.\n"I am the Fortune Preserver, the Maiden of Resurrection."\n\u2014 Qiqi does not remember these words.',
            data: {
                'Skill DMG': {
                    Lv1: '284.8%',
                    Lv2: '306.16%',
                    Lv3: '327.52%',
                    Lv4: '356%',
                    Lv5: '377.36%',
                    Lv6: '398.72%',
                    Lv7: '427.2%',
                    Lv8: '455.68%',
                    Lv9: '484.16%',
                    Lv10: '512.64%',
                    Lv11: '541.12%',
                    Lv12: '569.6%',
                    Lv13: '605.2%',
                    Lv14: '640.8%',
                    Lv15: '676.4%',
                },
                Healing: {
                    Lv1: '90% ATK + 577.34',
                    Lv2: '96.75% ATK + 635.08',
                    Lv3: '103.5% ATK + 697.63',
                    Lv4: '112.5% ATK + 765',
                    Lv5: '119.25% ATK + 837.18',
                    Lv6: '126% ATK + 914.17',
                    Lv7: '135% ATK + 995.97',
                    Lv8: '144% ATK + 1082.58',
                    Lv9: '153% ATK + 1174.01',
                    Lv10: '162% ATK + 1270.24',
                    Lv11: '171% ATK + 1371.29',
                    Lv12: '180% ATK + 1477.15',
                    Lv13: '191.25% ATK + 1587.82',
                    Lv14: '202.5% ATK + 1703.31',
                    Lv15: '213.75% ATK + 1823.6',
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
            name: 'Former Life Memories',
            image: 'https://genshin.honeyhunterworld.com/img/p_352301.webp',
            description:
                'Displays the location of nearby\nresources unique to Liyue\non the mini-map.',
        },
        {
            name: 'Life-Prolonging Methods',
            image: 'https://genshin.honeyhunterworld.com/img/p_352101.webp',
            description:
                'When a character under the effects of\nAdeptus Art: Herald of Frost\ntriggers an Elemental Reaction, their Incoming Healing Bonus is increased by 20% for 8s.',
        },
        {
            name: 'A Glimpse Into Arcanum',
            image: 'https://genshin.honeyhunterworld.com/img/p_352201.webp',
            description:
                'When Qiqi hits opponents with her Normal and Charged Attacks, she has a 50% chance to apply a Fortune-Preserving Talisman to them for 6s. This effect can only occur once every 30s.',
        },
    ],
    constellations: [
        {
            name: 'Ascetics of Frost',
            image: 'https://genshin.honeyhunterworld.com/img/c_351.webp',
            description:
                'When the Herald of Frost hits an opponent marked by a Fortune-Preserving Talisman, Qiqi regenerates 2 Energy.',
            level: 1,
        },
        {
            name: 'Frozen to the Bone',
            image: 'https://genshin.honeyhunterworld.com/img/c_352.webp',
            description:
                "Qiqi's Normal and Charge Attack DMG against opponents affected by\nCryo\nis increased by 15%.",
            level: 2,
        },
        {
            name: 'Ascendant Praise',
            image: 'https://genshin.honeyhunterworld.com/img/c_353.webp',
            description:
                'Increases the Level of\nAdeptus Art: Preserver of Fortune\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Divine Suppression',
            image: 'https://genshin.honeyhunterworld.com/img/c_354.webp',
            description:
                'Targets marked by the Fortune-Preserving Talisman have their ATK decreased by 20%.',
            level: 4,
        },
        {
            name: 'Crimson Lotus Bloom',
            image: 'https://genshin.honeyhunterworld.com/img/c_355.webp',
            description:
                'Increases the Level of\nAdeptus Art: Herald of Frost\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Rite of Resurrection',
            image: 'https://genshin.honeyhunterworld.com/img/c_356.webp',
            description:
                'Using\nAdeptus Art: Preserver of Fortune\nrevives all fallen party members nearby and regenerates 50% of their HP.\nThis effect can only occur once every 15 mins.',
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default Qiqi
