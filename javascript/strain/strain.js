class Strain {
  constructor() {}
  keep(arr, f) {
    return arr.filter(f);
  }
  discard(arr, f) {
    let matched = arr.filter(f);
    return arr.filter(element => !matched.includes(element));
  }
}

let strain = new Strain();

export default strain;
