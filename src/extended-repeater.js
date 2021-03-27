const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  //throw new CustomError('Not implemented');
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  let addition = options.addition ? options.addition : '';
  if(options.addition == false) {
    addition = false;
  }
  if(options.addition === null) {
    addition = null;
  }

  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  return addSeparatorNTimes(str + addSeparatorNTimes(addition, additionSeparator, additionRepeatTimes), separator, repeatTimes)
};

function addSeparatorNTimes(str, sep, n) {
  return (str + sep).repeat(n).slice(0, (-1)*(sep.length));
}
  