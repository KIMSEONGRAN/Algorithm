/**
 * 프로그래머스 코딩 테스트 연습 문제 * 자연수 뒤집어 배열로 만들기
 */

function solution(n) {
  const answer = [];
  // 매개변수를 문자열로 만든다.
  n = n.toString();

  // 문자열의 마지막 데이터부터 순서대로 배열에 넣어준다.
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }

  return answer;
}
