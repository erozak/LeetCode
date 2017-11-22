// https://leetcode.com/problems/maximum-binary-tree

/*
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.


Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    /
     2  0
       \
        1
Note:
The size of the given array will be in the range [1,1000].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function changeNode(node, num) {
  const newNode = new TreeNode(num);
  newNode.left = node;

  return newNode;
}

function constructTree(acc, num) {
  let root = acc;
  if (num > acc.val) {
    root = changeNode(acc, num);
  } else if (acc.right) {
    if (num > acc.right.val) {
      const node = changeNode(acc.right, num);
      acc.right = node;
    } else {
      acc.right = constructTree(acc.right, num);
    }
  } else {
    acc.right = new TreeNode(num);
  }

  return root;
}

var constructMaximumBinaryTree = function (nums) {
  tree = null;

  if (nums && nums.length > 0) {
    const initNode = new TreeNode(nums.shift());

    tree = nums.reduce(constructTree, initNode);
  }

  return tree;
};