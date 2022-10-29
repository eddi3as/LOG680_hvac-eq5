export function verifyTemp(data: any, higherThan: number, lowerThan: number){
    return data.data > higherThan ? "lower" : "higher";
}