import { Bonus, NewBaseStat } from '@/types/Character'

const characterBonuses: Record<string, Bonus[]> = {
    'Hu Tao': [
        {
            name: 'Hu Tao Bonus 1',
            effect: (baseStats: NewBaseStat) => {
                baseStats['ATK'] += 100
                return baseStats
            },
        },
        {
            name: 'Hu Tao Bonus 2',
            effect: (baseStats: NewBaseStat) => {
                baseStats['HP'] += 1000
                return baseStats
            },
        },
    ],
}

export default characterBonuses
