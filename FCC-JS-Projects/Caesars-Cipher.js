// JavaScript Algorithms and Data Structures Projects: Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
//In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

//solution:
function rot13(str) { // LBH QVQ VG!

    let encoded_arr = str.split(" ");
    let decoded_arr = [];

    encoded_arr.forEach((element) => {
        let code = 0;
        let decoded_str = '';
        for (let i = 0; i < element.length; i++) {
            code = element.charCodeAt(i) - 13;
            decoded_str += String.fromCharCode(code);
        }
        decoded_arr.push(decoded_str);
    });

    console.log("encoded_arr: ", encoded_arr);
    console.log("solution: ", decoded_arr);
    return str;
}

//test casess
rot13("SERR PBQR PNZC") //should decode to FREE CODE CAMP
// rot13("SERR CVMMN!") //should decode to FREE PIZZA!
// rot13("SERR YBIR?") //should decode to FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") //should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.