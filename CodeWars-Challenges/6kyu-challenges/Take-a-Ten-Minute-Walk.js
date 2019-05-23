// Take a Ten Minute Walk

// solution
function isValidWalk(walk) {
    //insert brilliant code here
    var walkVectorArray = walk.map(function (direction) {
        if (direction === 'n') {
            return 1;
        }
        else if (direction === 's') {
            return -1;
        }
        else if (direction === 'e') {
            return 0.5;
        }
        else if (direction === 'w') {
            return -0.5;
        }
    });
    var walkVectorSum = walkVectorArray.reduce(function (a, b) { return a + b }, 0);
    if (walkVectorSum === 0 && walk.length === 10) {
        return true;
    }
    else return false;
}