import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { CharacterAttributes } from '@/interfaces/Character'
import {
    attributeSections,
    availableIcons,
    displayStats,
    kebabCase,
    parseScalingValue,
} from '@/lib'
import Image from 'next/image'
import { Fragment, useMemo } from 'react'

interface CharacterAttributeProps {
    characterAttributes: CharacterAttributes
    initialAttributes: CharacterAttributes
}

const AttributesTable = ({
    characterAttributes,
    initialAttributes,
}: CharacterAttributeProps) => {
    const data = useMemo(
        () =>
            Object.entries(characterAttributes)
                .filter(([key]) => displayStats.includes(key))
                .map(([key, value]) => {
                    let formattedValue
                    let formattedInitialValue
                    let difference
                    if (['HP', 'DEF', 'Elemental Mastery', 'ATK'].includes(key)) {
                        formattedValue = Math.round(value)
                        formattedInitialValue = Math.round(initialAttributes[key])
                        difference = formattedValue - formattedInitialValue
                    } else {
                        formattedValue = `${(value * 100).toFixed(1)}%`
                        formattedInitialValue = `${(
                            initialAttributes[key] * 100
                        ).toFixed(1)}%`
                        difference = `${(
                            value * 100 -
                            initialAttributes[key] * 100
                        ).toFixed(1)}%`
                    }
                    return {
                        stat: key,
                        value: formattedValue,
                        initialValue: formattedInitialValue,
                        difference: difference,
                    }
                }),
        [characterAttributes, initialAttributes]
    )

    if (!characterAttributes) return null

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
                            <TableCell
                                colSpan={4}
                                className="border-b bg-secondary/25 px-4 py-3 font-bold"
                            >
                                {section.name}
                            </TableCell>
                        </TableRow>
                        {data
                            .filter((row) => section.attributes.includes(row.stat))
                            .map((row, rowIndex) => (
                                <TableRow
                                    key={rowIndex}
                                    className={
                                        characterAttributes[row.stat] === 0
                                            ? 'brightness-50'
                                            : ''
                                    }
                                >
                                    <TableCell className="px-4">
                                        <span className="flex items-center gap-2">
                                            {availableIcons.includes(
                                                kebabCase(row.stat)
                                            ) && (
                                                <Image
                                                    className="h-auto w-auto"
                                                    src={`/images/attributes/${kebabCase(
                                                        row.stat
                                                    )}.png`}
                                                    alt={row.stat}
                                                    width={12}
                                                    height={12}
                                                />
                                            )}
                                            {row.stat}
                                        </span>
                                    </TableCell>
                                    <TableCell className="px-4 text-right font-bold">
                                        {row.initialValue}
                                    </TableCell>
                                    <TableCell
                                        className="px-4 text-right font-bold"
                                        style={{
                                            color:
                                                row.difference === 0 ||
                                                row.difference === '0.0%'
                                                    ? characterAttributes[
                                                          row.stat
                                                      ] === 0
                                                        ? undefined
                                                        : '#A1A1AA'
                                                    : typeof row.difference ===
                                                        'number'
                                                      ? row.difference > 0
                                                          ? '#34D399'
                                                          : '#F87171'
                                                      : typeof row.difference ===
                                                              'string' &&
                                                          parseScalingValue(
                                                              row.difference
                                                          )[0].value > 0
                                                        ? '#34D399'
                                                        : '#F87171',
                                        }}
                                    >
                                        {row.difference === 0 ||
                                        row.difference === '0.0%'
                                            ? characterAttributes[row.stat] === 0
                                                ? row.difference
                                                : '+0'
                                            : typeof row.difference === 'number'
                                              ? row.difference > 0
                                                  ? `+${row.difference}`
                                                  : row.difference
                                              : typeof row.difference === 'string' &&
                                                  parseScalingValue(
                                                      row.difference
                                                  )[0].value > 0
                                                ? `+${row.difference}`
                                                : row.difference}
                                    </TableCell>
                                    <TableCell className="px-4 text-right font-bold">
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
