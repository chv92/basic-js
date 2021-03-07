const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let str = "";
  if (!Array.isArray(members)) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) === 'string') {
      let name = members[i].trim()
      str += name[0];
    }
  }


  return str.toUpperCase().split("").sort().join("");
};
