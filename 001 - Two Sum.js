// https://leetcode.com/problems/two-sum

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// eslint-disable-next-line no-unused-vars
function twoSum(nums, target) {
  let result;

  for (let i = 0; i < nums.length - 1; i++) {
    const diffIndex = nums.indexOf(target - nums[i], i + 1);

    if (diffIndex > i) {
      result = [i, diffIndex];
      break;
    }
  }

  return result;
}
