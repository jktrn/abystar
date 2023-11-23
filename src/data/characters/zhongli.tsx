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

const Zhongli: Character = {
    name: 'Zhongli',
    icon: '/images/characters/zhongli.png',
    weapon: 'Polearm',
    vision: 'Geo',
    rarity: 5,
    description:
        'A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.',
    occupation: 'Liyue Harbor',
    baseStats: {
        '1/20': {
            'Base HP': '1144',
            'Base ATK': '19.55',
            'Base DEF': '57.44',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '0%',
        },
        '20/20': {
            'Base HP': '2967',
            'Base ATK': '50.72',
            'Base DEF': '148.99',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '0%',
        },
        '20/40': {
            'Base HP': '3948',
            'Base ATK': '67.48',
            'Base DEF': '198.24',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '0%',
        },
        '40/40': {
            'Base HP': '5908',
            'Base ATK': '100.97',
            'Base DEF': '296.63',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '0%',
        },
        '40/50': {
            'Base HP': '6605',
            'Base ATK': '112.88',
            'Base DEF': '331.62',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '7.2%',
        },
        '50/50': {
            'Base HP': '7599',
            'Base ATK': '129.87',
            'Base DEF': '381.53',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '7.2%',
        },
        '50/60': {
            'Base HP': '8528',
            'Base ATK': '145.75',
            'Base DEF': '428.19',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '14.4%',
        },
        '60/60': {
            'Base HP': '9533',
            'Base ATK': '162.91',
            'Base DEF': '478.62',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '14.4%',
        },
        '60/70': {
            'Base HP': '10230',
            'Base ATK': '174.82',
            'Base DEF': '513.61',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '14.4%',
        },
        '70/70': {
            'Base HP': '11243',
            'Base ATK': '192.15',
            'Base DEF': '564.5',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '14.4%',
        },
        '70/80': {
            'Base HP': '11940',
            'Base ATK': '204.06',
            'Base DEF': '599.49',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '21.6%',
        },
        '80/80': {
            'Base HP': '12965',
            'Base ATK': '221.57',
            'Base DEF': '650.95',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '21.6%',
        },
        '80/90': {
            'Base HP': '13662',
            'Base ATK': '233.48',
            'Base DEF': '685.95',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '28.8%',
        },
        '90/90': {
            'Base HP': '14695',
            'Base ATK': '251.14',
            'Base DEF': '737.81',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Geo DMG Bonus': '28.8%',
        },
    },
    activeSkills: [
        {
            name: 'Normal Attack: Rain of Stone',
            image: 'https://genshin.honeyhunterworld.com/img/s_303101.webp',
            description:
                'Normal Attack\nPerforms up to 6 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, causing stone spears to fall along his path.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '30.77%',
                    Lv2: '33.27%',
                    Lv3: '35.78%',
                    Lv4: '39.36%',
                    Lv5: '41.86%',
                    Lv6: '44.72%',
                    Lv7: '48.66%',
                    Lv8: '52.59%',
                    Lv9: '56.53%',
                    Lv10: '60.82%',
                    Lv11: '65.74%',
                    Lv12: '71.53%',
                    Lv13: '77.31%',
                    Lv14: '83.1%',
                    Lv15: '89.41%',
                },
                '2-Hit DMG': {
                    Lv1: '31.15%',
                    Lv2: '33.69%',
                    Lv3: '36.22%',
                    Lv4: '39.85%',
                    Lv5: '42.38%',
                    Lv6: '45.28%',
                    Lv7: '49.26%',
                    Lv8: '53.25%',
                    Lv9: '57.23%',
                    Lv10: '61.58%',
                    Lv11: '66.56%',
                    Lv12: '72.42%',
                    Lv13: '78.27%',
                    Lv14: '84.13%',
                    Lv15: '90.52%',
                },
                '3-Hit DMG': {
                    Lv1: '38.58%',
                    Lv2: '41.72%',
                    Lv3: '44.86%',
                    Lv4: '49.34%',
                    Lv5: '52.48%',
                    Lv6: '56.07%',
                    Lv7: '61%',
                    Lv8: '65.94%',
                    Lv9: '70.87%',
                    Lv10: '76.26%',
                    Lv11: '82.42%',
                    Lv12: '89.68%',
                    Lv13: '96.93%',
                    Lv14: '104.18%',
                    Lv15: '112.1%',
                },
                '4-Hit DMG': {
                    Lv1: '42.94%',
                    Lv2: '46.43%',
                    Lv3: '49.93%',
                    Lv4: '54.92%',
                    Lv5: '58.42%',
                    Lv6: '62.41%',
                    Lv7: '67.9%',
                    Lv8: '73.4%',
                    Lv9: '78.89%',
                    Lv10: '84.88%',
                    Lv11: '91.74%',
                    Lv12: '99.82%',
                    Lv13: '107.89%',
                    Lv14: '115.97%',
                    Lv15: '124.77%',
                },
                '5-Hit DMG': {
                    Lv1: '43.00%',
                    Lv2: '46.52%',
                    Lv3: '50.00%',
                    Lv4: '55.00%',
                    Lv5: '58.48%',
                    Lv6: '62.52%',
                    Lv7: '68.00%',
                    Lv8: '73.52%',
                    Lv9: '79.00%',
                    Lv10: '85.00%',
                    Lv11: '91.88%',
                    Lv12: '99.96%',
                    Lv13: '108.04%',
                    Lv14: '116.12%',
                    Lv15: '124.96%',
                },
                '6-Hit DMG': {
                    Lv1: '54.5%',
                    Lv2: '58.93%',
                    Lv3: '63.37%',
                    Lv4: '69.7%',
                    Lv5: '74.14%',
                    Lv6: '79.21%',
                    Lv7: '86.18%',
                    Lv8: '93.15%',
                    Lv9: '100.12%',
                    Lv10: '107.73%',
                    Lv11: '116.44%',
                    Lv12: '126.69%',
                    Lv13: '136.93%',
                    Lv14: '147.18%',
                    Lv15: '158.36%',
                },
                'Charged Attack DMG': {
                    Lv1: '111.03%',
                    Lv2: '120.06%',
                    Lv3: '129.1%',
                    Lv4: '142.01%',
                    Lv5: '151.05%',
                    Lv6: '161.37%',
                    Lv7: '175.58%',
                    Lv8: '189.78%',
                    Lv9: '203.98%',
                    Lv10: '219.47%',
                    Lv11: '237.22%',
                    Lv12: '258.1%',
                    Lv13: '278.97%',
                    Lv14: '299.85%',
                    Lv15: '322.62%',
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
            name: 'Dominus Lapidis',
            image: 'https://genshin.honeyhunterworld.com/img/s_303201.webp',
            description:
                "Every mountain, rock and inch of land is filled with the power of Geo, but those who can wield such powers freely are few and far between.\nPress\nCommands the power of earth to create a Stone Stele.\nHold\nCauses nearby Geo energy to explode, causing the following effects:\n\u00b7If their maximum number hasn't been reached, creates a Stone Stele.\n\u00b7Creates a shield of jade. The shield's DMG Absorption scales based on Zhongli's Max HP.\n\u00b7Deals\nAoE Geo DMG\n.\n\u00b7If there are nearby targets with the\nGeo element\n, it will drain a large amount of\nGeo element\nfrom a maximum of 2 such targets. This effect does not cause DMG.\nStone Stele\nWhen created, deals\nAoE Geo DMG\n.\nAdditionally, it will intermittently resonate with other nearby\nGeo constructs\n, dealing\nGeo DMG\nto nearby opponents.\nThe Stone Stele is considered a\nGeo construct\nthat can both be climbed and used to block attacks.\nOnly one Stele created by Zhongli himself may initially exist at any one time.\nJade Shield\nPossesses 150% DMG Absorption against all Elemental and Physical DMG.\nCharacters protected by the Jade Shield will decrease the Elemental RES and Physical RES of opponents in a small AoE by 20%. This effect cannot be stacked.\nA true master of stone may carve jade and shape gold.",
            data: {
                'Stone Stele/Resonance DMG': {
                    Lv1: '16% / 32%',
                    Lv2: '17.2% / 34.4%',
                    Lv3: '18.4% / 36.8%',
                    Lv4: '20% / 40%',
                    Lv5: '21.2% / 42.4%',
                    Lv6: '22.4% / 44.8%',
                    Lv7: '24% / 48%',
                    Lv8: '25.6% / 51.2%',
                    Lv9: '27.2% / 54.4%',
                    Lv10: '28.8% / 57.6%',
                    Lv11: '30.4% / 60.8%',
                    Lv12: '32% / 64%',
                    Lv13: '34% / 68%',
                    Lv14: '36% / 72%',
                    Lv15: '38% / 76%',
                },
                'Press CD': {
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
                'Hold DMG': {
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
                'Shield Base Absorption': {
                    Lv1: '1232.41',
                    Lv2: '1355.67',
                    Lv3: '1489.2',
                    Lv4: '1633',
                    Lv5: '1787.07',
                    Lv6: '1951.42',
                    Lv7: '2126.03',
                    Lv8: '2310.92',
                    Lv9: '2506.08',
                    Lv10: '2711.51',
                    Lv11: '2927.21',
                    Lv12: '3153.18',
                    Lv13: '3389.43',
                    Lv14: '3635.95',
                    Lv15: '3892.73',
                },
                'Additional Shield Absorption': {
                    Lv1: '12.8% Max HP',
                    Lv2: '13.76% Max HP',
                    Lv3: '14.72% Max HP',
                    Lv4: '16% Max HP',
                    Lv5: '16.96% Max HP',
                    Lv6: '17.92% Max HP',
                    Lv7: '19.2% Max HP',
                    Lv8: '20.48% Max HP',
                    Lv9: '21.76% Max HP',
                    Lv10: '23.04% Max HP',
                    Lv11: '24.32% Max HP',
                    Lv12: '25.6% Max HP',
                    Lv13: '27.2% Max HP',
                    Lv14: '28.8% Max HP',
                    Lv15: '30.4% Max HP',
                },
                'Shield Duration': {
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
                'Hold CD': {
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
            },
        },
        {
            name: 'Planet Befall',
            image: 'https://genshin.honeyhunterworld.com/img/s_303901.webp',
            description:
                'Brings a falling meteor down to earth, dealing massive\nGeo DMG\nto opponents caught in its AoE and applying the\nPetrification\nstatus to them.\nPetrification\nOpponents affected by the\nPetrification\nstatus cannot move.\nThe falling meteor punishes the unjust.',
            data: {
                'Skill DMG': {
                    Lv1: '401.08%',
                    Lv2: '444.44%',
                    Lv3: '487.8%',
                    Lv4: '542%',
                    Lv5: '590.78%',
                    Lv6: '639.56%',
                    Lv7: '704.6%',
                    Lv8: '769.64%',
                    Lv9: '834.68%',
                    Lv10: '899.72%',
                    Lv11: '964.76%',
                    Lv12: '1029.8%',
                    Lv13: '1084%',
                    Lv14: '1138.2%',
                    Lv15: '1192.4%',
                },
                'Petrification Duration': {
                    Lv1: '3.1s',
                    Lv2: '3.2s',
                    Lv3: '3.3s',
                    Lv4: '3.4s',
                    Lv5: '3.5s',
                    Lv6: '3.6s',
                    Lv7: '3.7s',
                    Lv8: '3.8s',
                    Lv9: '3.9s',
                    Lv10: '4s',
                    Lv11: '4s',
                    Lv12: '4s',
                    Lv13: '4s',
                    Lv14: '4s',
                    Lv15: '4s',
                },
                CD: {
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
                'Energy Cost': {
                    Lv1: '40',
                    Lv2: '40',
                    Lv3: '40',
                    Lv4: '40',
                    Lv5: '40',
                    Lv6: '40',
                    Lv7: '40',
                    Lv8: '40',
                    Lv9: '40',
                    Lv10: '40',
                    Lv11: '40',
                    Lv12: '40',
                    Lv13: '40',
                    Lv14: '40',
                    Lv15: '40',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Arcanum of Crystal',
            image: 'https://genshin.honeyhunterworld.com/img/p_302301.webp',
            description:
                'Refunds 15% of the ore used when crafting Polearm-type weapons.',
        },
        {
            name: 'Resonant Waves',
            image: 'https://genshin.honeyhunterworld.com/img/p_302101.webp',
            description:
                'When the Jade Shield takes DMG, it will Fortify:\n\u00b7Fortified characters have 5% increased Shield Strength.\nCan stack up to 5 times, and lasts until the Jade Shield disappears.',
        },
        {
            name: 'Dominance of Earth',
            image: 'https://genshin.honeyhunterworld.com/img/p_302201.webp',
            description:
                "Zhongli deals bonus DMG based on his Max HP:\n\u00b7Normal Attack, Charged Attack, and Plunging Attack DMG is increased by 1.39% of Max HP.\n\u00b7\nDominus Lapidis'\nStone Stele, resonance, and hold DMG is increased by 1.9% of Max HP.\n\u00b7\nPlanet Befall's\nDMG is increased by 33% of Max HP.",
        },
    ],
    constellations: [
        {
            name: 'Rock, the Backbone of Earth',
            image: 'https://genshin.honeyhunterworld.com/img/c_301.webp',
            description:
                'Increases the maximum number of Stone Steles created by\nDominus Lapidis\nthat may exist simultaneously to 2.',
            level: 1,
        },
        {
            name: 'Stone, the Cradle of Jade',
            image: 'https://genshin.honeyhunterworld.com/img/c_302.webp',
            description:
                'Planet Befall\ngrants nearby characters on the field a Jade Shield when it descends.',
            level: 2,
        },
        {
            name: 'Jade, Shimmering through Darkness',
            image: 'https://genshin.honeyhunterworld.com/img/c_303.webp',
            description:
                'Increases the Level of\nDominus Lapidis\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Topaz, Unbreakable and Fearless',
            image: 'https://genshin.honeyhunterworld.com/img/c_304.webp',
            description:
                "Increases\nPlanet Befall\n's AoE by 20% and increases the duration of Planet Befall's Petrification effect by 2s.",
            level: 4,
        },
        {
            name: 'Lazuli, Herald of the Order',
            image: 'https://genshin.honeyhunterworld.com/img/c_305.webp',
            description:
                'Increases the Level of\nPlanet Befall\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Chrysos, Bounty of Dominator',
            image: 'https://genshin.honeyhunterworld.com/img/c_306.webp',
            description:
                "When the Jade Shield takes DMG, 40% of that incoming DMG is converted to HP for the current character.\nA single instance of regeneration cannot exceed 8% of that character's Max HP.",
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default Zhongli
