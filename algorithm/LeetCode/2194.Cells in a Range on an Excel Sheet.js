/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const word = s.split("");
  let lengthMax = 0;
  let lengthMin = 9;
  let min = 90;
  let max = 0;
  let result = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) {
      max = Math.max(word[i].charCodeAt(0), max);
      min = Math.min(word[i].charCodeAt(0), min);
    }

    if (!isNaN(parseInt(word[i]))) {
      lengthMax = Math.max(word[i], lengthMax);
      lengthMin = Math.min(word[i], lengthMin);
    }
  }

  for (let i = min; i <= max; i++) {
    for (let j = lengthMin; j <= lengthMax; j++) {
      let words = "";
      words = String.fromCharCode(i) + j;
      result.push(words);
    }
  }
  return result;
};
