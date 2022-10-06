/**
 * 프로그래머스 코딩 테스트 연습 문제 * 짝수와 홀수
 */

function solution(num) {
  // 2로 나눠서 나머지가 있으면 홀수, 없으면 짝수다.
  return num % 2 === 0 ? "Even" : "Odd";
}
