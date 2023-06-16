const compareObjects = (a: any, b: any) => {
    const diff: any = {}
    for (const key in a) {
        if (a[key] !== b[key]) {
            diff[key] = [a[key], b[key]]
        }
    }
    return diff
}

const parseScalingValue = (scalingValue: string) => {
    const values = scalingValue.match(/\d+(\.\d+)?/g)
    const parsedValues = values ? values.map((value) => parseFloat(value)) : [0]
    return parsedValues
}

export { compareObjects, parseScalingValue }
