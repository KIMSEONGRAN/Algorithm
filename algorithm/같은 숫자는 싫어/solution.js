/**
 * 프로그래머스 코딩 테스트 연습 문제 * 같은 숫자는 싫어
 */

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    // 배열의 앞,뒤 숫자를 비교
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
