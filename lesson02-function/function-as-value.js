/* let launchMissiles = function(){
    missilesSystem.launch("now");
};
if(safeMode) {
    launchMissiles = function(){
       
    };
} */

// New Exampel
const square = function(x) {
    return x * x;
}
var s = square;  // This definition creates a new function object and assigns it to the variable square.
square(4);  // 16
s(4);       // 16

