
import {
    CharacterAttributes,
} from '@/interfaces/Character'
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@/components/ui/table'
import Image from 'next/image'

interface attributesProp {
    attributes : CharacterAttributes
}

const ResistanceShred = ({attributes}: attributesProp) => {
    const anemoImage = `/images/elements/anemo.svg`;
    const cryoImage = `/images/elements/cryo.svg`;
    const dendroImage = `/images/elements/dendro.svg`;
    const electroImage = `/images/elements/electro.svg`;
    const geoImage = `/images/elements/geo.svg`;
    const hydroImage = `/images/elements/hydro.svg`;
    const pyroImage = `/images/elements/pyro.svg`;
    const physImage = `/images/normal-attacks/sword.png`

    return (
        <Table className="w-full text-sm">
            <TableBody>
                <TableRow>
                    <TableCell className="px-4">
                        <span className="flex items-center gap-2"> 
                            <Image
                                src={anemoImage}
                                alt={"anemo"}
                                width={20}
                                height={20}
                            />
                            Anemo RES Shred
                        </span>
                    </TableCell>
                    <TableCell className="px-4 text-right font-bold">
                        {attributes["Anemo RES Shred"]}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="px-4">
                        <span className="flex items-center gap-2"> 
                            <Image src={cryoImage} alt="cryo" width={20} height={20} />
                            Cryo RES Shred
                        </span>
                    </TableCell>
                    <TableCell className="px-4 text-right font-bold">
                        {attributes["Cryo RES Shred"]}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="px-4">
                        <span className="flex items-center gap-2"> 
                            <Image src={dendroImage} alt="dendro" width={20} height={20} />
                            Dendro RES Shred
                        </span>
                    </TableCell>
                    <TableCell className="px-4 text-right font-bold">
                        {attributes["Dendro RES Shred"]}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="px-4">
                        <span className="flex items-center gap-2"> 
                            <Image src={electroImage} alt="anemo" width={20} height={20} />
                            Electro RES Shred
                        </span>
                    </TableCell>
                    <TableCell className="px-4 text-right font-bold">
                        {attributes["Electro RES Shred"]}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="px-4">
                        <span className="flex items-center gap-2"> 
                            <Image src={geoImage} alt="geo" width={20} height={20} />
                            Geo RES Shred
                        </span>
                    </TableCell>
                    <TableCell className="px-4 text-right font-bold">
                        {attributes["Geo RES Shred"]}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="px-4">
                        <span className="flex items-center gap-2"> 
                            <Image src={hydroImage} alt="hydro" width={20} height={20} />
                            Hydro RES Shred
                        </span>
                    </TableCell>
                    <TableCell className="px-4 text-right font-bold">
                        {attributes["Hydro RES Shred"]}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="px-4">
                        <span className="flex items-center gap-2"> 
                            <Image src={pyroImage} alt="pyro" width={20} height={20} />
                            Pyro RES Shred
                        </span>
                    </TableCell>
                    <TableCell className="px-4 text-right font-bold">
                        {attributes["Pyro RES Shred"]}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="px-4">
                        <span className="flex items-center gap-2"> 
                            <Image src={physImage} alt="phys" width={20} height={20} />
                            Physical RES Shred
                        </span>
                    </TableCell>
                    <TableCell className="px-4 text-right font-bold">
                        {attributes["Physical RES Shred"]}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
    
}

export default ResistanceShred