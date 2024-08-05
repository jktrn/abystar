
import {
    CharacterAttributes,
} from '@/interfaces/Character'
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@/components/ui/table'
import {
    attributeSections,
} from '@/lib'
import Image from 'next/image'
import { Fragment } from 'react'

interface attributesProp {
    attributes : CharacterAttributes
}

const ResistanceShred = ({attributes}: attributesProp) => {
    const resImages = {
        'Pyro RES Shred' : `/images/elements/pyro.svg`,
        'Cryo RES Shred' : `/images/elements/cryo.svg`,
        'Hydro RES Shred' : `/images/elements/hydro.svg`,
        'Electro RES Shred' : `/images/elements/electro.svg`,
        'Anemo RES Shred' : `/images/elements/anemo.svg`,
        'Geo RES Shred' : `/images/elements/geo.svg`,
        'Dendro RES Shred' : `/images/elements/dendro.svg`,
        'Physical RES Shred' : `/images/normal-attacks/sword.png`
    }

    return (
        <Table className="w-full text-sm">
            <TableBody>
                {attributeSections[5].attributes.map((resType) => (
                    <Fragment key = {resType}>
                        <TableRow>
                            <TableCell className="px-4">
                                <span className="flex items-center gap-2"> 
                                    <Image
                                        src={resImages[resType as keyof typeof resImages]}
                                        alt={resType}
                                        width={20}
                                        height={20}
                                    />
                                    {resType}
                                </span>
                            </TableCell>
                            <TableCell className="px-4 text-right font-bold">
                                {attributes[String(resType)]}
                            </TableCell>
                        </TableRow>
                    </Fragment>
                ))}
            </TableBody>
        </Table>
    )
    
}

export default ResistanceShred