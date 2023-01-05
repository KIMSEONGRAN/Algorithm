/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  const re = command.replaceAll("()", "o");
  const result = re.replaceAll("(al)", "al");
  return result;
};
