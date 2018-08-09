// https://leetcode.com/problems/longest-common-prefix

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

// eslint-disable-next-line no-unused-vars
function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) {
    return '';
  } else if (strs.length === 1) {
    return strs[0];
  }

  return strs.reduce((a, b) => {
    const minLength = Math.min(a.length, b.length);

    let commonChars = '';
    for (let i = 0; i < minLength; i += 1) {
      const charA = a.charAt(i);
      const charB = b.charAt(i);

      if (charA === charB) {
        commonChars += charA;
      } else {
        break;
      }
    }

    return commonChars;
  });
}
