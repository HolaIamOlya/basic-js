const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const winter = [0, 1, 11];
  const spring = [2, 3, 4];
  const summer = [5, 6, 7];
  const autumn = [8, 9, 10];
  if (!date) {
    return "Unable to determine the time of year!";
  } else if (!Date.parse(date) || typeof new Date(date).valueOf() !== 'number') {
    throw new Error("Invalid date!");
  } else if (winter.includes(date.getMonth())) {
    return "winter";
  } else if (spring.includes(date.getMonth())) {
    return "spring";
  } else if (summer.includes(date.getMonth())) {
    return "summer";
  } else if (autumn.includes(date.getMonth())) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
