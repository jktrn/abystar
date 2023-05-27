import { useTable, Column } from 'react-table'
import { useMemo } from 'react'

interface BaseStats {
    [key: string]: number
}

interface AttributesTableProps {
    baseStats: BaseStats
}

const AttributesTable: React.FC<AttributesTableProps> = ({ baseStats }) => {
    const data = useMemo(
        () =>
            Object.entries(baseStats).map(([key, value]) => ({
                stat: key,
                value,
            })),
        [baseStats]
    )

    const columns: Column[] = useMemo(
        () => [
            {
                Header: 'Stat',
                accessor: 'stat',
            },
            {
                Header: 'Value',
                accessor: 'value',
            },
        ],
        []
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data })

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup, index) => (
                    <tr
                        key={index}
                    >
                        {headerGroup.headers.map((column) => (
                            <th
                                key={column.id}
                                style={{ fontWeight: 'bold' }}
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
                        >
                            {row.cells.map((cell) => (
                                <td
                                    key={cell.getCellProps().key}
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
