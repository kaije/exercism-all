class Pangram {
  constructor(testString) {
    this.string = testString;
  }

  isPangram() {
    const strippedString =
      this.string
        .toLowerCase()
        .replace(/[^a-z]/g, '');

    const letterSet = new Set([...strippedString]);

    return letterSet.size === 26;
  }

}

export default Pangram;
