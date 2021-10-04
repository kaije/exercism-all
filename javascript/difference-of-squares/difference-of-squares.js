export default class Squares {
  constructor(num) {
    this.num = num;
    this.elements = [];
    this.setElements();
    this.squareOfSums = this.squareOfSums();
    this.sumOfSquares = this.sumOfSquares();
    this.difference = this.squareOfSums - this.sumOfSquares;
  }

  squareOfSums() {
    const total = this.elements.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return total ** 2;
  }

  sumOfSquares() {
    const squares = this.elements.map(element => element ** 2);
    return squares.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }

  setElements() {
    for (let i = 1; i <= this.num; i++) {
      this.elements.push(i);
    }
  }
}
