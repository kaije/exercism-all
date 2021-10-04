let usedNames =  new Set();

export default class Robot {
  constructor() {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.setName();
  }

  get name() {
    return this._name;
  }

  reset() {
    this.setName();  
  }

  setName() {
    let newName = this.generateName();
    
    if (usedNames.has(newName)) {
      this.setName();
    } else {
      this._name = newName;
      usedNames.add(newName);
    }
  }

  generateName() {
    return `${this.randomLetter()}${this.randomLetter()}${this.randomDigits()}`;
  }

  randomLetter() {
    return this.alphabet[this.getRandomIntInclusive(0, 25)];
  }

  randomDigits() {
    return this.getRandomIntInclusive(0, 999)
    .toString()
    .padStart(3, 0);
  }

  getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}