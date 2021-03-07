const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let k = 0.693 / HALF_LIFE_PERIOD;
    if (typeof (sampleActivity) !== "string" || isNaN(sampleActivity) || sampleActivity > 15 || sampleActivity <= 0) {
        return false;
    }
    else {
        let out = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / k);
        return out;
    }
};
