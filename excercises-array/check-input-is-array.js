function isInputArray(input) {
    if(toString.call(input) === "[object Array]") {
        console.log("This is array");
    } else {
        console.log("not array");
    }
}
isInputArray([1,2,3,4]);