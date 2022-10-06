/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let fVal = s[0];
  let answer = [fVal]; // 비교를 위한 기준

  for (let i = 1; i < s.length; i++) {
    // 일치하면 삭제
    if (fVal === s[i]) {
      answer.pop();
      fVal = answer[answer.length - 1];
    } else {
      fVal = s[i];
      answer.push(fVal);
    }
  }
  // string으로 출력을 위한 join
  return answer.join("");
};
