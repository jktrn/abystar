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

const Charlotte: Character = {
    name: 'Charlotte',
    icon: '/images/characters/UI_AvatarIcon_Charlotte.png',
    weapon: 'Catalyst',
    vision: 'Cryo',
    rarity: 4,
    description:
        'Indefatigable reporter of The Steambird, constantly on the hunt for the "truth."',
    occupation: 'The Steambird',
    baseStats: {
        '1/20': {
            'Base HP': 903.0,
            'Base ATK': 14.51,
            'Base DEF': 45.78,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/20': {
            'Base HP': 2319.0,
            'Base ATK': 37.29,
            'Base DEF': 117.61,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/40': {
            'Base HP': 2993.0,
            'Base ATK': 48.13,
            'Base DEF': 151.81,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/40': {
            'Base HP': 4484.0,
            'Base ATK': 72.09,
            'Base DEF': 227.39,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/50': {
            'Base HP': 4963.0,
            'Base ATK': 79.79,
            'Base DEF': 251.69,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/50': {
            'Base HP': 5708.0,
            'Base ATK': 91.78,
            'Base DEF': 289.51,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/60': {
            'Base HP': 6347.0,
            'Base ATK': 102.05,
            'Base DEF': 321.91,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/60': {
            'Base HP': 7093.0,
            'Base ATK': 114.04,
            'Base DEF': 359.72,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/70': {
            'Base HP': 7572.0,
            'Base ATK': 121.75,
            'Base DEF': 384.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/70': {
            'Base HP': 8317.0,
            'Base ATK': 133.72,
            'Base DEF': 421.79,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/80': {
            'Base HP': 8796.0,
            'Base ATK': 141.42,
            'Base DEF': 446.09,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/80': {
            'Base HP': 9541.0,
            'Base ATK': 153.41,
            'Base DEF': 483.9,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/90': {
            'Base HP': 10021.0,
            'Base ATK': 161.12,
            'Base DEF': 508.2,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
        '90/90': {
            'Base HP': 10766.0,
            'Base ATK': 173.1,
            'Base DEF': 546.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Cool-Color Capture',
            image: '/images/characters/Skill_A_Catalyst_MD.png',
            description:
                "Normal Attack\nTaking aim at targets using Monsieur Verite, her custom Kamera, Charlotte performs up to 3 consecutive attacks, dealing\nCryo DMG\n.\nCharged Attack\nConsumes a fixed amount of Stamina, and after a moment's preparation, will deploy Monsieur Verite to deal\nAoE Cryo DMG\n.\nPlunging Attack\nGathering the power of Cryo, Charlotte plunges toward the ground, dealing DMG to all opponents in her path and dealing\nAoE Cryo DMG\nupon landing.\nArkhe: Pneuma\nAt certain intervals, upon using a Charged Attack, Charlotte will cause a Spiritbreath Thorn to descend and pierce opponents, dealing Pneuma-aligned\nAoE Cryo DMG\n.",
            data: {
                '1-Hit DMG': {
                    Lv1: '49.85%',
                    Lv2: '53.58%',
                    Lv3: '57.32%',
                    Lv4: '62.31%',
                    Lv5: '66.05%',
                    Lv6: '69.78%',
                    Lv7: '74.77%',
                    Lv8: '79.75%',
                    Lv9: '84.74%',
                    Lv10: '89.72%',
                    Lv11: '94.71%',
                    Lv12: '99.69%',
                    Lv13: '105.92%',
                    Lv14: '112.15%',
                    Lv15: '118.38%',
                },
                '2-Hit DMG': {
                    Lv1: '43.38%',
                    Lv2: '46.63%',
                    Lv3: '49.88%',
                    Lv4: '54.22%',
                    Lv5: '57.47%',
                    Lv6: '60.73%',
                    Lv7: '65.06%',
                    Lv8: '69.4%',
                    Lv9: '73.74%',
                    Lv10: '78.08%',
                    Lv11: '82.41%',
                    Lv12: '86.75%',
                    Lv13: '92.17%',
                    Lv14: '97.59%',
                    Lv15: '103.02%',
                },
                '3-Hit DMG': {
                    Lv1: '64.6%',
                    Lv2: '69.45%',
                    Lv3: '74.29%',
                    Lv4: '80.75%',
                    Lv5: '85.6%',
                    Lv6: '90.44%',
                    Lv7: '96.9%',
                    Lv8: '103.36%',
                    Lv9: '109.82%',
                    Lv10: '116.28%',
                    Lv11: '122.74%',
                    Lv12: '129.2%',
                    Lv13: '137.28%',
                    Lv14: '145.35%',
                    Lv15: '153.43%',
                },
                'Charged Attack DMG': {
                    Lv1: '100.51%',
                    Lv2: '108.05%',
                    Lv3: '115.59%',
                    Lv4: '125.64%',
                    Lv5: '133.18%',
                    Lv6: '140.72%',
                    Lv7: '150.77%',
                    Lv8: '160.82%',
                    Lv9: '170.87%',
                    Lv10: '180.92%',
                    Lv11: '190.97%',
                    Lv12: '201.02%',
                    Lv13: '213.59%',
                    Lv14: '226.15%',
                    Lv15: '238.72%',
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
                'Spiritbreath Thorn DMG': {
                    Lv1: '11.17%',
                    Lv2: '12.01%',
                    Lv3: '12.84%',
                    Lv4: '13.96%',
                    Lv5: '14.8%',
                    Lv6: '15.64%',
                    Lv7: '16.75%',
                    Lv8: '17.87%',
                    Lv9: '18.99%',
                    Lv10: '20.1%',
                    Lv11: '21.22%',
                    Lv12: '22.34%',
                    Lv13: '23.73%',
                    Lv14: '25.13%',
                    Lv15: '26.52%',
                },
                'Spiritbreath Thorn DMG Interval': {
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
            name: 'Framing: Freezing Point Composition',
            image: '/images/characters/Skill_S_Charlotte_01.png',
            description:
                'Using the keen instincts of an ace reporter, Charlotte uses her photography skills to produce different effects based on whether the ability is Tapped or Held.\nTap\nTakes a snapshot using Monsieur Verite, dealing\nAoE Cryo DMG\nto opponents in front of her and applying Snappy Silhouette to a maximum of 5 opponents. During this effect\'s duration, it will deal\nCryo DMG\nto affected opponents at intervals.\nHold\nPopping Monsieur Verite\'s viewfinder open, Charlotte enters Composition Mode, and during this time, the viewfinder will expand as you hold until you reach a Finisher Frame state. In this state, Charlotte can move and change direction freely.\nWhen the hold state ends, Monsieur Verite will deal\nCryo DMG\nto all opponents locked on within the viewfinder, and apply the same Snappy Silhouette as Tap Mode does to them. If you unleash this ability only after reaching Finisher Frame, you will instead apply Focused Impression, which lasts longer and deals more DMG, although the Skill CD will be longer.\nComposition Mode lasts a maximum of 15s and allows a maximum of 5 opponents to be selected.\n"Press photography requires simple shots with exceptional theming, but most of all, you need to have a knack for capturing the moment!"',
            data: {
                'Photo DMG (Press)': {
                    Lv1: '67.2%',
                    Lv2: '72.24%',
                    Lv3: '77.28%',
                    Lv4: '84%',
                    Lv5: '89.04%',
                    Lv6: '94.08%',
                    Lv7: '100.8%',
                    Lv8: '107.52%',
                    Lv9: '114.24%',
                    Lv10: '120.96%',
                    Lv11: '127.68%',
                    Lv12: '134.4%',
                    Lv13: '142.8%',
                    Lv14: '151.2%',
                    Lv15: '159.6%',
                },
                'Photo DMG (Hold)': {
                    Lv1: '139.2%',
                    Lv2: '149.64%',
                    Lv3: '160.08%',
                    Lv4: '174%',
                    Lv5: '184.44%',
                    Lv6: '194.88%',
                    Lv7: '208.8%',
                    Lv8: '222.72%',
                    Lv9: '236.64%',
                    Lv10: '250.56%',
                    Lv11: '264.48%',
                    Lv12: '278.4%',
                    Lv13: '295.8%',
                    Lv14: '313.2%',
                    Lv15: '330.6%',
                },
                '"Snappy Silhouette" Mark DMG': {
                    Lv1: '39.2%',
                    Lv2: '42.14%',
                    Lv3: '45.08%',
                    Lv4: '49%',
                    Lv5: '51.94%',
                    Lv6: '54.88%',
                    Lv7: '58.8%',
                    Lv8: '62.72%',
                    Lv9: '66.64%',
                    Lv10: '70.56%',
                    Lv11: '74.48%',
                    Lv12: '78.4%',
                    Lv13: '83.3%',
                    Lv14: '88.2%',
                    Lv15: '93.1%',
                },
                '"Snappy Silhouette" Mark Trigger Interval': {
                    Lv1: '1.5s',
                    Lv2: '1.5s',
                    Lv3: '1.5s',
                    Lv4: '1.5s',
                    Lv5: '1.5s',
                    Lv6: '1.5s',
                    Lv7: '1.5s',
                    Lv8: '1.5s',
                    Lv9: '1.5s',
                    Lv10: '1.5s',
                    Lv11: '1.5s',
                    Lv12: '1.5s',
                    Lv13: '1.5s',
                    Lv14: '1.5s',
                    Lv15: '1.5s',
                },
                '"Snappy Silhouette" Mark Duration': {
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
                '"Focused Impression" Mark DMG': {
                    Lv1: '40.6%',
                    Lv2: '43.65%',
                    Lv3: '46.69%',
                    Lv4: '50.75%',
                    Lv5: '53.8%',
                    Lv6: '56.84%',
                    Lv7: '60.9%',
                    Lv8: '64.96%',
                    Lv9: '69.02%',
                    Lv10: '73.08%',
                    Lv11: '77.14%',
                    Lv12: '81.2%',
                    Lv13: '86.28%',
                    Lv14: '91.35%',
                    Lv15: '96.43%',
                },
                '"Focused Impression" Mark Trigger Interval': {
                    Lv1: '1.5s',
                    Lv2: '1.5s',
                    Lv3: '1.5s',
                    Lv4: '1.5s',
                    Lv5: '1.5s',
                    Lv6: '1.5s',
                    Lv7: '1.5s',
                    Lv8: '1.5s',
                    Lv9: '1.5s',
                    Lv10: '1.5s',
                    Lv11: '1.5s',
                    Lv12: '1.5s',
                    Lv13: '1.5s',
                    Lv14: '1.5s',
                    Lv15: '1.5s',
                },
                '"Focused Impression" Mark Duration': {
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
                'Finisher Frame Cast CD': {
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
            },
        },
        {
            name: 'Still Photo: Comprehensive Confirmation',
            image: '/images/characters/Skill_E_Charlotte_01.png',
            description:
                "Condensing ice to create The Steambird's signature, Charlotte creates a Newsflash Field that will deal\nAoE Cryo DMG\nand restores HP for all nearby party members based on Charlotte's ATK.\nNewsflash Field\n\u00b7While the ability is active, Monsieur Verite will deal\nCryo DMG\nat intervals to opponents within its AoE.\n\u00b7Will continuously restore HP to active character(s) within its AoE based on Charlotte's ATK.\n\"Hearing stories from multiple perspectives to recreate what really happened is key to a good report... I mean, that's how you can pick the best angle for your article!\"",
            data: {
                'Cast Healing': {
                    Lv1: '256.57% ATK + 1608.49',
                    Lv2: '275.82% ATK + 1769.36',
                    Lv3: '295.06% ATK + 1943.63',
                    Lv4: '320.72% ATK + 2131.32',
                    Lv5: '339.96% ATK + 2332.41',
                    Lv6: '359.2% ATK + 2546.9',
                    Lv7: '384.86% ATK + 2774.8',
                    Lv8: '410.52% ATK + 3016.11',
                    Lv9: '436.17% ATK + 3270.82',
                    Lv10: '461.83% ATK + 3538.94',
                    Lv11: '487.49% ATK + 3820.46',
                    Lv12: '513.15% ATK + 4115.39',
                    Lv13: '545.22% ATK + 4423.73',
                    Lv14: '577.29% ATK + 4745.47',
                    Lv15: '609.36% ATK + 5080.62',
                },
                'Skill DMG': {
                    Lv1: '77.62%',
                    Lv2: '83.44%',
                    Lv3: '89.26%',
                    Lv4: '97.02%',
                    Lv5: '102.84%',
                    Lv6: '108.66%',
                    Lv7: '116.42%',
                    Lv8: '124.19%',
                    Lv9: '131.95%',
                    Lv10: '139.71%',
                    Lv11: '147.47%',
                    Lv12: '155.23%',
                    Lv13: '164.93%',
                    Lv14: '174.64%',
                    Lv15: '184.34%',
                },
                'Kamera Continuous Regeneration': {
                    Lv1: '9.22% ATK + 57.45',
                    Lv2: '9.91% ATK + 63.19',
                    Lv3: '10.6% ATK + 69.42',
                    Lv4: '11.52% ATK + 76.12',
                    Lv5: '12.21% ATK + 83.3',
                    Lv6: '12.9% ATK + 90.96',
                    Lv7: '13.82% ATK + 99.1',
                    Lv8: '14.75% ATK + 107.72',
                    Lv9: '15.67% ATK + 116.82',
                    Lv10: '16.59% ATK + 126.39',
                    Lv11: '17.51% ATK + 136.45',
                    Lv12: '18.43% ATK + 146.98',
                    Lv13: '19.58% ATK + 157.99',
                    Lv14: '20.74% ATK + 169.48',
                    Lv15: '21.89% ATK + 181.45',
                },
                'Kamera DMG': {
                    Lv1: '6.47%',
                    Lv2: '6.95%',
                    Lv3: '7.44%',
                    Lv4: '8.09%',
                    Lv5: '8.57%',
                    Lv6: '9.06%',
                    Lv7: '9.7%',
                    Lv8: '10.35%',
                    Lv9: '11%',
                    Lv10: '11.64%',
                    Lv11: '12.29%',
                    Lv12: '12.94%',
                    Lv13: '13.74%',
                    Lv14: '14.55%',
                    Lv15: '15.36%',
                },
                'Newsflash Field Duration': {
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
            name: 'First-Person Shutter',
            image: '/images/characters/UI_Talent_S_Charlotte_07.png',
            description:
                'After activating the Special Analysis Zoom Lens, Charlotte\'s "Framing: Freezing Point Composition" Hold Mode cannot trigger its original effects, but instead enables her to take photos in a rather unique manner...',
        },
        {
            name: 'Moment of Impact',
            image: '/images/characters/UI_Talent_S_Charlotte_05.png',
            description:
                'When opponents marked by "Focused Impression" are defeated,\nFraming: Freezing Point Composition\n\'s CD will be decreased by 2s. This CD decrease can be triggered 4 times every 12s.',
        },
        {
            name: 'Diversified Investigation',
            image: '/images/characters/UI_Talent_S_Charlotte_06.png',
            description:
                'When the party contains 1/2/3 Fontainians other than herself, Charlotte gains a 5%/10%/15% Healing Bonus. When the party contains 1/2/3 non-Fontainians, Charlotte gains a 5%/10%/15% Cryo DMG Bonus.',
        },
    ],
    constellations: [
        {
            name: 'A Need to Verify Facts',
            image: '/images/characters/UI_Talent_S_Charlotte_01.png',
            description:
                "After\nStill Photo: Comprehensive Confirmation\nheals a character, it will mark them with Verification, which will heal them once every 2s for 80% of Charlotte's ATK. This effect lasts 6s.",
            level: 1,
        },
        {
            name: 'A Duty to Pursue Truth',
            image: '/images/characters/UI_Talent_S_Charlotte_02.png',
            description:
                "When using\nFraming: Freezing Point Composition\n, when Monsieur Verite hits 1/2/3 (or more) opponents, Charlotte's own ATK will be increased by 10%/20%/30% for 12s.",
            level: 2,
        },
        {
            name: 'An Imperative to Independence',
            image: '/images/characters/UI_Talent_U_Charlotte_01.png',
            description:
                'Increases the Level of\nStill Photo: Comprehensive Confirmation\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'A Responsibility to Oversee',
            image: '/images/characters/UI_Talent_S_Charlotte_03.png',
            description:
                'When\nStill Photo: Comprehensive Confirmation\nhits an opponent marked by Snappy Silhouette or Focused Impression, it will deal 10% more DMG and restore 2 Energy to Charlotte. This restoration can be triggered 5 times every 20s.',
            level: 4,
        },
        {
            name: 'A Principle of Conscience',
            image: '/images/characters/UI_Talent_U_Charlotte_02.png',
            description:
                'Increases the Level of\nFraming: Freezing Point Composition\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'A Summation of Interest',
            image: '/images/characters/UI_Talent_S_Charlotte_04.png',
            description:
                "When the active character's Normal and Charged Attacks hit an opponent marked by\nFraming: Freezing Point Composition\n's Focused Impression, Monsieur Verite will initiate a coordinated attack that deals 180% of Charlotte's ATK as\nAoE Cryo DMG\nand heals active character(s) within the AoE for 42% of Charlotte's ATK. This effect can be triggered once every 6s and both DMG and healing dealt in this way will be considered as having been done by Charlotte's Elemental Burst.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Charlotte
