const vowels = ["a", "e", "i", "o", "u"];

let translator = {
  translate: word => {
    let firstLetter = word.charAt(0);
    if (vowels.includes(firstLetter)) {
      return `${word}ay`;
    } else {
      if (word.startsWith("ch")) {
        return `${word.slice(2)}chay`;
      } else if (word.startsWith("qu")) {
        return `${word.slice(2)}quay`;      
      } else {
        if (word.slice(1,3 )=== "qu") {
          return `${word.slice(3)}${word.slice(0,3)}ay`;
        } else {
          return `${word.slice(1)}${firstLetter}ay`;
        }
      }
    }
  }
};

export default translator;
