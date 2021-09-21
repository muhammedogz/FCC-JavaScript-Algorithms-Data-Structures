/**
 * Not a clean solution
 * But I think regex would be uglier :)
 */

function telephoneCheck(str) {
    if (str[0] === "-") return false;
    let isNotValid = false;
    let paranthesisCounter = 0;
    const paranthesis = [];

    const arr = str.split("").filter(num => {
        paranthesisCounter++;
        if (!isNaN(Number(num)) && num !== " ") {
            return true;
        }
        else if (num === "-" || num === "(" || num === ")") {
            paranthesis.push(num);
            if (num === ")" && paranthesisCounter > 7) 
                isNotValid = true;
            return false;
        }
        else if (num != " ") {
            console.log("in filter space");
            isNotValid = true;
            console.log(num);
            return false;
        } 
    }).map(Number);

    let tempCount = 0;
    paranthesis.forEach(letter => {
        if (letter === "-") tempCount++;
    });
    if (tempCount > 2) return false;

    
    if (arr.length === 11) {
        if (arr[0] !== 1) 
        {
            console.log("check 1");
            return false;
        } 
        else 
        arr.shift();
    }
    console.log(arr);
    
    if (arr.length !== 10) 
        return false;

    // check paranthesis 
    if (paranthesis.includes(")") || paranthesis.includes("(")) {
         if (!(paranthesis.includes(")") && paranthesis.includes("("))) 
            return false;
    }


     
    // check if not valid
    if (isNotValid) return false;

    return true;
}
  
console.log(telephoneCheck("-1 555-555-5555"));


