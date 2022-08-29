/**
 * 프로그래머스 코딩 테스트 연습 문제 * 서울에서 김서방 찾기
 */

function solution(seoul) {
  let answer = "";
  const x = seoul.indexOf("Kim");
  answer = `김서방은 ${x}에 있다`;

  return answer;
}
