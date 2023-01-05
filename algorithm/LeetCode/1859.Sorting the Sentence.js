/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let map = new Map();
  const arr = s.split(" ");
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i][arr[i].length - 1];
    let word = arr[i].replace(num, "");
    map.set(num, word);
  }

  for (let i = 1; i <= arr.length; i++) {
    result = result + map.get(`${i}`) + " ";
  }
  return result.trim();
};
