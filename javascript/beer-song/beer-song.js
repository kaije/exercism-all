export default class Beer {

  static verse(bottles) {
    let firstLine;
    let secondLine;
    let state = this.state(bottles);
 
    firstLine = `${state.currentBottlesDesc} of beer on the wall, ${state.currentBottlesDesc.toLowerCase()} of beer.`;
    secondLine = `${state.actionDesc}, ${state.newBottlesDesc} of beer on the wall.`;

    return `${firstLine}\n${secondLine}\n`;
  }

  static state(bottles) {
    let state = {};
    
    switch (bottles) {
      case 0: 
        state.currentBottlesDesc = 'No more bottles';
        state.actionDesc = 'Go to the store and buy some more';
        state.newBottlesDesc = '99 bottles';
        break;
      case 1:
        state.currentBottlesDesc = '1 bottle';
        state.actionDesc = 'Take it down and pass it around';
        state.newBottlesDesc = 'no more bottles';
        break;
      default:
        state.currentBottlesDesc = `${bottles} bottles`;
        state.actionDesc = 'Take one down and pass it around';
        state.newBottlesDesc = `${bottles-1} ${bottles === 2 ? 'bottle' : 'bottles' }`;
    }

    return state;
  }

  static sing(start = 99, finish = 0) {
    let song = '';
    let bottles = start;    
    while (bottles >= finish) {
      song = `${song ? `${song}\n` : ''}${this.verse(bottles)}`;
      bottles--; 
    }
    return song;
  }
}