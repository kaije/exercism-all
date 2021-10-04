/* 
  Alternate solution by bdjnk:
  Uses spread syntax to generate alphabet reference array and calls Array.every() 
  method to check if the string contains every letter.
  http://exercism.io/submissions/6fd7b01123b447618974b0200bd52323
*/

class Pangram {
  constructor(pangram) {
    this.pangram = pangram.toLowerCase();
  }

  isPangram() {
    return Boolean(this.pangram) &&
      [...'abcdefghijklmnopqrstuvwxyz'].every(letter =>
        this.pangram.includes(letter));
  }
}

export default Pangram;