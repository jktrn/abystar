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

const AratakiItto: Character = {
    name: 'Arataki Itto',
    icon: '/images/characters/UI_AvatarIcon_Itto.png',
    weapon: 'Claymore',
    vision: 'Geo',
    rarity: 5,
    description:
        "The first and greatest head of the Arataki Gang, famed throughout Inazuma City's Hanamizaka... Wait, what? You've never heard of them? Are you trying to be funny here?",
    occupation: 'Arataki Gang',
    baseStats: {
        '1/20': {
            'Base HP': 1001.0,
            'Base ATK': 17.69,
            'Base DEF': 74.67,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/20': {
            'Base HP': 2597.0,
            'Base ATK': 45.89,
            'Base DEF': 193.69,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/40': {
            'Base HP': 3455.0,
            'Base ATK': 61.05,
            'Base DEF': 257.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/40': {
            'Base HP': 5170.0,
            'Base ATK': 91.35,
            'Base DEF': 385.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/50': {
            'Base HP': 5779.0,
            'Base ATK': 102.13,
            'Base DEF': 431.11,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/50': {
            'Base HP': 6649.0,
            'Base ATK': 117.5,
            'Base DEF': 495.99,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/60': {
            'Base HP': 7462.0,
            'Base ATK': 131.87,
            'Base DEF': 556.65,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/60': {
            'Base HP': 8341.0,
            'Base ATK': 147.4,
            'Base DEF': 622.2,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/70': {
            'Base HP': 8951.0,
            'Base ATK': 158.17,
            'Base DEF': 667.69,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/70': {
            'Base HP': 9838.0,
            'Base ATK': 173.85,
            'Base DEF': 733.85,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/80': {
            'Base HP': 10448.0,
            'Base ATK': 184.62,
            'Base DEF': 779.34,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/80': {
            'Base HP': 11345.0,
            'Base ATK': 200.47,
            'Base DEF': 846.24,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/90': {
            'Base HP': 11954.0,
            'Base ATK': 211.25,
            'Base DEF': 891.73,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
        '90/90': {
            'Base HP': 12858.0,
            'Base ATK': 227.22,
            'Base DEF': 959.16,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Fight Club Legend',
            image: '/images/characters/Skill_A_04.png',
            description:
                'Normal Attack\nPerforms up to 4 consecutive strikes.\nWhen the 2nd and 4th strikes hit opponents, Itto will gain 1 and 2 stacks of Superlative Superstrength, respectively.\nMax 5 stacks. Triggering this effect will refresh the current duration of any existing stacks.\nAdditionally, Itto\'s Normal Attack combo does not immediately reset after sprinting or using his Elemental Skill, "Masatsu Zetsugi: Akaushi Burst!"\nCharged Attack\nWhen holding to perform a Charged Attack, Itto unleashes a series of Arataki Kesagiri slashes without consuming Stamina. Instead, each Arataki Kesagiri slash consumes 1 stack of Superlative Superstrength. When the final stack is consumed, Itto delivers a powerful final slash.\nIf no stacks of Superlative Superstrength are available, Itto will perform a single Saichimonji Slash.\nPlunging Attack\nPlunges from mid-air to strike the ground, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '79.23%',
                    Lv2: '85.68%',
                    Lv3: '92.13%',
                    Lv4: '101.34%',
                    Lv5: '107.79%',
                    Lv6: '115.16%',
                    Lv7: '125.3%',
                    Lv8: '135.43%',
                    Lv9: '145.57%',
                    Lv10: '156.62%',
                    Lv11: '169.29%',
                    Lv12: '184.19%',
                    Lv13: '199.08%',
                    Lv14: '213.98%',
                    Lv15: '230.23%',
                },
                '2-Hit DMG': {
                    Lv1: '76.37%',
                    Lv2: '82.58%',
                    Lv3: '88.8%',
                    Lv4: '97.68%',
                    Lv5: '103.9%',
                    Lv6: '111%',
                    Lv7: '120.77%',
                    Lv8: '130.54%',
                    Lv9: '140.3%',
                    Lv10: '150.96%',
                    Lv11: '163.17%',
                    Lv12: '177.53%',
                    Lv13: '191.89%',
                    Lv14: '206.25%',
                    Lv15: '221.91%',
                },
                '3-Hit DMG': {
                    Lv1: '91.64%',
                    Lv2: '99.1%',
                    Lv3: '106.56%',
                    Lv4: '117.22%',
                    Lv5: '124.68%',
                    Lv6: '133.2%',
                    Lv7: '144.92%',
                    Lv8: '156.64%',
                    Lv9: '168.36%',
                    Lv10: '181.15%',
                    Lv11: '195.8%',
                    Lv12: '213.03%',
                    Lv13: '230.27%',
                    Lv14: '247.5%',
                    Lv15: '266.29%',
                },
                '4-Hit DMG': {
                    Lv1: '117.22%',
                    Lv2: '126.77%',
                    Lv3: '136.31%',
                    Lv4: '149.94%',
                    Lv5: '159.48%',
                    Lv6: '170.39%',
                    Lv7: '185.38%',
                    Lv8: '200.37%',
                    Lv9: '215.37%',
                    Lv10: '231.72%',
                    Lv11: '250.47%',
                    Lv12: '272.51%',
                    Lv13: '294.55%',
                    Lv14: '316.59%',
                    Lv15: '340.63%',
                },
                'Arataki Kesagiri Combo Slash DMG': {
                    Lv1: '91.16%',
                    Lv2: '98.58%',
                    Lv3: '106%',
                    Lv4: '116.6%',
                    Lv5: '124.02%',
                    Lv6: '132.5%',
                    Lv7: '144.16%',
                    Lv8: '155.82%',
                    Lv9: '167.48%',
                    Lv10: '180.2%',
                    Lv11: '194.78%',
                    Lv12: '211.92%',
                    Lv13: '229.06%',
                    Lv14: '246.2%',
                    Lv15: '264.89%',
                },
                'Arataki Kesagiri Final Slash DMG': {
                    Lv1: '190.92%',
                    Lv2: '206.46%',
                    Lv3: '222%',
                    Lv4: '244.2%',
                    Lv5: '259.74%',
                    Lv6: '277.5%',
                    Lv7: '301.92%',
                    Lv8: '326.34%',
                    Lv9: '350.76%',
                    Lv10: '377.4%',
                    Lv11: '407.93%',
                    Lv12: '443.82%',
                    Lv13: '479.72%',
                    Lv14: '515.62%',
                    Lv15: '554.78%',
                },
                'Superlative Superstrength Duration': {
                    Lv1: '60s',
                    Lv2: '60s',
                    Lv3: '60s',
                    Lv4: '60s',
                    Lv5: '60s',
                    Lv6: '60s',
                    Lv7: '60s',
                    Lv8: '60s',
                    Lv9: '60s',
                    Lv10: '60s',
                    Lv11: '60s',
                    Lv12: '60s',
                    Lv13: '60s',
                    Lv14: '60s',
                    Lv15: '60s',
                },
                'Saichimonji Slash DMG': {
                    Lv1: '90.47%',
                    Lv2: '97.84%',
                    Lv3: '105.2%',
                    Lv4: '115.72%',
                    Lv5: '123.08%',
                    Lv6: '131.5%',
                    Lv7: '143.07%',
                    Lv8: '154.64%',
                    Lv9: '166.22%',
                    Lv10: '178.84%',
                    Lv11: '193.31%',
                    Lv12: '210.32%',
                    Lv13: '227.33%',
                    Lv14: '244.34%',
                    Lv15: '262.89%',
                },
                'Saichimonji Slash Stamina Cost': {
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
                    Lv1: '81.83%',
                    Lv2: '88.49%',
                    Lv3: '95.16%',
                    Lv4: '104.67%',
                    Lv5: '111.33%',
                    Lv6: '118.94%',
                    Lv7: '129.41%',
                    Lv8: '139.88%',
                    Lv9: '150.35%',
                    Lv10: '161.76%',
                    Lv11: '173.18%',
                    Lv12: '184.6%',
                    Lv13: '196.02%',
                    Lv14: '207.44%',
                    Lv15: '218.86%',
                },
                'Low Plunge DMG': {
                    Lv1: '163.63%',
                    Lv2: '176.95%',
                    Lv3: '190.27%',
                    Lv4: '209.3%',
                    Lv5: '222.62%',
                    Lv6: '237.84%',
                    Lv7: '258.77%',
                    Lv8: '279.7%',
                    Lv9: '300.63%',
                    Lv10: '323.46%',
                    Lv11: '346.29%',
                    Lv12: '369.12%',
                    Lv13: '391.96%',
                    Lv14: '414.79%',
                    Lv15: '437.62%',
                },
                'High Plunge DMG': {
                    Lv1: '204.39%',
                    Lv2: '221.02%',
                    Lv3: '237.66%',
                    Lv4: '261.42%',
                    Lv5: '278.06%',
                    Lv6: '297.07%',
                    Lv7: '323.21%',
                    Lv8: '349.36%',
                    Lv9: '375.5%',
                    Lv10: '404.02%',
                    Lv11: '432.54%',
                    Lv12: '461.06%',
                    Lv13: '489.57%',
                    Lv14: '518.09%',
                    Lv15: '546.61%',
                },
            },
        },
        {
            name: 'Masatsu Zetsugi: Akaushi Burst!',
            image: '/images/characters/Skill_S_Itto_01.png',
            description:
                'Hurls Ushi, the young akaushi bull and auxiliary member of the Arataki Gang, dealing\nGeo DMG\nto opponents on hit. When Ushi hits opponents, Arataki Itto gains 1 stack of Superlative Superstrength.\nUshi will remain on the field and provide support in the following ways:\n\u00b7 Taunts surrounding opponents and draws their attacks.\n\u00b7 Inherits HP based on a percentage of Arataki Itto\'s Max HP.\n\u00b7 When Ushi takes DMG, Arataki Itto gains 1 stack of Superlative Superstrength. Only 1 stack can be gained in this way every 2s.\n\u00b7 Ushi will flee when its HP reaches 0 or its duration ends. It will grant Arataki Itto 1 stack of Superlative Superstrength when it leaves.\nHold\nAdjust throwing angle.\nUshi is considered a\nGeo construct\n. Arataki Itto can only deploy 1 Ushi on the field at any one time.\nThe name of this technique is derived from Onibudou (a light novel series written by Junkichi). However, calling it "Onisatsu Zetsugi" probably constitutes copyright infringement \u2014 not to mention how Itto himself is an oni and all...',
            data: {
                'Skill DMG': {
                    Lv1: '307.2%',
                    Lv2: '330.24%',
                    Lv3: '353.28%',
                    Lv4: '384%',
                    Lv5: '407.04%',
                    Lv6: '430.08%',
                    Lv7: '460.8%',
                    Lv8: '491.52%',
                    Lv9: '522.24%',
                    Lv10: '552.96%',
                    Lv11: '583.68%',
                    Lv12: '614.4%',
                    Lv13: '652.8%',
                    Lv14: '691.2%',
                    Lv15: '729.6%',
                },
                'Inherited HP': {
                    Lv1: '100%',
                    Lv2: '100%',
                    Lv3: '100%',
                    Lv4: '100%',
                    Lv5: '100%',
                    Lv6: '100%',
                    Lv7: '100%',
                    Lv8: '100%',
                    Lv9: '100%',
                    Lv10: '100%',
                    Lv11: '100%',
                    Lv12: '100%',
                    Lv13: '100%',
                    Lv14: '100%',
                    Lv15: '100%',
                },
                Duration: {
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
            name: 'Royal Descent: Behold, Itto the Evil!',
            image: '/images/characters/Skill_E_Itto_01.png',
            description:
                "Time to show 'em the might of the Arataki Gang! For a time, Itto lets out his inner Raging Oni King, wielding his Oni King's Kanabou in battle.\nThis state has the following special properties:\n\u00b7 Converts Itto's Normal, Charged, and Plunging Attacks to\nGeo DMG\n. This cannot be overridden.\n\u00b7 Increases Itto's Normal Attack SPD. Also increases his ATK based on his DEF.\n\u00b7 On hit, the 1st and 3rd strikes of his attack combo will each grant Arataki Itto 1 stack of Superlative Superstrength.\n\u00b7 Decreases Itto's Elemental and Physical RES by 20%.\nThe Raging Oni King state will be cleared when Itto leaves the field.\nThis is the pinnacle technique of the ultimate fighting style (according to Itto). It would be pointless for Arataki Itto to reference any other fighting styles to improve his own, for he, and no other, is the strongest, most terrible oni in the land.\nShouta thinks it looks really cool.",
            data: {
                'ATK Bonus': {
                    Lv1: '57.6% DEF',
                    Lv2: '61.92% DEF',
                    Lv3: '66.24% DEF',
                    Lv4: '72% DEF',
                    Lv5: '76.32% DEF',
                    Lv6: '80.64% DEF',
                    Lv7: '86.4% DEF',
                    Lv8: '92.16% DEF',
                    Lv9: '97.92% DEF',
                    Lv10: '103.68% DEF',
                    Lv11: '109.44% DEF',
                    Lv12: '115.2% DEF',
                    Lv13: '122.4% DEF',
                    Lv14: '129.6% DEF',
                    Lv15: '136.8% DEF',
                },
                'ATK SPD Bonus': {
                    Lv1: '10%',
                    Lv2: '10%',
                    Lv3: '10%',
                    Lv4: '10%',
                    Lv5: '10%',
                    Lv6: '10%',
                    Lv7: '10%',
                    Lv8: '10%',
                    Lv9: '10%',
                    Lv10: '10%',
                    Lv11: '10%',
                    Lv12: '10%',
                    Lv13: '10%',
                    Lv14: '10%',
                    Lv15: '10%',
                },
                Duration: {
                    Lv1: '11s',
                    Lv2: '11s',
                    Lv3: '11s',
                    Lv4: '11s',
                    Lv5: '11s',
                    Lv6: '11s',
                    Lv7: '11s',
                    Lv8: '11s',
                    Lv9: '11s',
                    Lv10: '11s',
                    Lv11: '11s',
                    Lv12: '11s',
                    Lv13: '11s',
                    Lv14: '11s',
                    Lv15: '11s',
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
                    Lv1: '70',
                    Lv2: '70',
                    Lv3: '70',
                    Lv4: '70',
                    Lv5: '70',
                    Lv6: '70',
                    Lv7: '70',
                    Lv8: '70',
                    Lv9: '70',
                    Lv10: '70',
                    Lv11: '70',
                    Lv12: '70',
                    Lv13: '70',
                    Lv14: '70',
                    Lv15: '70',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Woodchuck Chucked',
            image: '/images/characters/UI_Talent_S_Itto_07.png',
            description:
                'When a party member uses attacks to obtain wood from a tree, they have a 25% chance to get an additional log of wood.',
        },
        {
            name: 'Arataki Ichiban',
            image: '/images/characters/UI_Talent_S_Itto_05.png',
            description:
                'When Arataki Itto uses consecutive Arataki Kesagiri, he obtains the following effects:\n\u00b7 Each slash increases the ATK SPD of the next slash by 10%. Max ATK SPD increase is 30%.\n\u00b7 Increases his resistance to interruption.\nThese effects will be cleared once he stops performing consecutive slashes.',
        },
        {
            name: 'Bloodline of the Crimson Oni',
            image: '/images/characters/UI_Talent_S_Itto_06.png',
            description:
                "Arataki Kesagiri DMG is increased by 35% of Arataki Itto's DEF.",
        },
    ],
    constellations: [
        {
            name: 'Stay a While and Listen Up',
            image: '/images/characters/UI_Talent_S_Itto_01.png',
            description:
                'After using\nRoyal Descent: Behold, Itto the Evil!\n, Arataki Itto gains 2 stacks of Superlative Superstrength. After 1s, Itto will gain 1 stack of Superlative Superstrength every 0.5s for 1.5s.',
            level: 1,
        },
        {
            name: "Gather 'Round, It's a Brawl!",
            image: '/images/characters/UI_Talent_S_Itto_02.png',
            description:
                "After using\nRoyal Descent: Behold, Itto the Evil!\n, each party member whose Element is\nGeo\nwill decrease that skill's CD by 1.5s and restore 6 Energy to Arataki Itto.\nCD can be decreased by up to 4.5s in this manner. Max 18 Energy can be restored in this manner.",
            level: 2,
        },
        {
            name: 'Horns Lowered, Coming Through',
            image: '/images/characters/UI_Talent_U_Itto_01.png',
            description:
                'Increases the Level of\nMasatsu Zetsugi: Akaushi Burst!\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Jailhouse Bread and Butter',
            image: '/images/characters/UI_Talent_S_Itto_03.png',
            description:
                'When the Raging Oni King state caused by\nRoyal Descent: Behold, Itto the Evil!\nends, all nearby party members gain 20% DEF and 20% ATK for 10s.',
            level: 4,
        },
        {
            name: '10 Years of Hanamizaka Fame',
            image: '/images/characters/UI_Talent_U_Itto_02.png',
            description:
                'Increases the Level of\nRoyal Descent: Behold, Itto the Evil!\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Arataki Itto, Present!',
            image: '/images/characters/UI_Talent_S_Itto_04.png',
            description:
                "Arataki Itto's Charged Attacks deal +70% Crit DMG. Additionally, when he uses Arataki Kesagiri, he has a 50% chance to not consume stacks of Superlative Superstrength.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default AratakiItto
