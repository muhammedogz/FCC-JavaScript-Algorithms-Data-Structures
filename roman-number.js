const romanLiterals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1:"I"
};

function convertToRoman(num) {
    let str = "";
    // get all keys of object since JavaScript objects does not have specific order. 
    const romanObjKeys = Object.keys(romanLiterals).reverse().map(Number);

    // add values and decrement
    while (num > 0) {
        for (let i = 0; i < romanObjKeys.length; i++) {
            const val = romanObjKeys[i];
            if (val <= num) {
                str += romanLiterals[val];
                num -= val;
                break;   
            }
        }
    }
    return str;
}

console.log(convertToRoman(4));
console.log(convertToRoman(150));
console.log(convertToRoman(14));
console.log(convertToRoman(27));
console.log(convertToRoman(45));
console.log(convertToRoman(46));
console.log(convertToRoman(44));
console.log(convertToRoman(796));
console.log(convertToRoman(3999));




/* ROMAN NUMBER TIP */

/* MeDiCaL XaVIar */
/* 
M === 1000 - D === 500
C === 100  - L === 50
X === 10   - V === 5
I === 1
*/