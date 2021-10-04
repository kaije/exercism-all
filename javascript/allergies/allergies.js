const scores = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
};

export default class Allergies {
  constructor(score) {
    this.score = score;
  }
  list() {
    let allergies = [];

    if (this.score > 0) {
      for (let item in scores) {
        if (this.score & scores[item]) {
          allergies.push(item);
        }
      }
    }

    return allergies;
  }
  allergicTo(item) {
    return this.list().includes(item);
  }
}
