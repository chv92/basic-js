const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {


  season = date.getUTCMonth();

  if (season == '0' || season == '1' || season == '11') {
    return 'winter'
  }
  if (season >= '2' && season <= '4') {
    return 'spring';
  }

  if (season >= 5 && season <= 7) {
    return 'summer';
  }

  if (season >= 8 && season <= 10) {
    return "fall"
  }
};
