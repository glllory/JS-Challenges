// Create Phone Number

// solution
function createPhoneNumber(numbers) {

    var res = "(";

    for (var i = 0; i < numbers.length; i++) {
        res += numbers[i];
        if (res.length === 4) {
            res += ") ";
            continue;
        }
        if (res.length === 9) {
            res += "-";
            continue;
        }

    }
    return res;
}