import { useEffect, useState } from 'react'
import { Character } from '../types/Character'

interface NewBaseStat {
    [key: string]: number
}

const keyMapping: { [key: string]: string } = {
    HP: 'HP',
    Atk: 'ATK',
    Def: 'DEF',
    CritRate: 'CRIT Rate',
    CritDMG: 'CRIT DMG',
    Heal: 'Healing Bonus',
    EM: 'Elemental Mastery',
    ER: 'Energy Recharge',
    Pyro: 'Pyro DMG Bonus',
    Cryo: 'Cryo DMG Bonus',
    Hydro: 'Hydro DMG Bonus',
    Elec: 'Electro DMG Bonus',
    Anemo: 'Anemo DMG Bonus',
    Geo: 'Geo DMG Bonus',
    Dendro: 'Dendro DMG Bonus',
    Phys: 'Physical DMG Bonus',
}

const fullBaseStats: { [key: string]: number } = {
    HP: 0,
    ATK: 0,
    DEF: 0,
    'CRIT Rate': 0,
    'CRIT DMG': 0,
    'Elemental Mastery': 0,
    'Energy Recharge': 100,
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

export function useBaseStats(character: Character, level: string) {
    const [baseStats, setBaseStats] = useState<NewBaseStat>({})

    useEffect(() => {
        const currentBaseStats = character.baseStats[level]
        const newBaseStats = { ...fullBaseStats }

        for (const [key, value] of Object.entries(currentBaseStats)) {
            const newKey =
                keyMapping[key.replace('Bonus ', '').replace('%', '')]
            if (newKey) {
                newBaseStats[newKey] += parseFloat(value.replace('%', ''))
            }
        }

        setBaseStats(newBaseStats)
    }, [character, level])

    return baseStats
}
