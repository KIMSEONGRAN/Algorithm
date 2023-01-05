/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    switch (ruleKey) {
      case "color":
        items[i][1] === ruleValue ? count++ : count;
        break;
      case "type":
        items[i][0] === ruleValue ? count++ : count;
        break;
      default:
        items[i][2] === ruleValue ? count++ : count;
        break;
    }
  }
  return count;
};
