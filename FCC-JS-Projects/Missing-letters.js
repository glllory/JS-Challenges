
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// Test Cases:
// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

// solution:
function fearNotLetter(str) {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    const arr = str.split('');
    let result = undefined;
    let x = 0;

    for (let i = alphabet.indexOf(arr[0]); i < alphabet.length; i++) {
        if (arr[x] != alphabet[i]) {
            result = alphabet[i];
            break;
        }
        x++;
    }
    return result;
}

fearNotLetter("abce");