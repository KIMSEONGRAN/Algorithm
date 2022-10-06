/**
 * 프로그래머스 코딩 테스트 연습 문제 * 자릿수 더하기
 */

function solution(n) {
  let answer = 0;

  // 각각의 자릿수를 가져오기 위해서 n변수를 문자열 타입으로 변환
  n = String(n);

  for (let i = 0; i < n.length; i++) {
    // 연산을 위해 다시 n[i] 값을 숫자타입으로 변환
    answer += n[i];
  }

  return answer;
}
