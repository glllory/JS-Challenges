// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// solution
function pigIt(str) {
    //Code here
    let str_arr = str.split(" ");
    let solution = [];
    let regex = /\W/;

    str_arr.forEach((element) => {
        if (!regex.test(element)) {
            if (element.length > 0) {
                solution.push(element.slice(1) + element.charAt(0) + "ay");
            } else {
                solution.push(element.charAt(0) + "ay");
            }
        } else {
            solution.push(element);
        }
    });
    console.log("solution: ", solution.join(" "));
    return solution.join(" ");
}
// test cases:
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
