// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//solution:
var moveZeros = function (arr) {
    // TODO: Program me
    let num_of_zeros = arr.filter((i) => (i === 0)).length;
    let solution = arr.filter((i) => (i !== 0));
    while (num_of_zeros) {
        solution.push(0);
        num_of_zeros--;
    }
    return solution;
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])