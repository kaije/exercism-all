export default class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(candidates) {
    return candidates.filter(candidate => this.isAnagram(candidate));
  }

  isAnagram(candidate) {
    return this.word.toLowerCase() === candidate.toLowerCase()
      ? false
      : this.sortLetters(this.word) === this.sortLetters(candidate);
  }

  sortLetters(word) {
    return Array.from(word.toLowerCase())
      .sort()
      .join("");
  }
}
