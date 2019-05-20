
// The DNA strand is missing the pairing element. 
// Take each character, get its pair, and return the results as a 2d array.

// // Test Cases:
// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

// solution:
function pairElement(str) {

    let arr = str.split('');
    let result = [];
    arr.forEach((i) => {
        switch (i) {
            case "A":
                result.push(["A", "T"]);
                break;
            case "T":
                result.push(["T", "A"]);
                break;
            case "C":
                result.push(["C", "G"]);
                break;
            case "G":
                result.push(["G", "C"]);
                break;
        }
    });

    return result;

}

pairElement("GCG");