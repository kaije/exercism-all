export default class Binary {
  constructor(binaryString) {
    this.binaryString = binaryString;
    this.inputValid = /^[01]+$/.test(this.binaryString);
  }

  toDecimal() {
    return this.inputValid ? this.convert() : 0;
  }

  convert() {
    return this.binaryString
      .split('')
      .reverse()
      .map( (value, index) => value * 2**index)
      .reduce( (sum, digit) => sum + digit);
  }
}
