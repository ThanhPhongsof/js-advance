// 2 Palindrome
function isPalindrome(str) {
  const newStr = str.toLowerCase();
  // const reverseStr = newStr.split("").reverse().join("");
  let reverseStr = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    reverseStr += newStr[i];
  }
  return newStr == reverseStr;
}

console.log(isPalindrome("aaBAA"));
