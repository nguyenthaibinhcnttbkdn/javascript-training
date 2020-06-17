// define a function
const square = function(x) {
    return x*x;
};
console.log(square(12));

//function does not list any parameter names
const makeNoise = function() {
    console.log("Pling");
}
makeNoise();

//A function can have multiple parameters or no parameters at all
const power = function(base, exponent) {
    let result = 1;
    for(let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 10));
