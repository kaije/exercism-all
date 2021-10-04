export default function translate(rnaSequence) {
  const translations = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  }

  let protein = [];

  const codons = rnaSequence ? rnaSequence.match(/.{1,3}/g) : [];

  for (let i=0; i < codons.length; i++) {
    if (!Object.keys(translations).includes(codons[i])) {
      throw new Error('Invalid codon');
    }
    if (translations[codons[i]]==='STOP') {
      break;
    }
    protein.push(translations[codons[i]]);
  }

  return protein;
}