/**
 * 프로그래머스 코딩 테스트 연습 문제 * 핸드폰 번호 가리기
 */

function solution(phone_number) {
  let answer = "";

  // 핸드폰 번호 뒷자리 4개를 제외한 해싱처리
  answer = answer.padStart(phone_number.length - 4, "*");
  // 핸드폰 번호 뒷자리 붙이기
  answer += phone_number.slice(phone_number.length - 4);

  return answer;
}
