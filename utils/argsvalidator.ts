export function verifyArgs(data: any[]){
    const total = data.length;// [token] [limite chaud] [limite froid] [ticks]
    let newData = [];
    if(total < 3){
        return ["ERROR TOKEN UNDEFINED"];
    }
    else if(data[2].length <= 1){
        return ["ERROR TOKEN UNDEFINED"];
    }else if(total < 4){
        console.log("MISSING [limite chaud] [limite froid] [ticks]");
        newData = data;
        newData[3] = 5;
        newData[4] = 1;
        newData[5] = 6; //default  [limite chaud] [limite froid] [ticks]
        return newData;
    }
    else if(total < 5){
        console.log("MISSING [limite froid] [ticks]");
        newData = data;
        newData[4] = 1;
        newData[5] = 6; //default [limite froid] [ticks]
        return newData;
    }else if(total < 6){
        console.log("MISSING [ticks]");
        newData = data;
        newData[5] = 6; //default [ticks]
        return newData;
    }
    return data;
}