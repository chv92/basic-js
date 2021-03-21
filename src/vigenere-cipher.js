const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    function isLetter(message) {
      return message.length === 1 && message.match(/[a-zA-Z]/i)
    }

    function isUpperCase(character) {
      if (character === character.toUpperCase()) {
        return true
      }
      if (character === character.toLowerCase()) {
        return false
      }
    }

    let result = ''

    for (let i = 0, j = 0; i < message.length; i++) {
      let c = message.charAt(i)
      if (isLetter(c)) {
        if (isUpperCase(c)) {
          result += String.fromCharCode((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65)
          // A: 65
        } else {
          result += String.fromCharCode((c.charCodeAt(0) + key.charCodeAt(j) - 2 * 97) % 26 + 97).toUpperCase();
          // a: 97
        }
        j = ++j % key.length;
      }
      else {
        result += c;
      }
    }
    return result;
  }

  decrypt(encryptedMessage, key) {
    function isLetter(encryptedMessage) {
      return encryptedMessage.length === 1 && encryptedMessage.match(/[a-zA-Z]/i)
    }
    function isUpperCase(character) {
      if (character === character.toUpperCase()) {
        return true;
      }
      if (character === character.toLowerCase()) {
        return false;
      }
    }

    let result = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const c = encryptedMessage.charAt(i)
      if (isLetter(c)) {
        if (isUpperCase(c)) {
          result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
        } else {
          result += String.fromCharCode(122 - (25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
        }
        j = ++j % key.length;
      } else {
        result += c
      }
    }
    return result;
  }
}
module.exports = VigenereCipheringMachine;
