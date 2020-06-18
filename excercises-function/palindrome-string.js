const checkPalindromeString = params => {
    params += "";
    if(params.split("").reverse().join("") === params) {
        console.log("palindrome string")
    } else {
        console.log("not palindrome string");
    }
};

checkPalindromeString('nurses run');

