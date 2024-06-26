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

const Diona: Character = {
    name: 'Diona',
    icon: '/images/characters/UI_AvatarIcon_Diona.png',
    weapon: 'Bow',
    vision: 'Cryo',
    rarity: 4,
    description:
        "A young lady who has inherited trace amounts of non-human blood. She is the incredibly popular bartender of the Cat's Tail tavern.",
    occupation: "The Cat's Tail",
    baseStats: {
        '1/20': {
            'Base HP': 802.0,
            'Base ATK': 17.81,
            'Base DEF': 50.36,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.0,
        },
        '20/20': {
            'Base HP': 2061.0,
            'Base ATK': 45.75,
            'Base DEF': 129.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.0,
        },
        '20/40': {
            'Base HP': 2661.0,
            'Base ATK': 59.05,
            'Base DEF': 166.99,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.0,
        },
        '40/40': {
            'Base HP': 3985.0,
            'Base ATK': 88.45,
            'Base DEF': 250.13,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.0,
        },
        '40/50': {
            'Base HP': 4411.0,
            'Base ATK': 97.91,
            'Base DEF': 276.86,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.06,
        },
        '50/50': {
            'Base HP': 5074.0,
            'Base ATK': 112.62,
            'Base DEF': 318.46,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.06,
        },
        '50/60': {
            'Base HP': 5642.0,
            'Base ATK': 125.22,
            'Base DEF': 354.1,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.12,
        },
        '60/60': {
            'Base HP': 6305.0,
            'Base ATK': 139.93,
            'Base DEF': 395.69,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.12,
        },
        '60/70': {
            'Base HP': 6731.0,
            'Base ATK': 149.38,
            'Base DEF': 422.42,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.12,
        },
        '70/70': {
            'Base HP': 7393.0,
            'Base ATK': 164.07,
            'Base DEF': 463.97,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.12,
        },
        '70/80': {
            'Base HP': 7819.0,
            'Base ATK': 173.53,
            'Base DEF': 490.7,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.18,
        },
        '80/80': {
            'Base HP': 8481.0,
            'Base ATK': 188.24,
            'Base DEF': 532.29,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.18,
        },
        '80/90': {
            'Base HP': 8907.0,
            'Base ATK': 197.69,
            'Base DEF': 559.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.24,
        },
        '90/90': {
            'Base HP': 9570.0,
            'Base ATK': 212.4,
            'Base DEF': 600.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Cryo DMG Bonus': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: K\u00e4tzlein Style',
            image: '/images/characters/Skill_A_02.png',
            description:
                'Normal Attack\nPerforms up to 5 consecutive shots with a bow.\nCharged Attack\nPerforms a more precise\nAimed Shot\nwith increased DMG.\nWhile aiming, biting frost will accumulate on the arrowhead. A fully charged frost arrow will deal\nCryo DMG\n.\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '36.12%',
                    Lv2: '39.06%',
                    Lv3: '42%',
                    Lv4: '46.2%',
                    Lv5: '49.14%',
                    Lv6: '52.5%',
                    Lv7: '57.12%',
                    Lv8: '61.74%',
                    Lv9: '66.36%',
                    Lv10: '71.4%',
                    Lv11: '77.18%',
                    Lv12: '83.97%',
                    Lv13: '90.76%',
                    Lv14: '97.55%',
                    Lv15: '104.96%',
                },
                '2-Hit DMG': {
                    Lv1: '33.54%',
                    Lv2: '36.27%',
                    Lv3: '39%',
                    Lv4: '42.9%',
                    Lv5: '45.63%',
                    Lv6: '48.75%',
                    Lv7: '53.04%',
                    Lv8: '57.33%',
                    Lv9: '61.62%',
                    Lv10: '66.3%',
                    Lv11: '71.66%',
                    Lv12: '77.97%',
                    Lv13: '84.28%',
                    Lv14: '90.58%',
                    Lv15: '97.46%',
                },
                '3-Hit DMG': {
                    Lv1: '45.58%',
                    Lv2: '49.29%',
                    Lv3: '53%',
                    Lv4: '58.3%',
                    Lv5: '62.01%',
                    Lv6: '66.25%',
                    Lv7: '72.08%',
                    Lv8: '77.91%',
                    Lv9: '83.74%',
                    Lv10: '90.1%',
                    Lv11: '97.39%',
                    Lv12: '105.96%',
                    Lv13: '114.53%',
                    Lv14: '123.1%',
                    Lv15: '132.45%',
                },
                '4-Hit DMG': {
                    Lv1: '43%',
                    Lv2: '46.5%',
                    Lv3: '50%',
                    Lv4: '55%',
                    Lv5: '58.5%',
                    Lv6: '62.5%',
                    Lv7: '68%',
                    Lv8: '73.5%',
                    Lv9: '79%',
                    Lv10: '85%',
                    Lv11: '91.88%',
                    Lv12: '99.96%',
                    Lv13: '108.05%',
                    Lv14: '116.13%',
                    Lv15: '124.95%',
                },
                '5-Hit DMG': {
                    Lv1: '53.75%',
                    Lv2: '58.13%',
                    Lv3: '62.5%',
                    Lv4: '68.75%',
                    Lv5: '73.13%',
                    Lv6: '78.13%',
                    Lv7: '85%',
                    Lv8: '91.88%',
                    Lv9: '98.75%',
                    Lv10: '106.25%',
                    Lv11: '114.84%',
                    Lv12: '124.95%',
                    Lv13: '135.06%',
                    Lv14: '145.16%',
                    Lv15: '156.19%',
                },
                'Aimed Shot': {
                    Lv1: '43.86%',
                    Lv2: '47.43%',
                    Lv3: '51%',
                    Lv4: '56.1%',
                    Lv5: '59.67%',
                    Lv6: '63.75%',
                    Lv7: '69.36%',
                    Lv8: '74.97%',
                    Lv9: '80.58%',
                    Lv10: '86.7%',
                    Lv11: '93.71%',
                    Lv12: '101.96%',
                    Lv13: '110.21%',
                    Lv14: '118.45%',
                    Lv15: '127.45%',
                },
                'Fully-Charged Aimed Shot': {
                    Lv1: '124%',
                    Lv2: '133.3%',
                    Lv3: '142.6%',
                    Lv4: '155%',
                    Lv5: '164.3%',
                    Lv6: '173.6%',
                    Lv7: '186%',
                    Lv8: '198.4%',
                    Lv9: '210.8%',
                    Lv10: '223.2%',
                    Lv11: '236.1%',
                    Lv12: '252.96%',
                    Lv13: '269.82%',
                    Lv14: '286.69%',
                    Lv15: '303.55%',
                },
                'Plunge DMG': {
                    Lv1: '56.83%',
                    Lv2: '61.45%',
                    Lv3: '66.08%',
                    Lv4: '72.69%',
                    Lv5: '77.31%',
                    Lv6: '82.6%',
                    Lv7: '89.87%',
                    Lv8: '97.14%',
                    Lv9: '104.41%',
                    Lv10: '112.34%',
                    Lv11: '120.27%',
                    Lv12: '128.2%',
                    Lv13: '136.12%',
                    Lv14: '144.05%',
                    Lv15: '151.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '113.63%',
                    Lv2: '122.88%',
                    Lv3: '132.13%',
                    Lv4: '145.35%',
                    Lv5: '154.59%',
                    Lv6: '165.17%',
                    Lv7: '179.7%',
                    Lv8: '194.23%',
                    Lv9: '208.77%',
                    Lv10: '224.62%',
                    Lv11: '240.48%',
                    Lv12: '256.34%',
                    Lv13: '272.19%',
                    Lv14: '288.05%',
                    Lv15: '303.9%',
                },
                'High Plunge DMG': {
                    Lv1: '141.93%',
                    Lv2: '153.49%',
                    Lv3: '165.04%',
                    Lv4: '181.54%',
                    Lv5: '193.1%',
                    Lv6: '206.3%',
                    Lv7: '224.45%',
                    Lv8: '242.61%',
                    Lv9: '260.76%',
                    Lv10: '280.57%',
                    Lv11: '300.37%',
                    Lv12: '320.18%',
                    Lv13: '339.98%',
                    Lv14: '359.79%',
                    Lv15: '379.59%',
                },
            },
        },
        {
            name: 'Icy Paws',
            image: '/images/characters/Skill_S_Diona_01.png',
            description:
                "Fires an Icy Paw that deals\nCryo DMG\nto opponents and forms a shield on hit.\nThe shield's DMG Absorption scales based on Diona's Max HP, and its duration scales off the number of Icy Paws that hit their target.\nPress\nRapidly fires off 2 Icy Paws.\nHold\nDashes back quickly before firing 5 Icy Paws.\nThe shield created by a Hold attack will gain a 75% DMG Absorption Bonus.\nThe shield has a 250%\nCryo DMG\nAbsorption Bonus, and will cause your active character to become affected by\nCryo\nat the point of formation for a short duration.\nWhen she first started bartending, Diona found that no matter how much ice she put in her cocktails, it would never do a drunkard any harm. That all changed when she received her Vision \u2014 now she can form ice cold enough to cause severe brainfreeze. Five out of five stars!",
            data: {
                'Icy Paw DMG': {
                    Lv1: '41.92% per Paw',
                    Lv2: '45.06% per Paw',
                    Lv3: '48.21% per Paw',
                    Lv4: '52.4% per Paw',
                    Lv5: '55.54% per Paw',
                    Lv6: '58.69% per Paw',
                    Lv7: '62.88% per Paw',
                    Lv8: '67.07% per Paw',
                    Lv9: '71.26% per Paw',
                    Lv10: '75.46% per Paw',
                    Lv11: '79.65% per Paw',
                    Lv12: '83.84% per Paw',
                    Lv13: '89.08% per Paw',
                    Lv14: '94.32% per Paw',
                    Lv15: '99.56% per Paw',
                },
                'Base Shield DMG Absorption': {
                    Lv1: '7.2% Max HP + 692.81',
                    Lv2: '7.74% Max HP + 762.1',
                    Lv3: '8.28% Max HP + 837.16',
                    Lv4: '9% Max HP + 918',
                    Lv5: '9.54% Max HP + 1004.61',
                    Lv6: '10.08% Max HP + 1097',
                    Lv7: '10.8% Max HP + 1195.16',
                    Lv8: '11.52% Max HP + 1299.1',
                    Lv9: '12.24% Max HP + 1408.81',
                    Lv10: '12.96% Max HP + 1524.29',
                    Lv11: '13.68% Max HP + 1645.55',
                    Lv12: '14.4% Max HP + 1772.58',
                    Lv13: '15.3% Max HP + 1905.39',
                    Lv14: '16.2% Max HP + 2043.97',
                    Lv15: '17.1% Max HP + 2188.32',
                },
                Duration: {
                    Lv1: '1.8s per Paw',
                    Lv2: '1.9s per Paw',
                    Lv3: '2s per Paw',
                    Lv4: '2.1s per Paw',
                    Lv5: '2.2s per Paw',
                    Lv6: '2.3s per Paw',
                    Lv7: '2.4s per Paw',
                    Lv8: '2.4s per Paw',
                    Lv9: '2.4s per Paw',
                    Lv10: '2.4s per Paw',
                    Lv11: '2.4s per Paw',
                    Lv12: '2.4s per Paw',
                    Lv13: '2.4s per Paw',
                    Lv14: '2.4s per Paw',
                    Lv15: '2.4s per Paw',
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
            },
        },
        {
            name: 'Signature Mix',
            image: '/images/characters/Skill_E_Diona_01.png',
            description:
                "Tosses out a special cold brew that deals\nAoE Cryo DMG\nand creates a Drunken Mist in an AoE.\nDrunken Mist\n\u00b7Deals continuous\nCryo DMG\nto opponents within the AoE.\n\u00b7Continuously regenerates the HP of characters within the AoE.\nA horrific mix that even Diona considers inhumane. The horrifying foretaste should be left for one's opponents. It has a crisp aftertaste, but unfortunately, one can only feel it on one's nose and skin.",
            data: {
                'Skill DMG': {
                    Lv1: '80%',
                    Lv2: '86%',
                    Lv3: '92%',
                    Lv4: '100%',
                    Lv5: '106%',
                    Lv6: '112%',
                    Lv7: '120%',
                    Lv8: '128%',
                    Lv9: '136%',
                    Lv10: '144%',
                    Lv11: '152%',
                    Lv12: '160%',
                    Lv13: '170%',
                    Lv14: '180%',
                    Lv15: '190%',
                },
                'Continuous Field DMG': {
                    Lv1: '52.64%',
                    Lv2: '56.59%',
                    Lv3: '60.54%',
                    Lv4: '65.8%',
                    Lv5: '69.75%',
                    Lv6: '73.7%',
                    Lv7: '78.96%',
                    Lv8: '84.22%',
                    Lv9: '89.49%',
                    Lv10: '94.75%',
                    Lv11: '100.02%',
                    Lv12: '105.28%',
                    Lv13: '111.86%',
                    Lv14: '118.44%',
                    Lv15: '125.02%',
                },
                'HP Regeneration Over Time': {
                    Lv1: '5.34% Max HP + 513.19',
                    Lv2: '5.74% Max HP + 564.52',
                    Lv3: '6.14% Max HP + 620.12',
                    Lv4: '6.67% Max HP + 680',
                    Lv5: '7.07% Max HP + 744.16',
                    Lv6: '7.47% Max HP + 812.59',
                    Lv7: '8% Max HP + 885.3',
                    Lv8: '8.54% Max HP + 962.29',
                    Lv9: '9.07% Max HP + 1043.56',
                    Lv10: '9.6% Max HP + 1129.1',
                    Lv11: '10.14% Max HP + 1218.92',
                    Lv12: '10.67% Max HP + 1313.02',
                    Lv13: '11.34% Max HP + 1411.4',
                    Lv14: '12.01% Max HP + 1514.05',
                    Lv15: '12.67% Max HP + 1620.98',
                },
                Duration: {
                    Lv1: '12s',
                    Lv2: '12s',
                    Lv3: '12s',
                    Lv4: '12s',
                    Lv5: '12s',
                    Lv6: '12s',
                    Lv7: '12s',
                    Lv8: '12s',
                    Lv9: '12s',
                    Lv10: '12s',
                    Lv11: '12s',
                    Lv12: '12s',
                    Lv13: '12s',
                    Lv14: '12s',
                    Lv15: '12s',
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
            name: 'Complimentary Bar Food',
            image: '/images/characters/UI_Talent_Cook_Heal.png',
            description:
                'When a Perfect Cooking is achieved on a dish with restorative effects, there is a 12% chance to obtain double the product.',
        },
        {
            name: "Cat's Tail Secret Menu",
            image: '/images/characters/UI_Talent_S_Diona_05.png',
            description:
                'Characters shielded by\nIcy Paws\nhave their Movement SPD increased by 10% and their Stamina Consumption decreased by 10%.',
        },
        {
            name: "Drunkards' Farce",
            image: '/images/characters/UI_Talent_S_Diona_06.png',
            description:
                'Opponents who enter the AoE of\nSignature Mix\nhave 10% decreased ATK for 15s.',
        },
    ],
    constellations: [
        {
            name: 'A Lingering Flavor',
            image: '/images/characters/UI_Talent_S_Diona_01.png',
            description:
                'Regenerates 15 Energy for Diona after the effects of\nSignature Mix\nend.',
            level: 1,
        },
        {
            name: 'Shaken, Not Purred',
            image: '/images/characters/UI_Talent_S_Diona_02.png',
            description:
                "Increases\nIcy Paws\n' DMG by 15%, and increases its shield's DMG Absorption by 15%.\nAdditionally, when paws hit their targets, creates a shield for other nearby characters on the field with 50% of the\nIcy Paws\nshield's DMG Absorption for 5s.",
            level: 2,
        },
        {
            name: 'A\u2014Another Round?',
            image: '/images/characters/UI_Talent_U_Diona_01.png',
            description:
                'Increases the Level of\nSignature Mix\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Wine Industry Slayer',
            image: '/images/characters/UI_Talent_S_Diona_03.png',
            description:
                "Within the radius of\nSignature Mix\n, Diona's charge time for aimed shots is reduced by 60%",
            level: 4,
        },
        {
            name: 'Double Shot, on the Rocks',
            image: '/images/characters/UI_Talent_U_Diona_02.png',
            description:
                'Increases the Level of\nIcy Paws\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: "Cat's Tail Closing Time",
            image: '/images/characters/UI_Talent_S_Diona_04.png',
            description:
                "Characters within\nSignature Mix\n's radius will gain the following effects based on their HP amounts:\n\u00b7Increases Incoming Healing Bonus by 30% when HP falls below or is equal to 50%.\n\u00b7Elemental Mastery increased by 200 when HP is above 50%.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Diona
