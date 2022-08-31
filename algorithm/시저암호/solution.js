/**
 * 프로그래머스 코딩 테스트 연습 문제 * 시저암호
 */

function solution(s, n) {
  let a = "";

  for (let i = 0; i < s.length; i++) {
    let word = s[i].charCodeAt();

    if (word === 32) {
      a += String.fromCharCode(word);
    }
    if (word <= 90 && word > 32) {
      if (word + n > 90) {
        let e = word + n - 26;
        a += String.fromCharCode(e);
      } else {
        let b = s[i].charCodeAt() + n;
        a += String.fromCharCode(b);
      }
    }
    if (word >= 97 && word < 123) {
      if (word + n > 122) {
        let e = word + n - 26;
        a += String.fromCharCode(e);
      } else {
        let c = s[i].charCodeAt() + n;
        a += String.fromCharCode(c);
      }
    }
  }
  return a;
}
