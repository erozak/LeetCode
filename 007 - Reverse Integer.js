// https://leetcode.com/problems/reverse-integer

/*
Given a 32 - bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21


Note: Assume we are dealing with an environment which could only hold integers within the 32 - bit signed integer range.For the purpose of this problem, assume that your
function returns 0 when the reversed integer overflows.

*/

/**
 * @param {number} x
 * @return {number}
 */

// eslint-disable-next-line no-unused-vars
function reverse(x) {
  const reverseInt = (num) => {
    const isNegative = num < 0;
    const numAbs = Math.abs(num);
    const reversedNum = numAbs.toString().split('').reverse().join('');

    return isNegative ? Number(`-${reversedNum}`) : Number(reversedNum);
  };

  const is32Bit = num => (
    (num > 0 && num < Math.pow(2, 31) - 1) ||
    (num < 0 && Math.abs(num) < Math.pow(2, 31))
  );

  const reversedNum = reverseInt(x);

  return is32Bit(reversedNum) ? reversedNum : 0;
}
