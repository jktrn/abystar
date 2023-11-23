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

const Kaveh: Character = {
    name: 'Kaveh',
    icon: '/images/characters/kaveh.png',
    weapon: 'Claymore',
    vision: 'Dendro',
    rarity: 4,
    description:
        'A renowned architect from Sumeru who perhaps cares a bit too much about too many things. He is an aesthete troubled by reality.',
    occupation: 'Independent Design Studio',
    baseStats: {
        '1/20': {
            'Base HP': '1003',
            'Base ATK': '19.59',
            'Base DEF': '62.95',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '0%',
        },
        '20/20': {
            'Base HP': '2577',
            'Base ATK': '50.32',
            'Base DEF': '161.71',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '0%',
        },
        '20/40': {
            'Base HP': '3326',
            'Base ATK': '64.96',
            'Base DEF': '208.74',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '0%',
        },
        '40/40': {
            'Base HP': '4982',
            'Base ATK': '97.3',
            'Base DEF': '312.66',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '0%',
        },
        '40/50': {
            'Base HP': '5514',
            'Base ATK': '107.7',
            'Base DEF': '346.08',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '24',
        },
        '50/50': {
            'Base HP': '6343',
            'Base ATK': '123.88',
            'Base DEF': '398.07',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '24',
        },
        '50/60': {
            'Base HP': '7052',
            'Base ATK': '137.74',
            'Base DEF': '442.62',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '48',
        },
        '60/60': {
            'Base HP': '7881',
            'Base ATK': '153.92',
            'Base DEF': '494.62',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '48',
        },
        '60/70': {
            'Base HP': '8413',
            'Base ATK': '164.32',
            'Base DEF': '528.03',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '48',
        },
        '70/70': {
            'Base HP': '9241',
            'Base ATK': '180.48',
            'Base DEF': '579.96',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '48',
        },
        '70/80': {
            'Base HP': '9773',
            'Base ATK': '190.88',
            'Base DEF': '613.37',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '72',
        },
        '80/80': {
            'Base HP': '10602',
            'Base ATK': '207.06',
            'Base DEF': '665.37',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '72',
        },
        '80/90': {
            'Base HP': '11134',
            'Base ATK': '217.46',
            'Base DEF': '698.78',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '96',
        },
        '90/90': {
            'Base HP': '11962',
            'Base ATK': '233.64',
            'Base DEF': '750.77',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus Elemental Mastery': '96',
        },
    },
    activeSkills: [
        {
            name: 'Normal Attack: Schematic Setup',
            image: 'https://genshin.honeyhunterworld.com/img/s_813101.webp',
            description:
                'Normal Attack\nUses Mehrak to perform up to 4 consecutive attacks.\nCharged Attack\nDrains Stamina over time to perform continuous slashes.\nAt the end of the sequence, performs a more powerful slash.\nPlunging Attack\nPlunges from mid-air to strike the ground, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '76.19%',
                    Lv2: '82.39%',
                    Lv3: '88.59%',
                    Lv4: '97.45%',
                    Lv5: '103.65%',
                    Lv6: '110.73%',
                    Lv7: '120.48%',
                    Lv8: '130.22%',
                    Lv9: '139.97%',
                    Lv10: '150.6%',
                    Lv11: '161.23%',
                    Lv12: '171.86%',
                    Lv13: '182.49%',
                    Lv14: '193.12%',
                    Lv15: '203.75%',
                },
                '2-Hit DMG': {
                    Lv1: '69.64%',
                    Lv2: '75.31%',
                    Lv3: '80.98%',
                    Lv4: '89.07%',
                    Lv5: '94.74%',
                    Lv6: '101.22%',
                    Lv7: '110.13%',
                    Lv8: '119.03%',
                    Lv9: '127.94%',
                    Lv10: '137.66%',
                    Lv11: '147.37%',
                    Lv12: '157.09%',
                    Lv13: '166.81%',
                    Lv14: '176.53%',
                    Lv15: '186.24%',
                },
                '3-Hit DMG': {
                    Lv1: '84.26%',
                    Lv2: '91.12%',
                    Lv3: '97.98%',
                    Lv4: '107.78%',
                    Lv5: '114.63%',
                    Lv6: '122.47%',
                    Lv7: '133.25%',
                    Lv8: '144.03%',
                    Lv9: '154.81%',
                    Lv10: '166.56%',
                    Lv11: '178.32%',
                    Lv12: '190.08%',
                    Lv13: '201.83%',
                    Lv14: '213.59%',
                    Lv15: '225.35%',
                },
                '4-Hit DMG': {
                    Lv1: '102.69%',
                    Lv2: '111.05%',
                    Lv3: '119.4%',
                    Lv4: '131.35%',
                    Lv5: '139.7%',
                    Lv6: '149.26%',
                    Lv7: '162.39%',
                    Lv8: '175.53%',
                    Lv9: '188.66%',
                    Lv10: '202.99%',
                    Lv11: '217.32%',
                    Lv12: '231.65%',
                    Lv13: '245.97%',
                    Lv14: '260.3%',
                    Lv15: '274.63%',
                },
                'Charged Attack Cyclic DMG': {
                    Lv1: '53.15%',
                    Lv2: '57.47%',
                    Lv3: '61.8%',
                    Lv4: '67.98%',
                    Lv5: '72.31%',
                    Lv6: '77.25%',
                    Lv7: '84.05%',
                    Lv8: '90.85%',
                    Lv9: '97.64%',
                    Lv10: '105.06%',
                    Lv11: '112.48%',
                    Lv12: '119.89%',
                    Lv13: '127.31%',
                    Lv14: '134.72%',
                    Lv15: '142.14%',
                },
                'Charged Attack Final DMG': {
                    Lv1: '96.15%',
                    Lv2: '103.97%',
                    Lv3: '111.8%',
                    Lv4: '122.98%',
                    Lv5: '130.81%',
                    Lv6: '139.75%',
                    Lv7: '152.05%',
                    Lv8: '164.35%',
                    Lv9: '176.64%',
                    Lv10: '190.06%',
                    Lv11: '203.48%',
                    Lv12: '216.89%',
                    Lv13: '230.31%',
                    Lv14: '243.72%',
                    Lv15: '257.14%',
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
            name: 'Artistic Ingenuity',
            image: 'https://genshin.honeyhunterworld.com/img/s_813201.webp',
            description:
                "Uses Mehrak's mapping ability for offensive purposes, initiating a radial scan that deals\nAoE Dendro DMG\n. It will also scan all Dendro Cores in its AoE and cause them to immediately burst.\nMehrak was created through the modification of ancient technology and may have some other functions apart from mapping work...",
            data: {
                'Skill DMG': {
                    Lv1: '204%',
                    Lv2: '219.3%',
                    Lv3: '234.6%',
                    Lv4: '255%',
                    Lv5: '270.3%',
                    Lv6: '285.6%',
                    Lv7: '306%',
                    Lv8: '326.4%',
                    Lv9: '346.8%',
                    Lv10: '367.2%',
                    Lv11: '387.6%',
                    Lv12: '408%',
                    Lv13: '433.5%',
                    Lv14: '459%',
                    Lv15: '484.5%',
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
            name: 'Painted Dome',
            image: 'https://genshin.honeyhunterworld.com/img/s_813901.webp',
            description:
                "Completely unleashes Mehrak's energy and creates a cubic scanned space, dealing\nAoE Dendro DMG\nto all opponents within it, causing all Dendro Cores in its AoE to immediately burst, and granting Kaveh the following enhanced combat abilities for a specific duration:\n\u00b7Increases Kaveh's Normal, Charged, and Plunging Attack AoE, and converts his attack DMG to\nDendro DMG\nthat cannot be overridden.\n\u00b7All Dendro Cores created by all your own party members through Bloom reactions will deal additional DMG when they burst.\n\u00b7Increases Kaveh's resistance to interruption.\nThese effects will be canceled once Kaveh leaves the field.\n\"Every building style includes the architect's unique worldview, and from this angle, one can say that the buildings themselves are coalescences of human memories.\"",
            data: {
                'Skill DMG': {
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
                'Dendro Core Burst DMG Bonus': {
                    Lv1: '27.49%',
                    Lv2: '29.55%',
                    Lv3: '31.61%',
                    Lv4: '34.36%',
                    Lv5: '36.42%',
                    Lv6: '38.48%',
                    Lv7: '41.23%',
                    Lv8: '43.98%',
                    Lv9: '46.73%',
                    Lv10: '49.48%',
                    Lv11: '52.23%',
                    Lv12: '54.98%',
                    Lv13: '58.41%',
                    Lv14: '61.85%',
                    Lv15: '65.28%',
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
            name: 'The Art of Budgeting',
            image: 'https://genshin.honeyhunterworld.com/img/p_812301.webp',
            description:
                'When Kaveh crafts Landscape, Building, and Courtyard-type Furnishings, he has a 100% chance to refund a portion of the materials used.',
        },
        {
            name: "An Architect's Undertaking",
            image: 'https://genshin.honeyhunterworld.com/img/p_812101.webp',
            description:
                'When DMG dealt by a Dendro Core (including DMG from Burgeon and Hyperbloom) hits Kaveh, Kaveh will regain HP equal to 300% of his Elemental Mastery. This effect can be triggered once every 0.5s.',
        },
        {
            name: "A Craftsman's Curious Conceptions",
            image: 'https://genshin.honeyhunterworld.com/img/p_812201.webp',
            description:
                "During\nPainted Dome\n, after Kaveh's Normal, Charged, or Plunging Attacks hit opponents, his Elemental Mastery will increase by 25. This effect can be triggered once every 0.1s. Max 4 stacks.\nThis effect will be canceled when Painted Dome's effects end.",
        },
    ],
    constellations: [
        {
            name: 'Sublime Salutations',
            image: 'https://genshin.honeyhunterworld.com/img/c_811.webp',
            description:
                "Within 3s after using\nArtistic Ingenuity\n, Kaveh's\nDendro RES\nand Incoming Healing Bonus will be increased by 50% and 25% respectively.",
            level: 1,
        },
        {
            name: 'Grace of Royal Roads',
            image: 'https://genshin.honeyhunterworld.com/img/c_812.webp',
            description:
                "Kaveh's Normal Attack SPD increases by 15% during\nPainted Dome\n.",
            level: 2,
        },
        {
            name: 'Profferings of Dur Untash',
            image: 'https://genshin.honeyhunterworld.com/img/c_813.webp',
            description:
                'Increases the Level of\nPainted Dome\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Feast of Apadana',
            image: 'https://genshin.honeyhunterworld.com/img/c_814.webp',
            description:
                'Dendro Cores created from Bloom reactions Kaveh triggers will deal 60% more DMG when they burst.',
            level: 4,
        },
        {
            name: 'Treasures of Bonkhanak',
            image: 'https://genshin.honeyhunterworld.com/img/c_815.webp',
            description:
                'Increases the Level of\nArtistic Ingenuity\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: "Pairidaeza's Dreams",
            image: 'https://genshin.honeyhunterworld.com/img/c_816.webp',
            description:
                "When Kaveh's Normal, Charged, or Plunging Attacks hit opponents during\nPainted Dome\n, they will unleash Pairidaeza's Light upon the opponent's position, dealing 61.8% of Kaveh's ATK as\nAoE Dendro DMG\nand causing all Dendro Cores within that AoE to burst. This effect can be triggered once every 3s.",
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default Kaveh
