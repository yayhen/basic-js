const CustomError = require("../extensions/custom-error");


module.exports = class DepthCalculator {
  maxDepth = 1;
  calculateDepth( arr, depth = 1 ) {
    //throw new CustomError('Not implemented');
    if (depth == 1) {
      this.maxDepth = 1;
    }
    arr.forEach((el,) => {
      if (Array.isArray(el)) {
        this.calculateDepth(el, depth + 1);
      }
    });
    if (depth > this.maxDepth) this.maxDepth = depth;
    return this.maxDepth;
  }
};