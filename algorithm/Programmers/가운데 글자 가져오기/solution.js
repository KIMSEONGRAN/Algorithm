/**
 * 프로그래머스 코딩 테스트 연습 문제 * 가운데 글자 가져오기
 */

function solution(s) {
  let answer = "";
  const center = Math.floor(s.length / 2);
  answer = s[center];

  if (s.length % 2 === 0) {
    // 짝수 문자일 경우에는 앞에 있는 글자를 더 가져온다.
    answer = s[center - 1] + answer;
  }

  return answer;
}
