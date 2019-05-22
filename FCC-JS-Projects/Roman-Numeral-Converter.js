

// solution 1 : this solution doesn't pass all the test cases :) bcz it's stupid solution

const ROMANS1 = {
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '4': 'IV',
    '5': 'V',
    '6': 'VI',
    '7': 'VII',
    '8': 'VIII',
    '9': 'IX',
    '10': 'X',
    '20': 'XX',
    '30': 'XXX',
    '40': 'XL',
    '50': 'L',
    '60': 'LX',
    '70': 'LXX',
    '80': 'LXXX',
    '90': 'XC',
    '100': 'C',
    '200': 'CC',
    '300': 'CCC',
    '400': 'CD',
    '500': 'D',
    '600': 'DC',
    '700': 'DCC',
    '800': 'DCCC',
    '900': 'CM',
    '1000': 'M'
}


function convertToRoman1(num) {

    let num_arr = num.toString().split('');
    let roman = "";

    // To Break the number into Thousands, Hundreds, Tens and Ones
    let num_parts = num_arr.map((i, index) => {
        let x = index + 1;
        for (x; x < num_arr.length; x++) {
            i += "0";
        }
        return i;
    })

    let solutin = num_parts.map((i) => {
        return ROMANS[i];
    });

    return solutin.join("");
}

convertToRoman1(36);

// solution 2: this is works with all test cases 
const ROMANS = [
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I']
];

function convertToRoman(num) {

    let num_arr = num.toString().split('');
    let solutin = [];

    // To Break the number into Thousands, Hundreds, Tens and Ones
    let num_parts = num_arr.map((i, index) => {
        if (parseInt(i) > 1) {
            let x = index + 1;
            for (x; x < num_arr.length; x++) {
                i += "0";
            }
            return i;
        }
    })
    console.log(num_parts);

    num_parts.forEach((i) => {

        let NumIndexVal = parseInt(i);
        let roman_num = "";

        ROMANS.forEach((i) => {
            while (NumIndexVal >= i[0]) {
                NumIndexVal -= i[0];
                roman_num += i[1];
            }

        });

        if (roman_num) {
            solutin.push(roman_num);
        }


    })



    return solutin.join("");
}

convertToRoman(400);

