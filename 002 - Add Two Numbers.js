// https://leetcode.com/problems/add-two-numbers

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// eslint-disable-next-line no-unused-vars
function addTwoNumbers(l1, l2) {
  let numA = l1;
  let numB = l2;
  const sumList = new ListNode(0);
  let nowNode = sumList;
  let carry = 0;

  while (numA || numB) {
    const A = numA ? numA.val : 0;
    const B = numB ? numB.val : 0;
    const digiSum = A + B + carry;
    numA = numA ? numA.next : null;
    numB = numB ? numB.next : null;
    carry = Math.floor(digiSum / 10);

    nowNode.next = new ListNode(digiSum % 10);
    nowNode = nowNode.next;
  }

  if (carry) nowNode.next = new ListNode(carry);

  return sumList.next;
}
