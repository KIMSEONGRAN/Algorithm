/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let wordTwo = "";
  let wordOne = "";

  if (word2.length !== 1) {
    for (let i = 0; i < word2.length; i++) {
      wordTwo = wordTwo + word2[i];
    }
  } else {
    wordTwo = word2[0];
  }

  for (let i = 0; i < word1.length; i++) {
    wordOne = wordOne + word1[i];
  }

  for (let i = 0; i < word1.length; i++) {
    if (wordOne.length !== wordTwo.length) {
      return false;
    }
    if (!wordTwo.includes(word1[i])) {
      return false;
    }
  }
  return wordTwo === wordOne ? true : false;
};
