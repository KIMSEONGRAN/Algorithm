/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let fArr = [];
  let bArr = [];
  let mArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      fArr.push(nums[i]);
    } else if (nums[i] > pivot) {
      bArr.push(nums[i]);
    } else if (nums[i] === pivot) {
      mArr.push(nums[i]);
    }
  }
  return [...fArr, ...mArr, ...bArr];
};
