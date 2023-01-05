/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let X = 0;
  let sum = 0;
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "--X":
        X = X - 1;
        break;

      case "X++":
        X = X + 1;
        break;

      case "++X":
        X = X + 1;
        break;

      case "X--":
        X = X - 1;
        break;
    }
  }
  return X;
};
