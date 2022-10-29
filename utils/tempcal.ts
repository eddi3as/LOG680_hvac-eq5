export function verifyTemp(data: any, higherThan: number, lowerThan: number){
    let current = Number(data.data);
    return current > higherThan ? "lower" : "higher";
}