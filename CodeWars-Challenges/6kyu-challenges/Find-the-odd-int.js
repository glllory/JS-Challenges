// Find the odd int

//solution
function findOdd(A) {
    //happy coding!

    var sum = 0;
    var vals = [];


    for (var i = 0; i < A.length; i++) {
        for (var x = 0; x < A.length; x++) {
            if (A[i] === A[x]) { sum++; }
        }
        vals.push(sum);
        sum = 0;
    }

    for (var o = 0; o < vals.length; o++) {
        if (vals[o] % 2 != 0) { return A[o]; }
    }

    return 0;
}