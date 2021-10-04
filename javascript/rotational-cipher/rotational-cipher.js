export default class RotationalCipher {

  static rotate(plaintext, key) {
    if (key===0 || key===26) {
      return plaintext;
    }
    
    const plain = 'abcdefghijklmnopqrstuvwxyz';
    const cipher = [];

    for (let index of plain.split('').keys()) {
      cipher.push(plain[(index + key) % 26]);
    }

    return plaintext.split('')
      .map(letter => letter.match(/[^a-zA-Z]/) ? letter :
        letter.match(/[A-Z]/) ? cipher[plain.indexOf(letter.toLowerCase())].toUpperCase() : 
        cipher[plain.indexOf(letter)]
      )
      .join('');
  }
}
