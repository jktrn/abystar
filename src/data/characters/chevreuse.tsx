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

const Chevreuse: Character = {
    name: 'Chevreuse',
    icon: '/images/characters/chevreuse.png',
    weapon: 'Polearm',
    vision: 'Pyro',
    rarity: 4,
    description: '\u6d4b\u8bd5\u89d2\u8272',
    occupation: '???',
    baseStats: {
        '1/20': {
            'Base HP': '1003',
            'Base ATK': '16.21',
            'Base DEF': '50.7',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '0%',
        },
        '20/20': {
            'Base HP': '2577',
            'Base ATK': '41.63',
            'Base DEF': '130.25',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '0%',
        },
        '20/40': {
            'Base HP': '3326',
            'Base ATK': '53.74',
            'Base DEF': '168.13',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '0%',
        },
        '40/40': {
            'Base HP': '4982',
            'Base ATK': '80.49',
            'Base DEF': '251.84',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '0%',
        },
        '40/50': {
            'Base HP': '5514',
            'Base ATK': '89.09',
            'Base DEF': '278.75',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '6.0%',
        },
        '50/50': {
            'Base HP': '6343',
            'Base ATK': '102.48',
            'Base DEF': '320.63',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '6.0%',
        },
        '50/60': {
            'Base HP': '7052',
            'Base ATK': '113.95',
            'Base DEF': '356.51',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '12.0%',
        },
        '60/60': {
            'Base HP': '7881',
            'Base ATK': '127.34',
            'Base DEF': '398.39',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '12.0%',
        },
        '60/70': {
            'Base HP': '8413',
            'Base ATK': '135.94',
            'Base DEF': '425.3',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '12.0%',
        },
        '70/70': {
            'Base HP': '9241',
            'Base ATK': '149.31',
            'Base DEF': '467.13',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '12.0%',
        },
        '70/80': {
            'Base HP': '9773',
            'Base ATK': '157.91',
            'Base DEF': '494.04',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '18.0%',
        },
        '80/80': {
            'Base HP': '10602',
            'Base ATK': '171.29',
            'Base DEF': '535.92',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '18.0%',
        },
        '80/90': {
            'Base HP': '11134',
            'Base ATK': '179.9',
            'Base DEF': '562.83',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '24.0%',
        },
        '90/90': {
            'Base HP': '11962',
            'Base ATK': '193.28',
            'Base DEF': '604.71',
            'CRIT Rate': '5.0%',
            'CRIT DMG': '50.0%',
            'Bonus HP': '24.0%',
        },
    },
    activeSkills: [
        {
            name: 'Normal Attack: Line Bayonet Thrust EX',
            image: 'https://genshin.honeyhunterworld.com/img/s_903101.webp',
            description:
                'Normal Attack\nPerforms up to 4 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '53.13%',
                    Lv2: '57.45%',
                    Lv3: '61.78%',
                    Lv4: '67.96%',
                    Lv5: '72.28%',
                    Lv6: '77.22%',
                    Lv7: '84.02%',
                    Lv8: '90.82%',
                    Lv9: '97.61%',
                    Lv10: '105.02%',
                    Lv11: '112.44%',
                    Lv12: '119.85%',
                    Lv13: '127.26%',
                    Lv14: '134.68%',
                    Lv15: '142.09%',
                },
                '2-Hit DMG': {
                    Lv1: '49.31%',
                    Lv2: '53.32%',
                    Lv3: '57.34%',
                    Lv4: '63.07%',
                    Lv5: '67.09%',
                    Lv6: '71.67%',
                    Lv7: '77.98%',
                    Lv8: '84.29%',
                    Lv9: '90.59%',
                    Lv10: '97.47%',
                    Lv11: '104.36%',
                    Lv12: '111.24%',
                    Lv13: '118.12%',
                    Lv14: '125%',
                    Lv15: '131.88%',
                },
                '3-Hit DMG': {
                    Lv1: '60.09%',
                    Lv2: '64.99%',
                    Lv3: '69.89%',
                    Lv4: '76.87%',
                    Lv5: '81.76%',
                    Lv6: '87.35%',
                    Lv7: '95.04%',
                    Lv8: '102.72%',
                    Lv9: '110.41%',
                    Lv10: '118.80%',
                    Lv11: '127.18%',
                    Lv12: '135.57%',
                    Lv13: '143.96%',
                    Lv14: '152.34%',
                    Lv15: '160.72%',
                },
                '4-Hit DMG': {
                    Lv1: '77.26%',
                    Lv2: '83.55%',
                    Lv3: '89.84%',
                    Lv4: '98.82%',
                    Lv5: '105.11%',
                    Lv6: '112.3%',
                    Lv7: '122.18%',
                    Lv8: '132.06%',
                    Lv9: '141.95%',
                    Lv10: '152.73%',
                    Lv11: '163.51%',
                    Lv12: '174.29%',
                    Lv13: '185.07%',
                    Lv14: '195.85%',
                    Lv15: '206.63%',
                },
                'Charged Attack DMG': {
                    Lv1: '121.69%',
                    Lv2: '131.6%',
                    Lv3: '141.5%',
                    Lv4: '155.65%',
                    Lv5: '165.56%',
                    Lv6: '176.87%',
                    Lv7: '192.44%',
                    Lv8: '208%',
                    Lv9: '223.57%',
                    Lv10: '240.55%',
                    Lv11: '257.53%',
                    Lv12: '274.51%',
                    Lv13: '291.49%',
                    Lv14: '308.47%',
                    Lv15: '325.45%',
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
            name: 'Short-Range Rapid Interdiction Fire',
            image: 'https://genshin.honeyhunterworld.com/img/s_903201.webp',
            description:
                'Chevreuse quickly shoulders her musket and fires at her opponent(s), dealing\nAoE Pyro DMG\n.\nHold to fire in a different fashion.\nHold\nEnter Aiming Mode, locking a target in her sights to fire a precise interdiction shot. If Chevreuse has an Overcharged Ball, then she will fire the Overcharged Ball instead, dealing greater\nPyro DMG\nin a larger area.\nChevreuse gains 1 Overcharged Ball every time a nearby character in the party triggers an Overloaded reaction, and can have up to 1 Overcharged Ball at a time.\nFor a short duration after Chevreuse fires a shot, she will continuously restore HP to the active character on the field. The amount healed is based on her Max HP.\nArkhe: Ousia\nPeriodically, after Chevreuse\'s Short-Range Rapid Interdiction Fire hits, a Surging Blade will be called forth that deals ousia-aligned\nPyro DMG\n.\n"Actually, training regulations only had the phrase "interdiction fire," but the protagonist of this novel believes that even how stylish your terminology is can affect how motivated your troops are, which can put your opponents on the back foot right from the get-go... I think that\'s a good point, so I changed the regulations!"',
            data: {
                'Press DMG': {
                    Lv1: '115.2%',
                    Lv2: '123.84%',
                    Lv3: '132.48%',
                    Lv4: '144%',
                    Lv5: '152.64%',
                    Lv6: '161.28%',
                    Lv7: '172.8%',
                    Lv8: '184.32%',
                    Lv9: '195.84%',
                    Lv10: '207.36%',
                    Lv11: '218.88%',
                    Lv12: '230.4%',
                    Lv13: '244.8%',
                    Lv14: '259.2%',
                    Lv15: '273.6%',
                },
                'Hold DMG': {
                    Lv1: '172.8%',
                    Lv2: '185.76%',
                    Lv3: '198.72%',
                    Lv4: '216%',
                    Lv5: '228.96%',
                    Lv6: '241.92%',
                    Lv7: '259.2%',
                    Lv8: '276.48%',
                    Lv9: '293.76%',
                    Lv10: '311.04%',
                    Lv11: '328.32%',
                    Lv12: '345.6%',
                    Lv13: '367.2%',
                    Lv14: '388.8%',
                    Lv15: '410.4%',
                },
                'Overcharged Ball DMG': {
                    Lv1: '282.4%',
                    Lv2: '303.58%',
                    Lv3: '324.76%',
                    Lv4: '353%',
                    Lv5: '374.18%',
                    Lv6: '395.36%',
                    Lv7: '423.6%',
                    Lv8: '451.84%',
                    Lv9: '480.08%',
                    Lv10: '508.32%',
                    Lv11: '536.56%',
                    Lv12: '564.8%',
                    Lv13: '600.1%',
                    Lv14: '635.4%',
                    Lv15: '670.7%',
                },
                'HP Regeneration Over Time': {
                    Lv1: '2.67% Max HP + 256.79',
                    Lv2: '2.87% Max HP + 282.47',
                    Lv3: '3.07% Max HP + 310.3',
                    Lv4: '3.33% Max HP + 340.26',
                    Lv5: '3.53% Max HP + 372.36',
                    Lv6: '3.73% Max HP + 406.61',
                    Lv7: '4% Max HP + 442.99',
                    Lv8: '4.27% Max HP + 481.52',
                    Lv9: '4.53% Max HP + 522.18',
                    Lv10: '4.8% Max HP + 564.98',
                    Lv11: '5.07% Max HP + 609.93',
                    Lv12: '5.33% Max HP + 657.01',
                    Lv13: '5.67% Max HP + 706.24',
                    Lv14: '6% Max HP + 757.61',
                    Lv15: '6.33% Max HP + 811.11',
                },
                'Healing Duration': {
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
                'Surging Blade DMG': {
                    Lv1: '28.8%',
                    Lv2: '30.96%',
                    Lv3: '33.12%',
                    Lv4: '36%',
                    Lv5: '38.16%',
                    Lv6: '40.32%',
                    Lv7: '43.2%',
                    Lv8: '46.08%',
                    Lv9: '48.96%',
                    Lv10: '51.84%',
                    Lv11: '54.72%',
                    Lv12: '57.6%',
                    Lv13: '61.2%',
                    Lv14: '64.8%',
                    Lv15: '68.4%',
                },
                'Surging Blade Interval': {
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
            },
        },
        {
            name: 'Ring of Bursting Grenades',
            image: 'https://genshin.honeyhunterworld.com/img/s_903901.webp',
            description:
                'Chevreuse fires an explosive grenade at opponents with her musket, dealing\nAoE Pyro DMG.\nAfter the projectile hits, it will split into many secondary explosive shells.\nThe secondary explosive shells will burst after a short interval, dealing\nPyro DMG\nto nearby opponents.\n"Theoretically, a rectangular blast would be most efficient at destroying enemy formations. Unfortunately, the cross-section of an explosive shock wave is round, like most cakes. So, the secondary explosive shells can only be arranged like the fruit on a cake, forming a ring around the edge.',
            data: {
                'Explosive Grenade DMG': {
                    Lv1: '368.16%',
                    Lv2: '395.77%',
                    Lv3: '423.38%',
                    Lv4: '460.2%',
                    Lv5: '487.81%',
                    Lv6: '515.42%',
                    Lv7: '552.24%',
                    Lv8: '589.06%',
                    Lv9: '625.87%',
                    Lv10: '662.69%',
                    Lv11: '699.5%',
                    Lv12: '736.32%',
                    Lv13: '782.34%',
                    Lv14: '828.36%',
                    Lv15: '874.38%',
                },
                'Secondary Explosive Shell DMG': {
                    Lv1: '49.09%',
                    Lv2: '52.77%',
                    Lv3: '56.45%',
                    Lv4: '61.36%',
                    Lv5: '65.04%',
                    Lv6: '68.72%',
                    Lv7: '73.63%',
                    Lv8: '78.54%',
                    Lv9: '83.45%',
                    Lv10: '88.36%',
                    Lv11: '93.27%',
                    Lv12: '98.18%',
                    Lv13: '104.31%',
                    Lv14: '110.45%',
                    Lv15: '116.58%',
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
            name: 'Double Time March',
            image: 'https://genshin.honeyhunterworld.com/img/p_902301.webp',
            description:
                'Decreases sprinting Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects.',
        },
        {
            name: "Vanguard's Coordinated Tactics",
            image: 'https://genshin.honeyhunterworld.com/img/p_902101.webp',
            description:
                'When the Elemental Type of all party members is\nPyro\nor\nElectro\nand there is at least one Pyro and one Electro Elemental Type each in the party:\nChevreuse grants "Coordinated Tactics" to nearby party members: After a character triggers the Overloaded reaction, the\nPyro\nand\nElectro\nRES of the opponent(s) affected by this Overloaded reaction will be decreased by 40% for 6s.',
        },
        {
            name: 'Vertical Force Coordination',
            image: 'https://genshin.honeyhunterworld.com/img/p_902201.webp',
            description:
                'After Chevreuse fires an Overcharged Ball using\nShort-Range Rapid Interdiction Fire\n, nearby\nPyro\nand\nElectro\ncharacters in the party gain 1% increased ATK for every 1000 Max HP Chevreuse has for 30s. ATK can be increased by up to 40% in this way.',
        },
    ],
    constellations: [
        {
            name: "Stable Front Line's Resolve",
            image: 'https://genshin.honeyhunterworld.com/img/c_901.webp',
            description:
                'When characters with the "Coordinated Tactics" status (not including Chevreuse herself) trigger the Overloaded reaction, they will recover 6 Energy. This effect can be triggered once every 10s.\nYou must first unlock the Passive Talent "Vanguard\'s Coordinated Tactics."',
            level: 1,
        },
        {
            name: 'Sniper Induced Explosion',
            image: 'https://genshin.honeyhunterworld.com/img/c_902.webp',
            description:
                "After Holding\nShort-Range Rapid Interdiction Fire\nand hitting a target, trigger 2 chain explosions at the location where said target was hit. Each explosion deals\nPyro DMG\nequal to 120% of Chevreuse's ATK. This effect can be triggered up to once every 10s, and DMG dealt by this skill is considered Elemental Skill DMG.",
            level: 2,
        },
        {
            name: 'Practiced Field Stripping Technique',
            image: 'https://genshin.honeyhunterworld.com/img/c_903.webp',
            description:
                'Increases the Level of\nShort-Range Rapid Interdiction Fire\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'The Secret to Rapid-Fire Multishots',
            image: 'https://genshin.honeyhunterworld.com/img/c_904.webp',
            description:
                'After using\nRing of Bursting Grenades\n, the CD for Chevreuse using Hold\nShort-Range Rapid Interdiction Fire\nis decreased by 100%. This effect is removed after Short-Range Rapid Interdiction Fire has been fired twice using Hold or after 6s.',
            level: 4,
        },
        {
            name: 'Enhanced Incendiary Firepower',
            image: 'https://genshin.honeyhunterworld.com/img/c_905.webp',
            description:
                'Increases the Level of\nRing of Bursting Grenades\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'In Pursuit of Ending Evil',
            image: 'https://genshin.honeyhunterworld.com/img/c_906.webp',
            description:
                "After 12s of the healing effect from\nShort-Range Rapid Interdiction Fire\n, all nearby party members recover HP equivalent to 10% of Chevreuse's Max HP.\nAfter a party member is healed by Short-Range Rapid Interdiction Fire, they gain a 20%\nPyro DMG Bonus\nand\nElectro DMG Bonus\nfor 8s. Max 3 stacks. Each stack's duration is counted independently.",
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default Chevreuse
