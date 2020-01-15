export const subsetTo = (source: Array<any>, sub: Array<any> | undefined) => {
    return sub && sub.every(s => source.includes(s));
}
