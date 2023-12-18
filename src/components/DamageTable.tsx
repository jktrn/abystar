import { useMemo } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    DamageResult,
    DamageResultAspect,
    FormulaOutputType,
} from '@/interfaces/Character'
import { elementColors } from '@/lib'

interface DamageTableProps {
    damageResults: DamageResult[] | null
}

interface Damage {
    [key: string]: any
}

const DamageTable = ({ damageResults }: DamageTableProps) => {
    const tableData = useMemo(() => {
        if (!damageResults) return []

        const result: Damage[] = []
        damageResults.forEach((talent) => {
            result.push({
                name: talent.talentName,
                nonCrit: '',
                crit: '',
                average: '',
            })
            talent.aspects.forEach((aspect: DamageResultAspect) => {
                if (
                    aspect.damage &&
                    'outputValue' in aspect.damage &&
                    'outputType' in aspect.damage
                ) {
                    const outputValue =
                        aspect.damage.outputType === FormulaOutputType.Time
                            ? `${aspect.damage.outputValue?.toFixed(1)}s`
                            : aspect.damage.outputType ===
                                FormulaOutputType.Percentage
                              ? `${aspect.damage.outputValue?.toFixed(1)}%`
                              : aspect.damage.outputValue
                                ? Math.round(aspect.damage.outputValue)
                                : 0
                    result.push({
                        name: aspect.aspectName,
                        average: outputValue,
                        outputType: aspect.damage.outputType,
                    })
                } else {
                    result.push({
                        name: aspect.aspectName,
                        nonCrit: aspect.damage.nonCritDamage
                            ? Math.round(aspect.damage.nonCritDamage)
                            : 0,
                        crit: aspect.damage.critDamage
                            ? Math.round(aspect.damage.critDamage)
                            : 0,
                        average: aspect.damage.averageDamage
                            ? Math.round(aspect.damage.averageDamage)
                            : 0,
                        damageType: aspect.damage.damageType,
                    })
                }
            })
        })
        return result
    }, [damageResults])

    if (!damageResults) return null

    const getCellStyle = (row: Damage, columnId: string) => {
        if (columnId === 'average' && row.outputType === FormulaOutputType.Healing) {
            return { color: '#98db1a' }
        } else if (columnId !== 'name' && row.damageType) {
            return {
                color: elementColors[
                    row.damageType.toLowerCase() as keyof typeof elementColors
                ],
            }
        }
        return undefined
    }

    if (tableData.length === 0) {
        return (
            <div className="m-4 flex flex-col gap-2">
                <span className="text-sm rounded-md bg-destructive/25 p-2 text-center">
                    This character is unimplemented! No results.
                </span>
            </div>
        )
    }

    return (
        <Table className="w-full text-sm">
            <TableHeader>
                <TableRow>
                    <TableHead className="border-b px-4 py-2 font-bold">
                        Name
                    </TableHead>
                    <TableHead className="w-[80px] border-b px-4 py-2 font-bold">
                        Normal
                    </TableHead>
                    <TableHead className="w-[80px] border-b px-4 py-2 font-bold">
                        Critical
                    </TableHead>
                    <TableHead className="w-[80px] border-b px-4 py-2 font-bold">
                        Average
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableData.map((row, index) => (
                    <TableRow
                        key={index}
                        className={
                            row.nonCrit === '' ? 'bg-secondary/25 font-bold' : ''
                        }
                    >
                        {row.nonCrit === '' ? (
                            <TableCell colSpan={4} className="border-b px-4 py-3">
                                {row.name}
                            </TableCell>
                        ) : (
                            <>
                                {!row.nonCrit ? (
                                    <>
                                        <TableCell
                                            colSpan={3}
                                            className="border-b px-4 py-2"
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell
                                            className="w-[80px] border-b px-4 py-2 text-right font-bold"
                                            style={getCellStyle(row, 'average')}
                                        >
                                            {row.average}
                                        </TableCell>
                                    </>
                                ) : (
                                    <>
                                        <TableCell className="border-b px-4 py-2">
                                            {row.name}
                                        </TableCell>
                                        <TableCell
                                            className="w-[80px] border-b px-4 py-2 text-right font-bold"
                                            style={getCellStyle(row, 'nonCrit')}
                                        >
                                            {row.nonCrit}
                                        </TableCell>
                                        <TableCell
                                            className="w-[80px] border-b px-4 py-2 text-right font-bold"
                                            style={getCellStyle(row, 'crit')}
                                        >
                                            {row.crit}
                                        </TableCell>
                                        <TableCell
                                            className="w-[80px] border-b px-4 py-2 text-right font-bold"
                                            style={getCellStyle(row, 'average')}
                                        >
                                            {row.average}
                                        </TableCell>
                                    </>
                                )}
                            </>
                        )}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DamageTable
