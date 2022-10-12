/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = s.split("");
  let tem = [];

  while (true) {
    if (arr.length === 0) {
      break;
    }

    if (
      arr[arr.length - 1] === ")" ||
      arr[arr.length - 1] === "}" ||
      arr[arr.length - 1] === "]"
    ) {
      tem.push(arr.pop());
    } else {
      if (arr[arr.length - 1] === "(" && tem[tem.length - 1] === ")") {
        tem.pop();
        arr.pop();
      } else if (arr[arr.length - 1] === "{" && tem[tem.length - 1] === "}") {
        tem.pop();
        arr.pop();
      } else if (arr[arr.length - 1] === "[" && tem[tem.length - 1] === "]") {
        tem.pop();
        arr.pop();
      } else {
        tem.push(arr.pop());
      }
    }
  }

  return tem.length === 0 ? true : false;
};
