import { Bonus, NewBaseStat } from '@/types/Character'

const constellationBonuses: Record<string, Bonus[]> = {
    'Hu Tao': [
        {
            name: 'Crimson Bouquet',
            description:
                "While in Paramita Papilio state, Hu Tao's Charge Attacks do not consume Stamina.",
            icon: '/images/constellation-icons/hu-tao-constellation1.png',
            effect: (baseStats: NewBaseStat) => {
                baseStats['Charged Attack Stamina Consumption'] = 6969
                return baseStats
            },
        },
        // ...
    ],
}

export default constellationBonuses
