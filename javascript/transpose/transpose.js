export default function transpose(input) {
  if (input.length === 0) {
    return [];
  }

  // find the longest string and pad all strings with spaces to match length
  let maxLength = input.reduce((a, b) => (a.length > b.length ? a : b)).length;

  // pad any elements shorter than the longest string with spaces to the right so all elements are of equal length
  const mapped = input.map(element => element.padEnd(maxLength));

  const split = mapped.map(element => element.split(""));

  let cols = [];

  for (let i = 0; i < maxLength; i++) {
    for (let j = 1; j < split.length; j++) {
      cols.push(split[0][i] + split[j][i]);
    }
  }

  return cols;
}
