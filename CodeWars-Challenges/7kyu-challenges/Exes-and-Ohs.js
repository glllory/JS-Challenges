// Exes and Ohs

//solution
function XO(str) {
    //code here

    var numX = 0;
    var numO = 0;

    for (var i = 0; i < str.length; i++) {

        if (str.charAt(i) === "X" || str.charAt(i) === "x") { numX++; }
        if (str.charAt(i) === "O" || str.charAt(i) === "o") { numO++; }

    }

    if (numX === numO) { return true; }
    else {
        return false;
    }

} // fun ends