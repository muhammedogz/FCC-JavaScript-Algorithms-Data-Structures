function palindrome(str) {
    const reg = /[\W]/g;
    str = str.replace(reg, "").toLowerCase();

    return str.toLowerCase() === str.split(" ").reverse().join(" ");
}
  
  
  
console.log(palindrome("_eye"));