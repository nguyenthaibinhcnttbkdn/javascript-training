const power = (base, exponent) => {
    let result = 1;
    for(let count = 0; count < exponent; count ++ ) {
        result *= base;
    }
    return result;
}
console.log(power(2,3));

const square1 = (x) => { return x * x;};
const square2 = x => x * x; 

function template = () => {
    console.log("Hello World");
}