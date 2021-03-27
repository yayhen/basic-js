const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample( sampleActivity ) {
  //throw new CustomError('Not implemented');
  if (sampleActivity>0 && sampleActivity<=15 && (typeof sampleActivity === 'string')) {
    let logHueg = MODERN_ACTIVITY / sampleActivity;
    return Math.ceil(Math.log(logHueg) / (0.693 / HALF_LIFE_PERIOD));
  } else {
    return false
  }
  
};
