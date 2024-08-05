
import {
    BaseStat,
} from '@/interfaces/Character'
import {
    attributeSections,
} from '@/lib'
import Image from 'next/image'
import { Fragment } from 'react'
import { Input } from "@/components/ui/input"


interface EnemyResistancesProps {
    resTable: BaseStat
    onChange: (resTable: BaseStat) => void
}

const EnemyResistances = ({ resTable, onChange }: EnemyResistancesProps ) => {

    const handleChange = (type : string) => (event : React.ChangeEvent<HTMLInputElement>) => {
        resTable[type] = Number(event.target.value);
        onChange(resTable);
    };

    const resImages = {
        'Pyro RES' : `/images/elements/pyro.svg`,
        'Cryo RES' : `/images/elements/cryo.svg`,
        'Hydro RES' : `/images/elements/hydro.svg`,
        'Electro RES' : `/images/elements/electro.svg`,
        'Anemo RES' : `/images/elements/anemo.svg`,
        'Geo RES' : `/images/elements/geo.svg`,
        'Dendro RES' : `/images/elements/dendro.svg`,
        'Physical RES' : `/images/normal-attacks/sword.png`
    }
    /* lg:max-std:w-1/5 lg:w-1/2 xl:w-3/4 */
    return (
        <div className = "px-3 pb-3 grid grid-cols-3 md:grid-cols-4 lrg:grid-cols-9 place-items-center space-y-2">
            <div className = "h-20 w-20 p-2 space-y-2 flex flex-col items-center">
                <Image 
                    src={`/images/elements/def.svg`}
                    alt="level"
                    className = "invert"
                    width={40}
                    height={40}
                /> 
                <Input
                    type = "number" 
                    defaultValue = "90" 
                    className = "rounded-lg w-20 text-center" 
                    onChange={handleChange("Level")}
                />  
            </div>
            {attributeSections[4].attributes.map((resType) => (
                <Fragment key = {resType}>
                    <div className = "h-20 w-20 px-2 space-y-2 flex flex-col items-center">
                        <Image 
                            src={resImages[resType as keyof typeof resImages]}
                            alt="level"
                            width={40}
                            height={40}
                        /> 
                        <Input 
                            type = "number" 
                            defaultValue = "10" 
                            className = "rounded-lg w-20 text-center" 
                            onChange={handleChange(resType.substring(0, resType.length - 4))}
                        />  
                    </div>
                </Fragment>
            ))}
            
            
        </div>
    )
}

export default EnemyResistances