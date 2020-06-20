// function Person(name) {
//     this.name = name;
//     this.say = function() {
//         console.log("My name is " + this.name);
//     }
// }

// let peter = new Person('peter');
// peter.say();


const ThreeNumbers = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.sum = function() {
        console.log('sum of three number: ' + (this.a + this.b + this.c));
    }
}
let myNumber = new ThreeNumbers(12, 13, 14);
myNumber.sum();

ThreeNumbers.prototype.sub = function() {
    console.log('sub of three number: ' + (this.a - this.b - this.c));
}
myNumber.sub();
myNumber.mul = function() {
    console.log(this.a * this.b * this.c);
}
myNumber.mul();



