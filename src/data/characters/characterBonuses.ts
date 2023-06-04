import { Bonus, NewBaseStat } from '@/types/Character'

const characterBonuses: Record<string, Bonus[]> = {
    'Hu Tao': [
        {
            name: 'Hu Tao Bonus 1',
            effect: (baseStats: NewBaseStat, level?: number) => {
                baseStats['ATK'] += 200 * (level || 1)
                return baseStats
            },
            levels: 3,
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
