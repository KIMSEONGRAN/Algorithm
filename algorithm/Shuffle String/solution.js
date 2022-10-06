/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const maap = new Map();
  let result = "";
  let i = 0;

  while (true) {
    if (i === indices.length) {
      break;
    }

    maap.set(indices[i], s[i]);
    i++;
  }

  for (let j = 0; j < indices.length; j++) {
    result = result + maap.get(j);
  }

  return result;
};
