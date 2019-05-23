// Ones and Zeros

//solution
const binaryArrayToNumber = arr => {
    // your code

    var a = "";
    for (var i = 0; i < arr.length; i++) {

        a += arr[i];
    }


    return parseInt(a, 2);
};