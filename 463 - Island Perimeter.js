// https://leetcode.com/problems/island-perimeter

/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:
[https://leetcode.com/static/images/problemset/island.png]
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

// eslint-disable-next-line no-unused-vars
function islandPerimeter(grid) {
  const calcP = (acc, col) => {
    let isAside = false;

    if (acc.last) {
      let i = 0;
      while (i < acc.last.length && i < col.length) {
        const isAdj = acc.last[i] === col[i];

        if (col[i] === 1) {
          acc.sum += isAdj
            ? isAside ? 0 : 2
            : isAside ? 2 : 4;

          isAside = true;
        } else {
          isAside = false;
        }

        i++;
      }
    } else {
      col.forEach((block) => {
        if (block === 1) {
          acc.sum += isAside ? 2 : 4;
          isAside = true;
        } else {
          isAside = false;
        }
      });
    }

    acc.last = col;
    return acc;
  };


  return grid.reduce(calcP, {
    last: null,
    sum: 0,
  }).sum;
}
