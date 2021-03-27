const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  //throw new CustomError('Not implemented');
  if (!date) return 'Unable to determine the time of year!';
  if (!date.toTimeString()) throw ':)';
  try {
    return getSeasonByMonth(date.getMonth());
  } catch (e) {
    throw e
  }
  
};

function getSeasonByMonth(month) {
  let arr = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  return arr[month];
}