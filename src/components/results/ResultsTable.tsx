import { useMemo } from 'react'
import { Column, useTable } from 'react-table'
import { elementColors } from '@/utils'

interface ResultsTableProps {
    damageResults: any[]
}

interface Result {
    name: string
    nonCrit: string | number
    crit: string | number
    average: string | number
    damageType?: string
}

interface Aspect {
    aspectName: string
    damage: {
        nonCritDamage: number
        critDamage: number
        averageDamage: number
        damageType: string
    }
}

const ResultsTable: React.FC<ResultsTableProps> = ({ damageResults }) => {
    const columns: Column<Result>[] = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Non-Crit',
                accessor: 'nonCrit',
            },
            {
                Header: 'Crit',
                accessor: 'crit',
            },
            {
                Header: 'Average',
                accessor: 'average',
            },
        ],
        []
    )

    const tableData = useMemo(() => {
        const result: Result[] = []
        damageResults.forEach((skill) => {
            result.push({
                name: skill.skillName,
                nonCrit: '',
                crit: '',
                average: '',
            })
            skill.aspects.forEach((aspect: Aspect) => {
                result.push({
                    name: aspect.aspectName,
                    nonCrit: Math.round(aspect.damage.nonCritDamage),
                    crit: Math.round(aspect.damage.critDamage),
                    average: Math.round(aspect.damage.averageDamage),
                    damageType: aspect.damage.damageType,
                })
            })
        })
        return result
    }, [damageResults])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable<Result>({ columns, data: tableData })

    return (
        <table {...getTableProps()} className="w-full text-sm">
            <thead>
                {headerGroups.map((headerGroup, index) => (
                    <tr key={index}>
                        {headerGroup.headers.map((column) => (
                            <th
                                key={column.id}
                                className="border-b border-main-700 pb-2 font-bold"
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, index) => {
                    prepareRow(row)
                    return (
                        <tr key={index}>
                            {row.cells.map((cell) => (
                                <td
                                    key={cell.getCellProps().key}
                                    className={`border-b border-main-700 py-1 ${
                                        row.original.nonCrit === ''
                                            ? 'bg-main-800 px-2 font-bold'
                                            : 'px-4 py-1'
                                    }`}
                                    style={{
                                        color:
                                            cell.column.id !== 'name' &&
                                            row.original.damageType &&
                                            elementColors[
                                                row.original.damageType.toLowerCase() as keyof typeof elementColors
                                            ]
                                                ? elementColors[
                                                      row.original.damageType.toLowerCase() as keyof typeof elementColors
                                                  ]
                                                : undefined,
                                    }}
                                >
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ResultsTable
