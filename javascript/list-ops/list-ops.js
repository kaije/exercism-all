export default class List {
  constructor(members) {
    this.values = members || [];
   }

  append(list) { 
    if (list.values.length > 0) {   
      this.values = [...this.values, ...list.values];
    }
    return this;
  }

  concat(list) {
    return this.append(list);
  }

  filter(callback) {
    let filtered = [];
    for (let i = 0; i < this.values.length; i++) {
      if (callback(this.values[i])) {
        filtered.push(this.values[i]);
      }
    }
    return new List(filtered);
  }

  length() {
    return this.values.length;
  }

  map(callback) {
    let mapped = [];
    for (let i = 0; i < this.values.length; i++) {
        mapped.push(callback(this.values[i]));
    }
    return new List(mapped);
  }

  foldl(callback, initialVal) {
    let acc = initialVal;
    for (let i = 0; i < this.values.length; i++) {
      acc = callback(acc, this.values[i]);
    }    
    return acc;
  }

  foldr(callback, initialVal) {
    let acc = initialVal;
    if (this.values.length > 0) {
      for (let i = this.values.length-1; i >= 0; i--) {
        acc = callback(acc, this.values[i]);
      }    
    }
    return acc;
  }

  reverse() {
    let reversed = [];
    for (let i = 0; i < this.values.length; i++) {
      reversed.unshift(this.values[i]);
    }    
    return new List(reversed);
  }
}