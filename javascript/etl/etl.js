export default function transform(oldScores) {
  let newScores = {};

  for (const [score, letters] of Object.entries(oldScores)) {
    letters.forEach(
      letter => (newScores[letter.toLowerCase()] = parseInt(score))
    );
  }

  return newScores;
}
