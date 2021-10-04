class Transcriptor {
  constructor() {
    this.dnaToRna = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U'
    };
  }

  toRna(dna) {
    return dna
      .split('')
      .map((dnaNucleotide) => {
        const rnaNucleotide = this.dnaToRna[dnaNucleotide];
        if (!rnaNucleotide) {
          throw new Error('Invalid input DNA.');
        }
        return rnaNucleotide;
      })
      .join('');
  }
}

export default Transcriptor;
