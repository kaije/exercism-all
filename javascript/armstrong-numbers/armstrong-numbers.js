function validate(input) {
  const digits = input
    .toString()
    .split("")
    .map(digit => parseInt(digit));

  return input === digits.reduce(
    (sum, current) => sum + current ** digits.length,
    0
  );
}

export { validate };
