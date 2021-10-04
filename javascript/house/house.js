const nounPhrases = {
  1: { head: "house", postmodifier: "that Jack built" },
  2: { head: "malt", postmodifier: "that lay in" },
  3: { head: "rat", postmodifier: "that ate" },
  4: { head: "cat", postmodifier: "that killed" },
  5: { head: "dog", postmodifier: "that worried" },
  6: {
    head: "cow",
    description: "with the crumpled horn",
    postmodifier: "that tossed"
  },
  7: {
    head: "maiden",
    description: "all forlorn",
    postmodifier: "that milked"
  },
  8: {
    head: "man",
    description: "all tattered and torn",
    postmodifier: "that kissed"
  },
  9: {
    head: "priest",
    description: "all shaven and shorn",
    postmodifier: "that married"
  },
  10: {
    head: "rooster",
    description: "that crowed in the morn",
    postmodifier: "that woke"
  },
  11: {
    head: "farmer",
    description: "sowing his corn",
    postmodifier: "that kept"
  },
  12: {
    head: "horse and the hound and the horn",
    postmodifier: "that belonged to"
  }
};

class House {
  
  static verse(startVerse) {
    let lyrics = [];
    let line = "This is";
    for (let key = startVerse; key > 1; key--) {
      let phrase = nounPhrases[key];
      line = `${line} the ${phrase.head}${
        phrase.description ? " " + phrase.description : ""
      }`;
      lyrics.push(line);
      line = phrase.postmodifier;
    }
    lyrics.push(
      `${line} the ${nounPhrases[1].head} ${nounPhrases[1].postmodifier}.`
    );
    return lyrics;
  }

  static verses(startVerse, endVerse) {
    let lyrics = [];
    for (let key = startVerse; key <= endVerse; key++) {
      lyrics.push(...this.verse(key));
      key < endVerse ? lyrics.push("") : null;
    }
    return lyrics;
  }
}

export { House };
