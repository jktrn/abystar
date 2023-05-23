export const compareElement = (a: string, b: string): number => {
    const order = ['pyro', 'geo', 'dendro', 'anemo', 'hydro', 'cryo', 'electro']

    // Get the index of each element in the order array
    const indexA = order.indexOf(a)
    const indexB = order.indexOf(b)

    // Compare the indexes
    if (indexA < indexB) {
        return -1
    } else if (indexA > indexB) {
        return 1
    } else {
        return 0
    }
}
