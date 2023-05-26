type ElementColors = {
    [key in
        | 'pyro'
        | 'geo'
        | 'dendro'
        | 'anemo'
        | 'hydro'
        | 'cryo'
        | 'electro']: string
}

const elementColors: ElementColors = {
    pyro: '#bf612d',
    geo: '#c8922b',
    dendro: '#84a02f',
    anemo: '#5d9b86',
    hydro: '#3d9bc1',
    cryo: '#7fabb6',
    electro: '#8c729a',
}

export default elementColors
