class artifact {
    setName: string
    setPiece: string
    //setBonus: gonna need another file to correlate between setName and set bonus/effect :burning:
    level: number
    mainStat: string
    mainValue: number //this can be calculated via level and mainStat, have separate file or like enumeration or sum to determine like base value + growth per level * level for each mainStat
    // can do something really funny and make the mainstat into like a slider

    /*     sub1: string
    sub1Value: number
    sub2: string
    sub2Value: number
    sub3: string
    sub3Value: number
    sub4: string        //since artifacts can have 3 or 4 substats these can be set to null
    sub4Value: number */

    substat1: stat
    substat2: stat
    substat3: stat
    substat4: stat

    // user input from the website can select type of substat from a dropdown, and type in a value
    // im thinking
    constructor() {}
}

function blankArtifact() {
    let blank: artifact = {
        setName: '',
        setPiece: '',
        level: 0,
        mainStat: '',
        mainValue: 0,
        substat1: new stat('', 0),
        substat2: new stat('', 0),
        substat3: new stat('', 0),
        substat4: new stat('', 0),
    }

    return blank
}
