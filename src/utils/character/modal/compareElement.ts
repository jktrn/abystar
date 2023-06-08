// Used in sorting by element in CharacterModal
const compareElement = (a: string, b: string): number => {
    const order = ['pyro', 'geo', 'dendro', 'anemo', 'cryo', 'hydro', 'electro']

    const indexA = order.indexOf(a)
    const indexB = order.indexOf(b)

    if (indexA < indexB) {
        return -1
    } else if (indexA > indexB) {
        return 1
    } else {
        return 0
    }
}

export default compareElement
