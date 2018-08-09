// https://leetcode.com/problems/judge-route-circle

/*
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true

Example 2:
Input: "LL"
Output: false
*/

/**
 * @param {string} moves
 * @return {boolean}
 */

// eslint-disable-next-line no-unused-vars
function judgeCircle(moves) {
  const endPosition = moves.split('').reduce((acc, step) => {
    const stepFixed = step.toUpperCase();

    if (stepFixed === 'U') acc.y++;
    else if (stepFixed === 'R') acc.x++;
    else if (stepFixed === 'D') acc.y--;
    else if (stepFixed === 'L') acc.x--;

    return acc;
  }, { x: 0, y: 0 });

  return !!(endPosition.x === 0 && endPosition.y === 0);
}
