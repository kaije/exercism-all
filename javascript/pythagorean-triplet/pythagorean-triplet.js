export default class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  sum() {
    return this.a + this.b + this.c;
  }
  product() {
    return this.a * this.b * this.c;
  }
  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2;
  }
  static where(constraints) {
    let { maxFactor, minFactor = 3, sum } = constraints;
    let triplets = [];

    for (let b = minFactor + 1; b < maxFactor; b++) {
      for (let c = minFactor + 2; c <= maxFactor; c++) {
        let a = Math.sqrt(c * c - b * b);
        if (Number.isInteger(a) && a >= minFactor && a < b && b < c) {
          let triplet = new Triplet(a, b, c);
          if (!sum || sum === triplet.sum()) {
            triplets.push(triplet);
          }
        }
      }
    }
    return triplets;
  }
}
