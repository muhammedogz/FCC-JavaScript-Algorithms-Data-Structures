function palindrome(str) {
    const reg = /[_\W]/g;
    str = str.replace(reg, "").toLowerCase();
    return str.toLowerCase() === str.split("").reverse().join("");
}
  
console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("almostomla"));