// https://leetcode.com/problems/max-consecutive-ones/

/*
Given a binary array, find the maximum number of consecutive 1 s in this array.

Example 1: Input: [1, 1, 0, 1, 1, 1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1 s.
The maximum number of consecutive 1 s is 3.
Note:

  The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10, 000

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 // eslint-disable-next-line no-unused-vars
functionfindMaxConsecutiveOnes (nums) {
  return nums
    .join('')
    .split(/0+/)
    .reduce((acc, ones) => (
      Math.max(acc, ones.length)
    ), 0);
};
