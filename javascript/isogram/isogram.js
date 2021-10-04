export default class Isogram {
  constructor(word) {
    this.word = word;
  } 

  isIsogram() {
    const strippedWord = this.word
      .toLowerCase()
      .replace(/[^a-z]/g, '');
    
    const letterSet = new Set([...strippedWord]);

    return strippedWord.length === letterSet.size;
  }
}
