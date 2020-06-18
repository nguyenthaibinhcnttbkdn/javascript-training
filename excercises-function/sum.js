
const calFactorial = params => {
    let tmp = params;
    let result = 1;
    for(let count = 0; count < params; count++) {
        result *= tmp;
        tmp--;  
    }
    return result;
};
let sum = calFactorial;
let total = sum(4) + sum(7) + sum(12) + sum(8);
console.log("sum of factorial:" + total);