export function verifyTemp(data: any, higherThan: number, lowerThan: number){
    const current = Number(data.data);
    return current > higherThan ? "lower" : "higher";
}