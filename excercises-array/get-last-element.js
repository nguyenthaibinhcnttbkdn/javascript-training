const getLastElement = (array, index) => {
    if(array == null) {
        return void 0;
    }
    if(index == null) {
        return array[array.length - 1];
    }
    return array.slice(Math.max(array.length - n, 0));
}