export default class Words {
  constructor() {}

  count(str) {
    let counts = {};
    let words = str
      .trim()
      .split(/\s+|\n/gi)
      .map( word => word.toLowerCase() );

    words.forEach( word => counts.hasOwnProperty(word) ? counts[word]++ : counts[word] = 1);
    
    return counts;
  }
}