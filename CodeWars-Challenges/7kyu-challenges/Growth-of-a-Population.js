// Growth of a Population

//solution 

function nbYear(p0, percent, aug, p) {
    // your code

    var sum = 0;
    var counter = 0;

    while (sum < p) {

        sum = p0 + (p0 * (percent / 100)) + aug;
        p0 = sum;
        counter++;

    }//end loop


    return counter;

}