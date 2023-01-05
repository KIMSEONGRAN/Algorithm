/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let sum = 0;

  while (true) {
    if (n === 1) break;

    sum = sum + parseInt(n / 2);
    console.log("sum", sum);

    n = Math.ceil(n / 2);
    console.log("n", n);
  }
  return sum;
};
