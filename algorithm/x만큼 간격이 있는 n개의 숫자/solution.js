/**
 * 프로그래머스 코딩 테스트 연습 문제 * x만큼 간격이 있는 n개의 숫자
 */

function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}
