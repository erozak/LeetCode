// https://leetcode.com/problems/median-of-two-sorted-arrays

/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 // eslint-disable-next-line no-unused-vars
function findMedianSortedArrays(nums1, nums2) {
    const amount = nums1.length + nums2.length;
    const medianPos = Math.ceil(amount / 2);
    const isOdd = Boolean(amount % 2);
    let i = 0;
    let j = 0;
    let count = 0;
    let median;

    while (!median ) {
      count++;

      if (count === medianPos) {
        if (isOdd) median = nums
      } else {
        if ()
      }
    }

    return median;
};
