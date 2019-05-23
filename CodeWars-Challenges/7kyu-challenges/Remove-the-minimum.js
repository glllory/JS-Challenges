// Remove the minimum

// solution
function removeSmallest(numbers) {
    //throw "TODO: removeSmallest";

    var removed = false;
    var newArr = [];

    if (numbers.length === 0) { return newArr; }

    var min = Math.min.apply(null, numbers);

    for (var i = 0; i < numbers.length; i++) {

        if (numbers[i] != min || removed) { newArr.push(numbers[i]); }
        else {
            removed = true;
        }

    }

    return newArr;

}// fun ends 