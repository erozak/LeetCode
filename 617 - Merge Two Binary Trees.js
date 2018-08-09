// https://leetcode.com/problems/merge-two-binary-trees

/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.
Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
Input:
  Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7

Output:
Merged tree:
       3
      / \
     4   5
    / \   \
   5   4   7

Note: The merging process must start from the root nodes of both trees.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// eslint-disable-next-line no-unused-vars
function mergeTrees(t1, t2) {
  function merge(a, b) {
    const vA = (a && a.val) || null;
    const vB = (b && b.val) || null;
    const node = new TreeNode(vA + vB);

    if ((a && a.left)
      || (b && b.left)
    ) {
      node.left = merge(
        a && a.left,
        b && b.left,
      );
    }

    if ((a && a.right)
      || (b && b.right)
    ) {
      node.right = merge(
        a && a.right,
        b && b.right,
      );
    }

    return node;
  }

  return t1 || t2 ? merge(t1, t2) : null;
}
