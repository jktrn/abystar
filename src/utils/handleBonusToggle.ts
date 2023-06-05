import { Bonus } from '@/types/Character'

export default function handleBonusToggle(
    bonus: Bonus,
    level: number,
    activeBonuses: Bonus[],
    setActiveBonuses: (bonuses: Bonus[]) => void
) {
    const updatedActiveBonuses = activeBonuses.filter(
        (b) => b.name !== bonus.name
    )

    if (level > 0) {
        updatedActiveBonuses.push({ ...bonus, level })
    }

    setActiveBonuses(updatedActiveBonuses)
}
