import { Bonus } from '@/types/Character'

export default function handleBonusToggle(
    bonus: Bonus,
    isActive: boolean,
    activeBonuses: Bonus[],
    setActiveBonuses: (bonuses: Bonus[]) => void
) {
    if (isActive) {
        setActiveBonuses([...activeBonuses, bonus])
    } else {
        setActiveBonuses(activeBonuses.filter((b) => b !== bonus))
    }
}
