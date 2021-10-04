export default class Flattener {
  constructor() {}
  flatten(arr) {
    let flattened = [];
    this.pushFlattened(flattened, arr);

    return flattened.filter(element => element !== null && !isNaN(element));
  }

  pushFlattened(arr, element) {
    if (!Array.isArray(element)) {
      arr.push(element);
    } else {
      element.forEach(item => {
        this.pushFlattened(arr, item);
      });
    }
  }
}
