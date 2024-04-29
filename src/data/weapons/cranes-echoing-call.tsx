import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const CranesEchoingCall: Weapon = {
    name: "Crane's Echoing Call",
    image: '/images/weapons/UI_EquipIcon_Catalyst_MountainGale.png',
    type: 'Catalyst',
    rarity: 5,
    description:
        'A fan carved from pure jade, around which swirls an ancient aura of adeptal energy.',
    effectName: 'Cloudfall Axiom',
    effectDescription:
        "After the equipping character hits an opponent with a Plunging Attack, all nearby party members' Plunging Attacks will deal 28% increased DMG for 20s. When nearby party members hit opponents with Plunging Attacks, they will restore 2.5 Energy to the equipping character. Energy can be restored this way every 0.7s. This energy regain effect can be triggered even if the equipping character is not on the field.",
    baseStats: {
        '1/20': {
            'Base ATK': 49.14,
            'Bonus ATK': 0.036,
        },
        '20/20': {
            'Base ATK': 144.91,
            'Bonus ATK': 0.0636,
        },
        '20/40': {
            'Base ATK': 176.01,
            'Bonus ATK': 0.0636,
        },
        '40/40': {
            'Base ATK': 285.93,
            'Bonus ATK': 0.0927,
        },
        '40/50': {
            'Base ATK': 317.03,
            'Bonus ATK': 0.0927,
        },
        '50/50': {
            'Base ATK': 374.42,
            'Bonus ATK': 0.1072,
        },
        '50/60': {
            'Base ATK': 405.62,
            'Bonus ATK': 0.1072,
        },
        '60/60': {
            'Base ATK': 464.39,
            'Bonus ATK': 0.1218,
        },
        '60/70': {
            'Base ATK': 495.49,
            'Bonus ATK': 0.1218,
        },
        '70/70': {
            'Base ATK': 555.39,
            'Bonus ATK': 0.1363,
        },
        '70/80': {
            'Base ATK': 586.49,
            'Bonus ATK': 0.1363,
        },
        '80/80': {
            'Base ATK': 647.52,
            'Bonus ATK': 0.1508,
        },
        '80/90': {
            'Base ATK': 678.62,
            'Bonus ATK': 0.1508,
        },
        '90/90': {
            'Base ATK': 740.58,
            'Bonus ATK': 0.1654,
        },
    },
    refinements: [
        {
            description:
                "After the equipping character hits an opponent with a Plunging Attack, all nearby party members' Plunging Attacks will deal 28% increased DMG for 20s. When nearby party members hit opponents with Plunging Attacks, they will restore 2.5 Energy to the equipping character. Energy can be restored this way every 0.7s. This energy regain effect can be triggered even if the equipping character is not on the field.",
            level: 1,
        },
        {
            description:
                "After the equipping character hits an opponent with a Plunging Attack, all nearby party members' Plunging Attacks will deal 41% increased DMG for 20s. When nearby party members hit opponents with Plunging Attacks, they will restore 2.75 Energy to the equipping character. Energy can be restored this way every 0.7s. This energy regain effect can be triggered even if the equipping character is not on the field.",
            level: 2,
        },
        {
            description:
                "After the equipping character hits an opponent with a Plunging Attack, all nearby party members' Plunging Attacks will deal 54% increased DMG for 20s. When nearby party members hit opponents with Plunging Attacks, they will restore 3 Energy to the equipping character. Energy can be restored this way every 0.7s. This energy regain effect can be triggered even if the equipping character is not on the field.",
            level: 3,
        },
        {
            description:
                "After the equipping character hits an opponent with a Plunging Attack, all nearby party members' Plunging Attacks will deal 67% increased DMG for 20s. When nearby party members hit opponents with Plunging Attacks, they will restore 3.25 Energy to the equipping character. Energy can be restored this way every 0.7s. This energy regain effect can be triggered even if the equipping character is not on the field.",
            level: 4,
        },
        {
            description:
                "After the equipping character hits an opponent with a Plunging Attack, all nearby party members' Plunging Attacks will deal 80% increased DMG for 20s. When nearby party members hit opponents with Plunging Attacks, they will restore 3.5 Energy to the equipping character. Energy can be restored this way every 0.7s. This energy regain effect can be triggered even if the equipping character is not on the field.",
            level: 5,
        },
    ],
    // weaponBonuses
}

export default CranesEchoingCall
