function steps(num) {
  let n = num;
  let stepCnt = 0;

  if (n <= 0) {
    throw new Error("Only positive numbers are allowed");
  }

  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    stepCnt++;
  }

  return stepCnt;
}

export { steps };
