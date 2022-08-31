/**
 * 프로그래머스 코딩 테스트 연습 문제 * 3진법 뒤집기
 */

function solution(n) {
  let numToStr = n.toString(3);
  let arr = [];
  for (let i = numToStr.length - 1; i >= 0; i--) {
    arr.push(numToStr[i]);
  }
  return Number.parseInt(arr.join(""), 3);
}
