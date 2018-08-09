// https://leetcode.com/problems/palindrome-number

/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Could you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */

function reverseNumber(numbers, scale) {
  return new Array(scale)
    .fill(1)
    .map((basis, offset) => {
      const digit = basis + offset;
      const mod = numbers % (10 ** digit);
      const plucked = Math.floor(mod / ((10 ** (digit - 1))));

      return plucked;
    })
    .reverse()
    .reduce(
      (acc, number, digit) => (number === 0
        ? acc
        : acc + (number * (10 ** digit))),
      0,
    );
}

// eslint-disable-next-line no-unused-vars
function isPalindrome(x) {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  }

  const length = Math.floor(Math.log10(x)) + 1;
  const middle = Math.ceil(length / 2);
  const isOddLength = length % 2 !== 0;
  const lowerNumbersDigit = isOddLength ? middle - 1 : middle;

  const higherNumbers = Math.floor(x / (10 ** middle));
  const lowerNumbers = x % (10 ** lowerNumbersDigit);
  const reversedLowerNumber = lowerNumbersDigit > 1
    ? reverseNumber(lowerNumbers, lowerNumbersDigit)
    : lowerNumbers;

  return higherNumbers - reversedLowerNumber === 0;
}
