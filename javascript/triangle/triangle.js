export default class Triangle {
  constructor(a, b, c) {
    this.sides = [a, b, c];
  }

  kind() {
    if (!this.isLegal()) {
      throw new Error();
    }

    const [a, b, c] = this.sides;

    return a === b && b === c
      ? "equilateral"
      : a === b || b === c || c === a
        ? "isosceles"
        : "scalene";
  }

  isLegal() {
    const [a, b, c] = this.sides;
    return (
      this.sides.every(side => side > 0) &&
      a + b >= c &&
      b + c >= a &&
      c + a >= b
    );
  }
}
