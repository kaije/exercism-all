export default function score(word) {
  return word
    .split("")
    .map(letter => getLetterScore(letter))
    .reduce((sum, score) => sum + score, 0);
}

function getLetterScore(letter) {
  const letterScores = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  };

  const [score, letters] = Object.entries(letterScores).find(
    ([score, letters]) => letters.includes(letter.toUpperCase())
  );

  return parseInt(score);
}
