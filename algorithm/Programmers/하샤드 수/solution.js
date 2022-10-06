/**
 * 프로그래머스 코딩 테스트 연습 문제 * 하샤드 수
 */

function solution(x) {
  const stringX = String(x);
  const arr = stringX.split("");

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return x % sum === 0;
}
