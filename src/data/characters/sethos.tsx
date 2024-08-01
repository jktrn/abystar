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

const Sethos: Character = {
    name: "Sethos",
    icon: "/images/characters/UI_AvatarIcon_Sethos.png",
    weapon: "Bow",
    vision: "Electro",
    rarity: 4,
    description: "The Temple of Silence's heir. Burdened with secrets, he comes from the sands.",
    occupation: "Temple of Silence",
    baseStats: {
    "1/20": {
        "Base HP": 821.0,
        "Base ATK": 19.05,
        "Base DEF": 46.92,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 0.0
    },
    "20/20": {
        "Base HP": 2108.0,
        "Base ATK": 48.95,
        "Base DEF": 120.55,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 0.0
    },
    "20/40": {
        "Base HP": 2721.0,
        "Base ATK": 63.19,
        "Base DEF": 155.6,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 0.0
    },
    "40/40": {
        "Base HP": 4076.0,
        "Base ATK": 94.65,
        "Base DEF": 233.08,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 0.0
    },
    "40/50": {
        "Base HP": 4512.0,
        "Base ATK": 104.76,
        "Base DEF": 257.98,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 24.0
    },
    "50/50": {
        "Base HP": 5189.0,
        "Base ATK": 120.5,
        "Base DEF": 296.74,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 24.0
    },
    "50/60": {
        "Base HP": 5770.0,
        "Base ATK": 133.98,
        "Base DEF": 329.95,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 48.0
    },
    "60/60": {
        "Base HP": 6448.0,
        "Base ATK": 149.72,
        "Base DEF": 368.71,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 48.0
    },
    "60/70": {
        "Base HP": 6884.0,
        "Base ATK": 159.84,
        "Base DEF": 393.62,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 48.0
    },
    "70/70": {
        "Base HP": 7561.0,
        "Base ATK": 175.56,
        "Base DEF": 432.33,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 48.0
    },
    "70/80": {
        "Base HP": 7996.0,
        "Base ATK": 185.67,
        "Base DEF": 457.24,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 72.0
    },
    "80/80": {
        "Base HP": 8674.0,
        "Base ATK": 201.41,
        "Base DEF": 496.0,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 72.0
    },
    "80/90": {
        "Base HP": 9110.0,
        "Base ATK": 211.53,
        "Base DEF": 520.91,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 96.0
    },
    "90/90": {
        "Base HP": 9787.0,
        "Base ATK": 227.26,
        "Base DEF": 559.67,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus Elemental Mastery": 96.0
    }
},
    talents: [
    {
        "name": "Normal Attack: Royal Reed Archery",
        "image": "https://api.ambr.top/assets/UI/Skill_A_02.png",
        "description": "Normal Attack\nPerforms up to 3 consecutive shots with a bow.\nCharged Attack\nPerforms a more precise\nAimed Shot\nwith increased DMG.\nWhile aiming, the power of Electro will accumulate on the arrowhead before the arrow is fired. Has different effects based on how long the energy has been charged:\n\u00b7Charge Level 1: Fires off an arrow carrying the power of lightning that deals\nElectro DMG\n.\n\u00b7Charge Level 2: Fires off a\nShadowpiercing Shot\nwhich can pierce enemies, dealing\nElectro DMG\nto enemies along its path. After the Shadowpiercing Shot is fully charged, Sethos cannot move around.\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
        "data": {
            "1-Hit DMG": {
                "Lv1": "52.61%",
                "Lv2": "56.9%",
                "Lv3": "61.18%",
                "Lv4": "67.3%",
                "Lv5": "71.58%",
                "Lv6": "76.47%",
                "Lv7": "83.2%",
                "Lv8": "89.93%",
                "Lv9": "96.66%",
                "Lv10": "104%",
                "Lv11": "111.35%",
                "Lv12": "118.69%",
                "Lv13": "126.03%",
                "Lv14": "133.37%",
                "Lv15": "140.71%"
            },
            "2-Hit DMG": {
                "Lv1": "50.41%",
                "Lv2": "54.50%",
                "Lv3": "58.61%",
                "Lv4": "64.47%",
                "Lv5": "68.57%",
                "Lv6": "73.27%",
                "Lv7": "79.71%",
                "Lv8": "86.15%",
                "Lv9": "92.61%",
                "Lv10": "99.64%",
                "Lv11": "106.67%",
                "Lv12": "113.70%",
                "Lv13": "120.74%",
                "Lv14": "127.77%",
                "Lv15": "134.80%"
            },
            "3-Hit DMG": {
                "Lv1": "73.99%",
                "Lv2": "80.01%",
                "Lv3": "86.03%",
                "Lv4": "94.63%",
                "Lv5": "100.66%",
                "Lv6": "107.54%",
                "Lv7": "117%",
                "Lv8": "126.47%",
                "Lv9": "135.93%",
                "Lv10": "146.25%",
                "Lv11": "156.58%",
                "Lv12": "166.9%",
                "Lv13": "177.22%",
                "Lv14": "187.55%",
                "Lv15": "197.87%"
            },
            "Aimed Shot": {
                "Lv1": "43.86%",
                "Lv2": "47.43%",
                "Lv3": "51%",
                "Lv4": "56.1%",
                "Lv5": "59.67%",
                "Lv6": "63.75%",
                "Lv7": "69.36%",
                "Lv8": "74.97%",
                "Lv9": "80.58%",
                "Lv10": "86.7%",
                "Lv11": "92.82%",
                "Lv12": "98.94%",
                "Lv13": "105.06%",
                "Lv14": "111.18%",
                "Lv15": "117.3%"
            },
            "Aimed Shot Charge Level 1": {
                "Lv1": "124%",
                "Lv2": "133.3%",
                "Lv3": "142.6%",
                "Lv4": "155%",
                "Lv5": "164.3%",
                "Lv6": "173.6%",
                "Lv7": "186%",
                "Lv8": "198.4%",
                "Lv9": "210.8%",
                "Lv10": "223.2%",
                "Lv11": "235.6%",
                "Lv12": "248%",
                "Lv13": "263.5%",
                "Lv14": "279%",
                "Lv15": "294.5%"
            },
            "Shadowpiercing Shot DMG": {
                "Lv1": "140% ATK + 134.56% Elemental Mastery",
                "Lv2": "150.5% ATK + 144.65% Elemental Mastery",
                "Lv3": "161% ATK + 154.74% Elemental Mastery",
                "Lv4": "175% ATK + 168.2% Elemental Mastery",
                "Lv5": "185.5% ATK + 178.29% Elemental Mastery",
                "Lv6": "196% ATK + 188.38% Elemental Mastery",
                "Lv7": "210% ATK + 201.84% Elemental Mastery",
                "Lv8": "224% ATK + 215.3% Elemental Mastery",
                "Lv9": "238% ATK + 228.75% Elemental Mastery",
                "Lv10": "252% ATK + 242.21% Elemental Mastery",
                "Lv11": "266% ATK + 255.66% Elemental Mastery",
                "Lv12": "280% ATK + 269.12% Elemental Mastery",
                "Lv13": "297.5% ATK + 285.94% Elemental Mastery",
                "Lv14": "315% ATK + 302.76% Elemental Mastery",
                "Lv15": "332.5% ATK + 319.58% Elemental Mastery"
            },
            "Plunge DMG": {
                "Lv1": "56.83%",
                "Lv2": "61.45%",
                "Lv3": "66.08%",
                "Lv4": "72.69%",
                "Lv5": "77.31%",
                "Lv6": "82.6%",
                "Lv7": "89.87%",
                "Lv8": "97.14%",
                "Lv9": "104.41%",
                "Lv10": "112.34%",
                "Lv11": "120.27%",
                "Lv12": "128.2%",
                "Lv13": "136.12%",
                "Lv14": "144.05%",
                "Lv15": "151.98%"
            },
            "Low Plunge DMG": {
                "Lv1": "113.63%",
                "Lv2": "122.88%",
                "Lv3": "132.13%",
                "Lv4": "145.35%",
                "Lv5": "154.59%",
                "Lv6": "165.17%",
                "Lv7": "179.7%",
                "Lv8": "194.23%",
                "Lv9": "208.77%",
                "Lv10": "224.62%",
                "Lv11": "240.48%",
                "Lv12": "256.34%",
                "Lv13": "272.19%",
                "Lv14": "288.05%",
                "Lv15": "303.9%"
            },
            "High Plunge DMG": {
                "Lv1": "141.93%",
                "Lv2": "153.49%",
                "Lv3": "165.04%",
                "Lv4": "181.54%",
                "Lv5": "193.1%",
                "Lv6": "206.3%",
                "Lv7": "224.45%",
                "Lv8": "242.61%",
                "Lv9": "260.76%",
                "Lv10": "280.57%",
                "Lv11": "300.37%",
                "Lv12": "320.18%",
                "Lv13": "339.98%",
                "Lv14": "359.79%",
                "Lv15": "379.59%"
            }
        }
    },
    {
        "name": "Ancient Rite: The Thundering Sands",
        "image": "https://api.ambr.top/assets/UI/Skill_S_Sethos_01.png",
        "description": "Gathers the might of thunder, dealing\nAoE Electro DMG\nand quickly retreating. If this attack triggers Electro-Charged, Superconduct, Overloaded, Quicken, Aggravate, Hyperbloom, or Electro Swirl reactions, Sethos recovers a certain amount of Elemental Energy.\n\"The God indwelt Priest, the Magi who turned pits to springs, the singers of the sea of sand still spread their stories... But I know those are not legends, for they are our ancestors.\"",
        "data": {
            "Skill DMG": {
                "Lv1": "115.6%",
                "Lv2": "124.27%",
                "Lv3": "132.94%",
                "Lv4": "144.5%",
                "Lv5": "153.17%",
                "Lv6": "161.84%",
                "Lv7": "173.4%",
                "Lv8": "184.96%",
                "Lv9": "196.52%",
                "Lv10": "208.08%",
                "Lv11": "219.64%",
                "Lv12": "231.2%",
                "Lv13": "245.65%",
                "Lv14": "260.1%",
                "Lv15": "274.55%"
            },
            "Energy Regeneration": {
                "Lv1": "12",
                "Lv2": "12",
                "Lv3": "12",
                "Lv4": "12",
                "Lv5": "12",
                "Lv6": "12",
                "Lv7": "12",
                "Lv8": "12",
                "Lv9": "12",
                "Lv10": "12",
                "Lv11": "12",
                "Lv12": "12",
                "Lv13": "12",
                "Lv14": "12",
                "Lv15": "12"
            },
            "CD": {
                "Lv1": "8s",
                "Lv2": "8s",
                "Lv3": "8s",
                "Lv4": "8s",
                "Lv5": "8s",
                "Lv6": "8s",
                "Lv7": "8s",
                "Lv8": "8s",
                "Lv9": "8s",
                "Lv10": "8s",
                "Lv11": "8s",
                "Lv12": "8s",
                "Lv13": "8s",
                "Lv14": "8s",
                "Lv15": "8s"
            }
        }
    },
    {
        "name": "Secret Rite: Twilight Shadowpiercer",
        "image": "https://api.ambr.top/assets/UI/Skill_E_Sethos_01.png",
        "description": "Perform a secret rite, entering the \"Twilight Meditation\" state, during which Sethos's Normal Attacks will be converted into enemy-piercing\nDusk Bolts\n: Deal\nElectro DMG\nto opponents in its path, with DMG increased based on Sethos's Elemental Mastery.\nSethos cannot perform Aimed Shots while in this state.\nDMG dealt by Dusk Bolts is considered Charged Attack DMG.\nThis effect will be canceled when Sethos leaves the field.\nThe archives of the Temple of Silence preserve many tomes left behind by Akhtamun, from the era of King Deshret. Many secret rituals of great power are recorded within, but even among the Temple of Silence, very few could master them.",
        "data": {
            "Dusk Bolt DMG Increase": {
                "Lv1": "196.16% Elemental Mastery",
                "Lv2": "210.87% Elemental Mastery",
                "Lv3": "225.58% Elemental Mastery",
                "Lv4": "245.2% Elemental Mastery",
                "Lv5": "259.91% Elemental Mastery",
                "Lv6": "274.62% Elemental Mastery",
                "Lv7": "294.24% Elemental Mastery",
                "Lv8": "313.86% Elemental Mastery",
                "Lv9": "333.47% Elemental Mastery",
                "Lv10": "353.09% Elemental Mastery",
                "Lv11": "372.7% Elemental Mastery",
                "Lv12": "392.32% Elemental Mastery",
                "Lv13": "416.84% Elemental Mastery",
                "Lv14": "441.36% Elemental Mastery",
                "Lv15": "465.88% Elemental Mastery"
            },
            "Twilight Meditation Duration": {
                "Lv1": "8s",
                "Lv2": "8s",
                "Lv3": "8s",
                "Lv4": "8s",
                "Lv5": "8s",
                "Lv6": "8s",
                "Lv7": "8s",
                "Lv8": "8s",
                "Lv9": "8s",
                "Lv10": "8s",
                "Lv11": "8s",
                "Lv12": "8s",
                "Lv13": "8s",
                "Lv14": "8s",
                "Lv15": "8s"
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
        "name": "Thoth's Revelation",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Tighnari_07.png",
        "description": "Displays the location of nearby\nresources unique to Sumeru\non the mini-map."
    },
    {
        "name": "Black Kite's Enigma",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sethos_05.png",
        "description": "When Aiming, the charging time is decreased by 0.285s based on each point of Sethos's current Elemental Energy. Charging time can be reduced to a minimum of 0.3s through this method and a maximum of 20 Energy can be tallied. If a\nShadowpiercing Shot\nis fired, consume the tallied amount of Elemental Energy; if it is a Charge Level 1 shot, then consume 50% of the tallied amount of Elemental Energy."
    },
    {
        "name": "The Sand King's Boon",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sethos_06.png",
        "description": "Sethos gains the \"Scorching Sandshade\" effect, increasing the DMG dealt by\nShadowpiercing Shots\nby 700% of Sethos's Elemental Mastery.\nThe Scorching Sandshade effect will be canceled when any of the following conditions are met:\n\u00b7 5s after a Shadowpiercing Shot first hits an opponent.\n\u00b7 After 4 Shadowpiercing Shots strike opponents.\nWhen a Shadowpiercing Shot affected by Scorching Sandshade first hits an opponent, Sethos will regain Scorching Sandshade after 15s."
    }
],
    constellations: [
    {
        "name": "Sealed Shrine's Spiritsong",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sethos_01.png",
        "description": "The CRIT Rate of\nShadowpiercing Shot\nis increased by 15%.",
        "level": 1
    },
    {
        "name": "Papyrus Scripture of Silent Secrets",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sethos_02.png",
        "description": "When any of the following conditions are met, Sethos gains a 15%\nElectro DMG Bonus\nfor 10s that may stack twice, with each stack duration counted independently:\n\u00b7 Consuming Elemental Energy through Aimed Shots; you must first unlock the Passive Talent \"Black Kite's Enigma\" to trigger this condition.\n\u00b7 Regaining Elemental Energy by triggering Elemental Reactions using\nAncient Rite: The Thundering Sands\n.\n\u00b7 Using\nSecret Rite: Twilight Shadowpiercer\n.",
        "level": 2
    },
    {
        "name": "Ode to the Moonrise Sage",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_U_Sethos_01.png",
        "description": "Increases the Level of\nNormal Attack: Royal Reed Archery\nby 3.\nMaximum upgrade level is 15.",
        "level": 3
    },
    {
        "name": "Beneficent Plumage",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sethos_03.png",
        "description": "When a\nShadowpiercing Shot\nor\nDusk Bolt\nstrikes 2 or more opponents, all nearby party members gain 80 Elemental Mastery for 10s.",
        "level": 4
    },
    {
        "name": "Record of the Desolate God's Burning Sands",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_U_Sethos_02.png",
        "description": "Increases the Level of\nSecret Rite: Twilight Shadowpiercer\nby 3.\nMaximum upgrade level is 15.",
        "level": 5
    },
    {
        "name": "Pylon of the Sojourning Sun Temple",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sethos_04.png",
        "description": "After\nShadowpiercing Shot\nstrikes an opponent, the Elemental Energy consumed by the Passive Talent \"Black Kite's Enigma\" will be returned. This effect can be triggered up to once every 15s. You must first unlock the Passive Talent \"Black Kite's Enigma.\"",
        "level": 6
    }
],
    talentScalings,
    characterBonuses,
    constellationBonuses
}

export default Sethos
