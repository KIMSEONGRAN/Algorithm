/**
 * 프로그래머스 코딩 테스트 연습 문제 * 비밀지도
 */

function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].toString(2).padStart(n, "0");
    arr2[i] = arr2[i].toString(2).padStart(n, "0");

    let map1 = [];
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i][j] === "1" || arr2[i][j] === "1") {
        map1.push("#");
      } else {
        map1.push(" ");
      }
    }
    answer.push(map1.join(""));
  }

  return answer;
}
