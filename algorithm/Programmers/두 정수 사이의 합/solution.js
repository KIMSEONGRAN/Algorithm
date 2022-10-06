/**
 * 프로그래머스 코딩 테스트 연습 문제 * 두 정수 사이의 합
 */

function solution(a, b) {
  let answer = 0;

  if (a === b) {
    return a;
  } else {
    const min = a > b ? b : a;
    const max = a > b ? a : b;

    for (let i = min; i <= max; i++) {
      answer += i;
    }
  }
  return answer;
}
