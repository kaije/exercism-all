export default class School {
  constructor() {
    this.schoolRoster = {};
  }

  add(name, grade) {
    const childrenInGrade = this.schoolRoster[grade];
    if (childrenInGrade) {
      childrenInGrade.push(name);
      childrenInGrade.sort();
    } else {
      this.schoolRoster[grade] = [name];
    }
  }

  roster() {
    return this.deepCopy(this.schoolRoster);
  }

  grade(grade) {
    return this.schoolRoster[grade]
      ? this.schoolRoster[grade].slice()
      : [];
  }

  deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}