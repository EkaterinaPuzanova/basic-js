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
  constructor(machine = true) {
    
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.alphabet = alpha.map((x) => String.fromCharCode(x));
    
    this.ciphering = machine;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    let result = '';
    let arrKey = key.split('');

    while (arrKey.length < message.length) {
      arrKey = arrKey.concat(arrKey);  
    }

    for (let i = 0; i < message.length; i += 1) {
      if (this.alphabet.indexOf(message[i]) == -1) {
        arrKey.splice(i, 0, message[i] )
      }
    }
    arrKey.splice(message.length);

    for (let i = 0; i < message.length; i += 1) {
            
      if (this.alphabet.indexOf(message[i]) == -1) {
        result += message[i];
      } else {
        let n = this.alphabet.length;  //количество букв в алфавите
        let m = this.alphabet.indexOf(message[i]);//номер буквы открытого текста
        let k = this.alphabet.indexOf(arrKey[i]);//номер буквы ключа в алфавите
        let c = ( m + k ) % n; //шифрование Виженера
        result += this.alphabet[c];   
      };
    };  
    
    if (this.ciphering === true) {
      return result;
    } else {
      return result.split('').reverse().join('');
    };
    
  }
  
  decrypt(message, key) {
    
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    let result = '';
    let arrKey = key.split('');

    while (arrKey.length < message.length) {
      arrKey = arrKey.concat(arrKey);  
    }

    for (let i = 0; i < message.length; i += 1) {
      if (this.alphabet.indexOf(message[i]) == -1) {
        arrKey.splice(i, 0, message[i] )
      }
    }
    arrKey.splice(message.length);

    for (let i = 0; i < message.length; i += 1) {
            
      if (this.alphabet.indexOf(message[i]) == -1) {
        result += message[i];
      } else {
        let n = this.alphabet.length;  //количество букв в алфавите
        //let m = this.alphabet.indexOf(message[i]);//номер буквы открытого текста
        let k = this.alphabet.indexOf(arrKey[i]);//номер буквы ключа в алфавите
        let c = this.alphabet.indexOf(message[i]); //шифрование Виженера
        let m = (c - k) % n; //номер буквы открытого текста
        if (m < 0) {
          result += this.alphabet[n + m];
        } else {
          result += this.alphabet[m];
        }  
      };
    };  
    
    if (this.ciphering === true) {
      return result;
    } else {
      return result.split('').reverse().join('');
    };
  }
}

module.exports = {
  VigenereCipheringMachine
};
