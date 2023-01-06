/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let result = "";
  s = s.split(" ");

  for (let i = 0; i <= k - 1; i++) {
    result = result + " " + s[i];
  }
  return result.trim();
};
