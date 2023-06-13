import { NewBaseStat } from '@/types/Character'
import Image from 'next/image'
import { useMemo } from 'react'
import { Column, useTable } from 'react-table'
import { attributeSections, availableIcons, parseScalingValue } from '@/utils'
import { Fragment } from 'react'

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
                    if (
                        ['HP', 'DEF', 'Elemental Mastery', 'ATK'].includes(key)
                    ) {
                        formattedValue = Math.round(value)
                        formattedInitialValue = Math.round(
                            initialBaseStats[key]
                        )
                        difference = formattedValue - formattedInitialValue
                    } else {
                        formattedValue = `${value.toFixed(1)}%`
                        formattedInitialValue = `${initialBaseStats[
                            key
                        ].toFixed(1)}%`
                        difference = `${(value - initialBaseStats[key]).toFixed(
                            1
                        )}%`
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
                            {availableIcons.includes(iconName) && (
                                <Image
                                    className="h-auto w-auto"
                                    src={iconPath}
                                    alt={attributeName}
                                    width={12}
                                    height={12}
                                    style={{ width: 12, height: 12 }}
                                />
                            )}
                            {attributeName}
                        </span>
                    )
                },
            },
            {
                Header: 'Initial',
                accessor: 'initialValue',
            },
            {
                Header: 'Bonus',
                accessor: 'difference',
                Cell: ({ row }) => {
                    const difference = row.values.difference
                    let formattedDifference
                    if (difference === 0 || difference === '0.0%') {
                        if (baseStats[row.values.stat] === 0) {
                            formattedDifference = <span>{difference}</span>
                        } else {
                            formattedDifference = (
                                <span className="brightness-50">
                                    {difference}
                                </span>
                            )
                        }
                    } else if (
                        difference > 0 ||
                        parseScalingValue(difference)[0] > 0
                    ) {
                        formattedDifference = (
                            <span style={{ color: '#34D399' }}>
                                +{difference}
                            </span>
                        )
                    } else {
                        formattedDifference = (
                            <span style={{ color: '#F87171' }}>
                                {difference}
                            </span>
                        )
                    }
                    return formattedDifference
                },
            },
            {
                Header: 'Current',
                accessor: 'value',
            },
        ],
        [baseStats]
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
                                style={{
                                    width:
                                        column.id === 'initialValue' ||
                                        column.id === 'difference' ||
                                        column.id === 'value'
                                            ? '85px'
                                            : undefined,
                                }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {attributeSections.map((section, sectionIndex) => (
                    <Fragment key={sectionIndex}>
                        <tr>
                            <td
                                colSpan={4}
                                className="border-b border-main-700 bg-main-800 px-2 py-1 font-bold"
                            >
                                {section.name}
                            </td>
                        </tr>
                        {rows
                            .filter((row) =>
                                section.attributes.includes(row.values.stat)
                            )
                            .map((row, rowIndex) => {
                                prepareRow(row)
                                return (
                                    <tr
                                        key={rowIndex}
                                        className={
                                            baseStats[row.values.stat] === 0
                                                ? 'brightness-50'
                                                : ''
                                        }
                                    >
                                        {row.cells.map((cell) => (
                                            <td
                                                key={cell.getCellProps().key}
                                                className={`border-b border-main-700 py-1 ${
                                                    cell.column.id ===
                                                        'initialValue' ||
                                                    cell.column.id ===
                                                        'difference' ||
                                                    cell.column.id === 'value'
                                                        ? `text-right font-bold`
                                                        : ''
                                                } px-4`}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        ))}
                                    </tr>
                                )
                            })}
                    </Fragment>
                ))}
            </tbody>
        </table>
    )
}

export default AttributesTable
