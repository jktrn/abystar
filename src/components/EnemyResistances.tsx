
import {
    BaseStat,
    CharacterAttributes,
} from '@/interfaces/Character'
import Image from 'next/image'

interface EnemyResistancesProps {
    resTable: BaseStat
    onChange: (resTable: BaseStat) => void
}

const EnemyResistances = ({ resTable, onChange }: EnemyResistancesProps ) => {
    const anemoImage = `/images/elements/anemo.svg`;
    const cryoImage = `/images/elements/cryo.svg`;
    const dendroImage = `/images/elements/dendro.svg`;
    const electroImage = `/images/elements/electro.svg`;
    const geoImage = `/images/elements/geo.svg`;
    const hydroImage = `/images/elements/hydro.svg`;
    const pyroImage = `/images/elements/pyro.svg`;
    const defImage = `/images/elements/def.svg`;
    const physImage = `/images/normal-attacks/sword.png`

    const handleChange = (type : string) => (event : React.ChangeEvent<HTMLInputElement>) => {
        resTable[type] = Number(event.target.value);
        onChange(resTable);
    };

    return (
        <div className = "grid grid-col-9 grid-flow-row p-3">
            <div className = "row-start-1 col-start-1 box-border h-20 w-20 p-2 flex flex-col flex-row items-center">
                <Image 
                    src={defImage}
                    alt="level"
                    className = "invert"
                    width={40}
                    height={40}
                /> 
                <input 
                    type = "number" 
                    defaultValue = "90" 
                    className = "rounded-lg w-20 text-center" 
                    onChange={handleChange("Level")}
                />  
            </div>
            <div className = "row-start-1 col-start-2 box-border h-20 w-20 p-2 flex flex-col flex-row items-center">
                <Image 
                    src={anemoImage}
                    alt="anemo"
                    width={40}
                    height={40}
                /> 
                <input 
                    type = "number" 
                    defaultValue = "10" 
                    className = "rounded-lg w-20 text-center" 
                    onChange={handleChange("Anemo")}
                />  
            </div>
            <div className = "row-start-1 col-start-3 box-border h-20 w-20 p-2 flex flex-col flex-row items-center">
                <Image 
                    src={cryoImage}
                    alt="cryo"
                    className="rounded-lg object-cover duration-100 ease-in"
                    width={40}
                    height={40}
                /> 
                <input 
                    type = "number" 
                    defaultValue = "10" 
                    className = "rounded-lg w-20 text-center" 
                    onChange={handleChange("Cryo")}
                />  
            </div>
            <div className = "row-start-1 col-start-4 box-border h-20 w-20 p-2 flex flex-col flex-row items-center">
                <Image 
                    src={dendroImage}
                    alt="dendro"
                    className="rounded-lg object-cover duration-100 ease-in"
                    width={40}
                    height={40}
                /> 
                <input 
                    type = "number" 
                    defaultValue = "10" 
                    className = "rounded-lg w-20 text-center" 
                    onChange={handleChange("Dendro")}
                />  
            </div>
            <div className = "row-start-1 col-start-5 box-border h-20 w-20 p-2 flex flex-col flex-row items-center">
                <Image 
                    src={electroImage}
                    alt="electro"
                    className="rounded-lg object-cover duration-100 ease-in"
                    width={40}
                    height={40}
                /> 
                <input 
                    type = "number" 
                    defaultValue = "10" 
                    className = "rounded-lg w-20 text-center" 
                    onChange={handleChange("Electro")}
                />  
            </div>
            <div className = "row-start-1 col-start-6 box-border h-20 w-20 p-2 flex flex-col flex-row items-center">
                <Image 
                    src={geoImage}
                    alt="geo"
                    className="rounded-lg object-cover duration-100 ease-in"
                    width={40}
                    height={40}
                /> 
                <input 
                    type = "number" 
                    defaultValue = "10" 
                    className = "rounded-lg w-20 text-center" 
                    onChange={handleChange("Geo")}
                />  
            </div>
            <div className = "row-start-1 col-start-7 box-border h-20 w-20 p-2 flex flex-col flex-row items-center">
                <Image 
                    src={hydroImage}
                    alt="hydro"
                    className="rounded-lg object-cover duration-100 ease-in"
                    width={40}
                    height={40}
                /> 
                <input 
                    type = "number" 
                    defaultValue = "10" 
                    className = "rounded-lg w-20 text-center" 
                    onChange={handleChange("Hydro")}
                />   
            </div>
            <div className = "row-start-1 col-start-8 box-border h-20 w-20 p-2 flex flex-col flex-row items-center">
                <Image 
                    src={pyroImage}
                    alt="pyro"
                    className="rounded-lg object-cover duration-100 ease-in"
                    width={40}
                    height={40}
                /> 
                <input 
                    type = "number" 
                    defaultValue = "10" 
                    className = "rounded-lg w-20 text-center" 
                    onChange={handleChange("Pyro")}
                />   
            </div>
            <div className = "row-start-1 col-start-9 box-border h-20 w-20 p-2 flex flex-col flex-row items-center">
                <Image 
                    src={physImage}
                    alt="phys"
                    className="rounded-lg object-cover duration-100 ease-in"
                    width={40}
                    height={40}
                /> 
                <input 
                    type = "number" 
                    defaultValue = "10" 
                    className = "rounded-lg w-20 text-center" 
                    onChange={handleChange("Physical")}
                />   
            </div>
            
        </div>
    )
}

export default EnemyResistances