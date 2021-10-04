function solve(puzzle) {
  let letters = [...new Set(puzzle.match(/[A-Z]/g))];
  let temp = letters.map( letter => [letter, null]);
  let mappings = {};
  let possible = [1,2,3,4,5,6,7,8,9];
  let remaining = [];
  let leftOperand = puzzle.match(/[A-Z]+(?= +)/);
  let rightOperand = puzzle.match(/([A-Z]+)( ==)/)[1];
  let sum = puzzle.match(/== ([A-Z]+)/)[1];

  console.log(`leftOperand=${leftOperand}`);
  console.log(`rightOperand=${rightOperand}`);
  console.log(`sum=${sum}`);

  if (leftOperand !== rightOperand && leftOperand.length == 1 && rightOperand.length == 1) {
    return null;
  }

  temp.forEach( ([letter, value]) => mappings[letter] = value );

  console.log(mappings);

  mappings = {
    I: 1,
    B: 9,
    L: 0
  };

  return mappings;
}

export { solve }
