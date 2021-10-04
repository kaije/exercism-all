export default class PhoneNumber {
  constructor(formattedNumber) {
    this.formattedNumber = formattedNumber;
  }

  number() {
    const cleanedNumber = this.clean(this.formattedNumber);
    return this.isValid(cleanedNumber) ? cleanedNumber : null;
  }

  clean() {
    let cleanedNumber = this.formattedNumber.replace(/[^a-zA-Z0-9]|\s/g, "");
    cleanedNumber = this.removeCountryCd(cleanedNumber);
    return cleanedNumber;
  }

  removeCountryCd(number) {
    if (number.length === 11 && number.charAt(0) === "1") {
      return number.slice(1);
    }
    return number;
  }

  isValid(cleanedNumber) {
    return !cleanedNumber.match(/[a-zA-Z]/g) && cleanedNumber.length === 10;
  }
}
