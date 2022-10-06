/**
 * 프로그래머스 코딩 테스트 연습 문제 * 이진 변환 반복하기
 */

function solution(s) {
  let zero = 0;
  let count = 0;

  while (s !== "1") {
    let binary = s.replace(/0/g, "");
    zero = zero + (s.length - binary.length);
    s = binary.length.toString(2);
    count++;
  }
  return [count, zero];
}
