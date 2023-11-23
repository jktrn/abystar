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

const Cyno: Character = {
    name: 'Cyno',
    icon: '/images/characters/cyno.png',
    weapon: 'Polearm',
    vision: 'Electro',
    rarity: 5,
    description:
        'The General Mahamatra in charge of supervising the researchers of the Akademiya. It is said that when he gets down to work, the General Mahamatra is even more efficient than the "Great Vayuvyastra" made by the Kshahrewar.',
    occupation: 'Temple of Silence',
    baseStats: {
        '1/20': {
            'Base HP': '972',
            'Base ATK': '24.76',
            'Base DEF': '66.89',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '0%',
        },
        '20/20': {
            'Base HP': '2522',
            'Base ATK': '64.24',
            'Base DEF': '173.51',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '0%',
        },
        '20/40': {
            'Base HP': '3356',
            'Base ATK': '85.47',
            'Base DEF': '230.87',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '0%',
        },
        '40/40': {
            'Base HP': '5022',
            'Base ATK': '127.89',
            'Base DEF': '345.45',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '0%',
        },
        '40/50': {
            'Base HP': '5614',
            'Base ATK': '142.98',
            'Base DEF': '386.2',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '9.6%',
        },
        '50/50': {
            'Base HP': '6459',
            'Base ATK': '164.5',
            'Base DEF': '444.33',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '9.6%',
        },
        '50/60': {
            'Base HP': '7249',
            'Base ATK': '184.61',
            'Base DEF': '498.66',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '19.2%',
        },
        '60/60': {
            'Base HP': '8103',
            'Base ATK': '206.36',
            'Base DEF': '557.39',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '19.2%',
        },
        '60/70': {
            'Base HP': '8695',
            'Base ATK': '221.44',
            'Base DEF': '598.14',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '19.2%',
        },
        '70/70': {
            'Base HP': '9557',
            'Base ATK': '243.38',
            'Base DEF': '657.41',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '19.2%',
        },
        '70/80': {
            'Base HP': '10149',
            'Base ATK': '258.47',
            'Base DEF': '698.16',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '28.8%',
        },
        '80/80': {
            'Base HP': '11020',
            'Base ATK': '280.66',
            'Base DEF': '758.09',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '28.8%',
        },
        '80/90': {
            'Base HP': '11613',
            'Base ATK': '295.74',
            'Base DEF': '798.84',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '38.4%',
        },
        '90/90': {
            'Base HP': '12491',
            'Base ATK': '318.11',
            'Base DEF': '859.24',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '38.4%',
        },
    },
    activeSkills: [
        {
            name: "Normal Attack: Invoker's Spear",
            image: 'https://genshin.honeyhunterworld.com/img/s_713101.webp',
            description:
                'Normal Attack\nPerforms up to 4 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '49.26%',
                    Lv2: '53.27%',
                    Lv3: '57.28%',
                    Lv4: '63%',
                    Lv5: '67.01%',
                    Lv6: '71.6%',
                    Lv7: '77.9%',
                    Lv8: '84.2%',
                    Lv9: '90.5%',
                    Lv10: '97.37%',
                    Lv11: '104.24%',
                    Lv12: '111.12%',
                    Lv13: '117.99%',
                    Lv14: '124.86%',
                    Lv15: '131.73%',
                },
                '2-Hit DMG': {
                    Lv1: '47.92%',
                    Lv2: '51.82%',
                    Lv3: '55.72%',
                    Lv4: '61.29%',
                    Lv5: '65.19%',
                    Lv6: '69.65%',
                    Lv7: '75.78%',
                    Lv8: '81.91%',
                    Lv9: '88.04%',
                    Lv10: '94.73%',
                    Lv11: '101.41%',
                    Lv12: '108.1%',
                    Lv13: '114.79%',
                    Lv14: '121.47%',
                    Lv15: '128.16%',
                },
                '3-Hit DMG': {
                    Lv1: '58.62%',
                    Lv2: '63.38%',
                    Lv3: '68.16%',
                    Lv4: '74.96%',
                    Lv5: '79.74%',
                    Lv6: '85.20%',
                    Lv7: '92.68%',
                    Lv8: '100.18%',
                    Lv9: '107.68%',
                    Lv10: '115.86%',
                    Lv11: '124.04%',
                    Lv12: '132.22%',
                    Lv13: '140.40%',
                    Lv14: '148.58%',
                    Lv15: '156.76%',
                },
                '4-Hit DMG': {
                    Lv1: '75.89%',
                    Lv2: '82.07%',
                    Lv3: '88.24%',
                    Lv4: '97.07%',
                    Lv5: '103.25%',
                    Lv6: '110.31%',
                    Lv7: '120.01%',
                    Lv8: '129.72%',
                    Lv9: '139.43%',
                    Lv10: '150.02%',
                    Lv11: '160.61%',
                    Lv12: '171.2%',
                    Lv13: '181.78%',
                    Lv14: '192.37%',
                    Lv15: '202.96%',
                },
                'Charged Attack DMG': {
                    Lv1: '122.38%',
                    Lv2: '132.34%',
                    Lv3: '142.3%',
                    Lv4: '156.53%',
                    Lv5: '166.49%',
                    Lv6: '177.87%',
                    Lv7: '193.53%',
                    Lv8: '209.18%',
                    Lv9: '224.83%',
                    Lv10: '241.91%',
                    Lv11: '258.99%',
                    Lv12: '276.06%',
                    Lv13: '293.14%',
                    Lv14: '310.21%',
                    Lv15: '327.29%',
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
            name: 'Secret Rite: Chasmic Soulfarer',
            image: 'https://genshin.honeyhunterworld.com/img/s_713201.webp',
            description:
                'Performs a swift thrust, dealing\nElectro DMG\nto opponents along the path.\nWhen Cyno is under the Pactsworn Pathclearer state triggered by Sacred Rite: Wolf\'s Swiftness, he will instead unleash a\nMortuary Rite\nthat deals thunderous\nAoE Electro DMG\nand extends the duration of Pactsworn Pathclearer.\n"This judgment brooks no choice. There is no rejection or acceptance here... We have both long been bound up in this conviction."',
            data: {
                'Skill DMG': {
                    Lv1: '130.4%',
                    Lv2: '140.18%',
                    Lv3: '149.96%',
                    Lv4: '163%',
                    Lv5: '172.78%',
                    Lv6: '182.56%',
                    Lv7: '195.6%',
                    Lv8: '208.64%',
                    Lv9: '221.68%',
                    Lv10: '234.72%',
                    Lv11: '247.76%',
                    Lv12: '260.8%',
                    Lv13: '277.1%',
                    Lv14: '293.4%',
                    Lv15: '309.7%',
                },
                'Mortuary Rite DMG': {
                    Lv1: '156.8%',
                    Lv2: '168.56%',
                    Lv3: '180.32%',
                    Lv4: '196%',
                    Lv5: '207.76%',
                    Lv6: '219.52%',
                    Lv7: '235.2%',
                    Lv8: '250.88%',
                    Lv9: '266.56%',
                    Lv10: '282.24%',
                    Lv11: '297.92%',
                    Lv12: '313.6%',
                    Lv13: '333.2%',
                    Lv14: '352.8%',
                    Lv15: '372.4%',
                },
                'Pactsworn Pathclearer Duration Bonus': {
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
                    Lv1: '7.5s',
                    Lv2: '7.5s',
                    Lv3: '7.5s',
                    Lv4: '7.5s',
                    Lv5: '7.5s',
                    Lv6: '7.5s',
                    Lv7: '7.5s',
                    Lv8: '7.5s',
                    Lv9: '7.5s',
                    Lv10: '7.5s',
                    Lv11: '7.5s',
                    Lv12: '7.5s',
                    Lv13: '7.5s',
                    Lv14: '7.5s',
                    Lv15: '7.5s',
                },
                'Mortuary Rite CD': {
                    Lv1: '3s',
                    Lv2: '3s',
                    Lv3: '3s',
                    Lv4: '3s',
                    Lv5: '3s',
                    Lv6: '3s',
                    Lv7: '3s',
                    Lv8: '3s',
                    Lv9: '3s',
                    Lv10: '3s',
                    Lv11: '3s',
                    Lv12: '3s',
                    Lv13: '3s',
                    Lv14: '3s',
                    Lv15: '3s',
                },
            },
        },
        {
            name: "Sacred Rite: Wolf's Swiftness",
            image: 'https://genshin.honeyhunterworld.com/img/s_713901.webp',
            description:
                "Calls upon a divine spirit to indwell him, morphing into the Pactsworn Pathclearer.\nPactsworn Pathclearer\nCyno's Normal, Charged, and Plunging Attacks will be converted to\nElectro DMG\nthat cannot be overridden.\n\u00b7Cyno's Elemental Mastery and resistance to interruption will increase, and he gains immunity to Electro-Charged DMG.\nThis effect will be canceled when Cyno leaves the field and lasts a maximum of 18s.\nThe secret rituals passed down within the ancient nation are as a final judgment to the General Mahamatra.\nWhether now or in the past, whether great storm or serpent, none shall shake the majesty of the law.",
            data: {
                '1-Hit DMG': {
                    Lv1: '78.28%',
                    Lv2: '84.66%',
                    Lv3: '91.03%',
                    Lv4: '100.13%',
                    Lv5: '106.5%',
                    Lv6: '113.78%',
                    Lv7: '123.8%',
                    Lv8: '133.81%',
                    Lv9: '143.82%',
                    Lv10: '154.75%',
                    Lv11: '165.67%',
                    Lv12: '176.59%',
                    Lv13: '187.52%',
                    Lv14: '198.44%',
                    Lv15: '209.36%',
                },
                '2-Hit DMG': {
                    Lv1: '82.47%',
                    Lv2: '89.18%',
                    Lv3: '95.89%',
                    Lv4: '105.48%',
                    Lv5: '112.2%',
                    Lv6: '119.87%',
                    Lv7: '130.42%',
                    Lv8: '140.96%',
                    Lv9: '151.51%',
                    Lv10: '163.02%',
                    Lv11: '174.53%',
                    Lv12: '186.03%',
                    Lv13: '197.54%',
                    Lv14: '209.05%',
                    Lv15: '220.56%',
                },
                '3-Hit DMG': {
                    Lv1: '104.63%',
                    Lv2: '113.15%',
                    Lv3: '121.67%',
                    Lv4: '133.83%',
                    Lv5: '142.35%',
                    Lv6: '152.08%',
                    Lv7: '165.47%',
                    Lv8: '178.85%',
                    Lv9: '192.23%',
                    Lv10: '206.83%',
                    Lv11: '221.43%',
                    Lv12: '236.03%',
                    Lv13: '250.63%',
                    Lv14: '265.23%',
                    Lv15: '279.83%',
                },
                '4-Hit DMG': {
                    Lv1: '103.38%',
                    Lv2: '111.80%',
                    Lv3: '120.22%',
                    Lv4: '132.24%',
                    Lv5: '140.66%',
                    Lv6: '150.28%',
                    Lv7: '163.50%',
                    Lv8: '176.72%',
                    Lv9: '189.94%',
                    Lv10: '204.38%',
                    Lv11: '218.80%',
                    Lv12: '233.22%',
                    Lv13: '247.66%',
                    Lv14: '262.08%',
                    Lv15: '276.50%',
                },
                '5-Hit DMG': {
                    Lv1: '130.84%',
                    Lv2: '141.49%',
                    Lv3: '152.15%',
                    Lv4: '167.36%',
                    Lv5: '178.01%',
                    Lv6: '190.18%',
                    Lv7: '206.92%',
                    Lv8: '223.65%',
                    Lv9: '240.39%',
                    Lv10: '258.65%',
                    Lv11: '276.9%',
                    Lv12: '295.16%',
                    Lv13: '313.42%',
                    Lv14: '331.68%',
                    Lv15: '349.93%',
                },
                'Charged Attack DMG': {
                    Lv1: '101.05%',
                    Lv2: '109.27%',
                    Lv3: '117.5%',
                    Lv4: '129.25%',
                    Lv5: '137.48%',
                    Lv6: '146.88%',
                    Lv7: '159.8%',
                    Lv8: '172.72%',
                    Lv9: '185.65%',
                    Lv10: '199.75%',
                    Lv11: '213.85%',
                    Lv12: '227.95%',
                    Lv13: '242.05%',
                    Lv14: '256.15%',
                    Lv15: '270.25%',
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
                'Elemental Mastery Bonus': {
                    Lv1: '100',
                    Lv2: '100',
                    Lv3: '100',
                    Lv4: '100',
                    Lv5: '100',
                    Lv6: '100',
                    Lv7: '100',
                    Lv8: '100',
                    Lv9: '100',
                    Lv10: '100',
                    Lv11: '100',
                    Lv12: '100',
                    Lv13: '100',
                    Lv14: '100',
                    Lv15: '100',
                },
                'Basic Duration': {
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
            name: 'The Gift of Silence',
            image: 'https://genshin.honeyhunterworld.com/img/p_712301.webp',
            description:
                'Gains 25% more rewards when dispatched on a Sumeru Expedition for 20 hours.',
        },
        {
            name: 'Featherfall Judgment',
            image: 'https://genshin.honeyhunterworld.com/img/p_712101.webp',
            description:
                "When Cyno is in the Pactsworn Pathclearer state activated by\nSacred Rite: Wolf's Swiftness\n, Cyno will enter the Endseer stance at intervals. If he activates\nSecret Rite: Chasmic Soulfarer\nwhile affected by this stance, he will activate the Judication effect, increasing the DMG of this Secret Rite: Chasmic Soulfarer by 35%, and firing off 3 Duststalker Bolts that deal 100% of Cyno's ATK as\nElectro DMG.\nDuststalker Bolt DMG is considered Elemental Skill DMG.",
        },
        {
            name: 'Authority Over the Nine Bows',
            image: 'https://genshin.honeyhunterworld.com/img/p_712201.webp',
            description:
                "Cyno's DMG values will be increased based on his Elemental Mastery as follows:\n\u00b7Pactsworn Pathclearer's Normal Attack DMG is increased by 150% of his Elemental Mastery.\n\u00b7Duststalker Bolt DMG from his Passive Talent Featherfall Judgment is increased by 250% of his Elemental Mastery.",
        },
    ],
    constellations: [
        {
            name: 'Ordinance: Unceasing Vigil',
            image: 'https://genshin.honeyhunterworld.com/img/c_711.webp',
            description:
                'After using\nSacred Rite: Wolf\'s Swiftness\n, Cyno\'s Normal Attack SPD will be increased by 20% for 10s. If the Judication effect of his Passive Talent Featherfall Judgment is triggered during\nSecret Rite: Chasmic Soulfarer\n, the duration of this increase will be refreshed.\nYou need to unlock the Passive Talent "Featherfall Judgment."',
            level: 1,
        },
        {
            name: 'Ceremony: Homecoming of Spirits',
            image: 'https://genshin.honeyhunterworld.com/img/c_712.webp',
            description:
                "When Cyno's Normal Attacks hit opponents, his\nElectro DMG Bonus\nwill increase by 10% for 4s. This effect can be triggered once every 0.1s. Max 5 stacks.",
            level: 2,
        },
        {
            name: 'Precept: Lawful Enforcer',
            image: 'https://genshin.honeyhunterworld.com/img/c_713.webp',
            description:
                "Increases the Level of\nSacred Rite: Wolf's Swiftness\nby 3.\nMaximum upgrade level is 15.",
            level: 3,
        },
        {
            name: 'Austerity: Forbidding Guard',
            image: 'https://genshin.honeyhunterworld.com/img/c_714.webp',
            description:
                "When Cyno is in the Pactsworn Pathclearer state triggered by\nSacred Rite: Wolf's Swiftness\n, after he triggers Electro-Charged, Superconduct, Overloaded, Quicken, Aggravate, Hyperbloom, or an Electro Swirl reaction, he will restore 3 Elemental Energy for all nearby party members (except himself.)\nThis effect can occur 5 times within one use of\nSacred Rite: Wolf's Swiftness\n.",
            level: 4,
        },
        {
            name: 'Funerary Rite: The Passing of Starlight',
            image: 'https://genshin.honeyhunterworld.com/img/c_715.webp',
            description:
                'Increases the Level of\nSecret Rite: Chasmic Soulfarer\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Raiment: Just Scales',
            image: 'https://genshin.honeyhunterworld.com/img/c_716.webp',
            description:
                'After using\nSacred Rite: Wolf\'s Swiftness\nor triggering the Judication effect of the Passive Talent "Featherfall Judgment," Cyno will gain 4 stacks of the "Day of the Jackal" effect. When he hits opponents with Normal Attacks, he will consume 1 stack of "Day of the Jackal" to fire off one Duststalker Bolt.\n"Day of the Jackal" lasts for 8s. Max 8 stacks. It will be canceled once Pactsworn Pathclearer ends.\nA maximum of 1 Duststalker Bolt can be unleashed this way every 0.4s.\nYou must first unlock the Passive Talent "Featherfall Judgment."',
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default Cyno
