//9. Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const orgStr = x.toString();
  const reverseStr = orgStr.split("").reverse().join("");

  if (orgStr == reverseStr) return true;

  return false;
};
