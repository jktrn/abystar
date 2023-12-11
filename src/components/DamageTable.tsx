import { useMemo } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DamageResult, DamageResultAspect, FormulaOutputType } from '@/interfaces/Character'
import { elementColors } from '@/lib'

interface DamageTableProps {
    damageResults: DamageResult[] | null
}

interface Damage {
    [key: string]: any
}

const DamageTable = ({ damageResults }: DamageTableProps) => {
    if (!damageResults) return null

    const getCellStyle = (row: Damage, columnId: string) => {
        if (columnId === 'average' && row.outputType === FormulaOutputType.Healing) {
            return { color: '#98db1a' };
        } else if (columnId !== 'name' && row.damageType) {
            return {
                color: elementColors[row.damageType.toLowerCase() as keyof typeof elementColors]
            };
        }
        return undefined;
    };

    const tableData = useMemo(() => {
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
                    // Handle non-damage output
                    result.push({
                        name: aspect.aspectName,
                        average: outputValue,
                        outputType: aspect.damage.outputType,
                    })
                } else {
                    // Handle damage output
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

    return (
        <Table className="w-full text-sm">
            <TableHeader>
                <TableRow>
                    <TableHead className="border-b px-4 py-2 font-bold">Name</TableHead>
                    <TableHead className="border-b px-4 py-2 font-bold w-[80px]">Normal</TableHead>
                    <TableHead className="border-b px-4 py-2 font-bold w-[80px]">Critical</TableHead>
                    <TableHead className="border-b px-4 py-2 font-bold w-[80px]">Average</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableData.map((row, index) => (
                    <TableRow key={index} className={row.nonCrit === '' ? "bg-secondary/25 font-bold" : ""}>
                        {row.nonCrit === '' ? (
                            <TableCell colSpan={4} className="border-b py-3 px-4">
                                {row.name}
                            </TableCell>
                        ) : (
                            <>
                                <TableCell className="border-b py-2 px-4">{row.name}</TableCell>
                                <TableCell className="border-b py-2 px-4 w-[80px] text-right font-bold" style={getCellStyle(row, 'nonCrit')}>
                                    {row.nonCrit}
                                </TableCell>
                                <TableCell className="border-b py-2 px-4 w-[80px] text-right font-bold" style={getCellStyle(row, 'crit')}>
                                    {row.crit}
                                </TableCell>
                                <TableCell className="border-b py-2 px-4 w-[80px] text-right font-bold" style={getCellStyle(row, 'average')}>
                                    {row.average}
                                </TableCell>
                            </>
                        )}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DamageTable