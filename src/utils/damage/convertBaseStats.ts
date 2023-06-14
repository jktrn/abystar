import { attributeKeyMap, fullBaseStats } from '@/utils'
import { BaseStat, NewBaseStat } from '@/types/Character'

const convertBaseStats = (baseStats: BaseStat): NewBaseStat => {
    const newBaseStats = { ...fullBaseStats }

    for (const [key, value] of Object.entries(baseStats)) {
        const newKey = attributeKeyMap[key.replace('Bonus ', '').replace('%', '')]
        if (newKey) {
            newBaseStats[newKey] += parseFloat(value.replace('%', ''))
        }
    }

    return newBaseStats
}

export default convertBaseStats
