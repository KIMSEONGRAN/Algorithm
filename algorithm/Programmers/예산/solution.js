/**
 * 프로그래머스 코딩 테스트 연습 문제 * 예산
 */

function solution(d, budget) {
  for (let i = 0; i < d.length - 1; i++) {
    for (let j = 1 + i; j < d.length; j++) {
      if (d[i] > d[j]) {
        [d[i], d[j]] = [d[j], d[i]];
      }
    }
  }
  let sum = 0;
  let count = 0;
  for (let g = 0; g < d.length; g++) {
    if (sum + d[g] <= budget) {
      sum = sum + d[g];
      count++;
    }
  }
  return count;
}
