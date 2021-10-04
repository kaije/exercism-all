class Sieve {
  constructor(limit) {
    this.primes = this.findPrimes(limit);
  }

  findPrimes(limit) {
    if (limit < 2) {
      return [];
    }

    let candidates = Array.from({ length: limit + 1 }, (v, i) => i).filter(
      val => val > 1
    );

    let p = 2;

    while (p <= limit) {
      candidates = candidates.filter(
        candidate => candidate <= p || candidate % p !== 0
      );
      p = candidates.find(candidate => candidate > p);
    }
    return candidates;
  }
}

export default Sieve;
