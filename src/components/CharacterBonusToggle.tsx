import { Bonus } from '@/types/Character'
import { useState } from 'react'

interface BonusToggleProps {
    bonus: Bonus
    onToggle: (bonus: Bonus, level: number) => void
}

const BonusToggle = ({ bonus, onToggle }: BonusToggleProps) => {
    const [level, setLevel] = useState(0)

    const handleLevelChange = (newLevel: number) => {
        setLevel(newLevel)
        onToggle(bonus, newLevel)
    }

    return (
        <label className="flex w-1/2 flex-none justify-between rounded-md bg-main-800 p-2">
            <span>{bonus.name}</span>
            {bonus.levels ? (
                <select
                    value={level}
                    onChange={(event) =>
                        handleLevelChange(parseInt(event.target.value))
                    }
                >
                    <option value={0}>Off</option>
                    {[...Array(bonus.levels)].map((_, i) => (
                        <option key={i} value={i + 1}>
                            {i + 1}-Stack
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type="checkbox"
                    checked={level > 0}
                    onChange={() => handleLevelChange(level > 0 ? 0 : 1)}
                />
            )}
        </label>
    )
}

export default BonusToggle
