const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  //throw new CustomError('Not implemented');
  let flag = false;
  let newArr = [];
  //let reservArr = arr.slice();
  arr.forEach((element, ind) => {
    if(element == '--discard-next') {
      flag = true;
      return;
      //reservArr.splice(ind+1, 1);
    }
    if(element == '--discard-prev') {
      if (newArr.length != 0 && arr[ind-2] != '--discard-next') newArr.pop();
      //newArr.pop();
      return;
      //reservArr.splice(ind-1, 1);
    }
    if(element == '--double-next') {
      if (arr[ind+1] != undefined) newArr.push(arr[ind+1]);
      return;
      //reservArr[ind] = arr[ind+1];
    }
    if(element == '--double-prev') {
      //reservArr[ind] = arr[ind-1];
      if(arr[ind-1] != undefined && arr[ind-2] != '--discard-next') newArr.push(arr[ind-1]);
      return;
    }
    if(flag == false){ newArr.push(element)} else flag=false;
  });
  return newArr;
};
