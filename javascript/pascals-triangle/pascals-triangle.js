export default class Triangle {
  constructor(numRows) {
    this.rows = [];
    let currRow = [];
    for (var i = 1; i <= numRows; i++) {
      this.rows.push(this.getNextRow(currRow));
      currRow = this.getLastRow();
    }
    this.lastRow = this.getLastRow();
  }
  
  getLastRow() {
    return this.rows[this.rows.length-1];
  } 

  getNextRow(currRow) {
    if (currRow.length === 0) {
      console.log(`returning [1]`);
      return [1];
    } else {
      let newRow = [];
      newRow.push(currRow[0]);
      for (var i = 0; i < currRow.length-1; i++) {
        newRow.push(currRow[i] + currRow[i+1]);
      }
      newRow.push(currRow[currRow.length-1]);
      return newRow;
    }
  }
}
