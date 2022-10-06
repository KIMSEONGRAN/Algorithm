/**
 * 프로그래머스 코딩 테스트 연습 문제 * 없는 숫자 더하기
 */

function solution(numbers) {
  let answer = 0;

  // 0은 더하나 마나이기에 불필요한 반복을 없애고자 1부터 시작
  for (let i = 1; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}
