const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let catsCounter = 0;
  matrix.forEach(element => {
    element.forEach(elem => {
      if (elem == "^^") {
        catsCounter +=1
      }
    });
  });
  return catsCounter;
};
