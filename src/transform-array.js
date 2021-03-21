const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (Array.isArray(arr)) {
    let arr1 = arr.slice();
    let discardNext = '--discard-next';
    let discardPrev = '--discard-prev';
    let doubleNext = '--double-next';
    let doublePrew = '--double-prev';
    if (arr1.indexOf(discardNext) != -1) {
      arr1.splice(arr1.indexOf(discardNext), (arr1.indexOf(discardNext)) + 1);
    }
    else if (arr1.indexOf(discardPrev) != -1) {
      if (arr1.indexOf(discardPrev) == 0) {
        arr1.splice(arr1.indexOf(discardPrev));
      } else {
        arr1.splice(arr1.indexOf(discardPrev) - 1);
      }
    }
    else if (arr1.indexOf(doubleNext) != -1) {
      arr1[arr1.indexOf(doubleNext)] = arr1[arr1.indexOf(doubleNext) + 1];
      // arr1.splice(arr1.indexOf(doubleNext));Q
    }
    else if (arr1.indexOf(doublePrew) != -1) {
      if (arr1.indexOf(doublePrew) == 0) {
        arr1.splice(arr1.indexOf(doublePrew));
      } else {
        arr1[arr1.indexOf(doublePrew)] = arr1[(arr1.indexOf(doublePrew)) - 1];
      }
      // arr1.splice(arr1.indexOf(doubleNext));
    }
    return arr1;

  } else return error();


};
