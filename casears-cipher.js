function rot13(str) {
    /**
     * convert to array
     * iterate all values
     * check if item is a letter
     * if valid letter, than add 13 (ceaser code)
     * if exceed to value 90, 
     * convert to starting position
     */
    return str.split("").map(letter => {
        const charCode = letter.charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
            let newCharCode = charCode + 13;
            if (newCharCode > 90) 
                newCharCode = newCharCode % 90 + 64;
            return String.fromCharCode(newCharCode);
        } else 
            return letter;
    }).join("");
}
  
console.log(rot13("SERR PBQR PNZC")); //  FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // FREE PIZZA
console.log(rot13("SERR YBIR?")); // FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.