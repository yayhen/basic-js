const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (! Array.isArray(members)) return false;
  let firstLetters = [];
  members.forEach(element => {
    if (typeof element === 'string') {
      element = element.trim();
      firstLetters.push(element[0].toUpperCase());
    }
  });
  firstLetters = firstLetters.sort();
  let secretWord = firstLetters.join('');
  return secretWord;
};


