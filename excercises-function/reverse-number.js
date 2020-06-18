// const reverseNumer = function(params) {
//     let contain = 0;
//     let tmp = params;
//     let result = "";
//         while(tmp != 0) {
//             contain = tmp % 10;
//             tmp = Math.floor(tmp / 10);
//             result += contain.toString();
//         }
//         return result;
// }
// console.log(reverseNumer(324));


function reverseNumber(params) {
    params += "";
    return  params.split("").reverse().join("");
}
console.log(reverseNumber(543));




