// Sum of Digits / Digital Root

// solution
function digital_root(n) {

    var num = n.toString();
    var sum = 0

    for (var i = 0; i < num.length; i++) {
        sum += parseInt(num.charAt(i));
    }

    num = sum.toString();
    if (num.length == 1) {
        return sum;
    }
    return digital_root(sum);
}