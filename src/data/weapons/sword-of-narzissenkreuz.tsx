import { Weapon } from '@/interfaces/Weapon'
// import { Bonus } from '@/interfaces/Character'

// const weaponBonuses: Bonus[] = [
// TODO: Implement
// ]

const SwordOfNarzissenkreuz: Weapon = {
    name: 'Sword of Narzissenkreuz',
    image: 'https://api.ambr.top/assets/UI/UI_EquipIcon_Sword_Purewill.png',
    type: 'Sword',
    rarity: 4,
    description:
        'A sword whose power faded when the story ended. It will now embark upon a new journey with the power that remains within it, which commemorates a certain great dream.',
    effectName: "Hero's Blade",
    effectDescription:
        'When the equipping character does not have an Arkhe: When Normal Attacks, Charged Attacks, or Plunging Attacks strike, a Pneuma or Ousia energy blast will be unleashed, dealing 160% of ATK as DMG. This effect can be triggered once every 12s. The energy blast type is determined by the current type of the Sword of Narzissenkreuz.',
    baseStats: {
        '1/20': {
            'Base ATK': 42.4,
            'Bonus ATK': 0.09,
        },
        '20/20': {
            'Base ATK': 108.93,
            'Bonus ATK': 0.159,
        },
        '20/40': {
            'Base ATK': 134.83,
            'Bonus ATK': 0.159,
        },
        '40/40': {
            'Base ATK': 204.83,
            'Bonus ATK': 0.2318,
        },
        '40/50': {
            'Base ATK': 230.83,
            'Bonus ATK': 0.2318,
        },
        '50/50': {
            'Base ATK': 265.86,
            'Bonus ATK': 0.2681,
        },
        '50/60': {
            'Base ATK': 291.76,
            'Bonus ATK': 0.2681,
        },
        '60/60': {
            'Base ATK': 326.78,
            'Bonus ATK': 0.3045,
        },
        '60/70': {
            'Base ATK': 352.68,
            'Bonus ATK': 0.3045,
        },
        '70/70': {
            'Base ATK': 387.66,
            'Bonus ATK': 0.3407,
        },
        '70/80': {
            'Base ATK': 413.66,
            'Bonus ATK': 0.3407,
        },
        '80/80': {
            'Base ATK': 448.68,
            'Bonus ATK': 0.3771,
        },
        '80/90': {
            'Base ATK': 474.58,
            'Bonus ATK': 0.3771,
        },
        '90/90': {
            'Base ATK': 509.61,
            'Bonus ATK': 0.4135,
        },
    },
    refinements: [
        {
            description:
                'When the equipping character does not have an Arkhe: When Normal Attacks, Charged Attacks, or Plunging Attacks strike, a Pneuma or Ousia energy blast will be unleashed, dealing 160% of ATK as DMG. This effect can be triggered once every 12s. The energy blast type is determined by the current type of the Sword of Narzissenkreuz.',
            level: 1,
        },
        {
            description:
                'When the equipping character does not have an Arkhe: When Normal Attacks, Charged Attacks, or Plunging Attacks strike, a Pneuma or Ousia energy blast will be unleashed, dealing 200% of ATK as DMG. This effect can be triggered once every 12s. The energy blast type is determined by the current type of the Sword of Narzissenkreuz.',
            level: 2,
        },
        {
            description:
                'When the equipping character does not have an Arkhe: When Normal Attacks, Charged Attacks, or Plunging Attacks strike, a Pneuma or Ousia energy blast will be unleashed, dealing 240% of ATK as DMG. This effect can be triggered once every 12s. The energy blast type is determined by the current type of the Sword of Narzissenkreuz.',
            level: 3,
        },
        {
            description:
                'When the equipping character does not have an Arkhe: When Normal Attacks, Charged Attacks, or Plunging Attacks strike, a Pneuma or Ousia energy blast will be unleashed, dealing 280% of ATK as DMG. This effect can be triggered once every 12s. The energy blast type is determined by the current type of the Sword of Narzissenkreuz.',
            level: 4,
        },
        {
            description:
                'When the equipping character does not have an Arkhe: When Normal Attacks, Charged Attacks, or Plunging Attacks strike, a Pneuma or Ousia energy blast will be unleashed, dealing 320% of ATK as DMG. This effect can be triggered once every 12s. The energy blast type is determined by the current type of the Sword of Narzissenkreuz.',
            level: 5,
        },
    ],
    // weaponBonuses
}

export default SwordOfNarzissenkreuz
