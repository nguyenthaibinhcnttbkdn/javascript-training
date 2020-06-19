const getFirstElement = (array, index) => {
    if(array == null) {
        return void 0;
    }
    if(index == null) {
        return array[0];
    }
    if(index < 0) {
        return []; 
    }
    return array.slice(0, index);
}
console.log(getFirstElement(3));

// console.log(void 0);