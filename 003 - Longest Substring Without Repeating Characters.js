// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let charSet = new Set();
  let result = 0;
  let i = 0;
  let point = i;

  while (i < s.length) {
    const char = s.substr(i, 1);

    if (charSet.has(char)) {
      result = result >= charSet.size ? result : charSet.size;
      charSet.clear();
      i = ++point;
    } else {
      charSet.add(char);
      i++;
    }

  }

  return result >= charSet.size ? result : charSet.size;
};
