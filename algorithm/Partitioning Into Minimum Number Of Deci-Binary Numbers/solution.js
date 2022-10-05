/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let result = n.split("");
  return Math.max(...result);
};

/**
 * 이 문제는, 2진법을 몇번 써서 10진법 수가 되는가를 푸는 문제인데, 일종의 패턴이 있었다.
 */
