import Image from 'next/image'
import { useMemo } from 'react'
import { Column, useTable } from 'react-table'

interface BaseStats {
    [key: string]: number
}

interface AttributesTableProps {
    baseStats: BaseStats
}

const AttributesTable: React.FC<AttributesTableProps> = ({ baseStats }) => {
    const data = useMemo(
        () =>
            Object.entries(baseStats).map(([key, value]) => {
                let formattedValue
                if (['HP', 'DEF', 'Elemental Mastery', 'ATK'].includes(key)) {
                    formattedValue = Math.round(value)
                } else {
                    formattedValue = `${value.toFixed(1)}%`
                }
                return {
                    stat: key,
                    value: formattedValue,
                }
            }),
        [baseStats]
    )

    const columns: Column[] = useMemo(
        () => [
            {
                Header: 'Stat',
                accessor: 'stat',
                Cell: ({ row }) => {
                    const attributeName = row.values.stat
                    const iconName = attributeName
                        .toLowerCase()
                        .split(' ')
                        .join('-')
                    const iconPath = `/images/attributes/${iconName}.png`
                    return (
                        <span className="flex items-center gap-2">
                            <Image
                                className="h-auto w-auto"
                                src={iconPath}
                                alt={attributeName}
                                width={12}
                                height={12}
                                style={{ width: 12, height: 12 }}
                            />
                            {attributeName}
                        </span>
                    )
                },
            },
            {
                Header: 'Base',
                accessor: 'value',
            },
            {
                Header: 'Modifier',
                accessor: '',
            },
            {
                Header: 'Total',
                accessor: '',
            },
        ],
        []
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data })

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
                        <tr
                            key={index}
                            className={baseStats[row.values.stat] === 0 ? 'brightness-50' : ''}
                        >
                            {row.cells.map((cell) => (
                                <td
                                    key={cell.getCellProps().key}
                                    className="border-b border-main-700 py-1"
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

export default AttributesTable
