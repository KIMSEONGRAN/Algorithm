/**
 * 프로그래머스 코딩 테스트 연습 문제 * 평균 구하기
 */

function solution(arr) {
  // 모든 숫자를 더한 총 값을 저장하는 변수
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}
