import { Bonus, Character, BaseStat, NewBaseStat } from '@/types/Character'
import { useEffect, useState } from 'react'

const keyMapping: BaseStat = {
    HP: 'HP',
    Atk: 'ATK',
    Def: 'DEF',
    EM: 'Elemental Mastery',
    ER: 'Energy Recharge',
    CritRate: 'CRIT Rate',
    CritDMG: 'CRIT DMG',
    Heal: 'Healing Bonus',
    Pyro: 'Pyro DMG Bonus',
    Cryo: 'Cryo DMG Bonus',
    Hydro: 'Hydro DMG Bonus',
    Elec: 'Electro DMG Bonus',
    Anemo: 'Anemo DMG Bonus',
    Geo: 'Geo DMG Bonus',
    Dendro: 'Dendro DMG Bonus',
    Phys: 'Physical DMG Bonus',
}

const fullBaseStats: NewBaseStat = {
    HP: 0,
    ATK: 0,
    DEF: 0,
    'Elemental Mastery': 0,
    'Energy Recharge': 100,
    'CRIT Rate': 0,
    'CRIT DMG': 0,
    'Healing Bonus': 0,
    'Pyro DMG Bonus': 0,
    'Cryo DMG Bonus': 0,
    'Hydro DMG Bonus': 0,
    'Electro DMG Bonus': 0,
    'Anemo DMG Bonus': 0,
    'Geo DMG Bonus': 0,
    'Dendro DMG Bonus': 0,
    'Physical DMG Bonus': 0,
}

export default function useBaseStats(
    character: Character,
    level: string,
    activeBonuses: Bonus[]
) {
    const currentBaseStats = character.baseStats[level]
    const initialBaseStats = { ...fullBaseStats }

    for (const [key, value] of Object.entries(currentBaseStats)) {
        const newKey = keyMapping[key.replace('Bonus ', '').replace('%', '')]
        if (newKey) {
            initialBaseStats[newKey] += parseFloat(value.replace('%', ''))
        }
    }

    const [baseStats, setBaseStats] = useState(initialBaseStats)

    // Apply all active bonuses to base stats
    useEffect(() => {
        let newBaseStats = { ...initialBaseStats }
        for (const bonus of activeBonuses) {
            newBaseStats = bonus.effect(newBaseStats)
        }
        setBaseStats(newBaseStats)
    }, [activeBonuses, initialBaseStats])

    return baseStats
}
