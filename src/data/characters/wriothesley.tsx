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

const Wriothesley: Character = {
    name: 'Wriothesley',
    icon: '/images/characters/wriothesley.png',
    weapon: 'Catalyst',
    vision: '5532',
    rarity: 5,
    description:
        'Duke of the Fortress of Meropide, Lord Incognito of the murky depths.',
    occupation: 'Fortress of Meropide',
    baseStats: {
        '1/20': {
            'Base HP': '1058',
            'Base ATK': '24.21',
            'Base DEF': '59.41',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '0%',
        },
        '20/20': {
            'Base HP': '2745',
            'Base ATK': '62.79',
            'Base DEF': '154.11',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '0%',
        },
        '20/40': {
            'Base HP': '3652',
            'Base ATK': '83.54',
            'Base DEF': '205.05',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '0%',
        },
        '40/40': {
            'Base HP': '5465',
            'Base ATK': '125.01',
            'Base DEF': '306.82',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '0%',
        },
        '40/50': {
            'Base HP': '6110',
            'Base ATK': '139.75',
            'Base DEF': '343.02',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '9.6%',
        },
        '50/50': {
            'Base HP': '7029',
            'Base ATK': '160.79',
            'Base DEF': '394.65',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '9.6%',
        },
        '50/60': {
            'Base HP': '7889',
            'Base ATK': '180.45',
            'Base DEF': '442.91',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '19.2%',
        },
        '60/60': {
            'Base HP': '8818',
            'Base ATK': '201.7',
            'Base DEF': '495.07',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '19.2%',
        },
        '60/70': {
            'Base HP': '9462',
            'Base ATK': '216.45',
            'Base DEF': '531.27',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '19.2%',
        },
        '70/70': {
            'Base HP': '10400',
            'Base ATK': '237.89',
            'Base DEF': '583.9',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '19.2%',
        },
        '70/80': {
            'Base HP': '11045',
            'Base ATK': '252.64',
            'Base DEF': '620.1',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '28.8%',
        },
        '80/80': {
            'Base HP': '11993',
            'Base ATK': '274.33',
            'Base DEF': '673.33',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '28.8%',
        },
        '80/90': {
            'Base HP': '12637',
            'Base ATK': '289.07',
            'Base DEF': '709.53',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '38.4%',
        },
        '90/90': {
            'Base HP': '13593',
            'Base ATK': '310.93',
            'Base DEF': '763.17',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus CRIT DMG': '38.4%',
        },
    },
    activeSkills: [
        {
            name: 'Normal Attack: Forceful Fists of Frost',
            image: 'https://genshin.honeyhunterworld.com/img/s_863101.webp',
            description:
                'Normal Attack\nCoalescing frost about his fist, Wriothesley will unleash powerful\nRepelling Fists\n, performing up to 5 rapid attacks that deal\nCryo DMG\n.\nApart from this, Normal Attack combo count will not reset for a short time after using Icefang Rush or sprinting.\nCharged Attack\nConsumes a fixed amount of Stamina to leap and unleash a\nVaulting Fist\n, dealing\nAoE Cryo DMG\n.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing\nAoE Cryo DMG\nupon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '53.36%',
                    Lv2: '57.7%',
                    Lv3: '62.05%',
                    Lv4: '68.25%',
                    Lv5: '72.59%',
                    Lv6: '77.56%',
                    Lv7: '84.38%',
                    Lv8: '91.21%',
                    Lv9: '98.03%',
                    Lv10: '105.48%',
                    Lv11: '112.92%',
                    Lv12: '120.37%',
                    Lv13: '127.81%',
                    Lv14: '135.26%',
                    Lv15: '142.71%',
                },
                '2-Hit DMG': {
                    Lv1: '51.8%',
                    Lv2: '56.01%',
                    Lv3: '60.23%',
                    Lv4: '66.25%',
                    Lv5: '70.47%',
                    Lv6: '75.29%',
                    Lv7: '81.91%',
                    Lv8: '88.54%',
                    Lv9: '95.17%',
                    Lv10: '102.39%',
                    Lv11: '109.62%',
                    Lv12: '116.85%',
                    Lv13: '124.08%',
                    Lv14: '131.3%',
                    Lv15: '138.53%',
                },
                '3-Hit DMG': {
                    Lv1: '67.22%',
                    Lv2: '72.69%',
                    Lv3: '78.17%',
                    Lv4: '85.98%',
                    Lv5: '91.45%',
                    Lv6: '97.71%',
                    Lv7: '106.31%',
                    Lv8: '114.9%',
                    Lv9: '123.5%',
                    Lv10: '132.88%',
                    Lv11: '142.26%',
                    Lv12: '151.64%',
                    Lv13: '161.02%',
                    Lv14: '170.4%',
                    Lv15: '179.78%',
                },
                '4-Hit DMG': {
                    Lv1: '75.80%',
                    Lv2: '81.98%',
                    Lv3: '88.14%',
                    Lv4: '96.96%',
                    Lv5: '103.14%',
                    Lv6: '110.18%',
                    Lv7: '119.88%',
                    Lv8: '129.58%',
                    Lv9: '139.28%',
                    Lv10: '149.86%',
                    Lv11: '160.44%',
                    Lv12: '171.00%',
                    Lv13: '181.58%',
                    Lv14: '192.16%',
                    Lv15: '202.74%',
                },
                '5-Hit DMG': {
                    Lv1: '90.74%',
                    Lv2: '98.13%',
                    Lv3: '105.51%',
                    Lv4: '116.07%',
                    Lv5: '123.45%',
                    Lv6: '131.89%',
                    Lv7: '143.5%',
                    Lv8: '155.11%',
                    Lv9: '166.71%',
                    Lv10: '179.37%',
                    Lv11: '192.04%',
                    Lv12: '204.7%',
                    Lv13: '217.36%',
                    Lv14: '230.02%',
                    Lv15: '242.68%',
                },
                'Charged Attack DMG': {
                    Lv1: '152.96%',
                    Lv2: '164.43%',
                    Lv3: '175.9%',
                    Lv4: '191.2%',
                    Lv5: '202.67%',
                    Lv6: '214.14%',
                    Lv7: '229.44%',
                    Lv8: '244.74%',
                    Lv9: '260.03%',
                    Lv10: '275.33%',
                    Lv11: '290.62%',
                    Lv12: '305.92%',
                    Lv13: '325.04%',
                    Lv14: '344.16%',
                    Lv15: '363.28%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '50',
                    Lv2: '50',
                    Lv3: '50',
                    Lv4: '50',
                    Lv5: '50',
                    Lv6: '50',
                    Lv7: '50',
                    Lv8: '50',
                    Lv9: '50',
                    Lv10: '50',
                    Lv11: '50',
                    Lv12: '50',
                    Lv13: '50',
                    Lv14: '50',
                    Lv15: '50',
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
                    Lv6: '165.16%',
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
            name: 'Icefang Rush',
            image: 'https://genshin.honeyhunterworld.com/img/s_863201.webp',
            description:
                'Adjusting his breathing, rhythm, and pace, Wriothesley sprints forward a short distance, entering the\nChilling Penalty\nstate and unleashing more powerful attacks than before.\nChilling Penalty\n\u00b7Increases Wriothesley\'s interruption resistance\n\u00b7When his HP is above 50%, it will enhance the Repelling Fists of\nNormal Attack: Forceful Fists of Frost\nand increase its DMG. When such an attack hits, it will consume a fixed amount of Wriothesley\'s HP. HP can be lost this way once every 0.1s.\nThis effect will be canceled should Wriothesley leave the field.\n"Past convictions are past. It is our future choices that we must grasp."\n"Defy your fate, or else this glutton be, to pay your fate\'s due, by the crime and thee."',
            data: {
                'Enhanced Repelling Fist DMG': {
                    Lv1: '143.17% Normal Attack DMG',
                    Lv2: '145.75% Normal Attack DMG',
                    Lv3: '148.34% Normal Attack DMG',
                    Lv4: '151.7% Normal Attack DMG',
                    Lv5: '154.29% Normal Attack DMG',
                    Lv6: '156.87% Normal Attack DMG',
                    Lv7: '160.23% Normal Attack DMG',
                    Lv8: '163.59% Normal Attack DMG',
                    Lv9: '166.95% Normal Attack DMG',
                    Lv10: '170.31% Normal Attack DMG',
                    Lv11: '173.67% Normal Attack DMG',
                    Lv12: '177.03% Normal Attack DMG',
                    Lv13: '180.39% Normal Attack DMG',
                    Lv14: '183.75% Normal Attack DMG',
                    Lv15: '187.11% Normal Attack DMG',
                },
                'HP Cost': {
                    Lv1: '4.5% Max HP',
                    Lv2: '4.5% Max HP',
                    Lv3: '4.5% Max HP',
                    Lv4: '4.5% Max HP',
                    Lv5: '4.5% Max HP',
                    Lv6: '4.5% Max HP',
                    Lv7: '4.5% Max HP',
                    Lv8: '4.5% Max HP',
                    Lv9: '4.5% Max HP',
                    Lv10: '4.5% Max HP',
                    Lv11: '4.5% Max HP',
                    Lv12: '4.5% Max HP',
                    Lv13: '4.5% Max HP',
                    Lv14: '4.5% Max HP',
                    Lv15: '4.5% Max HP',
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
                    Lv1: '16s',
                    Lv2: '16s',
                    Lv3: '16s',
                    Lv4: '16s',
                    Lv5: '16s',
                    Lv6: '16s',
                    Lv7: '16s',
                    Lv8: '16s',
                    Lv9: '16s',
                    Lv10: '16s',
                    Lv11: '16s',
                    Lv12: '16s',
                    Lv13: '16s',
                    Lv14: '16s',
                    Lv15: '16s',
                },
            },
        },
        {
            name: 'Darkgold Wolfbite',
            image: 'https://genshin.honeyhunterworld.com/img/s_863901.webp',
            description:
                "Activating his boxing gloves, Wriothesley strikes out with an icy straight, then uses Icicle Impact to cause multiple instances of\nAoE Cryo DMG\nin a frontal area.\nArkhe: Ousia\nAfter Icicle Impact ends, a Surging Blade will descend upon the opponent's position, dealing Ousia-aligned\nCryo DMG\n.\nThere are some things that even the Duke of the Fortress of Meropide can do little about \u2014 for example, complicated paperwork, the trivialities of a supervisor, or even... little kids pasting a whole host of cute but difficult-to-remove stickers on his boxing gloves.",
            data: {
                'Skill DMG': {
                    Lv1: '636.00%',
                    Lv2: '683.70%',
                    Lv3: '731.40%',
                    Lv4: '795.00%',
                    Lv5: '842.70%',
                    Lv6: '890.40%',
                    Lv7: '954.00%',
                    Lv8: '1017.60%',
                    Lv9: '1081.20%',
                    Lv10: '1144.80%',
                    Lv11: '1208.40%',
                    Lv12: '1272.00%',
                    Lv13: '1351.50%',
                    Lv14: '1431.00%',
                    Lv15: '1510.50%',
                },
                'Surging Blade DMG': {
                    Lv1: '42.4%',
                    Lv2: '45.58%',
                    Lv3: '48.76%',
                    Lv4: '53%',
                    Lv5: '56.18%',
                    Lv6: '59.36%',
                    Lv7: '63.6%',
                    Lv8: '67.84%',
                    Lv9: '72.08%',
                    Lv10: '76.32%',
                    Lv11: '80.56%',
                    Lv12: '84.8%',
                    Lv13: '90.1%',
                    Lv14: '95.4%',
                    Lv15: '100.7%',
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
                'Surging Blade CD': {
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
            name: "The Duke's Grace",
            image: 'https://genshin.honeyhunterworld.com/img/p_862301.webp',
            description:
                'When Wriothesley crafts Weapon Ascension Materials, he has a 10% chance to receive double the product.',
        },
        {
            name: 'There Shall Be a Plea for Justice',
            image: 'https://genshin.honeyhunterworld.com/img/p_862101.webp',
            description:
                "When Wriothesley's HP is less than 60%, he will obtain a Gracious Rebuke. The next Charged Attack of his\nNormal Attack: Forceful Fists of Frost\nwill be enhanced to become Rebuke: Vaulting Fist. It will not consume Stamina, will deal 50% increased DMG, and after hitting will restore HP for Wriothesley equal to 30% of his Max HP.\nYou can gain a Gracious Rebuke this way once every 5s.",
        },
        {
            name: 'There Shall Be a Reckoning for Sin',
            image: 'https://genshin.honeyhunterworld.com/img/p_862201.webp',
            description:
                "When Wriothesley's current HP increases or decreases, if he is in the Chilling Penalty state conferred by\nIcefang Rush\n, Chilling Penalty will gain one stack of Prosecution Edict. Max 5 stacks. Each stack will increase Wriothesley's ATK by 6%.",
        },
    ],
    constellations: [
        {
            name: 'Terror for the Evildoers',
            image: 'https://genshin.honeyhunterworld.com/img/c_861.webp',
            description:
                'The Gracious Rebuke from the Passive Talent "There Shall Be a Plea for Justice" is changed to this:\nWhen Wriothesley\'s HP is less than 60% or while he is in the Chilling Penalty state caused by\nIcefang Rush\n, when the fifth attack of Repelling Fists hits, it will create a Gracious Rebuke. 1 Gracious Rebuke effect can be obtained every 2.5s.\nAdditionally, Rebuke: Vaulting Fist will obtain the following enhancement:\n\u00b7The DMG Bonus gained will be further increased to 200%.\n\u00b7When it hits while Wriothesley is in the Chilling Penalty state, that state\'s duration is extended by 4s. 1 such extension can occur per 1 Chilling Penalty duration.\nYou must first unlock the Passive Talent "There Shall Be a Plea for Justice."',
            level: 1,
        },
        {
            name: 'Shackles for the Arrogant',
            image: 'https://genshin.honeyhunterworld.com/img/c_862.webp',
            description:
                'When using\nDarkgold Wolfbite\n, each Prosecution Edict stack from the Passive Talent "There Shall Be a Reckoning for Sin" will increase said ability\'s DMG dealt by 40%.\nYou must first unlock the Passive Talent "There Shall Be a Reckoning for Sin."',
            level: 2,
        },
        {
            name: 'Punishment for the Frauds',
            image: 'https://genshin.honeyhunterworld.com/img/c_863.webp',
            description:
                'Increases the Level of\nNormal Attack: Forceful Fists of Frost\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Redemption for the Suffering',
            image: 'https://genshin.honeyhunterworld.com/img/c_864.webp',
            description:
                'The HP restored to Wriothesley through Rebuke: Vaulting Fist will be increased to 50% of his Max HP. You must first unlock the Passive Talent "There Shall Be a Plea for Justice."\nAdditionally, when Wriothesley is healed, if the amount of healing overflows, the following effects will occur depending on whether he is on the field or not. If he is on the field, his ATK SPD will be increased by 20% for 4s. If he is off-field, all of your own party members\' ATK SPD will be increased by 10% for 6s. These two methods of increasing ATK SPD cannot stack.',
            level: 4,
        },
        {
            name: 'Mercy for the Wronged',
            image: 'https://genshin.honeyhunterworld.com/img/c_865.webp',
            description:
                'Increases the Level of\nDarkgold Wolfbite\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Esteem for the Innocent',
            image: 'https://genshin.honeyhunterworld.com/img/c_866.webp',
            description:
                'The CRIT Rate of Rebuke: Vaulting Fist will be increased by 10%, and its CRIT DMG by 80%. When unleashed, it will also create an additional icicle that deals 100% of Rebuke: Vaulting Fist\'s Base DMG as\nCryo DMG\n. DMG dealt this way is regarded as Charged Attack DMG.\nYou must first unlock the Passive Talent "There Shall Be a Plea for Justice."',
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default Wriothesley
