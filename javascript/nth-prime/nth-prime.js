export default class Prime {
  constructor() {}
  nth(n) {
    let currPrime = 2;
    let count = 1;
    while (count <= n) {
      this.findNextPrime(currPrime);
    }
    return currPrime;
  }

  findNextPrime(currPrime) {
    let candidate = currPrime + 1;
    

    return candidate;
  }

  sieve(n) {
    let candidates = [];
    for (let i = 2; i <= n; i++) {
      candidates.push(i);
    }
    
    let primes = [];
  }

}
