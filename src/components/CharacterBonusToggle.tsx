import { Bonus } from '@/types/Character'
import { useState } from 'react'

type BonusToggleProps = {
    bonus: Bonus
    onToggle: (bonus: Bonus, isActive: boolean) => void
}

function BonusToggle({ bonus, onToggle }: BonusToggleProps) {
    const [isActive, setIsActive] = useState(false)

    const handleToggle = () => {
        setIsActive(!isActive)
        onToggle(bonus, !isActive)
    }

    return (
        <label>
            <input type="checkbox" checked={isActive} onChange={handleToggle} />
            {bonus.name}
        </label>
    )
}

export default BonusToggle
