class Cipher {
  constructor(key) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');   
    this.key = key ? this.validateKey(key) : this.getRandomKey();
    this.keyArray = this.key.split('');    
  }

  encode(text) { 
    let newKey = this.getKeyInstance(text);
    let newKeyArray = newKey.split('');
    /* for each letter in the text, add the index of the corresponding letter in the key to the
    index of the original letter, and return the letter at the resulting index */
    return text
      .split('')
      .map((letter, index) => this.alphabet[(this.alphabet.indexOf(letter) + this.alphabet.indexOf(newKeyArray[index])) % (this.alphabet.length)])
      .join('');
  }

  decode(text) {
    /* for each letter in the text, subtract the index of the corresponding letter in the key
    from the index of the encoded letter, and return the letter at the resulting index */
    return text
      .split('')
      .map((letter, index) => {
        let decodeIndex = (this.alphabet.indexOf(letter) - this.alphabet.indexOf(this.keyArray[index]));
        // if the index is negative, wrap around (e.g. -1 becomes 25)
        decodeIndex = decodeIndex < 0 ? ((this.alphabet.length) + decodeIndex) : decodeIndex;
        return this.alphabet[decodeIndex];
      })
      .join('');
  }

  getKeyInstance(text) {
    /* if the text is longer than the key, generate a new key by repeating the key enough times to make it longer than the text */
    return ((text.length > this.key.length) ? this.key.repeat(Math.ceil(text.length/this.key.length)) : this.key);
  }

  getRandomKey() {
    let randomKey = [];    
    for (var i=0; i < 100; i++) {
      randomKey.push(this.alphabet[this.getRandomIndex()]);
    }
    return randomKey.join('');
  }

  getRandomIndex() {
    return Math.floor(Math.random() * 25);
  }

  validateKey(key) {
    let regex = /^[a-z]+$/;
    if (regex.test(key)) {
      return key;
    } else {
      throw new Error('Bad key');      
    }    
  }
}

export default Cipher;