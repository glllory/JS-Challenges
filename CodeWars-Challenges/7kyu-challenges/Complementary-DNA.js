// Complementary DNA

//solution
function DNAStrand(dna) {
    //your code here

    var arr = dna.split('');
    var res = "";

    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "A": res += "T";
                break;
            case "T": res += "A";
                break;
            case "C": res += "G";
                break;
            case "G": res += "C";
                break;
        }//switch   
    }// for ends

    return res;
}