const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr : [],

  getLength() {
    //throw new CustomError('Not implemented');
    return this.chainArr.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    this.chainArr.push(String(value));
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    if (!this.chainArr[position-1]) {
      this.chainArr.length = 0;
      throw "THROWN";
    }
    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    let copiedArr = this.chainArr.slice();
    this.chainArr.length = 0;
    return '( ' + copiedArr.join(' )~~( ') + ' )';
  }
};

module.exports = chainMaker;
