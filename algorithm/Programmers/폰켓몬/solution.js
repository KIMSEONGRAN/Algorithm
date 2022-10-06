/**
 * 프로그래머스 코딩 테스트 연습 문제 * 폰켓몬
 */

function solution(nums) {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (
      answer.includes(nums[i]) === false &&
      answer.length !== nums.length / 2
    ) {
      answer.push(nums[i]);
    }
  }
  return answer.length;
}
