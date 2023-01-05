/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let result = [];
  let prevArr = [];
  let backArr = nums.slice();

  for (let i = 0; i < n; i++) {
    prevArr.push(nums[i]);
    backArr.shift();
  }

  for (let i = 0; i < n; i++) {
    result.push(prevArr[i], backArr[i]);
  }

  return result;
};
