/**
 * 프로그래머스 코딩 테스트 연습 문제 * 문자열 내림차순으로 배치하기
 */

function solution(s) {
  const answer = s
    .split("")
    .sort((a, b) => {
      return a > b ? -1 : 1;
    })
    .join("");
  return answer;
}
