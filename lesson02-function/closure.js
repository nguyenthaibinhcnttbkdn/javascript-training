/* function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1);
console.log(wrap2); */

/* function celebrityName(firstName) {
    var nameIntro = "This celebrity is";

    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var mjName = celebrityName("Michale");
mjName("Jackson");
 */

 const multiplier = factor => {
     return number => number * factor;
 }

 let twice = multiplier(2);
 console.log(twice(5));