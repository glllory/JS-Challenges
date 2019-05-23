// RGB To Hex Conversion

// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned.
// The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

//solution
function rgb(r, g, b) {

    let RGB = [r, g, b].map((i) => {
        if (i < 0) {
            return 0
        } else if (i > 255) {
            return 255;
        } else {
            return i;
        }
    });
    console.log("RGB: ", RGB);
    let solution = "";
    RGB.forEach((i) => {
        let hex = Number(i).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        solution += hex.toUpperCase();
    });
    return solution;
}

rgb(0, 0, 0);
rgb(0, 0, -20);
rgb(300, 255, 255);
rgb(173, 255, 47);