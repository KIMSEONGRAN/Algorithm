/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  n = String(n);
  let multi = 0;
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    if (i === 0) {
      multi = n[i];
      sum = n[i];
    } else {
      multi *= n[i];
      sum = Number(sum) + Number(n[i]);
    }
  }
  return multi - sum;
};
