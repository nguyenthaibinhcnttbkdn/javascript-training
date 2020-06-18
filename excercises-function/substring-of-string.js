function generatesSubstring(params) {
    let tmp = params + "";
    let array = tmp.split("");
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(i == j) {
                continue;
            }
            if(array[i] != array[j]) {
                console.log(array[i] + array[j]);
            } else {
                continue;
            }
        }
    }
}

generatesSubstring("121");




