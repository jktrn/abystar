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

const Sigewinne: Character = {
    name: "Sigewinne",
    icon: "/images/characters/UI_AvatarIcon_Sigewinne.png",
    weapon: "Bow",
    vision: "Hydro",
    rarity: 5,
    description: "A Melusine and the Fortress of Meropide's head nurse. She cares equally for every convict locked in the undersea prison.",
    occupation: "Fortress of Meropide",
    baseStats: {
    "1/20": {
        "Base HP": 1039.0,
        "Base ATK": 14.99,
        "Base DEF": 38.89,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.0
    },
    "20/20": {
        "Base HP": 2695.0,
        "Base ATK": 38.88,
        "Base DEF": 100.88,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.0
    },
    "20/40": {
        "Base HP": 3586.0,
        "Base ATK": 51.73,
        "Base DEF": 134.22,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.0
    },
    "40/40": {
        "Base HP": 5366.0,
        "Base ATK": 77.41,
        "Base DEF": 200.84,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.0
    },
    "40/50": {
        "Base HP": 5999.0,
        "Base ATK": 86.54,
        "Base DEF": 224.53,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.072
    },
    "50/50": {
        "Base HP": 6902.0,
        "Base ATK": 99.57,
        "Base DEF": 258.33,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.072
    },
    "50/60": {
        "Base HP": 7747.0,
        "Base ATK": 111.74,
        "Base DEF": 289.92,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.144
    },
    "60/60": {
        "Base HP": 8659.0,
        "Base ATK": 124.9,
        "Base DEF": 324.06,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.144
    },
    "60/70": {
        "Base HP": 9292.0,
        "Base ATK": 134.03,
        "Base DEF": 347.76,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.144
    },
    "70/70": {
        "Base HP": 10213.0,
        "Base ATK": 147.31,
        "Base DEF": 382.21,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.144
    },
    "70/80": {
        "Base HP": 10846.0,
        "Base ATK": 156.44,
        "Base DEF": 405.91,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.216
    },
    "80/80": {
        "Base HP": 11777.0,
        "Base ATK": 169.87,
        "Base DEF": 440.75,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.216
    },
    "80/90": {
        "Base HP": 12410.0,
        "Base ATK": 179.0,
        "Base DEF": 464.44,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.288
    },
    "90/90": {
        "Base HP": 13348.0,
        "Base ATK": 192.54,
        "Base DEF": 499.56,
        "CRIT Rate": 0.05,
        "CRIT DMG": 0.5,
        "Bonus HP": 0.288
    }
},
    talents: [
    {
        "name": "Normal Attack: Targeted Treatment",
        "image": "https://api.ambr.top/assets/UI/Skill_A_02.png",
        "description": "Normal Attack\nPerforms up to 3 consecutive attacks.\nCharged Attack\nPerforms a more precise\nAimed Shot\nwith increased DMG.\nWhile aiming, the power of Hydro will continually accumulate on the arrow. After fully charging, Sigewinne will periodically fire slow-moving Mini-Stration Bubbles toward the target, dealing\nHydro DMG\n. When released, an arrow imbued with torrential energy will deal\nHydro DMG\nto the opponent hit.\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
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
                "Lv1": "51.07%",
                "Lv2": "55.23%",
                "Lv3": "59.39%",
                "Lv4": "65.32%",
                "Lv5": "69.48%",
                "Lv6": "74.23%",
                "Lv7": "80.76%",
                "Lv8": "87.3%",
                "Lv9": "93.83%",
                "Lv10": "100.95%",
                "Lv11": "108.08%",
                "Lv12": "115.21%",
                "Lv13": "122.33%",
                "Lv14": "129.46%",
                "Lv15": "136.59%"
            },
            "3-Hit DMG": {
                "Lv1": "78.29%",
                "Lv2": "84.66%",
                "Lv3": "91.04%",
                "Lv4": "100.14%",
                "Lv5": "106.51%",
                "Lv6": "113.8%",
                "Lv7": "123.81%",
                "Lv8": "133.82%",
                "Lv9": "143.84%",
                "Lv10": "154.76%",
                "Lv11": "165.69%",
                "Lv12": "176.61%",
                "Lv13": "187.53%",
                "Lv14": "198.46%",
                "Lv15": "209.38%"
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
            "Fully-Charged Aimed Shot": {
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
            "Mini-Stration Bubble DMG": {
                "Lv1": "24.8%",
                "Lv2": "26.66%",
                "Lv3": "28.52%",
                "Lv4": "31%",
                "Lv5": "32.86%",
                "Lv6": "34.72%",
                "Lv7": "37.2%",
                "Lv8": "39.68%",
                "Lv9": "42.16%",
                "Lv10": "44.64%",
                "Lv11": "47.12%",
                "Lv12": "49.6%",
                "Lv13": "52.7%",
                "Lv14": "55.8%",
                "Lv15": "58.9%"
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
        "name": "Rebound Hydrotherapy",
        "image": "https://api.ambr.top/assets/UI/Skill_S_Sigewinne_01.png",
        "description": "Blows a\nBolstering Bubblebalm\nthat can stimulate blood flow and help patients drift off to sleep using a bubblegun specially made in the Fortress of Meropide.\nBolstering Bubblebalms will bounce between nearby opponents, dealing\nHydro DMG\nbased on Sigewinne's max HP to opponents it hits. When it bounces, it will restore HP to all nearby party members except Sigewinne herself. The amount healed is based on Sigewinne's max HP.\nAfter bouncing 5 times, the Bolstering Bubblebalm will disappear and restore HP to Sigewinne based on her max HP value.\nWhen no opponents are present, the Bolstering Bubblebalm will bounce nearby. Only one Bolstering Bubblebalm created by a Sigewinne may exist at once.\nWhen Held, the Bolstering Bubblebalm can be boosted to an even bigger size.\nHold\nEnter Aiming Mode to begin blowing an even bigger, even more breathtaking Bolstering Bubblebalm!\nThe Bolstering Bubblebalm will grow bigger the longer the skill is Held, until it grows up to two tiers in size. Each tier it grows increases its DMG by 5% and healing by 5%. When a Bolstering Bubblebalm bounces, it will drop down a tier in size, until it returns to being a normal Bolstering Bubblebalm.\nAfter weaker opponents are hit by big Bolstering Bubblebalms, they will be imprisoned and will be unable to move.\nIn addition, 2 Sourcewater Droplets will be created near Sigewinne when she uses this Skill. Each Sourcewater Droplet Sigewinne collects will grant her a Bond of Life worth 10% of her Max HP.\nWhen Sigewinne's Bond of Life is cleared, she regains 1 Elemental Energy for every 2,000 HP worth of the Bond of Life that was cleared. Sigewinne can regain up to 5 Elemental Energy in this way.\nArkhe: Ousia\nBolstering Bubblebalms periodically call down a Surging Blade on the position they hit, dealing Ousia-aligned\nHydro DMG\nbased on Sigewinne's max HP.\n\"What do you think? Not only can this kind of hydrotherapy stimulate the circulatory system, but it can also cheer patients up, ooh, and that's not all, it can even help patients who ought to get some rest have a nice nap...\"",
        "data": {
            "Bolstering Bubblebalm DMG": {
                "Lv1": "2.28% Max HP",
                "Lv2": "2.45% Max HP",
                "Lv3": "2.62% Max HP",
                "Lv4": "2.85% Max HP",
                "Lv5": "3.02% Max HP",
                "Lv6": "3.19% Max HP",
                "Lv7": "3.42% Max HP",
                "Lv8": "3.65% Max HP",
                "Lv9": "3.88% Max HP",
                "Lv10": "4.1% Max HP",
                "Lv11": "4.33% Max HP",
                "Lv12": "4.56% Max HP",
                "Lv13": "4.85% Max HP",
                "Lv14": "5.13% Max HP",
                "Lv15": "5.42% Max HP"
            },
            "Bolstering Bubblebalm Healing": {
                "Lv1": "2.8% Max HP + 269.63",
                "Lv2": "3.01% Max HP + 296.6",
                "Lv3": "3.22% Max HP + 325.81",
                "Lv4": "3.5% Max HP + 357.27",
                "Lv5": "3.71% Max HP + 390.98",
                "Lv6": "3.92% Max HP + 426.94",
                "Lv7": "4.2% Max HP + 465.14",
                "Lv8": "4.48% Max HP + 505.59",
                "Lv9": "4.76% Max HP + 548.29",
                "Lv10": "5.04% Max HP + 593.23",
                "Lv11": "5.32% Max HP + 640.43",
                "Lv12": "5.6% Max HP + 689.87",
                "Lv13": "5.95% Max HP + 741.55",
                "Lv14": "6.3% Max HP + 795.49",
                "Lv15": "6.65% Max HP + 851.67"
            },
            "Final Bounce Healing": {
                "Lv1": "50% Max HP",
                "Lv2": "50% Max HP",
                "Lv3": "50% Max HP",
                "Lv4": "50% Max HP",
                "Lv5": "50% Max HP",
                "Lv6": "50% Max HP",
                "Lv7": "50% Max HP",
                "Lv8": "50% Max HP",
                "Lv9": "50% Max HP",
                "Lv10": "50% Max HP",
                "Lv11": "50% Max HP",
                "Lv12": "50% Max HP",
                "Lv13": "50% Max HP",
                "Lv14": "50% Max HP",
                "Lv15": "50% Max HP"
            },
            "Surging Blade DMG": {
                "Lv1": "0.68% Max HP",
                "Lv2": "0.74% Max HP",
                "Lv3": "0.79% Max HP",
                "Lv4": "0.86% Max HP",
                "Lv5": "0.91% Max HP",
                "Lv6": "0.96% Max HP",
                "Lv7": "1.03% Max HP",
                "Lv8": "1.09% Max HP",
                "Lv9": "1.16% Max HP",
                "Lv10": "1.23% Max HP",
                "Lv11": "1.3% Max HP",
                "Lv12": "1.37% Max HP",
                "Lv13": "1.45% Max HP",
                "Lv14": "1.54% Max HP",
                "Lv15": "1.62% Max HP"
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
            "CD": {
                "Lv1": "18s",
                "Lv2": "18s",
                "Lv3": "18s",
                "Lv4": "18s",
                "Lv5": "18s",
                "Lv6": "18s",
                "Lv7": "18s",
                "Lv8": "18s",
                "Lv9": "18s",
                "Lv10": "18s",
                "Lv11": "18s",
                "Lv12": "18s",
                "Lv13": "18s",
                "Lv14": "18s",
                "Lv15": "18s"
            }
        }
    },
    {
        "name": "Super Saturated Syringing",
        "image": "https://api.ambr.top/assets/UI/Skill_E_Sigewinne_01.png",
        "description": "Takes out a special Fortress of Meropide-made syringe and assault the area in front with waves of kindness and medicine, dealing\nAoE Hydro DMG\nbased on Sigewinne's max HP.\nIn addition, Sigewinne absorbs up to 2 nearby Sourcewater Droplets within a certain range when she uses this skill.\n\"Hey, overdosing on medicine is no different from poison, you know, it's real dangerous! But patients need care and concern, and nobody can overdose on that!\"",
        "data": {
            "Skill DMG": {
                "Lv1": "11.77% Max HP",
                "Lv2": "12.65% Max HP",
                "Lv3": "13.54% Max HP",
                "Lv4": "14.71% Max HP",
                "Lv5": "15.6% Max HP",
                "Lv6": "16.48% Max HP",
                "Lv7": "17.66% Max HP",
                "Lv8": "18.83% Max HP",
                "Lv9": "20.01% Max HP",
                "Lv10": "21.19% Max HP",
                "Lv11": "22.36% Max HP",
                "Lv12": "23.54% Max HP",
                "Lv13": "25.01% Max HP",
                "Lv14": "26.48% Max HP",
                "Lv15": "27.96% Max HP"
            },
            "Duration": {
                "Lv1": "2.5s",
                "Lv2": "2.5s",
                "Lv3": "2.5s",
                "Lv4": "2.5s",
                "Lv5": "2.5s",
                "Lv6": "2.5s",
                "Lv7": "2.5s",
                "Lv8": "2.5s",
                "Lv9": "2.5s",
                "Lv10": "2.5s",
                "Lv11": "2.5s",
                "Lv12": "2.5s",
                "Lv13": "2.5s",
                "Lv14": "2.5s",
                "Lv15": "2.5s"
            },
            "CD": {
                "Lv1": "18s",
                "Lv2": "18s",
                "Lv3": "18s",
                "Lv4": "18s",
                "Lv5": "18s",
                "Lv6": "18s",
                "Lv7": "18s",
                "Lv8": "18s",
                "Lv9": "18s",
                "Lv10": "18s",
                "Lv11": "18s",
                "Lv12": "18s",
                "Lv13": "18s",
                "Lv14": "18s",
                "Lv15": "18s"
            },
            "Energy Cost": {
                "Lv1": "70",
                "Lv2": "70",
                "Lv3": "70",
                "Lv4": "70",
                "Lv5": "70",
                "Lv6": "70",
                "Lv7": "70",
                "Lv8": "70",
                "Lv9": "70",
                "Lv10": "70",
                "Lv11": "70",
                "Lv12": "70",
                "Lv13": "70",
                "Lv14": "70",
                "Lv15": "70"
            }
        }
    }
],
    passiveSkills: [
    {
        "name": "Emergency Dose",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sigewinne_07.png",
        "description": "While underwater, heal your active character over 2.5s when their HP falls under 50%. The amount healed is equal to 50% of their Max HP, and their All Elemental and Physical RES will be decreased by 10% for 10s. This effect can be triggered up to once every 20s."
    },
    {
        "name": "Requires Appropriate Rest",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sigewinne_05.png",
        "description": "Sigewinne grants herself the \"Semi-Strict Bedrest\" effect for 18s after using\nRebound Hydrotherapy\n: Sigewinne gains an 8%\nHydro DMG Bonus\nand 10 stacks of Convalescence. When the Elemental Skills of your nearby off-field party members other than Sigewinne deal DMG, consume 1 stack of Convalescence, and increase the DMG dealt by this instance of Elemental Skill DMG. Every 1,000 Max HP Sigewinne has above 30,000 increases the DMG by 80. The maximum DMG increase for Elemental Skills that can be gained in this way is 2,800."
    },
    {
        "name": "Detailed Diagnosis, Thorough Treatment",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sigewinne_06.png",
        "description": "When Sigewinne performs healing, the amount healed for this instance is increased based on the total current value of the Bonds of Life on all party members: For each 1,000 HP worth of Bonds of Life, the outgoing healing is increased by 3%. The amount of healing provided can be increased by up to 30% in this way."
    }
],
    constellations: [
    {
        "name": "\"Can the Happiest of Spirits Understand Anxiety?\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sigewinne_01.png",
        "description": "Rebound Hydrotherapy\n's Bolstering Bubblebalm can bounce 3 extra times, and the first 3 bounces will not cause big Bubblebalms to become smaller.\nThe Passive Talent \"Requires Appropriate Rest\" is enhanced: Each Bubblebalm bounce adds 1 stack to her Convalescence tally, and the values for the Convalescence stacks' DMG bonus will be modified to: Every 1,000 max HP Sigewinne has above 30,000 increases the DMG by 100. The maximum DMG increase for Elemental Skills that can be gained in this way is 3,500. You must first unlock the Passive Talent \"Requires Appropriate Rest.\"",
        "level": 1
    },
    {
        "name": "\"Can the Most Merciful of Spirits Defeat Its Foes?\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sigewinne_02.png",
        "description": "When using\nRebound Hydrotherapy\nand\nSuper Saturated Syringing\n, Sigewinne can create a Bubbly Shield worth 30% of her Max HP that absorbs\nHydro DMG\nwith 250% efficiency. The Bubbly Shield will persist until Sigewinne finishes using relevant skills.\nAdditionally, after Rebound Hydrotherapy's Bolstering Bubblebalm or Super Saturated Syringing hits an opponent, that opponent's\nHydro RES\nwill be decreased by 35% for 8s.",
        "level": 2
    },
    {
        "name": "\"Can the Healthiest of Spirits Cure Fevers?\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_U_Sigewinne_01.png",
        "description": "Increases the Level of\nRebound Hydrotherapy\nby 3.\nMaximum upgrade level is 15.",
        "level": 3
    },
    {
        "name": "\"Can the Loveliest of Spirits Keep Decay at Bay?\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sigewinne_03.png",
        "description": "The duration of\nSuper Saturated Syringing\nis extended by 3s.",
        "level": 4
    },
    {
        "name": "\"Can the Most Joyful of Spirits Alleviate Agony?\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_U_Sigewinne_02.png",
        "description": "Increases the Level of\nSuper Saturated Syringing\nby 3.\nMaximum upgrade level is 15.",
        "level": 5
    },
    {
        "name": "\"Can the Most Radiant of Spirits Pray For Me?\"",
        "image": "https://api.ambr.top/assets/UI/UI_Talent_S_Sigewinne_04.png",
        "description": "When Sigewinne performs healing, she will increase the CRIT Rate and CRIT DMG of her\nSuper Saturated Syringing\nbased on her Max HP. Every 1,000 Max HP she has will increase CRIT Rate by 0.4% and CRIT DMG by 2.2% for 15s. The maximum increase achievable this way is 20% CRIT Rate and 110% CRIT DMG.",
        "level": 6
    }
],
    talentScalings,
    characterBonuses,
    constellationBonuses
}

export default Sigewinne
