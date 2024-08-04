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

const Clorinde: Character = {
    name: "Clorinde",
    icon: "/images/characters/UI_AvatarIcon_Clorinde.png",
    weapon: "Sword",
    vision: "Electro",
    rarity: 5,
    description: "An undefeated Champion Duelist. Sword in hand, she defends justice in the Court of Fontaine.",
    occupation: "Trial Court",
    baseStats: {
    "1/20": {
        "Base HP": 1009.0,
        "Base ATK": 26.25,
        "Base DEF": 61.03,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.0
    },
    "20/20": {
        "Base HP": 2616.0,
        "Base ATK": 68.1,
        "Base DEF": 158.3,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.0
    },
    "20/40": {
        "Base HP": 3481.0,
        "Base ATK": 90.61,
        "Base DEF": 210.63,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.0
    },
    "40/40": {
        "Base HP": 5209.0,
        "Base ATK": 135.59,
        "Base DEF": 315.17,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.0
    },
    "40/50": {
        "Base HP": 5823.0,
        "Base ATK": 151.58,
        "Base DEF": 352.35,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.048
    },
    "50/50": {
        "Base HP": 6700.0,
        "Base ATK": 174.39,
        "Base DEF": 405.38,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.048
    },
    "50/60": {
        "Base HP": 7519.0,
        "Base ATK": 195.72,
        "Base DEF": 454.95,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.096
    },
    "60/60": {
        "Base HP": 8405.0,
        "Base ATK": 218.77,
        "Base DEF": 508.53,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.096
    },
    "60/70": {
        "Base HP": 9019.0,
        "Base ATK": 234.76,
        "Base DEF": 545.71,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.096
    },
    "70/70": {
        "Base HP": 9913.0,
        "Base ATK": 258.02,
        "Base DEF": 599.78,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.096
    },
    "70/80": {
        "Base HP": 10527.0,
        "Base ATK": 274.02,
        "Base DEF": 636.96,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.144
    },
    "80/80": {
        "Base HP": 11431.0,
        "Base ATK": 297.54,
        "Base DEF": 691.64,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.144
    },
    "80/90": {
        "Base HP": 12045.0,
        "Base ATK": 313.53,
        "Base DEF": 728.82,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.192
    },
    "90/90": {
        "Base HP": 12956.0,
        "Base ATK": 337.24,
        "Base DEF": 783.93,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus CRIT Rate": 0.192
    }
},
    talents: [
    {
        "name": "Normal Attack: Oath of Hunting Shadows",
        "image": "https://api.ambr.top/assets/UI/Skill_A_01.png",
        "description": "Normal Attack\nPerforms up to 5 rapid strikes.\nCharged Attack\nConsumes a certain amount of Stamina and fires Suppressing Shots in a fan pattern with her pistolet.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
        "data": {
            "1-Hit DMG": {
                "Lv1": "54.06%",
                "Lv2": "58.46%",
                "Lv3": "62.86%",
                "Lv4": "69.15%",
                "Lv5": "73.55%",
                "Lv6": "78.58%",
                "Lv7": "85.49%",
                "Lv8": "92.4%",
                "Lv9": "99.32%",
                "Lv10": "106.86%",
                "Lv11": "114.41%",
                "Lv12": "121.95%",
                "Lv13": "129.49%",
                "Lv14": "137.03%",
                "Lv15": "144.58%"
            },
            "2-Hit DMG": {
                "Lv1": "51.63%",
                "Lv2": "55.83%",
                "Lv3": "60.03%",
                "Lv4": "66.04%",
                "Lv5": "70.24%",
                "Lv6": "75.04%",
                "Lv7": "81.64%",
                "Lv8": "88.25%",
                "Lv9": "94.85%",
                "Lv10": "102.06%",
                "Lv11": "109.26%",
                "Lv12": "116.46%",
                "Lv13": "123.67%",
                "Lv14": "130.87%",
                "Lv15": "138.08%"
            },
            "3-Hit DMG": {
                "Lv1": "68.38%",
                "Lv2": "73.94%",
                "Lv3": "79.50%",
                "Lv4": "87.46%",
                "Lv5": "93.02%",
                "Lv6": "99.38%",
                "Lv7": "108.12%",
                "Lv8": "116.86%",
                "Lv9": "125.62%",
                "Lv10": "135.16%",
                "Lv11": "144.70%",
                "Lv12": "154.24%",
                "Lv13": "163.78%",
                "Lv14": "173.32%",
                "Lv15": "182.86%"
            },
            "4-Hit DMG": {
                "Lv1": "69.39%",
                "Lv2": "75.06%",
                "Lv3": "80.70%",
                "Lv4": "88.77%",
                "Lv5": "94.41%",
                "Lv6": "100.89%",
                "Lv7": "109.74%",
                "Lv8": "118.62%",
                "Lv9": "127.50%",
                "Lv10": "137.19%",
                "Lv11": "146.88%",
                "Lv12": "156.57%",
                "Lv13": "166.23%",
                "Lv14": "175.92%",
                "Lv15": "185.61%"
            },
            "5-Hit DMG": {
                "Lv1": "90.01%",
                "Lv2": "97.34%",
                "Lv3": "104.66%",
                "Lv4": "115.13%",
                "Lv5": "122.46%",
                "Lv6": "130.83%",
                "Lv7": "142.34%",
                "Lv8": "153.85%",
                "Lv9": "165.37%",
                "Lv10": "177.93%",
                "Lv11": "190.49%",
                "Lv12": "203.05%",
                "Lv13": "215.61%",
                "Lv14": "228.17%",
                "Lv15": "240.72%"
            },
            "Charged Attack DMG": {
                "Lv1": "128.14%",
                "Lv2": "138.57%",
                "Lv3": "149%",
                "Lv4": "163.9%",
                "Lv5": "174.33%",
                "Lv6": "186.25%",
                "Lv7": "202.64%",
                "Lv8": "219.03%",
                "Lv9": "235.42%",
                "Lv10": "253.3%",
                "Lv11": "271.18%",
                "Lv12": "289.06%",
                "Lv13": "306.94%",
                "Lv14": "324.82%",
                "Lv15": "342.7%"
            },
            "Charged Attack Stamina Cost": {
                "Lv1": "20",
                "Lv2": "20",
                "Lv3": "20",
                "Lv4": "20",
                "Lv5": "20",
                "Lv6": "20",
                "Lv7": "20",
                "Lv8": "20",
                "Lv9": "20",
                "Lv10": "20",
                "Lv11": "20",
                "Lv12": "20",
                "Lv13": "20",
                "Lv14": "20",
                "Lv15": "20"
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
        "name": "Hunter's Vigil",
        "image": "https://api.ambr.top/assets/UI/Skill_S_Clorinde_01.png",
        "description": "Preparing her pistolet, she enters the \"Night Vigil\" state, using steel and shot together. In this state, Clorinde's Normal Attacks will be transformed into \"Swift Hunt\" pistolet attacks, and the DMG dealt is converted into\nElectro DMG\nthat cannot be overridden by infusions, and she will be unable to use Charged Attacks. Using her Elemental Skill will transform it into \"Impale the Night\": Perform a lunging attack, dealing\nElectro DMG\n. The DMG done through the aforementioned method is considered Normal Attack DMG.\nSwift Hunt\n\u00b7 When her Bond of Life is equal to or greater than 100% of her max HP: Performs a pistolet shot.\n\u00b7 When her Bond of Life is less than 100%, firing her pistolet will grant her Bond of Life, with the amount gained based on her max HP. The shots she fires can pierce opponents, and DMG dealt to opponents in their path is increased.\nImpale the Night\nThe current percentage value of Clorinde's Bond of Life determines its effect:\n\u00b7 When the Bond of Life value is 0%, perform a normal lunging strike;\n\u00b7 When the Bond of Life value is less than 100% of her max HP, Clorinde is healed based on the Bond of Life value, and the AoE of the lunging attack and the DMG dealt is increased;\n\u00b7 When the value of the Bond of Life is equal to or greater than 100% of her max HP, use Impale the Night: Pact. The healing multiplier is increased, and the AoE and DMG dealt by the lunge is increased even further.\nIn addition, when Clorinde is in the Night Vigil state, healing effects other than Impale the Night will not take effect and will instead be converted into a Bond of Life that is a percentage of the healing that would have been received.\nClorinde will exit the \"Night Vigil\" state when she leaves the field.\nArkhe: Ousia\nPeriodically, when Clorinde's Swift Hunt shots strike opponents, she will summon a Surging Blade at the position hit that deals Ousia-aligned\nElectro DMG\n.\nThough the evil that lurked in the shadows of the night had been purged across thousands of years, a shadow that the light could not reach clouded human hearts.\nEven now, the warning left by the Golden Hunter is etched into her memory: Those of the Night Vigil, carrying aloft lit candles against the blackness, have greater need still to remain vigilant. Be not corrupted by the cold dark.",
        "data": {
            "Swift Hunt DMG": {
                "Lv1": "26.76% / 38.79%",
                "Lv2": "28.94% / 41.94%",
                "Lv3": "31.12% / 45.1%",
                "Lv4": "34.23% / 49.61%",
                "Lv5": "36.41% / 52.77%",
                "Lv6": "38.9% / 56.38%",
                "Lv7": "42.32% / 61.34%",
                "Lv8": "45.75% / 66.3%",
                "Lv9": "49.17% / 71.26%",
                "Lv10": "52.9% / 76.67%",
                "Lv11": "56.64% / 82.08%",
                "Lv12": "60.37% / 87.49%",
                "Lv13": "64.11% / 92.91%",
                "Lv14": "67.84% / 98.32%",
                "Lv15": "71.58% / 103.73%"
            },
            "Swift Hunt Bond of Life Gain": {
                "Lv1": "35% Max HP",
                "Lv2": "35% Max HP",
                "Lv3": "35% Max HP",
                "Lv4": "35% Max HP",
                "Lv5": "35% Max HP",
                "Lv6": "35% Max HP",
                "Lv7": "35% Max HP",
                "Lv8": "35% Max HP",
                "Lv9": "35% Max HP",
                "Lv10": "35% Max HP",
                "Lv11": "35% Max HP",
                "Lv12": "35% Max HP",
                "Lv13": "35% Max HP",
                "Lv14": "35% Max HP",
                "Lv15": "35% Max HP"
            },
            "Impale the Night DMG": {
                "Lv1": "32.97% / 43.96% / 25.11%",
                "Lv2": "35.66% / 47.54% / 27.16%",
                "Lv3": "38.34% / 51.12% / 29.2%",
                "Lv4": "42.17% / 56.23% / 32.12%",
                "Lv5": "44.86% / 59.81% / 34.16%",
                "Lv6": "47.93% / 63.9% / 36.5%",
                "Lv7": "52.14% / 69.52% / 39.71%",
                "Lv8": "56.36% / 75.15% / 42.92%",
                "Lv9": "60.58% / 80.77% / 46.14%",
                "Lv10": "65.18% / 86.9% / 49.64%",
                "Lv11": "69.78% / 93.04% / 53.14%",
                "Lv12": "74.38% / 99.17% / 56.65%",
                "Lv13": "78.98% / 105.31% / 60.15%",
                "Lv14": "83.58% / 111.44% / 63.66%",
                "Lv15": "88.18% / 117.58% / 67.16%"
            },
            "Impale the Night Healing": {
                "Lv1": "0% / 104% / 110% Bond of Life",
                "Lv2": "0% / 104% / 110% Bond of Life",
                "Lv3": "0% / 104% / 110% Bond of Life",
                "Lv4": "0% / 104% / 110% Bond of Life",
                "Lv5": "0% / 104% / 110% Bond of Life",
                "Lv6": "0% / 104% / 110% Bond of Life",
                "Lv7": "0% / 104% / 110% Bond of Life",
                "Lv8": "0% / 104% / 110% Bond of Life",
                "Lv9": "0% / 104% / 110% Bond of Life",
                "Lv10": "0% / 104% / 110% Bond of Life",
                "Lv11": "0% / 104% / 110% Bond of Life",
                "Lv12": "0% / 104% / 110% Bond of Life",
                "Lv13": "0% / 104% / 110% Bond of Life",
                "Lv14": "0% / 104% / 110% Bond of Life",
                "Lv15": "0% / 104% / 110% Bond of Life"
            },
            "Bond of Life Conversion": {
                "Lv1": "80% Healing",
                "Lv2": "80% Healing",
                "Lv3": "80% Healing",
                "Lv4": "80% Healing",
                "Lv5": "80% Healing",
                "Lv6": "80% Healing",
                "Lv7": "80% Healing",
                "Lv8": "80% Healing",
                "Lv9": "80% Healing",
                "Lv10": "80% Healing",
                "Lv11": "80% Healing",
                "Lv12": "80% Healing",
                "Lv13": "80% Healing",
                "Lv14": "80% Healing",
                "Lv15": "80% Healing"
            },
            "Surging Blade DMG": {
                "Lv1": "43.2%",
                "Lv2": "46.44%",
                "Lv3": "49.68%",
                "Lv4": "54%",
                "Lv5": "57.24%",
                "Lv6": "60.48%",
                "Lv7": "64.8%",
                "Lv8": "69.12%",
                "Lv9": "73.44%",
                "Lv10": "77.76%",
                "Lv11": "82.08%",
                "Lv12": "86.4%",
                "Lv13": "91.8%",
                "Lv14": "97.2%",
                "Lv15": "102.6%"
            },
            "Surging Blade Interval": {
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
            "Night Vigil Duration": {
                "Lv1": "7.5s",
                "Lv2": "7.5s",
                "Lv3": "7.5s",
                "Lv4": "7.5s",
                "Lv5": "7.5s",
                "Lv6": "7.5s",
                "Lv7": "7.5s",
                "Lv8": "7.5s",
                "Lv9": "7.5s",
                "Lv10": "7.5s",
                "Lv11": "7.5s",
                "Lv12": "7.5s",
                "Lv13": "7.5s",
                "Lv14": "7.5s",
                "Lv15": "7.5s"
            },
            "CD": {
                "Lv1": "16s",
                "Lv2": "16s",
                "Lv3": "16s",
                "Lv4": "16s",
                "Lv5": "16s",
                "Lv6": "16s",
                "Lv7": "16s",
                "Lv8": "16s",
                "Lv9": "16s",
                "Lv10": "16s",
                "Lv11": "16s",
                "Lv12": "16s",
                "Lv13": "16s",
                "Lv14": "16s",
                "Lv15": "16s"
            }
        }
    },
    {
        "name": "Last Lightfall",
        "image": "https://api.ambr.top/assets/UI/Skill_E_Clorinde_01.png",
        "description": "Grants herself a Bond of Life based upon her own max HP before swiftly evading and striking with saber and sidearm as one, dealing\nAoE Electro DMG\n.\nIt is said the legacy of the ancient art of resisting non-human beings with but a mortal body can be traced back to the Lochknights who resisted the Remurian Empire.\nBe that as it may, so long as one can find a way to control the level of force used, it's not as if it cannot be used in duels against ordinary opponents.",
        "data": {
            "Skill DMG": {
                "Lv1": "634.40%",
                "Lv2": "682.00%",
                "Lv3": "729.55%",
                "Lv4": "793.00%",
                "Lv5": "840.60%",
                "Lv6": "888.15%",
                "Lv7": "951.60%",
                "Lv8": "1015.05%",
                "Lv9": "1078.50%",
                "Lv10": "1141.90%",
                "Lv11": "1205.35%",
                "Lv12": "1268.80%",
                "Lv13": "1348.10%",
                "Lv14": "1427.40%",
                "Lv15": "1506.70%"
            },
            "Bond of Life Gain": {
                "Lv1": "66% Max HP",
                "Lv2": "72% Max HP",
                "Lv3": "78% Max HP",
                "Lv4": "84% Max HP",
                "Lv5": "90% Max HP",
                "Lv6": "96% Max HP",
                "Lv7": "102% Max HP",
                "Lv8": "108% Max HP",
                "Lv9": "114% Max HP",
                "Lv10": "120% Max HP",
                "Lv11": "126% Max HP",
                "Lv12": "132% Max HP",
                "Lv13": "138% Max HP",
                "Lv14": "144% Max HP",
                "Lv15": "150% Max HP"
            },
            "CD": {
                "Lv1": "15s",
                "Lv2": "15s",
                "Lv3": "15s",
                "Lv4": "15s",
                "Lv5": "15s",
                "Lv6": "15s",
                "Lv7": "15s",
                "Lv8": "15s",
                "Lv9": "15s",
                "Lv10": "15s",
                "Lv11": "15s",
                "Lv12": "15s",
                "Lv13": "15s",
                "Lv14": "15s",
                "Lv15": "15s"
            },
            "Energy Cost": {
                "Lv1": "60",
                "Lv2": "60",
                "Lv3": "60",
                "Lv4": "60",
                "Lv5": "60",
                "Lv6": "60",
                "Lv7": "60",
                "Lv8": "60",
                "Lv9": "60",
                "Lv10": "60",
                "Lv11": "60",
                "Lv12": "60",
                "Lv13": "60",
                "Lv14": "60",
                "Lv15": "60"
            }
        }
    }
],
    passiveSkills: [
    {
        "name": "Night Vigil's Harvest",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Liney_07.png",
        "description": "Displays the location of nearby\nresources unique to Fontaine\non the mini-map."
    },
    {
        "name": "Dark-Shattering Flame",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Clorinde_05.png",
        "description": "After a nearby party member triggers an\nElectro-related reaction\nagainst an opponent,\nElectro DMG\ndealt by Clorinde's Normal Attacks and\nLast Lightfall\nwill be increased by 20% of Clorinde's ATK for 15s. Max 3 stacks. Each stack is counted independently. The Maximum DMG increase achievable this way for the above attacks is 1,800."
    },
    {
        "name": "Lawful Remuneration",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Clorinde_06.png",
        "description": "If Clorinde's Bond of Life is equal to or greater than 100% of her Max HP, her CRIT Rate will increase by 10% for 15s whenever her Bond of Life value increases or decreases. Max 2 stacks. Each stack is counted independently.\nAdditionally,\nHunter's Vigil\n's Night Vigil state is buffed: While it is active, the percent of healing converted to Bond of Life increases to 100%."
    }
],
    constellations: [
    {
        "name": "\"From This Day, I Pass the Candle's Shadow-Veil\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Clorinde_01.png",
        "description": "While\nHunter's Vigil\n's Night Vigil state is active, when\nElectro DMG\nfrom Clorinde's Normal Attacks hit opponents, they will trigger 2 coordinated attacks from a Nightvigil Shade summoned near the hit opponent, each dealing 30% of Clorinde's ATK as\nElectro DMG\n.\nThis effect can occur once every 1.2s. DMG dealt this way is considered Normal Attack DMG.",
        "level": 1
    },
    {
        "name": "\"Now, As We Face the Perils of the Long Night\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Clorinde_02.png",
        "description": "Enhance the Passive Talent \"Dark-Shattering Flame\": After a nearby party member triggers an\nElectro-related reaction\nagainst an opponent,\nElectro DMG\ndealt by Clorinde's Normal Attacks and\nLast Lightfall\nwill be increased by 30% of Clorinde's ATK for 15s. Max 3 stacks. Each stack is counted independently. When you have 3 stacks, Clorinde's interruption resistance will be increased. The Maximum DMG increase achievable this way for the above attacks is 2,700.\nYou must first unlock the Passive Talent \"Dark-Shattering Flame.\"",
        "level": 2
    },
    {
        "name": "\"I Pledge to Remember the Oath of Daylight\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_U_Clorinde_02.png",
        "description": "Increases the Level of\nHunter's Vigil\nby 3.\nMaximum upgrade level is 15.",
        "level": 3
    },
    {
        "name": "\"To Enshrine Tears, Life, and Love\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Clorinde_03.png",
        "description": "When\nLast Lightfall\ndeals DMG to opponent(s), DMG dealt is increased based on Clorinde's Bond of Life percentage. Every 1% of her current Bond of Life will increase\nLast Lightfall\nDMG by 2%. The maximum\nLast Lightfall\nDMG increase achievable this way is 200%.",
        "level": 4
    },
    {
        "name": "\"Holding Dawn's Coming as My Votive\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_U_Clorinde_01.png",
        "description": "Increases the Level of\nLast Lightfall\nby 3.\nMaximum upgrade level is 15.",
        "level": 5
    },
    {
        "name": "\"And So Shall I Never Despair\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Clorinde_04.png",
        "description": "For 12s after\nHunter's Vigil\nis used, Clorinde's CRIT Rate will be increased by 10%, and her CRIT DMG by 70%.\nAdditionally, while Night Vigil is active, a Glimbright Shade will appear under specific circumstances, executing an attack that deals 200% of Clorinde's ATK as\nElectro DMG\n. DMG dealt this way is considered Normal Attack DMG.\nThe Glimbright Shade will appear under the following circumstances:\n\u00b7 When Clorinde is about to be hit by an attack.\n\u00b7 When Clorinde uses Impale the Night: Pact.\n1 Glimbright Shade can be summoned in the aforementioned ways every 1s. 6 Shades can be summoned per single Night Vigil duration.\nIn addition, while Night Vigil is active, the DMG Clorinde receives is decreased by 80% and her interruption resistance is increased. This effect will disappear after the Night Vigil state ends or 1s after she summons 6 Glimbright Shades.",
        "level": 6
    }
],
    talentScalings,
    characterBonuses,
    constellationBonuses
}

export default Clorinde
