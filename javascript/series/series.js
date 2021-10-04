export default class Series {
  constructor(num) {
    this.num = num;
    this.digits = this.getDigits(num);
  }

  slices(cnt) {
    if (cnt > this.num.length) {
      throw new Error("Slice size is too big.");
    }

    let slices = [];
    let remaining = this.num;
    while (remaining.length >= cnt) {
      slices.push(remaining.slice(0, cnt));
      remaining = remaining.slice(1);
    }

    return slices.map(slice => this.getDigits(slice));
  }

  getDigits(str) {
    return str.split("").map(item => parseInt(item));
  }
}
