const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool) {
    this.isReverse = bool;
  }
  
  encrypt(message, key, decrypt = false) {

    if (!key || !message) throw Error("Incorrect arguments!");

    let keyArr = [];
    for (let c of key.toUpperCase()) 
      keyArr.push(c.codePointAt(0));

    let res = "";
    let i = 0;
    let codeNew = "";
    for (let c of message.toUpperCase()) {
      const code = c.codePointAt(0);
      if (code >= 65 && code <= 90){
        if (decrypt) {
          codeNew = code - keyArr[i] + 130;
        } else {
          codeNew = code + keyArr[i] - 130;
        }
        res += String.fromCharCode(codeNew % 26 + 65);
        i++;
        if (i >= keyArr.length) i = 0;
      } else res += c;
    }

    if (this.isReverse === false) return res.split('').reverse().join('');
    return res;

  }

  decrypt(message, key) {
		return this.encrypt(message, key, true);
  }

}

module.exports = {
  VigenereCipheringMachine
};
