interface dnaToRna {
  [dnaNucleotide: string]: string
}

const conversions: dnaToRna = {
  C: 'G',
  G: 'C',
  A: 'U',
  T: 'A'
}

class Transcriptor {
  toRna(dnaStrand: string) {
    return dnaStrand.split('').map(
      (nucleotide: string) => this.convertNucleotide(nucleotide)
    ).join('');
  }
  convertNucleotide(dnaNucleotide: string): string {
    if (!conversions[dnaNucleotide]) {
      throw new Error("Invalid input DNA.");
    }
    return conversions[dnaNucleotide];
  }
}

export default Transcriptor
