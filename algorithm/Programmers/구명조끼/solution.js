/**
 * 프로그래머스 코딩 테스트 연습 문제 * 구명조끼
 */

function solution(people, limit) {
  people.sort((a, b) => b - a);

  let count = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i] + people[people.length - 1] <= limit) {
      count++;
      people.pop();
    } else {
      count++;
    }
  }
  return count;
}
