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

const RaidenShogun: Character = {
    name: 'Raiden Shogun',
    icon: '/images/characters/raiden-shogun.png',
    weapon: 'Polearm',
    vision: 'Electro',
    rarity: 5,
    description:
        'Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.',
    occupation: 'Inazuma City',
    baseStats: {
        '1/20': {
            'Base HP': 1005.0,
            'Base ATK': 26.25,
            'Base DEF': 61.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '20/20': {
            'Base HP': 2606.0,
            'Base ATK': 68.1,
            'Base DEF': 159.39,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '20/40': {
            'Base HP': 3468.0,
            'Base ATK': 90.61,
            'Base DEF': 212.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '40/40': {
            'Base HP': 5189.0,
            'Base ATK': 135.59,
            'Base DEF': 317.33,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '40/50': {
            'Base HP': 5801.0,
            'Base ATK': 151.58,
            'Base DEF': 354.76,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.08,
        },
        '50/50': {
            'Base HP': 6675.0,
            'Base ATK': 174.39,
            'Base DEF': 408.16,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.08,
        },
        '50/60': {
            'Base HP': 7491.0,
            'Base ATK': 195.72,
            'Base DEF': 458.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.16,
        },
        '60/60': {
            'Base HP': 8373.0,
            'Base ATK': 218.77,
            'Base DEF': 512.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.16,
        },
        '60/70': {
            'Base HP': 8985.0,
            'Base ATK': 234.76,
            'Base DEF': 549.46,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.16,
        },
        '70/70': {
            'Base HP': 9875.0,
            'Base ATK': 258.02,
            'Base DEF': 603.9,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.16,
        },
        '70/80': {
            'Base HP': 10487.0,
            'Base ATK': 274.02,
            'Base DEF': 641.33,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.24,
        },
        '80/80': {
            'Base HP': 11388.0,
            'Base ATK': 297.54,
            'Base DEF': 696.39,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.24,
        },
        '80/90': {
            'Base HP': 12000.0,
            'Base ATK': 313.53,
            'Base DEF': 733.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.32,
        },
        '90/90': {
            'Base HP': 12907.0,
            'Base ATK': 337.24,
            'Base DEF': 789.31,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.32,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Origin',
            image: 'https://genshin.honeyhunterworld.com/img/s_523101.webp',
            description:
                'Normal Attack\nPerforms up to 5 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to perform an upward slash.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '39.65%',
                    Lv2: '42.87%',
                    Lv3: '46.1%',
                    Lv4: '50.71%',
                    Lv5: '53.94%',
                    Lv6: '57.63%',
                    Lv7: '62.7%',
                    Lv8: '67.77%',
                    Lv9: '72.84%',
                    Lv10: '78.37%',
                    Lv11: '84.71%',
                    Lv12: '92.16%',
                    Lv13: '99.62%',
                    Lv14: '107.07%',
                    Lv15: '115.2%',
                },
                '2-Hit DMG': {
                    Lv1: '39.73%',
                    Lv2: '42.97%',
                    Lv3: '46.2%',
                    Lv4: '50.82%',
                    Lv5: '54.05%',
                    Lv6: '57.75%',
                    Lv7: '62.83%',
                    Lv8: '67.91%',
                    Lv9: '73%',
                    Lv10: '78.54%',
                    Lv11: '84.89%',
                    Lv12: '92.36%',
                    Lv13: '99.83%',
                    Lv14: '107.3%',
                    Lv15: '115.45%',
                },
                '3-Hit DMG': {
                    Lv1: '49.88%',
                    Lv2: '53.94%',
                    Lv3: '58%',
                    Lv4: '63.8%',
                    Lv5: '67.86%',
                    Lv6: '72.5%',
                    Lv7: '78.88%',
                    Lv8: '85.26%',
                    Lv9: '91.64%',
                    Lv10: '98.6%',
                    Lv11: '106.58%',
                    Lv12: '115.95%',
                    Lv13: '125.33%',
                    Lv14: '134.71%',
                    Lv15: '144.94%',
                },
                '4-Hit DMG': {
                    Lv1: '57.96%',
                    Lv2: '62.68%',
                    Lv3: '67.40%',
                    Lv4: '74.14%',
                    Lv5: '78.86%',
                    Lv6: '84.24%',
                    Lv7: '91.66%',
                    Lv8: '99.08%',
                    Lv9: '106.50%',
                    Lv10: '114.58%',
                    Lv11: '123.84%',
                    Lv12: '134.74%',
                    Lv13: '145.64%',
                    Lv14: '156.54%',
                    Lv15: '168.44%',
                },
                '5-Hit DMG': {
                    Lv1: '65.45%',
                    Lv2: '70.77%',
                    Lv3: '76.1%',
                    Lv4: '83.71%',
                    Lv5: '89.04%',
                    Lv6: '95.13%',
                    Lv7: '103.5%',
                    Lv8: '111.87%',
                    Lv9: '120.24%',
                    Lv10: '129.37%',
                    Lv11: '139.83%',
                    Lv12: '152.14%',
                    Lv13: '164.44%',
                    Lv14: '176.75%',
                    Lv15: '190.17%',
                },
                'Charged Attack DMG': {
                    Lv1: '99.59%',
                    Lv2: '107.69%',
                    Lv3: '115.8%',
                    Lv4: '127.38%',
                    Lv5: '135.49%',
                    Lv6: '144.75%',
                    Lv7: '157.49%',
                    Lv8: '170.23%',
                    Lv9: '182.96%',
                    Lv10: '196.86%',
                    Lv11: '212.78%',
                    Lv12: '231.51%',
                    Lv13: '250.23%',
                    Lv14: '268.96%',
                    Lv15: '289.38%',
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
            name: 'Transcendence: Baleful Omen',
            image: 'https://genshin.honeyhunterworld.com/img/s_523201.webp',
            description:
                "The Raiden Shogun unveils a shard of her Euthymia, dealing\nElectro DMG\nto nearby opponents, and granting nearby party members the Eye of Stormy Judgment.\nEye of Stormy Judgment\n\u00b7When characters with this buff attack and deal DMG to opponents, the Eye will unleash a coordinated attack, dealing\nAoE Electro DMG\nat the opponent's position.\n\u00b7Characters who gain the Eye of Stormy Judgment will have their Elemental Burst DMG increased based on the Energy Cost of the Elemental Burst during the Eye's duration.\nThe Eye can initiate one coordinated attack every 0.9s per party.\nCoordinated attacks generated by characters not controlled by you deal 20% of the normal DMG.\nBeings of great divinity might affect all that they survey, and the Electro Archon can manipulate the very inauspicious stars themselves to defend her retainers and bring a thundering sentence down on their foes.",
            data: {
                'Skill DMG': {
                    Lv1: '117.2%',
                    Lv2: '125.99%',
                    Lv3: '134.78%',
                    Lv4: '146.5%',
                    Lv5: '155.29%',
                    Lv6: '164.08%',
                    Lv7: '175.8%',
                    Lv8: '187.52%',
                    Lv9: '199.24%',
                    Lv10: '210.96%',
                    Lv11: '222.68%',
                    Lv12: '234.4%',
                    Lv13: '249.05%',
                    Lv14: '263.7%',
                    Lv15: '278.35%',
                },
                'Coordinated ATK DMG': {
                    Lv1: '42%',
                    Lv2: '45.15%',
                    Lv3: '48.3%',
                    Lv4: '52.5%',
                    Lv5: '55.65%',
                    Lv6: '58.8%',
                    Lv7: '63%',
                    Lv8: '67.2%',
                    Lv9: '71.4%',
                    Lv10: '75.6%',
                    Lv11: '79.8%',
                    Lv12: '84%',
                    Lv13: '89.25%',
                    Lv14: '94.5%',
                    Lv15: '99.75%',
                },
                Duration: {
                    Lv1: '25s',
                    Lv2: '25s',
                    Lv3: '25s',
                    Lv4: '25s',
                    Lv5: '25s',
                    Lv6: '25s',
                    Lv7: '25s',
                    Lv8: '25s',
                    Lv9: '25s',
                    Lv10: '25s',
                    Lv11: '25s',
                    Lv12: '25s',
                    Lv13: '25s',
                    Lv14: '25s',
                    Lv15: '25s',
                },
                'Elemental Burst DMG Bonus': {
                    Lv1: '0.22% Per Energy',
                    Lv2: '0.23% Per Energy',
                    Lv3: '0.24% Per Energy',
                    Lv4: '0.25% Per Energy',
                    Lv5: '0.26% Per Energy',
                    Lv6: '0.27% Per Energy',
                    Lv7: '0.28% Per Energy',
                    Lv8: '0.29% Per Energy',
                    Lv9: '0.3% Per Energy',
                    Lv10: '0.3% Per Energy',
                    Lv11: '0.3% Per Energy',
                    Lv12: '0.3% Per Energy',
                    Lv13: '0.3% Per Energy',
                    Lv14: '0.3% Per Energy',
                    Lv15: '0.3% Per Energy',
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
            name: 'Secret Art: Musou Shinsetsu',
            image: 'https://genshin.honeyhunterworld.com/img/s_523901.webp',
            description:
                'Gathering truths unnumbered and wishes uncounted, the Raiden Shogun unleashes the Musou no Hitotachi and deals\nAoE Electro DMG\n, using Musou Isshin in combat for a certain duration afterward. The DMG dealt by Musou no Hitotachi and Musou Isshin\'s attacks will be increased based on the number of Chakra Desiderata\'s Resolve stacks consumed when this skill is used.\nMusou Isshin\nWhile in this state, the Raiden Shogun will wield her tachi in battle, while her Normal, Charged, and Plunging Attacks will be infused with\nElectro DMG\n, which cannot be overridden. When such attacks hit opponents, she will regenerate Energy for all nearby party members. Energy can be restored this way once every 1s, and this effect can be triggered 5 times throughout this skill\'s duration.\nWhile in this state, the Raiden Shogun\'s resistance to interruption is increased, and she is immune to\nElectro-Charged\nreaction DMG.\nWhile Musou Isshin is active, the Raiden Shogun\'s Normal, Charged, and Plunging Attack DMG will be considered Elemental Burst DMG.\nThe effects of Musou Isshin will be cleared when the Raiden Shogun leaves the field.\nChakra Desiderata\nWhen nearby party members (excluding the Raiden Shogun herself) use their Elemental Bursts, the Raiden Shogun will build up Resolve stacks based on the Energy Cost of these Elemental Bursts.\nThe maximum number of Resolve stacks is 60.\nThe Resolve gained by Chakra Desiderata will be cleared 300s after the Raiden Shogun leaves the field.\nThis is the Raiden Shogun\'s new secret technique. Abandoning the void-like "Musou," she now shoulders a new "Musou" \u2014 the dreams and ambitions of all. Just as "shinsetsu," "the truth," also means "the new," so too has Inazuma entered a new chapter.',
            data: {
                'Musou no Hitotachi Base DMG': {
                    Lv1: '400.8%',
                    Lv2: '430.86%',
                    Lv3: '460.92%',
                    Lv4: '501%',
                    Lv5: '531.06%',
                    Lv6: '561.12%',
                    Lv7: '601.2%',
                    Lv8: '641.28%',
                    Lv9: '681.36%',
                    Lv10: '721.44%',
                    Lv11: '761.52%',
                    Lv12: '801.6%',
                    Lv13: '851.7%',
                    Lv14: '901.8%',
                    Lv15: '951.9%',
                },
                'Resolve Bonus': {
                    Lv1: '3.89% Initial / 0.73% ATK DMG Per Stack',
                    Lv2: '4.18% Initial / 0.78% ATK DMG Per Stack',
                    Lv3: '4.47% Initial / 0.84% ATK DMG Per Stack',
                    Lv4: '4.86% Initial / 0.91% ATK DMG Per Stack',
                    Lv5: '5.15% Initial / 0.96% ATK DMG Per Stack',
                    Lv6: '5.44% Initial / 1.02% ATK DMG Per Stack',
                    Lv7: '5.83% Initial / 1.09% ATK DMG Per Stack',
                    Lv8: '6.22% Initial / 1.16% ATK DMG Per Stack',
                    Lv9: '6.61% Initial / 1.23% ATK DMG Per Stack',
                    Lv10: '7% Initial / 1.31% ATK DMG Per Stack',
                    Lv11: '7.39% Initial / 1.38% ATK DMG Per Stack',
                    Lv12: '7.78% Initial / 1.45% ATK DMG Per Stack',
                    Lv13: '8.26% Initial / 1.54% ATK DMG Per Stack',
                    Lv14: '8.75% Initial / 1.63% ATK DMG Per Stack',
                    Lv15: '9.23% Initial / 1.72% ATK DMG Per Stack',
                },
                'Resolve Stacks Gained': {
                    Lv1: '0.15 Per Energy Consumed',
                    Lv2: '0.16 Per Energy Consumed',
                    Lv3: '0.16 Per Energy Consumed',
                    Lv4: '0.17 Per Energy Consumed',
                    Lv5: '0.17 Per Energy Consumed',
                    Lv6: '0.18 Per Energy Consumed',
                    Lv7: '0.18 Per Energy Consumed',
                    Lv8: '0.19 Per Energy Consumed',
                    Lv9: '0.19 Per Energy Consumed',
                    Lv10: '0.2 Per Energy Consumed',
                    Lv11: '0.2 Per Energy Consumed',
                    Lv12: '0.2 Per Energy Consumed',
                    Lv13: '0.2 Per Energy Consumed',
                    Lv14: '0.2 Per Energy Consumed',
                    Lv15: '0.2 Per Energy Consumed',
                },
                '1-Hit DMG': {
                    Lv1: '44.74%',
                    Lv2: '47.79%',
                    Lv3: '50.84%',
                    Lv4: '54.9%',
                    Lv5: '57.96%',
                    Lv6: '61.51%',
                    Lv7: '66.09%',
                    Lv8: '70.66%',
                    Lv9: '75.24%',
                    Lv10: '79.82%',
                    Lv11: '84.39%',
                    Lv12: '88.97%',
                    Lv13: '93.54%',
                    Lv14: '98.12%',
                    Lv15: '102.69%',
                },
                '2-Hit DMG': {
                    Lv1: '43.96%',
                    Lv2: '46.95%',
                    Lv3: '49.95%',
                    Lv4: '53.95%',
                    Lv5: '56.94%',
                    Lv6: '60.44%',
                    Lv7: '64.93%',
                    Lv8: '69.43%',
                    Lv9: '73.93%',
                    Lv10: '78.42%',
                    Lv11: '82.92%',
                    Lv12: '87.41%',
                    Lv13: '91.91%',
                    Lv14: '96.4%',
                    Lv15: '100.9%',
                },
                '3-Hit DMG': {
                    Lv1: '53.82%',
                    Lv2: '57.49%',
                    Lv3: '61.16%',
                    Lv4: '66.05%',
                    Lv5: '69.72%',
                    Lv6: '74%',
                    Lv7: '79.51%',
                    Lv8: '85.01%',
                    Lv9: '90.52%',
                    Lv10: '96.02%',
                    Lv11: '101.53%',
                    Lv12: '107.03%',
                    Lv13: '112.54%',
                    Lv14: '118.04%',
                    Lv15: '123.55%',
                },
                '4-Hit DMG': {
                    Lv1: '61.87%',
                    Lv2: '66.08%',
                    Lv3: '70.30%',
                    Lv4: '75.93%',
                    Lv5: '80.14%',
                    Lv6: '85.06%',
                    Lv7: '91.39%',
                    Lv8: '97.72%',
                    Lv9: '104.05%',
                    Lv10: '110.37%',
                    Lv11: '116.70%',
                    Lv12: '123.03%',
                    Lv13: '129.35%',
                    Lv14: '135.68%',
                    Lv15: '142.00%',
                },
                '5-Hit DMG': {
                    Lv1: '73.94%',
                    Lv2: '78.99%',
                    Lv3: '84.03%',
                    Lv4: '90.75%',
                    Lv5: '95.79%',
                    Lv6: '101.67%',
                    Lv7: '109.24%',
                    Lv8: '116.8%',
                    Lv9: '124.36%',
                    Lv10: '131.92%',
                    Lv11: '139.48%',
                    Lv12: '147.05%',
                    Lv13: '154.61%',
                    Lv14: '162.17%',
                    Lv15: '169.73%',
                },
                'Charged Attack DMG': {
                    Lv1: '135.96%',
                    Lv2: '145.23%',
                    Lv3: '154.50%',
                    Lv4: '166.86%',
                    Lv5: '176.13%',
                    Lv6: '186.94%',
                    Lv7: '200.85%',
                    Lv8: '214.76%',
                    Lv9: '228.66%',
                    Lv10: '242.57%',
                    Lv11: '256.47%',
                    Lv12: '270.37%',
                    Lv13: '284.28%',
                    Lv14: '298.18%',
                    Lv15: '312.09%',
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
                'Musou Isshin Energy Restoration': {
                    Lv1: '1.6',
                    Lv2: '1.7',
                    Lv3: '1.8',
                    Lv4: '1.9',
                    Lv5: '2',
                    Lv6: '2.1',
                    Lv7: '2.2',
                    Lv8: '2.3',
                    Lv9: '2.4',
                    Lv10: '2.5',
                    Lv11: '2.5',
                    Lv12: '2.5',
                    Lv13: '2.5',
                    Lv14: '2.5',
                    Lv15: '2.5',
                },
                'Musou Isshin Duration': {
                    Lv1: '7s',
                    Lv2: '7s',
                    Lv3: '7s',
                    Lv4: '7s',
                    Lv5: '7s',
                    Lv6: '7s',
                    Lv7: '7s',
                    Lv8: '7s',
                    Lv9: '7s',
                    Lv10: '7s',
                    Lv11: '7s',
                    Lv12: '7s',
                    Lv13: '7s',
                    Lv14: '7s',
                    Lv15: '7s',
                },
                CD: {
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
                'Energy Cost': {
                    Lv1: '90',
                    Lv2: '90',
                    Lv3: '90',
                    Lv4: '90',
                    Lv5: '90',
                    Lv6: '90',
                    Lv7: '90',
                    Lv8: '90',
                    Lv9: '90',
                    Lv10: '90',
                    Lv11: '90',
                    Lv12: '90',
                    Lv13: '90',
                    Lv14: '90',
                    Lv15: '90',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'All-Preserver',
            image: 'https://genshin.honeyhunterworld.com/img/p_522501.webp',
            description:
                'Mora expended when ascending Swords and Polearms is decreased by 50%.',
        },
        {
            name: '\u6682\u7f3a',
            image: 'https://genshin.honeyhunterworld.com/img/p_522301.webp',
            description: '\u65e0\u6cd5\u53c2\u4e0e\u6599\u7406',
        },
        {
            name: 'Wishes Unnumbered',
            image: 'https://genshin.honeyhunterworld.com/img/p_522101.webp',
            description:
                'When nearby party members gain Elemental Orbs or Particles,\nChakra Desiderata\ngains 2 Resolve stacks.\nThis effect can occur once every 3s.',
        },
        {
            name: 'Enlightened One',
            image: 'https://genshin.honeyhunterworld.com/img/p_522201.webp',
            description:
                'Each 1% above 100% Energy Recharge that the Raiden Shogun possesses grants her:\n\u00b70.6% greater Energy restoration from\nMusou Isshin\n\u00b70.4%\nElectro DMG Bonus\n.',
        },
    ],
    constellations: [
        {
            name: 'Ominous Inscription',
            image: 'https://genshin.honeyhunterworld.com/img/c_521.webp',
            description:
                'Chakra Desiderata\nwill gather Resolve even faster. When\nElectro\ncharacters use their Elemental Bursts, the Resolve gained is increased by 80%. When characters of other Elemental Types use their Elemental Bursts, the Resolve gained is increased by 20%.',
            level: 1,
        },
        {
            name: 'Steelbreaker',
            image: 'https://genshin.honeyhunterworld.com/img/c_522.webp',
            description:
                "While using Musou no Hitotachi and in the Musou Isshin state applied by\nSecret Art: Musou Shinsetsu\n, the Raiden Shogun's attacks ignore 60% of opponents' DEF.",
            level: 2,
        },
        {
            name: 'Shinkage Bygones',
            image: 'https://genshin.honeyhunterworld.com/img/c_523.webp',
            description:
                'Increases the Level of\nSecret Art: Musou Shinsetsu\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Pledge of Propriety',
            image: 'https://genshin.honeyhunterworld.com/img/c_524.webp',
            description:
                'When the\nMusou Isshin\nstate applied by\nSecret Art: Musou Shinsetsu\nexpires, all nearby party members (excluding the Raiden Shogun) gain 30% bonus ATK for 10s.',
            level: 4,
        },
        {
            name: "Shogun's Descent",
            image: 'https://genshin.honeyhunterworld.com/img/c_525.webp',
            description:
                'Increases the Level of\nTranscendence: Baleful Omen\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Wishbearer',
            image: 'https://genshin.honeyhunterworld.com/img/c_526.webp',
            description:
                "While in the\nMusou Isshin\nstate applied by\nSecret Art: Musou Shinsetsu\n, attacks by the Raiden Shogun that are considered part of her Elemental Burst will decrease all nearby party members' (not including the Raiden Shogun herself) Elemental Burst CD by 1s when they hit opponents.\nThis effect can trigger once every 1s and can trigger a total of 5 times during Musou Isshin's duration.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default RaidenShogun