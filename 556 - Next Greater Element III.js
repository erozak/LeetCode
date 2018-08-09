// https://leetcode.com/problems/next-greater-element-iii/

/*
Given a positive 32-bit integer n, you need to find the smallest 32-bit integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive 32-bit integer exists, you need to return -1.

Example 1:
Input: 12
Output: 21

Example 2:
Input: 21
Output: -1
*/

/**
 * @param {number} n
 * @return {number}
 */

// eslint-disable-next-line no-unused-vars
function nextGreaterElement(n) {
  const nums = n.toString().split('');
  let maxNumUsed;
  let change = false;
  let greater = -1;

  for (let i = 0; i < nums.length; i++) {
    const a = nums[nums.length - 1 - i];

    if (maxNumUsed) {
      if (a - maxNumUsed > 0) maxNumUsed = a;
      else continue;
    } else maxNumUsed = a;
    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[nums.length - 1 - j];
      if (a - b > 0) {
        if (
          !change || (
            (nums.length - 1 - j) > change.to &&
            (j - i) < (change.from - change.to)
          ) || (
            (nums.length - 1 - j) >= change.to &&
            (j - i) === (change.from - change.to) &&
            nums[nums.length - 1 - i] < nums[change.from]
          )
        ) {
          change = {
            from: nums.length - 1 - i,
            to: nums.length - 1 - j,
          };
        }
      }
    }
  }

  if (change) {
    const tmp = nums[change.to];
    nums[change.to] = nums[change.from];
    nums[change.from] = tmp;

    const sub = nums.splice(change.to + 1, nums.length - (change.to + 1)).sort((a, b) => a - b);
    greater = Number(nums.concat(sub).join(''));
  }

  return greater - (Math.pow(2, 31) - 1) > 0 ? -1 : greater;
}
