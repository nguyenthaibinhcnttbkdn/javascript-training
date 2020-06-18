const ascendingNumber = function(a, b, c) {
    if(a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    if(a > c) {
        let tmp = a;
        a = c;
        c = tmp;
    }
    if(b > c) {
        let tmp = b;
        b = c;
        c = tmp;
    }
    console.log(a + " " + b + " " + c);
}
ascendingNumber(12,5,7);