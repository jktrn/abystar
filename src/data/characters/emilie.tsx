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

const Emilie: Character = {
    name: "Emilie",
    icon: "/images/characters/UI_AvatarIcon_Emilie.png",
    weapon: "Polearm",
    vision: "Dendro",
    rarity: 5,
    description: "A Fontainian perfumer, one who bottles secrets.",
    occupation: "Court of Fontaine",
    baseStats: {
    "1/20": {
        "Base HP": 1056.0,
        "Base ATK": 26.07,
        "Base DEF": 56.84,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.0
    },
    "20/20": {
        "Base HP": 2740.0,
        "Base ATK": 67.62,
        "Base DEF": 147.44,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.0
    },
    "20/40": {
        "Base HP": 3646.0,
        "Base ATK": 89.97,
        "Base DEF": 196.17,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.0
    },
    "40/40": {
        "Base HP": 5455.0,
        "Base ATK": 134.62,
        "Base DEF": 293.54,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.0
    },
    "40/50": {
        "Base HP": 6099.0,
        "Base ATK": 150.5,
        "Base DEF": 328.17,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.096
    },
    "50/50": {
        "Base HP": 7016.0,
        "Base ATK": 173.16,
        "Base DEF": 377.56,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.096
    },
    "50/60": {
        "Base HP": 7874.0,
        "Base ATK": 194.33,
        "Base DEF": 423.73,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.192
    },
    "60/60": {
        "Base HP": 8802.0,
        "Base ATK": 217.22,
        "Base DEF": 473.63,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.192
    },
    "60/70": {
        "Base HP": 9445.0,
        "Base ATK": 233.1,
        "Base DEF": 508.26,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.192
    },
    "70/70": {
        "Base HP": 10381.0,
        "Base ATK": 256.19,
        "Base DEF": 558.62,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.192
    },
    "70/80": {
        "Base HP": 11025.0,
        "Base ATK": 272.07,
        "Base DEF": 593.25,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.288
    },
    "80/80": {
        "Base HP": 11971.0,
        "Base ATK": 295.43,
        "Base DEF": 644.17,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.288
    },
    "80/90": {
        "Base HP": 12615.0,
        "Base ATK": 311.31,
        "Base DEF": 678.8,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.384
    },
    "90/90": {
        "Base HP": 13568.0,
        "Base ATK": 334.85,
        "Base DEF": 730.13,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT DMG": 0.384
    }
},
    talents: [
    {
        "name": "Normal Attack: Shadow-Hunting Spear (Custom)",
        "image": "https://api.ambr.top/assets/UI/Skill_A_03.png",
        "description": "Normal Attack\nPerforms up to 4 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to perform an upward slash.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
        "data": {
            "1-Hit DMG": {
                "Lv1": "48.56%",
                "Lv2": "52.51%",
                "Lv3": "56.47%",
                "Lv4": "62.11%",
                "Lv5": "66.07%",
                "Lv6": "70.58%",
                "Lv7": "76.79%",
                "Lv8": "83.01%",
                "Lv9": "89.22%",
                "Lv10": "95.99%",
                "Lv11": "102.77%",
                "Lv12": "109.54%",
                "Lv13": "116.32%",
                "Lv14": "123.1%",
                "Lv15": "129.87%"
            },
            "2-Hit DMG": {
                "Lv1": "44.9%",
                "Lv2": "48.55%",
                "Lv3": "52.2%",
                "Lv4": "57.42%",
                "Lv5": "61.08%",
                "Lv6": "65.26%",
                "Lv7": "71%",
                "Lv8": "76.74%",
                "Lv9": "82.48%",
                "Lv10": "88.75%",
                "Lv11": "95.01%",
                "Lv12": "101.28%",
                "Lv13": "107.54%",
                "Lv14": "113.8%",
                "Lv15": "120.07%"
            },
            "3-Hit DMG": {
                "Lv1": "59.3%",
                "Lv2": "64.13%",
                "Lv3": "68.95%",
                "Lv4": "75.85%",
                "Lv5": "80.68%",
                "Lv6": "86.19%",
                "Lv7": "93.78%",
                "Lv8": "101.36%",
                "Lv9": "108.95%",
                "Lv10": "117.22%",
                "Lv11": "125.5%",
                "Lv12": "133.77%",
                "Lv13": "142.05%",
                "Lv14": "150.32%",
                "Lv15": "158.59%"
            },
            "4-Hit DMG": {
                "Lv1": "75.1%",
                "Lv2": "81.22%",
                "Lv3": "87.33%",
                "Lv4": "96.06%",
                "Lv5": "102.17%",
                "Lv6": "109.16%",
                "Lv7": "118.77%",
                "Lv8": "128.37%",
                "Lv9": "137.98%",
                "Lv10": "148.46%",
                "Lv11": "158.94%",
                "Lv12": "169.42%",
                "Lv13": "179.9%",
                "Lv14": "190.38%",
                "Lv15": "200.86%"
            },
            "Charged Attack DMG": {
                "Lv1": "91.33%",
                "Lv2": "98.77%",
                "Lv3": "106.2%",
                "Lv4": "116.82%",
                "Lv5": "124.25%",
                "Lv6": "132.75%",
                "Lv7": "144.43%",
                "Lv8": "156.11%",
                "Lv9": "167.8%",
                "Lv10": "180.54%",
                "Lv11": "193.28%",
                "Lv12": "206.03%",
                "Lv13": "218.77%",
                "Lv14": "231.52%",
                "Lv15": "244.26%"
            },
            "Charged Attack Stamina Cost": {
                "Lv1": "25",
                "Lv2": "25",
                "Lv3": "25",
                "Lv4": "25",
                "Lv5": "25",
                "Lv6": "25",
                "Lv7": "25",
                "Lv8": "25",
                "Lv9": "25",
                "Lv10": "25",
                "Lv11": "25",
                "Lv12": "25",
                "Lv13": "25",
                "Lv14": "25",
                "Lv15": "25"
            },
            "Plunge DMG": {
                "Lv1": "63.93%",
                "Lv2": "69.14%",
                "Lv3": "74.34%",
                "Lv4": "81.77%",
                "Lv5": "86.98%",
                "Lv6": "92.93%",
                "Lv7": "101.1%",
                "Lv8": "109.28%",
                "Lv9": "117.46%",
                "Lv10": "126.38%",
                "Lv11": "135.3%",
                "Lv12": "144.22%",
                "Lv13": "153.14%",
                "Lv14": "162.06%",
                "Lv15": "170.98%"
            },
            "Low Plunge DMG": {
                "Lv1": "127.84%",
                "Lv2": "138.24%",
                "Lv3": "148.65%",
                "Lv4": "163.51%",
                "Lv5": "173.92%",
                "Lv6": "185.81%",
                "Lv7": "202.16%",
                "Lv8": "218.51%",
                "Lv9": "234.86%",
                "Lv10": "252.7%",
                "Lv11": "270.54%",
                "Lv12": "288.38%",
                "Lv13": "306.22%",
                "Lv14": "324.05%",
                "Lv15": "341.89%"
            },
            "High Plunge DMG": {
                "Lv1": "159.68%",
                "Lv2": "172.67%",
                "Lv3": "185.67%",
                "Lv4": "204.24%",
                "Lv5": "217.23%",
                "Lv6": "232.09%",
                "Lv7": "252.51%",
                "Lv8": "272.93%",
                "Lv9": "293.36%",
                "Lv10": "315.64%",
                "Lv11": "337.92%",
                "Lv12": "360.2%",
                "Lv13": "382.48%",
                "Lv14": "404.76%",
                "Lv15": "427.04%"
            }
        }
    },
    {
        "name": "Fragrance Extraction",
        "image": "https://api.ambr.top/assets/UI/Skill_S_Emilie_01.png",
        "description": "Creates a Lumidouce Case that deals\nAoE Dendro DMG\n.\nLumidouce Case\n\u00b7Fires Puffs of Puredew at nearby opponents at intervals, dealing\nDendro DMG\n.\n\u00b7When nearby opponents are affected by Burning, they will give off Scents at intervals, and 1 Scent can be created this way every 2s. The Lumidouce Case collects nearby Scents. The Lumidouce Case will level up after gathering 2 of them, after which it will fire 1 extra Puff of Puredew when firing, while the DMG dealt by and DMG AoE of the above attack will also be increased.\n\u00b71 Lumidouce Case created by Emilie herself can exist at any one time. The Case starts at Level 1 and can go up to Level 2. If the Case does not collect any Scents for 8s while it is on the field, it will go back to Level 1.\nArkhe: Pneuma\nAt intervals, after Emilie creates a Lumidouce Case this way, a Spiritbreath Thorn will descend in front of her and pierce her opponent, dealing Pneuma-aligned\nDendro DMG\n.\n\"The world is an endless harmony of fragrance, color, and song.\"",
        "data": {
            "Skill DMG": {
                "Lv1": "47.08%",
                "Lv2": "50.61%",
                "Lv3": "54.14%",
                "Lv4": "58.85%",
                "Lv5": "62.38%",
                "Lv6": "65.91%",
                "Lv7": "70.62%",
                "Lv8": "75.33%",
                "Lv9": "80.04%",
                "Lv10": "84.74%",
                "Lv11": "89.45%",
                "Lv12": "94.16%",
                "Lv13": "100.05%",
                "Lv14": "105.93%",
                "Lv15": "111.82%"
            },
            "Level 1 Lumidouce Case Attack DMG": {
                "Lv1": "39.6%",
                "Lv2": "42.57%",
                "Lv3": "45.54%",
                "Lv4": "49.5%",
                "Lv5": "52.47%",
                "Lv6": "55.44%",
                "Lv7": "59.4%",
                "Lv8": "63.36%",
                "Lv9": "67.32%",
                "Lv10": "71.28%",
                "Lv11": "75.24%",
                "Lv12": "79.2%",
                "Lv13": "84.15%",
                "Lv14": "89.1%",
                "Lv15": "94.05%"
            },
            "Level 2 Lumidouce Case Attack DMG": {
                "Lv1": "168.00%",
                "Lv2": "180.60%",
                "Lv3": "193.20%",
                "Lv4": "210.00%",
                "Lv5": "222.60%",
                "Lv6": "235.20%",
                "Lv7": "252.00%",
                "Lv8": "268.80%",
                "Lv9": "285.60%",
                "Lv10": "302.40%",
                "Lv11": "319.20%",
                "Lv12": "336.00%",
                "Lv13": "357.00%",
                "Lv14": "378.00%",
                "Lv15": "399.00%"
            },
            "Lumidouce Case Duration": {
                "Lv1": "22s",
                "Lv2": "22s",
                "Lv3": "22s",
                "Lv4": "22s",
                "Lv5": "22s",
                "Lv6": "22s",
                "Lv7": "22s",
                "Lv8": "22s",
                "Lv9": "22s",
                "Lv10": "22s",
                "Lv11": "22s",
                "Lv12": "22s",
                "Lv13": "22s",
                "Lv14": "22s",
                "Lv15": "22s"
            },
            "Spiritbreath Thorn DMG": {
                "Lv1": "38.52%",
                "Lv2": "41.41%",
                "Lv3": "44.3%",
                "Lv4": "48.15%",
                "Lv5": "51.04%",
                "Lv6": "53.93%",
                "Lv7": "57.78%",
                "Lv8": "61.63%",
                "Lv9": "65.48%",
                "Lv10": "69.34%",
                "Lv11": "73.19%",
                "Lv12": "77.04%",
                "Lv13": "81.86%",
                "Lv14": "86.67%",
                "Lv15": "91.49%"
            },
            "Spiritbreath Thorn Interval": {
                "Lv1": "10s",
                "Lv2": "10s",
                "Lv3": "10s",
                "Lv4": "10s",
                "Lv5": "10s",
                "Lv6": "10s",
                "Lv7": "10s",
                "Lv8": "10s",
                "Lv9": "10s",
                "Lv10": "10s",
                "Lv11": "10s",
                "Lv12": "10s",
                "Lv13": "10s",
                "Lv14": "10s",
                "Lv15": "10s"
            },
            "Skill CD": {
                "Lv1": "14s",
                "Lv2": "14s",
                "Lv3": "14s",
                "Lv4": "14s",
                "Lv5": "14s",
                "Lv6": "14s",
                "Lv7": "14s",
                "Lv8": "14s",
                "Lv9": "14s",
                "Lv10": "14s",
                "Lv11": "14s",
                "Lv12": "14s",
                "Lv13": "14s",
                "Lv14": "14s",
                "Lv15": "14s"
            }
        }
    },
    {
        "name": "Aromatic Explication",
        "image": "https://api.ambr.top/assets/UI/Skill_E_Emilie_01.png",
        "description": "Guiding the fragrances collected within the Case, Emilie converts them into pure Dendro energy, creating a Level 3 Lumidouce Case and stowing existing Cases away.\nWhile it exists, the Level 3 Lumidouce Case will not gather nearby Scents, but it will continuously cause Scented Dew to descend, attacking opponents within range and dealing\nDendro DMG\n. During this time, 1 drop of Scented Dew will descend every 0.3 seconds, and 1 opponent can become the target every 0.7 seconds.\nWhen the duration ends, a Level 1 Lumidouce Case will be recreated. If a Lumidouce Case was stowed away when using Aromatic Explication, then the Case that was stowed away will be deployed instead, and its duration will be reset.\nWhile\nAromatic Explication\nis active, the Elemental Skill \"Fragrance Extraction\" will not create a Lumidouce Case.\nNo matter the perfume, it will begin to change the instant it comes into contact with the air, before finally dissipating amidst the whispers of wind, trees, and grass. In that sense, no two people will appreciate the exact same fragrance.\nSo it is for the paths taken by all who live. In that sense, you can consider perfumes an explication of human life.",
        "data": {
            "Level 3 Lumidouce Case Attack DMG": {
                "Lv1": "217.2%",
                "Lv2": "233.49%",
                "Lv3": "249.78%",
                "Lv4": "271.5%",
                "Lv5": "287.79%",
                "Lv6": "304.08%",
                "Lv7": "325.8%",
                "Lv8": "347.52%",
                "Lv9": "369.24%",
                "Lv10": "390.96%",
                "Lv11": "412.68%",
                "Lv12": "434.4%",
                "Lv13": "461.55%",
                "Lv14": "488.7%",
                "Lv15": "515.85%"
            },
            "Level 3 Lumidouce Case Duration": {
                "Lv1": "2.8s",
                "Lv2": "2.8s",
                "Lv3": "2.8s",
                "Lv4": "2.8s",
                "Lv5": "2.8s",
                "Lv6": "2.8s",
                "Lv7": "2.8s",
                "Lv8": "2.8s",
                "Lv9": "2.8s",
                "Lv10": "2.8s",
                "Lv11": "2.8s",
                "Lv12": "2.8s",
                "Lv13": "2.8s",
                "Lv14": "2.8s",
                "Lv15": "2.8s"
            },
            "CD": {
                "Lv1": "13.5s",
                "Lv2": "13.5s",
                "Lv3": "13.5s",
                "Lv4": "13.5s",
                "Lv5": "13.5s",
                "Lv6": "13.5s",
                "Lv7": "13.5s",
                "Lv8": "13.5s",
                "Lv9": "13.5s",
                "Lv10": "13.5s",
                "Lv11": "13.5s",
                "Lv12": "13.5s",
                "Lv13": "13.5s",
                "Lv14": "13.5s",
                "Lv15": "13.5s"
            },
            "Energy Cost": {
                "Lv1": "50",
                "Lv2": "50",
                "Lv3": "50",
                "Lv4": "50",
                "Lv5": "50",
                "Lv6": "50",
                "Lv7": "50",
                "Lv8": "50",
                "Lv9": "50",
                "Lv10": "50",
                "Lv11": "50",
                "Lv12": "50",
                "Lv13": "50",
                "Lv14": "50",
                "Lv15": "50"
            }
        }
    }
],
    passiveSkills: [
    {
        "name": "Headspace Capture",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Emilie_07.png",
        "description": "When the Lumidouce Case created by Emilie is on the field, all party members gain 85%\nPyro RES\nagainst Burning DMG."
    },
    {
        "name": "Lingering Fragrance",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Emilie_05.png",
        "description": "Each time it collects 2\nScents\n, the Level 2 Lumidouce Case will consume Scents and release Cleardew Cologne that deals\nAoE Dendro DMG\nequal to 600% of Emilie's ATK to opponents. This DMG is not considered Elemental Skill DMG."
    },
    {
        "name": "Rectification",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Emilie_06.png",
        "description": "Emilie deals increased DMG to Burning opponents based on her ATK, with every 1,000 ATK increasing DMG dealt by 15%. The maximum DMG bonus that can be gained this way is 36%."
    }
],
    constellations: [
    {
        "name": "Light Fragrance Leaching",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Emilie_01.png",
        "description": "Increases the DMG dealt by\nFragrance Extraction\nand her Passive Talent's Cleardew Cologne \"Lingering Fragrance\" by 20%. The latter requires unlocking said Passive Talent first.\nAdditionally, when nearby party members trigger the Burning reaction on opponents or deal\nDendro DMG\nto Burning opponents, they will generate an additional\nScent\n. This effect can be triggered once every 2.9s.",
        "level": 1
    },
    {
        "name": "Lakelight Top Note",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Emilie_02.png",
        "description": "When\nFragrance Extraction\n,\nAromatic Explication\n, or Cleardew Cologne produced by the Passive Talent \"Lingering Fragrance\" (the last of which requires Passive Talent activation) hits opponents, those opponents'\nDendro RES\nis decreased by 30% for 10s.",
        "level": 2
    },
    {
        "name": "Exquisite Essence",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_U_Emilie_01.png",
        "description": "Increases the Level of\nFragrance Extraction\nby 3.\nMaximum upgrade level is 15.",
        "level": 3
    },
    {
        "name": "Lumidouce Heart Note",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Emilie_03.png",
        "description": "Aromatic Explication\n's duration is increased by 2s. The interval between opponents being selected as the target for Scented Dew is decreased by 0.3s.",
        "level": 4
    },
    {
        "name": "Puredew Aroma",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_U_Emilie_02.png",
        "description": "Increases the Level of\nAromatic Explication\nby 3.\nMaximum upgrade level is 15.",
        "level": 5
    },
    {
        "name": "Marcotte Sillage",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Emilie_04.png",
        "description": "When using\nFragrance Extraction\nor\nAromatic Explication\n, Emilie will gain Abiding Fragrance for 5s.\nWhile this is active, after Emilie uses Normal or Charged Attacks, she will generate 1 Scent, and her Normal and Charged Attack DMG will be converted into\nDendro DMG\nthat cannot be overridden, and the DMG dealt will be increased by 300% of Emilie's ATK.\nThe Abiding Fragrance effect will be removed after 4 Scents are created this way or after its duration expires. Abiding Fragrance can be triggered once every 12s.",
        "level": 6
    }
],
    talentScalings,
    characterBonuses,
    constellationBonuses
}

export default Emilie
