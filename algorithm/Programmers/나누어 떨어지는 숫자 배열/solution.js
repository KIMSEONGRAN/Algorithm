/**
 * 프로그래머스 코딩 테스트 연습 문제 * 나누어 떨어지는 숫자 배열
 */

function solution(arr, divisor) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
