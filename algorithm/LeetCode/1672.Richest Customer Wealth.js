/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let arr = [];
  let result = 0;
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      result += accounts[i][j];
    }
    arr.push(result);
    result = 0;
  }
  return Math.max(...arr);
};
