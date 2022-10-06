/**
 * 프로그래머스 코딩 테스트 연습 문제 * 문자열 내 p와 y의 갯수
 */

function solution(s) {
  let p = 0; // 문자열 p의 갯수를 저장
  let y = 0; // 문자열 y의 갯수를 저장

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      p++;
    } else if (s[i] === "y" || s[i] === "Y") {
      y++;
    }
  }

  return p === y;
}
