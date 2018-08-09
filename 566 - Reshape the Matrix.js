// https://leetcode.com/problems/reshape-the-matrix

/*
In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:

Input:
nums =
[[1,2],
 [3,4]]
r = 1, c = 4

Output:
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.

Example 2:

Input:
nums =
[[1,2],
 [3,4]]
r = 2, c = 4

Output:
[[1,2],
 [3,4]]

Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.

Note:
The height and width of the given matrix is in range [1, 100].
The given r and c are all positive.
*/

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

// eslint-disable-next-line no-unused-vars
function matrixReshape(nums, r, c) {
  let newMatrix = nums;

  if (newMatrix && newMatrix[0]) {
    const oRaw = nums.length;
    const oCol = nums[0].length;

    if (oRaw * oCol === r * c) {
      const tempMatrix = [];
      let newRaw = [];

      nums.forEach(row => (
        row.forEach((col) => {
          newRaw.push(col);
          if (newRaw.length === c) {
            tempMatrix.push(newRaw);
            newRaw = [];
          }
        })
      ));

      newMatrix = tempMatrix;
    }
  }

  return newMatrix;
}
