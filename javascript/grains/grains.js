import BigInt from "./lib/big-integer";

export default class Grains {
  constructor() {}
  bigInt(id) {
    return BigInt(2).pow(id - 1);
  }
  square(id) {
    return this.bigInt(id).toString();
  }
  total() {
    let id = 1;
    let total = 0;
    while (id <= 64) {
      total = BigInt(total).add(this.bigInt(id));
      id++;
    }
    return total.toString();
  }
}
