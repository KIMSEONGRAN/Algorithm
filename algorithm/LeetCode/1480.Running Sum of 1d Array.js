/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let arr = [];
  let prev = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      arr.push(nums[i] + prev);
      prev = nums[i] + prev;
    } else {
      arr.push(nums[i]);
    }
  }

  return arr;
};
