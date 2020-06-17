//It ignores the extra arguments and computes the square of the first one.
/* const square = x => x * x;
console.log(square(4, true, "Hello World"));

function minus(a, b) {
    if(b == undefined) {
        return -a;
    }
    else {
        return a - b;
    }
}
console.log(minus(10));
console.log(minus(19, 8)); */

const power = function(base, exponent = 3) {
    let result = 1;
    for(let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(2));