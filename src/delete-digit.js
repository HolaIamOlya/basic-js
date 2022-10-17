const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString();
  for (let i = 0; i < n; i++) {
    if (n[i] < n[i + 1]) {
      return +n.replace(n[i], '');
    }
  }
  return Number(n.toString().slice(0, n.toString().length - 1));
}

module.exports = {
  deleteDigit
};
