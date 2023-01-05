/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  let arr = [];
  for (let i = 0; i < candies.length; i++) {
    arr.push(max <= extraCandies + candies[i]);
  }
  return arr;
};
