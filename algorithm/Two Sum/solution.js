/**
 * LeetCode Problems * Two Sum
 */

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

/////////////////////////////////////////////////////////
/** ref2 */

// const twoSum = function(nums, target) {
//     let map = new Map(); // 새로운 빈 객체를 만든다.
//   	let i = 0;
//   for(; i < nums.length; i++){
//     if(map.get(target-nums[i]) === undefined){
//       map.set(nums[i], i)
//     } else {
//       return [map.get(target-nums[i]), i]
//     }
//   }

// }
