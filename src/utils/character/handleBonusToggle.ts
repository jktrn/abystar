import { Bonus } from '@/types/Character'

export default function handleBonusToggle(
    bonus: Bonus,
    bonusStacks: number,
    activeBonuses: Bonus[],
    setActiveBonuses: (bonuses: Bonus[]) => void
) {
    const updatedActiveBonuses = activeBonuses.filter(
        (b) => b.name !== bonus.name
    )

    if (bonusStacks > 0) {
        updatedActiveBonuses.push({ ...bonus, currentStacks: bonusStacks })
    }

    setActiveBonuses(updatedActiveBonuses)
}
