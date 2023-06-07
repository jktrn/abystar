const parseScalingValue = (scalingValue: string) => {
    const value = scalingValue.match(/(\d+(\.\d+)?)/)
    const parsedValue = value ? parseFloat(value[0]) : 0
    return parsedValue
}

export default parseScalingValue
