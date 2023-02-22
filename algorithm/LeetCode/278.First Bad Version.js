var solution = function (isBadVersion) {
  return function badReq(n) {
    let left = 0;
    let right = n;
    let mid;

    while (right - left > 1) {
      mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
    }
    return right;
  };
};
