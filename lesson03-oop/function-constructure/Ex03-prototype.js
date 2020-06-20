/* let empty = {};
console.log(empty.toString);
// [function: toString]

console.log(empty.toString());
// [object type]
 */


function construc(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function() {
        console.log(this.a + this.b);
    }
}
let number = new construc(1, 8);
console.log(Object.getPrototypeOf(number) === construc);

