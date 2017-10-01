// https://leetcode.com/problems/keyboard-row

/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

(American keyboard)[src="https://leetcode.com/static/images/problemset/keyboard.png"]

Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const rows = [
    new Set('qwertyuiop'.split('')),
    new Set('asdfghjkl'.split('')),
    new Set('zxcvbnm'.split('')),
  ];
  let result = [];

  for(let i = 0; i < words.length; i++) {
    for (let j = 0; j < rows.length; j++) {

      const chars = words[i].split('');
      if (chars.every(char => rows[j].has(char.toLowerCase()))) {
        result.push(words[i]);
        break;
      }

    }
  }

  return result;
};
