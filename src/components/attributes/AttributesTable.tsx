import { NewBaseStat } from '@/types/Character'
import Image from 'next/image'
import { useMemo } from 'react'
import { attributeSections, availableIcons, parseScalingValue } from '@/utils'
import { Fragment } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface AttributesTableProps {
    baseStats: NewBaseStat
    initialBaseStats: NewBaseStat
    displayStats: string[]
}

const AttributesTable: React.FC<AttributesTableProps> = ({
    baseStats,
    initialBaseStats,
    displayStats,
}) => {
    const data = useMemo(
        () =>
            Object.entries(baseStats)
                .filter(([key]) => displayStats.includes(key))
                .map(([key, value]) => {
                    let formattedValue
                    let formattedInitialValue
                    let difference
                    if (['HP', 'DEF', 'Elemental Mastery', 'ATK'].includes(key)) {
                        formattedValue = Math.round(value)
                        formattedInitialValue = Math.round(initialBaseStats[key])
                        difference = formattedValue - formattedInitialValue
                    } else {
                        formattedValue = `${value.toFixed(1)}%`
                        formattedInitialValue = `${initialBaseStats[key].toFixed(
                            1
                        )}%`
                        difference = `${(value - initialBaseStats[key]).toFixed(1)}%`
                    }
                    return {
                        stat: key,
                        value: formattedValue,
                        initialValue: formattedInitialValue,
                        difference: difference,
                    }
                }),
        [baseStats, displayStats, initialBaseStats]
    )

    return (
        <Table className="w-full text-sm">
            <TableHeader>
                <TableRow>
                    <TableHead className="px-4">Stat</TableHead>
                    <TableHead className="px-4 text-right">Initial</TableHead>
                    <TableHead className="px-4 text-right">Bonus</TableHead>
                    <TableHead className="px-4 text-right">Current</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {attributeSections.map((section, sectionIndex) => (
                    <Fragment key={sectionIndex}>
                        <TableRow>
                            <TableCell colSpan={4} className="border-b bg-secondary/25 px-4 py-3 font-bold">
                                {section.name}
                            </TableCell>
                        </TableRow>
                        {data
                            .filter((row) =>
                                section.attributes.includes(row.stat)
                            )
                            .map((row, rowIndex) => (
                                <TableRow
                                    key={rowIndex}
                                    className={
                                        baseStats[row.stat] === 0
                                            ? 'brightness-50'
                                            : ''
                                    }
                                >
                                    <TableCell className="px-4">
                                        <span className="flex items-center gap-2">
                                            {availableIcons.includes(row.stat.toLowerCase().split(' ').join('-')) && (
                                                <Image
                                                    className="h-auto w-auto"
                                                    src={`/images/attributes/${row.stat.toLowerCase().split(' ').join('-')}.png`}
                                                    alt={row.stat}
                                                    width={12}
                                                    height={12}
                                                />
                                            )}
                                            {row.stat}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right font-bold px-4">
                                        {row.initialValue}
                                    </TableCell>
                                    <TableCell
                                        className="text-right font-bold px-4"
                                        style={{
                                            color:
                                                row.difference === 0 || row.difference === '0.0%'
                                                    ? baseStats[row.stat] === 0
                                                        ? undefined
                                                        : '#A1A1AA'
                                                    : typeof row.difference === 'number'
                                                        ? row.difference > 0
                                                            ? '#34D399'
                                                            : '#F87171'
                                                        : typeof row.difference === 'string' && parseScalingValue(row.difference)[0] > 0
                                                            ? '#34D399'
                                                            : '#F87171',
                                        }}
                                    >
                                        {row.difference === 0 || row.difference === '0.0%'
                                            ? baseStats[row.stat] === 0
                                                ? row.difference
                                                : '+0'
                                            : typeof row.difference === 'number'
                                                ? row.difference > 0
                                                    ? `+${row.difference}`
                                                    : row.difference
                                                : typeof row.difference === 'string' && parseScalingValue(row.difference)[0] > 0
                                                    ? `+${row.difference}`
                                                    : row.difference}
                                    </TableCell>
                                    <TableCell className="text-right font-bold px-4">
                                        {row.value}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </Fragment>
                ))}
            </TableBody>
        </Table>
    )
}

export default AttributesTable
