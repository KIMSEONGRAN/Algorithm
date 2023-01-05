/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let result;
  for (let i = 0; i < sentences.length; i++) {
    let arr = sentences[i].split(" ").length;
    if (i === 0) {
      result = arr;
    }
    result = Math.max(arr, result);
  }
  return result;
};
