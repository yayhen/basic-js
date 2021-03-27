const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  mode = true;

  constructor(mode=true) {
    this.mode = mode;
  }

  encrypt( message, password) {
    let numberOfSpaces = 0;
    //throw new CustomError('Not implemented');
    //console.log('message: ', message);
    //console.log('password: ', password);
    let mes = message.toUpperCase();
    let pas = password.toUpperCase();
    let mesArr = mes.split('');
    let pasArr = pas.split('');
    //console.log('mesArr: ', mesArr);
    //console.log('pasArr: ', pasArr);

    let mesNumbArr = mesArr.map(itm => {
      return this.charToNumber(itm);
    })
    //console.log('mesNumbArr: ', mesNumbArr);
    let pasNumbArr = pasArr.map(itm => {
      return this.charToNumber(itm);
    })
    //console.log('pasNumbArr: ', pasNumbArr);
    do {
      pasNumbArr = pasNumbArr.concat(pasNumbArr);
    } while (pasNumbArr.length < mesNumbArr.length);
    //console.log('pasNumbArr2: ', pasNumbArr);
    let encryptMessage = mesNumbArr.map((element, ind) => {
      if (element == 32) numberOfSpaces++;
      if((element >= 65) && (element <= 90) && (pasNumbArr[ind-numberOfSpaces] >= 65) && (pasNumbArr[ind-numberOfSpaces] <= 90)) {
        return String.fromCharCode((element + (pasNumbArr[ind-numberOfSpaces]-65) <= 90) ? element + (pasNumbArr[ind-numberOfSpaces]-65) : element + (pasNumbArr[ind-numberOfSpaces]-65) -26);
      } else {
        return String.fromCharCode(element);
      }
    });
    //console.log('return: ', encryptMessage);
    if(this.mode) {return encryptMessage.join('')} else {return encryptMessage.reverse().join('');}
  }    
  decrypt(message, password) {
    //throw new CustomError('Not implemented');
    let numberOfSpaces = 0;
    let mes = message.toUpperCase();
    let pas = password.toUpperCase();
    let mesArr = mes.split('');
    let pasArr = pas.split('');
    let mesNumbArr = mesArr.map(itm => {
      return this.charToNumber(itm);
    })
    let pasNumbArr = pasArr.map(itm => {
      return this.charToNumber(itm);
    })
    do {
      pasNumbArr = pasNumbArr.concat(pasNumbArr);
    } while (pasNumbArr.length < mesNumbArr.length);

    let encryptMessage = mesNumbArr.map((element, ind) => {
      if (element == 32) numberOfSpaces++;
      if((element >= 65) && (element <= 90) && (pasNumbArr[ind-numberOfSpaces] >= 65) && (pasNumbArr[ind-numberOfSpaces] <= 90)) {
        return String.fromCharCode((element - (pasNumbArr[ind-numberOfSpaces]-65) >=65) ? element - (pasNumbArr[ind-numberOfSpaces]-65) : element - (pasNumbArr[ind-numberOfSpaces]-65) + 26);
      } else {
        return String.fromCharCode(element);
      }
    });
   if(this.mode) {return encryptMessage.join('')} else {return encryptMessage.reverse().join('');}
  }

  charToNumber(chr) {
    return chr.charCodeAt(0);
  }
}

module.exports = VigenereCipheringMachine;
