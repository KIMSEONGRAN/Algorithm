/**
 * 프로그래머스 코딩 테스트 연습 문제 * 콜라스 추측
 */

function solution(num) {
  let count = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return count;
    }
    count++;

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }

  return -1;
}
