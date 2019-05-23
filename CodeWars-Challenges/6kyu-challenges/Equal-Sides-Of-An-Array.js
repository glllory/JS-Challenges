// Equal Sides Of An Array

// solution

function findEvenIndex(arr) {
    var sum = 0,
        leftSum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (var i = 0; i < arr.length; i++) {
        sum -= arr[i];

        if (leftSum === sum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}