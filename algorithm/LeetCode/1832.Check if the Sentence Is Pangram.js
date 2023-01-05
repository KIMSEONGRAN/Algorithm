/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let temp = sentence.split("");
  let arr = [];
  let count = 97;

  for (let j = 0; j < temp.length; j++) {
    arr.push(temp[j].charCodeAt());
  }

  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (count === 123) break;

    if (!arr.includes(count)) {
      return false;
    }
    count++;
  }
  return true;
};
