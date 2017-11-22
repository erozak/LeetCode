// https://leetcode.com/problems/average-of-levels-in-binary-tree

/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7

Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const sumArray = [];

  (function treeTravel(node, level) {
    if (!sumArray[level]) {
      sumArray[level] = {
        total: node.val,
        quantity: 1,
      };
    } else {
      sumArray[level].total += node.val;
      sumArray[level].quantity += 1;
    }

    if (node.left) treeTravel(node.left, level + 1);
    if (node.right) treeTravel(node.right, level + 1);

  }) (root, 0);

  return sumArray.map(sum => sum.total / sum.quantity);
};
