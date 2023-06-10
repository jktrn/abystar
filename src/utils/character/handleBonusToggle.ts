import { Bonus } from '@/types/Character'

export default function handleBonusToggle(
    bonus: Bonus,
    bonusStacks: number,
    activeBonuses: Bonus[],
    setActiveBonuses: (bonuses: Bonus[]) => void,
    constellationLevel: number
) {
    const updatedActiveBonuses = activeBonuses.filter(
        (b) => b.name !== bonus.name
    )

    if (
        bonusStacks > 0 &&
        (!bonus.minConstellation ||
            bonus.minConstellation <= constellationLevel)
    ) {
        updatedActiveBonuses.push({ ...bonus, currentStacks: bonusStacks })
    }

    setActiveBonuses(updatedActiveBonuses)
}
