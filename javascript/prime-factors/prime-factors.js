export default class PrimeFactors {
  constructor() {}

  for(number) {
    return number === 1 ? [] : this.getPrimeFactors(number);
  }

  getPrimeFactors(number) {
    let divisor = 2;
    let remainder = number;
    let factors = [];

    while( remainder > 1 ) {
        if ( remainder%divisor === 0 ) {        
          factors.push(divisor);
          remainder /= divisor;
        } else {
          divisor++;
        }
    }
    return factors;
  }
}
